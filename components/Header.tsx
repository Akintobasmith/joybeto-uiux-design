import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-[#0d0d1a] px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <div className="w-8 h-8 flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Joybeto" 
            width={32} 
            height={32}
            className="w-full h-full object-contain bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>
        <div>
          <div className="text-white text-sm font-black">JOYBETO</div>
          <div className="text-[#8888aa] text-[7px] tracking-wider">PLAY & WIN</div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-2 items-center">
        {/* Notification */}
        <div className="w-8 h-8 rounded-full border border-[#2a2a45] flex items-center justify-center relative cursor-pointer">
          <svg width="15" height="15" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <div className="absolute top-[-4px] right-[-4px] bg-[#f52d2d] text-white text-[7px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">3</div>
        </div>

        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3a4a8a] to-[#2a3a6a] border-2 border-[#2a4a8a] flex items-center justify-center text-white text-[11px] font-bold cursor-pointer" style={{ fontFamily: '"Playfair Display", serif' }}>SA</div>
      </div>
    </div>
  )
}
