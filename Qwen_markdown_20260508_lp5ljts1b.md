# 📱 NOVASMS — PLANNING COMPLET DE DÉVELOPPEMENT

**Auteur :** Konan Konan N'dri Romuald  
**Période :** 16 avril 2026 → 30 juin 2026 (10 semaines)  
**Méthode :** Agile / Scrum — 5 sprints  
**GitHub :** https://github.com/romualdKO/NOVASMS  
**Linear :** https://linear.app/sankofalabapp  
**Stack :** React 18 + TypeScript + NestJS + PostgreSQL + Redis + BullMQ

---

## 🏗 INFORMATIONS PROJET
| Champ | Valeur |
|-------|--------|
| Nom | NovaSMS — Plateforme SaaS Marketing Multicanale |
| Auteur | Konan Konan N'dri Romuald |
| Structure | Sankofa Lab |
| Début | 16 avril 2026 |
| Fin | 30 juin 2026 |
| Durée | 10 semaines (2 mois 2 semaines) |
| Méthodologie | Agile / Scrum |
| Nombre de sprints | 5 sprints de 2 semaines |

### Stack Technique
| Couche | Technologies |
|--------|--------------|
| Frontend | React 18 + TypeScript + Vite + Tailwind CSS + Radix UI + Zustand + React Router v6 |
| Backend | Node.js + NestJS + Prisma ORM + OpenAPI/Swagger + Zod |
| Base de données | PostgreSQL 15 (Primary + Replica) + Redis 7 (Cache + Queue) |
| Jobs asynchrones | BullMQ (queues) |
| Infrastructure | Docker Compose (dev) + AWS S3 (fichiers) |
| Tests | Jest (unitaires) + Playwright (E2E) + k6 (performance) |
| Monitoring | Sentry (erreurs) + Mixpanel (analytics produit) |
| Sécurité | JWT + TLS 1.3 + AES-256 + RGPD + WCAG 2.1 AA |
| Intégrations | Mobile Money (Orange/MTN) + Visa (Stripe/PayPal) + OAuth 2.0 + SendGrid |

### Personas cibles
- **Responsable Marketing** — Campagnes à grande échelle, segmentation avancée, dashboard analytics
- **Gérant de Boutique** — Simplicité, automatisations pré-configurées, prise en main rapide
- **Directrice des Opérations** — Gestion des rôles, contrôle des dépenses, logs d'activité

---

## 📅 PLANNING GLOBAL — GANTT
| Semaine | Phase / Sprint | Objectif Principal | Livrable Clé | Deadline |
|---------|----------------|-------------------|--------------|----------|
| S1 (16-22 avr) | ✅ Phase 0 — Analyse | UML + Architecture | Diagrammes UML, choix stack | 22/04/2026 |
| S1-S2 (23 avr - 6 mai) | 🔧 Phase 1 — Setup | Env. dév + CI/CD + Archi | Repo GitHub, Docker, CI | 06/05/2026 |
| S2-S3 (23 avr - 6 mai) | 🔐 Sprint 1 — Auth | Inscription, Connexion, JWT, Onboarding | Login fonctionnel, Wizard 4 étapes | 06/05/2026 |
| S4-S5 (7-20 mai) | 👥 Sprint 2 — Contacts | Import CSV, Segments | Import 50k lignes, Fiche contact | 20/05/2026 |
| S6-S7 (21 mai - 3 juin) | 📣 Sprint 3 — Campagnes | Éditeur Email/SMS, A/B Test | Envoi campagne complet | 03/06/2026 |
| S8 (4-10 juin) | ⚡ Sprint 4 — Automatisations | Auto simple, Workflow canvas | Canvas React Flow, Queue BullMQ | 10/06/2026 |
| S9-S10 (11-30 juin) | 📊 Sprint 5 — Analytics+Billing | Dashboard, Paiement, Livraison | Mise en production | 30/06/2026 |

---

## ✅ PHASE 0 — ANALYSE & ARCHITECTURE — TERMINÉE
*(Toutes les issues EN-1721 à EN-1736 sont Done. Livrables : UML, MPD, Architecture système, Choix techniques validés.)*

---

## 🔐 SPRINT 1 — AUTH & ONBOARDING (S2-S3)
| Issue | Tâche | Statut | Règles |
|-------|-------|--------|--------|
| EN-1632 | Formulaire d'inscription marchand | ✅ Done | RG-01 |
| EN-1633 | Validation du compte par email (lien 24h) | ✅ Done | RG-02 |
| EN-1635 | Authentification JWT (access 8h + refresh 30j) | ✅ Done | RG-04 |
| EN-1640 | Blocage compte après 5 tentatives échouées | ✅ Done | RG-05 |
| EN-1641 | 2FA optionnel (TOTP / SMS) | ✅ Done | RG-06 |
| EN-1643 | Wizard onboarding 4 étapes | ✅ Done | RG-07 |

