import { useEffect, useRef } from 'react'
import NotificationList from './NotificationList'
import { useNotifications } from '../hooks/useNotifications'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function NotificationPanel({ isOpen, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const {
    notifications,
    connected,
    markAsRead,
    markAllAsRead,
    clearNotifications
  } = useNotifications()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-gray-500/25" />
      
      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-96 bg-gray-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <NotificationList
            notifications={notifications}
            onMarkRead={markAsRead}
            onMarkAllRead={markAllAsRead}
            onClearAll={clearNotifications}
            connected={connected}
          />
        </div>
      </div>
    </>
  )
}