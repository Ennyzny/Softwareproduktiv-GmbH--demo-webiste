"use client";
import { useModal } from "@/app/context/ModalContext";

export default function TheNextStep() {
  const { openModal } = useModal();

  return (
    <section
      id="der-nächste-schritt"
      className="text-(--ink) leading-normal bg-white border-t border-solid border-t-(--divider) py-30 max-md:py-17.5"
    >
      <div className="mx-auto max-w-310 px-5 sm:px-10 text-center reveal">
        <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-(--accent)">
          // Der nächste Schritt
        </span>
        <h2 className="mb-5.5 text-(length:--fs-display) font-medium leading-[1.1] tracking-[-0.01em] text-(--soft)">
          Lass uns{" "}
          <span className="font-bold text-(--primary)">Dein System</span>{" "}
          anschauen.
        </h2>
        <p className="mx-auto mb-8.5 max-w-[60ch] text-[17px] font-medium leading-[1.65] text-(--muted)">
          In einem unverbindlichen, 15-minütigen Gespräch analysieren wir deine
          aktuellen Datensilos und skizzieren eine konkrete Lösung.
        </p>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2.5 border-0 bg-(--primary) px-6.5 py-3.75 text-[13px] leading-px font-bold uppercase tracking-[0.08em] text-white cursor-pointer [transition:background_.25s,transform_.15s] hover:bg-(--violet) hover:-translate-y-px"
        >
          Erstgespräch vereinbaren
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3.75 w-3.75"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <div className="mt-6.5 flex flex-wrap justify-center text-[14px] font-semibold text-(--muted)">
          <span className="relative px-4">Kostenlos</span>
          <span className="relative px-4 before:absolute before:-left-0.5 before:content-['|'] before:text-(--divider)">
            Ohne Verpflichtung
          </span>
          <span className="relative px-4 before:absolute before:-left-0.5 before:content-['|'] before:text-(--divider)">
            100 % praxisbezogen
          </span>
        </div>
      </div>
    </section>
  );
}
