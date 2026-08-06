"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Step = 1 | 2 | 3;

interface ModalContextType {
  isOpen: boolean;
  step: Step;
  gewerk: string;
  huerde: string;
  openModal: () => void;
  closeModal: () => void;
  goStep: (s: Step) => void;
  setGewerk: (v: string) => void;
  setHuerde: (v: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [gewerk, setGewerk] = useState("");
  const [huerde, setHuerde] = useState("");

  const openModal = () => {
    setStep(1);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      setStep(1);
      setGewerk("");
      setHuerde("");
    }, 200);
  };

  const goStep = (s: Step) => setStep(s);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        step,
        gewerk,
        huerde,
        openModal,
        closeModal,
        goStep,
        setGewerk,
        setHuerde,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be called inside ModalProvider");
  }

  return context;
}