"use client";

export default function OwnDevelopments() {
  return (
    <section className="relative overflow-hidden bg-(--dark) text-white">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90" />
      <div className="relative z-10 mx-auto max-w-310 px-5 py-16 text-center sm:px-10">
        <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-(--violet)">
          // Eigenentwicklungen
        </span>
        <h2 className="mb-4.5 text-[clamp(19px,2vw,26px)] font-bold uppercase tracking-[.02em] leading-[1.1] text-white">
          Eigene Lösungen. Keine Abhängigkeit von Standards.
        </h2>
        <p className="mx-auto mb-6.5 max-w-[78ch] text-[15px] font-medium leading-[1.65] text-white/75">
          Nicht jede Herausforderung muss von Grund auf neu entwickelt werden.
          Auf Basis fundierter Ist-Soll-Analysen verbinden wir bewährte
          Standardsoftware, individuelle Erweiterungen und eigene Produkte zu
          einer Lösung, die zu deinem Unternehmen passt. Mit stocklogistic für
          die Lagerverwaltung und BrickIT für die Massendatenpflege stehen
          bereits praxiserprobte Werkzeuge zur Verfügung, die sich nahtlos in
          bestehende Systemlandschaften integrieren lassen.
        </p>
        <button
          onClick={() => document.getElementById("services")?.scrollIntoView()}
          className="inline-flex cursor-pointer items-center gap-2.5 border-[1.5px] border-white/60 bg-transparent px-6.5 py-3.75 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-(--primary)"
        >
          Leistungen
        </button>
      </div>
    </section>
  );
}
