export default function ActionButtons() {
  const actions = [
    {
      id: 'play',
      label: 'Play',
      icon: '▶',
      bgColor: 'rgba(26, 110, 245, 0.12)',
      iconColor: '#1a6ef5',
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: '📄',
      bgColor: 'rgba(139, 92, 246, 0.12)',
      iconColor: '#8b5cf6',
    },
    {
      id: 'vip',
      label: 'VIP Club',
      icon: '🏆',
      bgColor: 'rgba(251, 191, 36, 0.12)',
      iconColor: '#fbbf24',
    },
    {
      id: 'promotions',
      label: 'Promotions',
      icon: '🎁',
      bgColor: 'rgba(236, 72, 153, 0.12)',
      iconColor: '#ec4899',
    },
  ]

  return (
    <div className="mx-3.5 my-2.5 bg-[#141428] rounded-3.5 p-1 flex border border-[#1e1e35]">
      {actions.map((action) => (
        <div key={action.id} className="flex-1 flex flex-col items-center gap-1.5 cursor-pointer">
          <div
            style={{ backgroundColor: action.bgColor }}
            className="w-10 h-10 rounded-[11px] flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke={action.iconColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Dynamic icons based on action */}
              {action.id === 'play' && (
                <>
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </>
              )}
              {action.id === 'transactions' && (
                <>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </>
              )}
              {action.id === 'vip' && (
                <>
                  <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
                </>
              )}
              {action.id === 'promotions' && (
                <>
                  <polyline points="20 12 20 22 4 22 4 12"/>
                  <rect x="2" y="7" width="20" height="5"/>
                  <path d="M12 22V7"/>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                </>
              )}
            </svg>
          </div>
          <span className="text-[#ccc] text-[9px]">{action.label}</span>
        </div>
      ))}
    </div>
  )
}
