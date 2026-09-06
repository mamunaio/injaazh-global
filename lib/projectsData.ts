export interface ProjectMetric {
  label: string;
  val: string;
  suffix?: string;
  prefix?: string;
  iconType?: "Hash" | "User" | "Zap" | "TrendingUp" | "Calendar" | "Target";
  size?: "small" | "medium" | "large";
}

export interface ProjectTech {
  name: string;
  iconType?: "Code" | "Database" | "Zap" | "Globe" | "Cpu" | "MessageSquare";
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  img: string;
  accent: string;
  secondaryAccent?: string;
  link?: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  tech: ProjectTech[];
  metrics: ProjectMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  next: {
    id: string;
    title: string;
  };
}

export const projectsData: Record<string, ProjectDetail> = {
  "themesjet": {
    id: "01",
    slug: "themesjet",
    title: "THEMES JET",
    subtitle: "Digital Dominance through Architectural Purity.",
    category: "Marketplace Architecture",
    client: "ThemesJet Elite",
    year: "2024",
    img: "/assets/themes_jet_final.webp",
    accent: "#6324FC",
    secondaryAccent: "#00E5FF",
    link: "https://themesjet.com",
    tags: ["Full-Stack", "Fintech", "UX Strategy"],
    overview: "ThemesJet is not just a marketplace; it is an ecosystem. We were tasked with building a platform that could handle high-frequency digital asset transactions while maintaining the aesthetic standards of a world-class design agency.",
    problem: "The legacy digital marketplace landscape is cluttered, slow, and lacks the premium feel that high-end developers demand. ThemesJet needed a radical departure from the 'template store' norm.",
    solution: "We engineered a sub-second browsing experience using Next.js Edge Runtime, combined with a bespoke multi-vendor dashboard that simplifies complex asset management.",
    tech: [
      { name: "Next.js 16", iconType: "Code" },
      { name: "PostgreSQL", iconType: "Database" },
      { name: "Stripe Connect", iconType: "Zap" },
      { name: "AWS Edge", iconType: "Globe" }
    ],
    metrics: [
      { label: "Assets", val: "500", suffix: "+", iconType: "Hash", size: "large" },
      { label: "Devs", val: "10", suffix: "k", iconType: "User", size: "small" },
      { label: "Speed", val: "99", suffix: "/100", iconType: "Zap", size: "small" },
      { label: "Growth", val: "340", suffix: "%", iconType: "TrendingUp", size: "medium" }
    ],
    testimonial: {
      quote: "Injaazh Global doesn't build websites. They build competitive advantages.",
      author: "Marcus Thorne",
      role: "CEO"
    },
    next: { id: "aka-moving", title: "AKA MOVING" }
  },
  "aka-moving": {
    id: "02",
    slug: "aka-moving",
    title: "AKA MOVING",
    subtitle: "Logistics Reimagined for the Modern Era.",
    category: "Service Platform",
    client: "AKA Moving",
    year: "2024",
    img: "/assets/aka_moving_final.webp",
    accent: "#00E5FF",
    secondaryAccent: "#6324FC",
    link: "https://akamoving.ca",
    tags: ["Automation", "React", "Optimization"],
    overview: "Migrating a traditional logistics company into a fully automated digital platform capable of handling thousands of moving requests across Canada.",
    problem: "Manual scheduling and opaque pricing were causing 30% lead leakage. The industry standard was outdated and friction-heavy.",
    solution: "A custom real-time booking engine with dynamic pricing algorithms and automated workforce dispatching.",
    tech: [
      { name: "React.js", iconType: "Code" },
      { name: "Google Maps", iconType: "Globe" },
      { name: "Node.js", iconType: "Cpu" },
      { name: "Twilio", iconType: "MessageSquare" }
    ],
    metrics: [
      { label: "Bookings", val: "150", suffix: "%", iconType: "Hash", size: "large" },
      { label: "Availability", val: "24", suffix: "/7", iconType: "Calendar", size: "small" },
      { label: "Satisfaction", val: "98", suffix: "%", iconType: "Target", size: "small" },
      { label: "Efficiency", val: "40", suffix: "%", iconType: "TrendingUp", size: "medium" }
    ],
    testimonial: {
      quote: "Our operational costs dropped by 40% in the first quarter post-launch.",
      author: "Sarah Jenkins",
      role: "COO"
    },
    next: { id: "nexus-esports", title: "NEXUS ESPORTS" }
  },
  "nexus-esports": {
    id: "03",
    slug: "nexus-esports",
    title: "NEXUS ESPORTS",
    subtitle: "High-octane UI for global competitive gaming.",
    category: "Gaming Platform",
    client: "Nexus Gaming",
    year: "2024",
    img: "/assets/nexus_esports_final.webp",
    accent: "#FF2D55",
    secondaryAccent: "#00E5FF",
    link: "https://nexusesports.com",
    tags: ["UI/UX", "Esports", "Next.js"],
    overview: "A lightning-fast, high-performance web architecture for a global esports platform, achieving instant registrations and sub-second load times.",
    problem: "Legacy platforms couldn't handle the traffic spikes during live tournaments.",
    solution: "We deployed Edge computing and React Server Components to handle high-concurrency match tracking and real-time community engagement.",
    tech: [
      { name: "Next.js", iconType: "Code" },
      { name: "Edge Network", iconType: "Globe" },
      { name: "Node.js", iconType: "Cpu" }
    ],
    metrics: [
      { label: "Signups", val: "200", suffix: "%", iconType: "Target", size: "large" },
      { label: "Speed", val: "0.9", suffix: "s", iconType: "Zap", size: "medium" }
    ],
    testimonial: {
      quote: "Our platform didn't just survive the tournament; it dominated it.",
      author: "Alex Mercer",
      role: "CTO"
    },
    next: { id: "novacore-esports", title: "NOVACORE ESPORTS" }
  },
  "novacore-esports": {
    id: "04",
    slug: "novacore-esports",
    title: "NOVACORE ESPORTS",
    subtitle: "Dark-mode aesthetic and tournament branding system.",
    category: "Esports Branding",
    client: "NovaCore Gaming",
    year: "2024",
    img: "/assets/novacore_esports_final.webp",
    accent: "#6324FC",
    secondaryAccent: "#FF2D55",
    tags: ["Branding", "UI/UX", "Next.js"],
    overview: "Engineering an immersive tournament interface and aggressive branding aesthetic for a tier-one competitive esports organisation.",
    problem: "Disjointed branding across streaming channels, web portals, and merchandise leading to fragmented fan loyalty.",
    solution: "A unified brutalist design language with ultra-responsive tournament brackets and interactive roster dashboards.",
    tech: [
      { name: "Next.js", iconType: "Code" },
      { name: "Tailwind CSS", iconType: "Zap" },
      { name: "Framer Motion", iconType: "Globe" }
    ],
    metrics: [
      { label: "Engagement", val: "180", suffix: "%", iconType: "TrendingUp", size: "large" },
      { label: "Fans Reached", val: "50", suffix: "k+", iconType: "User", size: "medium" }
    ],
    testimonial: {
      quote: "The brutalist design gave us an instant identity in the global gaming scene.",
      author: "Dmitri Volkov",
      role: "Founder"
    },
    next: { id: "themesjet", title: "THEMES JET" }
  }
};

export function getProject(idOrSlug: string): ProjectDetail | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.toLowerCase().trim();
  
  if (projectsData[normalized]) {
    return projectsData[normalized];
  }

  // Check by id or slug match
  return Object.values(projectsData).find(
    (p) => p.slug.toLowerCase() === normalized || p.id === normalized
  );
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsData);
}
