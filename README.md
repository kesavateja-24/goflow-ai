# GOVFLOW AI — Advanced Citizen Service Orchestration Platform
> **“From a Citizen’s Goal to a Complete Government Journey.”**  
> *Secondary Tagline: “One goal. Every requirement. The complete path.”*  
> **Jurisdiction: Andhra Pradesh, India**

---

## 🏛️ 1. Product Overview

**GOVFLOW AI** is a production-grade civic technology platform built for the citizens of **Andhra Pradesh, India**. Unlike generic chatbots or static government listing sites, GOVFLOW AI is an **AI-powered Government Service Orchestration and Interoperability Engine**.

It takes a natural-language citizen goal (e.g. *"I want to apply for a caste certificate"* or *"I need an income certificate for college scholarship"*) and deterministically builds the **complete dependency-aware journey**:

1. **Foundational Identity & Pre-requisites:** Identifies which documents must be obtained first before the citizen can apply.
2. **Document Intelligence:** Segregates documents into **Mandatory**, **Conditional**, and **Supporting**, listing exact issuing authorities and verified portals.
3. **Interactive Document Dependency Graph (DAG):** A visual relational map showing prerequisite certificates, application gates, field inquiries, and statutory digital signature milestones.
4. **Where to Apply (Online vs Offline):** Identifies online portals (`onlineap.meeseva.gov.in`, `gramawardsachivalayam.ap.gov.in`, `ccla.ap.gov.in`, `registration.ap.gov.in`) and physical venues (Grama Sachivalayam / Ward Sachivalayam / Tahsildar Mandal Office) tailored to the citizen's district and rural/urban jurisdiction.
5. **What Happens Next:** Post-submission workflow detailing Village Revenue Officer (VRO) inspection, Revenue Inspector (RI) report, Tahsildar approval, and QR-code DSC issuance.
6. **Strict Anti-Hallucination & Provenance:** Every requirement, statutory user fee, and processing time is verified against official Government of Andhra Pradesh notifications and citizen charters.
7. **Bilingual Citizen Experience:** Full support for **English**, **తెలుగు (Telugu)**, and **हिन्दी (Hindi)** with deep localized terminology.

---

## 🔒 2. Authoritative Andhra Pradesh Sources (Real Data Only)

All services, links, and procedures in GOVFLOW AI are linked to verified Tier-1 government gateways:

| Department / Body | Official Portal Domain | Services Covered |
| :--- | :--- | :--- |
| **MeeSeva AP** | `onlineap.meeseva.gov.in` | Integrated Caste, Income, Residence, Nativity Certificates |
| **Grama / Ward Sachivalayam (GSWS)** | `gramawardsachivalayam.ap.gov.in` | Decentralized village/ward citizen service delivery |
| **CCLA & Meebhoomi AP** | `meebhoomi.ap.gov.in` / `ccla.ap.gov.in` | Adangal (Pahani), 1-B ROR, Pattadar passbook, land records |
| **JnanaBhumi AP** | `jnanabhumi.ap.gov.in` | Post-matric fee reimbursement (Vidya Deevena & Vasathi Deevena) |
| **ePDS Civil Supplies AP** | `epdsap.ap.gov.in` | Rice Card / White Ration Card application & member changes |
| **Registration & Stamps (IGRS AP)** | `registration.ap.gov.in` | Encumbrance Certificate (EC), Certified Copy (CC) |
| **AP Transport Department (RTA)** | `aptransport.org` / `parivahan.gov.in` | Learner’s Licence (LLR) online test & permanent Driving Licence |
| **AP DISCOMs** | `apcpdcl.in` / `apeasternpower.com` / `apspdcl.in` | New Low Tension (LT Category-I) domestic electricity connection |
| **CDMA Municipal Administration** | `cdma.ap.gov.in` | Birth & Death certificates, Trade licences, Property tax |
| **Social Security Pensions** | `sspensions.ap.gov.in` | NTR Bharosa pensions (Old Age, Widow, Differently-abled) |
| **UIDAI (Central)** | `myaadhaar.uidai.gov.in` | Aadhaar demographic e-KYC and NPCI bank seeding |

---

## 🚀 3. Key Architecture & Features

