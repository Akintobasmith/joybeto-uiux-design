'use client'

import Link from 'next/link'

export default function ActionButtons() {
  const actions = [
    {
      id: 'play',
      label: 'Play',
      href: '/games',
      bgColor: 'rgba(26, 110, 245, 0.12)',
      iconColor: '#1a6ef5',
    },
    {
      id: 'transactions',
      label: 'History',
      href: '/history',
      bgColor: 'rgba(139, 92, 246, 0.12)',
      iconColor: '#8b5cf6',
    },
    {
      id: 'vip',
      label: 'Bonuses',
      href: '/bonuses',
      bgColor: 'rgba(251, 191, 36, 0.12)',
      iconColor: '#fbbf24',
    },
    {
      id: 'promotions',
      label: 'Promos',
      href: '/promotions',
      bgColor: 'rgba(236, 72, 153, 0.12)',
      iconColor: '#ec4899',
    },
  ]

  return (
    <div className="mx-3.5 my-2.5 bg-[#141428] rounded-3.5 p-3 flex gap-2 border border-[#1e1e35] mt-5">
      {actions.map((action) => (
        <Link key={action.id} href={action.href} className="flex-1 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div
            style={{ backgroundColor: action.bgColor }}
            className="w-10 h-10 rounded-[11px] flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke={action.iconColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {action.id === 'play' && (
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              )}
              {action.id === 'transactions' && (
                <>
                  <circle cx="12" cy="12" r="1"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </>
              )}
              {action.id === 'vip' && (
                <>
                  <path d="M12 2L15.09 8.26H22L17.55 12.5L19.64 18.76L12 14.51L4.36 18.76L6.45 12.5L2 8.26H8.91L12 2Z"/>
                </>
              )}
              {action.id === 'promotions' && (
                <>
                  <path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9z"/>
                  <path d="M12 5v4l3 2"/>
                </>
              )}
            </svg>
          </div>
          <span className="text-[#ccc] text-[9px]">{action.label}</span>
        </Link>
      ))}
    </div>
  )
}
