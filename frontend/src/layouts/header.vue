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
        size="small"
        variant="outlined"
        class="w-20 [&]:!text-white [&]:!border-white"
        label="Github"
        as="a"
        target="_blank"
        href="https://github.com/"
        rel="noopener"
      />
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
}
</script>
