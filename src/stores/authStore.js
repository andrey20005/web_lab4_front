import { defineStore } from 'pinia'
import { authService } from '@/services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
        accessToken: null,
    }),

    actions: {
        async login(username, password) {
            try {
                const response = await authService.login(username, password)
                
                this.accessToken = response.token   
                this.user = response.user.username
                this.isAuthenticated = true
                
                // Сохраняем в localStorage для восстановления после перезагрузки
                localStorage.setItem('accessToken', response.token)
                localStorage.setItem('user', username)
                
                return response
            } catch (error) {
                throw error
            }
        },
        async register(username, password) {
            const response = await authService.register(username, password)
            return response
        },
        async logout() {
            await authService.logout()
            
            this.isAuthenticated = false
            this.user = null
            this.accessToken = null
        },

        // Восстановление состояния при перезагрузке страницы
        restoreAuth() {
            try {
                const token = localStorage.getItem('accessToken')
                const user = localStorage.getItem('user')
                
                if (token && user) {
                    this.accessToken = token
                    this.user = user
                    this.isAuthenticated = true
                }
            } catch (error) {
                this.logout()
            }
        }
    }
})
