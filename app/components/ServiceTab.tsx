export default function ServiceTab() {
  return (
    <button
      type="button"
      aria-label="Service"
      className=" fixed right-0 top-1/2 z-39 hidden cursor-pointer -translate-y-1/2 flex-col items-center gap-3.25 rounded-l-xl border-0 bg-(--primary) pr-2.25 pl-2.25 pt-4.5 pb-4.5 text-white shadow-[-5px_6px_18px_-8px_rgba(0,0,0,.4)] transition-colors duration-200 hover:bg-[#3a2159] min-[861px]:flex"
    >
      <span className=" h-2.25 w-2.25 rounded-[50%] bg-(--violet) animate-[livepulse_1.8s_ease-out_infinite]" />
      <span className=" text-[11px] font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
        Service
      </span>
    </button>
  );
}
