# Variables d'environnement — Production NovaSMS

> **Règle absolue** : ne jamais versionner `.env`. Copier `.env.example` → `.env` et remplir les valeurs.

---

## BACKEND — `apps/backend/.env`

### Application

| Variable       | Valeur prod              | Obligatoire | Description                                    |
| -------------- | ------------------------ | ----------- | ---------------------------------------------- |
| `NODE_ENV`     | `production`             | ✅          | Active les optimisations Node.js               |
| `PORT`         | `3000`                   | ✅          | Port d'écoute du backend                       |
| `FRONTEND_URL` | `https://app.novasms.ci` | ✅          | Utilisé pour CORS et les liens dans les emails |

---

### Base de données

| Variable       | Valeur prod                                                 | Obligatoire | Description             |
| -------------- | ----------------------------------------------------------- | ----------- | ----------------------- |
| `DATABASE_URL` | `postgresql://user:pass@host:5432/novasms_db?schema=public` | ✅          | URL PostgreSQL complète |

---

### Redis / BullMQ

| Variable    | Valeur prod                   | Obligatoire | Description                                |
| ----------- | ----------------------------- | ----------- | ------------------------------------------ |
| `REDIS_URL` | `redis://:password@host:6379` | ✅          | Utilisé par BullMQ pour les queues d'envoi |

---

### JWT — Authentification

| Variable                 | Valeur prod                                | Obligatoire | Description                        |
| ------------------------ | ------------------------------------------ | ----------- | ---------------------------------- |
| `JWT_ACCESS_SECRET`      | chaîne aléatoire ≥ 64 chars                | ✅          | Secret pour les access tokens (8h) |
| `JWT_ACCESS_EXPIRATION`  | `8h`                                       | ✅          | Durée de vie access token          |
| `JWT_REFRESH_SECRET`     | chaîne aléatoire ≥ 64 chars **différente** | ✅          | Secret pour les refresh tokens     |
| `JWT_REFRESH_EXPIRATION` | `30d`                                      | ✅          | Durée de vie refresh token         |

> Générer avec : `openssl rand -base64 64`

---

### Tracking email — Ouvertures & Clics

| Variable            | Valeur prod              | Obligatoire     | Description                                                                                                     |
| ------------------- | ------------------------ | --------------- | --------------------------------------------------------------------------------------------------------------- |
| `TRACKING_BASE_URL` | `https://api.novasms.ci` | ✅ **CRITIQUE** | URL publique du backend. Sans ça, tous les pixels de tracking pointent vers localhost et ne fonctionnent jamais |

> **Sans cette variable**, les statistiques d'ouverture et de clic des campagnes email sont toutes à zéro.  
> En dev local avec ngrok : `TRACKING_BASE_URL=https://xxxx.ngrok-free.app/api`

---

### Email

| Variable                | Valeur prod                     | Obligatoire | Description                                                               |
| ----------------------- | ------------------------------- | ----------- | ------------------------------------------------------------------------- |
| `EMAIL_PROVIDER`        | `resend` ou `brevo`             | ✅          | `mock` = aucun envoi réel — jamais en prod                                |
| `RESEND_API_KEY`        | `re_xxxxx`                      | Si `resend` | Clé API Resend                                                            |
| `RESEND_FROM`           | `NovaSMS <no-reply@novasms.ci>` | Si `resend` | Expéditeur (domaine vérifié sur Resend)                                   |
| `RESEND_TEST_RECIPIENT` | laisser **vide**                | —           | Si rempli, redirige TOUS les emails vers cette adresse (debug uniquement) |
| `BREVO_API_KEY`         | `xkeysib-xxxxx`                 | Si `brevo`  | Clé API Brevo                                                             |
| `BREVO_FROM_EMAIL`      | `no-reply@novasms.ci`           | Si `brevo`  | Adresse expéditeur                                                        |
| `BREVO_FROM_NAME`       | `NovaSMS`                       | Si `brevo`  | Nom expéditeur                                                            |

> **Recommandation** : `EMAIL_PROVIDER=resend` avec domaine `novasms.ci` vérifié sur le dashboard Resend.

---

### SMS

