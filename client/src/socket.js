import io from 'socket.io-client'
import { BACKEND_URL } from './api'

export const connectSocket = () => {
  io(BACKEND_URL)
}
