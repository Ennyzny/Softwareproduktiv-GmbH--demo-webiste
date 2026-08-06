export default function ServiceTab() {
  return (
    <button
      type="button"
      aria-label="Service"
      className="fixed top-1/2 -translate-y-1/2 right-0 z-39 bg-(--primary) text-white border-0 cursor-pointer pr-1.5 pl-1.75 pt-4.5 pb-4.5 rounded-l-xl flex flex-col items-center  gap-3.25 shadow-[-5px_6px_18px_-8px_rgba(0,0,0,.4)] transition-colors duration-200 hover:bg-[#3a2159] min-[861px]:flex"
    >
      <span className=" h-2.25 w-2.25 rounded-[50%] bg-(--violet) animate-[livepulse_1.8s_ease-out_infinite]" />
      <span className=" text-[11px] font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
        Service
      </span>
    </button>
  );
}
