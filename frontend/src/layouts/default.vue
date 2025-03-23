<script>
import AppHeader from '@/layouts/header.vue'
import AppFooter from '@/layouts/footer.vue'
export default {
  name: 'AppLayout',
  components: { AppHeader,AppFooter }
}
</script>

<template>
  <div>
    <AppHeader/>
    <main>
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<style scoped>

</style>
