export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

/** Professional career start — years shown as (currentYear − start)+ */
export const CAREER_START_YEAR = 2017;

export function yearsOfExperience(now = new Date()): number {
  return Math.max(1, now.getFullYear() - CAREER_START_YEAR);
}

export function yearsOfExperienceLabel(now = new Date()): string {
  return `${yearsOfExperience(now)}+`;
}
