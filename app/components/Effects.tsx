export default function Effects() {
  return (
    <>
      <section
        id="effects"
        className="block isolate text-white bg-[#4c2f69] box-border"
      >
        <div className="block isolate box-border max-w-310 mr-auto ml-auto pt-24 pr-10 pb-24 pl-10 text-center">
          <span className="text-(--violet) text-[13px] font-bold tracking-[0.14em] uppercase inline-block mb-5 box-border text-center  leading-normal ">
            // Effekte
          </span>
          <h2 className="block isolate text-(length:--fs-display) transform-none mb-4.5 leading-[1.1] font-normal tracking-[-.01em]">
            <b>Weniger</b> Fehler. <b>Mehr</b> Überblick.
          </h2>
          <p className="block text-center text-(length:--fs-small) text-white/75 max-w-[78ch] mr-auto ml-auto mb-0 mt-0 leading-[1.65] font-medium box-border">
            Klare Abläufe. Bessere Entscheidungen.
          </p>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-6.5 mt-12 box-border opacity-100 text-center">
            <div className="block isolate border pt-10 pr-7.5 pb-11 pl-7.5 text-center bg-[#f5f2f0]">
              <div className="block text-center text-[#4c2f69] font-bold text-(length:--fs-display) tracking-[-.01em] leading-none">
                – 40 %
              </div>
              <div className="text-[16px] font-bold text-[#4c2f69] mt-5.5 mb-7.5 text-center leading-normal">
                Fehlerrate im Betriebsalltag
              </div>
              <p className="text-(length:--fs-small) text-(--ink) font-medium leading-[1.7] max-w-[78ch] mr-auto ml-auto mb-6.5 ">
                Durch automatisierte Kontrollschleifen und klare Pflichtfelder
                bei der Baustellendokumentation.
              </p>
            </div>
            <div className="block isolate border pt-10 pr-7.5 pb-11 pl-7.5 text-center bg-[#f5f2f0]">
              <div className="block text-center text-[#4c2f69] font-bold text-(length:--fs-display) tracking-[-.01em] leading-none">
                + 12 h
              </div>
              <div className="text-[16px] font-bold text-[#4c2f69] mt-5.5 mb-7.5 text-center leading-normal">
                Zeitersparnis pro Woche
              </div>
              <p className="text-(length:--fs-small) text-(--ink) font-medium leading-[1.7] max-w-[78ch] mr-auto ml-auto mb-6.5 ">
                Pro Bauleiter/Meister durch den Wegfall manueller Überträge von
                Papier-Aufmaßen ins System.
              </p>
            </div>
            <div className="block isolate border pt-10 pr-7.5 pb-11 pl-7.5 text-center bg-[#f5f2f0]">
              <div className="block text-center text-[#4c2f69] font-bold text-(length:--fs-display) tracking-[-.01em] leading-none">
                100 %
              </div>
              <div className="text-[16px] font-bold text-[#4c2f69] mt-5.5 mb-7.5 text-center leading-normal">
                Datensynchronität
              </div>
              <p className="text-(length:--fs-small) text-(--ink) font-medium leading-[1.7] max-w-[78ch] mr-auto ml-auto mb-6.5 ">
                Nahtlose Anbindung bestehender Insellösungen an ein zentrales
                Cockpit in Echtzeit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
