const lineHeight = {
  100: '1.3125rem', // 21px
  200: '1.4rem', // 22.4px
  300: '1.5rem', // 24px
  400: '1.6rem', // 25.6px
  500: '1.6875rem', // 27px
  600: '1.875rem', // 30px
  700: '2.25rem', // 36px
  800: '2.625rem', // 42px
  900: '3.15rem', // 50.4px
  1000: '3.575rem', // 57.2px
  1100: '4.3875rem', // 70.2px
}

const sizes = {
  200: ['0.875rem', lineHeight[200]], // 14px
  300: ['1rem', lineHeight[400]], // 16px
  400: ['1.125rem', lineHeight[500]], // 18px
  500: ['1.25rem', lineHeight[600]], // 20px
  600: ['1.5rem', lineHeight[700]], // 24px
}

//
// 'h-100': ['1rem', lineHeight[300]], // 16px
//   'h-150': ['1.125rem', lineHeight[500]], // 18px
//   'h-200': ['1.5rem', lineHeight[700]], // 24px
//   'h-300': ['1.875rem', lineHeight[800]], // 30px
//   'h-400': ['2.25rem', lineHeight[900]], // 36px
//   'h-500': ['2.75rem', lineHeight[1000]], // 44px
//   'h-600': ['3.375rem', lineHeight[1100]], // 54px

export { sizes }
