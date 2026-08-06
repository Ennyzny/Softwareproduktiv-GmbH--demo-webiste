"use client";

export default function OwnDevelopments() {
  return (
    <section
      id="eigenentwicklungen"
      className="leading-normal box-border bg-(--dark) relative text-white overflow-hidden m-0 p-0"
    >
      <div className="">
        <div className="leading-normal text-white box-border max-w-310 text-center relative z-1 mx-auto my-0 px-5 sm:px-10 py-16">
          <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-(--violet)">
            // Eigenentwicklungen
          </span>
          <h2 className="text-center box-border font-bold leading-[1.1] text-white text-(length:--fs-h3) uppercase tracking-[0.02em] mb-4.5 m-0 p-0;">
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
            onClick={() =>
              document.getElementById("leistungen")?.scrollIntoView()
            }
           className="inline-flex cursor-pointer items-center gap-2.5 border-[1.5px] border-white/60 bg-transparent px-6.5 py-3.75 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-(--primary) hover:-translate-y-px"
          >
            Leistungen
          </button>
        </div>
      </div>
    </section>
  );
}
