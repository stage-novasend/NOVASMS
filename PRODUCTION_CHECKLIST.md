# NovaSMS — Checklist de mise en production

> Toutes les bascules se font dans **`apps/backend/.env`** (backend) et **`apps/frontend/.env`** (frontend), jamais dans le code — voir `memoire/05_Configuration_Providers_Operateurs.pdf` pour le détail du pattern Strategy/Factory. Après toute modification d'un `.env`, **redémarrer le processus** concerné (les factories lisent les variables uniquement au démarrage).

Cochez au fur et à mesure. "Vérification" indique comment confirmer que ça fonctionne réellement (beaucoup de canaux n'ont **pas** de health-check automatique — précisé à chaque fois).

---

## 1. SMS

- [ ] Compte NovaSend SMS (ou Twilio / Africa's Talking) actif
- [ ] `apps/backend/.env` :
  ```bash
  SMS_PROVIDER=novasend
  NOVASEND_SMS_API_KEY=ns_sms_xxxxxxxxxxxxxxxxxxxx
  NOVASEND_SMS_SENDER_ID=NovaSMS
  NOVASEND_SMS_BASE_URL=https://api.novasend.io/v1
  ```
- [ ] ⚠️ **Sender ID pré-approuvé par le régulateur télécom** du pays cible (ARTCI en Côte d'Ivoire, etc.) — sans ça, les SMS sont rejetés silencieusement par les opérateurs
- [ ] Vérification : `GET /campaigns/providers/health` → `sms.primary` doit afficher `novasend` avec `novasendConfigured: true`. Envoyer un SMS de test réel et vérifier la réception.

## 2. Mobile Money

- [x] `apps/backend/.env` — clés NovaSend MM intégrées (2026-07-24), `MOBILE_MONEY_PROVIDER=novasend`. ⚠️ `NOVASEND_MM_BASE_URL` était configuré par erreur sur l'URL de l'API SMS — corrigé vers `https://business.novasend.app/v1`. Redémarrage du backend requis (`nest start --watch` ne recharge pas les `.env`).
  ```bash
  MOBILE_MONEY_PROVIDER=novasend
  NOVASEND_MM_API_KEY=ns_mm_xxxxxxxxxxxxxxxxxxxx
  NOVASEND_MM_API_CLIENT=xxxxxxxxxxxxxxxxxxxxxxxx
  NOVASEND_MM_BASE_URL=https://business.novasend.app/v1
  ```
- [ ] ⚠️ **Pas de health-check exposé** (`PaymentProviderFactory.getHealthStatus()` n'est appelé par aucun contrôleur). Vérification uniquement manuelle : faire une vraie recharge de petit montant depuis la page Rechargement et confirmer dans les logs backend la ligne `[NovaSendMobileMoneyProvider] NovaSend payin initiated — ref=... status=...` (et non plus `[SimulationVisaProvider]`/simulation)
- [ ] ⚠️ **Aucun webhook NovaSend** — la confirmation repose uniquement sur le polling frontend (`GET /mobile-money/:id/status`, 3s pendant 2 min max). Risque de fiabilité connu, pas bloquant pour lancer.

## 3. Carte bancaire (Stripe)

- [ ] Compte Stripe **activé** (vérification KYB entreprise validée — sinon pas de clé `sk_live_`)
- [ ] `apps/backend/.env` :
  ```bash
  VISA_PROVIDER=stripe
  STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxx
  ```
- [ ] ⚠️ Pas de health-check exposé non plus. Vérification manuelle : recharge test avec une vraie carte, contrôle dans le dashboard Stripe.

## 4. Email (Resend) — actuellement en staging

- [ ] Domaine d'envoi **vérifié** dans le dashboard Resend (enregistrements DNS SPF + DKIM ajoutés chez le registrar du domaine) — **c'est très probablement pourquoi c'est encore en mode staging** : sans domaine vérifié, Resend restreint l'envoi à l'adresse email du compte (sandbox `onboarding@resend.dev`)
- [ ] `apps/backend/.env` :
  ```bash
  EMAIL_PROVIDER=resend
  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
  RESEND_FROM=NovaSMS <no-reply@votredomaine.com>
  RESEND_TEST_RECIPIENT=
  ```
- [ ] ⚠️ **`RESEND_TEST_RECIPIENT` doit être vide en prod** — si une valeur y reste, TOUS les emails (y compris ceux des vrais clients) sont redirigés vers cette seule adresse
- [ ] (Optionnel) Configurer `BREVO_API_KEY` en secondaire pour activer le failover automatique Resend → Brevo
- [ ] Vérification : `GET /campaigns/providers/health` → `email.primary: "resend"`, `resendConfigured: true`. Envoyer un email réel (ex. inscription) et vérifier la réception hors boîte de test.

## 5. WhatsApp (Twilio)

- [ ] Numéro WhatsApp Business **approuvé par Meta** (délai de validation possible, plusieurs jours)
- [ ] `apps/backend/.env` :
  ```bash
  WHATSAPP_PROVIDER=twilio
  TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  TWILIO_WHATSAPP_FROM=whatsapp:+xxxxxxxxxxxx
  ```
- [ ] Rappel produit : le canal WhatsApp n'est utilisable aujourd'hui que dans les **automatisations**, pas dans le wizard de création de campagne classique.

## 6. Stockage des images de campagne (S3)

- [ ] Bucket AWS S3 réel créé + utilisateur IAM dédié (accès restreint à ce bucket)
- [ ] `apps/backend/.env` :
  ```bash
  CAMPAIGN_IMAGE_STORAGE_PROVIDER=s3
  CAMPAIGN_IMAGE_BUCKET=novasms-campaign-images-prod
  CAMPAIGN_IMAGE_PUBLIC_BASE_URL=https://novasms-campaign-images-prod.s3.eu-west-3.amazonaws.com
  CAMPAIGN_IMAGE_S3_REGION=eu-west-3
  CAMPAIGN_IMAGE_S3_ACCESS_KEY_ID=AKIAXXXXXXXXXXXXXXXX
  CAMPAIGN_IMAGE_S3_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE=false
  S3_ENDPOINT=
  CAMPAIGN_IMAGE_S3_ENDPOINT=
  ```
  (remplace la config MinIO locale actuelle)

## 7. Push notifications — à ignorer sauf besoin explicite

- [ ] Non branché au produit à ce jour (code + tests existent mais aucun module ne l'utilise). Ne pas prioriser pour le lancement.

## 8. Frontend (`apps/frontend/.env`)

- [ ] `VITE_API_BASE_URL=https://api.votre-domaine.com/api` (remplace `localhost:3000`)
- [ ] `VITE_APP_ENV=production`
- [ ] ⚠️ **`VITE_IS_STAGING=false`** — sinon les badges "Simulation" restent affichés sur SMS/Mobile Money/Visa même une fois les vraies clés branchées côté backend

## 9. Sécurité & infrastructure (pas des API, mais bloquant)

- [ ] `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` : secrets forts générés (`openssl rand -base64 48`), différents des valeurs de dev, jamais réutilisés
- [ ] `DATABASE_URL` : instance PostgreSQL managée de production (pas le conteneur Docker local)
- [ ] `REDIS_URL` : instance Redis managée de production (les 5 files BullMQ en dépendent : campaign-dispatch, campaign-schedule, import-contacts, automation-execute, segment-recalculation)
- [ ] `FRONTEND_URL` (backend) : domaine réel du frontend déployé — utilisé dans les liens de tracking (pixel/clics) et les redirections de paiement NovaSend (`successUrl`/`failureUrl`)
- [ ] `NODE_ENV=production`
- [ ] `.env` jamais commité, secrets injectés via le gestionnaire de secrets de l'hébergeur (pas en clair dans un fichier versionné)

## 10. Après bascule — tests de non-régression à rejouer

- [ ] `npm run test` (backend) — corriger au préalable les 2 tests en échec de `templates.controller.spec.ts` (voir `memoire/04_Resultats_Bilan_Limites.pdf`, chapitre 2)
- [ ] `npx playwright test` (e2e) — 45 scénarios, doivent rester à 100 %
- [ ] Corriger le bug de build frontend (`AutomationTrigger` manquant pour "birthday") avant tout déploiement — `npm run build` échoue actuellement sur `apps/frontend` (détail : `memoire/04_Resultats_Bilan_Limites.pdf`, chapitre 7)
