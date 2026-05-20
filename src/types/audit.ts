// ============================================================
// AUDIT TYPES — src/types/audit.ts
//
// These types cover the full audit lifecycle:
// Starting a ShopWalk → counting items → submitting → history
// ============================================================

import { AUDIT_STATUS } from "@/config/constants";

// Extract the union of status string values from the constant
type AuditStatus = typeof AUDIT_STATUS[keyof typeof AUDIT_STATUS];

// A single line item in an audit — one product's count
export type AuditEntry = {
  productId: string;
  productName: string;        // Stored at audit time in case product changes later
  productSku: string;
  countedQuantity: number;    // What the technician physically counted
  expectedQuantity: number;   // What the system expected (min value)
  variance: number;           // countedQuantity - expectedQuantity
  needsReplenishment: boolean; // true if countedQuantity < min threshold
  replenishQuantity: number;  // max - countedQuantity (how much to order)
  notes?: string;             // Optional technician note per item
};

// A full ShopWalk audit session
export type AuditSession = {
  id: string;
  technicianId: string;
  technicianName: string;
  locationId: string;
  locationName: string;
  startedAt: string;          // ISO date string
  completedAt?: string;       // Set when technician submits
  status: AuditStatus;
  entries: AuditEntry[];
  totalItems: number;
  itemsNeedingReplenishment: number;
};

// What we need to start a new audit session
export type NewAuditSession = Pick
  AuditSession,
  "technicianId" | "technicianName" | "locationId" | "locationName"
>;
// Pick<T, K> is the opposite of Omit — it only keeps the
// specified keys from a type, dropping everything else.