| Variable                   | Valeur prod                  | Obligatoire         | Description                                            |
| -------------------------- | ---------------------------- | ------------------- | ------------------------------------------------------ |
| `SMS_PROVIDER`             | `novasend`                   | ✅                  | `simulation` = logs console seulement — jamais en prod |
| `NOVASEND_SMS_API_KEY`     | `ns_sms_xxxxx`               | Si `novasend`       | Clé API NovaSend SMS                                   |
| `NOVASEND_SMS_SENDER_ID`   | `NovaSMS`                    | Si `novasend`       | Nom affiché sur le SMS reçu                            |
| `NOVASEND_SMS_BASE_URL`    | `https://api.novasend.io/v1` | Si `novasend`       | URL API NovaSend SMS prod                              |
| `AFRICASTALKING_API_KEY`   | `atsk_xxxxx`                 | Si `africastalking` | Clé Africa's Talking                                   |
| `AFRICASTALKING_USERNAME`  | nom compte prod              | Si `africastalking` | `sandbox` = test seulement                             |
| `AFRICASTALKING_SENDER_ID` | ID validé AT                 | Si `africastalking` | Sender ID approuvé par Africa's Talking                |
| `TWILIO_ACCOUNT_SID`       | `ACxxxxx`                    | Si `twilio`         | SID compte Twilio                                      |
| `TWILIO_AUTH_TOKEN`        | token Twilio                 | Si `twilio`         | Token d'authentification Twilio                        |
| `TWILIO_PHONE_NUMBER`      | `+1xxxxxxxxxx`               | Si `twilio`         | Numéro Twilio source                                   |

---

### Tarification crédits

| Variable                   | Valeur prod | Obligatoire | Description                            |
| -------------------------- | ----------- | ----------- | -------------------------------------- |
| `CREDIT_COST_PER_SMS`      | `12`        | ✅          | Coût en FCFA par SMS facturé au client |
| `CREDIT_COST_PER_EMAIL`    | `2`         | ✅          | Coût en FCFA par email                 |
| `CREDIT_COST_PER_WHATSAPP` | `35`        | ✅          | Coût en FCFA par message WhatsApp      |

---

### Mobile Money

| Variable                 | Valeur prod                        | Obligatoire | Description                                   |
| ------------------------ | ---------------------------------- | ----------- | --------------------------------------------- |
| `MOBILE_MONEY_PROVIDER`  | `novasend`                         | ✅          | `simulation` = succès immédiat sans appel API |
| `NOVASEND_MM_API_KEY`    | clé prod NovaSend                  | ✅          | Clé API Mobile Money NovaSend **prod**        |
| `NOVASEND_MM_API_CLIENT` | client secret prod                 | ✅          | Secret client NovaSend **prod**               |
| `NOVASEND_MM_BASE_URL`   | `https://business.novasend.app/v1` | ✅          | URL prod — pas `-staging`                     |

> **Attention** : en staging c'est `business-staging.novasend.app`. En prod c'est `business.novasend.app` — sans `-staging`.  
> Les opérateurs WAVE et ORANGE doivent être **activés par NovaSend** sur le compte marchand prod.

---

### Visa / Stripe

| Variable            | Valeur prod     | Obligatoire | Description                          |
| ------------------- | --------------- | ----------- | ------------------------------------ |
| `VISA_PROVIDER`     | `stripe`        | ✅          | `simulation` = jamais en prod        |
| `STRIPE_SECRET_KEY` | `sk_live_xxxxx` | ✅          | Clé **live** Stripe — pas `sk_test_` |

---

### Stockage images campagnes (Amazon S3)

| Variable                              | Valeur prod                                                       | Obligatoire | Description                                                            |
| ------------------------------------- | ----------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `CAMPAIGN_IMAGE_STORAGE_PROVIDER`     | `s3`                                                              | ✅          | —                                                                      |
| `CAMPAIGN_IMAGE_BUCKET`               | `novasms-campaign-images-prod`                                    | ✅          | Nom du bucket S3                                                       |
| `CAMPAIGN_IMAGE_PUBLIC_BASE_URL`      | `https://novasms-campaign-images-prod.s3.eu-west-3.amazonaws.com` | ✅          | URL publique pour afficher les images dans les emails                  |
| `CAMPAIGN_IMAGE_S3_REGION`            | `eu-west-3`                                                       | ✅          | Région AWS du bucket                                                   |
| `S3_ENDPOINT`                         | laisser **vide**                                                  | —           | Vide = AWS S3 natif (`http://localhost:9000` = MinIO local uniquement) |
| `CAMPAIGN_IMAGE_S3_ENDPOINT`          | laisser **vide**                                                  | —           | Idem                                                                   |
| `CAMPAIGN_IMAGE_S3_ACCESS_KEY_ID`     | `AKIAXXXXXXXXXXXXXXXX`                                            | ✅          | Access key IAM AWS                                                     |
| `CAMPAIGN_IMAGE_S3_SECRET_ACCESS_KEY` | clé secrète IAM                                                   | ✅          | Secret key IAM AWS                                                     |
| `CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE`  | `false`                                                           | ✅          | `true` = MinIO local seulement — `false` en prod S3                    |

