// ============================================================
// CONSTANTS — src/config/constants.ts
//
// App-wide constant values that don't change at runtime.
// Centralizing these here means if a value needs to change,
// you change it in one place — not scattered across files.
// ============================================================

// ============================================================
// AUDIT CONSTANTS
// ============================================================

// Audit status values — used in AuditSession type and UI badges
// Defined as an object with "as const" so TypeScript treats
// these as fixed string literals, enabling strict type checking
export const AUDIT_STATUS = {
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
  SUBMITTED: "submitted",
} as const;

// Master category values — must match the database schema exactly
export const MASTER_CATEGORY = {
  DOOR_PARTS: "Door Parts",
  NON_DOOR_PARTS: "Non-Door Parts",
} as const;


// ============================================================
// PRODUCT CONSTANTS
// ============================================================

// Default min/max values for new products if none are set
export const PRODUCT_DEFAULTS = {
  MIN_QUANTITY: 0,
  MAX_QUANTITY: 100,
} as const;


// ============================================================
// UI CONSTANTS
// ============================================================

// How many items to show per page in lists and tables
export const PAGE_SIZE = 25;

// Minimum tap target size in pixels (Apple HIG + Google Material standard)
export const MIN_TAP_TARGET = 44;

// Toast notification duration in milliseconds
export const TOAST_DURATION = 4000;


// ============================================================
// PDF CONSTANTS
// ============================================================

export const PDF_CONFIG = {
  // Page size for generated reports
  PAGE_FORMAT: "letter" as const,
  // Margins in mm
  MARGIN_TOP: 20,
  MARGIN_LEFT: 15,
  MARGIN_RIGHT: 15,
} as const;


// ============================================================
// LOCAL STORAGE KEYS
//
// Centralizing these prevents typo bugs where a key is
// misspelled in one place and data can't be retrieved.
// ============================================================
export const STORAGE_KEYS = {
  ACTIVE_AUDIT: "shopwalk:active-audit",
  BRAND_CONFIG: "shopwalk:brand-config",
  AUTH_TOKEN: "shopwalk:auth-token",
} as const;