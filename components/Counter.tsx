"use client";

import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = progress * target;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {value.includes("%") && "%"}
      {value.includes("+") && "+"}
      {value.includes("s") && "s"}
    </span>
  );
}
