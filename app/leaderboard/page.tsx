'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function LeaderboardPage() {
  const topPlayers = [
    { rank: 1, name: 'Pro Player', winnings: '$50,000', badge: '👑' },
    { rank: 2, name: 'Lucky Ace', winnings: '$45,000', badge: '🥈' },
    { rank: 3, name: 'High Roller', winnings: '$42,500', badge: '🥉' },
    { rank: 4, name: 'Big Winner', winnings: '$38,750', badge: '⭐' },
    { rank: 5, name: 'Fortune Seeker', winnings: '$35,000', badge: '⭐' },
    { rank: 6, name: 'Spin Master', winnings: '$32,250', badge: '⭐' },
    { rank: 7, name: 'Cards King', winnings: '$29,500', badge: '⭐' },
    { rank: 8, name: 'Lucky Charm', winnings: '$26,750', badge: '⭐' },
  ]

  return (
    <GamePageWrapper title="Leaderboard">
      <div className="space-y-3">
        {topPlayers.map((player) => (
          <div key={player.rank} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1a6ef5] rounded-lg flex items-center justify-center text-white font-bold">
                {player.rank}
              </div>
              <div>
                <p className="text-white font-medium">{player.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#f5a623] font-bold">{player.winnings}</p>
              <p className="text-xl">{player.badge}</p>
            </div>
          </div>
        ))}
      </div>
    </GamePageWrapper>
  )
}
