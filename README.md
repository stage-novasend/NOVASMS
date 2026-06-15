# NOVASMS

Plateforme SaaS de messagerie marketing multicanale pour campagnes Email, SMS, WhatsApp, automatisations, contacts et rechargement de crédits.

## CI/CD

[![CI Pipeline](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml)

## État du projet

Le socle métier est branché sur de vraies couches d'exécution pour l'authentification, l'envoi d'emails, les SMS, les files BullMQ, le stockage d'images de campagne, les webhooks et les paiements/recharges. Les providers externes restent configurables par variables d'environnement, avec fallbacks locaux quand une intégration n'est pas encore disponible.



## Où brancher les providers et intégrations

### 1. Email

Fichiers clés:

- `apps/backend/src/providers/email/email.provider.factory.ts`
- `apps/backend/src/providers/email/resend.provider.ts`
- `apps/backend/src/providers/email/brevo.provider.ts`
- `apps/backend/src/mail/mail.service.ts`
- `apps/backend/src/auth/auth.service.ts`
- `apps/backend/src/queues/campaign.dispatch.queue.ts`
- `apps/backend/src/webhooks/webhook.controller.ts`

Ce qui est déjà en place:

- `EMAIL_PROVIDER` choisit le provider actif (`resend`, `brevo`, `mock`).
- Les emails de confirmation, mot de passe oublié, 2FA et notification de campagne passent par `MailService` ou par la factory email.
- Les webhooks email peuvent être signés avec `RESEND_WEBHOOK_SECRET`.

Variables d'environnement:

```env
EMAIL_PROVIDER=resend
RESEND_API_KEY=
RESEND_FROM=NovaSMS <onboarding@resend.dev>
RESEND_TEST_RECIPIENT=
BREVO_API_KEY=
BREVO_FROM_EMAIL=
BREVO_FROM_NAME=
RESEND_WEBHOOK_SECRET=
FRONTEND_PUBLIC_URL=http://localhost:5173
```

Pour le rendre opérationnel en production:

1. Choisir un provider principal et fournir la clé API.
2. Vérifier le domaine d'envoi dans le dashboard du provider.
3. Pointer `RESEND_FROM` ou `BREVO_FROM_EMAIL` vers une adresse réellement autorisée.
4. Configurer `FRONTEND_PUBLIC_URL` pour que les liens d'email pointent vers le bon site.
5. Ajouter le webhook provider dans le dashboard et le faire pointer vers `/webhooks/email-events`.

### 2. SMS

Fichiers clés:

- `apps/backend/src/providers/sms/sms.provider.factory.ts`
- `apps/backend/src/providers/sms/twilio.provider.ts`
- `apps/backend/src/providers/sms/africastalking.provider.ts`
- `apps/backend/src/queues/campaign.dispatch.queue.ts`
- `apps/backend/src/auth/auth.service.ts`

Ce qui est déjà en place:

- `SMS_PROVIDER` arbitre entre Twilio et Africa's Talking.
- L'envoi SMS de campagne et le 2FA SMS utilisent la factory SMS.
- Le backend expose aussi un état de santé des providers via les endpoints de status.

Variables d'environnement:

```env
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# ou
SMS_PROVIDER=africastalking
AFRICASTALKING_API_KEY=
AFRICASTALKING_USERNAME=
AFRICASTALKING_SENDER_ID=
AFRICASTALKING_BASE_URL=
```

Pour le rendre opérationnel en production:

1. Choisir le provider principal selon le pays et le volume.
2. Renseigner les identifiants du compte et le sender autorisé.
3. Tester un numéro vérifié avant de généraliser l'envoi.
4. Vérifier `GET /api/providers/health` pour confirmer la configuration.

### 3. WhatsApp

Fichiers clés:

- `apps/backend/src/providers/whatsapp/whatsapp.provider.factory.ts`
- `apps/backend/src/providers/whatsapp/twilio.whatsapp.provider.ts`
- `apps/backend/src/providers/whatsapp/mock.whatsapp.provider.ts`
- `apps/backend/src/app.module.ts`

Ce qui est déjà en place:

- La factory existe et peut basculer sur un provider WhatsApp Twilio si les identifiants sont présents.
- Le fallback actuel reste le mock, donc cette voie est la plus probable à finaliser avant un vrai lancement WhatsApp.

Pour le rendre opérationnel en production:

1. Ouvrir un vrai flux produit pour les campagnes WhatsApp dans le front ou le back.
2. Brancher le provider choisi sur un usage métier concret.
3. Ajouter les variables Twilio WhatsApp si vous voulez sortir du mock.
4. Ajouter un endpoint ou une carte UI pour activer/désactiver WhatsApp au niveau compte.

### 4. Paiements et recharges

Fichiers clés:

- `apps/backend/src/providers/payment/stripe.provider.ts`
- `apps/backend/src/mobile-money/mobile-money.controller.ts`
- `apps/backend/src/mobile-money/mobile-money.service.ts`
- `apps/backend/src/mobile-money/mobile-money.module.ts`
- `apps/backend/src/transactions/transactions.module.ts`

Ce qui est déjà en place:

- Un provider Stripe est disponible pour les paiements carte.
- Le module Mobile Money expose l'initiation, la confirmation OTP et la liste des transactions.

Variables d'environnement:

```env
STRIPE_SECRET_KEY=
```

Pour le rendre opérationnel en production:

1. Relier l'écran de recharge frontend au provider Stripe ou Mobile Money.
2. Sauvegarder les transactions dans Prisma avec un statut métier clair.
3. Brancher les callbacks/confirmations sur des webhooks ou des validations serveur.
4. Vérifier les règles de devise, montant minimum et pays supportés.

### 5. Stockage des images de campagne

Fichiers clés:

- `apps/backend/src/campaigns/file-upload.service.ts`
- `apps/backend/src/campaigns/campaigns.controller.ts`
- `docker-compose.yml`

Ce qui est déjà en place:

- Le backend supporte un stockage local en dev et un stockage S3/MinIO en staging ou production.
- Les images de campagne sont exposées via URL publique ou via API selon la configuration.

Variables d'environnement:

```env
CAMPAIGN_IMAGE_STORAGE_PROVIDER=s3
CAMPAIGN_IMAGE_BUCKET=novasms-campaign-images
CAMPAIGN_IMAGE_PUBLIC_BASE_URL=http://localhost:9000/novasms-campaign-images
CAMPAIGN_IMAGE_S3_REGION=us-east-1
S3_ENDPOINT=http://localhost:9000
CAMPAIGN_IMAGE_S3_ENDPOINT=http://localhost:9000
CAMPAIGN_IMAGE_S3_ACCESS_KEY_ID=minioadmin
CAMPAIGN_IMAGE_S3_SECRET_ACCESS_KEY=minioadmin
CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE=true
```

Pour le rendre opérationnel en production:

1. Remplacer MinIO par votre bucket réel ou votre endpoint S3.
2. Définir une URL publique stable pour les images.
3. Vérifier les droits de lecture/écriture du bucket.

### 6. Webhooks

Fichiers clés:

- `apps/backend/src/webhooks/webhook.controller.ts`
- `apps/backend/src/webhooks/webhook.service.ts`
- `apps/backend/src/webhooks/webhook.module.ts`
- `apps/backend/src/campaigns/campaigns.controller.ts`

Ce qui est déjà en place:

- Le backend reçoit les événements email via `/webhooks/email-events`.
- La signature HMAC peut être vérifiée si `RESEND_WEBHOOK_SECRET` est configurée.
- Les webhooks servent à mettre à jour les événements de campagne et le suivi d'envoi.

Pour le rendre opérationnel en production:

1. Déclarer les URL de webhook dans le dashboard du provider email.
2. Activer la signature côté provider si disponible.
3. Garder `rawBody` activé côté Nest pour une vérification fiable.
4. Mapper les événements provider vers les statuts internes NovaSMS.

### 7. Files BullMQ et tâches asynchrones

Fichiers clés:

- `apps/backend/src/app.module.ts`
- `apps/backend/src/queues/import.queue.ts`
- `apps/backend/src/queues/campaign.schedule.queue.ts`
- `apps/backend/src/queues/campaign.schedule.worker.ts`
- `apps/backend/src/queues/campaign.dispatch.queue.ts`
- `apps/backend/src/contacts/import.service.ts`

Ce qui est déjà en place:

- Redis alimente BullMQ pour les imports, la planification et la diffusion des campagnes.
- Les queues sont utilisées pour exécuter les jobs longs hors du cycle HTTP.

Variables d'environnement:

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_URL=redis://localhost:6379
```

Pour le rendre opérationnel en production:

1. Utiliser une instance Redis persistante.
2. Lancer les workers à côté de l'API.
3. Surveiller les retries, les échecs et les temps de traitement.
4. Ajouter des métriques si les volumes montent.

### 8. Authentification et sécurité compte

Fichiers clés:

- `apps/backend/src/auth/auth.service.ts`
- `apps/backend/src/auth/auth.controller.ts`
- `apps/backend/src/auth/jwt.strategy.ts`
- `apps/backend/src/auth/jwt-auth.guard.ts`
- `apps/frontend/src/features/auth/*`
- `apps/frontend/src/features/account/pages/Security.tsx`

Ce qui est déjà en place:

- Inscription, connexion, vérification email, réinitialisation de mot de passe et 2FA.
- Les liens d'email utilisent `FRONTEND_PUBLIC_URL`.

Pour le rendre opérationnel en production:

1. Vérifier que le provider email est actif.
2. Configurer un vrai domaine frontend dans les emails.
3. Tester le parcours inscription → confirmation → connexion.
4. Tester la bascule 2FA avec récupération des codes de secours.

## Endpoints utiles

- `GET /api/health` - santé simple de l'API.
- `GET /api/status` - statut détaillé de l'API et des providers email/SMS.
- `GET /api/providers/health` - état des providers email/SMS.
- `GET /campaigns/providers/health` - health-check rapide des providers côté campagnes.
- `GET /webhooks/health` - test de disponibilité des webhooks.

## Variables minimales à préparer

Le plus simple pour démarrer est de copier `apps/backend/.env.example` dans `apps/backend/.env`, puis de compléter au moins:

```env
DATABASE_URL=
REDIS_URL=
EMAIL_PROVIDER=
RESEND_API_KEY=
SMS_PROVIDER=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
FRONTEND_PUBLIC_URL=
CAMPAIGN_IMAGE_STORAGE_PROVIDER=
CAMPAIGN_IMAGE_BUCKET=
CAMPAIGN_IMAGE_PUBLIC_BASE_URL=
STRIPE_SECRET_KEY=
```

## Frontend

Les écrans qui consomment directement ces intégrations sont principalement:

- `apps/frontend/src/features/auth/*` pour la connexion, la confirmation email et la réinitialisation.
- `apps/frontend/src/components/campaigns/*` pour la création, l'édition et la liste des campagnes.
- `apps/frontend/src/features/contacts/*` pour l'import et la gestion de contacts.
- `apps/frontend/src/features/account/pages/Security.tsx` pour la double authentification.
- `apps/frontend/src/pages/Campaigns.tsx` pour l'écran d'entrée Campagnes.

## Résumé d'industrialisation

Pour que NovaSMS soit réellement opérationnel en site de production, il faut vérifier quatre choses à chaque provider:

1. Une clé API ou un identifiant valide dans `.env`.
2. Une factory ou un service backend qui l'emploie vraiment.
3. Un endpoint de health ou un test de bout en bout pour confirmer la config.
4. Une UI qui expose seulement les actions réellement supportées par le provider actif.

Quand ces quatre points sont alignés, le site n'est plus en mode démonstration: il envoie, confirme, stocke et suit les opérations avec des services réels.
