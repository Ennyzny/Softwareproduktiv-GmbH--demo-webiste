export default function KeyMessage() {
  return (
    <section
      id="kernbotschaft"
      className="block isolate box-border bg-[#ffffff] border-b border-b-(--divider) py-30 max-[768px]:py-17.5"
    >
      <div className="grid grid-cols-[1.05fr_1fr] gap-17.5 items-start max-[860px]:grid-cols-1 max-[860px]:gap-8 max-w-(--maxw) mx-auto px-10 max-[640px]:px-5">
        <div className="opacity-100 transform-none box-border block isolate text-(--ink) leading-normal">
          <span className="box-border leading-normal text-[13px] font-bold tracking-[.14em] text-(--accent) uppercase inline-block mb-5">
            // Kernbotschaft
          </span>
          <h2 className="block isolate box-border tracking-[-.01em] leading-[1.14] text-(--soft) font-medium text-(length:--fs-display)">
            Software fürs{" "}
            <b className="text-(--primary) font-bold box-border text-(length:--fs-display) leading-[1.14]">
              Handwerk,
            </b>
            <br />
            die im Alltag funktioniert.
          </h2>
        </div>
        <div>
          <p className="block isolate box-border mb-5 leading-[1.35] font-medium text-(--primary) text-(length:--fs-h3)">
            Wir bringen Struktur in Ihre Abläufe.
            <br />
            Und machen sie steuerbar.
          </p>
          <p className="block isolate box-border max-w-[60ch] leading-[1.65] font-medium text-(length:--fs-body) text-(--muted)">
            Softwareproduktiv unterstützt Unternehmen ganzheitlich bei der
            Auswahl und Anpassung leistungsstarker ERP-Systeme, um durchgängige,
            medienbruchfreie Workflows zu realisieren. Wir verbinden Beratung,
            Prozessverständnis und Individualentwicklung zu Lösungen, die exakt
            auf dein Unternehmen zugeschnitten sind.
          </p>
        </div>
      </div>
    </section>
  );
}
