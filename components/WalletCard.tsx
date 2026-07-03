'use client'

import Link from 'next/link'

export default function WalletCard() {
  return (
    <div className="mx-3.5 my-3 space-y-4">
      {/* Balance Section */}
      <div className="bg-gradient-to-br from-[#141428] to-[#1a1a38] rounded-lg p-5 border border-[#2a2a48] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-[-15px] right-[-15px] w-20 h-20 bg-gradient-radial from-[rgba(26,110,245,0.12)] to-transparent rounded-full"></div>

        <div className="relative z-10 flex items-start justify-between">
          <div>
            <div className="text-[#8888aa] text-xs mb-1">Wallet Balance</div>
            <div className="text-white text-3xl font-black">₦ 25,430.50</div>
          </div>
          {/* Wallet Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mx-3.5 flex gap-3 w-[calc(100%-1.75rem)]">
        <Link href="/deposit" className="flex-1 px-4 py-3 bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] border-none rounded-lg text-white text-sm font-bold text-center hover:opacity-90 transition-opacity">
          Deposit +
        </Link>
        <Link href="/withdraw" className="flex-1 px-4 py-3 bg-transparent border-2 border-[#2a2a48] rounded-lg text-white text-sm font-bold text-center hover:border-[#3a3a5a] transition-colors">
          Withdraw ↑
        </Link>
      </div>
    </div>
  )
}
