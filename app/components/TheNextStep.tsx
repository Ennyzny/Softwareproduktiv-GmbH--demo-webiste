export default function TheNextStep() {
  return (
    <section id="der-naechste-schritt" className="border-t border-(--divider) bg-white py-17.5 md:py-30">
      <div className="mx-auto max-w-310 flex flex-col items-center px-5 text-center sm:px-10">
        <span className="mb-5 text-[13px] font-bold uppercase tracking-[0.14em] text-(--accent)">
          // Der nächste Schritt
        </span>
        <h2 className="mb-5.5 text-center text-[clamp(38px,4.8vw,60px)] font-medium leading-[1.14] tracking-[-0.01em] text-(--soft)">
          Lass uns{" "}
          <span className="font-bold text-(--primary)">Dein System</span>{" "}
          anschauen.
        </h2>
        <p className="mb-8.5 max-w-[60ch] text-[17px] font-medium leading-[1.65] text-(--muted)">
          In einem unverbindlichen, 15-minütigen Gespräch analysieren wir deine
          aktuellen Datensilos und skizzieren eine konkrete Lösung.
        </p>
        <button className="inline-flex items-center gap-2.5 bg-(--primary) px-6.5 py-3.75 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-(--violet)">
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
        <div className="mt-6.5 flex flex-wrap justify-center text-[13px] font-semibold text-(--muted)">
          <span className="relative px-4">Kostenlos</span>
          <span className="relative px-4 before:content-['|'] before:absolute before:-left-0.5 before:text-(--divider)">
            Ohne Verpflichtung
          </span>
          <span className="relative px-4 before:content-['|'] before:absolute before:-left-0.5 before:text-(--divider)">
            100% praxisbezogen
          </span>
        </div>
      </div>
    </section>
  );
}
