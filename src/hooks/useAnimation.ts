import { useEffect, useState } from 'react';

export function useAnimation(delay = 0) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);
  return mounted;
}
