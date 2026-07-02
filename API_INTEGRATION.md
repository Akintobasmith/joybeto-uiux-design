# Joybeto Frontend - API Integration Guide

This document provides guidance on integrating the Joybeto frontend with the backend API at `https://api.joybeto.com/api/docs/`

## Overview

The Joybeto frontend is a modular React application where each component is designed to integrate with specific API endpoints. This guide maps components to their corresponding API endpoints and provides integration examples.

## Component-to-API Mapping

### 1. Header Component
**File**: `components/Header.tsx`

**Current State**: Static data showing:
- Notification count (3)
- User profile initials (SA)

**API Integration Points**:
```typescript
// Fetch user profile
GET /api/user/profile
Response: {
  id: string
  name: string
  avatar: string
  initials: string
  notifications: number
}

// Fetch notifications
GET /api/notifications
Response: {
  count: number
  items: Notification[]
}
```

**Integration Example**:
```typescript
'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [notifications, setNotifications] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken')
      
      // Fetch notifications
      const notifRes = await fetch('https://api.joybeto.com/api/notifications', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const notifData = await notifRes.json()
      setNotifications(notifData.count)

      // Fetch user profile
      const userRes = await fetch('https://api.joybeto.com/api/user/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const userData = await userRes.json()
      setUser(userData)
    }

    fetchData()
  }, [])

  return (
    // Render with dynamic data
  )
}
```

### 2. WalletCard Component
**File**: `components/WalletCard.tsx`

**Current State**: Static balance "₦ 25,430.50"

**API Integration Points**:
```typescript
// Get wallet balance
GET /api/wallet/balance
Response: {
  balance: number
  currency: string
  lastUpdated: timestamp
}

// POST Deposit request
POST /api/wallet/deposit
Request: { amount: number }
Response: { transactionId: string, status: string }

// POST Withdraw request
POST /api/wallet/withdraw
Request: { amount: number }
Response: { transactionId: string, status: string }
```

**Integration Example**:
```typescript
'use client'
import { useState, useEffect } from 'react'

export default function WalletCard() {
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchBalance()
  }, [])

  const fetchBalance = async () => {
    const token = localStorage.getItem('authToken')
    const res = await fetch('https://api.joybeto.com/api/wallet/balance', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const data = await res.json()
    setBalance(data.balance)
  }

  const handleDeposit = async () => {
    setLoading(true)
    const token = localStorage.getItem('authToken')
    const res = await fetch('https://api.joybeto.com/api/wallet/deposit', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 1000 })
    })
    const data = await res.json()
    if (data.status === 'success') {
      await fetchBalance()
    }
    setLoading(false)
  }

  return (
    // Render with handleDeposit and balance
  )
}
```

### 3. ActionButtons Component
**File**: `components/ActionButtons.tsx`

**Current State**: Static buttons with navigation to different sections

**API Integration Points**:
```typescript
// Get action buttons status/availability
GET /api/actions/status
Response: {
  play: { enabled: true, badge: number | null }
  transactions: { enabled: true }
  vipClub: { enabled: true, userStatus: string }
  promotions: { enabled: true, activeCount: number }
}
```

**Button Actions**:
- **Play**: Navigate to `/games` or `/play` route
- **Transactions**: Navigate to `/transactions` - Fetch from `GET /api/transactions`
- **VIP Club**: Navigate to `/vip` - Fetch from `GET /api/vip/status`
- **Promotions**: Navigate to `/promotions` - Fetch from `GET /api/promotions`

### 4. PopularGames Component
**File**: `components/PopularGames.tsx`

**Current State**: Static 4 games (Tower, Double, Wingo, Roulette)

**API Integration Points**:
```typescript
// Get popular/featured games
GET /api/games/popular?limit=4
Response: {
  games: [
    {
      id: string
      name: string
      emoji: string
      gradient: string
      minEntry: number
      maxWin: number
      description: string
    }
  ]
}

// Play a game
POST /api/games/play
Request: { gameId: string, amount: number }
Response: { sessionId: string, gameUrl: string }
```

