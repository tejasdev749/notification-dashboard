import { useState } from "react"
import type { Notification } from "../types/notification"
import NotificationItem from "./NotificationItem"

type Props = {
  notifications: Notification[]
  onMarkRead: (id: number) => void
  onMarkAllRead: () => void
  onClearAll: () => void
  connected: boolean
}

export default function NotificationList({
  notifications,
  onMarkRead,
  onMarkAllRead,
  onClearAll,
  connected
}: Props) {
  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread")
  const unreadCount = notifications.filter(n => !n.read).length

  const filteredNotifications = activeTab === "unread" 
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.read)

  return (
    <div className="px-4 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-xs text-gray-500">
                {connected ? 'Connected' : 'Reconnecting...'}
              </span>
            </div>
          </div>
          {notifications.length > 0 && (
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={onMarkAllRead}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                >
                  Mark all read
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("unread")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "unread"
              ? "text-blue-600 border-blue-600"
              : "text-gray-900 border-transparent"
          }`}
        >
          Unread
        </button>
        <button
          onClick={() => setActiveTab("read")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "read"
              ? "text-blue-600 border-blue-600"
              : "text-gray-900 border-transparent"
          }`}
        >
          Read
        </button>
      </div>

      {/* Notifications */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-6h5v6z" />
              </svg>
            </div>
            <p className="text-sm font-medium">No {activeTab} notifications</p>
            <p className="text-xs text-center mt-1">
              {activeTab === "unread" ? "You're all caught up!" : "No read notifications yet"}
            </p>
          </div>
        ) : (
          <div>
            {filteredNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkRead={onMarkRead}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}