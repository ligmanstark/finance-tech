<template>
  <component
    :is="as"
    class="text-gray-900"
    :class="[
      {
        'text-[1.125rem] lg:text-[1.25rem] 2xl:text-[1.5rem]': size === '600',
      }, // 24px
      {
        'text-1rem lg:text-[1.125rem] 2xl:text-[1.25rem]': size === '500',
      }, // 20px
      {
        'text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]': size === '400',
      }, // 18px
      {
        'text-[0.875rem] lg:text-[1rem]': size === '300',
      }, // 16px
      {
        'text-[0.875rem]': size === '200',
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
