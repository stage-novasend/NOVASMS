import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'NovaSMS_API_Documentation.pdf');

const HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NovaSMS — Documentation API</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #0f172a;
    background: #fff;
    font-size: 13px;
    line-height: 1.6;
  }

  /* ── COVER PAGE ── */
  .cover {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 60%, #1a1a2e 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 72px;
    page-break-after: always;
    position: relative;
    overflow: hidden;
  }
  .cover::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 480px; height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%);
  }
  .cover::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -80px;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
  }
  .cover-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 60px;
  }
  .cover-logo-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .cover-logo-icon svg { width: 24px; height: 24px; fill: #fff; }
  .cover-logo-text {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.5px;
  }
  .cover-badge {
    display: inline-block;
    background: rgba(59,130,246,0.25);
    border: 1px solid rgba(59,130,246,0.5);
    color: #93c5fd;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
  .cover-title {
    font-size: 46px;
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
  }
  .cover-title span { color: #60a5fa; }
  .cover-subtitle {
    font-size: 17px;
    color: #94a3b8;
    font-weight: 400;
    max-width: 480px;
    line-height: 1.6;
    margin-bottom: 48px;
  }
  .cover-meta {
    display: flex;
    gap: 32px;
  }
  .cover-meta-item { }
  .cover-meta-label {
    font-size: 10px;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;
  }
  .cover-meta-value {
    font-size: 13px;
    color: #cbd5e1;
    font-weight: 500;
  }
  .cover-version {
    position: absolute;
    bottom: 48px; right: 72px;
    font-size: 11px;
    color: #475569;
  }

  /* ── PAGE LAYOUT ── */
  .page {
    padding: 56px 72px;
    max-width: 100%;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 36px;
    border-bottom: 2px solid #e2e8f0;
  }
  .page-header-logo {
    font-size: 13px;
    font-weight: 700;
    color: #3b82f6;
    letter-spacing: -0.3px;
  }
  .page-header-section {
    font-size: 11px;
    color: #94a3b8;
    font-weight: 500;
  }

  /* ── TYPOGRAPHY ── */
  h1 {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.8px;
    margin-bottom: 8px;
  }
  h1 .accent { color: #3b82f6; }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin: 40px 0 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  h2 .h2-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px; height: 24px;
    background: #eff6ff;
    color: #3b82f6;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    flex-shrink: 0;
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: #0f172a;
    margin: 24px 0 10px;
    letter-spacing: -0.2px;
  }

  p { margin-bottom: 12px; color: #334155; }

  /* ── INTRO SECTION ── */
  .intro-box {
    background: linear-gradient(135deg, #f0f7ff, #e8f4fd);
    border: 1px solid #bfdbfe;
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 28px;
  }
  .intro-box p { margin: 0; color: #1e3a5f; font-size: 13px; }

  /* ── BASE URL ── */
  .base-url-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #0f172a;
    border-radius: 10px;
    padding: 14px 20px;
    margin: 16px 0 24px;
  }
  .base-url-label {
    font-size: 10px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .base-url-value {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 13px;
    color: #60a5fa;
    font-weight: 500;
  }

  /* ── TABLE ── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0 24px;
    font-size: 12px;
  }
  th {
    background: #f8fafc;
    color: #475569;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 10px 14px;
    text-align: left;
    border-bottom: 2px solid #e2e8f0;
  }
  td {
    padding: 10px 14px;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: top;
    color: #334155;
  }
  tr:last-child td { border-bottom: none; }
  td code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    background: #f1f5f9;
    padding: 2px 6px;
    border-radius: 4px;
    color: #0f172a;
  }
  .req { color: #dc2626; font-weight: 600; font-size: 10px; }
  .opt { color: #94a3b8; font-size: 10px; }

  /* ── ENDPOINT CARD ── */
  .endpoint-card {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    margin: 16px 0 28px;
  }
  .endpoint-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
  }
  .method {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 5px;
    letter-spacing: 0.3px;
  }
  .method-get { background: #d1fae5; color: #065f46; }
  .method-post { background: #dbeafe; color: #1e40af; }
  .method-patch { background: #fef3c7; color: #92400e; }
  .method-delete { background: #fee2e2; color: #991b1b; }
  .endpoint-path {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: #0f172a;
    font-weight: 500;
    flex: 1;
  }
  .endpoint-desc {
    font-size: 11px;
    color: #64748b;
    font-weight: 500;
  }
  .endpoint-body {
    padding: 16px 18px;
  }
  .scope-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 10px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 20px;
    margin-bottom: 12px;
    font-family: 'JetBrains Mono', monospace;
  }

  /* ── CODE BLOCK ── */
  .code-block {
    background: #0f172a;
    border-radius: 8px;
    padding: 16px 18px;
    margin: 12px 0;
    overflow: hidden;
    position: relative;
  }
  .code-lang {
    font-size: 9px;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  .code-block pre {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 11px;
    line-height: 1.7;
    color: #e2e8f0;
    white-space: pre;
    overflow: auto;
  }
  .code-block .kw { color: #60a5fa; }   /* keyword */
  .code-block .st { color: #34d399; }   /* string */
  .code-block .cm { color: #475569; }   /* comment */
  .code-block .nu { color: #f59e0b; }   /* number */
  .code-block .fn { color: #a78bfa; }   /* function */

  /* ── RESPONSE BOX ── */
  .response-box {
    background: #0f2a1a;
    border: 1px solid #166534;
    border-radius: 8px;
    padding: 14px 18px;
    margin: 10px 0 16px;
  }
  .response-box .code-lang { color: #4ade80; }
  .response-box pre {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.7;
    color: #bbf7d0;
  }

  /* ── ALERT ── */
  .alert {
    display: flex;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    margin: 16px 0;
    font-size: 12px;
  }
  .alert-info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; }
  .alert-warn { background: #fffbeb; border: 1px solid #fcd34d; color: #78350f; }
  .alert-icon { font-size: 14px; flex-shrink: 0; margin-top: 1px; }

  /* ── SCOPE TABLE ── */
  .scope-row td:first-child {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #2563eb;
    background: #eff6ff;
  }

  /* ── ERROR TABLE ── */
  .error-row td:first-child {
    font-weight: 700;
    font-size: 12px;
  }
  .error-4xx { color: #dc2626; }
  .error-5xx { color: #9333ea; }

  /* ── STATUS BADGE ── */
  .status {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 4px;
  }
  .status-200 { background: #d1fae5; color: #065f46; }
  .status-201 { background: #dbeafe; color: #1e40af; }
  .status-400 { background: #fee2e2; color: #991b1b; }
  .status-401 { background: #fef3c7; color: #92400e; }
  .status-403 { background: #fce7f3; color: #9d174d; }
  .status-429 { background: #ede9fe; color: #5b21b6; }
  .status-500 { background: #f1f5f9; color: #475569; }

  /* ── TOC ── */
  .toc {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 36px;
  }
  .toc-title {
    font-size: 12px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 16px;
  }
  .toc-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    font-size: 13px;
    color: #334155;
    border-bottom: 1px dashed #e2e8f0;
  }
  .toc-item:last-child { border-bottom: none; }
  .toc-num {
    font-size: 10px;
    font-weight: 700;
    color: #94a3b8;
    width: 20px;
    flex-shrink: 0;
  }
  .toc-page {
    margin-left: auto;
    font-size: 11px;
    color: #94a3b8;
    font-weight: 500;
  }

  /* ── PAGE BREAK ── */
  .pb { page-break-before: always; }
  .pb-after { page-break-after: always; }

  /* ── GRID ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 14px 0;
  }
  .stat-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px 18px;
    text-align: center;
  }
  .stat-card .num {
    font-size: 24px;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.5px;
  }
  .stat-card .lbl {
    font-size: 11px;
    color: #64748b;
    margin-top: 4px;
  }

  /* ── INLINE CODE ── */
  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    background: #f1f5f9;
    padding: 1px 5px;
    border-radius: 4px;
    color: #0f172a;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 12px;
  }
  ul li {
    color: #334155;
    margin-bottom: 4px;
    font-size: 12px;
  }

  .divider {
    height: 1px;
    background: #e2e8f0;
    margin: 32px 0;
  }

  .footer-note {
    margin-top: 40px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
    font-size: 10px;
    color: #94a3b8;
    text-align: center;
  }
</style>
</head>
<body>

<!-- ══════════════════════════════════════════════════════════
     COVER PAGE
══════════════════════════════════════════════════════════ -->
<div class="cover">
  <div class="cover-logo">
    <div class="cover-logo-icon">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    </div>
    <span class="cover-logo-text">NovaSMS</span>
  </div>

  <div class="cover-badge">Documentation officielle</div>

  <h1 class="cover-title">API Reference<br><span>NovaSMS</span></h1>
  <p class="cover-subtitle">
    Intégrez l'envoi de SMS, d'emails et la gestion de contacts
    directement dans votre application grâce à l'API REST NovaSMS.
  </p>

  <div class="cover-meta">
    <div class="cover-meta-item">
      <div class="cover-meta-label">Version</div>
      <div class="cover-meta-value">v1.0</div>
    </div>
    <div class="cover-meta-item">
      <div class="cover-meta-label">Protocole</div>
      <div class="cover-meta-value">HTTPS / REST / JSON</div>
    </div>
    <div class="cover-meta-item">
      <div class="cover-meta-label">Authentification</div>
      <div class="cover-meta-value">API Key (Bearer)</div>
    </div>
    <div class="cover-meta-item">
      <div class="cover-meta-label">Juillet</div>
      <div class="cover-meta-value">2026</div>
    </div>
  </div>

  <div class="cover-version">© 2026 NovaSMS — Sankofa Lab</div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 2 — SOMMAIRE + INTRODUCTION
══════════════════════════════════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Sommaire & Introduction</span>
  </div>

  <h1>Documentation <span class="accent">API NovaSMS</span></h1>
  <p style="color:#64748b; margin-bottom:28px;">Référence technique complète pour les développeurs</p>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Table des matières</div>
    <div class="toc-item"><span class="toc-num">1.</span> Introduction & URL de base<span class="toc-page">p. 2</span></div>
    <div class="toc-item"><span class="toc-num">2.</span> Authentification par clé API<span class="toc-page">p. 2</span></div>
    <div class="toc-item"><span class="toc-num">3.</span> Permissions & Scopes<span class="toc-page">p. 3</span></div>
    <div class="toc-item"><span class="toc-num">4.</span> Limites & Rate limiting<span class="toc-page">p. 3</span></div>
    <div class="toc-item"><span class="toc-num">5.</span> Format des réponses & Erreurs<span class="toc-page">p. 3</span></div>
    <div class="toc-item"><span class="toc-num">6.</span> Endpoint — Solde de crédits<span class="toc-page">p. 4</span></div>
    <div class="toc-item"><span class="toc-num">7.</span> Endpoint — Envoi de SMS<span class="toc-page">p. 4</span></div>
    <div class="toc-item"><span class="toc-num">8.</span> Endpoint — Envoi d'email<span class="toc-page">p. 5</span></div>
    <div class="toc-item"><span class="toc-num">9.</span> Endpoint — Gestion des contacts<span class="toc-page">p. 6</span></div>
    <div class="toc-item"><span class="toc-num">10.</span> Endpoint — Campagnes<span class="toc-page">p. 7</span></div>
    <div class="toc-item"><span class="toc-num">11.</span> Exemples complets multi-langages<span class="toc-page">p. 8</span></div>
  </div>

  <!-- SECTION 1 -->
  <h2><span class="h2-number">1</span> Introduction & URL de base</h2>
  <div class="intro-box">
    <p>L'API NovaSMS est une API REST qui accepte des requêtes JSON et retourne des réponses JSON. Elle permet à n'importe quelle application (site web, mobile, backend) d'envoyer des SMS et des emails, de gérer des contacts et de consulter les statistiques de campagnes.</p>
  </div>

  <div class="base-url-box">
    <span class="base-url-label">URL de base</span>
    <span class="base-url-value">https://api.novasms.ci/api/v1</span>
  </div>

  <div class="alert alert-info">
    <span class="alert-icon">ℹ</span>
    <span>Toutes les requêtes doivent utiliser <strong>HTTPS</strong>. Les connexions HTTP non sécurisées sont rejetées. Le Content-Type doit être <code>application/json</code> pour les requêtes avec corps.</span>
  </div>

  <!-- SECTION 2 -->
  <h2><span class="h2-number">2</span> Authentification par clé API</h2>
  <p>Chaque requête doit inclure votre clé API dans le header HTTP. Deux formats sont acceptés :</p>

  <div class="code-block">
    <div class="code-lang">Header — Option 1 (recommandé)</div>
    <pre><span class="kw">Authorization</span>: Bearer nvsms_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>
  </div>

  <div class="code-block">
    <div class="code-lang">Header — Option 2</div>
    <pre><span class="kw">X-Api-Key</span>: nvsms_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>
  </div>

  <h3>Générer une clé API</h3>
  <p>Les clés API se gèrent depuis votre espace NovaSMS → section <strong>Clés API</strong> (réservé aux administrateurs du compte). Chaque clé :</p>
  <ul>
    <li>Est affichée <strong>une seule fois</strong> à la création — conservez-la immédiatement</li>
    <li>Commence toujours par <code>nvsms_</code></li>
    <li>Peut être révoquée à tout moment sans affecter les autres clés</li>
    <li>Peut avoir une date d'expiration optionnelle</li>
    <li>Maximum <strong>10 clés actives</strong> par compte</li>
  </ul>

  <div class="alert alert-warn">
    <span class="alert-icon">⚠</span>
    <span><strong>Sécurité :</strong> Ne committez jamais une clé API dans votre dépôt Git. Utilisez des variables d'environnement : <code>NOVASMS_API_KEY=nvsms_...</code></span>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 3 — SCOPES, RATE LIMIT, ERREURS
══════════════════════════════════════════════════════════ -->
<div class="page pb">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Scopes, Rate limit & Erreurs</span>
  </div>

  <!-- SECTION 3 -->
  <h2><span class="h2-number">3</span> Permissions & Scopes</h2>
  <p>À la création d'une clé, vous sélectionnez les permissions accordées. Une requête sur un endpoint protégé par un scope non attribué retourne <code>403 Forbidden</code>.</p>

  <table>
    <thead>
      <tr><th>Scope</th><th>Description</th><th>Endpoints concernés</th></tr>
    </thead>
    <tbody>
      <tr class="scope-row">
        <td><code>sms:send</code></td>
        <td>Envoyer des SMS</td>
        <td><code>POST /v1/sms</code></td>
      </tr>
      <tr class="scope-row">
        <td><code>email:send</code></td>
        <td>Envoyer des emails transactionnels</td>
        <td><code>POST /v1/email</code></td>
      </tr>
      <tr class="scope-row">
        <td><code>contacts:read</code></td>
        <td>Lire la liste et le détail des contacts</td>
        <td><code>GET /v1/contacts</code>, <code>GET /v1/contacts/:id</code></td>
      </tr>
      <tr class="scope-row">
        <td><code>contacts:write</code></td>
        <td>Créer, modifier ou supprimer des contacts</td>
        <td><code>POST</code>, <code>PATCH</code>, <code>DELETE /v1/contacts</code></td>
      </tr>
      <tr class="scope-row">
        <td><code>campaigns:read</code></td>
        <td>Lire la liste des campagnes</td>
        <td><code>GET /v1/campaigns</code></td>
      </tr>
      <tr class="scope-row">
        <td><code>balance:read</code></td>
        <td>Consulter le solde de crédits</td>
        <td><code>GET /v1/balance</code></td>
      </tr>
    </tbody>
  </table>

  <!-- SECTION 4 -->
  <h2><span class="h2-number">4</span> Limites & Rate limiting</h2>

  <div class="grid-2">
    <div class="stat-card">
      <div class="num">60</div>
      <div class="lbl">Requêtes par minute par clé</div>
    </div>
    <div class="stat-card">
      <div class="num">500</div>
      <div class="lbl">Destinataires max par appel SMS/email</div>
    </div>
  </div>

  <p>En cas de dépassement du rate limit, l'API retourne <span class="status status-429">429</span> avec le message <em>"Limite dépassée : 60 requêtes par minute par clé API. Réessayez dans un instant."</em></p>
  <p>Le compteur de rate limit est <strong>par clé API</strong> — deux clés différentes ont leurs propres compteurs indépendants.</p>

  <!-- SECTION 5 -->
  <h2><span class="h2-number">5</span> Format des réponses & Erreurs</h2>
  <p>Toutes les réponses sont en <strong>JSON</strong>. En cas de succès, le champ <code>success: true</code> est présent. En cas d'erreur, l'objet contient <code>statusCode</code>, <code>message</code> et optionnellement <code>error</code>.</p>

  <table>
    <thead>
      <tr><th>Code HTTP</th><th>Signification</th><th>Cause typique</th></tr>
    </thead>
    <tbody>
      <tr class="error-row">
        <td><span class="status status-200">200 OK</span></td>
        <td>Succès</td>
        <td>Requête traitée normalement</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-201">201 Created</span></td>
        <td>Ressource créée</td>
        <td><code>POST /contacts</code> — contact créé</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-400">400 Bad Request</span></td>
        <td>Requête invalide</td>
        <td>Paramètre manquant, solde insuffisant, format incorrect</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-401">401 Unauthorized</span></td>
        <td>Clé manquante ou invalide</td>
        <td>Header Authorization absent ou clé révoquée/expirée</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-403">403 Forbidden</span></td>
        <td>Permission insuffisante</td>
        <td>Scope non accordé à cette clé</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-429">429 Too Many Requests</span></td>
        <td>Rate limit dépassé</td>
        <td>Plus de 60 req/min avec cette clé</td>
      </tr>
      <tr class="error-row">
        <td><span class="status status-500">500 Server Error</span></td>
        <td>Erreur serveur</td>
        <td>Contactez le support NovaSMS</td>
      </tr>
    </tbody>
  </table>

  <div class="code-block">
    <div class="code-lang">Exemple de réponse d'erreur</div>
    <pre>{
  <span class="kw">"statusCode"</span>: <span class="nu">400</span>,
  <span class="kw">"message"</span>: <span class="st">"Solde insuffisant. Requis: 240 FCFA, Disponible: 120 FCFA"</span>,
  <span class="kw">"error"</span>: <span class="st">"Bad Request"</span>
}</pre>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 4 — BALANCE + SMS
══════════════════════════════════════════════════════════ -->
<div class="page pb">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Endpoints — Solde & SMS</span>
  </div>

  <!-- SECTION 6 -->
  <h2><span class="h2-number">6</span> Solde de crédits</h2>
  <p>Consultez le solde de crédits FCFA disponible sur votre compte, ainsi que le seuil d'alerte configuré.</p>

  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-get">GET</span>
      <span class="endpoint-path">/v1/balance</span>
      <span class="endpoint-desc">Consulter le solde de crédits</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 balance:read</div>
      <p>Aucun paramètre requis.</p>

      <div class="code-block">
        <div class="code-lang">cURL</div>
        <pre><span class="fn">curl</span> https://api.novasms.ci/api/v1/balance \
  -H <span class="st">"Authorization: Bearer nvsms_VOTRE_CLE"</span></pre>
      </div>

      <div class="response-box">
        <div class="code-lang">Réponse 200</div>
        <pre>{
  <span class="kw">"balance"</span>: 45000,
  <span class="kw">"alertThreshold"</span>: 5000,
  <span class="kw">"currency"</span>: <span class="st">"FCFA"</span>
}</pre>
      </div>
    </div>
  </div>

  <!-- SECTION 7 -->
  <h2><span class="h2-number">7</span> Envoi de SMS</h2>
  <p>Envoyez un SMS à un ou plusieurs numéros de téléphone. Les crédits sont débités du compte proportionnellement au nombre de destinataires et à la longueur du message (parties de 160 caractères).</p>

  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-post">POST</span>
      <span class="endpoint-path">/v1/sms</span>
      <span class="endpoint-desc">Envoyer un SMS</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 sms:send</div>

      <h3>Corps de la requête</h3>
      <table>
        <thead><tr><th>Champ</th><th>Type</th><th>Requis</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>to</code></td>
            <td>string | string[]</td>
            <td><span class="req">Requis</span></td>
            <td>Numéro(s) au format international. Ex : <code>"+2250700000000"</code>. Maximum 500 numéros.</td>
          </tr>
          <tr>
            <td><code>message</code></td>
            <td>string</td>
            <td><span class="req">Requis</span></td>
            <td>Contenu du SMS. 1 partie = 160 caractères GSM-7 ou 70 caractères Unicode.</td>
          </tr>
        </tbody>
      </table>

      <div class="code-block">
        <div class="code-lang">cURL</div>
        <pre><span class="fn">curl</span> -X POST https://api.novasms.ci/api/v1/sms \
  -H <span class="st">"Authorization: Bearer nvsms_VOTRE_CLE"</span> \
  -H <span class="st">"Content-Type: application/json"</span> \
  -d <span class="st">'{
    "to": ["+2250700000000", "+2250101010101"],
    "message": "Votre code de confirmation est : 4823"
  }'</span></pre>
      </div>

      <div class="response-box">
        <div class="code-lang">Réponse 200</div>
        <pre>{
  <span class="kw">"success"</span>: <span class="nu">true</span>,
  <span class="kw">"sent"</span>: <span class="nu">2</span>,
  <span class="kw">"failed"</span>: <span class="nu">0</span>,
  <span class="kw">"creditsUsed"</span>: <span class="nu">24</span>,
  <span class="kw">"results"</span>: [
    { <span class="kw">"phone"</span>: <span class="st">"+2250700000000"</span>, <span class="kw">"success"</span>: <span class="nu">true</span> },
    { <span class="kw">"phone"</span>: <span class="st">"+2250101010101"</span>, <span class="kw">"success"</span>: <span class="nu">true</span> }
  ]
}</pre>
      </div>

      <div class="alert alert-info">
        <span class="alert-icon">ℹ</span>
        <span><strong>Calcul du coût :</strong> crédits = destinataires × parties × 12 FCFA. Un message de 160 chars = 1 partie. Un message de 200 chars = 2 parties.</span>
      </div>
    </div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 5 — EMAIL
══════════════════════════════════════════════════════════ -->
<div class="page pb">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Endpoints — Email</span>
  </div>

  <!-- SECTION 8 -->
  <h2><span class="h2-number">8</span> Envoi d'email</h2>
  <p>Envoyez des emails transactionnels HTML (notifications, codes OTP, confirmations de commande…) à un ou plusieurs destinataires.</p>

  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-post">POST</span>
      <span class="endpoint-path">/v1/email</span>
      <span class="endpoint-desc">Envoyer un email transactionnel</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 email:send</div>

      <h3>Corps de la requête</h3>
      <table>
        <thead><tr><th>Champ</th><th>Type</th><th>Requis</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>to</code></td>
            <td>string | string[]</td>
            <td><span class="req">Requis</span></td>
            <td>Adresse(s) email destinataire(s). Maximum 500.</td>
          </tr>
          <tr>
            <td><code>subject</code></td>
            <td>string</td>
            <td><span class="req">Requis</span></td>
            <td>Objet de l'email.</td>
          </tr>
          <tr>
            <td><code>html</code></td>
            <td>string</td>
            <td><span class="req">Requis</span></td>
            <td>Corps de l'email en HTML.</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>string</td>
            <td><span class="opt">Optionnel</span></td>
            <td>Version texte brut (fallback pour clients sans HTML).</td>
          </tr>
        </tbody>
      </table>

      <div class="code-block">
        <div class="code-lang">cURL</div>
        <pre><span class="fn">curl</span> -X POST https://api.novasms.ci/api/v1/email \
  -H <span class="st">"Authorization: Bearer nvsms_VOTRE_CLE"</span> \
  -H <span class="st">"Content-Type: application/json"</span> \
  -d <span class="st">'{
    "to": "client@exemple.com",
    "subject": "Votre commande #1042 est confirmée",
    "html": "&lt;h1&gt;Merci pour votre achat !&lt;/h1&gt;&lt;p&gt;Votre commande est en préparation.&lt;/p&gt;"
  }'</span></pre>
      </div>

      <div class="code-block">
        <div class="code-lang">JavaScript (fetch)</div>
        <pre><span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="st">'https://api.novasms.ci/api/v1/email'</span>, {
  method: <span class="st">'POST'</span>,
  headers: {
    <span class="st">'Authorization'</span>: <span class="st">'Bearer nvsms_VOTRE_CLE'</span>,
    <span class="st">'Content-Type'</span>: <span class="st">'application/json'</span>,
  },
  body: <span class="fn">JSON.stringify</span>({
    to: [<span class="st">'alice@exemple.com'</span>, <span class="st">'bob@exemple.com'</span>],
    subject: <span class="st">'Confirmation de commande'</span>,
    html: <span class="st">'&lt;h1&gt;Merci !&lt;/h1&gt;'</span>,
  }),
});
<span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();
<span class="cm">// { success: true, sent: 2, failed: 0 }</span></pre>
      </div>

      <div class="response-box">
        <div class="code-lang">Réponse 200</div>
        <pre>{
  <span class="kw">"success"</span>: <span class="nu">true</span>,
  <span class="kw">"sent"</span>: <span class="nu">1</span>,
  <span class="kw">"failed"</span>: <span class="nu">0</span>,
  <span class="kw">"results"</span>: [
    {
      <span class="kw">"email"</span>: <span class="st">"client@exemple.com"</span>,
      <span class="kw">"success"</span>: <span class="nu">true</span>,
      <span class="kw">"messageId"</span>: <span class="st">"msg_01HX..."</span>
    }
  ]
}</pre>
      </div>
    </div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 6 — CONTACTS
══════════════════════════════════════════════════════════ -->
<div class="page pb">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Endpoints — Contacts</span>
  </div>

  <!-- SECTION 9 -->
  <h2><span class="h2-number">9</span> Gestion des contacts</h2>

  <!-- LIST -->
  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-get">GET</span>
      <span class="endpoint-path">/v1/contacts</span>
      <span class="endpoint-desc">Lister les contacts (paginés)</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 contacts:read</div>
      <table>
        <thead><tr><th>Paramètre URL</th><th>Type</th><th>Défaut</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>limit</code></td><td>number</td><td>20</td><td>Nombre de contacts retournés (max 100)</td></tr>
          <tr><td><code>cursor</code></td><td>string</td><td>—</td><td>Curseur de pagination (valeur <code>nextCursor</code> de la réponse précédente)</td></tr>
          <tr><td><code>search</code></td><td>string</td><td>—</td><td>Recherche par nom, email ou téléphone</td></tr>
        </tbody>
      </table>
      <div class="code-block">
        <div class="code-lang">cURL</div>
        <pre><span class="fn">curl</span> <span class="st">"https://api.novasms.ci/api/v1/contacts?limit=50&amp;search=Kouassi"</span> \
  -H <span class="st">"Authorization: Bearer nvsms_VOTRE_CLE"</span></pre>
      </div>
    </div>
  </div>

  <!-- CREATE -->
  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-post">POST</span>
      <span class="endpoint-path">/v1/contacts</span>
      <span class="endpoint-desc">Créer un contact</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 contacts:write</div>
      <table>
        <thead><tr><th>Champ</th><th>Type</th><th>Requis</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>phone</code></td><td>string</td><td><span class="req">*</span></td><td>Numéro international. <em>phone</em> ou <em>email</em> requis.</td></tr>
          <tr><td><code>email</code></td><td>string</td><td><span class="req">*</span></td><td>Adresse email. <em>phone</em> ou <em>email</em> requis.</td></tr>
          <tr><td><code>firstName</code></td><td>string</td><td><span class="opt">opt.</span></td><td>Prénom</td></tr>
          <tr><td><code>lastName</code></td><td>string</td><td><span class="opt">opt.</span></td><td>Nom</td></tr>
          <tr><td><code>location</code></td><td>string</td><td><span class="opt">opt.</span></td><td>Ville / pays</td></tr>
          <tr><td><code>tags</code></td><td>string[]</td><td><span class="opt">opt.</span></td><td>Tableau de tags. Ex : <code>["vip", "abidjan"]</code></td></tr>
        </tbody>
      </table>
      <div class="code-block">
        <div class="code-lang">cURL</div>
        <pre><span class="fn">curl</span> -X POST https://api.novasms.ci/api/v1/contacts \
  -H <span class="st">"Authorization: Bearer nvsms_VOTRE_CLE"</span> \
  -H <span class="st">"Content-Type: application/json"</span> \
  -d <span class="st">'{"phone":"+2250700000000","firstName":"Kouassi","tags":["vip"]}'</span></pre>
      </div>
      <div class="response-box">
        <div class="code-lang">Réponse 201</div>
        <pre>{ <span class="kw">"success"</span>: <span class="nu">true</span>, <span class="kw">"contact"</span>: { <span class="kw">"id"</span>: <span class="st">"cnt_..."</span>, <span class="kw">"phone"</span>: <span class="st">"+2250700000000"</span>, ... } }</pre>
      </div>
    </div>
  </div>

  <!-- PATCH + DELETE -->
  <div class="grid-2">
    <div class="endpoint-card" style="margin:0">
      <div class="endpoint-header">
        <span class="method method-patch">PATCH</span>
        <span class="endpoint-path" style="font-size:11px">/v1/contacts/:id</span>
      </div>
      <div class="endpoint-body">
        <div class="scope-badge">🔑 contacts:write</div>
        <p style="font-size:11px">Modifie les champs envoyés uniquement. Même corps que POST (tous optionnels).</p>
      </div>
    </div>
    <div class="endpoint-card" style="margin:0">
      <div class="endpoint-header">
        <span class="method method-delete">DELETE</span>
        <span class="endpoint-path" style="font-size:11px">/v1/contacts/:id</span>
      </div>
      <div class="endpoint-body">
        <div class="scope-badge">🔑 contacts:write</div>
        <p style="font-size:11px">Supprime définitivement le contact. Retourne <code>{"success":true}</code>.</p>
      </div>
    </div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════
     PAGE 7 — CAMPAIGNS + EXEMPLES
══════════════════════════════════════════════════════════ -->
<div class="page pb">
  <div class="page-header">
    <span class="page-header-logo">NovaSMS API</span>
    <span class="page-header-section">Endpoints — Campagnes & Exemples</span>
  </div>

  <!-- SECTION 10 -->
  <h2><span class="h2-number">10</span> Campagnes</h2>
  <p>Consultez la liste de vos campagnes créées depuis l'interface NovaSMS.</p>

  <div class="endpoint-card">
    <div class="endpoint-header">
      <span class="method method-get">GET</span>
      <span class="endpoint-path">/v1/campaigns</span>
      <span class="endpoint-desc">Lister les campagnes</span>
    </div>
    <div class="endpoint-body">
      <div class="scope-badge">🔑 campaigns:read</div>
      <table>
        <thead><tr><th>Paramètre URL</th><th>Type</th><th>Défaut</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>limit</code></td><td>number</td><td>20</td><td>Nombre de campagnes retournées (max 100)</td></tr>
        </tbody>
      </table>
      <div class="response-box">
        <div class="code-lang">Réponse 200</div>
        <pre>{
  <span class="kw">"data"</span>: [
    {
      <span class="kw">"id"</span>: <span class="st">"cmp_..."</span>,
      <span class="kw">"name"</span>: <span class="st">"Promo Ramadan 2026"</span>,
      <span class="kw">"channelType"</span>: <span class="st">"SMS"</span>,
      <span class="kw">"status"</span>: <span class="st">"SENT"</span>,
      <span class="kw">"sentCount"</span>: <span class="nu">1420</span>,
      <span class="kw">"createdAt"</span>: <span class="st">"2026-03-10T08:00:00Z"</span>
    }
  ],
  <span class="kw">"total"</span>: <span class="nu">1</span>
}</pre>
      </div>
    </div>
  </div>

  <!-- SECTION 11 -->
  <h2><span class="h2-number">11</span> Exemples complets multi-langages</h2>

  <h3>PHP — Envoyer un SMS</h3>
  <div class="code-block">
    <div class="code-lang">PHP</div>
    <pre><span class="cm">&lt;?php</span>
<span class="kw">$ch</span> = <span class="fn">curl_init</span>(<span class="st">'https://api.novasms.ci/api/v1/sms'</span>);
<span class="fn">curl_setopt_array</span>(<span class="kw">$ch</span>, [
  CURLOPT_RETURNTRANSFER =&gt; <span class="nu">true</span>,
  CURLOPT_POST           =&gt; <span class="nu">true</span>,
  CURLOPT_HTTPHEADER     =&gt; [
    <span class="st">'Authorization: Bearer nvsms_VOTRE_CLE'</span>,
    <span class="st">'Content-Type: application/json'</span>,
  ],
  CURLOPT_POSTFIELDS =&gt; <span class="fn">json_encode</span>([
    <span class="st">'to'</span>      =&gt; [<span class="st">'+2250700000000'</span>],
    <span class="st">'message'</span> =&gt; <span class="st">'Votre commande est prête !'</span>,
  ]),
]);
<span class="kw">$response</span> = <span class="fn">json_decode</span>(<span class="fn">curl_exec</span>(<span class="kw">$ch</span>), <span class="nu">true</span>);
<span class="fn">curl_close</span>(<span class="kw">$ch</span>);
<span class="cm">// $response['sent'] === 1</span></pre>
  </div>

  <h3>Python — Envoyer un email</h3>
  <div class="code-block">
    <div class="code-lang">Python (requests)</div>
    <pre><span class="kw">import</span> requests

<span class="kw">def</span> <span class="fn">send_email</span>(to, subject, html):
    res = requests.<span class="fn">post</span>(
        <span class="st">'https://api.novasms.ci/api/v1/email'</span>,
        headers={<span class="st">'Authorization'</span>: <span class="st">'Bearer nvsms_VOTRE_CLE'</span>},
        json={<span class="st">'to'</span>: to, <span class="st">'subject'</span>: subject, <span class="st">'html'</span>: html},
    )
    res.<span class="fn">raise_for_status</span>()
    <span class="kw">return</span> res.<span class="fn">json</span>()

<span class="fn">send_email</span>(
    to=<span class="st">'client@exemple.com'</span>,
    subject=<span class="st">'Bienvenue !'</span>,
    html=<span class="st">'&lt;h1&gt;Bienvenue sur notre plateforme&lt;/h1&gt;'</span>,
)</pre>
  </div>

  <h3>Node.js — Ajouter un contact puis envoyer un SMS</h3>
  <div class="code-block">
    <div class="code-lang">JavaScript (Node.js)</div>
    <pre><span class="kw">const</span> API = <span class="st">'https://api.novasms.ci/api/v1'</span>;
<span class="kw">const</span> HEADERS = {
  <span class="st">'Authorization'</span>: <span class="st">'Bearer nvsms_VOTRE_CLE'</span>,
  <span class="st">'Content-Type'</span>: <span class="st">'application/json'</span>,
};

<span class="cm">// 1. Créer le contact</span>
<span class="kw">await</span> <span class="fn">fetch</span>(<span class="st">\`\${API}/contacts\`</span>, {
  method: <span class="st">'POST'</span>, headers: HEADERS,
  body: <span class="fn">JSON.stringify</span>({ phone: <span class="st">'+2250700000000'</span>, firstName: <span class="st">'Amara'</span> }),
});

<span class="cm">// 2. Lui envoyer un SMS de bienvenue</span>
<span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="st">\`\${API}/sms\`</span>, {
  method: <span class="st">'POST'</span>, headers: HEADERS,
  body: <span class="fn">JSON.stringify</span>({
    to: <span class="st">'+2250700000000'</span>,
    message: <span class="st">'Bienvenue Amara ! Votre compte est activé.'</span>,
  }),
});
<span class="kw">const</span> { sent, creditsUsed } = <span class="kw">await</span> res.<span class="fn">json</span>();
<span class="fn">console</span>.<span class="fn">log</span>(<span class="st">\`Envoyé : \${sent} | Crédits : \${creditsUsed} FCFA\`</span>);</pre>
  </div>

  <div class="footer-note">
    NovaSMS API v1 — Documentation technique — © 2026 Sankofa Lab — Toute reproduction interdite sans autorisation.
  </div>
</div>

</body>
</html>`;

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage();
await page.setContent(HTML, { waitUntil: 'networkidle' });

await page.pdf({
  path: OUTPUT,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  displayHeaderFooter: false,
});

await browser.close();
console.log('PDF généré :', OUTPUT);
