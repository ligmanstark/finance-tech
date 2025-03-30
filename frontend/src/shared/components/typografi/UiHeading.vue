<template>
  <component
    :is="tag"
    class="font-semibold text-twilight-900"
    :class="[
      {
        'text-300 md:text-h-400 lg:text-h-500 2xl:text-h-600': size === '600',
      }, // H1
      {
        'text-h-300 md:text-h-400 2xl:text-h-500': size === '500',
      }, // H2
      {
        'text-h-200 md:text-h-300 2xl:text-h-400': size === '400',
      }, // H3
      {
        'text-h-150 lg:text-h-200 2xl:text-h-300': size === '300',
      }, // H4
      {
        'text-h-100 md:text-h-150': size === '200',
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
