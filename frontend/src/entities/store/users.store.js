import { defineStore } from 'pinia'

export const UsersApi = defineStore('users', {
  state: {
    users: [],
  },
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
        this.users = await response.json()
      } catch (err) {
        console.error(err)
      }
    },
  },
})
