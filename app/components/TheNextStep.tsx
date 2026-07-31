export default function TheNextStep() {
  return (
    <>
      <section className="block isolate p-30 border-t border-solid border-[#e5e7eb] bg-white">
        <div className="block isolate items-center max-w-310 transform-none pr-10 pl-10 mr-auto ml-auto text-center">
          <span className="text-[13px] font-bold tracking-[0.14em] uppercase inline-block mb-5 text-[#221c35]">
            // Der nächste Schritt
          </span>
          <h2 className="block font-medium mb-5.5 text-[#a7adb8]">
            Lass uns
            <b className="text-[#2e1a47]"> Dein System </b>
            anschauen.
          </h2>
          <p className="block ml-4 mr-4 font-medium text-[17px] leading-[1.65] max-w-[51ch] text-[#75787b] ">
            In einem unverbindlichen, 15-minütigen Gespräch analysieren wir
            deine aktuellen Datensilos und skizzieren eine konkrete Lösung.
          </p>
          <button className="auto inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase cursor-pointer text-white transition-[background] duration-[0.25s, transform] delay-150 px-6.5 py-3.75 border-0 bg-[#2e1a47]">
            Erstgespräch vereinbaren
          </button>
          <div className="flex justify-center flex-wrap mt-6.5 text-[14px] font-semibold leading-normal">
            <span className="pr-4 pl-4 relative text-[#75787b] ">
              Kostenlos
            </span>
            <span className="pr-4 pl-4 relative text-[#75787b]">
              Ohne Verpflichtung
            </span>
            <span className="pr-4 pl-4 relative text-[#75787b]">
              {" "}
              100% praxisbezogen
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
