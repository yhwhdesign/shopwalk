> Rule: If you had to Google it to write it, we comment it.

---

## Environment Variables

```env
# Supabase — get these from your Supabase project dashboard
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# App
VITE_APP_NAME=ShopWalk
VITE_APP_VERSION=0.1.0

# Brand — set by installer during Setup Wizard, stored in .env
VITE_BRAND_PRIMARY=#0056A0
VITE_BRAND_ACCENT=#00ADEF
VITE_BRAND_DARK=#333333
VITE_BRAND_LOGO=/icons/logo.png
VITE_SUPPORT_EMAIL=
```

---

## Decisions Log

| Date | Decision | Reason |
|---|---|---|
| 2026-05-18 | Chose Vite over Next.js | PWA-first, no SSR needed, simpler deploy |
| 2026-05-18 | Chose Supabase over custom Express API | Auth + DB + Storage out of the box, self-hostable for white-label |
| 2026-05-18 | Single global.css | Easier to maintain, trace, and hand off |
| 2026-05-18 | 3-level comment standard | Codebase doubles as a learning resource |
| 2026-05-19 | shadcn init with Radix base | Radix is the intended shadcn pairing, best accessibility support |
| 2026-05-19 | Removed all hardcoded company names | White-label requires zero brand assumptions in code |
| 2026-05-19 | App renamed from shopwalk-pwa to shopwalk | Cleaner naming, PWA is an implementation detail not an identity |

| 2026-05-19 | Set allowImportingTsExtensions to false in tsconfig.node.json | composite: true conflicts with noEmit: true, removing noEmit caused allowImportingTsExtensions to error |

---

## Build Phases

### Phase 1 — Foundation 🟡 IN PROGRESS
- [x] Repo initialized
- [x] Vite + React + TS config
- [x] Tailwind CSS v4 installed
- [x] shadcn/ui initialized with Radix
- [x] Full folder structure scaffolded
- [x] Placeholder files created
- [x] .env.example created
- [x] Naming conventions established
- [x] PROJECT_STATUS.md created and maintained
- [ ] global.css scaffold built
- [ ] brand.ts config built
- [ ] constants.ts built
- [ ] All type files built (product, audit, user, index)
- [ ] Wouter router wired up
- [ ] AppShell + NavBar + Header built

### Phase 2 — Core Features ⬜ NOT STARTED
- [ ] Supabase project created
- [ ] Database schema + migrations
- [ ] Product CRUD via Supabase
- [ ] ShopWalk audit session flow
- [ ] Count capture + min/max comparison
- [ ] Replenishment order generation

### Phase 3 — Output ⬜ NOT STARTED
- [ ] PDF report generation
- [ ] Historical audit records
- [ ] Dashboard + Recharts analytics

### Phase 4 — Admin + Setup ⬜ NOT STARTED
- [ ] Admin dashboard
- [ ] Product manager + CSV import
- [ ] Setup wizard (white-label onboarding)

### Phase 5 — PWA Polish ⬜ NOT STARTED
- [ ] Service worker + offline mode
- [ ] Install prompts
- [ ] Mobile/tablet final optimization