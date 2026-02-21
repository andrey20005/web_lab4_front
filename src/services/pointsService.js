import api from './api'

export const pointsService = {
  async getAll() {
    const response = await api.get('/points')
    return response.data
  },

  async getById(id) {
    const response = await api.get(`/points/${id}`)
    return response.data
  },

  async create(point) {
    const response = await api.post('/points', point)
    return response.data
  },

  async update(id, point) {
    const response = await api.put(`/points/${id}`, point)
    return response.data
  },

  async delete(id) {
    await api.delete(`/points/${id}`)
  }
}