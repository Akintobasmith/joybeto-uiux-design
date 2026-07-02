export default function RecentWinners() {
  const winners = [
    {
      id: 1,
      name: 'JohnDoe',
      initials: 'J',
      amount: '₦ 250,000',
      game: 'Tower',
      gameEmoji: '🏰',
      time: '2 min ago',
      bgGradient: 'from-[#6a3af5] to-[#4a2ac4]',
    },
    {
      id: 2,
      name: 'AdekunleS',
      initials: 'A',
      amount: '₦ 180,000',
      game: 'Double',
      gameEmoji: '🎲',
      time: '5 min ago',
      bgGradient: 'from-[#10b981] to-[#059669]',
    },
  ]

  return (
    <div>
      <div className="px-3.5 py-2 flex justify-between items-center">
        <span className="text-white text-sm font-bold">Recent Winners</span>
        <span className="text-[#8888aa] text-[10px] cursor-pointer hover:text-white">View all ›</span>
      </div>

      <div className="px-3.5 flex flex-col gap-1.75 mb-2">
        {winners.map((winner) => (
          <div key={winner.id} className="bg-[#141428] rounded-3 p-2.75 flex items-center gap-2.5 border border-[#1e1e35]">
            {/* Avatar */}
            <div className={`w-8.5 h-8.5 rounded-full bg-gradient-to-br ${winner.bgGradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
              {winner.initials}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="text-white text-xs font-semibold">{winner.name}</div>
              <div className="text-[#10b981] text-[11px] font-bold">{winner.amount}</div>
            </div>

            {/* Game Info */}
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-lg">{winner.gameEmoji}</span>
              <span className="text-[#f5a623] text-[9px] font-semibold">{winner.game}</span>
              <span className="text-[#8888aa] text-[8px]">{winner.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
