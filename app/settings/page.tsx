'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('en')

  return (
    <GamePageWrapper title="Settings">
      <div className="space-y-6">
        {/* Notifications */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Notifications</h3>
          <div className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] flex items-center justify-between">
            <span className="text-white">Push Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-[#10b981]' : 'bg-[#5a5a7a]'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Appearance</h3>
          <div className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45] flex items-center justify-between">
            <span className="text-white">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-[#10b981]' : 'bg-[#5a5a7a]'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Language</h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 text-white"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
          </select>
        </div>

        {/* Account Settings */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Account</h3>
          <button className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 text-left text-white hover:bg-[#252540] transition-colors">
            Self-Exclusion
          </button>
          <button className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-xl p-4 text-left text-white hover:bg-[#252540] transition-colors">
            Deposit Limits
          </button>
        </div>

        {/* Danger Zone */}
        <div className="space-y-3">
          <h3 className="text-[#f52d2d] font-bold">Danger Zone</h3>
          <button className="w-full bg-[#f52d2d] bg-opacity-10 border border-[#f52d2d] border-opacity-30 rounded-xl p-4 text-[#f52d2d] font-medium hover:bg-opacity-20 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </GamePageWrapper>
  )
}
