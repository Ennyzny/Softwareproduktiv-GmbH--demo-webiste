export default function Philosophy() {
  return (
    <section
      id="philosophie"
      className="bg-(--background) py-30 max-[768px]:py-17.5"
    >
      <div className="mx-auto flex max-w-310 flex-col gap-8 px-10 max-[640px]:px-5 min-[900px]:flex-row min-[900px]:gap-17.5">
        <div className="flex-[1.05] opacity-100">
          <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-[#512d6d]">
            // Philosophie
          </span>
          <h2 className="text-(length:--fs-display) leading-[1.14] tracking-[-0.01em] font-medium text-(--soft)">
            Unabhängig
            <br />
            <span className="font-bold text-(--primary)">beraten,</span> passend
            <br />
            entscheiden.
          </h2>
        </div>
        <div className="flex-1 opacity-100">
          <p className="mb-5 text-(length:--fs-h3) font-medium leading-[1.35] text-(--primary)">
            Nicht jede Herausforderung braucht neue Software. Und nicht jede
            Software passt zu jedem Unternehmen.
          </p>
          <p className="max-w-[60ch] text-(length:--fs-body) font-medium leading-[1.65] text-(--muted)">
            Unser unabhängiger Ansatz stellt sicher, dass du genau die Werkzeuge
            erhältst, die dein Geschäftsmodell optimal unterstützen. Von der
            Softwareauswahl über die Prozessgestaltung bis zur technischen
            Umsetzung betrachten wir die gesamte Unternehmenslandschaft und
            entwickeln Lösungen, die langfristig funktionieren.
          </p>
        </div>
      </div>
    </section>
  );
}
