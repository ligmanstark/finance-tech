<template>
  <section
    class="[&_h1]:mb-3 [&_h2]:mb-3 [&_h3]:mb-3 [&_section]:mb-20 [&_section]:lg:mb-32 [&_section]:2xl:mb-36"
    :class="[{ 'text-center': isCentered }, { 'lg:text-center': isDesktopCentered }]"
  >
    <hgroup id="s-header" class="mx-auto">
      <!-- @slot Slot from heading -->
      <slot name="heading" />
      <!-- @slot Slot from description -->
      <slot name="description" />
    </hgroup>
    <!-- @slot Slot from content -->
    <slot />
  </section>
</template>

<script>
export default {
  name: 'UiSection',
  props: {
    /**
     * Text align center ?
     */
    isCentered: Boolean,
    isDesktopCentered: Boolean,
  },
}
</script>
