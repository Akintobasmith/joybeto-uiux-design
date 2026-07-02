'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface GamePageWrapperProps {
  title: string
  children: ReactNode
  showBottomNav?: boolean
}

export default function GamePageWrapper({ title, children, showBottomNav = true }: GamePageWrapperProps) {
  return (
    <div className="w-full h-full bg-[#0d0d1a]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] px-5 py-4 border-b border-[#2a2a45]">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1a2a4a] hover:bg-[#1a3a5a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="text-white font-bold text-lg flex-1">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {children}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNavBar />}
    </div>
  )
}

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-5 right-5 bg-[#1a1a2e] border-t border-[#2a2a45] px-4 py-3 rounded-t-2xl max-w-[335px]">
      <div className="flex justify-between items-center gap-2">
        <Link href="/" className="flex flex-col items-center gap-1.5 text-[#8888aa] hover:text-[#1a6ef5] transition-colors flex-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/games" className="flex flex-col items-center gap-1.5 text-[#8888aa] hover:text-[#1a6ef5] transition-colors flex-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
            <line x1="7" y1="2" x2="7" y2="22"/>
            <line x1="17" y1="2" x2="17" y2="22"/>
            <line x1="2" y1="7" x2="22" y2="7"/>
            <line x1="2" y1="17" x2="22" y2="17"/>
          </svg>
          <span className="text-xs">Games</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center gap-1.5 text-[#8888aa] hover:text-[#1a6ef5] transition-colors flex-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span className="text-xs">Account</span>
        </Link>
        <Link href="/history" className="flex flex-col items-center gap-1.5 text-[#8888aa] hover:text-[#1a6ef5] transition-colors flex-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="text-xs">History</span>
        </Link>
      </div>
    </div>
  )
}
