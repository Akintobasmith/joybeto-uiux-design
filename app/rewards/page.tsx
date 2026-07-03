'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function RewardsPage() {
  const rewards = [
    { id: 1, title: 'Daily Bonus', amount: '$50', progress: 75 },
    { id: 2, title: 'Weekly Reward', amount: '$200', progress: 45 },
    { id: 3, title: 'Monthly Bonus', amount: '$1000', progress: 20 },
    { id: 4, title: 'VIP Exclusive', amount: '$500', progress: 100 },
  ]

  return (
    <GamePageWrapper title="My Rewards">
      <div className="space-y-6">
        <div className="bg-[#1a1a2e] rounded-2xl p-4 border border-[#2a2a45] text-center">
          <p className="text-[#8888aa] text-sm mb-2">Total Rewards Earned</p>
          <p className="text-white font-bold text-3xl">$1,750</p>
        </div>

        <div className="space-y-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45]">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-white font-medium">{reward.title}</p>
                <p className="text-[#8888aa] text-sm">{reward.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-[#f5a623] text-sm font-bold">{reward.progress}%</p>
              </div>
            </div>
            <div className="w-full bg-[#0d0d1a] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#1a6ef5] to-[#f5a623] h-2 rounded-full transition-all"
                style={{ width: `${reward.progress}%` }}
              ></div>
            </div>
            </div>
            ))}
        </div>

        <button className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#f5a623] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all mt-6">
          Claim Rewards
        </button>
      </div>
    </GamePageWrapper>
  )
}
