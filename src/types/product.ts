// ============================================================
// PRODUCT TYPES — src/types/product.ts
//
// TypeScript types define the "shape" of your data.
// Think of them as a contract — if code tries to use a Product
// without the required fields, TypeScript will catch it
// before the app ever runs.
// ============================================================

import { MASTER_CATEGORY } from "@/config/constants";

// "typeof X[keyof typeof X]" is a TypeScript pattern that
// extracts the union of all values from a const object.
// So MasterCategory becomes: "Door Parts" | "Non-Door Parts"
// This stays in sync automatically if MASTER_CATEGORY ever changes.
type MasterCategory = typeof MASTER_CATEGORY[keyof typeof MASTER_CATEGORY];

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;           // Sub-category (e.g. "Springs", "Cables")
  masterCategory: MasterCategory; // Top-level category
  price: number;
  quantity: number;           // Current on-hand quantity
  min: number;                // Minimum threshold — triggers replenishment
  max: number;                // Maximum threshold — target replenishment level
  description?: string;       // Optional — ? means the field can be undefined
  createdAt?: string;         // ISO date string from Supabase
  updatedAt?: string;
};

// PartialProduct is useful for update operations where you
// only send the fields that changed, not the whole object.
// Partial<T> is a built-in TypeScript utility that makes
// every field in T optional.
export type PartialProduct = Partial<Product>;

// NewProduct is what we send when creating a product —
// the database generates id, createdAt, updatedAt automatically
// so we omit them from the type the form works with.
// Omit<T, K> is a built-in TypeScript utility that removes
// specified keys from a type.
export type NewProduct = Omit<Product, "id" | "createdAt" | "updatedAt">;