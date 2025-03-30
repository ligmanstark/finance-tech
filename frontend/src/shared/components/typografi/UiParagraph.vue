<template>
  <component
    :is="as"
    class="text-gray-900"
    :class="[
      {
        'text-400 lg:text-500 2xl:text-600': size === '600',
      }, // 24px
      {
        'text-300 lg:text-body-400 2xl:text-500': size === '500',
      }, // 20px
      {
        'text-200 lg:text-300 2xl:text-400': size === '400',
      }, // 18px
      {
        'text-200 lg:text-300': size === '300',
      }, // 16px
      {
        'text-200': size === '200',
      }, // 14px
    ]"
  >
    <slot />
  </component>
</template>

<script>
const sizes = ['200', '300', '400', '500', '600']
export default {
  name: 'UiParagraph',
  props: {
    as: {
      type: String,
      default: () => 'p',
    },
    /**
     * Current size at 600 to 200
     */
    size: {
      type: String,
      default: '300',
    },
  },
}
</script>
