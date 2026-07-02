'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function WithdrawPage() {
  const [amount, setAmount] = useState('')
  const [bankAccount, setBankAccount] = useState('')
  const [bankName, setBankName] = useState('')

  return (
    <GamePageWrapper title="Withdraw">
      <div className="space-y-6">
        <div className="bg-[#1a1a2e] rounded-2xl p-4 border border-[#2a2a45]">
          <div className="text-center">
            <p className="text-[#8888aa] text-sm mb-2">Withdrawable Balance</p>
            <p className="text-white font-bold text-3xl">$3,500</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Withdrawal Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold">$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg pl-8 pr-4 py-3 text-white placeholder-[#5a5a7a]"
            />
          </div>
        </div>

        {/* Quick Amount Selection */}
        <div className="space-y-2">
          <p className="text-white text-xs text-opacity-60">Quick Select</p>
          <div className="grid grid-cols-4 gap-2">
            {[50, 100, 500, 1000].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt.toString())}
                className="bg-[#1a1a2e] border border-[#2a2a45] text-white text-sm font-medium py-2 rounded-lg hover:bg-[#f5a623] hover:border-[#f5a623] transition-all"
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Bank Account</label>
          <input
            type="text"
            placeholder="Account number"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white placeholder-[#5a5a7a]"
          />
        </div>

        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Bank Name</label>
          <input
            type="text"
            placeholder="Enter your bank name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-4 py-3 text-white placeholder-[#5a5a7a]"
          />
        </div>

        {/* Fee Info */}
        <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45] space-y-2">
          <p className="text-white text-sm">Withdrawal Details</p>
          <div className="flex justify-between text-sm">
            <span className="text-[#8888aa]">Amount</span>
            <span className="text-white">${amount || '0'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#8888aa]">Processing Fee (2%)</span>
            <span className="text-white">${(Number(amount) * 0.02).toFixed(2)}</span>
          </div>
          <div className="border-t border-[#2a2a45] pt-2 flex justify-between text-sm">
            <span className="text-white font-medium">Total</span>
            <span className="text-[#f5a623] font-medium">${(Number(amount) * 0.98).toFixed(2)}</span>
          </div>
        </div>

        {/* Withdraw Button */}
        <button className="w-full bg-gradient-to-r from-[#f5a623] to-[#d47e1a] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all">
          Withdraw Now
        </button>

        <p className="text-[#8888aa] text-xs text-center">
          Withdrawals are processed within 24-48 hours
        </p>
      </div>
    </GamePageWrapper>
  )
}
