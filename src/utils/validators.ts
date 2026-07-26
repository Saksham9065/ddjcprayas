/**
 * Validation utilities for form inputs and user submissions
 */

/**
 * Validates an Indian phone number (10 digits, optional +91 prefix).
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/\D/g, "");
  // Matches 10 digit numbers or 12 digit numbers starting with 91
  return /^(?:91)?[6-9]\d{9}$/.test(cleaned);
}

/**
 * Validates an email address format.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a required string field is empty or just whitespace.
 */
export function isNotEmpty(value: string): boolean {
  return typeof value === "string" && value.trim().length > 0;
}