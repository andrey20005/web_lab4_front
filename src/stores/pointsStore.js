import { defineStore } from 'pinia'
import { pointsService } from '@/services/pointsService'

export const usePointsStore = defineStore('points', {
  state: () => ({
    newPoint: {
        x: 0,
        y: 0,
        r: 1,
    },
    points: [],
    loading: false,
    error: null
  }),

  actions: {
    async loadPoints() {
      this.loading = true
      this.error = null

      try {
        this.points = await pointsService.getAll()
      } catch (err) {
        this.error = 'Не удалось загрузить точки'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    async addPoint(point) {
      try {
        const created = await pointsService.create(point)
        this.points.unshift(created) // Добавляем в начало списка
      } catch (err) {
        this.error = 'Не удалось создать точку'
        throw err
      }
    },

    async removePoint(id) {
      try {
        await pointsService.delete(id)
        this.points = this.points.filter(p => p.id !== id)
      } catch (err) {
        this.error = 'Не удалось удалить точку'
        throw err
      }
    }
  }
})