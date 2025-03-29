<script>
import AppHeader from '@/layouts/header.vue'
import AppFooter from '@/layouts/footer.vue'
export default {
  name: 'AppLayout',
  components: { AppHeader, AppFooter },
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="container min-h-screen mx-auto mt-20 mb-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
