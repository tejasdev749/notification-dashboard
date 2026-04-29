import type { Notification } from "../types/notification"

type Props = {
  notification: Notification
  onMarkRead: (id: number) => void
}

const getTypeColor = (type?: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'error':
      return 'bg-red-100 text-red-800 border-red-200'
    default:
      return 'bg-blue-100 text-blue-800 border-blue-200'
  }
}

const getTypeIcon = (type?: string) => {
  switch (type) {
    case 'success':
      return '✓'
    case 'warning':
      return '⚠'
    case 'error':
      return '✕'
    default:
      return 'ℹ'
  }
}

export default function NotificationItem({ notification, onMarkRead }: Props) {
  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`
    return `${Math.floor(minutes / 1440)}d ago`
  }

  return (
    <div
      className={`p-4 border-b border-gray-50 transition-colors rounded-3xl ${
        !notification.read ? 'bg-sky-50 ' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          {/* <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getTypeColor(notification.type)}`}>
            {getTypeIcon(notification.type)}
          </div> */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm ${!notification.read ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
              {notification.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {formatTime(notification.timestamp)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!notification.read && (
            <>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <button
              title="Mark as read"
                onClick={() => onMarkRead(notification.id)}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Mark as read
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}