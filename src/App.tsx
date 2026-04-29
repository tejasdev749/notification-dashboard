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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Notifications</h3>
              <p className="text-blue-700 text-sm">
                Real-time Notifications
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Inbox</h3>
              <p className="text-green-700 text-sm">
                Chat Inbox
              </p>
            </div>
            
          
          </div>
        </div>
      </main>
    </div>
  )
}