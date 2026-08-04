export default function Challenges() {
  return (
    <>
      <section
        id="challenges"
        className="block isolate py-30 max-[768px]:py-17.5 bg-(--background) box-border"
      >
        <div className="max-w-310 mr-auto ml-auto pr-10 pl-10 max-[640px]:px-5 box-border leading-normal overflow-x-hidden">
          <div className="block isolate box-border mb-14 max-w-190 opacity-100 transform-none leading-1.5 overflow-x-hidden">
            <span className="text-[13px] font-bold tracking-[.14em] text-(--accent) uppercase inline-block mb-5 leading-normal overflow-x-hidden">
              // Herausforderungen
            </span>
            <h2 className="text-(length:--fs-h2) text-(--primary) font-bold leading-[1.1] tracking-[-.01em] box-border block isolate">
              Kommt dir das bekannt vor?
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(3,1fr)] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 :gap-6.5 opacity-100 transform-none box-border">
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Im Lager fehlt der Überblick.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Bestände sind nicht eindeutig nachvollziehbar. Material wird
                gesucht, doppelt bestellt oder zu spät gefunden.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Excel-Chaos</span>
              </span>
            </div>
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Die Standardsoftware reicht nicht mehr aus.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Wichtige Abläufe lassen sich nur über Umwege abbilden. Prozesse
                werden komplexer, statt einfacher.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Zu komplexe Arbeitsabläufe</span>
              </span>
            </div>
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Deine Systeme arbeiten nebeneinander statt miteinander.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Informationen müssen mehrfach erfasst werden. Medienbrüche
                kosten Zeit und erhöhen die Fehlerquote.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Zeitfresser</span>
              </span>
            </div>
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Draussen wird anders gearbeitet als im Büro.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Im Lager, auf der Baustelle oder im Außendienst fehlen die
                Informationen dort, wo sie benötigt werden.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Kein optimaler Workflow</span>
              </span>
            </div>
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Die Datenpflege kostet zu viel Zeit.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Stammdaten, Artikelinformationen und Auswertungen werden manuell
                gepflegt. Der Aufwand steigt, die Qualität leidet.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Mehr Aufwand, weniger Qualität</span>
              </span>
            </div>
            <div className="flex relative flex-col bg-white min-h-77 pt-10 pr-8.5 pb-8.5 pl-8.5 leading-normal overflow-x-hidden">
              <h3 className="block isolate font-bold text-(length:--fs-h3) uppercase tracking-[.005em] leading-[1.3] mb-5.5 box-border">
                Du möchtest digitalisieren – aber den richtigen Weg finden.
              </h3>
              <p className="block isolate text-(length:--fs-small) text-(--muted) font-medium leading-[1.6] mb-6.5 box-border">
                Es gibt viele Möglichkeiten, aber keine klare
                Entscheidungsgrundlage. Die Frage ist nicht, welche Software
                verfügbar ist, sondern welche Lösung wirklich passt.
              </p>
              <span className="mt-auto inine-flex items-center gap-2.75 text-[14px] font-bold text-(--accent) box-border">
                <span>Keine Expertise greifbar</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
