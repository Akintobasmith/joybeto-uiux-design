'use client'

import Link from 'next/link'

export default function PopularGames() {
  const games = [
    {
      id: 1,
      name: 'TOWER',
      emoji: '🏰',
      gradient: 'from-[#1a0a38] to-[#3a1580]',
      entry: '₦ 100',
      winUp: '₦ 10,000',
      href: '/games/tower',
    },
    {
      id: 2,
      name: 'DOUBLE',
      emoji: '🎲',
      gradient: 'from-[#2a0a0a] to-[#6a1010]',
      entry: '₦ 200',
      winUp: '₦ 20,000',
      href: '/games/double',
    },
    {
      id: 3,
      name: 'WINGO',
      emoji: '🏆',
      gradient: 'from-[#1a1a08] to-[#3a3010]',
      entry: '₦ 100',
      winUp: '₦ 15,000',
      href: '/games/wingo',
    },
    {
      id: 4,
      name: 'ROULETTE',
      emoji: '🎡',
      gradient: 'from-[#1a0808] to-[#5a1010]',
      entry: '₦ 500',
      winUp: '₦ 50,000',
      href: '/games/roulette',
    },
  ]

  return (
    <div>
      <div className="px-3.5 py-2 flex justify-between items-center">
        <span className="text-white text-sm font-bold">Popular Games</span>
        <Link href="/games" className="text-[#8888aa] text-[10px] cursor-pointer hover:text-white transition-colors">
          View all ›
        </Link>
      </div>

      <div className="px-3.5 grid grid-cols-2 gap-2.5 mb-3">
        {games.map((game) => (
          <Link key={game.id} href={game.href} className="bg-[#141428] rounded-[13px] overflow-hidden border border-[#2a2a48] hover:border-[#3a3a58] transition-colors block">
            {/* Game Header */}
            <div className={`h-[86px] bg-gradient-to-br ${game.gradient} flex items-center justify-center flex-col gap-0.75`}>
              <div className="text-2xl">{game.emoji}</div>
              <div className="text-[9px] font-black tracking-widest text-[#f5a623] uppercase">{game.name}</div>
            </div>

            {/* Game Details */}
            <div className="p-2.5 flex justify-between">
              <div>
                <div className="text-[#8888aa] text-[8px]">Entry</div>
                <div className="text-[#ccc] text-[10px] font-bold">{game.entry}</div>
              </div>
              <div className="text-right">
                <div className="text-[#8888aa] text-[8px]">Win up to</div>
                <div className="text-[#10b981] text-[10px] font-bold">{game.winUp}</div>
              </div>
            </div>

            {/* Play Button */}
            <div className="mx-2 mb-2 w-[calc(100%-1rem)] px-2 py-1.5 bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] border-none rounded-[7px] text-white text-[10px] font-bold text-center hover:opacity-90 transition-opacity">
              ▶ Play Now
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
