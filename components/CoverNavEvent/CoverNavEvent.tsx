'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { CoverNavEventProps } from './CoverNavEvent.props';

export function CoverNavEvent({ setActive }: CoverNavEventProps) {
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    if (params.size != 0) {
      const num = parseInt(params.get('index') ?? '0', 10);
      if (setActive && (!isNaN(num))) {
        setActive(num);
      }
      window.history.replaceState(null, '', pathname);
    }
  }, [pathname, params, setActive]);

  return null;
}