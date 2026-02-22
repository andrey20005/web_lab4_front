import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

let router = null
export const setRouter = (r) => { router = r }

const api = axios.create({
  baseURL: 'http://localhost:8080/web4/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
        // Токен недействителен — разлогиниваем пользователя
        const authStore = useAuthStore()
        authStore.logout()
        
        // Перенаправляем на страницу логина
        if (router) {
            router.push('/login')
        } else {
            window.location.href = '/login'
        }
    }
    return Promise.reject(error)
  }
)

export default api