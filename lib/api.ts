/**
 * API Utility Functions for Joybeto Frontend
 * 
 * This file contains reusable functions for making API calls to the Joybeto backend.
 * Replace the API_BASE_URL with your actual API endpoint.
 */

const API_BASE_URL = 'https://api.joybeto.com/api'

// Error handling class
export class APIError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string
  ) {
    super(message)
  }
}

/**
 * Get auth token from storage
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('authToken')
}

/**
 * Make API request with error handling
 */
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken()
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('authToken')
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
      }

      const error = await response.json().catch(() => ({}))
      throw new APIError(
        response.status,
        error.code || 'UNKNOWN_ERROR',
        error.message || `API Error: ${response.status}`
      )
    }

    return await response.json()
  } catch (error) {
    if (error instanceof APIError) {
      throw error
    }
    throw new APIError(0, 'NETWORK_ERROR', 'Network request failed')
  }
}

// ============================================
// Authentication
// ============================================

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: UserProfile
}

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  return apiCall<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export async function logout(): Promise<void> {
  localStorage.removeItem('authToken')
  if (typeof window !== 'undefined') {
    window.location.href = '/login'
  }
}

// ============================================
// User Profile
// ============================================

export interface UserProfile {
  id: string
  name: string
  email: string
  initials: string
  avatar?: string
  createdAt: string
}

export async function fetchUserProfile(): Promise<UserProfile> {
  return apiCall<UserProfile>('/user/profile')
}

export async function updateUserProfile(
  updates: Partial<UserProfile>
): Promise<UserProfile> {
  return apiCall<UserProfile>('/user/profile', {
    method: 'PUT',
    body: JSON.stringify(updates),
  })
}

// ============================================
// Wallet
// ============================================

export interface WalletBalance {
  balance: number
  currency: string
  lastUpdated: string
}

export async function fetchWalletBalance(): Promise<WalletBalance> {
  return apiCall<WalletBalance>('/wallet/balance')
}

export interface DepositRequest {
  amount: number
  method?: string
}

export interface TransactionResponse {
  transactionId: string
  status: 'pending' | 'success' | 'failed'
  message: string
}

export async function deposit(request: DepositRequest): Promise<TransactionResponse> {
  return apiCall<TransactionResponse>('/wallet/deposit', {
    method: 'POST',
    body: JSON.stringify(request),
  })
}

export interface WithdrawRequest {
  amount: number
  method?: string
}

export async function withdraw(request: WithdrawRequest): Promise<TransactionResponse> {
  return apiCall<TransactionResponse>('/wallet/withdraw', {
    method: 'POST',
    body: JSON.stringify(request),
  })
}

// ============================================
// Games
// ============================================

export interface Game {
  id: string
  name: string
  emoji: string
  gradient: string
  minEntry: number
  maxWin: number
  description: string
}

export interface GamesResponse {
  games: Game[]
}

export async function fetchPopularGames(limit: number = 4): Promise<GamesResponse> {
  return apiCall<GamesResponse>(`/games/popular?limit=${limit}`)
}

export interface PlayGameRequest {
  gameId: string
  amount: number
}

export interface PlayGameResponse {
  sessionId: string
  gameUrl: string
}

export async function playGame(request: PlayGameRequest): Promise<PlayGameResponse> {
  return apiCall<PlayGameResponse>('/games/play', {
    method: 'POST',
    body: JSON.stringify(request),
  })
}

// ============================================
// Winners
// ============================================

export interface Winner {
  id: string
  name: string
  initials: string
  amount: number
  game: string
  gameEmoji: string
  timestamp: string
  avatar_gradient: string
}

export interface WinnersResponse {
  winners: Winner[]
}

export async function fetchRecentWinners(limit: number = 10): Promise<WinnersResponse> {
  return apiCall<WinnersResponse>(`/winners/recent?limit=${limit}`)
}

// ============================================
// Notifications
// ============================================

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'error'
  read: boolean
  timestamp: string
}

export interface NotificationsResponse {
  count: number
  items: Notification[]
}

export async function fetchNotifications(): Promise<NotificationsResponse> {
  return apiCall<NotificationsResponse>('/notifications')
}

export async function markNotificationAsRead(
  notificationId: string
): Promise<void> {
  return apiCall(`/notifications/${notificationId}/read`, {
    method: 'POST',
  })
}

// ============================================
// Transactions
// ============================================

export interface Transaction {
  id: string
  type: 'deposit' | 'withdraw' | 'bet' | 'win'
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed'
  description: string
  timestamp: string
}

export interface TransactionsResponse {
  transactions: Transaction[]
  total: number
}

export async function fetchTransactions(
  limit: number = 20,
  offset: number = 0
): Promise<TransactionsResponse> {
  return apiCall<TransactionsResponse>(
    `/transactions?limit=${limit}&offset=${offset}`
  )
}

// ============================================
// Promotions
// ============================================

export interface Promotion {
  id: string
  title: string
  description: string
  bonus_text: string
  cta_text: string
  cta_url: string
  image_url?: string
  expiresAt: string
}

export interface PromotionsResponse {
  promotions: Promotion[]
}

export async function fetchActivePromotions(): Promise<PromotionsResponse> {
  return apiCall<PromotionsResponse>('/promotions/active')
}

export async function claimPromotion(promotionId: string): Promise<TransactionResponse> {
  return apiCall<TransactionResponse>(`/promotions/${promotionId}/claim`, {
    method: 'POST',
  })
}

// ============================================
// VIP Club
// ============================================

export interface VIPStatus {
  level: 'bronze' | 'silver' | 'gold' | 'platinum'
  points: number
  nextLevelAt: number
  benefits: string[]
}

export async function fetchVIPStatus(): Promise<VIPStatus> {
  return apiCall<VIPStatus>('/vip/status')
}

// ============================================
// Share & Earn (Referral)
// ============================================

export interface ReferralData {
  referralCode: string
  referrals: number
  earnings: number
  history: ReferralHistory[]
}

export interface ReferralHistory {
  id: string
  referredUser: string
  earnedAmount: number
  timestamp: string
}

export async function fetchReferralData(): Promise<ReferralData> {
  return apiCall<ReferralData>('/referral/data')
}

// ============================================
// Trust & Security
// ============================================

export interface SecurityInfo {
  twoFactorEnabled: boolean
  lastLogin: string
  activeSessions: number
  trustedDevices: Device[]
}

export interface Device {
  id: string
  name: string
  lastActive: string
}

export async function fetchSecurityInfo(): Promise<SecurityInfo> {
  return apiCall<SecurityInfo>('/security/info')
}

// ============================================
// Helper Hook for React Components
// ============================================

import { useEffect, useState, useCallback } from 'react'

/**
 * Custom hook for fetching data
 * 
 * Usage:
 * const { data, loading, error, refetch } = useFetchAPI(
 *   () => fetchWalletBalance(),
 *   [authToken]
 * )
 */
export function useFetchAPI<T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = [],
  onError?: (error: APIError) => void
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<APIError | null>(null)

  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      const apiError = err instanceof APIError ? err : new APIError(0, 'UNKNOWN', 'An error occurred')
      setError(apiError)
      onError?.(apiError)
    } finally {
      setLoading(false)
    }
  }, [fetchFn, onError])

  useEffect(() => {
    refetch()
  }, dependencies)

  return { data, loading, error, refetch }
}
