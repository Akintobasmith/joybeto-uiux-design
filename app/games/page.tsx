'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import Link from 'next/link'

export default function GamesListPage() {
  const games = [
    {
      name: 'Tower',
      href: '/games/tower',
      icon: '🏔️',
      description: 'Climb higher for bigger rewards',
      color: 'from-[#1a6ef5] to-[#0d4bc4]',
    },
    {
      name: 'Double',
      href: '/games/double',
      icon: '🎰',
      description: 'Double your winnings or lose',
      color: 'from-[#f5a623] to-[#d47e1a]',
    },
    {
      name: 'Wingo',
      href: '/games/wingo',
      icon: '🎲',
      description: 'Pick your lucky number',
      color: 'from-[#10b981] to-[#059669]',
    },
    {
      name: 'Roulette',
      href: '/games/roulette',
      icon: '🎡',
      description: 'Spin the wheel of fortune',
      color: 'from-[#f52d2d] to-[#d91e1e]',
    },
  ]

  return (
    <GamePageWrapper title="All Games">
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <Link
            key={game.name}
            href={game.href}
            className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] hover:border-[#3a3a55] transition-all group"
          >
            <div className={`bg-gradient-to-br ${game.color} rounded-lg p-4 mb-3 flex items-center justify-center h-20 group-hover:shadow-lg transition-shadow`}>
              <span className="text-4xl">{game.icon}</span>
            </div>
            <h3 className="text-white font-bold mb-1">{game.name}</h3>
            <p className="text-[#8888aa] text-xs">{game.description}</p>
          </Link>
        ))}
      </div>
    </GamePageWrapper>
  )
}
