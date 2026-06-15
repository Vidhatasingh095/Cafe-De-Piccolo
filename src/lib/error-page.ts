// Renders a simple error page during catastrophic SSR failures.

export function renderErrorPage() {
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
