// Captures the last unhandled error that happened during SSR (for logging/reporting).

let lastCapturedError: unknown | undefined;

export function captureError(error: unknown) {
  lastCapturedError = error;
  console.error(error);
}

export function consumeLastCapturedError() {
  const err = lastCapturedError;
  lastCapturedError = undefined;
  return err;
}

// Global handlers to catch unhandled errors.
if (typeof addEventListener !== "undefined") {
  addEventListener("error", (event) => captureError(event.error ?? event));
  addEventListener("unhandledrejection", (event) => captureError(event.reason));
}
