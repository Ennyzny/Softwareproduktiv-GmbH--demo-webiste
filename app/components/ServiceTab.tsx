"use client";

import { useModal } from "../context/ModalContext";

export default function ServiceTab() {
  const { openModal } = useModal();

  return (
    <button
      type="button"
      aria-label="Service"
      onClick={openModal}
      className="fixed top-1/2 -translate-y-1/2 right-0 z-39 w-7.75 bg-(--primary) text-white border-0 cursor-pointer py-4.5 rounded-l-xl flex flex-col items-center justify-center gap-3.25 shadow-[-5px_6px_18px_-8px_rgba(0,0,0,.4)] transition-colors duration-200 hover:bg-[#3a2159] max-[860px]:hidden"
    >
      <span className="h-2.25 w-2.25 rounded-full bg-(--violet) animate-[livepulse_1.8s_ease-out_infinite]" />
      <span className="text-[11px] leading-none font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
        Service
      </span>
    </button>
  );
}
