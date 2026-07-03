'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LicensePage() {
  const [activeTab, setActiveTab] = useState('license')

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050510] p-4">
      <div className="relative w-full max-w-[375px] bg-[#0d0d1a] rounded-[54px] overflow-hidden border-[10px] border-[#1a1a2e] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[34px] bg-[#1a1a2e] rounded-b-[20px] z-50 flex items-center justify-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#0d0d1a] border border-[#2a2a48]"></div>
          <div className="w-[54px] h-2 rounded bg-[#0d0d1a]"></div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#0d0d1a] px-5 py-2 flex justify-between items-center pt-6 relative z-40">
          <span className="text-white text-sm font-bold">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-0.5">
              <span className="w-1 h-1 bg-white rounded-[1px] block"></span>
              <span className="w-1 h-1.5 bg-white rounded-[1px] block"></span>
              <span className="w-1 h-2 bg-white rounded-[1px] block"></span>
              <span className="w-1 h-3 bg-white rounded-[1px] block"></span>
            </div>
            <svg width="15" height="15" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
            </svg>
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="absolute right-[-5px] top-1/2 transform -translate-y-1/2 w-1 h-1.5 bg-white rounded-r"></div>
              <div className="w-4/5 h-full bg-white rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#0d0d1a] px-4 py-3 flex items-center justify-between border-b border-[#1e1e35]">
          <Link href="/" className="flex items-center gap-1 text-[#1a6ef5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <span className="text-white text-sm font-bold">License & Terms</span>
          <div className="w-6"></div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-[720px] pb-24" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Tabs */}
          <div className="flex gap-0 px-4 pt-4 border-b border-[#1e1e35]">
            <button
              onClick={() => setActiveTab('license')}
              className={`flex-1 pb-3 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'license'
                  ? 'text-[#1a6ef5] border-[#1a6ef5]'
                  : 'text-[#5a5a7a] border-transparent hover:text-[#8888aa]'
              }`}
            >
              License
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex-1 pb-3 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'terms'
                  ? 'text-[#1a6ef5] border-[#1a6ef5]'
                  : 'text-[#5a5a7a] border-transparent hover:text-[#8888aa]'
              }`}
            >
              Terms
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex-1 pb-3 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'privacy'
                  ? 'text-[#1a6ef5] border-[#1a6ef5]'
                  : 'text-[#5a5a7a] border-transparent hover:text-[#8888aa]'
              }`}
            >
              Privacy
            </button>
          </div>

          {/* Content */}
          <div className="px-4 py-4 space-y-4">
            {activeTab === 'license' && (
              <div>
                <h2 className="text-white text-sm font-bold mb-3">Joybeto License</h2>
                <div className="text-[#8888aa] text-[11px] leading-relaxed space-y-2">
                  <p>
                    Joybeto is licensed and regulated under the jurisdiction of [Insert License Authority].
                  </p>
                  <p className="font-bold text-[#ccc]">License No: JBT-2024-001</p>
                  <p>
                    This platform operates under strict regulatory compliance with all applicable gaming laws and regulations.
                  </p>
                  <p>
                    All games on Joybeto are provided with fair play guarantees and certified random number generation.
                  </p>
                  <p>
                    For license verification, please contact: license@joybeto.com
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div>
                <h2 className="text-white text-sm font-bold mb-3">Terms of Service</h2>
                <div className="text-[#8888aa] text-[11px] leading-relaxed space-y-2">
                  <h3 className="text-[#ccc] font-bold">1. User Agreement</h3>
                  <p>By accessing and using Joybeto, you agree to be bound by these terms and conditions.</p>

                  <h3 className="text-[#ccc] font-bold">2. Age Requirement</h3>
                  <p>Users must be at least 18 years of age to use this platform.</p>

                  <h3 className="text-[#ccc] font-bold">3. Account Responsibility</h3>
                  <p>You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</p>

                  <h3 className="text-[#ccc] font-bold">4. Responsible Gaming</h3>
                  <p>Joybeto promotes responsible gaming. Set limits and seek help if needed.</p>

                  <h3 className="text-[#ccc] font-bold">5. Disputes</h3>
                  <p>Any disputes will be resolved through our dispute resolution mechanism.</p>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-white text-sm font-bold mb-3">Privacy Policy</h2>
                <div className="text-[#8888aa] text-[11px] leading-relaxed space-y-2">
                  <h3 className="text-[#ccc] font-bold">Data Collection</h3>
                  <p>We collect personal information necessary to operate our platform and provide our services.</p>

                  <h3 className="text-[#ccc] font-bold">Data Protection</h3>
                  <p>Your data is encrypted and stored securely. We comply with GDPR and international data protection standards.</p>

                  <h3 className="text-[#ccc] font-bold">Third-Party Sharing</h3>
                  <p>We do not share your personal information with third parties without your consent.</p>

                  <h3 className="text-[#ccc] font-bold">Cookies</h3>
                  <p>We use cookies to enhance your experience. You can control cookie preferences in your settings.</p>

                  <h3 className="text-[#ccc] font-bold">Contact Us</h3>
                  <p>For privacy concerns, contact: privacy@joybeto.com</p>
                </div>
              </div>
            )}

            {/* Agreement Checkbox */}
            <div className="border-t border-[#1e1e35] pt-4 mt-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 accent-[#1a6ef5]" />
                <span className="text-[#8888aa] text-[10px]">
                  I have read and agree to the License, Terms of Service, and Privacy Policy
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <Link
          href="/"
          className="absolute bottom-0 left-0 right-0 bg-[#0f0f20] border-t border-[#1e1e35] py-3 px-4 text-center text-[#1a6ef5] font-bold text-sm hover:opacity-80 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
