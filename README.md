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
CAMPAIGN_IMAGE_S3_REGION=us-east-1
# Preferred env key used by the app. Change this only for staging/prod:
# S3_ENDPOINT=https://storage-staging.novasms.com
S3_ENDPOINT=http://localhost:9000
CAMPAIGN_IMAGE_S3_ENDPOINT=http://localhost:9000
CAMPAIGN_IMAGE_S3_ACCESS_KEY_ID=minioadmin
CAMPAIGN_IMAGE_S3_SECRET_ACCESS_KEY=minioadmin
CAMPAIGN_IMAGE_S3_FORCE_PATH_STYLE=true
```

En local, ce bloc fonctionne avec le service MinIO ajouté dans `docker-compose.yml`. En staging ou production, remplacez l'endpoint et l'URL publique par ceux de votre bucket réellement exposé.

Notes:
- When moving to staging/production you only need to update `S3_ENDPOINT` (and ensure `CAMPAIGN_IMAGE_BUCKET` contains your bucket name). Example:

```env
S3_ENDPOINT=https://storage-staging.novasms.com
CAMPAIGN_IMAGE_BUCKET=novasms-campaign-images
CAMPAIGN_IMAGE_PUBLIC_BASE_URL=https://storage-staging.novasms.com/novasms-campaign-images
```

- The backend rewrites campaign HTML image sources that reference `localhost` or absolute local paths to point at the configured public storage base. If you prefer private buckets, implement presigned GET URLs and set `CAMPAIGN_IMAGE_PUBLIC_BASE_URL` accordingly.
The backend rewrites campaign HTML image sources that reference `localhost` or absolute local paths to point at the configured public storage base. If you prefer private buckets, implement presigned GET URLs and set `CAMPAIGN_IMAGE_PUBLIC_BASE_URL` accordingly.

### Public vs Private buckets (presigned URLs)

There are two common ways to serve campaign images to external recipients:

- **Public bucket (simpler):** Make the bucket or objects publicly accessible and set `S3_ENDPOINT`/`CAMPAIGN_IMAGE_PUBLIC_BASE_URL` to the public URL. The backend will rewrite local `http://localhost...` sources to `https://your-storage/<bucket>/<file>`. This requires no extra runtime authorization and is easiest for marketing assets.

- **Private bucket + presigned URLs (recommended for privacy):** Keep your bucket private and use the presign endpoint to obtain short-lived GET URLs for images. The backend provides:

	- `GET /api/campaigns/images/:fileName/presign?expires=3600` — returns `{ url, expires }` with a presigned GET URL valid for `expires` seconds.

	Typical frontend flow for private images:

	1. Request the presigned URL from the backend for `fileName`.
	2. Use the returned `url` directly as the `src` for `<img>` or fetch it server-side to include inline content.

	Example (fetch from frontend):

	```js
	const res = await fetch(`/api/campaigns/images/${fileName}/presign?expires=3600`);
	const { url } = await res.json();
	imageElement.src = url;
	```

	Notes:
	- Presigned URLs expire — cache or refresh them as needed.
	- Some email providers require publicly reachable image URLs; if using presigned URLs in emails, ensure the provider can fetch the URL (no restricted network). For very strict providers, prefer public bucket objects.
