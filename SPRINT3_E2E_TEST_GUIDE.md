# 📋 Manual E2E Test Guide - Sprint 3 Campaign Workflow

> **Objective:** Validate complete campaign creation workflow from UI
> **Duration:** ~15 minutes per scenario
> **Prerequisites:** Backend running on localhost:3000, Frontend on localhost:5173

---

## 🚀 Pre-Test Setup

1. **Backend**: `cd apps/backend && npm run start:dev`
2. **Frontend**: `cd apps/frontend && npm run dev`
3. **Database**: Prisma Studio running on `localhost:5555`
4. **Test Account**: Create via registration page

---

## ✅ Scenario 1: Email Campaign with Template

### Step 1️⃣: Channel Selection
- [ ] Navigate to `/campaigns/wizard` → Step 1
- [ ] Select "EMAIL" channel
- [ ] Verify channel indicator shows "EMAIL"
- [ ] Click "Suivant" button

### Step 2️⃣: Content (Template Selection)
- [ ] Should see "Choisir un modèle d'email" screen
- [ ] Verify 14 templates visible in grid
- [ ] Search for "Bienvenue"
  - [ ] Should filter to 3 templates
  - [ ] Should show checkmarks and descriptions
- [ ] Select "Bienvenue - Simple" template
- [ ] Verify template loaded in EmailEditor
  - [ ] Subject filled with template subject
  - [ ] Preheader visible
  - [ ] Content blocks displayed

### Step 3️⃣: Content (Email Editor)
- [ ] Test image upload:
  - [ ] Select "Image" block
  - [ ] Click "Uploader une image"
  - [ ] Upload a PNG/JPEG (~2MB)
  - [ ] Verify image appears in canvas
  - [ ] Verify thumbnail shows in right panel

- [ ] Test text editing:
  - [ ] Click on text block
  - [ ] Edit content
  - [ ] Verify MobilePreview updates in real-time

- [ ] Test variable insertion:
  - [ ] Select text block
  - [ ] Click "{{firstName}}" variable
  - [ ] Verify variable appended to text

- [ ] Click "Enregistrer le contenu" → Next Step

### Step 4️⃣: Audience
- [ ] Select or create a segment
- [ ] Verify recipient count estimated
- [ ] Click "Suivant"

### Step 5️⃣: Scheduling
- [ ] Select date (today + 2 hours)
- [ ] Verify timezone = Africa/Abidjan
- [ ] Toggle "Optimal send time"
  - [ ] Should show confidence % and estimated open rate
  - [ ] Refresh button updates analysis
- [ ] Configure A/B Testing:
  - [ ] Subject A: "Version A"
  - [ ] Subject B: "Version B"
  - [ ] Split: 50%
- [ ] Click "Envoyer la campagne"

### Expected Results ✅
- [ ] Campaign saved in database (check Prisma Studio)
- [ ] Campaign status = "SCHEDULED" or "SENDING"
- [ ] Email sent to recipient
- [ ] Webhook received campaign metrics

---

## ✅ Scenario 2: SMS Campaign

### Step 1️⃣: Channel Selection
- [ ] Select "SMS" channel
- [ ] Click "Suivant"

### Step 2️⃣: Content (SMS Editor)
- [ ] Verify character counter
- [ ] Type: "Hello {{firstName}}, special offer! Offer: 50% OFF. Reply STOP to unsubscribe"
  - [ ] Should show ~95 characters
  - [ ] Cost estimate: 0.08 FCFA × segments
  - [ ] Should include STOP variable check

- [ ] Add link: "https://example.com/offer"
  - [ ] Should shorten and update character count

- [ ] Verify MobilePreview shows SMS bubble

### Step 3️⃣: Audience & Scheduling
- [ ] Select segment
- [ ] Schedule for now
- [ ] Send campaign

### Expected Results ✅
- [ ] SMS sends successfully
- [ ] Character counter accurate
- [ ] Cost calculated correctly
- [ ] STOP variable present

