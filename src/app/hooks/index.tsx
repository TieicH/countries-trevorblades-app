import { useCallback, useRef } from "react";

interface DebounceCallback {
  (callback: () => void): void;
}

export const useDebounce = (delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback: DebounceCallback = useCallback(
    (callback) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback();
        timeoutRef.current = null;
      }, delay);
    },
    [delay]
  );

  return debouncedCallback;
};
