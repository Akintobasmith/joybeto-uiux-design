# Joybeto - Complete Pages Map (18 Pages)

## Navigation Structure

```
Home (/)
├─ Deposit (/deposit)
├─ Withdraw (/withdraw)
├─ Games (/games)
│  ├─ Tower (/games/tower)
│  ├─ Double (/games/double)
│  ├─ Wingo (/games/wingo)
│  └─ Roulette (/games/roulette)
├─ Account (/account)
│  ├─ Deposit (/deposit)
│  ├─ Withdraw (/withdraw)
│  ├─ Profile (/profile)
│  └─ Rewards (/rewards)
├─ History (/history)
├─ Statistics (/statistics)
├─ Profile (/profile)
├─ Rewards (/rewards)
├─ Promotions (/promotions)
├─ Bonuses (/bonuses)
├─ Leaderboard (/leaderboard)
├─ Live Games (/live-games)
├─ Referral (/referral)
├─ Settings (/settings)
└─ Help (/help)
```

## All 18 Pages Overview

### 1. Home Page `/`
**Navigation:** Root page, accessible from BottomNav
**Components:**
- iPhone frame with notch
- Header with logo
- Wallet card showing balance
- Action buttons (Play, History, Bonuses, Promotions)
- Popular games grid
- Special bonus section
- Recent winners list
- Bottom navigation

**Links To:**
- `/games` (Play button)
- `/history` (History button)
- `/bonuses` (Bonuses button)
- `/promotions` (Promotions button)
- Game pages via PopularGames component

**API Integration Points:**
- `getBalance()` - Display wallet balance
- `getRecentWinners()` - Display recent winners
- `getPromotions()` - Show featured promotion

---

### 2. Games List `/games`
**Navigation:** Via home action buttons or bottom nav
**Components:**
- Game page wrapper with back button
- 4-game grid with cards
- Each card shows game emoji, name, description

**Links To:**
- `/games/tower`
- `/games/double`
- `/games/wingo`
- `/games/roulette`

**API Integration Points:**
- `getGameStats()` - Player counts
- `getLiveGames()` - Active session info

---

### 3. Tower Game `/games/tower`
**Navigation:** Via games list or popular games
**Components:**
- Game board visualization (🏔️)
- Balance display
- Current bet display
- Bet amount input
- Max bet button
- Play button

**State Management:**
- Local: betAmount, gameActive, balance
- Global: User balance

**API Integration Points:**
- `startGame('tower', betAmount)` - Initialize game
- `submitGameResult(gameId, result)` - Submit final result
- Balance update after win/loss

**Button Actions:**
- Max button: Set bet to maximum
- Play button: Call `startGame()` API

---

### 4. Double Game `/games/double`
**Navigation:** Via games list or popular games
**Components:**
- Game board (🎰)
- Color selection placeholder
- Balance and bet display
- Play button

**API Integration Points:**
- `startGame('double', betAmount)`
- `submitGameResult(gameId, selection)`

---

### 5. Wingo Game `/games/wingo`
**Navigation:** Via games list or popular games
**Components:**
- Number picker (1-10)
- Bet controls
- Balance display
- Play button

**API Integration Points:**
- `startGame('wingo', betAmount)`
- `submitGameResult(gameId, selectedNumber)`

---

### 6. Roulette Game `/games/roulette`
**Navigation:** Via games list or popular games
**Components:**
- Wheel visualization
- Color selector (Red, Black, Green)
- Bet controls
- Spin button

**API Integration Points:**
- `startGame('roulette', betAmount)`
- `submitGameResult(gameId, selectedColor)`

---

### 7. Account `/account`
**Navigation:** Via bottom nav profile button
**Components:**
- User profile card (avatar, name, tier)
- Quick stats (balance, wins, total won)
- Menu buttons linking to:
  - Deposit
  - Withdraw
  - Profile Settings
  - My Rewards

**Links To:**
- `/deposit`
- `/withdraw`
- `/profile`
- `/rewards`

**API Integration Points:**
- `getUser()` - User profile
- `getBalance()` - Current balance
- `getStats()` - Wins and earnings

