// ============================================================
// TYPES BARREL EXPORT — src/types/index.ts
//
// A barrel file re-exports everything from other files in
// the same folder. This means instead of writing:
//   import { Product } from "@/types/product"
//   import { AuditSession } from "@/types/audit"
//   import { User } from "@/types/user"
//
// You can write just:
//   import { Product, AuditSession, User } from "@/types"
//
// Much cleaner imports throughout the app.
// ============================================================

export * from "./product";
export * from "./audit";
export * from "./user";