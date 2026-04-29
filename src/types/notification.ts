export type Notification = {
  id: number
  message: string
  read: boolean
  timestamp: Date
  type?: 'reminder' | 'launch' | 'offer'
}