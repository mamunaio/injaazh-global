"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "msa-scope",
    title: "1.0 Master Service Agreement (MSA) Scope",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">1.01 Engagement Framework</h3>
        <p className="mb-6">
          This Master Service Agreement ("Agreement") governs the commercial engagement between Injaazh Global ("Agency," "we," "our") and the corporate entity ("Client," "you") procuring our digital engineering, headless architecture, and strategic growth services. Acceptance of any Statement of Work (SOW) automatically binds the Client to these comprehensive Terms of Service.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">1.02 Service Execution Standard</h3>
        <p>
          We commit to delivering all software architecture, UI/UX topologies, and SEO syndication strategies utilizing enterprise-grade industry standards. We do not guarantee arbitrary qualitative metrics, but rather the strict adherence to the technical specifications mutually executed in the active SOW.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "2.0 Intellectual Property (IP) Rights",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">2.01 Transfer of Code & Assets</h3>
        <p className="mb-6">
          Upon full and final remittance of all invoices associated with an SOW, the Agency transfers an exclusive, royalty-free, perpetual license for all custom-engineered source code, compiled binaries, and bespoke design assets directly to the Client.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">2.02 Pre-Existing Architectures</h3>
        <p>
          The Agency retains all rights, title, and interest in our proprietary internal frameworks, boilerplates, and open-source contributions utilized during development. The Client is granted a non-exclusive license to utilize these pre-existing components intrinsically linked to their final deliverable.
        </p>
      </>
    )
  },
  {
    id: "financial-schedules",
    title: "3.0 Financial Schedules & Invoicing",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">3.01 Payment Milestones</h3>
        <p className="mb-6">
          Unless explicitly overridden in the SOW, standard enterprise engagements mandate a 50% upfront retainer prior to resource allocation, followed by a 25% remittance upon UAT (User Acceptance Testing) delivery, and the final 25% upon production deployment. All invoices operate on a Net-15 basis.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">3.02 Delinquent Accounts</h3>
        <p>
          Invoices surpassing the Net-15 threshold will accrue a cumulative late fee of 1.5% per month. The Agency reserves the unilateral right to suspend repository access, halt staging server deployments, and pause all active sprints until the account is returned to good standing.
        </p>
      </>
    )
  },
  {
    id: "warranties-sla",
    title: "4.0 Warranties & SLAs",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">4.01 Defect Remediation</h3>
        <p className="mb-6">
          All custom software delivered by the Agency is backed by a strict 30-day Post-Deployment Warranty. During this temporal window, any critical defects (P1/P2) deviating from the SOW specifications will be remediated at no additional fiscal cost to the Client.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">4.02 Limitation of Warranty</h3>
        <p>
          Post-warranty modifications, third-party API deprecations, and infrastructure outages caused by the Client's hosting providers are explicitly excluded from this warranty. Ongoing maintenance must be secured via a separate Retainer Agreement.
        </p>
      </>
    )
  },
  {
    id: "liability-indemnification",
    title: "5.0 Liability & Indemnification",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">5.01 Liability Cap</h3>
        <p className="mb-6">
          Under no circumstances shall the Agency's total aggregate liability arising from this engagement—whether in contract, tort, or otherwise—exceed the total fiat compensation paid by the Client to the Agency during the three (3) months preceding the inciting incident.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">5.02 Consequential Damages</h3>
        <p>
          We explicitly disclaim all liability for indirect, punitive, or consequential damages, including but not limited to loss of corporate revenue, SEO ranking fluctuations, or algorithmic penalties imposed by third-party search engines.
        </p>
      </>
    )
  },
  {
    id: "governing-law",
    title: "6.0 Jurisdiction & Governance",
    content: (
      <>
        <h3 className="font-heading text-xl mb-4 text-white">6.01 Legal Jurisdiction</h3>
        <p className="mb-6">
          This Agreement shall be governed by, and construed in accordance with, the corporate laws of Dubai, United Arab Emirates, without regard to its conflict of law principles. Both parties consent to the exclusive jurisdiction of the DIFC Courts.
        </p>
        <h3 className="font-heading text-xl mb-4 text-white">6.02 Arbitration Clause</h3>
        <p>
          Prior to initiating formal litigation, both the Client and the Agency agree to enter binding arbitration for any dispute exceeding $50,000 USD, facilitated by a mutually agreed-upon arbitrator operating within the UAE jurisdiction.
        </p>
      </>
    )
  }
];

