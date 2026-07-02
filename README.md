# Joybeto - Frontend Application

A modern, responsive gaming platform frontend built with Next.js 16, React 19, and Tailwind CSS. This application is designed to integrate with the Joybeto API.

## 🎮 Features

- **iPhone-Style UI**: Fully responsive design with notch, status bar, and bottom navigation
- **Dark Theme**: Beautiful dark gaming aesthetic with blue and purple accents
- **Interactive Components**: 
  - Wallet Balance Display with Deposit/Withdraw buttons
  - Action Buttons: Play, Transactions, VIP Club, Promotions
  - Popular Games Grid (Tower, Double, Wingo, Roulette)
  - Special Bonus Section
  - Recent Winners List
  - Bottom Navigation (Games, Share/Earn, Deposit, Trust, Profile)

## 📱 Project Structure

```
/app
  ├── layout.tsx           # Root layout with metadata
  ├── page.tsx             # Main home page with iPhone frame
  └── globals.css          # Global styles and theme

/components
  ├── Header.tsx           # Top header with logo and notifications
  ├── WalletCard.tsx       # Wallet balance display
  ├── ActionButtons.tsx    # Quick action buttons (changed Transfer to Play)
  ├── PopularGames.tsx     # Game cards grid
  ├── SpecialBonus.tsx     # Bonus promotion section
  ├── RecentWinners.tsx    # Recent winners list
  └── BottomNav.tsx        # Bottom navigation bar
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (16.8+ compatible)
- pnpm package manager

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Highlights

### Color Palette
- **Background**: #050510 (Deep dark navy)
- **Surface**: #0d0d1a (Elevated dark)
- **Primary**: #1a6ef5 (Bright blue)
- **Accent**: #f5a623 (Orange)
- **Success**: #10b981 (Green)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font-weight 800-900
- **Body**: Font-weight 400-500

## 🔧 Key Changes from Original Design

1. **Changed "Transfer" to "Play"**: The action buttons now feature "Play" instead of "Transfer" in the quick action section
2. **Branding**: All references updated to "Joybeto" with "PLAY & WIN" tagline
3. **Component Structure**: Modularized for easy API integration

## 📡 API Integration Guide

The application is ready to be integrated with the Joybeto API. Key areas for integration:

### 1. Wallet Data
**Component**: `WalletCard.tsx`

Update the wallet balance by replacing static data with API calls:
```javascript
// Fetch user wallet data
const walletData = await fetch('https://api.joybeto.com/api/wallet', {
  headers: { 'Authorization': `Bearer ${token}` }
})
```

### 2. Popular Games
**Component**: `PopularGames.tsx`

Fetch games list from the API:
```javascript
// Get available games
const games = await fetch('https://api.joybeto.com/api/games')
```

### 3. Recent Winners
**Component**: `RecentWinners.tsx`

Fetch recent winners data:
```javascript
// Get recent winners
const winners = await fetch('https://api.joybeto.com/api/winners/recent')
```

### 4. User Profile
**Component**: `Header.tsx` & `BottomNav.tsx`

Update user information and profile avatar:
```javascript
// Fetch user profile
const profile = await fetch('https://api.joybeto.com/api/user/profile', {
  headers: { 'Authorization': `Bearer ${token}` }
})
```

### 5. Action Buttons
**Component**: `ActionButtons.tsx`

Link buttons to appropriate routes/API endpoints:
- **Play**: Navigate to game selection/game instance
- **Transactions**: Fetch transaction history
- **VIP Club**: Navigate to VIP benefits page
- **Promotions**: Fetch active promotions

## 🔐 Authentication

The application is prepared for user authentication. Add authentication logic to:
- `app/layout.tsx` - Add session provider
- Create an `/api/auth` directory for backend authentication routes
- Store auth tokens in secure cookies

## 📦 Dependencies

```json
{
  "next": "16.2.6",
  "react": "^19",
  "react-dom": "^19",
  "@base-ui/react": "^1.5.0",
  "tailwindcss": "^4.2.0",
  "lucide-react": "^1.16.0"
}
```

## 🎯 Development Tips

1. **iPhone Preview**: The app is designed to fit an iPhone 14 Pro frame (375px width)
2. **Dark Theme**: All colors are optimized for dark mode
3. **Responsive**: Adjustable for different screen sizes via Tailwind breakpoints
4. **Component Reusability**: Each component is self-contained and can be reused

## 🚢 Deployment

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
vercel
```

## 📝 API Documentation

For API integration details, refer to: https://api.joybeto.com/api/docs/

## 🛠️ Customization

### Theme Colors
Edit `app/globals.css` to change the color scheme:
```css
--color-primary: #1a6ef5;
--color-accent: #f5a623;
```

### Game Data
Update `components/PopularGames.tsx` to connect with your API endpoint

### User Data
Modify `components/Header.tsx` and `components/WalletCard.tsx` to fetch user-specific data

## 📄 License

This project is part of the Joybeto platform.

## 👥 Support

For API integration questions, contact the backend developer at https://api.joybeto.com/api/docs/
