<template>
  <header
    class="text-center z-[999999] fixed top-0 left-0 w-full bg-green-400 px-6 py-5 text-white"
  >
    <div class="flex justify-between items-center">
      <div />
      <h1 class="font-bold text-xl leading-tight">
        <RouterLink to="/"> finance-tech app </RouterLink>
      </h1>
      <Button
        v-slot="slotProps"
        size="small"
        variant="outlined"
        class="w-20 [&]:text-white [&]:border"
        asChild
      >
        <RouterLink
          class="w-20 rounded-sm hover:bg-white hover:text-green-400 hover:border-green-400 text-white border"
          :class="slotProps"
          to="/login"
          >Войти</RouterLink
        >
      </Button>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
}
</script>
