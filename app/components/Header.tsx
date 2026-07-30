import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import logo2 from "@/public/projectphotos/logo2.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F4] border-b border-gray-200">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-12">
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
        <nav className="flex items-center gap-16">
          <a
            href="#karriere"
            className="text-[18px] font-bold uppercase tracking-[0.18em] text-[#2E1B4D] transition hover:opacity-60"
          >
            Karriere
          </a>
          <a
            href="#leistungen"
            className="text-[18px] font-bold uppercase tracking-[0.18em] text-[#2E1B4D] transition hover:opacity-60"
          >
            Leistungen
          </a>
          <a
            href="#kontakt"
            className="text-[18px] font-bold uppercase tracking-[0.18em] text-[#2E1B4D] transition hover:opacity-60"
          >
            Anfrage
          </a>
        </nav>
      </div>
    </header>
  );
}
