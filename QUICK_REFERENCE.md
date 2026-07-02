# Joybeto Frontend - Quick Reference Guide

## 🚀 Quick Start (5 minutes)

```bash
# Install & Run
pnpm install
pnpm dev

# Open browser
http://localhost:3000
```

## 📱 18 Pages at a Glance

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 1 | Home | `/` | Landing page with games |
| 2 | Games | `/games` | All games list |
| 3 | Tower | `/games/tower` | Tower game |
| 4 | Double | `/games/double` | Double game |
| 5 | Wingo | `/games/wingo` | Wingo game |
| 6 | Roulette | `/games/roulette` | Roulette game |
| 7 | Account | `/account` | User overview |
| 8 | Deposit | `/deposit` | Add funds |
| 9 | Withdraw | `/withdraw` | Withdraw funds |
| 10 | Profile | `/profile` | Edit profile |
| 11 | History | `/history` | Transaction history |
| 12 | Statistics | `/statistics` | Game stats |
| 13 | Rewards | `/rewards` | Earned rewards |
| 14 | Bonuses | `/bonuses` | Available bonuses |
| 15 | Promotions | `/promotions` | Promo codes |
| 16 | Leaderboard | `/leaderboard` | Top players |
| 17 | Live Games | `/live-games` | Active games |
| 18 | Referral | `/referral` | Invite friends |

**Bonus:** Settings, Help, + more

## 🎨 Colors Used

```css
/* Primary */
--primary: #1a6ef5 (Blue)
--accent: #f5a623 (Orange)

/* Backgrounds */
--bg-dark: #050510 (Darkest)
--bg-surface: #0d0d1a (Dark)
--bg-elevated: #1a1a2e

/* Text */
--text-primary: #ffffff (White)
--text-secondary: #8888aa (Gray)

/* Status */
--success: #10b981 (Green)
--danger: #f52d2d (Red)
```

## 🔗 Navigation Quick Map

```
BottomNav (Always Visible)
├─ Home (/)
├─ Games (/games)
├─ Deposit (/deposit) [CENTER]
├─ Live (/live-games)
└─ Profile (/account)

Home Page Action Buttons
├─ Play → /games
├─ History → /history
├─ Bonuses → /bonuses
└─ Promotions → /promotions

Popular Games (Home)
├─ Tower → /games/tower
├─ Double → /games/double
├─ Wingo → /games/wingo
└─ Roulette → /games/roulette

Account Menu
├─ Deposit → /deposit
├─ Withdraw → /withdraw
├─ Profile → /profile
└─ Rewards → /rewards
```

## 📁 Key Files to Edit

```
lib/api.ts          ← Add API calls here
lib/utils.ts        ← Helper functions
app/globals.css     ← Theme colors
components/         ← UI components
app/[route]/page.tsx ← Individual pages
```

## 🔌 Critical API Functions to Implement

```typescript
// Authentication
async function login(email: string, password: string)
async function logout()

// Balance & User
async function getBalance()
async function getUser()

// Games
async function startGame(gameType: string, betAmount: number)
async function submitGameResult(gameId: string, result: any)

// Wallet
async function deposit(amount: number, method: string)
async function withdraw(amount: number, details: any)

// Data
async function getTransactions(limit: number)
async function getGameStats()
async function getRewards()
async function getBonuses()
```

## 📊 Component Structure

```
Page (e.g., /games/tower)
├─ GamePageWrapper
│  ├─ Back Button → Previous page
│  ├─ Main Content → Page-specific UI
│  └─ BottomNav → Navigation bar
│
Content Examples:
├─ Game Pages: Bet controls + Play button
├─ Account Page: User info + Menu buttons
├─ Wallet Pages: Form inputs + Submit button
└─ Data Pages: Lists + Real-time updates
```

## 🎮 Game Page Template

All game pages follow this structure:
```tsx
<GamePageWrapper title="Game Name">
  <div className="space-y-6">
    {/* Game Info */}
    {/* Balance Display */}
    {/* Game Board */}
    {/* Bet Controls */}
    {/* Play Button */}
  </div>
</GamePageWrapper>
```

## 🔐 Authentication Setup

1. **Create login/signup pages**
   ```
   app/login/page.tsx
   app/signup/page.tsx
   ```

2. **Add auth context**
   ```
   lib/context/AuthContext.tsx
   ```

3. **Protect routes** (middleware)
   ```
   app/middleware.ts
   ```

## 💾 State Management Pattern

```typescript
// Local state (individual pages)
const [balance, setBalance] = useState(0)
const [betAmount, setBetAmount] = useState(100)

// Global state (consider adding)
const [user, setUser] = useContext(UserContext)
const [balance, setBalance] = useContext(WalletContext)
```

