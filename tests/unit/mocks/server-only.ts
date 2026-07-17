// Stub for the `server-only` package under Vitest. Next's bundler enforces the
// real client/server boundary at build time via a webpack/turbopack condition;
// outside that pipeline (plain Node/Vitest) the real package throws
// unconditionally, so tests alias it to this no-op instead.
export {};