---

## 👥 SPRINT 2 — GESTION DES CONTACTS (S4-S5)
| Issue | Tâche | Statut | Règles |
|-------|-------|--------|--------|
| EN-1645 | Import contacts CSV/XLS/XLSX (50k lignes max) | ✅ Done | RG-08, RG-10, RG-12 |
| EN-1646 | Interface de mapping visuel des colonnes | ✅ Done | RG-09 |
| EN-1648 | Déduplication automatique email / téléphone | ✅ Done | RG-11, RG-13 |
| EN-1650 | Fiche contact (détail, historique, tags) | ✅ Done | US-006 |
| EN-1652 | Segments statiques et dynamiques (ET/OU, recalcul auto) | ✅ Done | RG-14, RG-15, RG-16 |
| EN-1682 | Droit à l'oubli + export + consentement | ✅ Done | RG-56, RG-57, RG-58 |

---

## 📣 SPRINT 3 — CRÉATION DE CAMPAGNES (S6-S7)
| Issue | Tâche | Deadline | Règles |
|-------|-------|----------|--------|
| EN-1654 | Éditeur Email (20 templates + drag-and-drop + HTML custom) | 03/06/2026 | RG-17, RG-18, RG-19, RG-21 |
| EN-1656 | Éditeur SMS (compteur 160 chars + coût + lien STOP auto) | 03/06/2026 | RG-20, RG-21, RG-22 |
| EN-1657 | Planification d'envoi (fuseaux horaires + meilleur moment) | 03/06/2026 | RG-23, RG-24 |
| EN-1658 | A/B Testing Email | 03/06/2026 | RG-25, RG-26 |

---

## ⚡ SPRINT 4 — AUTOMATISATIONS (S8)
| Issue | Tâche | Deadline | Règles |
|-------|-------|----------|--------|
| EN-1660 | Automatisation simple (déclencheur ajout contact + délai) | 10/06/2026 | RG-27, RG-28, RG-31, RG-32 |
| EN-1661 | Workflow multi-étapes canvas | 10/06/2026 | RG-29, RG-30 |

---

## 📊 SPRINT 5 — ANALYTICS & BILLING + LIVRAISON (S9-S10)
| Issue | Tâche | Deadline | Règles |
|-------|-------|----------|--------|
| EN-1662 | Dashboard Analytics (KPIs + graphiques + heatmap) | 30/06/2026 | RG-33 à RG-36 |
| EN-1663 | Rapport détaillé campagne + export CSV + heatmap clics | 30/06/2026 | RG-37 à RG-39 |
| EN-1664 | Gestion des rôles et invitations d'équipe | 30/06/2026 | RG-40 à RG-42 |
| EN-1665 | Rechargement crédits (Mobile Money + Visa + reçu PDF) | 30/06/2026 | RG-43 à RG-51 |
| EN-1666 | Recette finale, mise en production & livraison | 30/06/2026 | — |
| EN-1706 | Audit final Lighthouse + k6 + WCAG 2.1 AA | 28/06/2026 | RG-52, RG-53, RG-60 |

---