## 🔄 Form Submission Pattern

```typescript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Show loading
  setLoading(true)
  
  try {
    // Call API
    const result = await apiFunction(data)
    
    // Update state
    setSuccess(true)
    
  } catch (error) {
    setError(error.message)
  } finally {
    setLoading(false)
  }
}
```

## 📝 Form Validation

```typescript
// Check inputs before submit
const validate = () => {
  if (!amount) return "Amount required"
  if (amount < 10) return "Minimum $10"
  if (amount > balance) return "Insufficient funds"
  return null
}

const error = validate()
if (error) return <p>{error}</p>
```

## 🎨 Styling Patterns

```tsx
// Button
className="bg-[#1a6ef5] hover:bg-[#0d4bc4] text-white font-bold py-3 rounded-xl"

// Card
className="bg-[#1a1a2e] rounded-xl p-4 border border-[#2a2a45]"

// Text
className="text-white" // Primary
className="text-[#8888aa]" // Secondary
className="text-[#f5a623]" // Accent
```

## 🚦 Common Tasks

### Display Balance
```tsx
const [balance, setBalance] = useState(0)

useEffect(() => {
  getBalance().then(setBalance)
}, [])

return <p>${balance}</p>
```

### Submit Form
```tsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await deposit(amount, method)
  // Update balance
}
```

### Navigate to Page
```tsx
// Already done via Link components
<Link href="/games/tower">Play Tower</Link>
```

### Show Loading
```tsx
{loading && <p>Loading...</p>}
{error && <p className="text-red-600">{error}</p>}
{success && <p className="text-green-600">Success!</p>}
```

## 🧪 Testing Pages Locally

1. **Visit home:** `http://localhost:3000`
2. **Click buttons:** All navigation should work
3. **Fill forms:** All inputs should be functional
4. **Check layout:** Should display in iPhone frame
5. **Check mobile:** Responsive design working

## 📚 Documentation Reference

| Doc | Purpose | Read Time |
|-----|---------|-----------|
| DELIVERY_SUMMARY.txt | Overview | 10 min |
| QUICK_REFERENCE.md | This file | 5 min |
| PAGES_MAP.md | Detailed pages | 20 min |
| DEVELOPER_GUIDE.md | Integration guide | 30 min |
| API_INTEGRATION.md | API specs | 30 min |

## ⚡ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Build fails | `pnpm install` first |
| Page not found | Check route spelling in app/ |
| Styling looks wrong | Clear browser cache |
| API calls fail | Check API base URL |
| State not updating | Use `useState` + `useEffect` |

## 🎯 Integration Phases

**Phase 1: Setup (30 min)**
- Install dependencies
- Set API base URL
- Review documentation

**Phase 2: Auth (2-3 hours)**
- Create login page
- Implement JWT handling
- Add protected routes

**Phase 3: APIs (3-4 hours)**
- Implement `getBalance()`
- Implement `getUser()`
- Connect game APIs

**Phase 4: Data (2-3 hours)**
- Wire up all data endpoints
- Add loading states
- Show error messages

**Phase 5: Polish (2-3 hours)**
- Test all workflows
- Fix bugs
- Optimize performance

## 🚀 Deploy Command

```bash
# Build for production
pnpm build

# Deploy to Vercel
vercel deploy

# Or setup CI/CD with GitHub
# Push to repo, Vercel auto-deploys
```

## 💡 Pro Tips

1. **Use TypeScript** - Catch errors early
2. **Test often** - Run `pnpm dev` frequently
3. **Check console** - No errors = good sign
4. **Read docs** - They're comprehensive
5. **Copy patterns** - Similar pages use same structure

## 🎓 Learning Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind:** https://tailwindcss.com
- **TypeScript:** https://typescriptlang.org

## 📞 Support

- **Frontend Issues:** Check React components
- **API Issues:** Check https://api.joybeto.com/api/docs/
- **Styling Issues:** Check Tailwind classes
- **Routing Issues:** Check app/ folder structure

## ✅ Before Going Live

- [ ] All pages accessible
- [ ] No console errors
- [ ] Navigation working
- [ ] Forms submitting
- [ ] Balance updating
- [ ] Responsive on mobile
- [ ] Dark theme consistent

## 🏁 Final Checklist

- [x] 18 pages created
- [x] All navigation wired
- [x] All forms prepared
- [x] Documentation complete
- [x] Build successful
- [ ] API integrated (your task)
- [ ] Testing complete (your task)
- [ ] Deployed (your task)

---

**Ready to build?** Follow FRONTEND_COMPLETE.md for step-by-step instructions!

**Questions?** Check the detailed documentation files.

**Let's go!** 🚀
