
export default function Services() {
  return (
    <section
      id="leistungen"
      className="w-full border-b border-(--divider) bg-white text-(--ink)"
    >
      <div className="mx-auto max-w-310 px-6 py-20 min-[821px]:px-10 min-[821px]:py-30">
        <div className="mx-auto mb-14 max-w-190 text-center">
          <span className="mb-5 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-(--accent)">
            // Leistungen
          </span>
          <h2 className="text-(length:--fs-display) font-bold leading-[1.1] tracking-[-0.01em] text-(--primary)">
            Unsere Lösungen{" "}
            <span className="font-medium text-(--soft)">
              für Ihren Betrieb.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-(length:--fs-body) font-medium leading-[1.65] text-(--muted)">
            Von der Analyse bis zur Umsetzung: Ob ERP-Anpassung,
            Lagerdigitalisierung, mobile Anwendungen oder Schnittstellen – wir
            begleiten Unternehmen vom ersten Konzept bis zur produktiven
            Lösung.
          </p>
        </div>
        <div className="grid grid-cols-1 min-[821px]:grid-cols-2">
          <div
            className="
              relative flex flex-col px-6 py-12 text-center
              min-[821px]:px-16 min-[821px]:py-14
              after:absolute after:right-0 after:top-11 after:bottom-11 after:w-px after:bg-(--divider)
              max-[820px]:after:hidden
            "
          >
            <div className="mx-auto mb-[30px] flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] border-(--violet) bg-(--accent) shadow-[0_0_0_4px_rgba(168,85,247,.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[30px] w-[30px] text-white"
              >
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="8" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
                <rect x="13" y="13" width="8" height="8" rx="1" />
              </svg>
            </div>
            <h3
              className="
                mb-3.5 text-[17px] font-bold uppercase leading-[1.1]
                tracking-[0.06em] text-(--accent)
                after:mx-auto after:mt-3.5 after:block after:h-0.5
                after:w-11 after:bg-(--violet) after:content-['']
              "
            >
              ERP & Individualentwicklung
            </h3>
            <div className="mb-4.5 text-[16px] font-bold leading-[1.5] text-(--ink)">
              Wenn Standardsoftware nicht reicht, bauen wir den fehlenden Teil.
            </div>
            <div className="mx-auto mb-6.5 max-w-[52ch] text-(length:--fs-small) font-medium leading-[1.7] text-(--ink) opacity-[0.85]">
              Softwareproduktiv unterstützt Unternehmen ganzheitlich bei der
              Auswahl und Anpassung leistungsstarker ERP-Systeme. Auf Basis
              fundierter Ist-Soll-Analysen entwickeln wir passgenaue
              Individualsoftware, die gezielt dort ansetzt, wo
              Standardlösungen an ihre Grenzen stoßen – von spezifischen
              Schnittstellen über Webanwendungen bis zu praxiserprobten
              Eigenentwicklungen wie stocklogistic oder BrickIt.
            </div>
            <div className="mt-auto text-[14px] font-bold leading-[1.5] tracking-[0.02em] text-(--accent)">
              Schnittstellen, Erweiterungen oder komplette Lösungen.
            </div>
          </div>
          <div
            className="
              relative flex flex-col px-6 py-12 text-center
              min-[821px]:px-16 min-[821px]:py-14
            "
          >
            <div className="mx-auto mb-[30px] flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] border-(--violet) bg-(--accent) shadow-[0_0_0_4px_rgba(168,85,247,.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[30px] w-[30px] text-white"
              >
                <path d="M4 7h16M4 12h16M4 17h16M8 3v18" />
              </svg>
            </div>
            <h3
              className="
                mb-3.5 text-[17px] font-bold uppercase leading-[1.1]
                tracking-[0.06em] text-(--accent)
                after:mx-auto after:mt-3.5 after:block after:h-0.5
                after:w-11 after:bg-(--violet) after:content-['']
              "
            >
              Lagerverwaltung / Schnittstellen
            </h3>
            <div className="mb-4.5 text-[16px] font-bold leading-[1.5] text-(--ink)">
              Deine Systeme sprechen nicht miteinander? Wir sorgen dafür, dass
              sie es tun.
            </div>
            <div className="mx-auto mb-6.5 max-w-[52ch] text-(length:--fs-small) font-medium leading-[1.7] text-(--ink) opacity-[0.85]">
              Mit stocklogistic bietet softwareproduktiv ein leistungsfähiges
              Lagerverwaltungssystem, das durch transparenten Materialfluss
              und papierlose, barcodegestützte Kommissionierung für höchste
              Effizienz sorgt. Unsere Lösung lässt sich dank flexibler
              Schnittstellen nahtlos an gängige ERP- und Lagerliftsysteme
              anbinden und sichert medienbruchfreie, durchgängige Datenflüsse.
            </div>
            <div className="mt-auto text-[14px] font-bold leading-[1.5] tracking-[0.02em] text-(--accent)">
              Durchgängige Daten. Klare Prozesse.
            </div>
          </div>
          <div
            className="
              relative flex flex-col px-6 py-12 text-center
              before:absolute before:top-0 before:left-[34px] before:right-[34px]
              before:h-px before:bg-(--divider)
              after:absolute after:right-0 after:top-11 after:bottom-11
              after:w-px after:bg-(--divider)
              max-[820px]:after:hidden
              min-[821px]:px-16 min-[821px]:py-14
            "
          >
            <div className="mx-auto mb-[30px] flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] border-(--violet) bg-(--accent) shadow-[0_0_0_4px_rgba(168,85,247,.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[30px] w-[30px] text-white"
              >
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-6" />
              </svg>
            </div>
            <h3
              className="
                mb-3.5 text-[17px] font-bold uppercase leading-[1.1]
                tracking-[0.06em] text-(--accent)
                after:mx-auto after:mt-3.5 after:block after:h-0.5
                after:w-11 after:bg-(--violet) after:content-['']
              "
            >
              Prozessoptimierung & Beratung
            </h3>
            <div className="mb-4.5 text-[16px] font-bold leading-[1.5] text-(--ink)">
              Bevor neue Software kommt, bringen wir Struktur rein.
            </div>
            <div className="mx-auto mb-6.5 max-w-[52ch] text-(length:--fs-small) font-medium leading-[1.7] text-(--ink) opacity-[0.85]">
              Softwareproduktiv bietet eine integrierte Prozessoptimierung und
              Digitalisierungsberatung, die strukturierte Analysen mit einer
              herstellerneutralen Technologie-Roadmap vereint. In gemeinsamen
              Workshops erarbeiten wir präzise Ist-Soll-Konzepte und binden
              deine Mitarbeiter aus allen Fachbereichen aktiv ein – inklusive
              Begleitung bei GoBD-konformen Verfahrensdokumentationen und der
              Identifizierung passender Fördermittel.
            </div>
            <div className="mt-auto text-[14px] font-bold leading-[1.5] tracking-[0.02em] text-(--accent)">
              Ist-Soll-Konzepte, praxisnahe Lösungen, Fördermittel
            </div>
          </div>
          <div
            className="
              relative flex flex-col px-6 py-12 text-center
              before:absolute before:top-0 before:left-[34px] before:right-[34px]
              before:h-px before:bg-(--divider)
              min-[821px]:px-16 min-[821px]:py-14
            "
          >
            <div className="mx-auto mb-[30px] flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] border-(--violet) bg-(--accent) shadow-[0_0_0_4px_rgba(168,85,247,.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[30px] w-[30px] text-white"
              >
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
            </div>
            <h3
              className="
                mb-3.5 text-[17px] font-bold uppercase leading-[1.1]
                tracking-[0.06em] text-(--accent)
                after:mx-auto after:mt-3.5 after:block after:h-0.5
                after:w-11 after:bg-(--violet) after:content-['']
              "
            >
              App-Entwicklung
            </h3>
            <div className="mb-4.5 text-[16px] font-bold leading-[1.5] text-(--ink)">
              Deine Prozesse gehören dahin, wo gearbeitet wird. Wir bringen sie
              aufs Handy, ins Lager oder den Außendienst.
            </div>
            <div className="mx-auto mb-6.5 max-w-[52ch] text-(length:--fs-small) font-medium leading-[1.7] text-(--ink) opacity-[0.85]">
              Softwareproduktiv entwickelt maßgeschneiderte mobile
              Anwendungen, die deine Geschäftsprozesse exakt dort
              unterstützen, wo stationäre Standardsoftware an ihre Grenzen
              stößt. Wir schließen funktionale Lücken und realisieren
              medienbruchfreie Workflows, die im mobilen Arbeitsalltag für
              maximale Effizienz sorgen – stabil angebunden an gängige
              ERP-Systeme.
            </div>
            <div className="mt-auto text-[14px] font-bold leading-[1.5] tracking-[0.02em] text-(--accent)">
              Barcode statt Papier. Echtzeit statt Vermuten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

