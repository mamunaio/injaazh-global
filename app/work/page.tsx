"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    slug: "themesjet",
    title: "THEMES JET",
    category: "DIGITAL MARKETPLACE",
    client: "Elite Developers",
    year: "2024",
    img: "/assets/themes_jet_final.webp",
  },
  {
    id: "02",
    slug: "aka-moving",
    title: "AKA MOVING",
    category: "SERVICE PLATFORM",
    client: "AKA Moving",
    year: "2024",
    img: "/assets/aka_moving_final.webp",
  },
  {
    id: "03",
    slug: "nexus-esports",
    title: "NEXUS ESPORTS",
    category: "GAMING · UI/UX",
    client: "Nexus Gaming",
    year: "2024",
    img: "/assets/nexus_esports_final.webp",
  },
  {
    id: "04",
    slug: "novacore-esports",
    title: "NOVACORE ESPORTS",
    category: "ESPORTS · BRANDING",
    client: "NovaCore Gaming",
    year: "2024",
    img: "/assets/novacore_esports_final.webp",
  },
  // Real Client's Websites
  { id: "05", slug: "the-ultrasound-source", title: "THE ULTRASOUND SOURCE", category: "CLIENT WEBSITE", client: "The Ultrasound Source", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://theultrasoundsource.com/" },
  { id: "06", slug: "ultrasound-battery", title: "ULTRASOUND BATTERY", category: "CLIENT WEBSITE", client: "Ultrasound Battery", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://ultrasoundbattery.com/" },
  { id: "07", slug: "sps-foods", title: "SPS FOODS", category: "CLIENT WEBSITE", client: "SPS Foods", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.spsfoods.dk/" },
  { id: "08", slug: "montreal-moving", title: "MONTREAL MOVING", category: "CLIENT WEBSITE", client: "Montreal Moving", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.montrealmoving.co/" },
  { id: "09", slug: "across-canada-movers", title: "ACROSS CANADA MOVERS", category: "CLIENT WEBSITE", client: "Across Canada Movers", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://acrosscanadamovers.ca/" },
  { id: "10", slug: "str-assistance", title: "STR ASSISTANCE", category: "CLIENT WEBSITE", client: "STR Assistance", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://strassistance.com/" },
  { id: "11", slug: "hexazn", title: "HEXAZN", category: "CLIENT WEBSITE", client: "Hexazn", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://hexazn.com/" },
  { id: "12", slug: "hostorient", title: "HOSTORIENT", category: "CLIENT WEBSITE", client: "HostOrient", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.hostorient.com/" },
  { id: "13", slug: "abc-computers", title: "ABC COMPUTERS", category: "CLIENT WEBSITE", client: "ABC Computers", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.abcpabnabd.com/" },
  { id: "14", slug: "egp-btc", title: "EGP BTC", category: "CLIENT WEBSITE", client: "EGP BTC", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://egpbtc.com/" },
  { id: "15", slug: "deliver-my-motor", title: "DELIVER MY MOTOR", category: "CLIENT WEBSITE", client: "Deliver My Motor", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.delivermymotor.com/" },
  { id: "16", slug: "salam-medical", title: "SALAM MEDICAL", category: "CLIENT WEBSITE", client: "Salam Medical", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://salammedical.com/" },
  { id: "17", slug: "chowdhurani-ayurveda", title: "CHOWDHURANI AYURVEDA", category: "CLIENT WEBSITE", client: "Chowdhurani Ayurveda", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://chowdhuraniayurveda.com/" },
  { id: "18", slug: "ss-construction", title: "SS CONSTRUCTION", category: "CLIENT WEBSITE", client: "SS Construction", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://ssconstructionltd.com/" },
  { id: "19", slug: "refab-solution", title: "REFAB SOLUTION", category: "CLIENT WEBSITE", client: "Refab Solution", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://refab.injaazh.com/" },
  { id: "20", slug: "prime-ifs", title: "PRIME IFS", category: "CLIENT WEBSITE", client: "Prime IFS", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://prime-ifs.com/" },
  
  // Templates
  { id: "21", slug: "ronghill", title: "RONGHILL", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/ronghill/" },
  { id: "22", slug: "salven", title: "SALVEN", category: "TEMPLATE", client: "CodeNext IT", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://codenextit.com/templates/salven/" },
  { id: "23", slug: "cn-construction", title: "CN CONSTRUCTION", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/cn-construction/" },
  { id: "24", slug: "gadget-star", title: "GADGET STAR", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/gadget-star/" },
  { id: "25", slug: "traveloo", title: "TRAVELOO", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/traveloo/" },
  { id: "26", slug: "interbroad", title: "INTERBROAD", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/interbroad/" },
  { id: "27", slug: "bricks-land", title: "BRICKS LAND", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/bricks-land/" },
  { id: "28", slug: "constra-build", title: "CONSTRA BUILD", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/constra-build/" },
  { id: "29", slug: "asma-medicare", title: "ASMA MEDICARE", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/asma-medicare/" },
  
  // Netlify
  { id: "30", slug: "trader-sme", title: "TRADER SME", category: "WEB APP", client: "Trader SME", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://tradersme.netlify.app/" },
  { id: "31", slug: "blockvon", title: "BLOCKVON", category: "WEB APP", client: "Blockvon", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://blockvon.netlify.app/" },
  
  // New Templates (ThemesJet)
  { id: "32", slug: "purrfect-hub", title: "PURRFECT HUB", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://purrfect-hub.netlify.app/" },
  { id: "33", slug: "pawsome", title: "PAWSOME", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://pawsome-buddy.netlify.app/" },
  { id: "34", slug: "cleaning-depot", title: "CLEANING DEPOT", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://cleaning-depot.netlify.app/" },
  { id: "35", slug: "exhaust-cleaning", title: "EXHAUST CLEANING", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://exhaust-cleaning.netlify.app/" },
  { id: "36", slug: "aegis", title: "AEGIS", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://aegis-fintech.netlify.app/" },
  { id: "37", slug: "velocity", title: "VELOCITY", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://velocity-fintech.netlify.app/" },
  { id: "38", slug: "carpet-clean-uk", title: "CARPET CLEAN UK", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://carpet-cleanuk.netlify.app/" },
  { id: "39", slug: "virtua-assistant", title: "VIRTUA ASSISTANT", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://virtuaassistant.netlify.app/" },
  { id: "40", slug: "jobnin", title: "JOBNIN", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://job-nin.netlify.app/" },
  { id: "41", slug: "dev-api", title: "DEV API", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://devapi-saas.netlify.app/" },
  
  // Web Applications
  { id: "42", slug: "edu-next", title: "EDU NEXT", category: "MANAGEMENT SOFTWARE", client: "Edu Next", year: "2024", img: "/assets/themes_jet_final.webp", link: "http://edunext.codenextit.com/login" },
  { id: "43", slug: "codenext-hq", title: "CODENEXT HQ", category: "OFFICE MANAGEMENT", client: "CodeNext IT", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://codenextit-hq.vercel.app/" },
  { id: "44", slug: "pinnacle-crm", title: "PINNACLE CRM", category: "CRM WEB APP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "#" },
  { id: "45", slug: "injaazh-os", title: "INJAAZH OS", category: "WEB APP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://freelancer-os-two.vercel.app/" },
  { id: "46", slug: "odyssey", title: "ODYSSEY", category: "MULTI-TENANT SAAS", client: "Odyssey", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://odyssey-zeta-rouge.vercel.app/" },
  { id: "47", slug: "injaazh-erp", title: "INJAAZH ERP", category: "MULTI-TENANT ERP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://injaazh-erp-9zjs.vercel.app/dashboard" }
];

const filterCategories = ["ALL", "CLIENT WEBSITES", "TEMPLATES", "WEB APPS"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "CLIENT WEBSITES") {
      return (
        project.category === "CLIENT WEBSITE" ||
        project.category === "DIGITAL MARKETPLACE" ||
        project.category === "SERVICE PLATFORM" ||
        project.category.includes("GAMING") ||
        project.category.includes("ESPORTS")
      );
    }
    if (activeFilter === "TEMPLATES") {
      return project.category.includes("TEMPLATE");
    }
    if (activeFilter === "WEB APPS") {
      return (
        project.category.includes("WEB APP") ||
        project.category.includes("SOFTWARE") ||
        project.category.includes("SAAS") ||
        project.category.includes("ERP") ||
        project.category.includes("OFFICE") ||
        project.category.includes("CRM")
      );
    }
    return true;
  });
  // Advanced mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for position
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.5 });

  // Calculate velocity for skew effect
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Calculate horizontal velocity for the skew physics
      const currentVelocity = e.clientX - lastX.current;
      setVelocity(currentVelocity);
      lastX.current = e.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Skew transform based on horizontal velocity
  const skew = useTransform(() => {
    const skewed = velocity * 0.15;
    return Math.max(Math.min(skewed, 15), -15); // Clamp between -15 and 15 degrees
  });

  return (
    <main className="w-full min-h-screen bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 text-primary relative overflow-hidden">
      {/* 1. Hero Area — agency-style gradient, no image */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#F0EEF8] dark:bg-[#060608]">
        {/* Dynamic Glow Orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6324FC]/15 to-[#00E5FF]/10 dark:from-[#6324FC]/20 dark:to-[#00E5FF]/20 blur-[120px] rounded-full animate-pulse pointer-events-none"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6324FC]/5 via-transparent to-[#F5F5F0]/60 dark:from-[#6324FC]/10 dark:via-transparent dark:to-[#060608]/80 pointer-events-none" />

        {/* Massive watermark text */}
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[22vw] md:text-[18vw] leading-none whitespace-nowrap tracking-tighter text-[#6324FC]/[0.04] dark:text-white/[0.02] text-center w-full select-none pointer-events-none">
          WORK
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-[#060608] dark:text-white">
              SELECTED <span className="text-[#6324FC] italic">WORKS</span>
            </h1>
            <p className="font-heading text-sm tracking-widest text-[#060608]/50 dark:text-white/50 max-w-xs text-right hidden md:block">
              Engineering digital dominance through award-winning design and
              robust architectures.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Brutalist List */}
      <section className="w-full bg-[#F5F5F0] dark:bg-[#060608] pb-16 md:pb-24 relative overflow-hidden border-t border-[#060608]/10 dark:border-white/[0.03] z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-heading text-sm tracking-widest px-6 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#6324FC] text-white border-[#6324FC]"
                    : "bg-transparent text-primary/50 border-primary/20 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col w-full border-t border-primary/10">
            {filteredProjects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.img)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group w-full flex flex-col md:flex-row items-center justify-between py-12 lg:py-16 border-b border-primary/10 hover:border-primary/50 transition-colors duration-500 cursor-pointer"
              >
                {/* Left Side: ID + Title */}
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                  <span className="font-heading  text-xl text-primary/30 group-hover:text-[#6324FC] transition-colors duration-500">
                    {project.id}
                  </span>

                  {/* Rolling Text Reveal Animation */}
                  <div className="relative overflow-hidden py-2">
                    <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-primary group-hover:-translate-y-[150%] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      {project.title}
                    </h2>
                    <h2 className="absolute top-2 left-0 font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-[#6324FC] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] italic">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Right Side: Meta Info */}
                <div className="hidden md:flex items-center gap-16 font-heading  text-sm tracking-widest capitalize ">
                  <span className="text-primary/50 group-hover:text-primary transition-colors duration-500 w-48 text-right">
                    {project.category}
                  </span>
                  <span className="text-primary/30 group-hover:text-primary transition-colors duration-500">
                    {project.year}
                  </span>
                  <div className="relative w-16 h-16 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-xl isolate">
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    <div className="relative w-full h-full rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      <ArrowUpRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-primary transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Floating Reveal Image with Skew Physics */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[500px] pointer-events-none z-50 overflow-hidden rounded-xl shadow-2xl hidden lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          skewX: skew,
          skewY: skew,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: hoveredProject ? 1 : 0,
          scale: hoveredProject ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              key={hoveredProject}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={hoveredProject}
                alt="Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
