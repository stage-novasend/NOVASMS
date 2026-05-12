# NOVASMS — Conception et Mise en place d’une plateforme SaaS de communication marketing multicanale

**AUTEUR :** KONAN KONAN N’DRI ROMUALD

---

## 1. Compréhension du projet
### 1.1 Contexte et Vision
NovaSMS est une plateforme SaaS B2B de messagerie marchande multi-canaux (SMS, Email, WhatsApp, Push). L'application web est l'interface centrale permettant aux marchands de gérer l'intégralité de leurs campagnes de communication. Le backend, les APIs d'intégration et le portail d'administration NovaSMS sont hors périmètre de ce document.

### 1.2 Objectifs Stratégiques
- Offrir un outil simple et puissant pour piloter les communications clients.
- Centraliser tous les canaux de messagerie en une interface unifiée.
- Automatiser les envois selon des déclencheurs comportementaux et temporels.
- Fournir des analytics en temps réel pour optimiser les performances.
- Garantir la conformité RGPD et les bonnes pratiques anti-spam.

### 1.3 Personas Cibles
- **Responsable Marketing :** Campagnes à grande échelle, segmentation avancée, dashboard analytics.
- **Gérant de Boutique :** Simplicité, automatisations pré-configurées, prise en main rapide.
- **Directrice des Opérations :** Gestion des rôles, contrôle des dépenses, logs d'activité.

### 1.4 Périmètre Fonctionnel (Modules)
1. Authentification & Onboarding
2. Gestion des Contacts (import, segmentation, fiche contact)
3. Création de Campagnes (Email, SMS, éditeurs visuels, planification, A/B testing)
4. Automatisations (messages déclenchés, workflows multi-étapes)
5. Analytics & Reporting (KPIs, graphiques, exports)
6. Gestion du Compte (rôles, crédits, facturation, rechargement)

### 1.5 Contraintes Techniques et Qualité
- **Performance :** LCP < 3s, réponse < 500ms, gestion de 1M contacts, import 50k lignes < 60s.
- **Sécurité :** JWT, TLS 1.3, AES-256, RGPD, audit logs, protection CSRF/XSS/SQLi.
- **Disponibilité :** SLA 99,9%, sauvegardes quotidiennes.
- **Accessibilité :** WCAG 2.1 AA, responsive, i18n FR/EN.

---

## 2. Démarche Technique du Projet
### 2.1 Phase 0 : Analyse et Cadrage (Semaine 1)
- **Analyse Fonctionnelle Approfondie :** Lecture intégrale du cahier des charges, formalisation des User Stories (US-001 à US-017), extraction des 60 règles de gestion, cartographie des parcours utilisateurs.
- **Analyse Technique Préliminaire :** Étude des contraintes de performance, analyse des besoins en sécurité, identification des intégrations externes (Mobile Money, Visa, OAuth), évaluation des risques.
- **Conception UML :** Diagrammes de Cas d’Utilisation (modulaire & détaillé), Diagramme de Classe, Diagrammes de Séquence (Inscription, Import, Envoi Campagne, Auth).

### 2.2 Phase 1 : Setup et Architecture (Semaines 1-2)
- **Initialisation :** Repo Git, ESLint, Prettier, Husky, CI/CD GitHub Actions, Docker Compose (PostgreSQL + Redis).
- **Architecture Frontend :** React 18 + TypeScript + Vite, Tailwind CSS + Radix UI, Zustand, React Router, structuration par features.
- **Architecture Backend :** Contrat API RESTful (OpenAPI/Swagger), Mocks API (MSW), validation Zod.
- **Base de Données :** Migrations Prisma, scripts de seed, permissions PostgreSQL.

### 2.3 Phase 2 : Développement Itératif par Sprint (Semaines 3-10)
- **Méthodologie :** Découpage en tâches < 2 jours, Definition of Done stricte, Pull Requests, tests unitaires & E2E.
- **Qualité Continue :** CI automatique, couverture >80%, Audit Lighthouse, `npm audit`.
- **Données & Performance :** Pagination cursor-based (>1000), cache Redis segments, Web Workers CSV, workers BullMQ.
- **Sécurité & RGPD :** Chiffrement JWT, validation Zod inputs, lien STOP SMS obligatoire, export/suppression données, audit_logs immuable.

### 2.4 Phase 3 : Recette et Livraison (Semaine 10)
- **Tests de Recette :** Critères US haute priorité, k6 import 50k < 60s, NVDA/VoiceOver, conformité RGPD.
- **Préparation Prod :** Minification, code splitting, lazy loading, variables env prod, Sentry, Mixpanel.
- **Livraison & Handover :** Staging → Prod avec feature flags, documentation technique & utilisateur, support post-livraison 2 semaines.

---

## 3. Plan de Travail & Gantt Agile/Scrum
| SEMAINE | PHASE | OBJECTIF PRINCIPAL | LIVRABLE CLÉ |
|---------|-------|-------------------|--------------|
| S1 | Phase 0 - Analyse | Modélisation UML | Diagramme de classe, séquence, cas d’utilisation |
| S1-S2 | Sprint 1 | Authentification & Onboarding | Inscription + Connexion + Wizard |
| S3-S4 | Sprint 2 | Gestion des Contacts | Import CSV + Fiche contact |
| S5-S6 | Sprint 3 | Création de Campagnes | Éditeurs Email/SMS + Envoi |
| S7-S8 | Sprint 4 | Segmentation & Automatisation | Segments dynamiques + Workflows |
| S9-S10 | Sprint 5 | Analytics & Billing | Dashboard + Paiement + Livraison |

---

## 4. RÈGLES DE GESTION (Résumé)
*(Voir `NOVASMS_PLANNING_COMPLET.md` pour la liste exhaustive RG-01 à RG-60)*

---

## 5. Diagrammes UML & Architecture Système
*(Référentiel visuel validé en Phase 0)*
- **Cas d’Utilisation :** 3 acteurs × 6 modules fonctionnels avec `<<include>>` et `<<extend>>`.
- **Classe :** Compte, Utilisateur, Contact, Segment, Campagne, Envoi, Automatisation, Transaction, Template.
- **Séquence :** Flux Inscription, Import CSV, Envoi Campagne, Authentification JWT.
- **Architecture :** React (Présentation) → NestJS API Gateway → Microservices → PostgreSQL + Redis → AWS S3 → Providers externes (SendGrid, Twilio, Orange/MTN Money, Stripe).

---

## 6. Conclusion
Ce projet de conception de la plateforme NovaSMS a permis de mettre en œuvre une démarche complète d’ingénierie logicielle, allant de la compréhension des besoins métier jusqu’à la modélisation technique et organisationnelle du système. La démarche Agile/Scrum a favorisé une organisation progressive, garantissant flexibilité et qualité. La modélisation UML a structuré efficacement les données et traitements, assurant cohérence et évolutivité. Enfin, les exigences fortes en performance, sécurité et RGPD positionnent NovaSMS comme une solution robuste et moderne pour le digital marketing.