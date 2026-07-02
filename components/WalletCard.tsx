export default function WalletCard() {
  return (
    <div className="mx-3.5 my-2.5 bg-gradient-to-br from-[#141428] to-[#1a1a38] rounded-4xl p-4 border border-[#2a2a48] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-15px] right-[-15px] w-20 h-20 bg-gradient-radial from-[rgba(26,110,245,0.12)] to-transparent rounded-full"></div>

      <div className="relative z-10">
        <div className="text-[#8888aa] text-xs mb-1">Wallet Balance</div>
        <div className="text-white text-2xl font-black mb-3">₦ 25,430.50</div>

        {/* Wallet Icon */}
        <div className="absolute top-3 right-3 w-11 h-11 bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] rounded-[11px] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
            <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-2.5 py-2.5 bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] border-none rounded-[9px] text-white text-xs font-bold cursor-pointer hover:opacity-90">
            Deposit +
          </button>
          <button className="flex-1 px-2.5 py-2.5 bg-transparent border-1.5 border-[#2a2a48] rounded-[9px] text-white text-xs font-bold cursor-pointer hover:border-[#3a3a5a]">
            Withdraw ↑
          </button>
        </div>
      </div>
    </div>
  )
}
