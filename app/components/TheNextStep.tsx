export default function TheNextStep() {
  return (
    <section
      id="kontakt"
      className="border-t border-(--divider) bg-white pt-20.5 pb-19.5"
    >
      <div className="mx-auto flex w-[92%] max-w-310 flex-col items-center text-center">
        <span className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-(--primary)">
          // Der nächste Schritt
        </span>
        <h2 className="mb-6 text-center text-[clamp(42px,5vw,72px)] font-medium leading-[1.1] tracking-[-0.02em] text-(--soft)">
          Lass uns{" "}
          <span className="font-bold text-(--primary)">Dein System</span>{" "}
          anschauen.
        </h2>
        <p className="mb-10 max-w-[60ch] text-[17px] leading-[1.75] text-(--muted)">
          In einem unverbindlichen, 15-minütigen Gespräch analysieren wir deine
          aktuellen Datensilos und skizzieren eine konkrete Lösung.
        </p>
        <button className="inline-flex items-center gap-2.5 rounded-none mb-7 bg-(--primary) px-6.5 py-3.75 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--violet)">
          Erstgespräch vereinbaren
        </button>
        <div className="mt-6.5 flex flex-wrap justify-center gap-y-2 gap-x-2 text-[14px] font-semibold text-(--muted)">
          <span className="px-4">Kostenlos</span>
          <span className="hidden text-(--divider) sm:inline">|</span>
          <span className="px-4">Ohne Verpflichtung</span>
          <span className="hidden text-(--divider) sm:inline">|</span>
          <span className="px-4">100% praxisbezogen</span>
        </div>
      </div>
    </section>
  );
}
