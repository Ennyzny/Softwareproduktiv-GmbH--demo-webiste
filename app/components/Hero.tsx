import Image from "next/image";
import logo from "@/public/projectphotos/logo.png";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="text-(--ink) leading-normal box-border relative h-screen min-h-160 flex flex-col items-center justify-center border-b border-b-(--divider) overflow-hidden m-0 p-0 border-solid"
      >
        <canvas></canvas>

        <div className="relative z-2 text-center box-border block isolate leading-normal text-(--ink)">
          <Image
            className="h-[clamp(120px,15vw,175px)] w-auto object-contain block mt-0 mb-7.5 mx-auto max-w-full"
            src={logo}
            alt="Softwareproduktiv logo"
          ></Image>
          <div className="text-(--ink) leading-normal text-center box-border relative h-[clamp(44px,5.6vw,80px)] flex items-center justify-center m-0 p-0">
            <div className="text-(--ink) leading-normal text-center box-border absolute flex items-center justify-center opacity-0 translate-y-2.5 pointer-events-none will-change-[opacity,transform] m-0 p-0 scale-[0.985] inset-0">
              <div className="text-center pointer-events-none box-border flex items-baseline whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] text-(--soft) leading-[1.15] m-0 p-0">
                <span className="text-center pointer-events-none whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] leading-[1.15] box-border flex-[0_0_auto] text-(--soft) m-0 p-0">
                  software
                </span>
                <span className="text-center pointer-events-none whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] leading-[1.15] box-border text-(--primary) font-bold tracking-[0.02em] m-0 p-0">
                  produktiv
                </span>
              </div>
            </div>

            <div className="text-(--ink) leading-normal text-center box-border absolute flex items-center justify-center pointer-events-none will-change-[opacity,transform] opacity-100 m-0 p-0 inset-0">
              <div className="text-center pointer-events-none box-border flex items-baseline whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] text-(--soft) leading-[1.15] m-0 p-0">
                <span className="text-center pointer-events-none whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] leading-[1.15] box-border flex-[0_0_auto] text-(--soft) m-0 p-0">
                  innovativ
                </span>
                <span className="text-center pointer-events-none whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] text-(--soft) leading-[1.15] box-border relative inline-flex justify-center overflow-hidden transition-[width] duration-[0.55s] ease-[cubic-bezier(.3,1.12,0.35,1)] w-[238.761px] m-0 p-0">
                  <span></span>
                  <span></span>
                </span>
                <span className="text-center pointer-events-none whitespace-nowrap uppercase text-[clamp(26px,4.6vw,64px)] font-normal tracking-[0.02em] leading-[1.15] box-border flex-[0_0_auto] text-(--soft) m-0 p-0">
                  dynamisch
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="leading-normal box-border absolute -translate-x-2/4 z-2 text-xs tracking-[0.18em] text-(--muted) uppercase m-0 p-0 left-2/4 bottom-9.5">
          // Entdecken ↓
        </div>
      </section>
    </>
  );
}
