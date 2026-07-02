'use client'

import GamePageWrapper from '@/components/GamePageWrapper'
import Link from 'next/link'

export default function HelpPage() {
  const faqs = [
    {
      q: 'How do I withdraw my winnings?',
      a: 'Go to Account > Withdraw, enter your amount, and choose your payment method.',
    },
    {
      q: 'What is the minimum deposit?',
      a: 'The minimum deposit amount is $10.',
    },
    {
      q: 'How long do withdrawals take?',
      a: 'Most withdrawals are processed within 24-48 hours.',
    },
    {
      q: 'Are the games fair?',
      a: 'Yes, all games use certified random number generators.',
    },
  ]

  return (
    <GamePageWrapper title="Help & Support">
      <div className="space-y-6">
        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="#"
            className="bg-[#1a6ef5] bg-opacity-10 border border-[#1a6ef5] border-opacity-30 rounded-lg p-4 text-center hover:bg-opacity-20 transition-colors"
          >
            <span className="text-2xl block mb-2">💬</span>
            <span className="text-white text-sm font-medium">Live Chat</span>
          </Link>
          <Link
            href="#"
            className="bg-[#f5a623] bg-opacity-10 border border-[#f5a623] border-opacity-30 rounded-lg p-4 text-center hover:bg-opacity-20 transition-colors"
          >
            <span className="text-2xl block mb-2">✉️</span>
            <span className="text-white text-sm font-medium">Email</span>
          </Link>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          <h3 className="text-white font-bold">Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-[#1a1a2e] border border-[#2a2a45] rounded-lg">
              <summary className="p-4 cursor-pointer text-white font-medium flex justify-between items-center">
                {faq.q}
                <span>+</span>
              </summary>
              <div className="px-4 pb-4 text-[#8888aa]">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </GamePageWrapper>
  )
}
