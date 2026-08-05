"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import logo2 from "@/public/projectphotos/logo2.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-(--divider) bg-[rgba(245,242,240,.85)] backdrop-blur-md backdrop-saturate-180">
      <div className="text-(--ink) leading-normal box-border max-w-(--maxw) not-last:flex items-center justify-between h-18 gap-5 mx-auto my-0 px-5 md:px-10 py-0">
        <a
          href="#top"
          aria-label="Softwareproduktiv"
          className="flex items-center gap-3.25"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={logo}
            alt="Softwareproduktiv"
            width={38.34}
            height={30}
            className="block h-7.5 w-auto"
          />
          <Image
            src={logo2}
            alt="Softwareproduktiv"
            width={204}
            height={14}
            className="hidden h-3.5  min-[521px]:block"
          />
        </a>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 min-[861px]:flex">
            <a
              href="#"
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
              href="#"
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink) transition-colors duration-200 hover:text-(--violet)"
            >
              Anfrage
            </a>
          </nav>
          <button
            type="button"
            aria-label="Menü"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer flex-col gap-1.25 border-0 bg-transparent p-2 min-[861px]:hidden"
          >
            <span className="block h-0.5 w-6 bg-(--primary)" />
            <span className="block h-0.5 w-6 bg-(--primary)" />
            <span className="block h-0.5 w-6 bg-(--primary)" />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden bg-[rgba(245,242,240,.97)] transition-all duration-200 min-[861px]:hidden ${
          isOpen ? "max-h-60 border-t border-(--divider)" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="border-b border-(--divider) py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink)"
          >
            Karriere
          </a>
          <a
            href="#leistungen"
            onClick={() => setIsOpen(false)}
            className="border-b border-(--divider) py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink)"
          >
            Leistungen
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-(--ink)"
          >
            Anfrage
          </a>
        </nav>
      </div>
    </header>
  );
}
