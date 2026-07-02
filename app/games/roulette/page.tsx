'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import { useState } from 'react'

export default function RouletteGame() {
  const [balance, setBalance] = useState(5000)
  const [betAmount, setBetAmount] = useState(100)
  const [gameActive, setGameActive] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const handlePlay = () => {
    if (!selectedColor) return
    setGameActive(true)
  }

  return (
    <GamePageWrapper title="Roulette">
      <div className="space-y-6">
        <div className="bg-[#1a1a2e] rounded-2xl p-4 border border-[#2a2a45]">
          <div className="text-center space-y-2">
            <h2 className="text-white font-bold text-xl">Roulette</h2>
            <p className="text-[#8888aa] text-sm">Spin the wheel and win!</p>
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

        <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a45] flex items-center justify-center min-h-[250px]">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 rounded-full border-4 border-[#f5a623] mx-auto flex items-center justify-center">
              <span className="text-4xl">🎡</span>
            </div>
            <p className="text-white font-bold">Choose a Color</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-white text-sm font-medium">Select Color</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedColor('red')}
              className={`py-3 rounded-lg font-bold transition-all ${
                selectedColor === 'red'
                  ? 'bg-red-600 text-white scale-105'
                  : 'bg-[#1a1a2e] text-white border border-[#2a2a45]'
              }`}
            >
              Red
            </button>
            <button
              onClick={() => setSelectedColor('black')}
              className={`py-3 rounded-lg font-bold transition-all ${
                selectedColor === 'black'
                  ? 'bg-black text-white scale-105'
                  : 'bg-[#1a1a2e] text-white border border-[#2a2a45]'
              }`}
            >
              Black
            </button>
            <button
              onClick={() => setSelectedColor('green')}
              className={`py-3 rounded-lg font-bold transition-all ${
                selectedColor === 'green'
                  ? 'bg-green-600 text-white scale-105'
                  : 'bg-[#1a1a2e] text-white border border-[#2a2a45]'
              }`}
            >
              Green
            </button>
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
          disabled={gameActive || !selectedColor}
          className="w-full bg-gradient-to-r from-[#1a6ef5] to-[#f5a623] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          {gameActive ? 'Spinning...' : 'SPIN WHEEL'}
        </button>
      </div>
    </GamePageWrapper>
  )
}
