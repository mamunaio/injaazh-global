export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  email?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  extendedBio?: string[];
  image: string;
  color: string;
  tags: string[];
  socials?: SocialLinks;
  expertise?: string[];
  experience?: Experience[];
  achievements?: string[];
  education?: Education[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "01",
    slug: "md-mamun-hossain",
    name: "Md Mamun Hossain",
    role: "Founder & Chief Architect",
    bio: "The visionary leader behind INJAAZH, MD Mamun specializes in orchestrating digital ecosystems that drive exponential growth for global enterprises.",
    extendedBio: [
      "\"Most websites don't have a traffic problem. They have a strategy problem.\"",
      "As the Founder & CEO of Injaazh, Md Mamun leads a high-performance digital agency that has delivered 500+ projects for 1,000+ clients across 25+ countries. He also serves as the CTO of RH International Sourcing Center, orchestrating the technical strategy for its global digital infrastructure.",
      "His expertise lies in building lightning-fast, conversion-focused web applications using Next.js, React, and Node.js. Beyond development, his SEO strategy focuses on Technical SEO, Core Web Vitals, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO)—ensuring brands dominate both traditional and AI-powered search.",
      "Whether it's scaling a headless commerce architecture or turning marketing spend into trackable revenue with GA4 and Looker Studio, Mamun ensures every digital asset is engineered for measurable business growth."
    ],
    image: "/assets/mamun.ceo.webp",
    color: "#6324FC",
    tags: ["Strategy", "Next.js", "Technical SEO", "Growth"],
    expertise: ["Digital Strategy", "Enterprise Architecture", "Next.js & React", "AEO & GEO Optimization", "Technical SEO", "Business Operations"],
    experience: [
      {
        role: "Chief Technology Officer",
        company: "RH International Sourcing Center",
        duration: "Jun 2026 - Present",
        description: "Leading the technical strategy and execution behind the company's global web presence and e-commerce infrastructure. Architecting high-performance Next.js applications and driving search dominance through advanced technical SEO and Core Web Vitals improvements.",
      },
      {
        role: "Chief Operating Officer",
        company: "CodeNext IT Solution",
        duration: "Oct 2025 - Present",
        description: "Overseeing day-to-day operations across development, UI/UX design, and digital marketing teams. Streamlining internal workflows and ensuring project deliverables consistently meet rigorous quality standards and deadlines.",
      },
      {
        role: "Founder & CEO",
        company: "INJAAZH",
        duration: "Apr 2023 - Present",
        description: "Built and scaled a global digital agency delivering 500+ projects across 25+ countries. Setting technical standards for headless commerce builds and advanced SEO strategies, while directly overseeing analytics infrastructure (GA4, Looker Studio) to track client revenue.",
      },
      {
        role: "SEO Specialist",
        company: "Flooring Pros Of Augusta & Venusia Aesthetic Medical",
        duration: "Jan 2023 - Jun 2025",
        description: "Executed comprehensive site-wide SEO audits boosting organic traffic by up to 70%. Improved website accessibility to WCAG 2.2 Level AA and enhanced server security, thwarting over 300 potential breaches.",
      }
    ],
    achievements: [
      "Delivered 500+ web and digital projects for 1,000+ clients across 25+ countries.",
      "Generated $50,000+ in direct client revenue through strategic partnerships and account management.",
      "Grew organic clicks for an enterprise client from 394 to 20,200 in 6 months using purely Technical SEO and strategy.",
      "Reduced client website downtime by 98% and improved page load times by 40% through architectural optimizations."
    ],
    education: [
      {
        degree: "Master of Social Science, Political Science and Government",
        institution: "Bhawal Badre Alam Govt. College",
        year: "2026 - 2027",
      },
      {
        degree: "Bachelor of Social Science, Political Science and Government",
        institution: "National University, Bangladesh",
        year: "2017 - 2024",
      }
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/mdmamunhossain-webdev/",
      twitter: "http://x.com/mrmamunx",
      github: "https://github.com/mamunaio",
      website: "https://injaazh.com/mh-mamun-hossain",
      email: "mailto:mamun@injaazh.com",
    },
  },
  {
    id: "02",
    slug: "imtiaz-ahmed",
    name: "Imtiaz Ahmed",
    role: "Head of Global Operations",
    bio: "Driving operational excellence, Imtiaz ensures that every project at INJAAZH is executed with surgical precision and absolute efficiency.",
    extendedBio: [
      "Imtiaz specializes in optimizing cross-functional team workflows and delivering complex digital projects on aggressive timelines.",
      "His background in global business operations enables him to streamline the development lifecycle from initial discovery to final deployment."
    ],
    image: "/assets/team_imtiaz_real.webp",
    color: "#4A90E2",
    tags: ["Operations", "Precision", "Delivery"],
    expertise: ["Project Management", "Agile Methodologies", "Resource Allocation", "Quality Assurance"],
  },
  {
    id: "03",
    slug: "sakib-hasan-ruhin",
    name: "Sakib Hasan Ruhin",
    role: "Co-Founder & Tech Lead",
    bio: "A technical strategist who bridges the gap between complex software engineering and high-level business objectives.",
    extendedBio: [
      "As a core technical leader, Sakib is responsible for establishing best engineering practices and leading our development squads.",
      "He focuses on robust backend integrations and high-performance frontend delivery, ensuring every product is built to scale."
    ],
    image: "/assets/team_ruhin_real.webp",
    color: "#50E3C2",
    tags: ["Technology", "Strategy", "Execution"],
    expertise: ["Technical Leadership", "System Design", "Cloud Infrastructure", "API Architecture"],
  },
  {
    id: "04",
    slug: "ismail-hossain",
    name: "Ismail Hossain",
    role: "Senior Backend Architect",
    bio: "Specializing in robust backend architectures, Ismail builds secure and scalable server-side systems that power high-traffic platforms.",
    extendedBio: [
      "Ismail is a master of server-side engineering, working extensively with Laravel, Node.js, and advanced database architectures.",
      "He ensures that our platforms are fortified against vulnerabilities and engineered for maximum data throughput."
    ],
    image: "/assets/team_ismail_real.webp",
    color: "#F5A623",
    tags: ["Backend", "Laravel", "Security"],
    expertise: ["Backend Development", "Laravel", "Database Design", "Security Optimization"],
  },
  {
    id: "05",
    slug: "khandakar-shanto",
    name: "Khandakar Shanto",
    role: "Lead Full-Stack Engineer",
    bio: "An expert in modern full-stack development, Shanto crafts real-time web applications with a focus on speed and interactive fluidity.",
    extendedBio: [
      "Shanto excels in bridging the frontend and backend, seamlessly integrating complex APIs with highly reactive user interfaces.",
      "His deep understanding of React and modern state management leads to incredibly smooth and intuitive digital experiences."
    ],
    image: "/assets/team_shanto_real.webp",
    color: "#BD10E0",
    tags: ["Full-Stack", "React", "Real-time"],
    expertise: ["React", "TypeScript", "Full-Stack Development", "State Management"],
  },
];