---

### 8. Deposit `/deposit`
**Navigation:** Via account, home action buttons, bottom nav
**Components:**
- Balance display
- Amount input
- Quick amount buttons ($50, $100, $500, $1000)
- Payment method selector
  - Credit Card
  - Bank Transfer
  - E-Wallet
  - Cryptocurrency
- Deposit button

**State Management:**
- Local: amount, paymentMethod

**API Integration Points:**
- `deposit(amount, paymentMethod)` - Process deposit
- `getPaymentMethods()` - List available methods
- `getBalance()` - Update balance after deposit

**Form Validation:**
- Minimum amount check
- Payment method selection required

---

### 9. Withdraw `/withdraw`
**Navigation:** Via account page
**Components:**
- Withdrawable balance display
- Amount input
- Quick amount buttons
- Bank account input
- Bank name input
- Fee display (2%)
- Withdraw button

**State Management:**
- Local: amount, bankAccount, bankName

**API Integration Points:**
- `withdraw(amount, bankDetails)` - Process withdrawal
- `getWithdrawMethods()` - Available methods
- `validateBankDetails()` - Verify bank info
- `getBalance()` - Update after withdrawal

**Validation:**
- Minimum withdrawal amount
- Valid bank account format
- Bank name required

---

### 10. History `/history`
**Navigation:** Via home action button, bottom nav
**Components:**
- Transaction list
- Each item shows:
  - Game name
  - Amount (+ or -)
  - Win/Loss status
  - Date

**API Integration Points:**
- `getTransactions(limit=20)` - Fetch history
- Pagination/infinite scroll support

**Sorting/Filtering Options:**
- By date (newest/oldest)
- By game type
- By result (wins/losses)

---

### 11. Statistics `/statistics`
**Navigation:** Via menu or settings
**Components:**
- Stats cards:
  - Total bets
  - Total won
  - Total lost
  - Win rate percentage
- Game-specific breakdown
  - Win/loss per game
  - Progress bars

**API Integration Points:**
- `getGameStats()` - All game statistics
- Real-time stats updates

---

### 12. Profile `/profile`
**Navigation:** Via account page
**Components:**
- Avatar upload/change
- Name input
- Email input
- Phone input
- Security section:
  - Change password link
  - 2FA setup link
- Save changes button

**State Management:**
- Local: name, email, phone
- Validation: email format

**API Integration Points:**
- `updateProfile(data)` - Save changes
- `validateEmail(email)` - Check availability
- `changePassword(old, new)` - Password change
- `setup2FA()` - Enable 2FA

---

### 13. Rewards `/rewards`
**Navigation:** Via account page
**Components:**
- Total rewards earned display
- Reward cards showing:
  - Reward name
  - Amount
  - Progress bar
  - Claim button

**Reward Types:**
- Daily bonus
- Weekly reward
- Monthly bonus
- VIP exclusive

**API Integration Points:**
- `getRewards()` - Fetch all rewards
- `claimReward(rewardId)` - Claim specific reward

---

### 14. Promotions `/promotions`
**Navigation:** Via home action button, bottom nav
**Components:**
- Promo code cards showing:
  - Title
  - Description
  - Promo code (copyable)
  - Expiration time
  - Copy button

**API Integration Points:**
- `getPromotions(limit=10)` - All active promos
- `validatePromoCode(code)` - Check validity
- `applyPromoCode(code)` - Apply to account

**Features:**
- Copy to clipboard
- Share promo codes

---

### 15. Bonuses `/bonuses`
**Navigation:** Via home action button
**Components:**
- Bonus cards with:
  - Bonus name
  - Amount/percentage
  - Description
  - Status (Claimed/Available/Locked)
  - Claim button

**Bonus Types:**
- Welcome bonus
- Daily bonus
- Reload bonus
- VIP bonus

**API Integration Points:**
- `getBonuses()` - All available bonuses
- `claimBonus(bonusId)` - Claim specific bonus

---

