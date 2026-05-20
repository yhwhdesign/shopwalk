// brand.ts pulls from the Setup Wizard or environment variables.
// No company name, logo, or color is hardcoded here.
// The person who installs ShopWalk sets all of this during setup.
export const brand = {
  name: import.meta.env.VITE_APP_NAME || "ShopWalk",
  primaryColor: import.meta.env.VITE_BRAND_PRIMARY || "#0056A0",
  accentColor: import.meta.env.VITE_BRAND_ACCENT || "#00ADEF",
  darkColor: import.meta.env.VITE_BRAND_DARK || "#333333",
  logoUrl: import.meta.env.VITE_BRAND_LOGO || "/icons/logo.png",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "",
}