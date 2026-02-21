import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
        accessToken: null,
    }),

    actions: {
        login(user) {
            this.isAuthenticated = true
            this.user = user
        },
        logout() {
            this.isAuthenticated = false
            this.user = null
        }
    }
})
