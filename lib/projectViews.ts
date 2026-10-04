// Helper utility to calculate and store project page views
export const BASE_PROJECT_VIEWS: Record<string, number> = {
  "themesjet": 18420,
  "deliver-my-motor": 16950,
  "salam-medical": 15300,
  "aka-moving": 14100,
  "the-ultrasound-source": 13850,
  "nexus-esports": 11200,
  "novacore-esports": 9400,
  "purrfect-hub": 8900,
  "aegis": 8400,
  "velocity": 8100,
  "incode": 7900,
  "odyssey": 7600,
  "dev-api": 7300,
  "exhaust-clean": 6900,
  "pawsome": 6500,
  "ronghill": 5800,
  "salven": 5400,
  "traveloo": 4900,
  "carpet-clean-uk": 4600,
  "virtua-assistant": 4300,
  "jobnin": 4100,
  "trader-sme": 3900,
  "blockvon": 3700,
  "cleaning-depot": 3500,
  "gadget-star": 3400,
  "cn-construction": 3200,
  "interbroad": 3100,
  "bricks-land": 2900,
  "constra-build": 2800,
  "asma-medicare": 2700,
  "edu-next": 2600,
  "codenext-hq": 2500,
  "pinnacle-crm": 2400,
  "injaazh-os": 2300,
  "injaazh-erp": 2200,
  "ultrasound-battery": 2100,
  "sps-foods": 2050,
  "montreal-moving": 1980,
  "across-canada-movers": 1920,
  "str-assistance": 1870,
  "hexazn": 1820,
  "hostorient": 1780,
  "abc-computers": 1740,
  "egp-btc": 1690,
  "chowdhurani-ayurveda": 1650,
  "ss-construction": 1610,
  "refab-solution": 1580,
  "prime-ifs": 1540,
};

export function getStoredProjectViews(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem("injaazh_project_views");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function recordProjectPageView(slug: string): void {
  if (typeof window === "undefined" || !slug) return;
  try {
    const current = getStoredProjectViews();
    current[slug] = (current[slug] || 0) + 1;
    localStorage.setItem("injaazh_project_views", JSON.stringify(current));
  } catch {}
}

export function getTotalProjectViews(slug: string, storedViews?: Record<string, number>): number {
  const base = BASE_PROJECT_VIEWS[slug] ?? 1500;
  const stored = storedViews ?? getStoredProjectViews();
  const bonus = (stored[slug] || 0) * 15;
  return base + bonus;
}

export function formatViewsCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toLocaleString();
}
