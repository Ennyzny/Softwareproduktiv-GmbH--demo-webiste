export default function Philosophy() {
  return (
    <section id="philosophie" className="bg-[#f5f2f0] py-27.5">
      <div className="mx-auto w-[92%] max-w-310">
        <div className="grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-17.5">
          <div>
            <span className="mb-5 block text-[12px] font-bold uppercase tracking-[0.16em] text-(--accent)">
              // Philosophie
            </span>
            <h2 className="text-[clamp(42px,5vw,72px)] font-medium leading-[1.14] tracking-[-0.02em] text-(--soft)">
              Unabhängig
              <br />
              <span className="font-bold text-(--primary)">beraten,</span>{" "}
              passend
              <br />
              entscheiden.
            </h2>
          </div>
          <div>
            <p className="mb-5 text-[28px] font-medium leading-[1.35] text-(--primary)">
              Nicht jede Herausforderung braucht neue Software.
              <br />
              Und nicht jede Software passt zu jedem Unternehmen.
            </p>
            <p className="max-w-[64ch] text-[17px] leading-[1.8] text-(--muted)">
              Unser unabhängiger Ansatz stellt sicher, dass du genau die
              Werkzeuge erhältst, die dein Geschäftsmodell optimal unterstützen.
              Von der Softwareauswahl über die Prozessgestaltung bis zur
              technischen Umsetzung betrachten wir die gesamte
              Unternehmenslandschaft und entwickeln Lösungen, die langfristig
              funktionieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
