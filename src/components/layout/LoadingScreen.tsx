import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/portfolio';

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), reduce ? 100 : 900);
    return () => window.clearTimeout(t);
  }, [reduce]);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: reduce ? 0 : 0.7, duration: reduce ? 0.1 : 0.35 }}
      onAnimationComplete={() => setDone(true)}
      aria-hidden
    >
      <div className="text-center">
        <p className="brand text-3xl text-[var(--fg-strong)]">
          {siteConfig.shortName}
          <span className="text-[var(--accent)]">.</span>
        </p>
        <div className="mx-auto mt-4 h-1 w-24 overflow-hidden rounded-full bg-[var(--line)]">
          <motion.div
            className="h-full bg-[var(--accent)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: reduce ? 0.1 : 0.75, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
