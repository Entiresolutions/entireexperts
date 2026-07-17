"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[app/global-error]", error.digest ?? error.message);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          textAlign: "center",
          padding: "2rem",
          background: "#fbfbfd",
          color: "#14141f",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Something went wrong loading this page
        </h1>
        <p style={{ maxWidth: 420, color: "#4b4b5a", marginBottom: "1.5rem" }}>
          An unexpected error occurred. Please try again, or reload the page directly.
        </p>
        <button
          onClick={reset}
          style={{
            borderRadius: 9999,
            background: "#4338ca",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