---

### Push notifications (FCM)

| Variable                   | Valeur prod                             | Obligatoire | Description                      |
| -------------------------- | --------------------------------------- | ----------- | -------------------------------- |
| `PUSH_PROVIDER`            | `fcm`                                   | Si utilisé  | `mock` = logs console seulement  |
| `FCM_SERVICE_ACCOUNT_JSON` | JSON complet du compte service Firebase | Si `fcm`    | JSON en une seule ligne, échappé |

---

### WhatsApp

| Variable               | Valeur prod             | Obligatoire | Description                     |
| ---------------------- | ----------------------- | ----------- | ------------------------------- |
| `WHATSAPP_PROVIDER`    | `twilio`                | Si utilisé  | `mock` = logs console seulement |
| `TWILIO_WHATSAPP_FROM` | `whatsapp:+14155238886` | Si `twilio` | Numéro WhatsApp Twilio approuvé |

---

## FRONTEND — `apps/frontend/.env`

| Variable            | Valeur prod                  | Obligatoire | Description                                                         |
| ------------------- | ---------------------------- | ----------- | ------------------------------------------------------------------- |
| `VITE_API_BASE_URL` | `https://api.novasms.ci/api` | ✅          | URL backend publique — toutes les requêtes API passent par là       |
| `VITE_APP_NAME`     | `NovaSMS`                    | ✅          | Nom affiché dans l'interface                                        |
| `VITE_APP_ENV`      | `production`                 | ✅          | Peut conditionner des comportements UI                              |
| `VITE_IS_STAGING`   | `false`                      | ✅          | `true` affiche le bandeau orange "Staging" — mettre `false` en prod |

---

## Checklist pré-déploiement

```
☐ NODE_ENV=production

# Sécurité
☐ JWT_ACCESS_SECRET généré avec openssl rand -base64 64 (jamais les valeurs dev)
☐ JWT_REFRESH_SECRET généré avec openssl rand -base64 64 (différent du précédent)

# Bases de données
☐ DATABASE_URL → base PostgreSQL prod (pas localhost)
☐ REDIS_URL → Redis prod (pas localhost)

# Email
☐ EMAIL_PROVIDER=resend
☐ RESEND_TEST_RECIPIENT vide (sinon tous les emails vont à cette adresse)
☐ Domaine novasms.ci vérifié sur le dashboard Resend

# Tracking — CRITIQUE
☐ TRACKING_BASE_URL=https://api.novasms.ci (URL publique du backend)
    → Sans ça, toutes les stats d'ouverture et de clic des campagnes email sont à 0

# SMS
☐ SMS_PROVIDER=novasend
☐ Clé NovaSend SMS prod configurée

# Mobile Money
☐ MOBILE_MONEY_PROVIDER=novasend
☐ Clés PROD NovaSend Mobile Money (pas staging)
☐ NOVASEND_MM_BASE_URL=https://business.novasend.app/v1 (sans -staging)
☐ WAVE et ORANGE activés par NovaSend sur le compte marchand prod

# Paiement carte
☐ VISA_PROVIDER=stripe
☐ STRIPE_SECRET_KEY=sk_live_xxx (pas sk_test_)

# Stockage images
☐ Bucket S3 prod créé
☐ CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE=false
☐ S3_ENDPOINT et CAMPAIGN_IMAGE_S3_ENDPOINT vides (pas localhost:9000)
☐ CAMPAIGN_IMAGE_PUBLIC_BASE_URL → URL publique S3 prod

# Frontend
☐ VITE_IS_STAGING=false
☐ VITE_API_BASE_URL=https://api.novasms.ci/api
```

---

## Variables les plus critiques à ne pas oublier

1. **`TRACKING_BASE_URL`** — sans elle, toutes les statistiques d'ouverture et de clic email sont mortes (le pixel et les liens redirigent vers localhost).
2. **`NOVASEND_MM_BASE_URL`** sans `-staging` — sinon les paiements Mobile Money partent en sandbox.
3. **`RESEND_TEST_RECIPIENT`** vide — sinon tous les emails clients vont à cette adresse de test.
4. **`STRIPE_SECRET_KEY=sk_live_`** — ne pas laisser `sk_test_` en prod.
5. **`VITE_IS_STAGING=false`** — sinon le bandeau "Staging" reste affiché aux clients.
