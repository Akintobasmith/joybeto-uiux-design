'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function PromotionsPage() {
  const promos = [
    {
      id: 1,
      title: 'Summer Bonanza',
      description: 'Get 50% bonus on your next deposit',
      code: 'SUMMER50',
      expires: '30 days',
    },
    {
      id: 2,
      title: 'Cashback Weekend',
      description: '10% cashback on all Tower games',
      code: 'CASHBACK10',
      expires: '7 days',
    },
    {
      id: 3,
      title: 'Referral Bonus',
      description: 'Invite friends and earn $25 each',
      code: 'REFER25',
      expires: 'Unlimited',
    },
    {
      id: 4,
      title: 'VIP Special',
      description: 'Exclusive double rewards for VIP members',
      code: 'VIP2X',
      expires: '14 days',
    },
  ]

  return (
    <GamePageWrapper title="Promotions">
      <div className="space-y-3">
        {promos.map((promo) => (
          <div key={promo.id} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white font-bold">{promo.title}</p>
                <p className="text-[#8888aa] text-sm mt-1">{promo.description}</p>
              </div>
              <span className="bg-[#f5a623] text-black text-xs font-bold px-2 py-1 rounded">
                {promo.expires}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <code className="bg-[#0d0d1a] text-[#1a6ef5] px-3 py-2 rounded text-sm font-mono">
                {promo.code}
              </code>
              <button className="text-[#1a6ef5] hover:text-[#0d4bc4] text-sm font-bold">
                Copy Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </GamePageWrapper>
  )
}
