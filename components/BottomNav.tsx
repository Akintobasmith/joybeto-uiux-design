'use client'

import Link from 'next/link'

interface BottomNavProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

export default function BottomNav({ activeNav, setActiveNav }: BottomNavProps) {
  const navItems = [
    {
      id: 'games',
      label: 'Games',
      href: '/games',
      icon: (active: boolean) => (
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${active ? 'stroke-[#1a6ef5]' : 'stroke-[#5a5a7a]'}`} fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      id: 'referral',
      label: 'Refer',
      href: '/referral',
      icon: (active: boolean) => (
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${active ? 'stroke-[#1a6ef5]' : 'stroke-[#5a5a7a]'}`} fill="none">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="2"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      id: 'deposit',
      label: 'Deposit',
      href: '/deposit',
      icon: (active: boolean) => (
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5.5 h-5.5 ${active ? 'stroke-white' : 'stroke-white'}`} fill="none">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
          <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
        </svg>
      ),
    },
    {
      id: 'live',
      label: 'Live',
      href: '/live-games',
      icon: (active: boolean) => (
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${active ? 'stroke-[#1a6ef5]' : 'stroke-[#5a5a7a]'}`} fill="none">
          <circle cx="12" cy="12" r="1"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24"/>
          <path d="M1 12h6m6 0h6"/>
          <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"/>
        </svg>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      href: '/account',
      icon: (active: boolean) => (
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${active ? 'stroke-[#1a6ef5]' : 'stroke-[#5a5a7a]'}`} fill="none">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#0f0f20] border-t border-[#1e1e35] py-2 pb-5.5 flex items-center">
      {navItems.slice(0, 2).map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => setActiveNav(item.id)}
          className="flex-1 flex flex-col items-center gap-0.75 cursor-pointer"
        >
          {item.icon(activeNav === item.id)}
          <span className={`text-[9px] font-medium ${activeNav === item.id ? 'text-[#1a6ef5] font-bold' : 'text-[#5a5a7a]'}`}>
            {item.label}
          </span>
        </Link>
      ))}

      {/* Center deposit button */}
      <Link href={navItems[2].href} onClick={() => setActiveNav('deposit')} className="flex-1 flex flex-col items-center gap-0.75 cursor-pointer -mt-5.5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] flex items-center justify-center border-3 border-[#0d0d1a]">
          {navItems[2].icon(activeNav === 'deposit')}
        </div>
        <span className={`text-[9px] font-bold text-[#1a6ef5]`}>
          {navItems[2].label}
        </span>
      </Link>

      {navItems.slice(3).map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => setActiveNav(item.id)}
          className="flex-1 flex flex-col items-center gap-0.75 cursor-pointer"
        >
          {item.icon(activeNav === item.id)}
          <span className={`text-[9px] font-medium ${activeNav === item.id ? 'text-[#1a6ef5] font-bold' : 'text-[#5a5a7a]'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
