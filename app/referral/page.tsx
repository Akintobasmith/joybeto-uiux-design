'use client'

import GamePageWrapper from '@/components/GamePageWrapper'

export default function ReferralPage() {
  return (
    <GamePageWrapper title="Refer & Earn">
      <div className="space-y-6">
        {/* Referral Info Card */}
        <div className="bg-gradient-to-br from-[#1a6ef5] to-[#0d4bc4] rounded-2xl p-6 text-center border border-[#2a2a45]">
          <p className="text-white text-opacity-80 text-sm mb-2">Earn up to</p>
          <p className="text-white font-bold text-3xl mb-2">$50</p>
          <p className="text-white text-opacity-80 text-sm">Per friend referred</p>
        </div>

        {/* Your Code */}
        <div className="space-y-4">
          <label className="text-white text-sm font-medium">Your Referral Code</label>
          <div className="flex gap-2">
            <input
              type="text"
              value="JOHN2024REF"
              readOnly
              className="flex-1 bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white font-mono"
            />
            <button className="bg-[#1a6ef5] hover:bg-[#0d4bc4] text-white px-4 py-3 rounded-lg font-medium transition-colors">
              Copy
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="space-y-4 mt-4">
          <p className="text-white text-sm font-medium">Share Your Code</p>
          <div className="grid grid-cols-4 gap-3">
            <button className="bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-3 text-2xl hover:bg-[#252540] transition-colors">
              📱
            </button>
            <button className="bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-3 text-2xl hover:bg-[#252540] transition-colors">
              📧
            </button>
            <button className="bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-3 text-2xl hover:bg-[#252540] transition-colors">
              🔗
            </button>
            <button className="bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-3 text-2xl hover:bg-[#252540] transition-colors">
              💬
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-white font-bold text-lg">12</p>
            <p className="text-[#8888aa] text-xs">Friends Referred</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-[#10b981] font-bold text-lg">$600</p>
            <p className="text-[#8888aa] text-xs">Earned</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] text-center">
            <p className="text-[#1a6ef5] font-bold text-lg">8</p>
            <p className="text-[#8888aa] text-xs">Active Friends</p>
          </div>
        </div>

        {/* Referred Friends */}
        <div className="space-y-4 mt-4">
          <h3 className="text-white font-bold text-lg">Recent Referrals</h3>
          <div className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45]">
            <p className="text-white text-sm mb-2">Alex Johnson</p>
            <p className="text-[#8888aa] text-xs">Earned: $50 • Joined 3 days ago</p>
          </div>
        </div>
      </div>
    </GamePageWrapper>
  )
}
