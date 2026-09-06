"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import AIAuditModal from "./AIAuditModal";

interface ModalContextType {
  openModal: (defaultService?: string) => void;
  closeModal: () => void;
  openAuditModal: () => void;
  closeAuditModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string>("");

  const openModal = (service: string = "") => {
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const openAuditModal = () => setIsAuditOpen(true);
  const closeAuditModal = () => setIsAuditOpen(false);

  // Robust Body Scroll Lock & Escape Key Handler
  useEffect(() => {
    if (isOpen || isAuditOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPaddingRight = document.body.style.paddingRight;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      // Compensate for scrollbar width to prevent horizontal layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
          closeAuditModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, isAuditOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openAuditModal, closeAuditModal }}>
      {children}
      <ProjectModal isOpen={isOpen} onClose={closeModal} defaultService={defaultService} />
      <AIAuditModal isOpen={isAuditOpen} onClose={closeAuditModal} />
    </ModalContext.Provider>
  );
}

export const useProjectModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useProjectModal must be used within ModalProvider");
  return context;
};
