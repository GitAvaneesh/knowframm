import { useMemo } from 'react';

export function useParallax(offset: number) {
  return useMemo(() => ({ transform: `translate3d(0, ${offset * 0.2}px, 0)` }), [offset]);
}
