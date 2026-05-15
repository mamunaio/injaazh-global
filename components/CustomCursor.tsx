"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Physics config for that buttery smooth "lag" effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only show on desktop devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest("a") || target.closest("button") || target.tagName === "BUTTON" || target.tagName === "A") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      const textElement = target.closest("[data-cursor]") as HTMLElement;
      if (textElement && textElement.dataset.cursor) {
        setCursorText(textElement.dataset.cursor);
      } else {
        setCursorText("");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);

    // Keep the system cursor visible
    document.body.style.cursor = 'auto';

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const size = cursorText ? 100 : (isHovering ? 80 : 65);

  return (
    <>
      {/* Click Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-8 h-8 rounded-full border-2 border-[#6324FC] shadow-[0_0_20px_#6324FC]"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-xs text-primary tracking-widest drop-shadow-[0_0_10px_rgba(99,36,252,0.6)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: size,
          height: size,
        }}
        transition={{
          width: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        
        {/* 1. TEXT BUBBLE STATE */}
        <AnimatePresence>
          {cursorText && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 bg-[#6324FC] rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_30px_rgba(99,36,252,0.8)]"
            >
              {cursorText}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. ADVANCED SVG RING STATE (Visible when no text) */}
        <AnimatePresence>
          {!cursorText && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                
                {/* Inner Solid Ring (Spins counter-clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r={isHovering ? "30" : "20"}
                  stroke="#6324FC"
                  strokeWidth="2"
                  fill="none"
                  opacity={isHovering ? "0.8" : "0.6"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                />

                {/* Outer Dashed Ring (Spins clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#6324FC"
                  strokeWidth={isHovering ? "3" : "2"}
                  strokeDasharray={isHovering ? "6 6" : "8 12"} 
                  fill="none"
                  opacity={isHovering ? "1" : "0.8"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: isHovering ? 4 : 10, 
                    ease: "linear" 
                  }}
                  style={{ transformOrigin: "50px 50px" }}
                />

                {/* Center Pulsing Dot (Anchors the visual) */}
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="3" 
                  fill="#6324FC" 
                  animate={{ 
                    scale: isHovering ? 0 : [1, 1.5, 1], 
                    opacity: isHovering ? 0 : [0.6, 1, 0.6] 
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </>
  );
}
