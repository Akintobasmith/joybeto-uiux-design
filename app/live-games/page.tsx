'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import Link from 'next/link'

export default function LiveGamesPage() {
  const liveGames = [
    {
      id: 1,
      game: 'Tower Game',
      players: 342,
      maxWin: '$10,000',
      status: 'Starting in 5s',
      icon: '🏔️',
    },
    {
      id: 2,
      game: 'Double Game',
      players: 258,
      maxWin: '$5,000',
      status: 'Starting in 12s',
      icon: '🎰',
    },
    {
      id: 3,
      game: 'Wingo Game',
      players: 521,
      maxWin: '$25,000',
      status: 'Live Now!',
      icon: '🎲',
    },
    {
      id: 4,
      game: 'Roulette',
      players: 189,
      maxWin: '$15,000',
      status: 'Starting in 8s',
      icon: '🎡',
    },
  ]

  return (
    <GamePageWrapper title="Live Games">
      <div className="space-y-3">
        {liveGames.map((game) => (
          <div key={game.id} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] hover:border-[#3a3a55] transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{game.icon}</div>
                <div>
                  <p className="text-white font-bold">{game.game}</p>
                  <p className="text-[#8888aa] text-xs">{game.players} players</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                game.status.includes('Live')
                  ? 'bg-[#10b981] text-white'
                  : 'bg-[#f5a623] text-black'
              }`}>
                {game.status}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#f5a623] text-sm">Max Win: {game.maxWin}</p>
              <Link
                href={`/games/${game.game.toLowerCase().split(' ')[0]}`}
                className="text-[#1a6ef5] text-sm font-bold hover:underline"
              >
                Join →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </GamePageWrapper>
  )
}
