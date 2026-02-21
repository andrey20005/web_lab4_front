import { defineStore } from 'pinia'
import { timeService } from '@/services/timeService'

export const useTimeStore = defineStore('time', {
  state: () => ({
    currentTime: null,
    timezone: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async loadTime() {
      this.loading = true
      this.error = null
      
      try {
        const data = await timeService.getCurrentTime()
        this.currentTime = data.time
        this.timezone = data.timezone
      } catch (err) {
        this.error = 'Не удалось загрузить время'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})