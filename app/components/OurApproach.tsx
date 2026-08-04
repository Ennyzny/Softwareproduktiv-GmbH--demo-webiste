export default function OurApproach() {
  return (
    <section
      id="unser-ansatz"
      className="border-y border-(--divider) bg-white py-[120px] max-md:py-[70px]"
    >
      <div className="mx-auto max-w-[1240px] px-10 max-md:px-6">
        <div className="mb-14 max-w-[820px]">
          <span className="mb-5 inline-block font-(--font-mono) text-[13px] font-bold uppercase tracking-[0.14em] text-(--accent)">
            // Unser Ansatz
          </span>
          <h2 className="mb-[26px] text-(length:--fs-display) font-medium leading-[1.1] tracking-[-0.01em] text-(--primary)">
            <b>So arbeiten wir</b>
          </h2>
          <p className="max-w-[64ch] text-(length:--fs-h3) font-medium leading-[1.5] text-(--primary)">
            Unsere Beratung ist wie ein präziser Bauplan: Bevor die ersten
            Steine deiner neuen digitalen Infrastruktur gesetzt werden,
            stellen wir sicher, dass das Fundament stabil ist und alle Räume
            perfekt ineinandergreifen.
          </p>
        </div>
        <div className="max-w-[820px]">
          <div className="flex items-start py-6 max-md:flex-col max-md:gap-4">
            <div className="flex h-12 w-[58px] shrink-0 items-center justify-center rounded-l-[24px] bg-(--primary) text-[19px] font-bold text-white">
              01
            </div>
            <span className="ml-[10px] mr-[16px] mt-[23px] h-[2px] w-[26px] shrink-0 bg-(--primary) max-md:hidden"></span>
            <p className="text-(length:--fs-h3) font-bold leading-[1.3] text-(--primary)">
              Wir analysieren bestehende Prozesse.
            </p>
          </div>
          <div className="flex items-start py-6 max-md:flex-col max-md:gap-4">
            <div className="flex h-12 w-[58px] shrink-0 items-center justify-center rounded-l-[24px] bg-(--primary) text-[19px] font-bold text-white">
              02
            </div>
            <span className="ml-[10px] mr-[16px] mt-[23px] h-[2px] w-[26px] shrink-0 bg-(--primary) max-md:hidden"></span>
            <p className="text-(length:--fs-h3) font-bold leading-[1.3] text-(--primary)">
              Wir machen Engpässe sichtbar.
            </p>
          </div>
          <div className="flex items-start py-6 max-md:flex-col max-md:gap-4">
            <div className="flex h-12 w-[58px] shrink-0 items-center justify-center rounded-l-[24px] bg-(--primary) text-[19px] font-bold text-white">
              03
            </div>
            <span className="ml-[10px] mr-[16px] mt-[23px] h-[2px] w-[26px] shrink-0 bg-(--primary) max-md:hidden"></span>
            <p className="text-(length:--fs-h3) font-bold leading-[1.3] text-(--primary)">
              Wir beziehen die Menschen ein, die täglich damit arbeiten.
            </p>
          </div>
          <div className="flex items-start py-6 max-md:flex-col max-md:gap-4">
            <div className="flex h-12 w-[58px] shrink-0 items-center justify-center rounded-l-[24px] bg-(--primary) text-[19px] font-bold text-white">
              04
            </div>
            <span className="ml-[10px] mr-[16px] mt-[23px] h-[2px] w-[26px] shrink-0 bg-(--primary) max-md:hidden"></span>
            <p className="text-(length:--fs-h3) font-bold leading-[1.3] text-(--primary)">
              Wir entwickeln Lösungen, die im Arbeitsalltag funktionieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}