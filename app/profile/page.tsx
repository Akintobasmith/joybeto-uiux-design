'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function ProfilePage() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [phone, setPhone] = useState('+1 (555) 000-0000')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChangePassword = () => {
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      setShowPasswordModal(false)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      alert('Password changed successfully!')
    }
  }

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
        <div className="space-y-4">
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
        <div className="space-y-4 mt-6">
          <h3 className="text-white font-bold text-lg">Security</h3>
          <button 
            onClick={() => setShowPasswordModal(true)}
            className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-4 text-left text-white hover:bg-[#252540] transition-colors flex items-center justify-between">
            <span className="font-medium">Change Password</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <button className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-4 text-left text-white hover:bg-[#252540] transition-colors flex items-center justify-between">
            <span className="font-medium">Enable Two-Factor Authentication</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Change Password Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div className="bg-[#0d0d1a] w-full rounded-t-3xl p-6 border-t border-[#2a2a45] space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-xl font-bold">Change Password</h3>
                <button onClick={() => setShowPasswordModal(false)} className="text-[#8888aa] hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white placeholder-[#5a5a7a]"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password (min 8 characters)"
                  className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white placeholder-[#5a5a7a]"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white placeholder-[#5a5a7a]"
                />
                {newPassword && confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-[#f52d2d] text-xs mt-2">Passwords do not match</p>
                )}
                {newPassword && newPassword.length < 8 && (
                  <p className="text-[#f5a623] text-xs mt-2">Password must be at least 8 characters</p>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 bg-[#1a1a2e] border border-[#2a2a45] rounded-lg p-3 text-white font-medium hover:bg-[#252540] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleChangePassword}
                  disabled={!currentPassword || !newPassword || newPassword !== confirmPassword || newPassword.length < 8}
                  className="flex-1 bg-gradient-to-r from-[#1a6ef5] to-[#0d4bc4] rounded-lg p-3 text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <button className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#0d4bc4] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all">
          Save Changes
        </button>
      </div>
    </GamePageWrapper>
  )
}
