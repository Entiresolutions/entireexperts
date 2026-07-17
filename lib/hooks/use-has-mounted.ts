import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * Returns false during SSR and the initial client hydration pass, then true
 * afterward — the React-recommended way to gate client-only rendering
 * without a setState call inside a useEffect (which reliably shows a flash
 * of mismatched content between server and client otherwise).
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
