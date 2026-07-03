'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function StatisticsPage() {
  const stats = [
    { label: 'Total Bets', value: '2,450', color: 'bg-[#1a6ef5]' },
    { label: 'Total Won', value: '$8,250', color: 'bg-[#10b981]' },
    { label: 'Total Lost', value: '$2,150', color: 'bg-[#f52d2d]' },
    { label: 'Win Rate', value: '68%', color: 'bg-[#f5a623]' },
  ]

  const gameStats = [
    { game: 'Tower', wins: 85, losses: 42 },
    { game: 'Double', wins: 120, losses: 95 },
    { game: 'Wingo', wins: 45, losses: 38 },
    { game: 'Roulette', wins: 92, losses: 75 },
  ]

  return (
    <GamePageWrapper title="Statistics">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} bg-opacity-10 rounded-xl p-4 border border-opacity-30 border-white`}>
              <p className="text-[#8888aa] text-xs mb-2">{stat.label}</p>
              <p className="text-white font-bold text-xl">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="text-white font-bold text-lg">Game Statistics</h3>
          <div className="space-y-4">
            {gameStats.map((game, idx) => (
              <div key={idx} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45]">
                <p className="text-white font-medium mb-3">{game.game}</p>
                <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#8888aa]">Wins</span>
                  <span className="text-white font-bold">{game.wins}</span>
                </div>
                <div className="w-full bg-[#0d0d1a] rounded-full h-2">
                  <div className="bg-[#10b981] h-2 rounded-full" style={{ width: `${(game.wins / (game.wins + game.losses)) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#8888aa]">Losses</span>
                  <span className="text-white font-bold">{game.losses}</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </GamePageWrapper>
  )
}