### 16. Leaderboard `/leaderboard`
**Navigation:** Via menu/settings
**Components:**
- Top 8 players list
- Each entry shows:
  - Rank (1-8)
  - Player name
  - Total winnings
  - Badge/trophy emoji

**API Integration Points:**
- `getLeaderboard(limit=8)` - Top players
- Real-time ranking updates via WebSocket

---

### 17. Live Games `/live-games`
**Navigation:** Via bottom nav live button
**Components:**
- Live game cards showing:
  - Game name
  - Player count
  - Max win amount
  - Status (Starting in Xs / Live Now!)
  - Join button

**API Integration Points:**
- `getLiveGames()` - Active game sessions
- Real-time updates for player counts
- Auto-refresh every 5 seconds

---

### 18. Referral `/referral`
**Navigation:** Via bottom nav referral button
**Components:**
- Referral earning card ($50 per friend)
- User referral code (copyable)
- Share buttons:
  - Mobile
  - Email
  - Link
  - SMS
- Stats cards:
  - Friends referred
  - Total earned
  - Active friends
- Recent referrals list

**API Integration Points:**
- `getReferralStats()` - Get referral data
- `generateReferralCode()` - Create unique code
- `trackReferral(code)` - When friend signs up
- `shareReferral(method, code)` - Track shares

**Features:**
- Copy referral code to clipboard
- Share via multiple channels
- Track referral commission

---

### Additional Pages:

**Settings `/settings`
- Notification toggle
- Dark mode toggle
- Language selector
- Self-exclusion
- Deposit limits
- Delete account option

**Help `/help`
- FAQ section with expandable items
- Live chat link
- Email support link
- Contact information

---

## Button Navigation Map

### Home Page Buttons
- **Play** → `/games`
- **History** → `/history`
- **Bonuses** → `/bonuses`
- **Promotions** → `/promotions`

### Popular Games (Home Page)
- **Tower** → `/games/tower`
- **Double** → `/games/double`
- **Wingo** → `/games/wingo`
- **Roulette** → `/games/roulette`
- **View all** → `/games`

### Bottom Navigation
- **Home** → `/`
- **Games** → `/games`
- **Deposit** → `/deposit` (Center button)
- **Live** → `/live-games`
- **Profile** → `/account`

### Account Page
- **Deposit** → `/deposit`
- **Withdraw** → `/withdraw`
- **Profile Settings** → `/profile`
- **My Rewards** → `/rewards`

### Side Navigation (from GamePageWrapper back button)
- **Back** → Previous page or `/`

---

## API Endpoint Summary

### Critical APIs
- `getBalance()` - Used on: Home, Deposit, Withdraw, All game pages
- `getUser()` - Used on: Account, Profile
- `startGame(type, bet)` - Used on: All game pages
- `submitGameResult(id, result)` - Used on: All game pages
- `getTransactions()` - Used on: History
- `getGameStats()` - Used on: Statistics, Home
- `getRewards()` - Used on: Rewards, Home
- `getBonuses()` - Used on: Bonuses, Home
- `getPromotions()` - Used on: Promotions, Home
- `getLeaderboard()` - Used on: Leaderboard
- `getLiveGames()` - Used on: Live Games
- `getReferralStats()` - Used on: Referral

### Secondary APIs
- `deposit()` - Deposit page
- `withdraw()` - Withdraw page
- `updateProfile()` - Profile page
- `claimReward()` - Rewards page
- `claimBonus()` - Bonuses page
- `validatePromoCode()` - Promotions page

---

## Accessibility Features
- All pages have back button navigation
- BottomNav provides consistent navigation
- Clear visual feedback on active states
- Proper contrast ratios
- Semantic HTML structure
- ARIA labels on interactive elements

---

## Performance Considerations
- Lazy load game pages
- Cache balance and user data
- Debounce API calls on form inputs
- Implement infinite scroll for history/transactions
- Use React Query or SWR for data fetching
- Image optimization for game thumbnails

---

## Mobile Optimization
- iPhone frame preview shows proper scaling
- Touch-friendly button sizes (48x48px minimum)
- Optimized viewport settings
- No horizontal scrolling
- Proper z-index layering for popups/modals

