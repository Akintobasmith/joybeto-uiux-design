'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function DoubleGame() {
  const [balance, setBalance] = useState(5000)
  const [betAmount, setBetAmount] = useState(100)
  const [gameActive, setGameActive] = useState(false)

  const handlePlay = () => {
    setGameActive(true)
  }

  return (
    <GamePageWrapper title="Double">
      <div className="space-y-6">
        <div className="bg-[#1a1a2e] rounded-2xl p-4 border border-[#2a2a45]">
          <div className="text-center space-y-2">
            <h2 className="text-white font-bold text-xl">Double</h2>
            <p className="text-[#8888aa] text-sm">Double your winnings or lose it all!</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45]">
            <p className="text-[#8888aa] text-xs mb-1">Balance</p>
            <p className="text-white font-bold text-lg">${balance}</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-3 border border-[#2a2a45]">
            <p className="text-[#8888aa] text-xs mb-1">Current Bet</p>
            <p className="text-[#f5a623] font-bold text-lg">${betAmount}</p>
          </div>
        </div>

        <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a45] min-h-[300px] flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#f5a623] to-[#d47e1a] rounded-full mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-2xl">🎰</span>
            </div>
            <p className="text-white font-bold text-lg">Take the Risk?</p>
            <p className="text-[#8888aa] text-sm">Choose Red or Black</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-white text-sm font-medium">Bet Amount</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="flex-1 bg-[#1a1a2e] border border-[#2a2a45] rounded-lg px-3 py-2 text-white"
            />
            <button className="bg-[#1a6ef5] hover:bg-[#0d4bc4] text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Max
            </button>
          </div>
        </div>

        <button
          onClick={handlePlay}
          disabled={gameActive}
          className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#f5a623] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          {gameActive ? 'Game in Progress...' : 'PLAY NOW'}
        </button>
      </div>
    </GamePageWrapper>
  )
}
