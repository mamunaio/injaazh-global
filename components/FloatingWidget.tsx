"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sun, Moon, Monitor } from "lucide-react";

export default function FloatingWidget() {
  const [theme, setTheme] = useState("dark");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Scroll listener for back to top button
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
    // Theme initialization
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    if (newTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", isDark);
    } else {
      root.classList.toggle("dark", newTheme === "dark");
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setShowThemeMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3 md:gap-4">
      
      {/* Theme Toggle */}
      <div 
        className="relative flex flex-col items-end"
        onMouseEnter={() => setShowThemeMenu(true)}
        onMouseLeave={() => setShowThemeMenu(false)}
      >
        <AnimatePresence>
          {showThemeMenu && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-16 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-2 flex flex-col gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden min-w-[140px]"
            >
              {[
                { id: 'light', icon: Sun, label: 'LIGHT' },
                { id: 'dark', icon: Moon, label: 'DARK' },
                { id: 'system', icon: Monitor, label: 'SYSTEM' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleThemeChange(item.id)} 
                  className={`flex items-center gap-3 px-4 py-2.5 font-mono text-[10px] tracking-[0.2em] transition-all rounded-xl ${
                    theme === item.id 
                      ? 'bg-[#6324FC] text-white' 
                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" /> {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-900 backdrop-blur-xl border border-black/5 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white hover:border-[#6324FC] transition-all duration-500 shadow-xl rounded-xl md:rounded-2xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-[#6324FC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          {mounted ? (
            theme === "light" ? <Sun className="w-5 h-5 text-[#6324FC]" /> : theme === "dark" ? <Moon className="w-5 h-5 text-[#6324FC]" /> : <Monitor className="w-5 h-5 text-[#6324FC]" />
          ) : (
            <div className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-[#6324FC] flex items-center justify-center text-white shadow-[0_15px_35px_rgba(99,36,252,0.3)] hover:bg-[#5219d6] transition-all duration-500 rounded-xl md:rounded-2xl group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-500" />
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  );
}
