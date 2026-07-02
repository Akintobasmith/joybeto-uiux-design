'use client'

import React, { ReactNode } from 'react'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050510] p-4">
      {/* iPhone Frame */}
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

        {/* Content Area */}
        <div className="overflow-y-auto max-h-[720px] pb-20" style={{ scrollbarWidth: 'none' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
