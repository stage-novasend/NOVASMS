# 📱 NOVASMS — PLANNING COMPLET DE DÉVELOPPEMENT

> **Auteur :** Konan Konan N'dri Romuald  
> **Période :** 16 avril 2026 → 30 juin 2026 (10 semaines)  
> **Méthode :** Agile / Scrum — 5 sprints  
> **GitHub :** https://github.com/romualdKO/NOVASMS  
> **Linear :** https://linear.app/sankofalabapp  
> **Stack :** React 18 + TypeScript + NestJS + PostgreSQL + Redis + BullMQ

---

## 📋 TABLE DES MATIÈRES

1. [Informations projet](#informations-projet)
2. [Planning global — Gantt](#planning-global--gantt)
3. [Phase 0 — Analyse & Architecture ✅ TERMINÉE](#phase-0--analyse--architecture--terminée)
4. [Phase 1 — Setup & Architecture](#phase-1--setup--architecture)
5. [Sprint 1 — Auth & Onboarding](#sprint-1--auth--onboarding)
6. [Sprint 2 — Gestion des Contacts](#sprint-2--gestion-des-contacts)
7. [Sprint 3 — Création de Campagnes](#sprint-3--création-de-campagnes)
8. [Sprint 4 — Automatisations](#sprint-4--automatisations)
9. [Sprint 5 — Analytics & Billing + Livraison](#sprint-5--analytics--billing--livraison)
10. [Règles de gestion complètes](#règles-de-gestion-complètes)
11. [Convention GitHub ↔ Linear](#convention-github--linear)

---

## 🏗 INFORMATIONS PROJET

| Champ                 | Valeur                                          |
| --------------------- | ----------------------------------------------- |
| **Nom**               | NovaSMS — Plateforme SaaS Marketing Multicanale |
| **Auteur**            | Konan Konan N'dri Romuald                       |
| **Structure**         | Sankofa Lab                                     |
| **Début**             | 16 avril 2026                                   |
| **Fin**               | 30 juin 2026                                    |
| **Durée**             | 10 semaines (2 mois 2 semaines)                 |
| **Méthodologie**      | Agile / Scrum                                   |
| **Nombre de sprints** | 5 sprints de 2 semaines                         |
| **GitHub**            | https://github.com/romualdKO/NOVASMS            |

### Stack Technique

| Couche               | Technologies                                                                       |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Frontend**         | React 18 + TypeScript + Vite + Tailwind CSS + Radix UI + Zustand + React Router v6 |
| **Backend**          | Node.js + NestJS + Prisma ORM + OpenAPI/Swagger + Zod                              |
| **Base de données**  | PostgreSQL 15 (Primary + Replica) + Redis 7 (Cache + Queue)                        |
| **Jobs asynchrones** | BullMQ (queues)                                                                    |
| **Infrastructure**   | Docker Compose (dev) + AWS S3 (fichiers)                                           |
| **Tests**            | Jest (unitaires) + Playwright (E2E) + k6 (performance)                             |
| **Monitoring**       | Sentry (erreurs) + Mixpanel (analytics produit)                                    |
| **Sécurité**         | JWT + TLS 1.3 + AES-256 + RGPD + WCAG 2.1 AA                                       |
| **Intégrations**     | Mobile Money (Orange/MTN) + Visa (Stripe/PayPal) + OAuth 2.0 + SendGrid            |

### Personas cibles

- **Responsable Marketing** — Campagnes à grande échelle, segmentation avancée, dashboard analytics
- **Gérant de Boutique** — Simplicité, automatisations pré-configurées, prise en main rapide
- **Directrice des Opérations** — Gestion des rôles, contrôle des dépenses, logs d'activité

---

## 📅 PLANNING GLOBAL — GANTT

| Semaine                 | Phase / Sprint                      | Objectif Principal                      | Livrable Clé                       | Deadline   |
| ----------------------- | ----------------------------------- | --------------------------------------- | ---------------------------------- | ---------- |
| S1 (16-22 avr)          | ✅ **Phase 0** — Analyse            | UML + Architecture                      | Diagrammes UML, choix stack        | 22/04/2026 |
| S1-S2 (23 avr - 6 mai)  | 🔧 **Phase 1** — Setup              | Env. dév + CI/CD + Archi                | Repo GitHub, Docker, CI            | 06/05/2026 |
| S2-S3 (23 avr - 6 mai)  | 🔐 **Sprint 1** — Auth              | Inscription, Connexion, JWT, Onboarding | Login fonctionnel, Wizard 4 étapes | 06/05/2026 |
| S4-S5 (7-20 mai)        | 👥 **Sprint 2** — Contacts          | Import CSV, Segments                    | Import 50k lignes, Fiche contact   | 20/05/2026 |
| S6-S7 (21 mai - 3 juin) | 📣 **Sprint 3** — Campagnes         | Éditeur Email/SMS, A/B Test             | Envoi campagne complet             | 03/06/2026 |
| S8 (4-10 juin)          | ⚡ **Sprint 4** — Automatisations   | Auto simple, Workflow canvas            | Canvas React Flow, Queue BullMQ    | 10/06/2026 |
| S9-S10 (11-30 juin)     | 📊 **Sprint 5** — Analytics+Billing | Dashboard, Paiement, Livraison          | Mise en production                 | 30/06/2026 |

---

## ✅ PHASE 0 — ANALYSE & ARCHITECTURE — TERMINÉE

> **Période :** 16 – 22 avril 2026  
> **Statut :** ✅ Toutes les issues sont **Done**  
> **Milestone Linear :** Phase 0 — Analyse & Architecture (TERMINÉE)

---

### EN-1721 — Lecture & Analyse Fonctionnelle ✅ Done

**Statut :** ✅ Done | **Lien :** https://linear.app/sankofalabapp/issue/EN-1721

**Description :**  
Lecture intégrale du cahier des charges NovaSMS. Identification des 3 personas, formalisation des 17 User Stories (US-001 à US-017), extraction des 60 règles de gestion.

**Tâches réalisées :**

- [x] Lecture complète du cahier des charges NovaSMS
- [x] Identification des 3 personas (Resp. Marketing, Gérant Boutique, Admin Compte)
- [x] Formalisation des 17 User Stories (US-001 à US-017) avec critères d'acceptation
- [x] Extraction des 60 règles de gestion (RG-01 à RG-60)
- [x] Cartographie des parcours utilisateurs par persona

---

### EN-1707 — Analyse fonctionnelle — User Stories + Règles RG-01 à RG-60 ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 3 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1707

**Description :**  
Lecture intégrale du cahier des charges NovaSMS. Identification et formalisation des User Stories. Extraction des règles de gestion. Cartographie des parcours utilisateurs.

**Tâches réalisées :**

- [x] Lire et décrypter intégralement le cahier des charges fonctionnel
- [x] Identifier et formaliser toutes les User Stories (US-001 à US-017)
- [x] Extraire exhaustivement les règles de gestion implicites et explicites (RG-01 à RG-60)
- [x] Cartographier les parcours utilisateurs pour chaque persona
- [x] Définir les critères d'acceptation techniques pour chaque fonctionnalité

**Livrable :** Document d'analyse fonctionnelle complet + liste des US avec critères d'acceptation

---

### EN-1708 — Analyse technique préliminaire + choix stack ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 2 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1708

**Tâches réalisées :**

- [x] Étude des contraintes de performance (1M contacts, import 50k lignes < 60s)
- [x] Analyse des besoins en sécurité (RGPD, chiffrement, audit)
- [x] Identification des intégrations externes nécessaires (Mobile Money, Visa, OAuth)
- [x] Évaluation des risques techniques et définition des mesures d'atténuation
- [x] Choix et justification de la stack : React 18 + NestJS + PostgreSQL + Redis + BullMQ + AWS S3

**Livrable :** Document de choix techniques avec justifications

---

### EN-1709 — UML — Diagramme de Cas d'Utilisation ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 2 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1709

**Description :**  
Conception du Diagramme de Cas d'Utilisation (modulaire et détaillé) modélisant les interactions entre les 3 acteurs et les 6 modules fonctionnels.

**Tâches réalisées :**

- [x] Modéliser le diagramme modulaire (Auth, Contacts, Campagnes, Automatisations, Analytics, Compte)
- [x] Modéliser le diagramme détaillé avec toutes les relations `<<include>>` et `<<extend>>`
- [x] Représenter les 3 acteurs : Responsable Marketing, Gérant Boutique, Administrateur Compte
- [x] Exporter en PDF/PNG

**Livrable :** Diagramme UCM exporté en PDF/PNG — validé

---

### EN-1710 — UML — Diagramme de Classe ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 3 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1710

**Tâches réalisées :**

- [x] Modéliser l'entité **Compte** (id, nomEntreprise, emailAdmin, soldeCredits, seuilAlerte...)
- [x] Modéliser l'entité **Utilisateur** (id, email, role: Admin/Editeur/Analyste, actif2FA...)
- [x] Modéliser l'entité **Contact** (id, email, telephone, prenom, nom, tags, optOut...)
- [x] Modéliser l'entité **Segment** (id, nom, criteres, type: Statique/Dynamique...)
- [x] Modéliser l'entité **Campagne** (id, nom, typeCanal, statut, dateNotification...)
- [x] Modéliser l'entité **Envoi** (id, statut: Envoyé/Ouvert/Cliqué/Rebond/Désabonné...)
- [x] Modéliser l'entité **Automatisation** (id, nom, declencheur, delaiSecondes, workflow JSON...)
- [x] Modéliser l'entité **Transaction** (id, montant, methode, statut, validePaiementOtp...)
- [x] Modéliser l'entité **Template** (id, nom, typeCanal, contenuHTML, estPreset...)
- [x] Définir toutes les relations et cardinalités entre entités

**Livrable :** Diagramme de Classe complet avec attributs, types, méthodes et relations

---

### EN-1711 — UML — Diagrammes de Séquence ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 3 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1711

**4 flux modélisés :**

- [x] **Flux 1 — Inscription et validation** : Marchand → Interface React → API NestJS → SGBD PostgreSQL → Service Email SMTP
- [x] **Flux 2 — Import de contacts CSV** : Resp. Marketing → Frontend (Web Worker) → Backend → Worker BullMQ → PostgreSQL
- [x] **Flux 3 — Envoi de campagne SMS** : Création → Vérification crédits → Transaction → Worker → Provider SMS
- [x] **Flux 4 — Authentification et connexion** : Login → Vérification mdp → Génération JWT → Refresh token

**Livrable :** 4 diagrammes de séquence exportés et validés

---

### EN-1712 — Architecture Système ✅ Done

**Statut :** ✅ Done | **Priorité :** Urgent | **Points :** 2 | **Deadline :** 22/04/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1712

**Tâches réalisées :**

- [x] Modéliser la **couche présentation** : React 18 + TypeScript + Tailwind + Zustand (Auth, Contacts, Campaigns, Analytics, Automations, Billing, Settings, Shared UI)
- [x] Modéliser la **couche API** : Node.js/NestJS + API Gateway + Middleware (JWT, Rate Limiting, CORS, Logging)
- [x] Modéliser les **microservices** : Auth, Contacts, Campaigns, Analytics, Automations, Billing, Notifications, Templates, Payments, Segments
- [x] Modéliser la **couche données** : PostgreSQL 15 Primary + Replica, Redis 7 (Session JWT, Rate Limiting, Job Queue, Real-time pub/sub)
- [x] Modéliser l'**Object Storage S3** : CSV importés, reçus PDF, assets uploadés
- [x] Modéliser les **services externes** : Email Provider SendGrid, SMS Provider Twilio/Infobip, WhatsApp Business API, Mobile Money Orange/MTN, Visa/MasterCard Stripe/PayPal, Monitoring Sentry/Mixpanel, OAuth 2.0 Shopify

**Livrable :** Schéma d'architecture système complet (section 5.6 du document)

---

### EN-1734 — Analyse Technique Préliminaire ✅ Done

**Statut :** ✅ Done  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1734

**Tâches réalisées :**

- [x] Étude des contraintes de performance (1M contacts, import 50k lignes < 60s)
- [x] Analyse des besoins en sécurité (RGPD, chiffrement, audit)
- [x] Identification des intégrations externes nécessaires (Mobile Money, Visa, OAuth)
- [x] Évaluation des risques techniques et définition des mesures d'atténuation

---

### EN-1736 — Conception UML ✅ Done

**Statut :** ✅ Done  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1736

**Tâches réalisées :**

- [x] Diagramme de Cas d'Utilisation
- [x] Diagramme de Classe
- [x] Diagramme de Séquence

---

## 🔧 PHASE 1 — SETUP & ARCHITECTURE

> **Période :** 23 avril – 6 mai 2026  
> **Milestone Linear :** Phase 1 — Setup & Architecture (S1-S2)  
> **Correspond à la section 2.2 du document technique**

---

### EN-1730 — Init repo GitHub + ESLint + Prettier + Husky 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 2 | **Deadline :** 29/04/2026  
**Branche Git :** `feature/EN-1730-init-repo-github`  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1730

**Description :**  
Créer et configurer le repository GitHub https://github.com/romualdKO/NOVASMS avec la bonne structure de branches et les outils de qualité de code.

**Tâches à faire :**

- [ ] Initialiser le monorepo avec structure `apps/frontend` + `apps/backend`
- [ ] Créer la branche `main` (production — protégée, merge via PR uniquement)
- [ ] Créer la branche `develop` (intégration — base pour les features)
- [ ] Définir la convention de branches : `feature/EN-XXXX-nom-court`
- [ ] Configurer **ESLint** avec les règles TypeScript strict (`@typescript-eslint/strict`)
- [ ] Configurer **Prettier** pour le formatage automatique du code
- [ ] Configurer **Husky** + **lint-staged** : lint + format automatique à chaque `git commit`
- [ ] Créer le fichier `.gitignore` (node_modules, .env, dist, .DS_Store...)
- [ ] Créer le fichier `.env.example` avec toutes les variables documentées
- [ ] Rédiger le `README.md` : description projet, stack, prérequis, instructions setup local
- [ ] Configurer les règles de protection de branche sur GitHub (require PR review, require status checks)

**Critère d'acceptation :**  
Un `git push` avec du code non-formaté déclenche le hook Husky et rejette le commit.

**Convention de commit pour cette issue :**

```bash
git commit -m "feat: EN-1730 init monorepo structure apps/frontend + apps/backend"
git commit -m "feat: EN-1730 configure ESLint TypeScript strict + Prettier"
git commit -m "feat: closes EN-1730 husky pre-commit hooks operationnels"
```

---

### EN-1731 — CI/CD GitHub Actions — lint + test + build 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 2 | **Deadline :** 29/04/2026  
**Branche Git :** `feature/EN-1731-cicd-github-actions`  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1731

**Description :**  
Mettre en place la pipeline CI/CD avec GitHub Actions pour automatiser lint, tests et build à chaque push.

**Tâches à faire :**

- [ ] Créer le fichier `.github/workflows/ci.yml`
- [ ] Configurer le déclencheur : chaque push ET chaque PR vers `main` et `develop`
- [ ] Créer le job **lint** : `npm run lint` — vérifie les règles ESLint
- [ ] Créer le job **test** : `npm run test` — exécute les tests Jest (dépend de lint)
- [ ] Créer le job **build** : `npm run build` — compile TypeScript (dépend de test)
- [ ] Configurer le cache npm pour accélérer les runs (`actions/cache`)
- [ ] Ajouter le badge CI dans le `README.md`
- [ ] Configurer les notifications d'échec par email (GitHub notification settings)
- [ ] Vérifier que la pipeline bloque le merge si un check échoue

**Critère d'acceptation :**  
Un push avec du code mal formaté fait échouer le workflow. Ton maître de stage voit les runs sur GitHub Actions en temps réel.

**Fichier à créer :**

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
  test:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run test
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run build
```

---

### EN-1732 — Docker Compose — PostgreSQL 15 + Redis 7 + migrations + seed 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 3 | **Deadline :** 29/04/2026  
**Branche Git :** `feature/EN-1732-docker-compose-setup`  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1732

**Description :**  
Configurer l'environnement de développement local avec Docker Compose pour PostgreSQL et Redis.

**Tâches à faire :**

- [ ] Créer `docker-compose.yml` avec les services :
  - PostgreSQL 15 (port 5432, volume persistant)
  - Redis 7 (port 6379, volume persistant)
  - Adminer (port 8080, interface graphique base de données)
- [ ] Créer le script `db:migrate` : Prisma Migrate pour appliquer les migrations
- [ ] Créer le script `db:seed` : données de test réalistes :
  - 1 compte marchand avec profil complet
  - 3 utilisateurs (Admin, Éditeur, Analyste)
  - 100 contacts avec données variées (tags, opt-out...)
  - 3 campagnes (1 SMS, 1 Email, 1 planifiée)
  - 2 segments (1 statique, 1 dynamique)
- [ ] Configurer **MSW** (Mock Service Worker) pour le développement frontend isolé sans backend
- [ ] Créer le fichier `.env.local` avec toutes les variables documentées
- [ ] Créer le script `npm run dev` qui démarre frontend + backend + Docker en une commande
- [ ] Documenter les commandes dans le README :
  ```bash
  docker-compose up -d    # démarrer PostgreSQL + Redis
  npm run db:migrate      # appliquer les migrations
  npm run db:seed         # peupler avec données de test
  npm run dev             # démarrer l'application complète
  ```

**Critère d'acceptation :**  
Un développeur qui clone le repo peut lancer le projet complet en moins de 5 minutes.

---

### EN-1733 — Architecture Frontend React + Backend NestJS + Prisma + Swagger 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 5 | **Deadline :** 06/05/2026  
**Branche Git :** `feature/EN-1733-architecture-frontend-backend`  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1733

**Description :**  
Initialiser et configurer les deux applications du monorepo.

**Tâches Frontend (section 2.2.2) :**

- [ ] Exécuter `npm create vite@latest apps/frontend -- --template react-ts`
- [ ] Configurer `tsconfig.json` en mode strict
- [ ] Installer et configurer **Tailwind CSS** + **Radix UI** (système de design)
- [ ] Configurer **Zustand** avec les stores globaux :
  - `authStore` (utilisateur connecté, tokens, rôle)
  - `uiStore` (sidebar, modales, notifications)
- [ ] Configurer **React Router v6** avec :
  - Routes publiques : `/login`, `/register`, `/confirm-email`
  - Routes protégées (guard `AuthGuard`) : `/dashboard`, `/contacts`, `/campaigns`...
  - Redirect automatique si non authentifié
- [ ] Créer la structure dossiers par feature :
  ```
  src/
    features/
      auth/         (login, register, confirm)
      contacts/     (liste, import, fiche, segments)
      campaigns/    (email editor, sms editor, list)
      analytics/    (dashboard, reports)
      automations/  (simple, workflow canvas)
      billing/      (credits, recharge, invoices)
    shared/
      components/   (Button, Input, Table, Modal...)
      hooks/        (useAuth, useToast, usePagination...)
      lib/          (axios instance, zod schemas...)
  ```
- [ ] Configurer l'alias `@/` dans `vite.config.ts` et `tsconfig.json`
- [ ] Configurer **Axios** avec l'URL de base de l'API

**Tâches Backend (section 2.2.3) :**

- [ ] Initialiser un projet **NestJS** avec TypeScript strict
- [ ] Configurer **Prisma ORM** avec le schéma initial de la BDD
- [ ] Appliquer la migration initiale (création de toutes les tables)
- [ ] Configurer **OpenAPI/Swagger** auto-généré sur `/api/docs`
- [ ] Configurer **Zod** pour la validation des DTOs
- [ ] Créer la structure des modules NestJS :
  - `AuthModule`, `ContactsModule`, `CampaignsModule`
  - `AnalyticsModule`, `AutomationsModule`, `BillingModule`
- [ ] Configurer les variables d'environnement avec `@nestjs/config`

**Critère d'acceptation :**  
`npm run dev` dans les deux apps retourne un HTTP 200. Swagger accessible sur `http://localhost:3000/api/docs`.

---

## 🔐 SPRINT 1 — AUTH & ONBOARDING

> **Période :** 23 avril – 6 mai 2026  
> **Milestone Linear :** Sprint 1 — Auth & Onboarding (S2-S3)  
> **Règles de gestion couvertes :** RG-01 à RG-07

---

### EN-1667 — [SETUP] Init projet React 18 + TypeScript + Vite + Tailwind + Zustand 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 5  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1667

**Tâches à faire :**

- [ ] Exécuter `npm create vite@latest` avec template React + TypeScript
- [ ] Configurer `tsconfig.json` en mode strict
- [ ] Installer et configurer Tailwind CSS + Radix UI
- [ ] Configurer les stores Zustand (auth, ui)
- [ ] Configurer React Router avec structure des routes protégées
- [ ] Structurer les dossiers par feature : `auth/`, `contacts/`, `campaigns/`, `analytics/`
- [ ] Configurer ESLint, Prettier, Husky pour les pre-commit hooks

---

### EN-1668 — [CI/CD] GitHub Actions + Docker Compose PostgreSQL + Redis + MSW 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 3  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1668

**Tâches à faire :**

- [ ] Créer le workflow GitHub Actions : lint → test → build à chaque push
- [ ] Configurer Docker Compose : PostgreSQL 15 + Redis 7 pour le dev local
- [ ] Créer le script de seed avec données de test réalistes
- [ ] Configurer MSW (Mock Service Worker) pour le développement frontend isolé
- [ ] Documenter les variables d'environnement dans `.env.example`
- [ ] Ajouter le badge CI dans le README

---

### EN-1669 — [SÉCURITÉ] TLS 1.3 + CSRF/XSS/SQLi + Rate limiting + Audit logs 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 5  
**Règles :** RG-55, RG-59  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1669

**Description :**  
Mettre en place toutes les protections de sécurité de base et les premiers audit logs conformes RGPD.

**Tâches à faire :**

- [ ] Configurer **TLS 1.3** pour toutes les communications en transit
- [ ] Ajouter les headers HTTP de sécurité :
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy` (CSP)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
- [ ] Mettre en place le **middleware Rate Limiting** avec Redis :
  - Maximum 100 requêtes par minute par adresse IP
  - Retour HTTP 429 avec message clair si dépassement
- [ ] Implémenter la protection **CSRF** avec le pattern token double-submit cookie
- [ ] Configurer **DOMPurify** côté frontend pour sanitiser tous les inputs (protection XSS)
- [ ] Utiliser le **Prisma ORM paramétré** pour toutes les requêtes SQL (protection SQLi — jamais de SQL brut)
- [ ] Créer la table `audit_logs` immuable dans PostgreSQL :
  - Colonnes : `id`, `userId`, `action`, `resource`, `details`, `ipAddress`, `userAgent`, `createdAt`
  - Journaliser : connexion, déconnexion, modification rôles, paiement, suppression de données
- [ ] Configurer la **rotation automatique des refresh tokens JWT** (invalidation après usage)
- [ ] Écrire des tests unitaires pour les middlewares de sécurité

---

### EN-1632 — [S1] Formulaire d'inscription marchand 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 06/05/2026  
**Règle :** RG-01  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1632

**Description :**  
Créer le formulaire d'inscription marchand avec les champs : nom, email professionnel, mot de passe, nom de boutique, pays.

**Critères d'acceptation :**

- Validation des champs en temps réel
- Force du mot de passe affichée
- Message d'erreur explicite par champ

**Sous-tâches :**

#### EN-1670 — [Frontend] Composant formulaire inscription + validation Zod + erreurs

**Tâches à faire :**

- [ ] Créer le composant React `RegisterForm.tsx`
- [ ] Définir le schéma Zod pour la validation :
  - `nom` : string, min 2 chars, requis
  - `email` : format email valide, requis
  - `motDePasse` : min 8 chars, 1 majuscule, 1 chiffre, 1 symbole
  - `nomBoutique` : string, min 2 chars, requis
  - `pays` : select parmi liste ISO, requis
- [ ] Intégrer `react-hook-form` avec le resolver Zod
- [ ] Afficher les messages d'erreur en rouge sous chaque champ en temps réel
- [ ] Désactiver le bouton "S'inscrire" si le formulaire est invalide
- [ ] Afficher un spinner de chargement pendant l'appel API
- [ ] Gérer les erreurs retournées par l'API (email déjà utilisé → message clair)

#### EN-1671 — [Frontend] Indicateur force mot de passe

**Tâches à faire :**

- [ ] Créer le composant `PasswordStrengthIndicator.tsx`
- [ ] Implémenter la logique de score :
  - **Faible** (rouge) : < 8 chars OU aucun critère supplémentaire
  - **Moyen** (orange) : 8+ chars + 1 critère (majuscule OU chiffre)
  - **Fort** (vert clair) : 8+ chars + 2 critères
  - **Très fort** (vert) : 12+ chars + tous critères (majuscule + chiffre + symbole)
- [ ] Afficher une barre de progression colorée sous le champ mot de passe
- [ ] Afficher un label textuel (Faible / Moyen / Fort / Très fort)
- [ ] Mettre à jour en temps réel à chaque frappe

#### EN-1672 — [Backend] Endpoint POST /api/auth/register

**Tâches à faire :**

- [ ] Créer le contrôleur `AuthController` avec la route `POST /api/auth/register`
- [ ] Créer le DTO `RegisterDto` avec validation Zod (mêmes règles que le frontend)
- [ ] Implémenter le service `AuthService.register()` :
  1. Vérifier que l'email n'existe pas déjà → erreur 409 si doublon
  2. Hacher le mot de passe avec **bcrypt** (saltRounds: 12)
  3. Créer le compte en base de données (`INSERT INTO comptes`)
  4. Créer l'utilisateur associé avec le rôle Admin
  5. Générer un token de confirmation unique (UUID v4, expiration 24h)
  6. Stocker le token en base avec la date d'expiration
  7. Envoyer l'email de confirmation via le service SMTP
  8. Retourner HTTP 201 avec message "Vérifiez vos emails"

---

### EN-1633 — [S1] Validation du compte par email (lien 24h) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 06/05/2026  
**Règle :** RG-02  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1633

**Critères d'acceptation :**

- Email envoyé immédiatement après inscription
- Lien expire après 24h → retour erreur 400
- Redirection vers dashboard après validation réussie

**Sous-tâches :**

#### EN-1673 — [Backend + Frontend] Endpoint confirmation + pages résultats

**Tâches à faire :**

- [ ] **Backend** : créer l'endpoint `GET /api/auth/confirm?token=`
  - Requêter la table des tokens : `SELECT * FROM utilisateurs WHERE token = ? AND expiry > NOW()`
  - Si token non trouvé → HTTP 400 "Lien invalide"
  - Si token expiré → HTTP 400 "Lien expiré"
  - Si déjà validé → HTTP 200 "Compte déjà activé"
  - Si valide → `UPDATE utilisateurs SET email_verified=true, token=null` → HTTP 302 vers `/login`
- [ ] **Frontend** : créer les 3 pages de résultat :
  - `/confirm-success` — page "Compte activé ! Vous pouvez vous connecter"
  - `/confirm-expired` — page "Lien expiré" + bouton "Renvoyer l'email"
  - `/confirm-invalid` — page "Lien invalide" + support
- [ ] Endpoint `POST /api/auth/resend-confirmation` pour renvoyer l'email

#### EN-1674 — [Backend] Service SMTP email confirmation

**Tâches à faire :**

- [ ] Configurer **SendGrid** (ou Nodemailer) comme provider SMTP
- [ ] Créer le template HTML de l'email de confirmation (branded NovaSMS) :
  - Logo NovaSMS
  - Message de bienvenue avec le prénom
  - Bouton CTA "Confirmer mon compte" (lien avec token)
  - Durée de validité (24h) clairement indiquée
  - Footer avec infos légales
- [ ] Implémenter le service `EmailService.sendConfirmation(email, token)` :
  - Construire le lien complet `https://app.novasms.com/confirm?token=...`
  - Envoyer via SendGrid API
  - Retry automatique x3 en cas d'échec avec délai exponentiel
  - Logger les erreurs d'envoi dans les audit_logs

---

### EN-1635 — [S1] Authentification JWT (access 8h + refresh 30j) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 06/05/2026  
**Règle :** RG-04  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1635

**Critères d'acceptation :**

- Access token expiré → refresh automatique transparent
- Refresh token expiré → redirection login
- Tokens stockés de manière sécurisée (httpOnly cookie)

**Sous-tâches :**

#### EN-1675 — [Backend] Middleware JWT + endpoint refresh + rotation tokens

**Tâches à faire :**

- [ ] Configurer `@nestjs/jwt` avec les options :
  - Access token secret + expiration 8h (`28800s`)
  - Refresh token secret différent + expiration 30j (`2592000s`)
- [ ] Créer l'endpoint `POST /api/auth/login` :
  - Vérifier email + mot de passe (bcrypt.compare)
  - Vérifier que l'email est confirmé
  - Vérifier que le compte n'est pas bloqué (max 5 tentatives)
  - Générer access token + refresh token
  - Stocker le refresh token en base (hash SHA-256) avec expiration
  - Retourner HTTP 200 avec les tokens + info utilisateur
- [ ] Créer l'endpoint `POST /api/auth/refresh` :
  - Vérifier le refresh token en base (non expiré, non révoqué)
  - Générer un nouveau access token
  - **Rotation** : invalider l'ancien refresh token + générer un nouveau
  - Retourner le nouvel access token + nouveau refresh token
- [ ] Créer le `JwtAuthGuard` NestJS pour protéger les routes privées
- [ ] Créer l'endpoint `POST /api/auth/logout` : révoquer le refresh token en base

#### EN-1676 — [Frontend] Intercepteur Axios refresh auto + Guard React Router

**Tâches à faire :**

- [ ] Créer l'instance Axios avec `baseURL` = URL de l'API
- [ ] Ajouter l'intercepteur de **requête** : injecter le header `Authorization: Bearer <accessToken>` automatiquement
- [ ] Ajouter l'intercepteur de **réponse** :
  - Si HTTP 401 reçu → appeler `POST /api/auth/refresh` automatiquement
  - Si refresh réussi → relancer la requête originale avec le nouveau token
  - Si refresh échoue (token expiré) → déconnecter l'utilisateur + rediriger vers `/login`
  - Gestion de la file d'attente (si plusieurs requêtes en même temps pendant le refresh)
- [ ] Créer le composant `PrivateRoute` (Guard React Router) :
  - Vérifier si l'utilisateur est authentifié (store Zustand)
  - Si non authentifié → `<Navigate to="/login" />` avec `state: { from: location }`
  - Si authentifié → afficher le composant enfant
- [ ] Créer le composant `RoleGuard` : vérifier le rôle (Admin/Éditeur/Analyste) avant d'afficher certaines pages

---

### EN-1640 — [S1] Blocage compte après 5 tentatives échouées 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 06/05/2026  
**Règle :** RG-05  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1640

**Tâches à faire :**

- [ ] Ajouter les colonnes `loginAttempts` (int, défaut 0) et `lockedUntil` (timestamp, nullable) à la table `utilisateurs`
- [ ] Dans `AuthService.login()`, après chaque échec :
  - Incrémenter `loginAttempts` de 1
  - Si `loginAttempts >= 5` → setter `lockedUntil = NOW() + 15 minutes` + reset compteur à 0
  - Retourner HTTP 423 avec message "Compte bloqué 15 minutes"
- [ ] Avant chaque tentative de login, vérifier si `lockedUntil > NOW()` → refus avec temps restant
- [ ] Réinitialiser `loginAttempts` à 0 lors d'une connexion réussie
- [ ] Envoyer un **email d'alerte** au propriétaire du compte lors du blocage
- [ ] Afficher côté frontend un message clair avec le temps restant avant déblocage
- [ ] Journaliser les blocages dans `audit_logs`

---

### EN-1641 — [S1] 2FA optionnel (TOTP / SMS) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Medium | **Deadline :** 06/05/2026  
**Règle :** RG-06  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1641

**Tâches à faire :**

- [ ] **TOTP (Google Authenticator / Authy)** :
  - Générer un secret TOTP avec `otplib`
  - Afficher le QR code à scanner dans l'app authenticator
  - Valider le premier code TOTP pour confirmer l'activation
  - Stocker le secret chiffré (AES-256) en base de données
  - Générer 10 codes de secours (backup codes) à usage unique
- [ ] **SMS OTP** :
  - Envoyer un code OTP à 6 chiffres via le provider SMS (Twilio/Infobip)
  - Valider le code (TTL : 10 minutes)
- [ ] **Page de paramètres 2FA** :
  - Bouton "Activer la 2FA" → choix TOTP ou SMS
  - Bouton "Désactiver la 2FA" avec confirmation par mot de passe
  - Afficher les codes de secours (masqués, révélables une fois)
- [ ] **Flux de connexion avec 2FA** :
  - Après login réussi, si 2FA activé → rediriger vers page de saisie du code
  - Valider le code → générer les tokens JWT
  - Option "Se souvenir de cet appareil pendant 30 jours" (cookie sécurisé)

---

### EN-1643 — [S1] Wizard onboarding 4 étapes 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 06/05/2026  
**Règle :** RG-07  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1643

**Description :**  
Wizard d'onboarding en 4 étapes avec sauvegarde d'état et possibilité de sauter une étape.

**Sous-tâches :**

#### EN-1677 — [Frontend] Shell wizard + barre progression + navigation

**Tâches à faire :**

- [ ] Créer le composant `OnboardingWizard.tsx` (layout principal du wizard)
- [ ] Afficher la barre de progression (ex: `Étape 2 sur 4 — 50%` avec barre colorée)
- [ ] Implémenter la navigation avant/arrière entre étapes
- [ ] Sauvegarder l'état courant dans le store Zustand ET en base via `PATCH /api/onboarding/state`
- [ ] Permettre de sauter à n'importe quelle étape déjà visitée
- [ ] Afficher un bouton "Passer — Accéder au dashboard" visible en permanence
- [ ] Reprendre l'onboarding là où on l'a laissé si rechargement de page

#### EN-1678 — [Frontend] 4 écrans wizard

**Tâches à faire :**

- [ ] **Étape 1 — Profil boutique** :
  - Upload du logo de la boutique (drag & drop, aperçu, stockage S3)
  - Sélecteur de fuseau horaire (liste IANA complète)
  - Sélecteur de secteur d'activité
  - Bouton "Continuer"
- [ ] **Étape 2 — Import contacts** (optionnel) :
  - Zone de drag & drop pour un fichier CSV/XLSX
  - Message "Vous pourrez importer plus tard" + bouton "Passer"
  - Si fichier déposé : prévisualisation des 5 premières lignes
- [ ] **Étape 3 — Choix du canal principal** :
  - Cartes cliquables : SMS / Email / WhatsApp / Push
  - Sélection unique avec highlight visuel
  - Explication de chaque canal en une phrase
- [ ] **Étape 4 — Première campagne** :
  - Formulaire simplifié de création d'une campagne de bienvenue
  - Pré-remplissage avec le canal choisi à l'étape 3
  - Bouton "Créer ma première campagne" + "Accéder au dashboard"
- [ ] Page de succès finale : "🎉 Votre boutique est prête !"

---

## 👥 SPRINT 2 — GESTION DES CONTACTS

> **Période :** 7 – 20 mai 2026  
> **Milestone Linear :** Sprint 2 — Gestion des Contacts (S4-S5)  
> **Règles de gestion couvertes :** RG-08 à RG-16

---

### EN-1645 — [S2] Import contacts CSV/XLS/XLSX (50k lignes max) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 20/05/2026  
**Règles :** RG-08, RG-10, RG-12  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1645

**Critères d'acceptation :**

- Formats acceptés : CSV, XLS, XLSX
- Limite 50 000 lignes enforced côté frontend ET backend
- Prévisualisation des 5 premières lignes avant confirmation
- Rapport d'import : nb succès, doublons ignorés, erreurs de format
- Import traité de manière asynchrone (job worker)

**Sous-tâches :**

#### EN-1679 — [Frontend] Web Worker parsing CSV/XLS + prévisualisation 5 lignes

**Tâches à faire :**

- [ ] Créer un **Web Worker** `csvParser.worker.ts` pour parser les fichiers sans bloquer l'UI
- [ ] Utiliser la librairie **SheetJS** pour lire XLS/XLSX nativement
- [ ] Utiliser **PapaParse** pour les fichiers CSV
- [ ] Valider la limite de 50 000 lignes dès la lecture (afficher erreur immédiate si dépassé)
- [ ] Afficher les 5 premières lignes en tableau avec les en-têtes détectées
- [ ] Afficher le nombre total de lignes détectées
- [ ] Afficher la taille du fichier et un indicateur de progression pendant le parsing
- [ ] Zone de drag & drop avec aperçu visuel du fichier accepté/refusé

#### EN-1680 — [Backend] Job worker import batch 500 lignes + rapport + WebSocket

**Tâches à faire :**

- [ ] Créer l'endpoint `POST /api/contacts/import` qui :
  1. Valide la taille du fichier (max 50k lignes)
  2. Crée un job BullMQ avec l'identifiant du fichier
  3. Retourne HTTP 202 Accepted avec le `jobId`
- [ ] Créer le worker BullMQ `ImportContactsJob` :
  - Lire le fichier CSV/XLSX par chunks de 500 lignes
  - Pour chaque batch : `INSERT INTO contacts ... ON CONFLICT DO NOTHING` (déduplication SQL)
  - Compter : succès, doublons (email/tel existant), erreurs de format
  - Émettre un événement WebSocket `import:progress` avec le pourcentage
  - À la fin : émettre `import:complete` avec le rapport final
- [ ] Créer l'endpoint `GET /api/contacts/import/:jobId` pour polling du statut
- [ ] Notification WebSocket en temps réel de la progression (pourcentage)
- [ ] Notification WebSocket à la fin avec le rapport complet

#### EN-1681 — [Perf] Test de charge k6 : import 50k lignes < 60s

**Tâches à faire :**

- [ ] Créer un fichier CSV de test avec exactement 50 000 lignes de contacts valides
- [ ] Écrire le script k6 `import-performance.js` qui simule l'import
- [ ] Valider que le temps total (upload + traitement worker) est < 60 secondes
- [ ] Valider que le temps de réponse de l'API est < 500ms (RG-53)
- [ ] Générer un rapport HTML k6 à fournir au maître de stage
- [ ] Optimiser si nécessaire (index SQL, taille des batches, parallélisation)

---

### EN-1646 — [S2] Interface de mapping visuel des colonnes 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 20/05/2026  
**Règle :** RG-09  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1646

**Tâches à faire :**

- [ ] Afficher les colonnes détectées dans le fichier (en-têtes)
- [ ] Proposer un mapping automatique pour les colonnes courantes (email, phone, firstname, lastname...)
- [ ] Permettre le mapping manuel via des selects déroulants (colonne fichier → champ système)
- [ ] Champs système disponibles : email, téléphone, prénom, nom, tags, notes, custom_1 à custom_5
- [ ] Indiquer visuellement les champs obligatoires non encore mappés (badge rouge)
- [ ] Permettre d'ignorer des colonnes (option "Ne pas importer")
- [ ] Désactiver le bouton "Confirmer l'import" si les champs obligatoires ne sont pas mappés
- [ ] Afficher un résumé : "X lignes seront importées avec Y colonnes"

---

### EN-1648 — [S2] Déduplication automatique email / téléphone 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 20/05/2026  
**Règles :** RG-11, RG-13  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1648

**Tâches à faire :**

- [ ] Créer une contrainte unique PostgreSQL : `UNIQUE(compte_id, email)` et `UNIQUE(compte_id, telephone)`
- [ ] Dans le worker d'import, utiliser `INSERT INTO contacts ... ON CONFLICT (compte_id, email) DO NOTHING`
- [ ] Compter chaque contact ignoré pour doublon → incrémenter `stats.doublons`
- [ ] Garantir l'isolation : un contact appartient à un et un seul compte marchand (RG-13) — ajouter `compte_id` dans toutes les requêtes
- [ ] Tester : importer 2 fois le même fichier → les doublons doivent être détectés et non importés
- [ ] Tester : 2 comptes différents peuvent avoir le même email (non doublon inter-comptes)

---

### EN-1650 — [S2] Fiche contact (détail, historique, tags) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 20/05/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1650

**Tâches à faire :**

- [ ] Créer la page `/contacts/:id` avec les informations complètes du contact :
  - Email, téléphone, prénom, nom, date d'ajout, pays
  - Badge de statut optOut visible clairement (rouge si désabonné)
  - Tags du contact avec possibilité d'en ajouter/supprimer
- [ ] **Historique d'engagement** : tableau listant toutes les campagnes reçues avec :
  - Nom de la campagne, canal, date d'envoi
  - Statut : Envoyé / Ouvert / Cliqué / Désabonné / Rebond
- [ ] **Modification inline** : cliquer sur un champ pour l'éditer directement (sans formulaire séparé)
- [ ] **Bouton Supprimer** (RGPD) avec dialog de confirmation : "Cette action est irréversible. Toutes les données du contact seront supprimées ou anonymisées sous 30 jours."
- [ ] Endpoint `GET /api/contacts/:id` avec les données complètes + historique
- [ ] Endpoint `PATCH /api/contacts/:id` pour la modification inline
- [ ] Endpoint `DELETE /api/contacts/:id` avec journalisation dans audit_logs

---

### EN-1652 — [S2] Segments statiques et dynamiques (ET/OU, recalcul auto) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 20/05/2026  
**Règles :** RG-14, RG-15, RG-16  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1652

**Tâches à faire :**

- [ ] **Segment statique** :
  - Interface de sélection manuelle de contacts (checkbox + recherche)
  - Endpoint `POST /api/segments` avec `type: "statique"` + liste d'IDs
  - Endpoint `POST /api/segments/:id/contacts` pour ajouter/retirer des contacts
- [ ] **Segment dynamique** :
  - Créateur de règles de filtrage avec opérateurs ET/OU :
    - Critères : tags, pays, date d'ajout (avant/après), statut opt-out, historique engagement
    - Opérateurs : `=`, `!=`, `contient`, `commence par`, `avant`, `après`
    - Groupes de règles combinés avec ET / OU
  - Afficher le **nombre de contacts correspondants en temps réel** (debounced API call)
  - Stocker la règle en JSON dans `segment.criteres`
  - Recalcul automatique à chaque modification de la table contacts (trigger PostgreSQL OU événement NestJS)
  - Mise en cache Redis (TTL 5 min) pour éviter les recalculs coûteux
- [ ] Endpoint `GET /api/segments/:id/contacts` pour obtenir les contacts du segment
- [ ] Endpoint `GET /api/segments/:id/count` pour le nombre de contacts (utilisé en temps réel)

---

### EN-1682 — [RGPD] Droit à l'oubli + export + consentement 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 20/05/2026  
**Règles :** RG-56, RG-57, RG-58  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1682

**Tâches à faire :**

- [ ] **Export des données personnelles** (RG-57) :
  - Endpoint `GET /api/contacts/export?format=json|csv` : exporter tous les contacts du compte
  - Endpoint `GET /api/account/gdpr-export` : exporter TOUTES les données du compte (contacts + campagnes + transactions + logs)
  - Retourner un fichier téléchargeable
- [ ] **Droit à l'oubli** (RG-56) :
  - Endpoint `DELETE /api/contacts/:id` : planifier la suppression physique sous 30 jours
  - Option anonymisation : remplacer email et téléphone par des hashes SHA-256 non-réversibles
  - Journaliser la demande avec timestamp et statut
- [ ] **Traçabilité du consentement** (RG-58) :
  - Ajouter les colonnes `consentement_date` et `consentement_source` à la table contacts
  - Lors de chaque import, enregistrer la date et la source (import CSV, API, manuel)
  - Afficher ces informations dans la fiche contact

---

## 📣 SPRINT 3 — CRÉATION DE CAMPAGNES

> **Période :** 21 mai – 3 juin 2026  
> **Milestone Linear :** Sprint 3 — Création de Campagnes (S6-S7)  
> **Règles de gestion couvertes :** RG-17 à RG-26

---

### EN-1654 — [S3] Éditeur Email (20 templates + drag-and-drop + HTML custom) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 03/06/2026  
**Règles :** RG-17, RG-18, RG-19, RG-21  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1654

**Sous-tâches :**

#### EN-1683 — [Frontend] Éditeur drag-and-drop blocs email

**Tâches à faire :**

- [ ] Intégrer la librairie **Unlayer** (ou alternative : React Email Editor) pour l'édition par blocs
- [ ] Configurer les blocs disponibles dans la palette :
  - Texte riche (police, taille, couleur, alignement, gras, italique)
  - Image (upload ou URL, largeur, alt text)
  - Bouton CTA (texte, URL, couleur, style)
  - Diviseur (séparateur horizontal)
  - Colonne (mise en page 1, 2 ou 3 colonnes)
  - Espacement (hauteur configurable)
  - HTML personnalisé (bloc avancé)
- [ ] Implémenter le drag & drop entre blocs
- [ ] Panneau de propriétés à droite pour éditer le bloc sélectionné
- [ ] Bouton prévisualisation **Desktop** / **Mobile** (responsive check)
- [ ] Bouton "Annuler / Rétablir" (historique des modifications)

#### EN-1684 — [Frontend] Bibliothèque 20+ templates

**Tâches à faire :**

- [ ] Créer au minimum 20 templates HTML email catégorisés :
  - **Promotion** (5 templates) : soldes, code promo, offre limitée, flash sale, liquidation
  - **Bienvenue** (3 templates) : nouveau client, inscription confirmée, compte activé
  - **Relance** (4 templates) : panier abandonné, client inactif, réengagement, rappel
  - **Transactionnel** (4 templates) : confirmation commande, expédition, livraison, facture
  - **Newsletter** (4 templates) : actualité, blog, produits du mois, événement
- [ ] Afficher la bibliothèque en grille avec aperçu miniature
- [ ] Permettre la recherche et le filtrage par catégorie
- [ ] Charger un template dans l'éditeur en un clic
- [ ] Permettre l'import d'un HTML custom (coller ou uploader un fichier `.html`)

#### EN-1685 — [Backend] Worker envoi campagne + retry 3x + partitionnement

**Tâches à faire :**

- [ ] Créer le job BullMQ `SendCampaignJob` :
  - Récupérer la liste des destinataires (segment ou liste directe)
  - Diviser en lots de 100 contacts
  - Pour chaque lot : appeler l'API du provider email (SendGrid)
  - Injecter les variables dynamiques pour chaque destinataire avant envoi
  - Retry automatique x3 avec délai exponentiel (1s, 5s, 30s) en cas d'erreur provider
  - Marquer chaque envoi en base : `INSERT INTO envois (contact_id, campagne_id, statut)`
- [ ] Vérifier le solde de crédits avant de lancer l'envoi (annuler si insuffisant)
- [ ] Débiter le solde en temps réel au fur et à mesure des envois
- [ ] Partitionner la table `envois` par mois pour les comptes > 100k envois/mois

---

### EN-1656 — [S3] Éditeur SMS (compteur 160 chars + coût + lien STOP auto) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 03/06/2026  
**Règles :** RG-20, RG-21, RG-22  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1656

**Sous-tâches :**

#### EN-1686 — [Frontend] Textarea SMS + compteur tranches + calcul coût live

**Tâches à faire :**

- [ ] Créer le composant `SmsEditor.tsx` avec un textarea et un compteur live
- [ ] Implémenter la logique de découpage GSM 7-bit :
  - **1 SMS** : 0–160 caractères
  - **2 SMS** : 161–306 caractères
  - **3 SMS** : 307–459 caractères
  - (chaque SMS concaténé suivant = 153 chars max en GSM étendu)
- [ ] Afficher : `145/160 — 1 SMS` (en rouge si > 160)
- [ ] Afficher le coût calculé en temps réel :
  - `Coût estimé : 500 destinataires × 25 FCFA × 1 tranche = 12 500 FCFA`
- [ ] Avertissement si le message dépasse 3 tranches (alerte de coût)
- [ ] Détecter les caractères non-GSM (emojis, accents non-standard) et avertir

#### EN-1687 — [Frontend] Injection automatique lien STOP non-supprimable

**Tâches à faire :**

- [ ] Toujours afficher en bas de l'éditeur SMS un bloc fixe non-supprimable :
  ```
  STOP au 33700
  ```
- [ ] Le bouton "Supprimer" de ce bloc doit être désactivé (grisé)
- [ ] Comptabiliser les caractères du STOP dans le total
- [ ] Ajouter un tooltip expliquant pourquoi ce bloc est obligatoire (conformité ARCEP)
- [ ] Côté backend : si jamais le STOP est absent à l'envoi, l'injecter automatiquement

#### EN-1688 — [Backend] Moteur de personnalisation variables

**Tâches à faire :**

- [ ] Créer le service `PersonalizationService.render(template, contact)` :
  - Remplacer `{{prénom}}` par `contact.prenom` (ou valeur de fallback si vide)
  - Remplacer `{{boutique}}` par `compte.nomBoutique`
  - Remplacer `{{code_promo}}` par la valeur passée en paramètre de campagne
  - Supporter les variables personnalisées `{{custom_1}}` à `{{custom_5}}`
- [ ] Configurer une valeur de **fallback** par variable (configurable dans l'interface) :
  - `{{prénom}}` → "cher client" si prénom vide
- [ ] Prévisualiser le rendu avec un contact exemple avant envoi
- [ ] Tests unitaires couvrant : variable présente, absente, champ vide, variable inconnue

---

### EN-1657 — [S3] Planification d'envoi (fuseaux horaires + meilleur moment) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 03/06/2026  
**Règles :** RG-23, RG-24  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1657

**Sous-tâches :**

#### EN-1689 — [Frontend] DateTimePicker fuseau horaire IANA + bouton annulation

**Tâches à faire :**

- [ ] Intégrer un composant DateTimePicker (ex: `react-datepicker` ou Radix Calendar)
- [ ] Ajouter un select de fuseau horaire avec la liste complète IANA (ex: "Africa/Abidjan", "Europe/Paris")
- [ ] Afficher l'heure locale estimée du destinataire en temps réel
- [ ] Option **"Meilleur moment"** : calcul basé sur les taux d'ouverture des 30 derniers jours (appel API `GET /api/analytics/best-time`)
- [ ] Bouton "Annuler l'envoi" visible tant que `now < scheduledAt - 5 minutes`
- [ ] Afficher une confirmation : "Sera envoyée le [date] à [heure] (fuseau [X])"

#### EN-1690 — [Backend] Job cron planification + vérif crédits + fenêtre annulation

**Tâches à faire :**

- [ ] Créer un **CRON job** s'exécutant chaque minute : `SELECT * FROM campagnes WHERE statut='planifiée' AND dateNotification <= NOW()`
- [ ] Pour chaque campagne trouvée :
  1. Vérifier le solde de crédits (annuler si insuffisant + notifier)
  2. Vérifier que `now < dateNotification - 5 minutes` (fenêtre d'annulation non dépassée)
  3. Lancer le job BullMQ d'envoi
  4. Mettre à jour le statut à "En cours"
- [ ] Endpoint `DELETE /api/campaigns/:id/cancel` : annuler une campagne planifiée (vérifier la fenêtre de 5 min)

---

### EN-1658 — [S3] A/B Testing Email 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 03/06/2026  
**Règles :** RG-25, RG-26  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1658

**Sous-tâches :**

#### EN-1691 — [Frontend] Interface A/B : saisie objets + slider + résultats live

**Tâches à faire :**

- [ ] Section "Test A/B" dans le créateur de campagne email
- [ ] Deux champs texte : "Objet version A" et "Objet version B"
- [ ] Slider pour le pourcentage de l'audience de test (5% à 50%, défaut 20%)
- [ ] Select du critère de victoire : **Taux d'ouverture** ou **Taux de clic**
- [ ] Select de la durée du test : 2h, 4h, 8h, 24h, ou date/heure personnalisée
- [ ] Résumé visuel : "Version A → X contacts / Version B → Y contacts / Reste → Z contacts"
- [ ] Tableau de résultats en temps réel pendant la période de test (rafraîchissement WebSocket)

#### EN-1692 — [Backend] Logique A/B : split audience + envoi gagnant automatique

**Tâches à faire :**

- [ ] Division **aléatoire** de l'audience en 2 groupes équilibrés (shuffle + split)
- [ ] Envoi en parallèle des 2 versions avec les objets respectifs
- [ ] Collecte des stats en temps réel pendant la durée configurée
- [ ] À la fin de la période, calculer le gagnant selon le critère choisi
- [ ] Vérifier le **seuil de confiance statistique > 95%** avant de déclarer un gagnant
- [ ] Si seuil non atteint : envoyer quand même la meilleure version avec un avertissement
- [ ] Envoyer automatiquement le gagnant au reste de l'audience
- [ ] Notifier le marchand du résultat par email + notification in-app

---

### EN-1693 — [Perf] Cache Redis segments + index PostgreSQL + pagination 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Points :** 5 | **Deadline :** 03/06/2026  
**Règles :** RG-53, RG-54  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1693

**Tâches à faire :**

- [ ] Mettre en cache Redis les segments dynamiques : TTL 5 minutes, clé `segment:{id}:contacts`
- [ ] Invalider le cache à chaque `INSERT/UPDATE/DELETE` dans la table contacts du compte
- [ ] Créer les index PostgreSQL sur les colonnes de filtrage :
  - `CREATE INDEX idx_contacts_email ON contacts(compte_id, email)`
  - `CREATE INDEX idx_contacts_telephone ON contacts(compte_id, telephone)`
  - `CREATE INDEX idx_contacts_tags ON contacts USING GIN(tags)`
  - `CREATE INDEX idx_contacts_opt_out ON contacts(compte_id, opt_out)`
  - `CREATE INDEX idx_contacts_date ON contacts(compte_id, date_ajout)`
- [ ] Valider : requête segment sur 1M contacts < 2 secondes
- [ ] Implémenter la **pagination cursor-based** pour les listes > 1000 contacts :
  - Paramètre `cursor` (ID du dernier élément) au lieu de `page`
  - Plus performant que LIMIT/OFFSET sur de grands ensembles

---

## ⚡ SPRINT 4 — AUTOMATISATIONS

> **Période :** 4 – 10 juin 2026  
> **Milestone Linear :** Sprint 4 — Automatisations (S8)  
> **Règles de gestion couvertes :** RG-27 à RG-32

---

### EN-1660 — [S4] Automatisation simple (déclencheur ajout contact + délai) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 10/06/2026  
**Règles :** RG-27, RG-28, RG-31, RG-32  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1660

**Critères d'acceptation :**

- Déclencheur : ajout de contact (manuel ou API)
- Délai configurable : immédiat, 30 min, 1h, 1 jour, personnalisé
- Compteur d'envois effectifs affiché
- Activation/désactivation en 1 clic sans perte de configuration

**Sous-tâches :**

#### EN-1695 — [Frontend] UI automatisation simple

**Tâches à faire :**

- [ ] Créer la page `/automations/new/simple`
- [ ] Section **Déclencheur** : sélecteur "Quand..." (ajout contact manuel, ajout via API, ajout par import)
- [ ] Section **Délai** : select avec options (Immédiatement, Dans 30 min, Dans 1h, Dans 1 jour, Personnalisé...)
- [ ] Section **Message** : selector du template à envoyer (liste des templates existants)
- [ ] Section **Canal** : SMS, Email, WhatsApp
- [ ] **Toggle ON/OFF** pour activer/désactiver sans perdre la configuration
- [ ] **Compteur** : "Envoyé X fois" affiché en temps réel
- [ ] Bouton Enregistrer + feedback visuel de confirmation

#### EN-1696 — [Backend] Queue BullMQ délai configurable + compteur

**Tâches à faire :**

- [ ] Créer le listener NestJS sur l'événement `contact.added` :
  - Pour chaque automatisation active dont le déclencheur correspond :
    - Créer un job BullMQ avec le délai configuré (`delay: X ms`)
    - Stocker dans le job : `{ automatisationId, contactId, templateId, canal }`
- [ ] Worker `ExecuteAutomationJob` :
  - Récupérer les données du contact
  - Personnaliser le message avec les variables dynamiques
  - Envoyer via le provider (SMS/Email)
  - Retry x3 automatique si échec
  - Incrémenter atomiquement le compteur Redis : `INCR automation:{id}:sent_count`
- [ ] Endpoint `POST /api/automations` : créer une automatisation
- [ ] Endpoint `PATCH /api/automations/:id/toggle` : activer/désactiver

---

### EN-1661 — [S4] Workflow multi-étapes canvas 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 10/06/2026  
**Règles :** RG-29, RG-30  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1661

**Sous-tâches :**

#### EN-1697 — [Frontend] Canvas React Flow : nœuds + mini-carte

**Tâches à faire :**

- [ ] Intégrer la librairie **React Flow (XY Flow)** pour le canvas de workflow
- [ ] Créer les 5 types de nœuds personnalisés :
  - **📨 Envoi message** : sélecteur canal + template, affiche résumé du message
  - **⏱ Attente** : input durée (minutes, heures, jours)
  - **🔀 Condition** : sélecteur de condition (Si/Sinon) — ouverture email, clic lien, achat, tag présent
  - **🏷 Tag** : ajouter ou retirer un tag du contact
  - **🏁 Fin** : nœud terminal
- [ ] Permettre le drag & drop depuis une palette vers le canvas
- [ ] Permettre les connexions directionnelles entre nœuds (flèches)
- [ ] Afficher une **mini-carte** de navigation (vue d'ensemble du workflow)
- [ ] Bouton zoom + / - / reset
- [ ] **Sauvegarde automatique** du brouillon toutes les 30 secondes (PATCH API)
- [ ] Bouton "Prévisualiser le parcours" avec simulation d'un contact fictif
- [ ] Bouton "Activer le workflow" avec validation des nœuds obligatoires

#### EN-1698 — [Backend] Moteur exécution workflow JSON + état par contact

**Tâches à faire :**

- [ ] Stocker le workflow en JSON dans `automatisation.workflow` :
  ```json
  {
    "nodes": [{"id":"1","type":"send","data":{"canal":"email","templateId":"xxx"}}, ...],
    "edges": [{"source":"1","target":"2"}, ...]
  }
  ```
- [ ] Créer la table `workflow_executions` pour stocker l'état de chaque contact dans le workflow :
  - `contact_id`, `automatisation_id`, `current_node_id`, `status`, `started_at`
- [ ] Moteur d'exécution `WorkflowEngine.execute(contactId, workflowId)` :
  - Lire le nœud courant
  - Selon le type : envoyer message / attendre / évaluer condition / ajouter tag
  - Avancer au nœud suivant (ou au nœud alternatif si condition False)
  - Persister l'état en base après chaque nœud
- [ ] **Reprise automatique** : au redémarrage du service, reprendre les exécutions interrompues
- [ ] Évaluer les conditions : `ouverture_email`, `clic_lien`, `achat_detecte`, `tag_present`
- [ ] Tests unitaires pour chaque type de nœud et condition

---

## 📊 SPRINT 5 — ANALYTICS & BILLING + LIVRAISON

> **Période :** 11 – 30 juin 2026  
> **Milestone Linear :** Sprint 5 — Analytics & Billing + Livraison (S9-S10)  
> **Règles de gestion couvertes :** RG-33 à RG-51

---

### EN-1662 — [S5] Dashboard Analytics (KPIs + graphiques + heatmap) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 30/06/2026  
**Règles :** RG-33, RG-34, RG-35, RG-36  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1662

**Sous-tâches :**

#### EN-1699 — [Frontend] Graphiques Recharts KPIs + heatmap

**Tâches à faire :**

- [ ] Installer et configurer la librairie **Recharts**
- [ ] Créer les 4 cartes KPI en haut du dashboard :
  - Messages envoyés (total + variation vs période précédente)
  - Taux d'ouverture (% + tendance flèche haut/bas)
  - Taux de clic (% + tendance)
  - Taux de désinscription (% + tendance, en rouge si hausse)
- [ ] Créer le graphique d'évolution : `LineChart` sur 7j / 30j / 90j
  - Sélecteur de période (boutons radio)
  - Courbes multi-métriques (envoyés, ouverts, cliqués)
- [ ] Créer le widget **Top 5 campagnes** :
  - Sélecteur de critère : ouverture, clic ou conversion
  - Tableau avec nom campagne, canal, date, score
- [ ] Créer la **Heatmap des horaires d'engagement** (grille 7 jours × 24 heures) :
  - Couleur : blanc (0 engagement) → vert foncé (fort engagement)
  - Données des 30 derniers jours
  - Tooltip au survol avec le taux exact

#### EN-1701 — [Backend] Vues matérialisées PostgreSQL analytics

**Tâches à faire :**

- [ ] Créer la vue matérialisée `analytics_daily` :
  ```sql
  CREATE MATERIALIZED VIEW analytics_daily AS
  SELECT compte_id, DATE(date_envoi) as jour,
    COUNT(*) as total_envoyes,
    SUM(CASE WHEN statut='ouvert' THEN 1 ELSE 0 END) as ouverts,
    SUM(CASE WHEN statut='clique' THEN 1 ELSE 0 END) as cliques,
    SUM(CASE WHEN statut='desabonne' THEN 1 ELSE 0 END) as desabonnes
  FROM envois GROUP BY compte_id, DATE(date_envoi);
  ```
- [ ] Configurer le rafraîchissement automatique toutes les heures via CRON : `REFRESH MATERIALIZED VIEW CONCURRENTLY analytics_daily`
- [ ] Créer l'index : `CREATE INDEX idx_analytics_daily ON analytics_daily(compte_id, jour DESC)`
- [ ] Créer l'index : `CREATE INDEX idx_envois_perf ON envois(compte_id, date_envoi, statut)`
- [ ] Endpoint `GET /api/analytics/dashboard?period=7d|30d|90d`
- [ ] Endpoint `GET /api/analytics/best-time` pour le "meilleur moment" d'envoi

---

### EN-1663 — [S5] Rapport détaillé campagne + export CSV + heatmap clics 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Medium | **Deadline :** 30/06/2026  
**Règles :** RG-37, RG-38, RG-39  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1663

**Tâches à faire :**

- [ ] Page de rapport `/campaigns/:id/report` avec :
  - Résumé statistique : envoyés, taux ouverture, taux clic, bounces, désabonnements
  - Graphique d'évolution des ouvertures dans le temps
  - Tableau paginé des contacts avec statut et timestamps précis
  - Filtres par statut : envoyé, ouvert, cliqué, désabonné, rebond
- [ ] **Export CSV** de tous les rapports (bouton téléchargement)
- [ ] **Heatmap de clics email** :
  - Overlay visuel sur l'email montrant quels liens ont été cliqués
  - Chaque lien coloré selon la fréquence de clic (rouge = peu cliqué, vert = très cliqué)
  - Pourcentage de clics affiché au survol
- [ ] Endpoint `GET /api/campaigns/:id/report`
- [ ] Endpoint `GET /api/campaigns/:id/export-csv`

---

### EN-1664 — [S5] Gestion des rôles et invitations d'équipe 📋 Todo

**Statut :** 📋 Todo | **Priorité :** High | **Deadline :** 30/06/2026  
**Règles :** RG-40, RG-41, RG-42  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1664

**Tâches à faire :**

- [ ] Implémenter les 3 rôles avec permissions :
  - **Admin** : accès complet (CRUD tout, facturation, gestion équipe)
  - **Éditeur** : création et édition de campagnes (pas facturation, pas gestion équipe)
  - **Analyste** : lecture seule (voir rapports, pas modifier)
- [ ] Page `/settings/team` listant tous les membres avec rôle et date d'ajout
- [ ] Bouton "Inviter un membre" → formulaire email + sélection rôle
  - Envoyer un email avec lien d'activation valide 7 jours
  - Endpoint `POST /api/team/invite`
- [ ] Bouton "Révoquer l'accès" avec confirmation
  - Supprimer le membre de l'équipe
  - Invalider immédiatement TOUS ses tokens JWT actifs (blacklist Redis)
  - Endpoint `DELETE /api/team/:userId`
- [ ] Modifier le rôle d'un membre via un select inline
- [ ] Journaliser toutes les actions dans `audit_logs`

---

### EN-1665 — [S5] Rechargement crédits (Mobile Money + Visa + reçu PDF) 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 30/06/2026  
**Règles :** RG-43 à RG-51  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1665

**Sous-tâches :**

#### EN-1702 — [Backend] Intégration Mobile Money Orange/MTN

**Tâches à faire :**

- [ ] Intégrer l'API **Orange Money** (Côte d'Ivoire) :
  - Initier un paiement : `POST /api/payments/mobile-money`
  - L'utilisateur reçoit un prompt sur son téléphone pour confirmer
  - Polling ou webhook pour la confirmation (statut : pending → success/failed)
- [ ] Intégrer l'API **MTN Mobile Money** (workflow similaire)
- [ ] Transaction SQL atomique à la confirmation :
  ```sql
  BEGIN;
  UPDATE comptes SET solde_credits = solde_credits + :montant WHERE id = :compteId;
  INSERT INTO transactions (compte_id, montant, methode, statut, reference) VALUES (...);
  COMMIT;
  ```
- [ ] Si `solde < seuil_alerte` après une dépense → envoyer alerte email + notification in-app (RG-45)
- [ ] Tests en environnement sandbox opérateur

#### EN-1703 — [Backend + Frontend] Paiement Visa Stripe/PayPal PCI-DSS

**Tâches à faire :**

- [ ] Intégrer **Stripe Elements** (ou PayPal SDK) côté frontend :
  - Formulaire de saisie carte entièrement géré par Stripe (aucun numéro ne transit par notre serveur)
  - Tokenisation côté client → envoyer uniquement le `paymentMethodId` à notre backend
- [ ] Backend : créer le `PaymentIntent` Stripe + confirmer le paiement
- [ ] Configurer le webhook Stripe `payment_intent.succeeded` → créditer le compte
- [ ] Gérer les erreurs : carte refusée, 3DS requis, carte expirée
- [ ] Montants prédéfinis : 5 000, 10 000, 25 000, 50 000 FCFA + montant libre (minimum 1 000 FCFA)
- [ ] Conformité PCI-DSS : ne jamais logger les données de carte

#### EN-1705 — [Backend] Génération reçu PDF + stockage S3

**Tâches à faire :**

- [ ] Utiliser la librairie **PDFKit** ou **Puppeteer** pour générer le reçu
- [ ] Contenu du reçu :
  - Logo NovaSMS
  - Numéro de transaction unique
  - Date et heure
  - Méthode de paiement (Mobile Money ou Visa \*\*\*\*1234)
  - Montant rechargé en FCFA
  - Solde après rechargement
  - Informations du compte marchand
- [ ] Stocker le PDF sur **AWS S3** avec clé unique `receipts/{compteId}/{transactionId}.pdf`
- [ ] Lien de téléchargement signé (URL pré-signée S3, TTL 24h) dans l'historique des transactions
- [ ] Envoyer le reçu par email automatiquement après validation du paiement

---

### EN-1666 — [S5] Recette finale, mise en production & livraison 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Deadline :** 30/06/2026  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1666

**Checklist complète :**

- [ ] Tests manuels de tous les critères d'acceptation des User Stories haute priorité
- [ ] Tests de charge k6 : import 50k lignes < 60s ET réponse < 500ms
- [ ] Audit accessibilité NVDA (Windows) et VoiceOver (Mac) — WCAG 2.1 AA
- [ ] Vérification conformité RGPD : export données OK, suppression < 30j OK, consentement tracé OK
- [ ] Minification et optimisation assets (code splitting Vite + lazy loading routes)
- [ ] Configuration **Sentry** pour les alertes d'erreurs en production
- [ ] Configuration **Mixpanel** pour l'analytics produit
- [ ] Déploiement sur l'environnement de **staging** pour validation finale
- [ ] Bascule en production avec **feature flags** pour activation progressive
- [ ] Transmission accès, documentation et rapport de recette au maître de stage
- [ ] Mise en place du support post-livraison (2 semaines)

---

### EN-1706 — [Perf/A11Y/RGPD] Audit final Lighthouse + k6 + WCAG 2.1 AA 📋 Todo

**Statut :** 📋 Todo | **Priorité :** Urgent | **Points :** 5 | **Deadline :** 28/06/2026  
**Règles :** RG-52, RG-53, RG-60  
**Lien :** https://linear.app/sankofalabapp/issue/EN-1706

**Checklist :**

- [ ] **Audit Lighthouse CI** :
  - LCP (Largest Contentful Paint) < 3 secondes
  - Performance score > 90
  - Accessibility score > 90
  - Best Practices score > 90
- [ ] **Code splitting Vite** : `import()` dynamique pour toutes les routes secondaires
- [ ] **Lazy loading** : images, composants lourds (éditeur email, canvas React Flow)
- [ ] **Test NVDA** (Windows) sur les parcours critiques : inscription, envoi campagne, dashboard
- [ ] **Test VoiceOver** (Mac) sur les mêmes parcours
- [ ] **Vérification WCAG 2.1 AA** :
  - Contraste couleurs ratio ≥ 4.5:1 pour le texte normal
  - Tous les éléments interactifs accessibles au clavier
  - Labels `aria-label` sur tous les boutons icône
  - Focus visible sur tous les éléments interactifs
- [ ] **Test de charge k6** : 500 utilisateurs simultanés, réponse < 500ms
- [ ] **Vérification RGPD finale** :
  - Export des données personnelles fonctionne (JSON + CSV)
  - Suppression/anonymisation effective sous 30 jours
  - Consentement tracé avec date et source sur chaque import
- [ ] **npm audit** : aucune vulnérabilité critique ou high
- [ ] Rapport Lighthouse HTML + rapport k6 HTML à fournir au maître de stage

---

## 📏 RÈGLES DE GESTION COMPLÈTES

| Code  | Module     | Description                                                                   |
| ----- | ---------- | ----------------------------------------------------------------------------- |
| RG-01 | Auth       | Compte créé via formulaire : nom, email pro, mot de passe, boutique, pays     |
| RG-02 | Auth       | Validation par lien email — validité 24h                                      |
| RG-03 | Auth       | Solde de crédits en temps réel + seuil d'alerte configurable                  |
| RG-04 | Auth       | JWT : access token 8h + refresh token 30j                                     |
| RG-05 | Auth       | Blocage temporaire après 5 tentatives échouées                                |
| RG-06 | Auth       | 2FA optionnel — TOTP ou SMS                                                   |
| RG-07 | Auth       | Wizard onboarding 4 étapes avec sauvegarde d'état + possibilité de saut       |
| RG-08 | Contacts   | Import CSV, XLS, XLSX — max 50 000 lignes                                     |
| RG-09 | Contacts   | Mapping visuel des colonnes obligatoire avant import                          |
| RG-10 | Contacts   | Prévisualisation des 5 premières lignes avant confirmation                    |
| RG-11 | Contacts   | Déduplication automatique sur email ET téléphone                              |
| RG-12 | Contacts   | Rapport d'import : succès / doublons / erreurs                                |
| RG-13 | Contacts   | Un contact appartient à un seul compte marchand                               |
| RG-14 | Contacts   | Segments statiques (liste fixe) ou dynamiques (règles)                        |
| RG-15 | Contacts   | Segments dynamiques recalculés à chaque modification                          |
| RG-16 | Contacts   | Opérateurs ET/OU avec aperçu nombre contacts en temps réel                    |
| RG-17 | Campagnes  | Une campagne = un seul canal (Email, SMS, WhatsApp ou Push)                   |
| RG-18 | Campagnes  | Cible une liste explicite ou un segment dynamique                             |
| RG-19 | Campagnes  | Éditeur Email : 20+ templates + import HTML custom                            |
| RG-20 | Campagnes  | Éditeur SMS : compteur par tranche 160 chars + calcul coût                    |
| RG-21 | Campagnes  | Variables dynamiques {{prénom}}, {{boutique}}, {{code_promo}}                 |
| RG-22 | Campagnes  | Lien STOP injecté automatiquement et obligatoirement dans tous les SMS        |
| RG-23 | Campagnes  | Planification avec fuseaux horaires configurables + option "meilleur moment"  |
| RG-24 | Campagnes  | Annulation possible jusqu'à 5 minutes avant l'envoi planifié                  |
| RG-25 | Campagnes  | A/B Test Email : 2 objets sur % configurable, envoi gagnant automatique       |
| RG-26 | Campagnes  | Critère de victoire A/B configurable : ouverture ou clic                      |
| RG-27 | Auto       | Automatisation simple déclenchée par ajout d'un contact                       |
| RG-28 | Auto       | Délai configurable : immédiat, 30 min, 1h, 1 jour...                          |
| RG-29 | Auto       | Workflow multi-étapes : canvas avec nœuds Envoi, Attente, Condition, Tag, Fin |
| RG-30 | Auto       | Conditions : ouverture email, clic lien, achat détecté, tag présent           |
| RG-31 | Auto       | Chaque automatisation maintient un compteur d'envois                          |
| RG-32 | Auto       | Activation/désactivation en 1 clic sans perte de configuration                |
| RG-33 | Analytics  | KPIs : messages envoyés, taux ouverture, taux clic, taux désinscription       |
| RG-34 | Analytics  | Graphiques disponibles sur 3 périodes : 7j, 30j, 90j                          |
| RG-35 | Analytics  | Top 5 meilleures campagnes selon critère configurable                         |
| RG-36 | Analytics  | Heatmap horaires d'engagement sur les 30 derniers jours                       |
| RG-37 | Analytics  | Export CSV disponible pour tous les rapports                                  |
| RG-38 | Analytics  | Rapport détaillé : liste des contacts ayant ouvert/cliqué avec timestamps     |
| RG-39 | Analytics  | Heatmap de clics email avec zones et fréquence                                |
| RG-40 | Compte     | Rôles : Admin (pleins droits), Éditeur (campagnes), Analyste (lecture)        |
| RG-41 | Compte     | Invitation par email — lien valide 7 jours                                    |
| RG-42 | Compte     | Révocation immédiate — invalide tous les tokens actifs                        |
| RG-43 | Billing    | Solde mis à jour en temps réel après chaque envoi                             |
| RG-44 | Billing    | Historique consommation détaillé par canal et par campagne                    |
| RG-45 | Billing    | Alerte email + notification in-app sous le seuil configuré                    |
| RG-46 | Billing    | Rechargements acceptés : Mobile Money et carte Visa uniquement                |
| RG-47 | Billing    | Mobile Money : confirmation par code OTP opérateur                            |
| RG-48 | Billing    | Visa : formulaire sécurisé conforme PCI-DSS                                   |
| RG-49 | Billing    | Montants prédéfinis (5k, 10k, 25k, 50k FCFA) ou libre                         |
| RG-50 | Billing    | Crédit instantané après validation du paiement                                |
| RG-51 | Billing    | Reçu PDF généré et téléchargeable pour chaque transaction                     |
| RG-52 | Transverse | LCP < 3 secondes en conditions réseau normales                                |
| RG-53 | Transverse | Temps de réponse API < 500ms                                                  |
| RG-54 | Transverse | Support 1 million de contacts par compte sans dégradation                     |
| RG-55 | Transverse | TLS 1.3 en transit + AES-256 au repos                                         |
| RG-56 | Transverse | RGPD : suppression physique ou anonymisation sous 30 jours                    |
| RG-57 | Transverse | Export données personnelles JSON ou CSV sur demande                           |
| RG-58 | Transverse | Consentement explicite requis + tracé (date + source)                         |
| RG-59 | Transverse | Audit log immuable pour toutes les actions sensibles                          |
| RG-60 | Transverse | Conformité WCAG 2.1 niveau AA                                                 |

---

## 🔗 CONVENTION GITHUB ↔ LINEAR

### Connexion GitHub à Linear

1. Dans Linear → **Settings** → **Integrations** → **GitHub** → clic **Connect**
2. Autoriser Linear sur le compte GitHub et sélectionner le repo `romualdKO/NOVASMS`
3. Dès lors, Linear détecte automatiquement tous les commits/branches/PRs référençant un `EN-XXXX`

### Convention de branches

```
main              → production (protégée, PR obligatoire)
develop           → intégration continue
feature/EN-XXXX-nom-court  → une branche par issue
fix/EN-XXXX-description    → pour les corrections
```

### Convention de commits — OBLIGATOIRE

Chaque commit DOIT contenir le numéro Linear pour la synchronisation automatique.

| Préfixe     | Usage                                    | Exemple                                               |
| ----------- | ---------------------------------------- | ----------------------------------------------------- |
| `feat:`     | Nouvelle fonctionnalité                  | `feat: EN-1730 init monorepo React + NestJS`          |
| `fix:`      | Correction de bug                        | `fix: EN-1675 correction expiration refresh token`    |
| `refactor:` | Refactoring sans changement comportement | `refactor: EN-1656 extraction logique SMS`            |
| `test:`     | Ajout/modification de tests              | `test: EN-1645 tests unitaires import CSV`            |
| `docs:`     | Documentation                            | `docs: EN-1730 mise à jour README`                    |
| `chore:`    | Maintenance, dépendances                 | `chore: EN-1730 mise à jour dépendances npm`          |
| `closes`    | Ferme l'issue au merge                   | `feat: closes EN-1632 formulaire inscription complet` |
| `refs`      | Lie sans fermer                          | `feat: refs EN-1730 setup partiel`                    |

### Ce que voit ton maître de stage sur chaque issue Linear

- ✅ Toutes les branches créées pour l'issue
- ✅ Tous les commits avec message, hash et auteur
- ✅ La Pull Request associée avec son statut (open / in review / merged)
- ✅ L'issue passe automatiquement en **Done** quand la PR est mergée avec `closes EN-XXXX`
- ✅ La progression globale visible dans la roadmap du projet

### Workflow quotidien recommandé

```bash
# 1. Choisir une issue Todo dans le sprint en cours
# 2. Créer la branche depuis develop
git checkout develop && git pull
git checkout -b feature/EN-1730-init-repo-github

# 3. Développer par petits commits réguliers
git add .
git commit -m "feat: EN-1730 structure monorepo apps/frontend + apps/backend"
git commit -m "feat: EN-1730 configure ESLint + Prettier"

# 4. Pousser la branche
git push origin feature/EN-1730-init-repo-github

# 5. Ouvrir une Pull Request sur GitHub vers develop
# Titre PR : "feat: closes EN-1730 init repo GitHub complet"

# 6. Après review et merge → Linear ferme automatiquement l'issue EN-1730 ✅
```

---

_Document généré le 22 avril 2026 — Synchronisé depuis Linear : sankofalabapp.linear.app_  
_GitHub : https://github.com/romualdKO/NOVASMS_
