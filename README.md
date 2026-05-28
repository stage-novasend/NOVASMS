# NOVASMS

Plateforme SaaS de messagerie marketing multicanale — NovaSMS

## 🔄 CI/CD Status

[![CI Pipeline](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml)

## 🔄 CI/CD

[![CI](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/romualdKO/NOVASMS/actions/workflows/ci.yml)

## Sprint 3 - Envoi Email / SMS

### Email avec Resend

Pour débloquer l'envoi vers de vraies adresses, configurez `EMAIL_PROVIDER=resend` et `RESEND_API_KEY` dans `apps/backend/.env`.

En staging ou pour un premier test rapide, utilisez le domaine officiel de test Resend:

```env
RESEND_FROM=NovaSMS <onboarding@resend.dev>
```

Si vous avez déjà un domaine, vérifiez-le dans le dashboard Resend, puis remplacez le `from` par une adresse du type `contact@votredomaine.com`.

### SMS avec Twilio ou Africa's Talking

Twilio Trial limite l'envoi aux numéros vérifiés. Pour envoyer à n'importe quel numéro, passez le compte en billing actif ou basculez sur Africa's Talking pour les envois Afrique/CI.

```env
# Twilio
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Africa's Talking
# SMS_PROVIDER=africastalking
AFRICASTALKING_API_KEY=
AFRICASTALKING_USERNAME=
AFRICASTALKING_SENDER_ID=
```

L'état des providers est exposé via `GET /api/status` pour vérifier rapidement la configuration email/SMS.

### Liens de confirmation email

Les emails d'activation et de réinitialisation de mot de passe utilisent maintenant `FRONTEND_PUBLIC_URL` si elle est définie, sinon `FRONTEND_URL`.

En local, gardez `FRONTEND_PUBLIC_URL=http://localhost:5173`. En staging ou production, renseignez l'URL publique réelle du frontend.

### Images de campagne

Le backend peut stocker les images de campagne sur MinIO en local ou sur S3 en staging/prod.

```env
CAMPAIGN_IMAGE_STORAGE_PROVIDER=s3
CAMPAIGN_IMAGE_BUCKET=novasms-campaign-images
CAMPAIGN_IMAGE_PUBLIC_BASE_URL=http://localhost:9000/novasms-campaign-images
CAMPAIGN_IMAGE_S3_ENDPOINT=http://localhost:9000
CAMPAIGN_IMAGE_S3_REGION=us-east-1
CAMPAIGN_IMAGE_S3_ACCESS_KEY_ID=minioadmin
CAMPAIGN_IMAGE_S3_SECRET_ACCESS_KEY=minioadmin
CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE=true
```

En local, ce bloc fonctionne avec le service MinIO ajouté dans `docker-compose.yml`. En staging ou production, remplacez l'endpoint et l'URL publique par ceux de votre bucket réellement exposé.
