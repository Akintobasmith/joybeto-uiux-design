'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import Link from 'next/link'

export default function AccountPage() {
  return (
    <GamePageWrapper title="Account">
      <div className="space-y-4">
        {/* User Info Card */}
        <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a45] text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#1a6ef5] to-[#f5a623] rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h2 className="text-white font-bold text-lg mb-1">John Doe</h2>
          <p className="text-[#8888aa] text-sm">Premium Member</p>
          <p className="text-[#8888aa] text-xs mt-2">Member since Jan 2024</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-[#f5a623] font-bold text-lg">$5,000</p>
            <p className="text-[#8888aa] text-xs">Balance</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-[#10b981] font-bold text-lg">152</p>
            <p className="text-[#8888aa] text-xs">Wins</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-[#1a6ef5] font-bold text-lg">$8,250</p>
            <p className="text-[#8888aa] text-xs">Total Won</p>
          </div>
        </div>

        {/* Account Menu */}
        <div className="space-y-2">
          <Link
            href="/deposit"
            className="flex items-center justify-between bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 hover:bg-[#252540] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a6ef5] rounded-lg flex items-center justify-center">
                <span>💰</span>
              </div>
              <span className="text-white font-medium">Deposit</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888aa" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <Link
            href="/withdraw"
            className="flex items-center justify-between bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 hover:bg-[#252540] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f5a623] rounded-lg flex items-center justify-center">
                <span>🏦</span>
              </div>
              <span className="text-white font-medium">Withdraw</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888aa" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <Link
            href="/profile"
            className="flex items-center justify-between bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 hover:bg-[#252540] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center">
                <span>⚙️</span>
              </div>
              <span className="text-white font-medium">Profile Settings</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888aa" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <Link
            href="/rewards"
            className="flex items-center justify-between bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 hover:bg-[#252540] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f5a623] rounded-lg flex items-center justify-center">
                <span>🎁</span>
              </div>
              <span className="text-white font-medium">My Rewards</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8888aa" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>
      </div>
    </GamePageWrapper>
  )
}
