"use client";

import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Extract numeric portion
  const numericMatch = value.match(/[\d.]+/);
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isDecimal = value.includes(".");

  // Detect prefix if not provided
  const derivedPrefix = prefix || (value.startsWith("$") ? "$" : "");

  // Detect suffix if not provided
  const derivedSuffix =
    suffix ||
    (() => {
      let s = "";
      if (value.includes("M")) s += "M";
      if (value.includes("B")) s += "B";
      if (value.includes("k")) s += "k";
      if (value.includes("%")) s += "%";
      if (value.includes("+")) s += "+";
      if (value.includes("x") || value.includes("X")) s += "x";
      if (value.includes("s") && !value.includes("M") && !value.includes("B")) s += "s";
      return s;
    })();

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
      {derivedPrefix}
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {derivedSuffix}
    </span>
  );
}
