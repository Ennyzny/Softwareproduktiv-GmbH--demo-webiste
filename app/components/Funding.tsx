"use client";
import { useModal } from "@/app/context/ModalContext";

export default function Funding() {
  const { openModal } = useModal();

  return (
    <section
      id="fördermittel"
      className="box-border block m-0 py-17.5 md:py-30"
    >
      <div className="mx-auto max-w-310 px-5 sm:px-10">
        <div className="mb-4.5">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[.14em] text-(--accent) mb-5">
            // Fördermittel
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-7.5 border border-(--divider) bg-white px-11 py-10">
          <div className="box-border block isolate">
            <h3 className="mb-3 text-(length:--fs-h3) font-bold uppercase tracking-[.02em] leading-[1.1] text-(--primary)">
              Förderfähig? Wir prüfen das.
            </h3>
            <p className="max-w-[66ch] text-[15px] font-medium leading-[1.6] text-(--muted)">
              Gemeinsam identifizieren wir passende Förderprogramme und
              integrieren diese direkt in die Projektplanung, um eine belastbare
              Grundlage für Investitionsentscheidungen zu schaffen.
            </p>
          </div>
          <button onClick={openModal} className="inline-flex items-center gap-2.5 border-0 bg-(--primary) px-6.5 py-3.75 font-sans text-[13px] leading-none font-bold uppercase tracking-[.08em] text-white cursor-pointer [transition:background_.25s,transform_.15s] hover:-translate-y-px hover:bg-(--violet)"> Termin vereinbaren</button>
        </div>
      </div>
    </section>
  );
}