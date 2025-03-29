<template>
  <footer class="block bottom-0 left-0 w-full bg-green-400 px-6 py-5 text-white">
    <nobr class="flex items-center"
      >© {{ getCurrentYear }} Miduway &nbsp;<i class="pi pi-heart-fill text-2xl" />
    </nobr>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
