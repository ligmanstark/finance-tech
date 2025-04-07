<template>
  <header
    class="text-center z-[999999] fixed top-0 left-0 w-full bg-green-400 px-6 py-5 text-white"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-4 flex-row">
        <svg
          width="25"
          height="25"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="30" fill="url(#grad1)" />
          <path
            d="M60 130 L60 70 L100 90 L140 60 L140 130 Z"
            fill="white"
            stroke="#ffffff"
            stroke-width="4"
          />
          <path
            d="M85 95 L85 115 M115 80 L115 115"
            stroke="#00ffcc"
            stroke-width="4"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="grad1"
              x1="0"
              y1="0"
              x2="200"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="#00b4d8" />
              <stop offset="100%" stop-color="#0077b6" />
            </linearGradient>
          </defs>
        </svg>
        <h1 class="font-bold text-xl leading-tight">
          <RouterLink to="/"> finance-tech </RouterLink>
        </h1>
      </div>
      <NavMenu />
      <div class="flex gap-2">
        <Button
          v-if="isAdmin"
          v-slot="slotProps"
          size="small"
          variant="outlined"
          class="w-20 [&]:text-white [&]:border"
          asChild
        >
          <RouterLink
            class="w-20 rounded-sm hover:bg-white hover:text-green-400 hover:border-green-400 text-white border"
            :class="slotProps"
            to="/admin-panel"
            >Админка</RouterLink
          ></Button
        >
        <Button
          v-slot="slotProps"
          size="small"
          variant="outlined"
          class="w-20 [&]:text-white [&]:border"
          asChild
        >
          <RouterLink
            v-if="isAuthCheck"
            class="w-20 rounded-sm hover:bg-white hover:text-green-400 hover:border-green-400 text-white border"
            :class="slotProps"
            to="/login"
            >Войти</RouterLink
          >
          <button
            v-else
            @click="Logout"
            class="w-20 rounded-sm hover:bg-white hover:text-green-400 hover:border-green-400 text-white border"
            :class="slotProps"
          >
            Выйти
          </button>
        </Button>
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { Auth } from '@/entities/store/auth.store.js'
import NavMenu from '@/layouts/_ui/navMenu.vue'

export default {
  name: 'AppHeader',
  components: { NavMenu },
  computed: {
    ...mapState(Auth, ['nonAuth']),
    isAuthCheck() {
      return this.nonAuth
    },
    isAdmin() {
      return (
        JSON.parse(localStorage.getItem('user')).user.role ??
        JSON.parse(localStorage.getItem('user')).user.role === 'admin'
      )
    },
  },
  methods: {
    ...mapActions(Auth, ['postLogout']),
    async Logout() {
      await this.postLogout()
    },
  },
}
</script>
