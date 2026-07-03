'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import WalletCard from '@/components/WalletCard'
import ActionButtons from '@/components/ActionButtons'
import PopularGames from '@/components/PopularGames'
import SpecialBonus from '@/components/SpecialBonus'
import RecentWinners from '@/components/RecentWinners'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  const [activeNav, setActiveNav] = useState('games')

  return (
    <div className="relative w-full min-h-screen bg-[#050510] flex flex-col">
      {/* Header Content */}
      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <Header />
        <WalletCard />
        <ActionButtons />
        <PopularGames />
        <SpecialBonus />
        <RecentWinners />
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  )
}
