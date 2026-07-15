import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTypingText(phrases: readonly string[], typingMs = 55, holdMs = 1800) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || phrases.length === 0) {
      setText(phrases[0] ?? '');
      return;
    }

    const current = phrases[index % phrases.length];
    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdMs);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const delay = deleting ? typingMs / 1.6 : typingMs;
    const tick = window.setTimeout(() => {
      const next = deleting
        ? current.slice(0, Math.max(0, text.length - 1))
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(tick);
  }, [text, deleting, index, phrases, typingMs, holdMs, reduced]);

  return text;
}
