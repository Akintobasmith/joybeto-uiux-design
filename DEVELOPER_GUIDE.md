# Joybeto Frontend - Complete Developer Guide

This comprehensive guide covers all 18 implemented pages and how to integrate them with the Joybeto API.

## Project Structure

```
app/
├── page.tsx                    # Home page (/)
├── layout.tsx                  # Root layout
├── deposit/
│   └── page.tsx               # Deposit page (/deposit)
├── withdraw/
│   └── page.tsx               # Withdraw page (/withdraw)
├── account/
│   └── page.tsx               # Account overview (/account)
├── profile/
│   └── page.tsx               # Profile settings (/profile)
├── history/
│   └── page.tsx               # Game history (/history)
├── statistics/
│   └── page.tsx               # Stats & analytics (/statistics)
├── games/
│   ├── page.tsx               # All games list (/games)
│   ├── tower/
│   │   └── page.tsx          # Tower game (/games/tower)
│   ├── double/
│   │   └── page.tsx          # Double game (/games/double)
│   ├── wingo/
│   │   └── page.tsx          # Wingo game (/games/wingo)
│   └── roulette/
│       └── page.tsx          # Roulette game (/games/roulette)
├── leaderboard/
│   └── page.tsx               # Leaderboard (/leaderboard)
├── live-games/
│   └── page.tsx               # Live games (/live-games)
├── referral/
│   └── page.tsx               # Referral program (/referral)
├── bonuses/
│   └── page.tsx               # Bonuses (/bonuses)
├── promotions/
│   └── page.tsx               # Promotions (/promotions)
├── help/
│   └── page.tsx               # Help & Support (/help)
└── settings/
    └── page.tsx               # Settings (/settings)

components/
├── Header.tsx                 # Top header with logo
├── WalletCard.tsx            # Balance display
├── ActionButtons.tsx         # Quick action buttons (linked)
├── PopularGames.tsx          # Game cards (linked)
├── SpecialBonus.tsx          # Bonus section
├── RecentWinners.tsx         # Winners list
├── BottomNav.tsx             # Bottom navigation (linked)
├── GamePageWrapper.tsx       # Reusable page wrapper
└── LayoutWrapper.tsx         # iPhone frame wrapper

lib/
├── api.ts                    # API utility functions
└── utils.ts                  # Helper utilities
```

## All 18 Pages at a Glance

### 1. **Home Page** (`/`)
- Balance display
- Quick action buttons (Play, History, Bonuses, Promotions)
- Popular games grid
- Special bonus section
- Recent winners list

### 2. **Games List** (`/games`)
- Display all 4 main games
- Card layout with icons
- Links to each game page

### 3. **Tower Game** (`/games/tower`)
- Game interface with bet controls
- Balance display
- Play button with API integration point
- Game board visualization

### 4. **Double Game** (`/games/double`)
- Bet amount controls
- Red/Black/Green selection
- Play mechanics
- Odds display

### 5. **Wingo Game** (`/games/wingo`)
- Number selection (1-10)
- Bet controls
- Win probability display
- Play button

### 6. **Roulette Game** (`/games/roulette`)
- Color selection (Red, Black, Green)
- Spin wheel mechanics
- Bet amount input
- Live wheel spinner

### 7. **Account** (`/account`)
- User profile overview
- Quick stats (Balance, Wins, Total Won)
- Links to Deposit, Withdraw, Profile, Rewards

### 8. **Deposit** (`/deposit`)
- Amount input
- Quick amount buttons ($50, $100, $500, $1000)
- Payment method selection
  - Credit Card
  - Bank Transfer
  - E-Wallet
  - Cryptocurrency

### 9. **Withdraw** (`/withdraw`)
- Amount input
- Bank account details input
- Fee calculation display (2%)
- Processing info

### 10. **Profile** (`/profile`)
- Edit name, email, phone
- Change avatar
- Password change link
- 2FA setup link

### 11. **History** (`/history`)
- Transaction list with dates
- Won/Lost status indicators
- Game names and amounts
- Date filtering capability

### 12. **Statistics** (`/statistics`)
- Total bets, wins, losses, win rate
- Game-specific statistics
- Win/loss breakdown by game
- Progress bars

### 13. **Rewards** (`/rewards`)
- Reward progress bars
- Daily, weekly, monthly bonuses
- Claim button
- Total rewards earned

### 14. **Promotions** (`/promotions`)
- Promo code cards
- Expiration times
- Copy to clipboard functionality
- Terms & conditions

### 15. **Bonuses** (`/bonuses`)
- Welcome bonus
- Daily bonus
- Reload bonus
- VIP exclusive bonus
- Status indicators (Claimed, Available, Locked)

### 16. **Leaderboard** (`/leaderboard`)
- Top 8 players ranking
- Winnings display
- Badge system
- Real-time ranking

### 17. **Live Games** (`/live-games`)
- Active game sessions
- Player count
- Max win display
- Join game buttons

### 18. **Referral** (`/referral`)
- Referral code display
- Copy/Share functionality
- Earned rewards display
- Referral statistics

### Additional Pages:

