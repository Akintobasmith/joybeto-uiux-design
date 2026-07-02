'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function BonusesPage() {
  const bonuses = [
    {
      id: 1,
      name: 'Welcome Bonus',
      amount: '100%',
      description: 'Up to $500 on your first deposit',
      status: 'Claimed',
      color: 'bg-[#10b981]',
    },
    {
      id: 2,
      name: 'Daily Bonus',
      amount: '$50',
      description: 'Claim every 24 hours',
      status: 'Available',
      color: 'bg-[#f5a623]',
    },
    {
      id: 3,
      name: 'Reload Bonus',
      amount: '50%',
      description: 'Get 50% bonus on daily deposits',
      status: 'Available',
      color: 'bg-[#1a6ef5]',
    },
    {
      id: 4,
      name: 'VIP Bonus',
      amount: '200%',
      description: 'Exclusive for VIP members',
      status: 'Locked',
      color: 'bg-[#f52d2d]',
    },
  ]

  return (
    <GamePageWrapper title="Bonuses">
      <div className="space-y-3">
        {bonuses.map((bonus) => (
          <div key={bonus.id} className={`${bonus.color} bg-opacity-10 rounded-xl p-4 border border-opacity-30 border-white`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white font-bold">{bonus.name}</p>
                <p className="text-[#8888aa] text-sm mt-1">{bonus.description}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${bonus.color.replace('bg-', 'text-')}`}>
                  {bonus.amount}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                bonus.status === 'Available'
                  ? 'bg-[#10b981] text-white'
                  : bonus.status === 'Claimed'
                  ? 'bg-[#8888aa] text-white'
                  : 'bg-[#f52d2d] text-white'
              }`}>
                {bonus.status}
              </span>
              {bonus.status === 'Available' && (
                <button className="text-white text-sm font-bold hover:underline">
                  Claim Now →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </GamePageWrapper>
  )
}
