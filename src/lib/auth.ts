/**
 * Authentication management utility for admin dashboard access
 */

export interface AdminUser {
  email: string;
  role: string;
  name: string;
}

const ADMIN_SESSION_KEY = "ddjc_admin_session";

/**
 * Checks if an admin user is currently logged in via client session storage.
 */
export function checkAdminAuth(): boolean {
  if (typeof window === "undefined") return false;
  const session = localStorage.getItem(ADMIN_SESSION_KEY);
  return session === "true";
}

/**
 * Sets the admin session state.
 */
export function setAdminAuth(isAuthenticated: boolean): void {
  if (typeof window === "undefined") return;
  if (isAuthenticated) {
    localStorage.setItem(ADMIN_SESSION_KEY, "true");
  } else {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

/**
 * Mock verifier for admin credentials login.
 */
export function verifyAdminCredentials(email: string, pass: string): boolean {
  return email.trim() === "admin@ddjc.org" && pass === "admin123";
}