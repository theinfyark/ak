/** npm downloads API — https://api.npmjs.org/downloads/ */

const DOWNLOADS_ENDPOINT = 'https://api.npmjs.org/downloads/point/last-week';
const CHUNK_SIZE = 100;

export type NpmWeeklyRange = {
  start: string;
  end: string;
};

export type NpmWeeklyDownloadsResult = {
  byPackage: Record<string, number>;
  range: NpmWeeklyRange | null;
};

type PointResponse = {
  downloads?: number;
  package?: string;
  start?: string;
  end?: string;
  error?: string;
};

function packageNameFromNpmUrl(url: string): string | null {
  try {
    const path = new URL(url).pathname.replace(/\/+$/, '');
    const match = path.match(/\/package\/(@[^/]+\/[^/]+|[^/]+)$/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

/** Prefer explicit npm URL; fall back to package display name for live libraries. */
export function npmPackageName(product: { name: string; npm?: string }): string | null {
  if (product.npm) return packageNameFromNpmUrl(product.npm);
  return null;
}

export function formatDownloadCount(count: number): string {
  if (count >= 1_000_000) {
    const value = count / 1_000_000;
    return `${value >= 10 ? Math.round(value) : value.toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (count >= 1_000) {
    const value = count / 1_000;
    return `${value >= 10 ? Math.round(value) : value.toFixed(1).replace(/\.0$/, '')}k`;
  }
  return String(count);
}

async function fetchChunk(names: string[]): Promise<{
  byPackage: Record<string, number>;
  range: NpmWeeklyRange | null;
}> {
  const byPackage: Record<string, number> = {};
  let range: NpmWeeklyRange | null = null;

  if (names.length === 0) return { byPackage, range };

  const url = `${DOWNLOADS_ENDPOINT}/${names.map(encodeURIComponent).join(',')}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`npm downloads ${res.status}`);
  }

  const data: PointResponse | Record<string, PointResponse> = await res.json();

  if (names.length === 1) {
    const point = data as PointResponse;
    if (typeof point.downloads === 'number' && point.package) {
      byPackage[point.package] = point.downloads;
      if (point.start && point.end) range = { start: point.start, end: point.end };
    }
    return { byPackage, range };
  }

  for (const [name, point] of Object.entries(data as Record<string, PointResponse>)) {
    if (point && typeof point.downloads === 'number') {
      byPackage[name] = point.downloads;
      if (!range && point.start && point.end) {
        range = { start: point.start, end: point.end };
      }
    }
  }

  return { byPackage, range };
}

export async function fetchWeeklyDownloads(
  packageNames: readonly string[],
): Promise<NpmWeeklyDownloadsResult> {
  const unique = [...new Set(packageNames.filter(Boolean))];
  const byPackage: Record<string, number> = {};
  let range: NpmWeeklyRange | null = null;

  for (let i = 0; i < unique.length; i += CHUNK_SIZE) {
    const chunk = unique.slice(i, i + CHUNK_SIZE);
    const result = await fetchChunk(chunk);
    Object.assign(byPackage, result.byPackage);
    if (!range && result.range) range = result.range;
  }

  return { byPackage, range };
}
