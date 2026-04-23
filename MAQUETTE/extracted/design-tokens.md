# NovaSMS Design Tokens (extracted)

Source files:
- MAQUETTE/novasms-figma-all-screens.html
- MAQUETTE/pageacceuil.html

## 1) Colors

Core brand:
- `--brand-primary`: `#2EC80A`
- `--brand-dark`: `#25A208`
- `--brand-lime`: `#AAEE22`
- `--brand-teal`: `#0C5460`
- `--brand-light`: `#EDFCE8`
- `--brand-text`: `#145C04`
- `--brand-gradient`: `linear-gradient(135deg, #2EC80A 0%, #AAEE22 100%)`

Semantic/support:
- `--success`: `#16A34A`
- `--danger`: `#DC2626`
- `--warning`: `#D97706`
- `--info`: `#0C5460`

Surface/text from app screens:
- `--bg`: `#F7F9F7`
- `--surface`: `#FFFFFF`
- `--muted`: `#F0F7F0`
- `--border`: `rgba(0,0,0,0.08)`
- `--border-md`: `rgba(0,0,0,0.14)`
- `--text-1`: `#1A1A1A`
- `--text-2`: `#6B7280`
- `--text-3`: `#9CA3AF`

Landing (tailwind token names):
- `primary`: `#2EC80A`
- `secondary`: `#0C5460`
- `surface`: `#FDFDFD`
- `background`: `#F7F9F6`
- `surface-variant`: `#F0F4EF`
- `on-surface`: `#0C1409`
- `on-surface-variant`: `#434D40`
- `outline`: `#D1D9CD`
- `outline-variant`: `#E1E9DD`

## 2) Typography

From app screens (backoffice):
- Font family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- Base size: `14px`
- Common weights: `500`, `600`, `700`

From landing:
- Headline family: `Manrope`
- Body family: `Inter`
- Weights used: `400`, `500`, `600`, `700`, `800`

Scale observed:
- H1 dashboard header area: `14px` (compact app header)
- KPI value: `21px-22px`
- Section/card titles: `13px`
- Body text: `12px-14px`
- Small/meta text: `9.5px-11.5px`

## 3) Radius + spacing

Radius tokens:
- `--r-sm`: `6px`
- `--r-md`: `8px`
- `--r-lg`: `12px`
- `--r-xl`: `16px`

Landing radius set:
- default `4px`, `lg: 8px`, `xl: 12px`, `2xl: 24px`, `full: 9999px`

Spacing cadence seen in layouts:
- `4px`, `6px`, `8px`, `10px`, `12px`, `14px`, `16px`, `18px`, `20px`, `24px`, `30px`, `32px`, `40px`, `60px`

Suggested Tailwind mapping for integration:
- `1`=4px, `1.5`=6px, `2`=8px, `2.5`=10px, `3`=12px, `3.5`=14px, `4`=16px, `4.5`=18px, `5`=20px, `6`=24px, `7.5`=30px, `8`=32px, `10`=40px, `15`=60px

## 4) Reusable components (from maquettes)

Main shell:
- Sidebar (`.sidebar`, `.nav-item`, `.nav-badge`)
- Top header (`.header`, `.credits-pill`, `.hdr-actions`)
- Content container (`.content`)

Data/UI blocks:
- Cards (`.card`, `.card-title`, `.card-subtitle`)
- KPI cards (`.kpi-grid`, `.kpi`)
- Tables (`.data-table`)
- Form controls (`.form-input`, `.form-select`, `.form-textarea`)
- Buttons (`.btn-primary`, `.btn-outline`, `.btn-teal`, `.btn-sm`, `.btn-ghost`)
- Tags/chips/status (`.tag`, `.chip`, `.status`)
- Wizard stepper (`.wizard-steps`, `.wstep*`)

Special modules:
- Workflow canvas (`.wf-canvas`, `.wf-node*`)
- Phone preview (`.phone-mock`, `.sms-bubble`)
- Analytics stat cards (`.analytics-stat`, `.progress-*`)

## 5) Integration notes (React + Tailwind)

- Keep two visual contexts:
  - Public marketing (landing): Manrope + Inter
  - Backoffice app (6 screens): system font stack compact density
- Convert global CSS tokens into Tailwind `theme.extend.colors`, `fontFamily`, `borderRadius`, and spacing.
- Start by extracting one screen per feature page with shared app shell components.
- Keep HTML semantics and ARIA labels when creating missing Auth/Onboarding screens.
