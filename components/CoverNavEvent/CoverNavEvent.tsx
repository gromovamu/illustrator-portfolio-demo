'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { CoverNavEventProps } from './CoverNavEvent.props';

export function CoverNavEvent({ setActive, scrollId }: CoverNavEventProps) {
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    if (params.size != 0) {
      const num = parseInt(params.get('num') ?? '0', 10);
      console.log('useEffect from CoverNavEvent');
      console.log(num);
      console.log(pathname);
      //console.log(params);

      if (setActive && (!isNaN(num))) {
        console.log(`setActive${num}`);
        setActive(num);
      }
      window.history.replaceState(null, '', pathname);
      scrollId && document.getElementById(scrollId)?.scrollIntoView();
    }
  }, [pathname, params, setActive, scrollId]);

  return null;
}