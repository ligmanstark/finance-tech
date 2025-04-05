<template>
  <nav :key="link.id" v-for="link in links">
    <RouterLink :to="link.to">{{ link.name }} </RouterLink>
  </nav>
</template>
<script>
import links from '@/layouts/_data/links.json'
export default {
  name: 'navMenu',
  data() {
    return {
      links: links.links,
    }
  },
}
</script>
