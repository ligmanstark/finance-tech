<template>
  <section class="mt-20">
    <slot name="header" />
    <div class="content">
      <slot name="content" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'sectionContent',
}
</script>
