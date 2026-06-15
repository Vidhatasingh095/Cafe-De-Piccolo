import { reportError } from "./error-reporting";

export function reportLovableError(error: unknown, context?: Record<string, unknown>) {
  console.error("Lovable error:", error, "with context:", context);
  reportError(error);
}
