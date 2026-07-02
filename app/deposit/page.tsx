'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function DepositPage() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <GamePageWrapper title="Deposit">
      <div className="space-y-6">
        <div className="bg-[#1a1a2e] rounded-2xl p-4 border border-[#2a2a45]">
          <div className="text-center">
            <p className="text-[#8888aa] text-sm mb-2">Current Balance</p>
            <p className="text-white font-bold text-3xl">$5,000</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Deposit Amount</label>
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
                className="bg-[#1a1a2e] border border-[#2a2a45] text-white text-sm font-medium py-2 rounded-lg hover:bg-[#1a6ef5] hover:border-[#1a6ef5] transition-all"
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Payment Method</label>
          <div className="space-y-2">
            {[
              { id: 'card', name: 'Credit Card', icon: '💳' },
              { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
              { id: 'wallet', name: 'E-Wallet', icon: '📱' },
              { id: 'crypto', name: 'Cryptocurrency', icon: '🪙' },
            ].map((method) => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  paymentMethod === method.id
                    ? 'bg-[#1a6ef5] border-[#1a6ef5]'
                    : 'bg-[#1a1a2e] border-[#2a2a45] hover:border-[#3a3a55]'
                }`}
              >
                <span className="text-xl">{method.icon}</span>
                <span className="text-white font-medium flex-1 text-left">{method.name}</span>
                <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === method.id ? 'bg-white border-white' : 'border-[#5a5a7a]'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Deposit Button */}
        <button className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#0d4bc4] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all">
          Deposit ${amount || '0'}
        </button>

        <p className="text-[#8888aa] text-xs text-center">
          By depositing, you agree to our Terms & Conditions
        </p>
      </div>
    </GamePageWrapper>
  )
}
