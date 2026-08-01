export default function Footer() {
  return (
    <footer className="bg-[#2E1A47] pt-18.5 pb-8.5 text-white leading-normal">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <h2 className="mb-4 text-[20px] font-bold tracking-[0.02em]">
              <span className="text-white/55">SOFTWARE</span>
              <span className="text-white">PRODUKTIV</span>
            </h2>

            <p className="max-w-[40ch] text-[13px] leading-[1.7] text-white/55">
              Wir sind der spezialisierte Software-Partner für
              Handwerksbetriebe. Wir programmieren digitale Systeme, die die
              administrative Belastung minimieren, Fehler eliminieren und den
              Profit sichern.
            </p>
          </div>

          <div>
            <h3 className="mb-4.5 text-[12px] font-bold uppercase tracking-[0.16em]">
              Schnelleinstieg
            </h3>

            <nav className="space-y-2.25 text-[13px] text-white/60">
              <a
                href="#kernbotschaft"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Kernbotschaft
              </a>

              <a
                href="#herausforderungen"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Herausforderungen
              </a>

              <a
                href="#ansatz"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Unser Ansatz
              </a>

              <a
                href="#philosophie"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Philosophie
              </a>

              <a
                href="#eigenentwicklungen"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Eigenentwicklungen
              </a>

              <a
                href="#leistungen"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Leistungen
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-7.5 invisible text-[12px] font-bold uppercase">
              Placeholder
            </h3>

            <nav className="space-y-2.25 text-[13px] text-white/60">
              <a
                href="#foerdermittel"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Fördermittel
              </a>

              <a
                href="#effekte"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Effekte
              </a>

              <a
                href="#grundsatz"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Unser Grundsatz
              </a>

              <a
                href="#naechster-schritt"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Der nächste Schritt
              </a>

              <a
                href="#kontakt"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Kontakt
              </a>

              <a
                href="#karriere"
                className="block transition-colors duration-200 hover:text-violet-400"
              >
                // Karriere
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4.5 text-[12px] font-bold uppercase tracking-[0.16em]">
              Direktkontakt
            </h3>

            <div className="text-[13px] leading-[1.85] text-white/70">
              <p className="font-bold text-white">softwareproduktiv GmbH</p>

              <p>Konrad-Zuse-Straße 4</p>
              <p>46397 Bocholt</p>

              <br />

              <p>Tel. 02871 234 35-0</p>

              <a
                href="mailto:support@softwareproduktiv.de"
                className="transition-colors hover:text-white"
              >
                support@softwareproduktiv.de
              </a>
            </div>
          </div>
        </div>

        <div className="mt-13 pt-6.5 flex flex-wrap items-center justify-between gap-4 border-t border-white/14 text-[12px] text-white/50 box-border">
          <p>© 2026 Softwareproduktiv GmbH // Alle Rechte vorbehalten.</p>

          <div className="flex flex-wrap items-center">
            <a href="#" className="transition-colors hover:text-white">
              Impressum
            </a>

            <span className="mx-3">//</span>

            <a href="#" className="transition-colors hover:text-white">
              Datenschutz
            </a>

            <span className="mx-3">//</span>

            <a href="#" className="transition-colors hover:text-white">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
