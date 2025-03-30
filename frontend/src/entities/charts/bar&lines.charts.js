import { Chart } from 'chart.js/auto'
import { Utils } from '@/shared/utils.js'

const barLinesChart = (node) => {
  const DATA_COLUMN = 6
  const NUMBER_CFG = { count: DATA_COLUMN, min: -100, max: 100 }
  const labels = Utils.months(6)
  const content = {
    labels: labels,
    datasets: [
      {
        label: 'Количество промывок',
        data: Utils.numbers(DATA_COLUMN, -100, 100),
        borderColor: Utils.randColor(),
        backgroundColor: Utils.randColor(),
        order: 1,
      },
      {
        label: 'Количество техники',
        data: Utils.numbers(DATA_COLUMN, -100, 100),
        borderColor: Utils.randColor(),
        backgroundColor: Utils.randColor(),
        order: 0,
        type: 'line',
      },
    ],
  }
  const config = {
    type: 'bar',
    data: content,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'barLinesCharts',
        },
      },
    },
  }
  return new Chart(node, config)
}

export { barLinesChart }
