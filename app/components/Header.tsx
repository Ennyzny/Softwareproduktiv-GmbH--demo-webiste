import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import logo2 from "@/public/projectphotos/logo2.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#f5f2f0] border-b border-gray-200">
      <div className="flex items-center justify-between h-18 gap-5 max-w-310 mx-auto px-10 py-0">
        <a
          href="#top"
          className="flex items-center gap-4"
          aria-label="Softwareproduktiv"
        >
          <Image
            src={logo}
            alt="logo"
            width={38}
            height={30}
            className="object-contain"
          />

          <Image
            src={logo2}
            alt="softwareproduktiv"
            width={204}
            height={14}
            className="object-contain"
          />
        </a>
        <nav className="flex items-center gap-10">
          <a
            href="#karriere"
            className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2E1B4D] transition-[0.2s] hover:text-purple-500"
          >
            Karriere
          </a>
          <a
            href="#leistungen"
            className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2E1B4D] transition-[0.2s] hover:text-purple-500"
          >
            Leistungen
          </a>
          <a
            href="#kontakt"
            className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#2E1B4D] transition-[0.2s] hover:text-purple-500"
          >
            Anfrage
          </a>
        </nav>
      </div>
    </header>
  );
}
