'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function HistoryPage() {
  const transactions = [
    { id: 1, game: 'Tower', amount: '+$500', date: 'Today', status: 'Won' },
    { id: 2, game: 'Double', amount: '-$200', date: 'Today', status: 'Lost' },
    { id: 3, game: 'Roulette', amount: '+$1000', date: 'Yesterday', status: 'Won' },
    { id: 4, game: 'Wingo', amount: '-$100', date: 'Yesterday', status: 'Lost' },
    { id: 5, game: 'Tower', amount: '+$250', date: '2 days ago', status: 'Won' },
  ]

  return (
    <GamePageWrapper title="Game History">
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tx.status === 'Won' ? 'bg-[#10b981]' : 'bg-[#f52d2d]'}`}>
                <span>{tx.status === 'Won' ? '✓' : '✕'}</span>
              </div>
              <div>
                <p className="text-white font-medium">{tx.game}</p>
                <p className="text-[#8888aa] text-xs">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold ${tx.status === 'Won' ? 'text-[#10b981]' : 'text-[#f52d2d]'}`}>{tx.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </GamePageWrapper>
  )
}
