export default function Funding() {
  return (
    <section id="funding" className="py-17.5 md:py-30">
      <div className="mx-auto max-w-310 px-5 sm:px-10">
        <div className="mb-4.5">
          <span className="inline-block text-[13px] font-bold uppercase tracking-[.14em] text-(--accent)">
            // Fördermittel
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-7.5 border border-(--divider) bg-white px-11 py-10">
          <div>
            <h3 className="mb-3 text-[clamp(19px,2vw,26px)] font-bold uppercase tracking-[.02em] leading-[1.3] text-(--primary)">
              Förderfähig? Wir prüfen das.
            </h3>
            <p className="max-w-[66ch] text-[15px] font-medium leading-[1.6] text-(--muted)">
              Gemeinsam identifizieren wir passende Förderprogramme und
              integrieren diese direkt in die Projektplanung, um eine belastbare
              Grundlage für Investitionsentscheidungen zu schaffen.
            </p>
          </div>

          <button className="inline-flex items-center gap-2.5 bg-(--primary) px-6.5 py-3.75 text-[13px] font-bold uppercase tracking-[.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-(--violet)">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
}
