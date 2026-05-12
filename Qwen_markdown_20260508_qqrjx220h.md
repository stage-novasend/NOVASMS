# NOVASMS — SPÉCIFICATIONS UI/UX & MAQUETTES (FIGMA READY)

**Source :** Maquettes HTML validées + Planning Linear  
**Objectif :** Guide d'implémentation frontend 1:1 avec les écrans cibles

---

## 🖥 1. ÉCRAN DASHBOARD (`/dashboard`)
- **Header :** Logo NovaSMS, Navigation principale, Crédits affichés (`47 500 FCFA · 38% restant`), Bouton `Recharger ↗`, Avatar + Initiales.
- **KPIs Cartes :** 
  - `Contacts 12k`
  - `Campagnes`
  - `Automatisations 3`
  - `Analytics`
- **Graphiques :** Ligne d'évolution (7j/30j), Top 5 campagnes, Heatmap horaires.
- **État vide :** Si aucun données, afficher CTA `Importer vos premiers contacts` ou `Créer une campagne`.

---

## 👥 2. ÉCRAN CONTACTS (`/contacts`)
### Structure
- **Barre d'actions :** `Importer CSV / XLS` | `+ Ajouter un contact` | Recherche globale
- **Filtres actifs (Tags) :** `Localisation : Abidjan ×` | `Tag : VIP ×` | `Créer un segment dynamique`
- **Builder Segment (Expandable) :** 
  - Logique `ET` / `OU`
  - Champs : `Localisation`, `Tag`, `Date ajout`, `Dernier achat`
  - Opérateurs : `est égal à`, `contient`, `avant/après`
  - Bouton `+ Ajouter un critère` | `Sauvegarder`
  - Compteur temps réel : `4 230 contacts correspondent`
- **Tableau :** 
  - Colonnes : `Nom` (Avatar + Initiales + Ville) | `Email` | `Téléphone` | `Tags` | `Ajouté le` | `Statut` (Actif/Inactif) | `Actions (···)`
- **Pagination :** `Affichage 1–5 sur 12 480` | `← Préc.` | `1 2 3 ···` | `Suiv. →`
- **Clic ligne :** Redirige vers `/contacts/:id` (Fiche détail)

---

## 📣 3. ÉCRAN CAMPAGNES (`/campaigns/new`)
### Wizard 4 étapes
1. **Canal :** Sélection unique (SMS / Email / WhatsApp / Push)
2. **Contenu :** 
   - Éditeur SMS : `Textarea`, Compteur `148/160 caractères · 1 SMS`, Coût live
   - Variables : `{{prénom}}`, `{{boutique}}`, `{{code_promo}}`
   - Bloc fixe obligatoire : `STOP au 33700` (non-supprimable)
   - Templates prédéfinis : `PROMO`, `BIENVENUE`, `PANIER`, `RAPPEL`
   - Lien raccourci : `bit.ly/nova20` (tracké)
3. **Audience :** Sélecteur `Segment dynamique` ou `Liste manuelle` + aperçu destinataires (`4 230`)
4. **Planification :** 
   - `Envoyer maintenant` | `Planifier`
   - DateTimePicker + Fuseau horaire IANA (`Africa/Abidjan`)
   - Option `Meilleur moment` (basé analytics)
   - Récap coût : `~338 FCFA`

---

## ⚡ 4. ÉCRAN AUTOMATISATIONS (`/automations`)
### Canvas React Flow
- **En-tête :** `Workflow · Panier abandonné — séquence 3 étapes` | Boutons `Tester` | `Activer le workflow`
- **Palette Nœuds :** 
  - 📨 `Envoi message` (canal + template)
  - ⏱ `Attente` (délai configurable)
  - 🔀 `Condition` (Si ouverture/clic/tag/achat → OUI/NON)
  - 🏷 `Tag` (ajouter/retirer)
  - 🏁 `Fin`
- **Stats Workflow (Sidebar) :**
  - `Entrées totales : 892`
  - `En cours : 124`
  - `Convertis : 318`
  - `Taux conversion : 35.6%`
- **Liste Workflows :** `Message bienvenue` (2 nœuds, Actif) | `Réactivation inactifs` (4 nœuds, Inactif)

---

## 📊 5. ÉCRAN ANALYTICS (`/analytics`)
### Rapport Campagne
- **Header :** `Flash Soldes Ramadan · Email · Envoyé le 14 avr. 2026` | Bouton `Exporter CSV` | `Dupliquer`
- **KPIs Cartes :** 
  - `12 450 Envoyés` | `34.2% Taux ouverture` | `6.8% Taux de clic` | `2.1% Rebonds` | `0.4% Désabonnements`
- **Courbe Ouvertures :** Graphique linéaire (10:00 → 20:00), Pic identifié (`11h30 · 842 ouvertures`), Comparaison moyenne (`+12.1 pt`)
- **Top Liens :** Liste URL + `X clics`
- **Derniers Contacts :** Tableau `Nom · Temps écoulé · Statut` (Ouvert/Cliqué)
- **Heatmap Clics (Email) :** Overlay visuel sur le template, zones colorées par fréquence

---

## 🎨 6. CONVENTIONS DESIGN SYSTEM
| Élément | Spécification |
|---------|---------------|
| **Typographie** | `Inter` ou `SF Pro` pour UI, `Space Grotesk` pour titres |
| **Couleurs** | `primary` (vert Nova), `secondary` (gris foncé), `success` (vert), `warning` (orange), `error` (rouge) |
| **Espacement** | Échelle 4px, 8px, 12px, 16px, 24px, 32px, 48px |
| **Composants** | Radix UI primitives + Tailwind CSS |
| **Responsive** | Mobile-first, breakpoints `sm`, `md`, `lg`, `xl` |
| **Accessibilité** | Contraste ≥ 4.5:1, focus visible, `aria-label` sur icônes, navigation clavier complète |

---
*Document généré pour alignement Frontend/Backend. Prêt pour implémentation Sprint 3 & 4.*