- **Help & Support** (`/help`) - FAQ section and contact options
- **Settings** (`/settings`) - Notifications, language, account preferences
- **Leaderboard** (`/leaderboard`) - Top players ranking

## API Integration Points

### Key Functions to Implement

All API calls should be made in `lib/api.ts`. Here are the main endpoints:

```typescript
// Authentication
async function login(email: string, password: string)
async function logout()
async function getUser()

// Games
async function startGame(gameType: string, betAmount: number)
async function submitGameResult(gameId: string, result: any)
async function getGameHistory(limit: number)
async function getGameStats()

// Wallet
async function getBalance()
async function deposit(amount: number, method: string)
async function withdraw(amount: number, bankDetails: any)
async function getTransactions(limit: number)

// Rewards & Bonuses
async function getRewards()
async function claimReward(rewardId: string)
async function getBonuses()
async function claimBonus(bonusCode: string)

// User Profile
async function updateProfile(data: any)
async function getReferralStats()
async function getLeaderboard(limit: number)

// Promotions
async function getPromotions()
async function validatePromoCode(code: string)
```

## Component to API Mapping

### GamePageWrapper.tsx
- Back button navigation
- Bottom nav integration

### ActionButtons.tsx (Home Page)
- Links to: `/games`, `/history`, `/bonuses`, `/promotions`
- API calls needed: None directly

### PopularGames.tsx (Home Page)
- Links to: `/games/tower`, `/games/double`, `/games/wingo`, `/games/roulette`
- API calls needed: `getGameStats()` for updated player counts

### WalletCard.tsx (Home Page)
- Displays balance
- API call: `getBalance()` on mount and when balance changes

### Game Pages (Tower, Double, Wingo, Roulette)
- Play button functionality
- API calls:
  - `startGame(gameType, betAmount)`
  - `submitGameResult(gameId, result)`
  - Update local balance

### Account Page
- Links to: `/deposit`, `/withdraw`, `/profile`, `/rewards`
- API calls: `getUser()`, `getBalance()`

### Deposit/Withdraw Pages
- Form submission
- API calls:
  - `deposit(amount, method)`
  - `withdraw(amount, bankDetails)`

### Profile Page
- Form inputs and submission
- API call: `updateProfile(data)`

### History Page
- Transaction list
- API call: `getTransactions(limit)`

### Statistics Page
- Chart data and stats
- API call: `getGameStats()`

### Rewards/Bonuses Pages
- Display and claim functionality
- API calls:
  - `getRewards()`
  - `claimReward(rewardId)`
  - `getBonuses()`
  - `claimBonus(bonusCode)`

### Leaderboard Page
- Player rankings
- API call: `getLeaderboard(limit)`

### Live Games Page
- Active games list
- API call: `getLiveGames()`

### Referral Page
- Share functionality
- API calls:
  - `getReferralStats()`
  - `generateReferralCode()`

## State Management

Currently using React hooks. For more complex state, consider implementing:

1. **Context API** for global state (user, balance, auth)
2. **SWR** for data fetching and caching
3. **Zustand** or **Redux** for complex state management

Example Context setup:
```typescript
// lib/context/UserContext.tsx
import { createContext } from 'react'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(0)

  return (
    <UserContext.Provider value={{ user, balance }}>
      {children}
    </UserContext.Provider>
  )
}
```

## Styling System

- **Tailwind CSS v4** with dark theme
- **Color Scheme:**
  - Primary: `#1a6ef5` (Blue)
  - Accent: `#f5a623` (Orange)
  - Background: `#050510` (Dark)
  - Surface: `#0d0d1a` (Darker)
  - Text: `#ffffff` (White)
  - Muted: `#8888aa` (Gray)

- **Typography:**
  - Headings: Geist Sans (bold)
  - Body: Geist Sans (regular)

## Next Steps for Backend Integration

1. **Set up authentication**
   - Create login/signup pages
   - Implement JWT token handling
   - Add protected routes middleware

2. **Connect to API**
   - Update `lib/api.ts` with real endpoints
   - Set BASE_URL to `https://api.joybeto.com`
   - Add error handling & retry logic

3. **Implement real-time updates**
   - WebSocket for live games
   - Live leaderboard updates
   - Real-time balance changes

4. **Add state management**
   - User authentication state
   - Wallet/balance state
   - Game state management

5. **Error handling**
   - API error boundaries
   - User-friendly error messages
   - Retry mechanisms

6. **Analytics & Logging**
   - Track user interactions
   - Monitor API performance
   - Error tracking with Sentry

## Testing Checklist

- [ ] All routes accessible
- [ ] Navigation between pages works
- [ ] Form inputs functional
- [ ] Button clicks trigger correct actions
- [ ] Responsive on mobile devices
- [ ] Dark theme consistent
- [ ] No console errors

## Deployment

Built for Next.js 16 with App Router. Deploy to Vercel:

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Deploy
vercel deploy
```

## Support

For questions or issues:
- Check `API_INTEGRATION.md` for detailed API specs
- Review individual page components for implementation details
- Refer to `lib/api.ts` for example API function structures
