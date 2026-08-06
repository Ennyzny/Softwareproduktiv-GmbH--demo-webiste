export default function SystemCheck() {
  return (
    <>
      <div className="text-(--ink) leading-normal box-border fixed z-100 items-center justify-center flex m-0 p-5 inset-0">
        <div className="text-(--ink) leading-normal box-border absolute backdrop-blur-[7px] animate-[fade_0.25s_ease] m-0 p-0 inset-0"></div>
        <div className="text-(--ink) leading-normal box-border relative z-2 w-full max-w-155 overflow-hidden shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)] animate-[pop_0.3s_cubic-bezier(.2,0.9,0.3,1.15)] max-h-[92vh] flex flex-col m-0 p-0 rounded-md">
          <div className="text-(--ink) leading-normal box-border border-b-(--divider) relative flex-[0_0_auto] m-0 px-7.5 py-6.5 border-b border-solid bg-white">
            <button className="box-border absolute text-(--muted) cursor-pointer leading-0 m-0 p-1.5 border-0 right-5 top-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="leading-normal box-border text-xs tracking-[0.16em] text-(--ink) uppercase flex items-center gap-2.25 mb-2.5 m-0 p-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-3.75 h-3.75 text-(--accent)"
              >
                <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
                <rect x={4} y={4} width={16} height={16} rx={2} />
                <rect x={9} y={9} width={6} height={6} rx={2} />
              </svg>
              <span>System–Check Handwerk</span>
            </div>
            <h3 className="box-border leading-[1.1] tracking-[-0.01em] text-2xl font-bold text-(--primary) m-0 p-0">
              Dein Erstgespräch vorbereiten
            </h3>
          </div>

          <div className=" text-(--ink) leading-normal box-border overflow-y-auto m-0 p-7.5 bg-(--background)">
            {/* prvi dio */}
            <div className="text-(--ink) leading-normal box-border block m-0 p-0">
              <label className="leading-normal box-border text-[13px] font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-3.5 m-0 p-0">
                1. Welches Gewerk / welche Branche vertrittst du?
              </label>
              <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr_1fr] gap-3 mb-7.5 m-0 p-0">
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Schreinerei / Tischlerei
                </button>
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Sanitär / Heizung / Klima
                </button>
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Elektrotechnik
                </button>
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Metallbau / Schlosserei
                </button>
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Baugewerbe / Zimmerei
                </button>
                <button className="box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Anderes Gewerk
                </button>
              </div>
              <label className="leading-normal box-border text-[13px] font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-3.5 m-0 p-0">
                2. Was ist deine größte Hürde im Alltag?{" "}
              </label>
              <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr] gap-3 mb-7.5 m-0 p-0">
                <button className="box-border bg-white border border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Zettelwirtschaft / Excel-Chaos / Medienbrüche{" "}
                </button>
                <button className="box-border bg-white border border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Bestehende Software redet nicht miteinander{" "}
                </button>
                <button className="box-border bg-white border border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Lagerbestand & Barcodes unübersichtlich{" "}
                </button>
                <button className="box-border bg-white border border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color] duration-[0.15s,background] delay-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid">
                  Abläufe kosten zu viel Zeit (Prozess-Struktur fehlt){" "}
                </button>
              </div>
              <div className="text-(--ink) leading-normal box-border flex items-center gap-4 justify-end m-0 p-0">
                <button className="box-border inline-flex bg-(--primary) items-center gap-2.5 font-bold text-[13px] tracking-[0.08em] uppercase cursor-pointer text-white transition-[background] duration-[0.25s,transform] delay-150 m-0 px-6.5 py-3.75 border-0">
                  Weiter
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* drugi dio */}
            {/* <div className="text-(--ink) leading-normal box-border hidden m-0 p-0">
              <form className="text-(--ink) leading-normal box-border m-0 p-0">
                <input type="hidden" className="box-border m-0 p-0"></input>
                <input type="hidden" className="box-border m-0 p-0"></input>

                <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr_1fr] gap-4.5 mb-4.5 m-0 p-0">
                  <div className="text-(--ink) leading-normal box-border mb-4.5 m-0 p-0">
                    <label className="leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0">
                      Ansprechpartner Name *
                    </label>
                    <input
                      className="box-border w-full text-[15px] border border-(--divider) text-(--ink) transition-[border-color] duration-[0.2s,box-shadow] delay-200 m-0 px-3.5 py-3 rounded-[5px] border-solid"
                      name="name"
                      required
                      placeholder="z.B. Martin huber"
                    ></input>
                  </div>
                  <div className="text-(--ink) leading-normal box-border mb-4.5 m-0 p-0">
                    <label className="leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0">
                      Mitarbeiteranzahl
                    </label>
                    <select>
                      <option>1 - 5 Mitarbeiter </option>
                      <option>6 - 15 Mitarbeiter</option>
                      <option>16 - 50 Mitarbeiter</option>
                      <option>über 50 Mitarbeiter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div>
                    <label>Telefonnummer (für Rückfragen) *</label>
                    <input></input>
                  </div>
                  <div>
                    <label>E-Mail-Adresse *</label>
                    <input></input>
                  </div>
                </div>

                <div>
                  <label>
                    Bestehende Systeme (z.B. Lexware, Kuller, Excel, etc.) –
                    optional
                  </label>
                  <textarea></textarea>
                </div>

                <div>
                  <svg></svg>
                  <span>
                    Keine Werbeanrufe. Wir rufen dich ausschließlich an, um
                    deine Systemanforderungen kurz abzugleichen und dir konkrete
                    Lösungsideen aufzuzeigen.
                  </span>
                </div>

                <div>
                  <button>Zurück</button>
                  <button>
                    Anfrage absenden
                    <svg></svg>
                  </button>
                </div>
              </form>
            </div> */}

            {/* treci dio
            <div className="text-(--ink) leading-normal box-border hidden m-0 p-0">
              <div className="text-(--ink) leading-normal box-border text-center m-0 px-1.5 py-4.5">
                <div className="text-(--ink) leading-normal text-center box-border w-18.5 h-18.5 flex items-center justify-center mt-0 mb-5 mx-auto p-0 rounded-[50%]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="m8 12 3 3 5-6"></path>
                  </svg>
                </div>
                <h4>Vielen Dank, </h4>
                <p>
                  Deine Angaben wurden analysiert. Ein Systemingenieur prüft
                  deine Problemstellung bezüglich
                  <b> deiner Herausforderung </b>
                  im Bereich
                  <b> deinem Gewerk </b>
                </p>
                <div>
                  <div>Nächste Schritte:</div>
                </div>
                <ol>
                  <li>
                    Wir melden uns telefonisch innerhalb von 24 Stunden bei dir.
                  </li>
                  <li>
                    Kurze Besprechung deiner Schnittstellen und Insellösungen.
                  </li>
                  <li>Konzeptvorschlag für eine maßgeschneiderte Lösung.</li>
                </ol>
                <button>Fenster schließen</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
