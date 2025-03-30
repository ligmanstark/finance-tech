<template>
  <component
    :is="tag"
    class="font-semibold text-twilight-900"
    :class="[
      {
        'text-[1.875rem] md:text-[2.25rem] lg:text-[2.75rem] 2xl:text-[3.375rem]': size === '600',
      }, // H1
      {
        'text-[1.875rem] md:text-[2.25rem] 2xl:text-[2.75rem]': size === '500',
      }, // H2
      {
        'text-[1.5rem] md:text-[1.875rem] 2xl:text-[2.25rem]': size === '400',
      }, // H3
      {
        'text-[1.125rem] lg:text-[1.5rem] 2xl:text-[1.875rem]': size === '300',
      }, // H4
      {
        'text-[1rem] md:text-[1.125rem]': size === '200',
      }, // H5
    ]"
  >
    <slot />
  </component>
</template>

<script>
const sizes = ['200', '200', '300', '400', '600']
const headings = ['H1', 'H2', 'H3', 'H4', 'H5']

export default {
  name: 'UiHeading',
  props: {
    /**
     * Tag name at H1 to H6
     */
    tag: {
      type: String,
      default: 'h2',
    },
    /**
     * Current size at 600 to 200
     */
    size: {
      type: String,
      default: '500',
    },
  },
}
</script>
