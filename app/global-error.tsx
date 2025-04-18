// app global-error.tsx
"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        {error.digest && <p>{error.digest}</p>}
      </body>
    </html>
  );
}
