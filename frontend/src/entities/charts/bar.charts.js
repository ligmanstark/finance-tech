import { Chart } from 'chart.js/auto'
import AutoColors from 'chartjs-plugin-autocolors'
Chart.register(AutoColors)

const barChartCreator = (node, data) => {
  const config = {
    type: 'bar',
    plugins: [AutoColors],

    options: {
      plugins: {
        autocolors: { mode: 'data' },
        legend: {
          display: false,
        },
      },
      aspectRatio: 0.3,
    },
    data: {
      labels: data.map((row) => row.timeline),
      datasets: [
        {
          label: 'Acquisitions by year',

          data: data.map((row) => row.content),
        },
      ],
    },
  }

  return new Chart(node, config)
}

export { barChartCreator }
