"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const FloatingWidget = dynamic(() => import("@/components/FloatingWidget"), { ssr: false });

export default function ClientWidgets() {
  useEffect(() => {
    const toTitleCase = (str: string) => {
      return str
        .toLowerCase()
        .replace(/(^[a-z]|[\s-][a-z])/g, (match) => match.toUpperCase());
    };

    const transformElements = () => {
      const selectors = "h1, h2, h3, h4, h5, h6, button, a, .font-heading, .capitalize";
      const elements = document.querySelectorAll(selectors);
      
      elements.forEach((el) => {
        // Walk through text nodes only to avoid breaking HTML structures / icons
        const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
        let node;
        while ((node = walk.nextNode())) {
          if (node.nodeValue) {
            const text = node.nodeValue.trim();
            // Check if text is all-uppercase (and contains letters)
            if (text && text === text.toUpperCase() && text !== text.toLowerCase()) {
              node.nodeValue = toTitleCase(node.nodeValue);
            }
          }
        }
      });
    };

    // Run on initial render
    transformElements();

    // Monitor DOM changes (e.g. tabs change, dynamic pages, modals)
    const observer = new MutationObserver(() => {
      transformElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <FloatingWidget />
    </>
  );
}
