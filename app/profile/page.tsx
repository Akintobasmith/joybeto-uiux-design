'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function ProfilePage() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [phone, setPhone] = useState('+1 (555) 000-0000')

  return (
    <GamePageWrapper title="Profile Settings">
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#1a6ef5] to-[#f5a623] rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <button className="text-[#1a6ef5] text-sm font-medium hover:underline">Change Avatar</button>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white"
            />
          </div>
        </div>

        {/* Security Settings */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Security</h3>
          <button className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-4 text-left text-white hover:bg-[#252540] transition-colors">
            Change Password
          </button>
          <button className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-4 text-left text-white hover:bg-[#252540] transition-colors">
            Enable Two-Factor Authentication
          </button>
        </div>

        {/* Save Button */}
        <button className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#0d4bc4] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all">
          Save Changes
        </button>
      </div>
    </GamePageWrapper>
  )
}