### 3.1 Initial Full-Screen Language Selection
- Opens upon first visit with large premium cards: **English (🇬🇧)**, **తెలుగు (🇮🇳)**, and **हिन्दी (🇮🇳)**.
- Selected language controls navigation, badges, instruction steps, document checklists, and explanations.
- Can be switched anytime via the top header bar.

### 3.2 Conversational Clarification
- When a request is entered, the AI extracts intent and asks 2 targeted administrative questions:
  1. **District:** Select from all 26 official Andhra Pradesh districts (e.g. Guntur, NTR, Visakhapatnam, Tirupati).
  2. **Location Type:** Rural (Grama Sachivalayam) vs Urban (Ward Sachivalayam).

### 3.3 Authentic 5-Stage Orchestration
- Displays meaningful civic processing stages instead of a generic spinner:
  1. *Understanding your goal & legal intent...*
  2. *Checking applicable statutory requirements...*
  3. *Mapping document prerequisites & dependency graph...*
  4. *Finding official AP government portals & Gazette notifications...*
  5. *Building your complete journey...*

### 3.4 The Complete Journey Engine
- **"What do I need right now?" Banner:** Highlights the single next action to prevent cognitive overload.
- **Roadmap UI:** 7 to 10 granular stages with expandable details, statutory fees, expected timeframe, and direct outbound buttons to verified portals.
- **Progress Tracker:** Interactive checklists with dynamic percentage and stage buttons.
- **Document-First Mode ("I already have these documents"):** Allows citizens to mark held certificates, dynamically streamlining prerequisite roadmap steps.
- **Interactive Dependency Map (DAG):** Clickable node hierarchy with an inspector drawer explaining why the document is needed and where to get it.
- **Exception Handling:** Officially recognized workarounds for name mismatch, lost documents, or missing parent certificates.
- **Printable Docket:** Dedicated print layout (`window.print()`) formatted as an official citizen docket with checklists and citations.

### 3.5 Signature 3D Interactive Civic Visualization
- Built with **Three.js** depicting the orbital flow: **Citizen → Grama/Ward Secretariat → State Directorate → Service Delivery**.
- Supports interactive mouse movement, responsive resize, and an accessible **Reduced-Motion Mode** for low-power devices.

---

## 🛠️ 4. Local Installation & Development

### Prerequisites
- Node.js (v20+ or v22+)
- npm (v10+)

### Setup
```bash
# Clone or navigate to the project directory
cd c:\Users\91701\Downloads\Goflowai

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser:
# http://127.0.0.1:5173/
```

### Production Build
```bash
npm run build
```

---

## 🧪 5. Testing the 10 Mandatory Flows

1. **Language Selection (Telugu):** Open `http://127.0.0.1:5173/`, select **తెలుగు**, and click Continue. Entire UI renders in authentic Telugu.
2. **Natural Language Goal Query:** Type `"కాలేజీ స్కాలర్‌షిప్ కొరకు ఆదాయ ధ్రువీకరణ పత్రం కావాలి"` or `"I want to apply for a caste certificate"`.
3. **Clarification Modal:** Choose your AP District (e.g. Guntur or Visakhapatnam) and Rural/Urban setting.
4. **Document Inspection:** Click on any document card or node in the dependency graph to inspect its legal reason, issuing authority, and official portal link.
5. **Document-First Streamlining:** In "Documents You Need", mark Aadhaar and existing certificates as "I have this"; see roadmap recalculate.
6. **Outbound Portal Links:** Click "OPEN OFFICIAL PORTAL ↗" to verify real destinations (e.g. `onlineap.meeseva.gov.in`).
7. **Service Search:** Go to "Explore Services" and search for *"adangal"*, *"driving licence"*, or *"rice card"*.
8. **Category Navigation:** Browse the 12 rich civic categories.
9. **Track Application:** Click "Track Application" in the header to enter an application number and launch the verified government tracking gateway.
10. **Print Mode:** Click "Print Docket" in the journey view to inspect the print preview layout.

---

## 📄 6. Disclaimer

GOVFLOW AI is an independent citizen-navigation platform designed to simplify complex public procedures for Andhra Pradesh citizens. It is not an official government agency and routes citizens directly to authorized state portals for statutory submissions, payments, and document downloads.
