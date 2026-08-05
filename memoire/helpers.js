// ─── Helpers partagés — moteur de génération PDF (PDFKit) ─────────────────────
const PDFDocument = require('../node_modules/pdfkit');
const fs = require('fs');

const C = {
  primary: '#6C3CE1',
  dark: '#111827',
  muted: '#6B7280',
  light: '#F5F3FF',
  border: '#E5E7EB',
  white: '#FFFFFF',
  green: '#059669',
  orange: '#D97706',
  red: '#DC2626',
  codeBg: '#1E1E2E',
  codeFg: '#CDD6F4',
  accent: '#7C3AED',
  pass: '#10B981',
  bg0: '#0F0F1A',
};
const PW = 595.28,
  PH = 841.89,
  M = 55,
  CW = PW - M * 2;

function makeDoc(outPath, subtitle) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: M, bottom: M, left: M, right: M },
    autoFirstPage: false,
    bufferPages: true,
    info: { Title: `NovaSMS — ${subtitle}`, Author: 'Romuald KO' },
  });
  doc.pipe(fs.createWriteStream(outPath));
  let pc = 0;

  function NP() {
    doc.addPage();
    pc++;
    doc
      .save()
      .moveTo(M, PH - 42)
      .lineTo(PW - M, PH - 42)
      .strokeColor(C.border)
      .lineWidth(0.5)
      .stroke()
      .fontSize(7.5)
      .font('Helvetica')
      .fillColor(C.muted)
      .text(`NovaSMS — ${subtitle}`, M, PH - 33, { width: CW / 2, align: 'left', lineBreak: false })
      .text(String(pc), M, PH - 33, { width: CW, align: 'right', lineBreak: false })
      .restore();
    doc.y = M + 8;
  }
  function SL() {
    return PH - 62 - doc.y;
  }
  function ES(n) {
    if (SL() < n) NP();
  }

  function cover(num, t1, t2) {
    doc.addPage();
    pc++;
    doc.rect(0, 0, PW, PH).fill(C.bg0);
    doc.rect(0, 0, PW, 6).fill(C.primary);
    doc.rect(PW - 7, 0, 7, PH).fill(C.primary + '44');
    doc.fontSize(9).font('Helvetica').fillColor(C.primary).text(`DOCUMENT ${num} / 5`, M, 50);
    doc
      .fontSize(52)
      .font('Helvetica-Bold')
      .fillColor(C.primary)
      .text('Nova', M, 80, { continued: true })
      .fillColor('#FFF')
      .text('SMS');
    doc.fontSize(16).font('Helvetica-Bold').fillColor('#E2E8F0').text(t1, M, 148);
    doc
      .moveTo(M, 175)
      .lineTo(M + 360, 175)
      .strokeColor(C.primary)
      .lineWidth(1.5)
      .stroke();
    doc.fontSize(10).font('Helvetica').fillColor('#9CA3AF').text(t2, M, 183);
    doc
      .rect(M, 230, CW, 55)
      .fill('#1A1A2E')
      .strokeColor(C.primary + '55')
      .lineWidth(0.8)
      .stroke();
    doc
      .fontSize(9)
      .font('Helvetica')
      .fillColor('#6B7280')
      .text(
        'Stage Sankofa Lab  ·  Romuald KO  ·  Document régénéré depuis le code réel du dépôt',
        M + 12,
        244,
      )
      .text(
        'Plateforme SaaS B2B Messagerie Multi-Canal — NestJS · PostgreSQL · Redis · React 19',
        M + 12,
        260,
      );
    doc.y = PH - 1;
  }

  function toc(items) {
    NP();
    doc.rect(M, doc.y, CW, 36).fill(C.primary);
    doc
      .fontSize(17)
      .font('Helvetica-Bold')
      .fillColor('#FFF')
      .text('Table des matières', M + 12, doc.y + 10);
    doc.y += 48;
    items.forEach(([n, t], i) => {
      ES(22);
      const y0 = doc.y;
      doc.rect(M, y0, 28, 20).fill(C.primary);
      doc
        .fontSize(9)
        .font('Helvetica-Bold')
        .fillColor('#FFF')
        .text(n, M + 5, y0 + 5, { lineBreak: false });
      doc
        .rect(M + 28, y0, CW - 28, 20)
        .fill(i % 2 === 0 ? C.light : '#FAFAFA')
        .strokeColor(C.border)
        .lineWidth(0.3)
        .stroke();
      doc
        .fontSize(9)
        .font('Helvetica')
        .fillColor(C.dark)
        .text(t, M + 36, y0 + 5, { width: CW - 44, lineBreak: false });
      doc.y = y0 + 20;
    });
  }

  function CH(t) {
    NP();
    doc.rect(0, 0, PW, 54).fill(C.bg0);
    doc.rect(0, 54, PW, 3).fill(C.primary);
    doc.fontSize(18).font('Helvetica-Bold').fillColor('#FFF').text(t, M, 18);
    doc.y = 68;
  }
  function H2(t) {
    ES(46);
    doc.moveDown(0.4);
    const y0 = doc.y;
    doc.rect(M, y0, 3, 17).fill(C.primary);
    doc
      .fontSize(12.5)
      .font('Helvetica-Bold')
      .fillColor(C.dark)
      .text(t, M + 9, y0);
    doc.moveDown(0.3);
    doc
      .moveTo(M, doc.y)
      .lineTo(PW - M, doc.y)
      .strokeColor(C.border)
      .lineWidth(0.4)
      .stroke();
    doc.moveDown(0.35);
  }
  function H3(t) {
    ES(28);
    doc.moveDown(0.25);
    doc
      .fontSize(11)
      .font('Helvetica-Bold')
      .fillColor(C.accent)
      .text('▸  ' + t);
    doc.moveDown(0.2);
  }
  function H4(t) {
    ES(20);
    doc
      .fontSize(10)
      .font('Helvetica-Bold')
      .fillColor(C.dark)
      .text('— ' + t);
    doc.moveDown(0.15);
  }
  function B(t) {
    ES(14);
    doc
      .fontSize(9.5)
      .font('Helvetica')
      .fillColor(C.dark)
      .text(t, M, doc.y, { lineGap: 3.5, align: 'justify', width: CW });
    doc.moveDown(0.3);
  }
  function UL(items) {
    items.forEach((item) => {
      ES(13);
      const y0 = doc.y;
      const [k, v] = item.includes('→') ? item.split('→') : [null, item];
      doc.rect(M, y0 + 5, 5, 5).fill(C.primary);
      if (k) {
        doc
          .fontSize(9.5)
          .font('Helvetica-Bold')
          .fillColor(C.dark)
          .text(k.trim(), M + 12, y0, { continued: true, width: CW - 12 })
          .font('Helvetica')
          .fillColor(C.muted)
          .text(' → ' + v.trim());
      } else {
        doc
          .fontSize(9.5)
          .font('Helvetica')
          .fillColor(C.dark)
          .text(v.trim(), M + 12, y0, { width: CW - 12 });
      }
      doc.moveDown(0.08);
    });
    doc.moveDown(0.25);
  }
  function CODE(lines, label) {
    const lh = 11.5,
      bH = lines.length * lh + 18;
    ES(bH + 10);
    if (label) {
      doc.fontSize(7.5).font('Helvetica-Bold').fillColor(C.muted).text(label, M, doc.y);
      doc.moveDown(0.1);
    }
    const bY = doc.y;
    doc.rect(M, bY, CW, bH).fill(C.codeBg);
    doc.rect(M, bY, 2, bH).fill(C.primary);
    lines.forEach((line, i) => {
      const ly = bY + 9 + i * lh;
      doc
        .fontSize(6.5)
        .font('Courier')
        .fillColor('#4A4A6A')
        .text(String(i + 1).padStart(2), M + 4, ly, { lineBreak: false });
      doc
        .fontSize(6.5)
        .font('Courier')
        .fillColor(C.codeFg)
        .text(line, M + 20, ly, { lineBreak: false, width: CW - 24 });
    });
    doc.y = bY + bH + 7;
  }
  function BOX(color, icon, title, lines) {
    const lh = 13,
      bH = 22 + lines.length * lh + 8;
    ES(bH + 6);
    const bY = doc.y;
    doc
      .rect(M, bY, CW, bH)
      .fill(color + '14')
      .strokeColor(color)
      .lineWidth(0.7)
      .stroke();
    doc.rect(M, bY, 3, bH).fill(color);
    doc
      .fontSize(9.5)
      .font('Helvetica-Bold')
      .fillColor(color)
      .text(icon + '  ' + title, M + 9, bY + 7);
    lines.forEach((l, i) =>
      doc
        .fontSize(9)
        .font('Helvetica')
        .fillColor(C.dark)
        .text(l, M + 9, bY + 22 + i * lh, { width: CW - 18 }),
    );
    doc.y = bY + bH + 8;
  }
  function TABLE(headers, rows, ratios) {
    const cW = (ratios || headers.map(() => 1 / headers.length)).map((r) => r * CW);
    const rH = 19;
    ES(Math.min((rows.length + 1) * rH + 6, 80));
    let cy = doc.y;
    const DR = (cols, isH) => {
      if (cy + rH > PH - 58) {
        NP();
        cy = doc.y;
      }
      cols.forEach((col, ci) => {
        const x = M + cW.slice(0, ci).reduce((a, b) => a + b, 0);
        doc
          .rect(x, cy, cW[ci], rH)
          .fill(isH ? C.primary : ci === 0 ? C.light : '#FAFAFA')
          .strokeColor(C.border)
          .lineWidth(0.3)
          .stroke();
        doc
          .fontSize(isH ? 8 : 8)
          .font(isH ? 'Helvetica-Bold' : 'Helvetica')
          .fillColor(isH ? '#FFF' : C.dark)
          .text(String(col), x + 4, cy + 5, { width: cW[ci] - 8, lineBreak: false });
      });
      cy += rH;
    };
    DR(headers, true);
    rows.forEach((r) => DR(r, false));
    doc.y = cy + 6;
  }
  function TWO(L, R, lc, rc) {
    const w = (CW - 8) / 2,
      rows = Math.max(L.length, R.length),
      lh = 13,
      bH = rows * lh + 14;
    ES(bH + 6);
    const bY = doc.y;
    doc
      .rect(M, bY, w, bH)
      .fill(lc + '18')
      .strokeColor(lc)
      .lineWidth(0.6)
      .stroke();
    L.forEach((l, i) =>
      doc
        .fontSize(i === 0 ? 9 : 8.5)
        .font(i === 0 ? 'Helvetica-Bold' : 'Helvetica')
        .fillColor(i === 0 ? lc : C.dark)
        .text(l, M + 6, bY + 7 + i * lh, { width: w - 12, lineBreak: false }),
    );
    const rx = M + w + 8;
    doc
      .rect(rx, bY, w, bH)
      .fill(rc + '18')
      .strokeColor(rc)
      .lineWidth(0.6)
      .stroke();
    R.forEach((l, i) =>
      doc
        .fontSize(i === 0 ? 9 : 8.5)
        .font(i === 0 ? 'Helvetica-Bold' : 'Helvetica')
        .fillColor(i === 0 ? rc : C.dark)
        .text(l, rx + 6, bY + 7 + i * lh, { width: w - 12, lineBreak: false }),
    );
    doc.y = bY + bH + 8;
  }
  function QR(q, r) {
    const rH2 = doc.heightOfString(r, { fontSize: 9, width: CW - 18, lineGap: 3 });
    ES(28 + rH2 + 18);
    const qY = doc.y;
    doc.rect(M, qY, CW, 22).fill(C.primary);
    doc
      .fontSize(9.5)
      .font('Helvetica-Bold')
      .fillColor('#FFF')
      .text('Q — ' + q, M + 8, qY + 6, { width: CW - 16 });
    const rY = qY + 22;
    const bH2 = rH2 + 16;
    doc.rect(M, rY, CW, bH2).fill(C.light).strokeColor(C.border).lineWidth(0.4).stroke();
    doc.rect(M, rY, 3, bH2).fill(C.accent);
    doc
      .fontSize(9)
      .font('Helvetica')
      .fillColor(C.dark)
      .text(r, M + 9, rY + 8, { width: CW - 18, lineGap: 3 });
    doc.y = rY + bH2 + 10;
  }

  return {
    doc,
    NP,
    CH,
    H2,
    H3,
    H4,
    B,
    UL,
    CODE,
    BOX,
    TABLE,
    TWO,
    QR,
    cover,
    toc,
    end: () => {
      doc.flushPages();
      doc.end();
    },
  };
}

module.exports = { makeDoc, C };
