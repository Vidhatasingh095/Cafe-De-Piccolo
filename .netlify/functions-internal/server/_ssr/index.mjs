let lastCapturedError;
function captureError(error) {
  lastCapturedError = error;
  console.error(error);
}
function consumeLastCapturedError() {
  const err = lastCapturedError;
  lastCapturedError = void 0;
  return err;
}
if (typeof addEventListener !== "undefined") {
  addEventListener("error", (event) => captureError(event.error ?? event));
  addEventListener("unhandledrejection", (event) => captureError(event.reason));
}
function renderErrorPage() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Something went wrong</title>
    <style>
      html, body { height: 100%; }
      body { display: grid; place-items: center; font-family: system-ui, sans-serif; color: #333; background: #f5f5f5; }
      main { text-align: center; }
      h1 { margin-bottom: 0.5em; }
      p { opacity: 0.7; }
    </style>
  </head>
  <body>
    <main>
      <h1>Something went wrong</h1>
      <p>We're sorry, but there was an error loading this page.</p>
    </main>
  </body>
</html>`;
}
let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("./server-BKqnCc89.mjs").then((n) => n.s).then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }
  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
const server = {
  async fetch(request, env, ctx) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }
  }
};
export {
  server as default,
  renderErrorPage as r
};
