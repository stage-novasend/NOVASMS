# NovaSMS - User Story Compliance Audit

Date: 2026-06-04
Mode: hard audit (code + routes + build)

## Scale
- CONFORME: implementation fonctionnelle et coherent avec l'US
- PARTIEL: implementation presente mais incomplet, ou ecarts fonctionnels
- NON CONFORME: manquant ou placeholder

## Wave 1 done in this pass
- Added tracking endpoints:
  - GET /api/track/open
  - GET /api/track/click
  Files:
  - apps/backend/src/track/track.controller.ts
  - apps/backend/src/track/track.service.ts
  - apps/backend/src/track/track.module.ts
  - apps/backend/src/track/track-token.util.ts
- Added email tracking injection in outbound emails:
  - Links rewritten to /api/track/click
  - 1x1 open pixel appended with token
  File:
  - apps/backend/src/queues/campaign.dispatch.queue.ts
- Added provider webhook endpoints:
  - POST /api/webhooks/resend
  - POST /api/webhooks/africastalking
  - POST /api/webhooks/twilio
  - POST /api/webhooks/stripe
  Files:
  - apps/backend/src/webhooks/webhook.controller.ts
  - apps/backend/src/webhooks/webhook.service.ts
- Build validations:
  - frontend build OK
  - backend build OK

## User Stories status (initial baseline)

1) US-001 Inscription marchand: PARTIEL
- Register + email verification exists, audit log to verify end-to-end path still needed.
- Files:
  - apps/backend/src/auth/auth.controller.ts
  - apps/backend/src/auth/auth.service.ts

2) US-002 Connexion et session: PARTIEL
- JWT + lockout + reset present.
- 2FA SMS provider path still not fully production-grade (placeholder areas remain).
- Files:
  - apps/backend/src/auth/auth.service.ts
  - apps/frontend/src/features/account/pages/Security.tsx

3) US-004 Import contacts: PARTIEL
- Async import and report exist; strict 50k perf evidence and complete consent source flow to verify/finalize.
- Files:
  - apps/backend/src/contacts/import.service.ts
  - apps/backend/src/queues/import.queue.ts

4) US-005 Segments dynamiques: PARTIEL
- Segment CRUD exists; dependency blocking/caching behavior needs strict scenario validation.
- Files:
  - apps/backend/src/segments/**
  - apps/frontend/src/pages/Segments.tsx

5) US-006 Fiche contact: PARTIEL
- Contact detail screen exists; RGPD delete flow and timeline completeness need gap closure.
- Files:
  - apps/frontend/src/features/contacts/pages/ContactDetail.tsx

6) US-007 Campagne Email: PARTIEL (improved)
- Sending + provider factory present.
- Tracking open/click endpoints now implemented and links/pixel injection now implemented.
- Remaining: full bounce webhook mapping reliability tests.
- Files:
  - apps/backend/src/queues/campaign.dispatch.queue.ts
  - apps/backend/src/track/**
  - apps/backend/src/webhooks/**

7) US-008 Campagne SMS: PARTIEL
- STOP presence validation exists; webhook STOP/bounce endpoints now present.
- Remaining: strict provider payload mapping hardening and end-to-end tests.
- Files:
  - apps/backend/src/campaigns/campaigns.service.ts
  - apps/backend/src/webhooks/webhook.service.ts

8) US-009 Planification: PARTIEL
- Scheduling queues exist; best-time logic quality and cancellation constraints need strict checks.
- Files:
  - apps/backend/src/queues/campaign.schedule.queue.ts

9) US-010 Test A/B: PARTIEL
- AB infra exists, winner evaluation exists.
- Critical gap likely remains on independent template editing/storage for A and B in UX/data shape.
- Files:
  - apps/frontend/src/components/campaigns/steps/CampaignScheduleStep.tsx
  - apps/backend/src/campaigns/campaigns.service.ts

10) US-011 Automatisation simple: PARTIEL
- Core automation exists; trigger coverage and UX constraints need strict verification.
- Files:
  - apps/backend/src/automations/**
  - apps/frontend/src/pages/Automations.tsx

11) US-012 Workflow canvas: PARTIEL
- Canvas and execution exist; full validation matrix + restart resilience to verify.
- Files:
  - apps/frontend/src/pages/Automations.tsx
  - apps/backend/src/queues/**

12) US-013 Double dashboard analytics: PARTIEL
- Two dashboard modes exist and switch exists.
- Remaining: strict operational dashboard data parity against requested real-time cards.
- Files:
  - apps/frontend/src/pages/Dashboard.tsx
  - apps/frontend/src/components/Sidebar.tsx

13) US-014 Rapport detaille campagne: PARTIEL
- Reporting UI exists; real click heatmap zones and complete filters need hard verification.
- Files:
  - apps/frontend/src/components/campaigns/reports/**
  - apps/backend/src/analytics/**

14) US-015 Gestion equipe: PARTIEL
- Team/invite flows exist.
- JWT immediate revocation blacklist via Redis still to complete/verify.
- Files:
  - apps/backend/src/account/**
  - apps/frontend/src/features/account/pages/Team.tsx

15) US-016 Credits et facturation: PARTIEL
- Balance and transactions exist.
- Full real consumption by sends + receipt/S3 and alerts need strict end-to-end closure.
- Files:
  - apps/backend/src/account/**
  - apps/backend/src/transactions/**

16) US-017 Rechargement credits: PARTIEL
- Payment providers and transaction flows exist.
- Staging/live segregation, webhook certainty, and PDF receipt pipeline need completion checks.
- Files:
  - apps/backend/src/mobile-money/**
  - apps/backend/src/providers/payment/**

17) US-018 Integrations externes: PARTIEL/NON CONFORME
- Provider health backend exists.
- Dedicated UI page /settings/integrations with full statuses/test action still incomplete.
- Files:
  - apps/backend/src/providers/**
  - apps/frontend (page missing/partial)

18) US-019 Profil et parametres: PARTIEL (improved)
- Header profile menu + notifications improved, profile/settings/team/security pages exist.
- Remaining: strict route naming parity requested under /settings/* and full persistence checks.
- Files:
  - apps/frontend/src/components/Header.tsx
  - apps/frontend/src/features/account/pages/**

19) US-020 Tracking et webhooks: PARTIEL -> significant progress this pass
- Added /track/open and /track/click.
- Added resend/africastalking/twilio/stripe webhook endpoints and base handlers.
- Remaining:
  - hard signature verification for all provider endpoints
  - stronger provider payload mapping contracts
  - dedicated automated tests for idempotency and webhook paths

## Next priority corrections (strict order)
1. US-020 finalize: signatures + tests + payload contracts.
2. US-010 critical A/B two-template separation (frontend + backend data model consistency).
3. US-013 operational dashboard real-data completeness against criteria.
4. US-018 integrations settings UI + test-connection actions.
5. US-015 immediate JWT revocation with Redis blacklist enforcement.
