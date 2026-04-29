export type Notification = {
  id: number
  message: string
  read: boolean
  timestamp: Date
  type?: 'info' | 'warning' | 'success' | 'error'
}