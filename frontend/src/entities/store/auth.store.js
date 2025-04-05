import { defineStore } from 'pinia'
import { registerSuccess } from '@/shared/phrases.js'

export const Auth = defineStore('auth', {
  state: () => ({
    intervalId: null,
    nonAuth: true,
  }),
  actions: {
    async postRegistration(credentials) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_AUTH_URL + import.meta.env.VITE_API_AUTH_REGISTRATION,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          },
        )
        const json = await response.json()
        return registerSuccess
      } catch (error) {
        console.error(error)
      }
    },
    async postLogin(credentials) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_AUTH_URL + import.meta.env.VITE_API_AUTH_LOGIN,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          },
        )
        const data = await response.json()
        this.nonAuth = false
        return localStorage.setItem('user', JSON.stringify(data))
      } catch (error) {
        console.error(error)
      }
    },
    async postLogout() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_AUTH_URL + import.meta.env.VITE_API_AUTH_LOGOUT,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: JSON.parse(localStorage.getItem('user')).refreshToken,
            }),
          },
        )
        const json = await response.json()
        this.nonAuth = true
        this.stopAutoRefresh()
        return localStorage.removeItem('user')
      } catch (error) {
        console.error(error)
      }
    },
    async postRefreshToken() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_AUTH_URL + import.meta.env.VITE_API_AUTH_REFRESH_TOKEN,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: JSON.parse(localStorage.getItem('user')).refreshToken,
            }),
          },
        )
        const data = await response.json()
        this.nonAuth = false
        return localStorage.setItem('user', JSON.stringify(data))
      } catch (error) {
        console.error(error)
      }
    },
    autoRefreshToken() {
      if (this.intervalId) {
        return
      }

      this.postRefreshToken()

      this.intervalId = setInterval(() => {
        this.postRefreshToken()
      }, 30000)
    },

    stopAutoRefresh() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
        this.nonAuth = true
      }
    },
  },
})
