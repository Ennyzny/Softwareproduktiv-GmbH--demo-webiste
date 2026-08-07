"use client";
import { useState } from "react";
import { useModal } from "@/app/context/ModalContext";

export default function SystemCheck() {
  const {
    isOpen,
    step,
    gewerk,
    huerde,
    closeModal,
    goStep,
    setGewerk,
    setHuerde,
  } = useModal();

  const [name, setName] = useState("");

  if (!isOpen) return null;

  const mono = "font-[family-name:var(--font-mono)]";

  const optBase =
    "box-border border bg-white border-(--divider) text-[15px] font-medium text-(--ink) cursor-pointer text-left transition-[border-color,background-color] duration-150 flex items-center justify-between gap-2.5 m-0 px-4.5 py-3.75 rounded-[5px] border-solid hover:border-(--accent)";
  const optSel = "border-(--primary) bg-[#efe9f2] font-semibold";

  const inputBase =
    "box-border w-full bg-white text-[15px] border border-(--divider) text-(--ink) transition-[border-color,box-shadow] duration-200 m-0 px-3.5 py-3 rounded-[5px] border-solid focus:outline-none focus:border-(--violet) focus:shadow-[0_0_0_3px_rgba(168,85,247,.15)]";

  const gewerkOptions = [
    "Schreinerei / Tischlerei",
    "Sanitär / Heizung / Klima",
    "Elektrotechnik",
    "Metallbau / Schlosserei",
    "Baugewerbe / Zimmerei",
    "Anderes Gewerk",
  ];

  const huerdeOptions = [
    "Zettelwirtschaft / Excel-Chaos / Medienbrüche",
    "Bestehende Software redet nicht miteinander",
    "Lagerbestand & Barcodes unübersichtlich",
    "Abläufe kosten zu viel Zeit (Prozess-Struktur fehlt)",
  ];

  const modalTitle =
    step === 3 ? "Analyse gestartet" : "Dein Erstgespräch vorbereiten";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue =
      (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    setName(nameValue);
    goStep(3);
  }

  function handleClose() {
    closeModal();
    setTimeout(() => setName(""), 200);
  }

  return (
    <div
      className="text-(--ink) leading-normal box-border fixed z-100 items-center justify-center flex m-0 p-5 inset-0"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={handleClose}
        className="text-(--ink) leading-normal box-border absolute backdrop-blur-[7px] animate-[fade_0.25s_ease] m-0 p-0 inset-0 bg-[rgba(32,23,61,.55)]"
      ></div>

      <div className="text-(--ink) leading-normal box-border relative z-2 w-full max-w-155 overflow-hidden shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)] animate-[pop_0.3s_cubic-bezier(.2,0.9,0.3,1.15)] max-h-[92vh] flex flex-col m-0 p-0 rounded-md">
        <div className="text-(--ink) leading-normal box-border border-b-(--divider) relative flex-[0_0_auto] m-0 px-7.5 py-6.5 border-b border-solid bg-white">
          <button
            onClick={handleClose}
            aria-label="Schließen"
            className="box-border absolute text-(--muted) cursor-pointer leading-0 m-0 p-1.5 border-0 right-5 top-5 hover:text-(--ink)"
          >
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
              <rect x={4} y={4} width={16} height={16} rx={2} />
              <rect x={9} y={9} width={6} height={6} rx={2} />
              <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
            </svg>
            <span className={`${mono}`}>System–Check Handwerk</span>
          </div>
          <h3 className="box-border leading-[1.1] tracking-[-0.01em] text-2xl font-bold text-(--primary) m-0 p-0">
            {modalTitle}
          </h3>
        </div>

        <div className="text-(--ink) leading-normal box-border overflow-y-auto m-0 p-7.5 bg-(--background)">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="text-(--ink) leading-normal box-border block m-0 p-0">
              <label
                className={`${mono} leading-normal box-border text-[13px] font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-3.5 m-0 p-0`}
              >
                1. Welches Gewerk / welche Branche vertrittst du?
              </label>
              <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr_1fr] gap-3 mb-7.5 m-0 p-0">
                {gewerkOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGewerk(opt)}
                    className={`${optBase} ${gewerk === opt ? optSel : ""}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <label
                className={`${mono} leading-normal box-border text-[13px] font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-3.5 m-0 p-0`}
              >
                2. Was ist deine größte Hürde im Alltag?
              </label>
              <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr] gap-3 mb-7.5 m-0 p-0">
                {huerdeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setHuerde(opt)}
                    className={`${optBase} ${huerde === opt ? optSel : ""}`}
                  >
                    {opt}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`w-4.5 h-4.5 text-(--primary) ${huerde === opt ? "opacity-100" : "opacity-0"}`}
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="m8 12 3 3 5-6" />
                    </svg>
                  </button>
                ))}
              </div>

              <div className="text-(--ink) leading-normal box-border flex items-center gap-4 justify-end m-0 p-0">
                <button
                  type="button"
                  onClick={() => goStep(2)}
                  className="box-border inline-flex bg-(--primary) items-center gap-2.5 font-bold text-[13px] tracking-[0.08em] uppercase cursor-pointer text-white transition-[background-color,transform] duration-250 m-0 px-6.5 py-3.75 border-0 hover:bg-(--violet) hover:-translate-y-px"
                >
                  Weiter
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-3.5 h-3.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form
              onSubmit={handleSubmit}
              className="text-(--ink) leading-normal box-border m-0 p-0"
            >
              <input type="hidden" name="Gewerk" value={gewerk || "—"} />
              <input type="hidden" name="Hürde" value={huerde || "—"} />

              <div className="text-(--ink) leading-normal box-border grid grid-cols-[1fr_1fr] gap-4.5 mb-4.5 m-0 p-0">
                <div>
                  <label
                    className={`${mono} leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0`}
                  >
                    Ansprechpartner Name *
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="z.B. Martin Huber"
                    className={inputBase}
                  />
                </div>
                <div className="mb-3.5">
                  <label
                    className={`${mono} leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0`}
                  >
                    Mitarbeiteranzahl
                  </label>
                  <select
                    name="mitarbeiter"
                    className={inputBase}
                    defaultValue="6 - 15 Mitarbeiter"
                  >
                    <option>1 - 5 Mitarbeiter</option>
                    <option>6 - 15 Mitarbeiter</option>
                    <option>16 - 50 Mitarbeiter</option>
                    <option>über 50 Mitarbeiter</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1fr] gap-4.5 mb-4.5">
                <div className="mb-3.5">
                  <label
                    className={`${mono} leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0`}
                  >
                    Telefonnummer (für Rückfragen) *
                  </label>
                  <input
                    name="telefon"
                    required
                    placeholder="+49 (0) 170 1234567"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label
                    className={`${mono} leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0`}
                  >
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="huber@beispiel.de"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label
                  className={`${mono} leading-normal box-border text-xs font-semibold tracking-[0.04em] text-(--ink) uppercase block mb-2 m-0 p-0`}
                >
                  Bestehende Systeme (z.B. Lexware, Kuller, Excel, etc.) –
                  optional
                </label>
                <textarea
                  name="systeme"
                  placeholder="Welche Software ist aktuell im Einsatz?"
                  className={`${inputBase} min-h-20 resize-y`}
                />
              </div>

              <div
                className={`${mono} flex gap-3 bg-[rgba(46,26,71,.04)] border border-(--divider) rounded-[5px] p-4 mt-1.5 mb-6 text-[12.5px] leading-[1.6] text-(--muted)`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4.5 h-4.5 flex-none text-(--accent) mt-px"
                >
                  <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  Keine Werbeanrufe. Wir rufen dich ausschließlich an, um deine
                  Systemanforderungen kurz abzugleichen und dir konkrete
                  Lösungsideen aufzuzeigen.
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => goStep(1)}
                  className="bg-none border-0 font-semibold text-[15px] text-(--muted) cursor-pointer hover:text-(--ink)"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  className="box-border inline-flex bg-(--primary) items-center gap-2.5 font-bold text-[13px] tracking-[0.08em] uppercase cursor-pointer text-white transition-[background-color,transform] duration-250 m-0 px-6.5 py-3.75 border-0 hover:bg-(--violet) hover:-translate-y-px"
                >
                  Anfrage absenden
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-3.5 h-3.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="text-(--ink) leading-normal box-border text-center m-0 px-1.5 py-4.5">
              <div className="text-center box-border w-18.5 h-18.5 flex items-center justify-center mt-0 mb-5 mx-auto p-0 rounded-full bg-[#e9f5ec]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2e9d5b"
                  strokeWidth={2.5}
                  className="w-8.5 h-8.5"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="m8 12 3 3 5-6" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-(--primary) mb-3.5">
                Vielen Dank{name ? `, ${name}` : ""}!
              </h4>
              <p className="text-[15px] text-(--muted) leading-[1.6] max-w-[52ch] mx-auto mb-6">
                Deine Angaben wurden analysiert. Ein Systemingenieur prüft deine
                Problemstellung bezüglich{" "}
                <b className="text-(--ink) font-bold">
                  {huerde || "deiner Herausforderung"}
                </b>{" "}
                im Bereich{" "}
                <b className="text-(--ink) font-bold">
                  {gewerk || "deinem Gewerk"}
                </b>
                .
              </p>
              <div className="border border-(--divider) rounded-[5px] bg-white px-5.5 py-5 text-left max-w-115 mx-auto mb-6.5">
                <div
                  className={`${mono} text-xs font-semibold tracking-widest uppercase text-(--ink) border-b border-(--divider) pb-2.5 mb-3.5`}
                >
                  Nächste Schritte:
                </div>
                <ol className="list-none">
                  <li
                    className={`${mono} text-[13px] leading-[1.55] text-(--ink) flex gap-2.5 mb-3 before:content-['1.'] before:font-bold before:text-(--primary)`}
                  >
                    Wir melden uns telefonisch innerhalb von 24 Stunden bei dir.
                  </li>
                  <li
                    className={`${mono} text-[13px] leading-[1.55] text-(--ink) flex gap-2.5 mb-3 before:content-['2.'] before:font-bold before:text-(--primary)`}
                  >
                    Kurze Besprechung deiner Schnittstellen und Insellösungen.
                  </li>
                  <li
                    className={`${mono} text-[13px] leading-[1.55] text-(--ink) flex gap-2.5 mb-3 before:content-['3.'] before:font-bold before:text-(--primary)`}
                  >
                    Konzeptvorschlag für eine maßgeschneiderte Lösung.
                  </li>
                </ol>
              </div>
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2.5 bg-[#efeae6] text-(--ink) font-bold text-[13px] tracking-[0.08em] uppercase px-6.5 py-3.75 border-0 cursor-pointer transition-colors duration-250 hover:bg-(--divider)"
              >
                Fenster schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
