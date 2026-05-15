"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Globe, Clock, Mail, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Eye className="w-6 h-6 text-[#6324FC]" />,
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.",
      accent: "from-[#6324FC]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(99,36,252,0.1)]",
      borderColor: "border-[#6324FC]/20"
    },
    {
      title: "2. How We Use Your Information",
      icon: <FileText className="w-6 h-6 text-[#00E5FF]" />,
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about updates, security alerts, and support messages, and to personalize your experience.",
      accent: "from-[#00E5FF]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(0,229,255,0.1)]",
      borderColor: "border-[#00E5FF]/20"
    },
    {
      title: "3. Data Security",
      icon: <Lock className="w-6 h-6 text-[#6324FC]" />,
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.",
      accent: "from-[#6324FC]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(99,36,252,0.1)]",
      borderColor: "border-[#6324FC]/20"
    },
    {
      title: "4. Third-Party Services",
      icon: <Globe className="w-6 h-6 text-[#00E5FF]" />,
      content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website.",
      accent: "from-[#00E5FF]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(0,229,255,0.1)]",
      borderColor: "border-[#00E5FF]/20"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#060608] pt-48 pb-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <div className="font-mono text-[#6324FC] tracking-[0.5em] text-[10px] uppercase mb-10 flex justify-center items-center gap-4">
            <span className="w-12 h-[1px] bg-[#6324FC]" /> 
            Legal & Compliance
            <span className="w-12 h-[1px] bg-[#6324FC]" />
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase mb-10">
            PRIVACY <br/>
            <span className="stroke-text text-transparent italic opacity-30">POLICY</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/40 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Last Updated: May 15, 2026</span>
            </div>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#6324FC]" />
              <span>Version 2.4.0</span>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 border-l-2 border-[#6324FC]/30 bg-white/[0.01]"
        >
          <p className="font-sans font-light text-white/60 text-xl leading-relaxed">
            Injaazh Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-2xl relative group overflow-hidden h-full`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-6">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 ${section.glow}`}>
                  {section.icon}
                </div>
                <h2 className="font-heading text-3xl tracking-tight uppercase">{section.title}</h2>
                <p className="font-sans text-white/50 text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consent Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 border border-[#6324FC]/20 bg-[#6324FC]/5 rounded-[3rem] text-center space-y-8"
        >
          <div className="w-16 h-16 bg-[#6324FC]/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="text-[#6324FC] w-8 h-8" />
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-4xl tracking-tight uppercase">Your Consent</h3>
            <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              By using our site, you consent to our website's privacy policy. We may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <p className="font-mono text-[#6324FC] text-[10px] uppercase tracking-widest mb-2">Direct Inquiry</p>
              <a href="mailto:privacy@injaazh.com" className="font-heading text-2xl hover:text-[#6324FC] transition-colors uppercase tracking-tighter">privacy@injaazh.com</a>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-white/10" />
            <div className="text-center">
              <p className="font-mono text-[#00E5FF] text-[10px] uppercase tracking-widest mb-2">Physical Office</p>
              <address className="font-heading text-2xl not-italic uppercase tracking-tighter">Dubai, United Arab Emirates</address>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
