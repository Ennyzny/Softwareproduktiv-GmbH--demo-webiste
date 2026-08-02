import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import logo2 from "@/public/projectphotos/logo2.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--divider) bg-[rgba(245,242,240,.85)] backdrop-blur-md backdrop-saturate-180">
      <div className="mx-auto flex h-18 w-[92%] max-w-310 items-center justify-between gap-5">
        <a
          href="#top"
          aria-label="Softwareproduktiv"
          className="flex items-center gap-3.25"
        >
          <Image
            src={logo}
            alt="Logo"
            width={38}
            height={30}
            className="h-7.5 w-auto"
          />
          <Image
            src={logo2}
            alt="Softwareproduktiv"
            width={204}
            height={14}
            className="hidden h-3.5 w-auto min-[520px]:block"
          />
        </a>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 min-[860px]:flex">
            <a
              href="#karriere"
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink) transition-colors duration-200 hover:text-(--violet)"
            >
              Karriere
            </a>

            <a
              href="#leistungen"
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink) transition-colors duration-200 hover:text-(--violet)"
            >
              Leistungen
            </a>

            <a
              href="#kontakt"
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink) transition-colors duration-200 hover:text-(--violet)"
            >
              Anfrage
            </a>
          </nav>
          <button
            aria-label="Menü"
            className="flex flex-col gap-1.25 p-2 min-[860px]:hidden"
          >
            <span className="h-0.5 w-6 bg-(--primary)"></span>
            <span className="h-0.5 w-6 bg-(--primary)"></span>
            <span className="h-0.5 w-6 bg-(--primary)"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
