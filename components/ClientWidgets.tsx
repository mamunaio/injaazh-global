"use client";

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const FloatingWidget = dynamic(() => import("@/components/FloatingWidget"), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      <CustomCursor />
      <FloatingWidget />
    </>
  );
}