export default function TermsOfService() {
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
    <main className="w-full min-h-screen bg-[#060608] text-white relative overflow-hidden selection:bg-[#00E5FF] selection:text-[#060608]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay fixed" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cinematic Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="font-mono text-[#00E5FF] tracking-[0.5em] text-[10px] uppercase mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#00E5FF]" /> 
            Corporate Agreements
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-12">
            TERMS OF <br/>
            <span className="stroke-text text-transparent italic opacity-50">SERVICE</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-white/40 font-mono text-xs uppercase tracking-widest border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#00E5FF]" />
              <span>Effective Date: Q2 2026</span>
            </div>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#6324FC]" />
              <span>Document ID: INJ-MSA-102</span>
            </div>
          </div>
        </motion.div>
        </section>
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Sticky Table of Contents */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <h4 className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-8">Master Service Agreement</h4>
              <nav className="flex flex-col gap-6 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {SECTIONS.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className={`relative pl-8 font-heading  tracking-tight transition-all duration-300 ${activeSection === section.id ? 'text-[#00E5FF]' : 'text-white/40 hover:text-white/80'}`}
                  >
                    {/* Active Indicator Line */}
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-[#00E5FF] transition-all duration-300 ${activeSection === section.id ? 'h-full opacity-100 shadow-[0_0_10px_rgba(0,229,255,0.8)]' : 'h-0 opacity-0'}`} />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: Legal Content (The "Document") */}
          <div className="lg:w-2/3">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <div className="mb-20 p-8 border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-2xl backdrop-blur-sm">
                <p className="font-sans font-light text-white/80 text-xl leading-relaxed m-0">
                  This document serves as the foundational legal architecture governing all commercial interactions with Injaazh Global. By executing a Statement of Work, transferring a retainer, or accessing our proprietary staging environments, you explicitly consent to this Master Service Agreement.
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
                    className="scroll-mt-40 relative py-16 md:py-24 border-b border-white/5"
                  >
                    {/* Section Number Watermark */}
                    <div className="absolute -left-12 -top-12 font-heading text-[8rem] leading-none text-white/[0.02] pointer-events-none select-none hidden md:block">
                      0{idx + 1}
                    </div>
                    
                    <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-12 text-[#6324FC] border-b border-white/10 pb-8 relative z-10">
                      {section.title}
                    </h2>
                    
                    <div className="font-sans font-light text-white/60  leading-loose space-y-8 relative z-10">
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
                className="mt-40 p-12 border border-[#00E5FF]/30 bg-gradient-to-br from-[#00E5FF]/10 to-transparent rounded-[3rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#6324FC]/20 blur-[100px]" />
                
                <h3 className="font-heading text-4xl tracking-tight uppercase mb-6 text-white relative z-10">Questions Regarding Terms?</h3>
                <p className="font-sans text-white/70  leading-relaxed mb-10 relative z-10 max-w-2xl">
                  Our corporate legal team is available to clarify any provisions within this Master Service Agreement. For custom SLA negotiations or enterprise redlines, please route your inquiry through your designated account executive.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-heading text-sm tracking-widest uppercase rounded-full hover:bg-[#00E5FF] transition-colors">
                    Contact Legal <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="mailto:legal@injaazh.com" className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/20 text-white font-heading text-sm tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors">
                    Email Legal Team
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
