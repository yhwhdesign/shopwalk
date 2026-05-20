// ============================================================
// USER TYPES — src/types/user.ts
//
// User accounts and role-based access control (RBAC).
// Roles determine what parts of the app a user can access.
// ============================================================

// The union type here means a Role can only be one of these
// three exact strings — TypeScript will error on anything else
export type Role = "admin" | "technician" | "viewer";

export type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
  locationId?: string;        // Technicians are assigned to a location
  avatarUrl?: string;
  createdAt?: string;
  lastLoginAt?: string;
};

// What the auth system returns after login
export type AuthSession = {
  user: User;
  accessToken: string;
  expiresAt: string;
};