## 📏 RÈGLES DE GESTION COMPLÈTES (RG-01 à RG-60)
| Code | Module | Description |
|------|--------|-------------|
| RG-01 | Auth | Compte créé via formulaire : nom, email pro, mot de passe, boutique, pays |
| RG-02 | Auth | Validation par lien email — validité 24h |
| RG-03 | Auth | Solde de crédits en temps réel + seuil d'alerte configurable |
| RG-04 | Auth | JWT : access token 8h + refresh token 30j |
| RG-05 | Auth | Blocage temporaire après 5 tentatives échouées |
| RG-06 | Auth | 2FA optionnel — TOTP ou SMS |
| RG-07 | Auth | Wizard onboarding 4 étapes avec sauvegarde d'état + possibilité de saut |
| RG-08 | Contacts | Import CSV, XLS, XLSX — max 50 000 lignes |
| RG-09 | Contacts | Mapping visuel des colonnes obligatoire avant import |
| RG-10 | Contacts | Prévisualisation des 5 premières lignes avant confirmation |
| RG-11 | Contacts | Déduplication automatique sur email ET téléphone |
| RG-12 | Contacts | Rapport d'import : succès / doublons / erreurs |
| RG-13 | Contacts | Un contact appartient à un seul compte marchand |
| RG-14 | Contacts | Segments statiques (liste fixe) ou dynamiques (règles) |
| RG-15 | Contacts | Segments dynamiques recalculés à chaque modification |
| RG-16 | Contacts | Opérateurs ET/OU avec aperçu nombre contacts en temps réel |
| RG-17 | Campagnes | Une campagne = un seul canal (Email, SMS, WhatsApp ou Push) |
| RG-18 | Campagnes | Cible une liste explicite ou un segment dynamique |
| RG-19 | Campagnes | Éditeur Email : 20+ templates + import HTML custom |
| RG-20 | Campagnes | Éditeur SMS : compteur par tranche 160 chars + calcul coût |
| RG-21 | Campagnes | Variables dynamiques {{prénom}}, {{boutique}}, {{code_promo}} |
| RG-22 | Campagnes | Lien STOP injecté automatiquement et obligatoirement dans tous les SMS |
| RG-23 | Campagnes | Planification avec fuseaux horaires configurables + option "meilleur moment" |
| RG-24 | Campagnes | Annulation possible jusqu'à 5 minutes avant l'envoi planifié |
| RG-25 | Campagnes | A/B Test Email : 2 objets sur % configurable, envoi gagnant automatique |
| RG-26 | Campagnes | Critère de victoire A/B configurable : ouverture ou clic |
| RG-27 | Auto | Automatisation simple déclenchée par ajout d'un contact |
| RG-28 | Auto | Délai configurable : immédiat, 30 min, 1h, 1 jour... |
| RG-29 | Auto | Workflow multi-étapes : canvas avec nœuds Envoi, Attente, Condition, Tag, Fin |
| RG-30 | Auto | Conditions : ouverture email, clic lien, achat détecté, tag présent |
| RG-31 | Auto | Chaque automatisation maintient un compteur d'envois |
| RG-32 | Auto | Activation/désactivation en 1 clic sans perte de configuration |
| RG-33 | Analytics | KPIs : messages envoyés, taux ouverture, taux clic, taux désinscription |
| RG-34 | Analytics | Graphiques disponibles sur 3 périodes : 7j, 30j, 90j |
| RG-35 | Analytics | Top 5 meilleures campagnes selon critère configurable |
| RG-36 | Analytics | Heatmap horaires d'engagement sur les 30 derniers jours |
| RG-37 | Analytics | Export CSV disponible pour tous les rapports analytics |
| RG-38 | Analytics | Rapport détaillé : liste des contacts ayant ouvert/cliqué avec timestamps |
| RG-39 | Analytics | Heatmap de clics email avec zones et fréquence |
| RG-40 | Compte | Rôles : Admin (pleins droits), Éditeur (campagnes), Analyste (lecture) |
| RG-41 | Compte | Invitation par email — lien valide 7 jours |
| RG-42 | Compte | Révocation immédiate — invalide tous les tokens actifs |
| RG-43 | Billing | Solde mis à jour en temps réel après chaque envoi |
| RG-44 | Billing | Historique consommation détaillé par canal et par campagne |
| RG-45 | Billing | Alerte email + notification in-app sous le seuil configuré |
| RG-46 | Billing | Rechargements acceptés : Mobile Money et carte Visa uniquement |
| RG-47 | Billing | Mobile Money : confirmation par code OTP opérateur |
| RG-48 | Billing | Visa : formulaire sécurisé conforme PCI-DSS |
| RG-49 | Billing | Montants prédéfinis (5k, 10k, 25k, 50k FCFA) ou libre |
| RG-50 | Billing | Crédit instantané après validation du paiement |
| RG-51 | Billing | Reçu PDF généré et téléchargeable pour chaque transaction |
| RG-52 | Transverse | LCP < 3 secondes en conditions réseau normales |
| RG-53 | Transverse | Temps de réponse API < 500ms |
| RG-54 | Transverse | Support 1 million de contacts par compte sans dégradation |
| RG-55 | Transverse | TLS 1.3 en transit + AES-256 au repos |
| RG-56 | Transverse | RGPD : suppression physique ou anonymisation sous 30 jours |
| RG-57 | Transverse | Export données personnelles JSON ou CSV sur demande |
| RG-58 | Transverse | Consentement explicite requis + tracé (date + source) |
| RG-59 | Transverse | Audit log immuable pour toutes les actions sensibles |
| RG-60 | Transverse | Conformité WCAG 2.1 niveau AA |

---

## 🔗 CONVENTION GITHUB ↔ LINEAR
- **Connexion :** Linear → Settings → Integrations → GitHub → Connect
- **Branches :** `main` (prod), `develop` (intégration), `feature/EN-XXXX-nom-court`
- **Commits :** Doivent contenir `EN-XXXX` (ex: `feat: closes EN-1645 import CSV fonctionnel`)
- **Automatisation :** PR merged → Linear issue passe automatiquement en `Done`