<template>
  <header
    class="text-center z-[999999] fixed top-0 left-0 w-full bg-green-400 px-6 py-5 text-white"
  >
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-xl leading-tight">
        <RouterLink to="/"> finance-tech app </RouterLink>
      </h1>
      <NavMenu />
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
  },
  methods: {
    ...mapActions(Auth, ['postLogout']),
    async Logout() {
      await this.postLogout()
    },
  },
}
</script>