---

## ✅ Scenario 3: Campaign List & Management

### Step 1️⃣: List All Campaigns
- [ ] Navigate to `/campaigns`
- [ ] Should see table with campaigns
- [ ] Columns: Name, Channel, Status, Recipients, Created

### Step 2️⃣: Edit Campaign
- [ ] Click on draft campaign
- [ ] Edit content
- [ ] Change subject line
- [ ] Save changes
- [ ] Verify updated in list

### Step 3️⃣: Cancellation
- [ ] Find scheduled campaign
- [ ] Click "Annuler"
- [ ] Should show countdown timer
- [ ] Status changes to "CANCELLED"

### Expected Results ✅
- [ ] List loads with >0 campaigns
- [ ] Edit updates database
- [ ] Cancellation works within 5 min window

---

## ✅ Scenario 4: A/B Test Report

### Step 1️⃣: Create A/B Campaign
- [ ] Create email campaign with A/B test
- [ ] Subject A: "Save 20% Today"
- [ ] Subject B: "Limited Time: 20% Off"
- [ ] Split: 50%
- [ ] Send to small segment (10 people)

### Step 2️⃣: View A/B Report
- [ ] Navigate to campaign → "A/B Results"
- [ ] Verify report shows:
  - [ ] Variant A stats (sent, opened, clicked)
  - [ ] Variant B stats
  - [ ] Open rate bars (visual comparison)
  - [ ] Click rate bars
  - [ ] Winner indicator
  - [ ] Confidence level
  - [ ] "Sent to remaining" count

### Expected Results ✅
- [ ] Report loads with metrics
- [ ] Visual comparison clear
- [ ] Winner calculated correctly
- [ ] Confidence level updates

---

## ✅ Scenario 5: Image Upload & Storage

### Step 1️⃣: Image Upload
- [ ] Create email campaign
- [ ] Add image block
- [ ] Click "Uploader une image"
- [ ] Upload test image
  - [ ] Try PNG (~500KB) ✅
  - [ ] Try JPEG (~1MB) ✅
  - [ ] Try WEBP (~300KB) ✅
  - [ ] Try GIF (~800KB) ✅
  - [ ] Try >5MB file → Should fail ❌

### Step 2️⃣: Image Storage
- [ ] Open browser DevTools → Network
- [ ] Check request to `/api/campaigns/:id/images/upload`
  - [ ] Status: 200
  - [ ] Response includes URL
- [ ] Verify image appears in canvas
- [ ] Verify API URL in image src

### Step 3️⃣: Database Storage
- [ ] Open Prisma Studio
- [ ] Check `campaign_images` table
- [ ] Verify entry with:
  - [ ] campaignId
  - [ ] fileName
  - [ ] fileSize
  - [ ] mimeType
  - [ ] storageUrl

### Expected Results ✅
- [ ] Image uploads work for all formats
- [ ] File size validation (5MB max)
- [ ] Database entries created
- [ ] URLs accessible

---

## 🐛 Bug Checklist

- [ ] No console errors
- [ ] No network 5xx errors
- [ ] No TypeScript errors
- [ ] Mobile preview updates realtime
- [ ] Icons render correctly (not text)
- [ ] Tailwind styles applied
- [ ] Form validation working
- [ ] API calls use JWT auth
- [ ] Multi-tenant isolation (can't see other account campaigns)

---

## 📊 Performance Checklist

- [ ] Frontend build <650ms
- [ ] Campaign list loads <2s
- [ ] Image upload <5s
- [ ] EmailEditor renders smoothly
- [ ] No memory leaks (DevTools)

---

## ✅ Completion Criteria

- ✅ All 5 scenarios pass
- ✅ No critical bugs
- ✅ No console errors
- ✅ API responds correctly
- ✅ Database synchronized
- ✅ Webhooks working

**Status:** Ready for Sprint 3 Release 🚀
