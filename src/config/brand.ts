// ============================================================
// BRAND CONFIG — src/config/brand.ts
//
// This is the white-label control center for ShopWalk.
//
// HOW IT WORKS:
// Every value here is read from .env (environment variables).
// The || operator provides a fallback default if no .env value
// is found — this keeps the app from crashing during dev.
//
// HOW WHITE-LABELING WORKS:
// 1. A company downloads ShopWalk
// 2. They run the Setup Wizard
// 3. The wizard writes their values to .env
// 4. This file picks up those values automatically
// 5. injectBrandTokens() applies them as CSS variables
// 6. The entire app updates — no code changes needed
//
// NEVER hardcode a company name, color, or logo here.
// All values must come from .env or the Setup Wizard.
// ============================================================

// import.meta.env is how Vite exposes .env variables to the app.
// Only variables prefixed with VITE_ are accessible here.
// This is a security feature — it prevents server secrets
// from leaking into the browser bundle.

export const brand = {
  // The display name shown in the header, page titles, and PDF reports
  name: import.meta.env.VITE_APP_NAME || "ShopWalk",

  // App version — useful for debugging and support
  version: import.meta.env.VITE_APP_VERSION || "0.1.0",

  // Brand colors — these become CSS variables at runtime
  primaryColor: import.meta.env.VITE_BRAND_PRIMARY || "#0056A0",
  accentColor: import.meta.env.VITE_BRAND_ACCENT || "#00ADEF",
  darkColor: import.meta.env.VITE_BRAND_DARK || "#333333",

  // Logo URL — can be a local path or a remote URL
  logoUrl: import.meta.env.VITE_BRAND_LOGO || "/icons/logo.png",

  // Support contact shown in the Setup Wizard and error pages
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "",
} as const;
// "as const" tells TypeScript to treat these values as fixed literals,
// not just generic strings. This gives better autocomplete and type safety.


// ============================================================
// INJECT BRAND TOKENS
//
// This function takes the brand config values and writes them
// directly into the CSS as custom properties (variables).
//
// Call this once in main.tsx before the app renders.
// After that, every CSS var() in global.css reflects the brand.
// ============================================================

export function injectBrandTokens(): void {
  // document.documentElement is the <html> element —
  // setting CSS variables here makes them available app-wide
  // because :root in CSS also refers to the <html> element.
  const root = document.documentElement;

  root.style.setProperty("--color-primary", brand.primaryColor);
  root.style.setProperty("--color-accent", brand.accentColor);
  root.style.setProperty("--color-dark", brand.darkColor);
}