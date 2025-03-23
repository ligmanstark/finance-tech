<template>
  <div id="app">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from '@/layouts/default.vue'

export default {
  name: 'App',
  components: { AppLayout },
}
</script>
