import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "ddjc_admin_session";

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

function sign(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createAdminSessionToken(): string | null {
  const secret = getSecret();
  if (!secret) return null;
  const expiresAt = Date.now() + 8 * 60 * 60 * 1000;
  const payload = String(expiresAt);
  return `${payload}.${sign(payload, secret)}`;
}

export function verifyAdminSession(request: Request): boolean {
  const secret = getSecret();
  if (!secret) return false;
  const cookieHeader = request.headers.get("cookie") || "";
  const token = cookieHeader.split(";").map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`))
    ?.slice(ADMIN_SESSION_COOKIE.length + 1);
  if (!token) return false;

  const separator = token.indexOf(".");
  if (separator < 1) return false;
  const payload = token.slice(0, separator);
  const suppliedSignature = token.slice(separator + 1);
  if (!/^\d+$/.test(payload) || !/^[a-f0-9]{64}$/.test(suppliedSignature)) return false;
  if (Number(payload) <= Date.now()) return false;

  const expectedSignature = sign(payload, secret);
  return timingSafeEqual(Buffer.from(suppliedSignature, "hex"), Buffer.from(expectedSignature, "hex"));
}
