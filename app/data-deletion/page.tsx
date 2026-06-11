"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, ArrowRight, ShieldAlert } from "lucide-react";

export default function DataDeletion() {
  return (
    <main className="w-full min-h-screen bg-[#060608] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="font-mono text-[#6324FC] tracking-[0.5em] text-[10px] uppercase mb-10 flex justify-center items-center gap-4">
              <span className="w-12 h-[1px] bg-[#6324FC]" /> 
              Compliance & Privacy
              <span className="w-12 h-[1px] bg-[#6324FC]" />
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-10">
              DATA DELETION <br/>
              <span className="stroke-text text-transparent italic opacity-30">INSTRUCTIONS</span>
            </h1>
            
            <p className="font-sans font-light text-white/50 text-xl leading-relaxed max-w-2xl mx-auto border-l border-white/5 pl-8 text-left md:text-center md:border-l-0 md:pl-0">
              At Injaazh, we value your privacy. Following Meta&apos;s Platform Policy, we provide a Data Deletion Callback URL or Data Deletion Instructions URL to help users request their data removal.
            </p>
          </motion.div>
        </section>

        {/* Instructions Content */}
        <div className="space-y-16 py-16 md:py-24">
          
          {/* Method 1: Facebook App Settings */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6324FC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#6324FC]/10 flex items-center justify-center shrink-0 border border-[#6324FC]/20 shadow-[0_0_30px_rgba(99,36,252,0.1)]">
                <ShieldCheck className="text-[#6324FC] w-8 h-8" />
              </div>
              <div className="space-y-8">
                <h2 className="font-heading text-4xl tracking-tight uppercase">Method 1: via Facebook Settings</h2>
                <p className="font-sans text-white/60  leading-relaxed">
                  If you have used our app with Facebook Login, you can remove your activities by following these steps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                     "Go to your Facebook Profile's Settings & Privacy.",
                     "Click Settings.",
                     "Navigate to Apps and Websites in the left menu.",
                     "Find Injaazh ERP in the list.",
                     "Click the Remove button."
                   ].map((step, i) => (
                     <div key={i} className="flex gap-4 items-start">
                       <span className="font-mono text-[#6324FC] text-sm font-bold">0{i+1}.</span>
                       <p className="font-sans text-white/40 text-sm leading-relaxed">{step}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Method 2: Manual Request */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 flex items-center justify-center shrink-0 border border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
                <Mail className="text-[#00E5FF] w-8 h-8" />
              </div>
              <div className="space-y-8">
                <h2 className="font-heading text-4xl tracking-tight uppercase">Method 2: Manual Deletion Request</h2>
                <p className="font-sans text-white/60  leading-relaxed">
                  To request manual deletion of any data associated with your account from our servers, please contact our data protection team directly:
                </p>
                <a 
                  href="mailto:info@injaazh.com" 
                  className="inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] hover:bg-[#6324FC] border border-white/10 rounded-full transition-all duration-500 group"
                >
                  <span className="font-heading text-2xl tracking-tighter uppercase group-hover:text-white">info@injaazh.com</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="p-6 bg-white/[0.01] border-l border-white/10 rounded-r-2xl">
                  <p className="font-sans text-white/30 text-sm italic leading-relaxed">
                    * Please include your full name and the email address used for registration. We will process your request and confirm data removal within 30 business days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Note Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-[#6324FC]/20 bg-[#6324FC]/5 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-12 h-12 bg-[#6324FC]/20 rounded-full flex items-center justify-center shrink-0">
              <ShieldAlert className="text-[#6324FC] w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-2xl tracking-wide uppercase text-[#6324FC]">Important Assurance</h3>
              <p className="font-sans text-white/40 text-sm leading-relaxed">
                Once your request is processed, all personal data, activity logs, and identifiers will be permanently purged from our active databases and backup systems in accordance with GDPR and global privacy standards.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}
