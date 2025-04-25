import { defineStore } from 'pinia'

export const useDaily = defineStore('daily', {
  state: () => ({
    dailyData: [],
  }),
  actions: {
    async getDaily() {
      try {
        const response = await fetch(import.meta.env.VITE_API_DAILY)
        const data = await response.json()

        this.dailyData = Object.values(data.Valute)
      } catch (error) {
        console.error('Ошибка при загрузке daily:', error)
      }
    },
  },
})
