# NOVASMS
## Plateforme de messagerie marchande

### Cahier des Charges Fonctionnel
**Version 1.0 – Avril 2026**

Application Web — Interface Marchand

Document confidentiel — Usage interne

---

# 1. Contexte & Objectifs

## 1.1 Présentation de NovaSMS

NovaSMS est une plateforme SaaS de messagerie B2B permettant aux marchands d'envoyer des communications ciblées à leurs clients via différents canaux :

- SMS
- Email
- WhatsApp
- Push

L'application web constitue l'interface centrale utilisée par les marchands pour gérer leurs campagnes.

## 1.2 Objectifs stratégiques

- Offrir aux marchands un outil simple et puissant
- Centraliser tous les canaux de messagerie
- Automatiser les envois
- Fournir des analytics en temps réel
- Garantir la conformité RGPD

## 1.3 Périmètre du projet

Le document couvre uniquement l'application web destinée aux marchands.

Hors périmètre :

- Backend
- APIs d'intégration
- Portail d'administration NovaSMS

---

# 2. Personas Utilisateurs

## Persona 1 — Responsable Marketing

**Nom :** Aminata K.

**Objectif :**
Créer et envoyer des campagnes promotionnelles à grande échelle.

**Frustrations :**

- Plusieurs outils à utiliser
- Peu de visibilité sur les résultats

**Besoins :**

- Dashboard analytics
- Templates prêts à l'emploi
- Segmentation avancée

---

## Persona 2 — Gérant de Boutique

**Nom :** Kofi M.

**Objectif :**
Fidéliser ses clients après achat.

**Frustrations :**

- Peu de temps
- Pas de compétences techniques

**Besoins :**

- Interface simple
- Automatisations préconfigurées
- Prise en main rapide

---

## Persona 3 — Administrateur Compte

**Nom :** Sara D.

**Objectif :**
Gérer les accès et contrôler les dépenses.

**Frustrations :**

- Manque de visibilité sur les droits utilisateurs

**Besoins :**

- Gestion des rôles
- Alertes budget
- Logs d'activité

---

# 3. User Stories

## 3.1 Authentification & Onboarding

### US-001 - Création de compte

**En tant que :** Nouveau marchand

**Je veux :**
Créer un compte NovaSMS.

**Afin de :**
Accéder à la plateforme.

### Critères

- Nom
- Email
- Mot de passe
- Nom boutique
- Pays
- Validation email
- Wizard onboarding
- Indicateur de force du mot de passe

**Priorité : Haute**

---

### US-002 - Connexion

Critères :

- JWT
- Session 8h
- Se souvenir de moi
- Blocage après 5 échecs
- Réinitialisation mot de passe
- 2FA optionnel

**Priorité : Haute**

---

### US-003 - Guide de démarrage

Étapes :

1. Profil
2. Import contacts
3. Canal
4. Première campagne

**Priorité : Haute**

---

## 3.2 Gestion des Contacts

### US-004 - Import des contacts

Formats :

- CSV
- XLS
- XLSX

Limite :

- 50 000 lignes

Fonctionnalités :

- Mapping colonnes
- Prévisualisation
- Rapport d'import
- Déduplication

**Priorité : Haute**

---

### US-005 - Segmentation

Critères :

- Localisation
- Date ajout
- Dernier achat
- Tags
- Historique ouverture

Fonctionnalités :

- ET / OU
- Sauvegarde
- Mise à jour automatique

**Priorité : Haute**

---

### US-006 - Consultation contact

Affichage :

- Informations personnelles
- Tags
- Historique messages
- Notes
- Désabonnement

**Priorité : Moyenne**

---

## 3.3 Création de Campagnes

### US-007 - Campagne Email

Fonctionnalités :

- Drag & Drop
- Templates
- Prévisualisation
- Variables dynamiques
- HTML personnalisé

Variables :

