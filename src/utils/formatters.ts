/**
 * Utility functions for formatting data across the DDJC portal
 */

/**
 * Formats a given number into Indian Rupee (INR) currency format.
 * Example: 15000 -> ₹15,000
 */
export function formatCurrency(amount: number | string): string {
  const numericValue = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericValue)) return "₹0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numericValue);
}

/**
 * Formats an ISO date string into a readable Indian date format.
 * Example: 2026-06-24 -> 24 June 2026
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Normalizes and formats Indian phone numbers for consistent display.
 * Example: 9235737691 -> +91 92357 37691
 */
export function formatPhoneNumber(phone: string): string {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  
  return phone;
}