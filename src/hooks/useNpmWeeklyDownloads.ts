import { useEffect, useMemo, useState } from 'react';
import { fetchWeeklyDownloads, type NpmWeeklyRange } from '@/lib/npmDownloads';

export type NpmDownloadsStatus = 'idle' | 'loading' | 'ready' | 'error';

export function useNpmWeeklyDownloads(packageNames: readonly string[]) {
  const key = useMemo(
    () => [...new Set(packageNames.filter(Boolean))].sort().join(','),
    [packageNames],
  );

  const [byPackage, setByPackage] = useState<Record<string, number>>({});
  const [range, setRange] = useState<NpmWeeklyRange | null>(null);
  const [status, setStatus] = useState<NpmDownloadsStatus>('idle');

  useEffect(() => {
    if (!key) {
      setByPackage({});
      setRange(null);
      setStatus('idle');
      return;
    }

    const names = key.split(',');
    let cancelled = false;
    setStatus('loading');

    fetchWeeklyDownloads(names)
      .then((result) => {
        if (cancelled) return;
        setByPackage(result.byPackage);
        setRange(result.range);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setByPackage({});
        setRange(null);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  const total = useMemo(() => Object.values(byPackage).reduce((sum, n) => sum + n, 0), [byPackage]);

  return { byPackage, range, status, total };
}
