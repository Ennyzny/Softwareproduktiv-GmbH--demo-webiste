export default function Challenges() {
  return (
    <section
      id="herausforderungen"
      className="bg-(--background) py-30 max-md:py-18"
    >
      <div className="mx-auto max-w-310 px-10 max-sm:px-5">
        <div className="mb-14 max-w-190">
          <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-(--accent)">
            // Herausforderungen
          </span>
          <h2 className="text-(length:--fs-h2) font-bold leading-[1.1] tracking-[-0.01em] text-(--primary)">
            Kommt dir das bekannt vor?
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6.5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Im Lager fehlt der Überblick.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Bestände sind nicht eindeutig nachvollziehbar. Material wird
              gesucht, doppelt bestellt oder zu spät gefunden.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Excel-Chaos
            </span>
          </div>
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Die Standardsoftware reicht nicht mehr aus.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Wichtige Abläufe lassen sich nur über Umwege abbilden. Prozesse
              werden komplexer, statt einfacher.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Zu komplexe Arbeitsabläufe
            </span>
          </div>
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Deine Systeme arbeiten nebeneinander statt miteinander.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Informationen müssen mehrfach erfasst werden. Medienbrüche kosten
              Zeit und erhöhen die Fehlerquote.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Zeitfresser
            </span>
          </div>
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Draussen wird anders gearbeitet als im Büro.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Im Lager, auf der Baustelle oder im Außendienst fehlen die
              Informationen dort, wo sie benötigt werden.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Kein optimaler Workflow
            </span>
          </div>
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Die Datenpflege kostet zu viel Zeit.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Stammdaten, Artikelinformationen und Auswertungen werden manuell
              gepflegt. Der Aufwand steigt, die Qualität leidet.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Mehr Aufwand, weniger Qualität
            </span>
          </div>
          <div className="group relative flex min-h-77 flex-col bg-white px-8.5 pt-10 pb-8.5 before:absolute before:left-0 before:top-0 before:h-0.75 before:w-15 before:bg-(--violet) before:transition-all before:duration-400 hover:before:w-full">
            <h3 className="mb-5.5 text-(length:--fs-h3) font-bold uppercase leading-[1.3] tracking-[0.005em] text-(--ink)">
              Du möchtest digitalisieren – aber den richtigen Weg finden.
            </h3>
            <p className="mb-6.5 text-(length:--fs-small) font-medium leading-[1.6] text-(--muted)">
              Es gibt viele Möglichkeiten, aber keine klare
              Entscheidungsgrundlage. Die Frage ist nicht, welche Software
              verfügbar ist, sondern welche Lösung wirklich passt.
            </p>
            <span className="mt-auto inline-flex items-center gap-2.75 text-[14px] font-bold text-(--accent)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)">
                <span className="h-0.5 w-2.25 rounded bg-white"></span>
              </span>
              Keine Expertise greifbar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
