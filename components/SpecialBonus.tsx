export default function SpecialBonus() {
  return (
    <div className="mx-3.5 my-3 bg-gradient-to-br from-[#2a0a5a] to-[#4a1a9a] rounded-3.5 p-3.25 flex items-center gap-2.5 border border-[#5a2aaa]">
      <span className="text-2xl">🎁</span>
      <div className="flex-1">
        <div className="text-white text-[11px] font-bold">Special Bonus</div>
        <div className="text-[#c8b8f0] text-[10px]">Deposit now and get</div>
        <div className="text-[#f5a623] text-sm font-black">100% BONUS</div>
      </div>
      <button className="px-3 py-2.25 bg-gradient-to-br from-[#f52d7a] to-[#c4246a] border-none rounded-[9px] text-white text-[11px] font-black cursor-pointer hover:opacity-90 whitespace-nowrap">
        Claim Now
      </button>
    </div>
  )
}