- {{prénom}}
- {{boutique}}
- {{code_promo}}

**Priorité : Haute**

---

### US-008 - Campagne SMS

Fonctionnalités :

- Compteur caractères
- Coût estimé
- Liens trackés
- Aperçu mobile
- STOP obligatoire

**Priorité : Haute**

---

### US-009 - Planification

Fonctionnalités :

- Date / heure
- Fuseau horaire
- Meilleur moment
- Notification email
- Annulation

**Priorité : Haute**

---

### US-010 - Test A/B

Fonctionnalités :

- Version A
- Version B
- Split audience
- Détermination automatique du gagnant
- Rapport comparatif

**Priorité : Moyenne**

---

## 3.4 Automatisations

### US-011 - Message de bienvenue

Déclencheur :

- Nouveau contact

Canaux :

- Email
- SMS
- WhatsApp

**Priorité : Haute**

---

### US-012 - Workflow avancé

Noeuds :

- Message
- Attente
- Condition
- Tag
- Fin

**Priorité : Moyenne**

---

## 3.5 Analytics

### US-013 - Dashboard

KPIs :

- Messages envoyés
- Taux d'ouverture
- Taux de clic
- Désinscriptions

Graphiques :

- 7 jours
- 30 jours
- 90 jours

**Priorité : Haute**

---

### US-014 - Rapport détaillé

- Ouverture
- Clic
- Rebond
- Désinscription
- Heatmap
- Comparaison historique

**Priorité : Haute**

---

## 3.6 Gestion du Compte

### US-015 - Gestion équipe

Rôles :

- Admin
- Éditeur
- Analyste

Fonctionnalités :

- Invitation email
- Activation
- Révocation

**Priorité : Haute**

---

### US-016 - Facturation

Fonctionnalités :

- Solde crédits
- Historique consommation
- Alertes
- Factures PDF
- Rechargement

**Priorité : Haute**

---

### US-017 - Paiement

Méthodes :

- Mobile Money
- Carte Visa

Fonctionnalités :

- OTP
- Crédit instantané
- Reçu PDF

**Priorité : Haute**

---

# 4. Exigences Non Fonctionnelles

## Performance

- Chargement < 3s
- Réponse < 500ms
- 1 million de contacts
- Import 50 000 lignes < 60s

## Sécurité

- JWT + Refresh Token
- TLS 1.3
- AES-256
- RGPD
- Audit Log
- CSRF
- XSS
- SQL Injection

## Disponibilité

- SLA 99.9%
- Sauvegardes quotidiennes
- Page statut

## Accessibilité

- WCAG 2.1 AA
- Responsive
- Chrome
- Firefox
- Safari
- Edge
- Français
- Anglais

---

# 5. Architecture Technique

## Frontend

- React 18
- TypeScript
- Zustand / Redux Toolkit
- Tailwind CSS
- Radix UI
- React Flow
- Vitest
- Cypress

## API

- REST
- WebSockets
- OAuth 2.0
- Webhooks

## Infrastructure

- Vercel ou AWS Amplify
- CDN
- Sentry
- Mixpanel

---

# 6. Roadmap

## Phase 1 (Semaines 1 à 4)

- Authentification
- Onboarding
- Import contacts
- Campagnes Email
- Campagnes SMS
- Analytics basiques

## Phase 2 (Semaines 5 à 8)

- Segmentation
- Planification
- Tests A/B
- Automatisations
- Gestion équipe

## Phase 3 (Semaines 9 à 10)

- Workflows avancés
- WhatsApp
- Facturation
- Mobile Money
- Visa
- Intégrations e-commerce

---

# 7. Critères de Livraison

1. Toutes les User Stories prioritaires terminées.
2. Tests E2E complets.
3. Lighthouse :
   - Performance ≥ 80
   - Accessibilité ≥ 90
4. Conformité RGPD validée.
5. Aucun bug critique.
6. Documentation à jour.