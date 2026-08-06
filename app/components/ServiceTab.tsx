export default function ServiceTab() {
  return (
    <button
      type="button"
      aria-label="Service"
      className="fixed top-1/2 -translate-y-1/2 right-0 z-[39] w-[31px] bg-(--primary) text-white border-0 cursor-pointer py-[18px] rounded-l-xl flex flex-col items-center justify-center gap-[13px] shadow-[-5px_6px_18px_-8px_rgba(0,0,0,.4)] transition-colors duration-200 hover:bg-[#3a2159] max-[860px]:hidden"
    >
      <span className="h-[9px] w-[9px] rounded-full bg-(--violet) animate-[livepulse_1.8s_ease-out_infinite]" />
      <span className="text-[11px] leading-none font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
        Service
      </span>
    </button>
  );
}