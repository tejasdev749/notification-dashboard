import Navigation from './components/Navigation'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Real-Time Notification Dashboard
          </h2>
          <p className="text-gray-600 mb-6">
            Click the notification bell in the top navigation to view your notifications. 
            New notifications arrive every 5 seconds automatically.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Real-time Updates</h3>
              <p className="text-blue-700 text-sm">
                Notifications are delivered in real-time with automatic reconnection logic.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Smart Badge</h3>
              <p className="text-green-700 text-sm">
                The notification bell shows an unread count badge when you have new notifications.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Clean Interface</h3>
              <p className="text-purple-700 text-sm">
                Slide-out panel with mark as read, clear all, and connection status features.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}