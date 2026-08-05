export default function Footer() {
  return (
    <footer className="bg-(--primary) pt-18.5 pb-8.5 text-white/70 block isolate box-border">
      <div className="mx-auto max-w-310 px-10">
        <div className="grid grid-cols-1 gap-10 min-[560px]:grid-cols-2 min-[900px]:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 text-[20px] font-bold tracking-[0.02em]">
              <span className="text-white/55">SOFTWARE</span>
              <span className="text-white">PRODUKTIV</span>
            </div>
            <p className="max-w-[40ch] text-[13px] leading-[1.7] text-white/55">
              Wir sind der spezialisierte Software-Partner für
              Handwerksbetriebe. Wir programmieren digitale Systeme, die die
              administrative Belastung minimieren, Fehler eliminieren und den
              Profit sichern.
            </p>
          </div>
          <div>
            <h4 className="mb-4.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Schnelleinstieg
            </h4>
            <nav className="text-[13px]">
              {[
                ["#top", "// Kernbotschaft"],
                ["#herausforderungen", "// Herausforderungen"],
                ["#leistungen", "// Unser Ansatz"],
                ["#leistungen", "// Philosophie"],
                ["#leistungen", "// Eigenentwicklungen"],
                ["#leistungen", "// Leistungen"],
              ].map(([href, text]) => (
                <a
                  key={text}
                  href={href}
                  className="mb-2.25 block text-white/60 transition-colors duration-200 hover:text-(--violet)"
                >
                  {text}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="invisible mb-4.5 text-[12px] font-bold uppercase tracking-[0.16em]">
              Placeholder
            </h4>
            <nav className="mt-7.5 text-[13px]">
              {[
                ["#leistungen", "// Fördermittel"],
                ["#leistungen", "// Effekte"],
                ["#hero", "// Unser Grundsatz"],
                ["#", "// Der nächste Schritt"],
                ["#", "// Kontakt"],
                ["#", "// Karriere"],
              ].map(([href, text]) => (
                <a
                  key={text}
                  href={href}
                  className="mb-2.25 block text-white/60 transition-colors duration-200 hover:text-(--violet)"
                >
                  {text}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="mb-4.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
              Direktkontakt
            </h4>

            <p className="text-[13px] leading-[1.85] text-white/70">
              <span className="font-bold text-white">
                softwareproduktiv GmbH
              </span>
              <br />
              Konrad-Zuse-Straße 4
              <br />
              46397 Bocholt
              <br />
              <br />
              Tel. 02871 234 35-0
              <br />
              <a
                href="mailto:support@softwareproduktiv.de"
                className="transition-colors hover:text-white"
              >
                support@softwareproduktiv.de
              </a>
            </p>
          </div>
        </div>
        <div className="mt-13 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6.5 text-[12px] text-white/50">
          <div>
            © 2026 Softwareproduktiv GmbH &nbsp;//&nbsp; Alle Rechte
            vorbehalten.
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-[12px] leading-normal">
            <a className="transition-colors hover:text-white" href="#">
              Impressum
            </a>
            <span>//</span>
            <a className="transition-colors hover:text-white" href="#">
              Datenschutz
            </a>
            <span>//</span>
            <a className="transition-colors hover:text-white" href="#">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
