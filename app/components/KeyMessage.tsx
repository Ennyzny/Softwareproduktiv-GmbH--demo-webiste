export default function KeyMessage() {
  return (
    <section
      id="kernbotschaft"
      className="border-b border-(--divider) bg-white py-27.5"
    >
      <div className="mx-auto w-[92%] max-w-310">
        <div className="grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-17.5">
          <div>
            <span className="mb-5 block font-(--font-mono) text-[12px] uppercase tracking-[0.16em] text-ink">
              // Kernbotschaft
            </span>
            <h2 className="text-[clamp(42px,5vw,72px)] font-medium leading-[1.14] tracking-[-0.02em] text-(--soft)">
              Software fürs
              <br />
              <b className="font-bold text-(--primary)">Handwerk,</b>
              <br />
              die im Alltag
              <br />
              funktioniert.
            </h2>
          </div>
          <div>
            <p className="mb-5 text-[28px] font-medium leading-[1.35] text-(--primary)">
              Wir bringen Struktur in Ihre Abläufe.
              <br />
              Und machen sie steuerbar.
            </p>
            <p className="max-w-[64ch] text-[17px] leading-[1.8] text-(--muted)">
              Softwareproduktiv unterstützt Unternehmen ganzheitlich bei der
              Auswahl und Anpassung leistungsstarker ERP-Systeme, um
              durchgängige, medienbruchfreie Workflows zu realisieren. Wir
              verbinden Beratung, Prozessverständnis und Individualentwicklung
              zu Lösungen, die exakt auf dein Unternehmen zugeschnitten sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
