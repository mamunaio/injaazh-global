"use client";

import React, { createContext, useContext, useState } from "react";
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
