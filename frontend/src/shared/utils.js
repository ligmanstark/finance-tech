const Utils = {
  // Генерация случайного цвета
  randColor: () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
  },

  // Генерация массива случайных чисел
  numbers: (count, min = 0, max = 100) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min) + min))
  },

  // Генерация случайных значений для графика
  labels: (count) => {
    return Array.from({ length: count }, (_, i) => `Label ${i + 1}`)
  },

  // Генерация месяцев
  months: (count = 12) => {
    const monthsNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]
    return monthsNames.slice(0, count)
  },
}

export { Utils }
