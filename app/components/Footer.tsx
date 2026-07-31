export default function Footer() {
  return (
    <>
      <footer className="bg-[#2e1a47] text-white">
        <div className="mx-auto max-w-7xl px-16 py-9">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="text-gray-400">SOFTWARE</span>
                {""}
                <span>PRODUKTIV</span>
              </h2>
              <p className="mt-10 max-w-sm leading-5 text-gray-400 text-xs">
                Wir sind der spezialisierte Software-Partner für
                Handwerksbetriebe. Wir programmieren digitale Systeme, die die
                administrative Belastung minimieren, Fehler eliminieren und den
                Profit sichern.
              </p>
            </div>
            <div>
              <h3 className="mb-8 font-bold tracking-[0.2em] uppercase text-xs">
                Schnelleinstieg
              </h3>
              <div className="space-y-4 text-xs text-gray-400">
                <a
                  href="#kernbotschaft"
                  className="block transition hover:text-purple-500"
                >
                  // Kernbotschaft
                </a>
                <a
                  href="#herausforderungen"
                  className="block transition hover:text-purple-500"
                >
                  // Herausforderungen
                </a>
                <a
                  href="#ansatz"
                  className="block transition hover:text-purple-500"
                >
                  // Unser Ansatz
                </a>
                <a
                  href="#philosophie"
                  className="block transition hover:text-purple-500"
                >
                  // Philosophie
                </a>
                <a
                  href="#eigenentwicklungen"
                  className="block transition hover:text-purple-500"
                >
                  // Eigenentwicklungen
                </a>
                <a
                  href="#leistungen"
                  className="block transition hover:text-purple-500"
                >
                  // Leistungen
                </a>
              </div>
            </div>
            <div className="pt-12 lg:pt-16">
              <div className="space-y-4 text-gray-400 text-xs">
                <a
                  href="#foerdermittel"
                  className="block transition hover:text-purple-500"
                >
                  // Fördermittel
                </a>
                <a
                  href="#effekte"
                  className="block transition hover:text-purple-500"
                >
                  // Effekte
                </a>
                <a
                  href="#grundsatz"
                  className="block transition hover:text-purple-500"
                >
                  // Unser Grundsatz
                </a>
                <a
                  href="#naechster-schritt"
                  className="block transition hover:text-purple-500"
                >
                  // Der nächste Schritt
                </a>
                <a
                  href="#kontakt"
                  className="block transition hover:text-purple-500"
                >
                  // Kontakt
                </a>
                <a
                  href="#karriere"
                  className="block transition hover:text-purple-500"
                >
                  // Karriere
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em]">
                Direktkontakt
              </h3>
              <div className="space-y-5 text-gray-300 text-xs">
                <div>
                  <p className="font-semibold text-white">
                    softwareproduktiv GmbH
                  </p>
                  <p className="leading-5">Konrad-Zuse-Straße 4</p>
                  <p className="leading-5">46397 Bocholt</p>
                </div>
                <div className="leading-5 text-xs">
                  <p>Tel. 02871 234 35-0</p>
                  <a
                    href="mailto:support@softwareproduktiv.de"
                    className="hover:text-white"
                  >
                    support@softwareproduktiv.de
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 h-px bg-white/10" />
          <div className="flex gap-6 text-gray-400 lg:flex-row lg:items-center lg:justify-between text-xs">
            <p>© 2026 Softwareproduktiv GmbH // Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap gap-6 text-xs">
              <a href="#" className="hover:text-white">
                Impressum
              </a>
              <a href="#" className="hover:text-white">
                Datenschutz
              </a>
              <a href="#" className="hover:text-white">
                AGB
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
