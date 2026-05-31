"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "general-provisions",
    title: "1.0 General Provisions & Scope",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">1.01 Application of Policy</h3>
        <p className="mb-6">
          This Privacy Architecture framework ("Policy") governs the data collection, processing, and syndication methodologies of Injaazh Global ("Company," "we," "our," or "us"). This framework applies universally to all digital assets, enterprise APIs, headless commerce instances, and bespoke web applications engineered by the Company.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">1.02 Global Jurisdictions</h3>
        <p>
          As a globally distributed digital agency, our data processing protocols are rigorously engineered to comply with the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA) as amended by the CPRA, and the UK Data Protection Act 2018. Where jurisdictional conflicts arise, the Company defaults to the most stringent data protection standard available.
        </p>
      </>
    )
  },
  {
    id: "data-collection",
    title: "2.0 Information Architecture & Collection",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">2.01 Personally Identifiable Information (PII)</h3>
        <p className="mb-6">
          We collect deterministic identifiers strictly on a basis of voluntary submission or contractual necessity. This encompasses robust enterprise identity profiles, including but not limited to corporate email architectures, secure cryptographic communication keys, and decentralized identity (DID) markers provided during enterprise onboarding.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">2.02 Behavioral & Telemetry Data</h3>
        <p>
          Our infrastructure leverages advanced, privacy-first telemetry to monitor system health and user experience metrics. We dynamically capture non-identifying heuristic data, including headless CMS interaction states, API latency metrics, TLS handshake logs, and anonymized viewport heuristics. All telemetry is aggregated and cryptographically hashed prior to analytical processing.
        </p>
      </>
    )
  },
  {
    id: "processing-methodologies",
    title: "3.0 Processing Methodologies & Legal Basis",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">3.01 Lawful Basis for Processing</h3>
        <p className="mb-6">
          Under GDPR Article 6, our processing of your payload data is predicated upon distinct lawful bases: (a) Explicit Consent acquired via granular opt-in mechanisms; (b) Contractual Necessity required for the execution of Master Service Agreements (MSA); and (c) Legitimate Interests, specifically regarding enterprise security auditing and fraud deterrence.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">3.02 AI & Machine Learning Analytics</h3>
        <p>
          We employ deterministic algorithms and bounded machine learning models to optimize web architecture and SEO topologies. We strictly prohibit the ingestion of sensitive client PII into training data corpuses for generative AI models without an explicit, cryptographically signed Data Processing Addendum (DPA).
        </p>
      </>
    )
  },
  {
    id: "sub-processors",
    title: "4.0 Sub-Processors & Syndication",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">4.01 Approved Vendor Ecosystem</h3>
        <p className="mb-6">
          Injaazh Global maintains a rigorous vendor risk management (VRM) protocol. Data may be syndicated exclusively to Tier-1 infrastructure providers (e.g., AWS, Vercel, Cloudflare) acting as authorized sub-processors. All sub-processors are bound by strict Standard Contractual Clauses (SCCs).
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">4.02 Cross-Border Data Transfers</h3>
        <p>
          Given our global footprint, data payloads may traverse international nodes. We ensure that any extranet transmission of EU/UK citizen data to jurisdictions lacking an Adequacy Decision is secured via robust cryptographic tunneling (TLS 1.3) and governed by the latest iteration of the European Commission's SCCs.
        </p>
      </>
    )
  },
  {
    id: "data-retention",
    title: "5.0 Retention, Archiving & Erasure",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">5.01 Retention Lifecycle</h3>
        <p className="mb-6">
          Data is maintained strictly for the duration of the operational lifecycle for which it was procured. Upon the termination of an MSA, all associated client data enters a 90-day cold-storage archiving phase to facilitate seamless transition, after which it is marked for automated deletion.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">5.02 Cryptographic Erasure</h3>
        <p>
          When data reaches its end-of-life (EOL), we do not merely soft-delete records. Our infrastructure executes verifiable cryptographic erasure (crypto-shredding) across all active databases and distributed edge caches, ensuring the data is mathematically irretrievable.
        </p>
      </>
    )
  },
  {
    id: "user-rights",
    title: "6.0 User Rights & Governance",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">6.01 Subject Access Requests (SAR)</h3>
        <p className="mb-6">
          Data subjects retain inalienable rights regarding their digital footprint. You reserve the right to execute Data Portability requests, demand Right to Erasure (Right to be Forgotten), and enforce Processing Restrictions. All authenticated SARs will be fully processed within 30 chronological days, free of administrative friction.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">6.02 Data Protection Officer (DPO)</h3>
        <p>
          Our independent Data Protection architecture is overseen by a dedicated DPO. For any compliance audits, security disclosures, or formal governance inquiries, please initiate contact via our secure compliance portal or directly at <a href="mailto:dpo@injaazh.com" className="text-[#6324FC] hover:underline">dpo@injaazh.com</a>.
        </p>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // Trigger when section is near top
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#060608] text-white pt-48 pb-32 relative overflow-hidden selection:bg-[#6324FC] selection:text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay fixed" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cinematic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 max-w-4xl"
        >
          <div className="font-mono text-[#6324FC] tracking-[0.5em] text-[10px] uppercase mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#6324FC]" /> 
            Legal & Compliance Hub
          </div>
          
          <h1 className="font-heading text-6xl md:text-[8rem] leading-[0.85] tracking-tighter uppercase mb-12">
            PRIVACY <br/>
            <span className="stroke-text text-transparent italic opacity-50">POLICY</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-white/40 font-mono text-xs uppercase tracking-widest border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#00E5FF]" />
              <span>Effective Date: Q2 2026</span>
            </div>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#6324FC]" />
              <span>Document ID: INJ-PL-048</span>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Sticky Table of Contents */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <h4 className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-8">Table of Contents</h4>
              <nav className="flex flex-col gap-6 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {SECTIONS.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className={`relative pl-8 font-heading text-lg tracking-tight transition-all duration-300 ${activeSection === section.id ? 'text-[#6324FC]' : 'text-white/40 hover:text-white/80'}`}
                  >
                    {/* Active Indicator Line */}
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-[#6324FC] transition-all duration-300 ${activeSection === section.id ? 'h-full opacity-100 shadow-[0_0_10px_rgba(99,36,252,0.8)]' : 'h-0 opacity-0'}`} />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: Legal Content (The "Document") */}
          <div className="lg:w-2/3">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <div className="mb-20 p-8 border border-white/10 bg-white/[0.02] rounded-2xl backdrop-blur-sm">
                <p className="font-sans font-light text-white/80 text-xl leading-relaxed m-0">
                  This framework delineates the uncompromising standard to which Injaazh Global holds itself regarding the custody, processing, and erasure of deterministic data. We operate under the axiom that privacy is not a feature, but a fundamental human right encoded into our engineering DNA.
                </p>
              </div>

              <div className="space-y-32">
                {SECTIONS.map((section, idx) => (
                  <motion.div 
                    key={section.id} 
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-40 relative"
                  >
                    {/* Section Number Watermark */}
                    <div className="absolute -left-12 -top-12 font-heading text-[8rem] leading-none text-white/[0.02] pointer-events-none select-none hidden md:block">
                      0{idx + 1}
                    </div>
                    
                    <h2 className="font-heading text-4xl md:text-5xl tracking-tight uppercase mb-12 text-[#00E5FF] border-b border-white/10 pb-8 relative z-10">
                      {section.title}
                    </h2>
                    
                    <div className="font-sans font-light text-white/60 text-lg leading-loose space-y-8 relative z-10">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Consent & Contact Footer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-40 p-12 border border-[#6324FC]/30 bg-gradient-to-br from-[#6324FC]/10 to-transparent rounded-[3rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/20 blur-[100px]" />
                
                <h3 className="font-heading text-4xl tracking-tight uppercase mb-6 text-white relative z-10">Enforce Your Rights</h3>
                <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 relative z-10 max-w-2xl">
                  As an enterprise client or data subject, your authority over your data is absolute. Should you require cryptographic verification of erasure, or wish to audit our processing logs, our compliance team stands ready.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-heading text-sm tracking-widest uppercase rounded-full hover:bg-[#00E5FF] transition-colors">
                    Contact Compliance <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="mailto:dpo@injaazh.com" className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/20 text-white font-heading text-sm tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors">
                    Email DPO
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
