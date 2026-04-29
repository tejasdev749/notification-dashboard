import { useEffect, useState, useCallback } from "react"
import type { Notification } from "../types/notification"

const NOTIFICATION_MESSAGES = [
  "New message received",
  "Task completed successfully",
  "System update available",
  "New comment on your post",
  "Payment processed",
  "Weekly report ready",
  "Security alert detected",
  "Backup completed",
  "New follower added",
  "Meeting reminder"
]

const NOTIFICATION_TYPES: Array<'info' | 'warning' | 'success' | 'error'> = [
  'info', 'success', 'warning', 'error'
]

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [connected, setConnected] = useState<boolean>(true)

  const generateRandomNotification = useCallback((): Notification => {
    const randomMessage = NOTIFICATION_MESSAGES[Math.floor(Math.random() * NOTIFICATION_MESSAGES.length)]
    const randomType = NOTIFICATION_TYPES[Math.floor(Math.random() * NOTIFICATION_TYPES.length)]
    
    return {
      id: Date.now() + Math.random(),
      message: randomMessage,
      read: false,
      timestamp: new Date(),
      type: randomType
    }
  }, [])

  useEffect(() => {
    // Simulate connection status changes
    const connectionInterval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setConnected(_prev => {
        // Occasionally simulate disconnection
        if (Math.random() < 0.1) {
          return false
        }
        return true
      })
    }, 2000)

    // Simulate real-time notifications every 5 seconds
    const notificationInterval = setInterval(() => {
      if (connected) {
        const newNotification = generateRandomNotification()
        setNotifications(prev => [newNotification, ...prev])
      }
    }, 5000)

    // Auto-reconnect logic
    const reconnectInterval = setInterval(() => {
      if (!connected) {
        setConnected(true)
      }
    }, 3000)

    return () => {
      clearInterval(connectionInterval)
      clearInterval(notificationInterval)
      clearInterval(reconnectInterval)
    }
  }, [connected, generateRandomNotification])

  const markAsRead = useCallback((id: number) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    )
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    )
  }, [])

  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  const unreadCount = notifications.filter(n => !n.read).length

  return {
    notifications,
    setNotifications,
    connected,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotifications
  }
}