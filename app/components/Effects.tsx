export default function Effects() {
  return (
    <section
      id="effekte"
      className="isolate box-border w-full bg-[#4c2f69] text-white"
    >
      <div className="mx-auto max-w-310 px-10 py-24 text-center">
        <span className="mb-5 inline-block text-[13px] font-bold uppercase leading-normal tracking-[0.14em] text-(--violet)">
          // Effekte
        </span>
        <h2 className="mb-4.5 text-(length:--fs-display) font-normal leading-[1.1] tracking-[-0.01em]">
          <b>Weniger</b> Fehler. <b>Mehr</b> Überblick.
        </h2>
        <p className="mx-auto mb-0 max-w-[78ch] text-(length:--fs-small) font-medium leading-[1.65] text-white/75">
          Klare Abläufe. Bessere Entscheidungen.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6.5 text-center md:grid-cols-3">
          <div className="isolate box-border bg-[#f5f2f0] px-7.5 pt-10 pb-11 text-center">
            <div className="text-(length:--fs-display) font-bold leading-none tracking-[-0.01em] text-[#4c2f69]">
              – 40 %
            </div>
            <div className="mt-5.5 mb-7.5 text-[16px] font-bold leading-normal text-[#4c2f69]">
              Fehlerrate im Betriebsalltag
            </div>
            <p className="text-(length:--fs-small) font-medium leading-[1.7] text-(--ink)">
              Durch automatisierte Kontrollschleifen und klare Pflichtfelder bei
              der Baustellendokumentation.
            </p>
          </div>
          <div className="isolate box-border bg-[#f5f2f0] px-7.5 pt-10 pb-11 text-center">
            <div className="text-(length:--fs-display) font-bold leading-none tracking-[-0.01em] text-[#4c2f69]">
              + 12 h
            </div>
            <div className="mt-5.5 mb-7.5 text-[16px] font-bold leading-normal text-[#4c2f69]">
              Zeitersparnis pro Woche
            </div>
            <p className="text-(length:--fs-small) font-medium leading-[1.7] text-(--ink)">
              Pro Bauleiter/Meister durch den Wegfall manueller Überträge von
              Papier-Aufmaßen ins System.
            </p>
          </div>
          <div className="isolate box-border bg-[#f5f2f0] px-7.5 pt-10 pb-11 text-center">
            <div className="text-(length:--fs-display) font-bold leading-none tracking-[-0.01em] text-[#4c2f69]">
              100 %
            </div>
            <div className="mt-5.5 mb-7.5 text-[16px] font-bold leading-normal text-[#4c2f69]">
              Datensynchronität
            </div>
            <p className="text-(length:--fs-small) font-medium leading-[1.7] text-(--ink)">
              Nahtlose Anbindung bestehender Insellösungen an ein zentrales
              Cockpit in Echtzeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}