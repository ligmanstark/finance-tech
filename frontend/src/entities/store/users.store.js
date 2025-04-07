import { defineStore } from 'pinia'

export const UsersApi = defineStore('users', {
  actions: {
    async getUsers() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + import.meta.env.VITE_API_USERS,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
            },
          },
        )
        const json = await response.json()
        console.log(json)
      } catch (err) {
        console.error(err)
      }
    },
  },
})