**Integration Example**:
```typescript
'use client'
import { useEffect, useState } from 'react'

export default function PopularGames() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    const token = localStorage.getItem('authToken')
    const res = await fetch('https://api.joybeto.com/api/games/popular?limit=4', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const data = await res.json()
    setGames(data.games)
  }

  const playGame = async (gameId: string, amount: number) => {
    const token = localStorage.getItem('authToken')
    const res = await fetch('https://api.joybeto.com/api/games/play', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ gameId, amount })
    })
    const data = await res.json()
    window.location.href = data.gameUrl
  }

  return (
    // Render games with playGame handler
  )
}
```

### 5. RecentWinners Component
**File**: `components/RecentWinners.tsx`

**Current State**: Static 2 winners

**API Integration Points**:
```typescript
// Get recent winners
GET /api/winners/recent?limit=2
Response: {
  winners: [
    {
      id: string
      name: string
      initials: string
      amount: number
      game: string
      gameEmoji: string
      timestamp: ISO8601
      avatar_gradient: string
    }
  ]
}
```

**Integration Example**:
```typescript
'use client'
import { useEffect, useState } from 'react'

export default function RecentWinners() {
  const [winners, setWinners] = useState([])

  useEffect(() => {
    fetchWinners()
  }, [])

  const fetchWinners = async () => {
    const res = await fetch('https://api.joybeto.com/api/winners/recent?limit=2')
    const data = await res.json()
    setWinners(data.winners)
  }

  return (
    // Render winners with dynamic data
  )
}
```

### 6. SpecialBonus Component
**File**: `components/SpecialBonus.tsx`

**Current State**: Static "100% BONUS" promotion

**API Integration Points**:
```typescript
// Get active promotions
GET /api/promotions/active
Response: {
  promotions: [
    {
      id: string
      title: string
      description: string
      bonus_text: string
      cta_text: string
      cta_url: string
    }
  ]
}
```

### 7. BottomNav Component
**File**: `components/BottomNav.tsx`

**Current State**: Navigation UI with static items

**Integration**:
- Games: Route to `/games`
- Share/Earn: Route to `/refer`
- Deposit: Route to `/wallet/deposit`
- Trust: Route to `/trust`
- Profile: Route to `/profile`

## Authentication Flow

### 1. Setup Authentication Context
Create `lib/auth-context.tsx`:
```typescript
'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken')
    if (savedToken) {
      setToken(savedToken)
      fetchUser(savedToken)
    }
  }, [])

  const fetchUser = async (token) => {
    const res = await fetch('https://api.joybeto.com/api/user/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const data = await res.json()
    setUser(data)
  }

  const login = async (email, password) => {
    const res = await fetch('https://api.joybeto.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    localStorage.setItem('authToken', data.token)
    setToken(data.token)
    setUser(data.user)
    return data
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
```

### 2. Update Root Layout
Add provider to `app/layout.tsx`:
```typescript
import { AuthProvider } from '@/lib/auth-context'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
```

## Error Handling

All API calls should include error handling:
```typescript
try {
  const res = await fetch(endpoint, { headers })
  if (!res.ok) {
    if (res.status === 401) {
      // Handle unauthorized - redirect to login
      window.location.href = '/login'
    }
    throw new Error(`API error: ${res.status}`)
  }
  const data = await res.json()
  return data
} catch (error) {
  console.error('API call failed:', error)
  // Show error notification to user
}
```

## Best Practices

1. **Token Management**: Store auth tokens in secure httpOnly cookies (not localStorage)
2. **Request Caching**: Use React Query or SWR for efficient data fetching
3. **Error States**: Always handle loading and error states in components
4. **Rate Limiting**: Be aware of API rate limits and implement appropriate backoff
5. **Security**: Never expose sensitive data in client-side code

## Testing the Integration

1. Use Postman or similar tool to test API endpoints first
2. Test with mock data before connecting to live API
3. Verify token refresh and expiration handling
4. Test error scenarios and edge cases
5. Monitor browser console for network errors

## Next Steps

1. Implement authentication system
2. Connect each component to its corresponding API endpoint
3. Add error handling and loading states
4. Implement real-time data updates using WebSockets if needed
5. Add analytics and tracking

For more details on API endpoints, visit: https://api.joybeto.com/api/docs/
