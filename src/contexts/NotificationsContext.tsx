import { createContext, useContext } from 'react'
import React from 'react'
import { useNotifications } from '../hooks/useNotifications'
import type { Notification } from '../types/notification'

interface NotificationsContextType {
  notifications: Notification[]
  connected: boolean
  unreadCount: number
  markAsRead: (id: number) => void
  markAllAsRead: () => void
  clearNotifications: () => void
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined)

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const notificationsData = useNotifications()

  return (
    <NotificationsContext.Provider value={notificationsData}>
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotificationsContext() {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error('useNotificationsContext must be used within a NotificationsProvider')
  }
  return context
}
