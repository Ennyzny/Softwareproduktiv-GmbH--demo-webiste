import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";
import AnimatedBackground from "@/app/components/hero/AnimatedBackground";
import RotatingHeadline from "@/app/components/hero/RotatingHeadline";

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-(--ink) leading-normal relative h-screen min-h-160 flex flex-col items-center justify-center border-b border-b-(--divider) overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-2 text-center">
        <Image
          className="h-[clamp(120px,15vw,175px)] w-auto object-contain block mt-0 mb-7.5 mx-auto max-w-full"
          src={logo}
          alt="Softwareproduktiv logo"
          priority
        />
        <RotatingHeadline />
      </div>

      <div className="absolute left-1/2 bottom-9.5 -translate-x-1/2 z-2 text-xs tracking-[0.18em] text-(--muted) uppercase">
        // Entdecken ↓
      </div>
    </section>
  );
}
