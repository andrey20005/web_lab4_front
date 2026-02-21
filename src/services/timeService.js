import api from './api'

export const timeService = {
  async getCurrentTime() {
    const response = await api.get('/time')
    return response.data
  }
}