import { Chart } from 'chart.js/auto'
import AutoColors from 'chartjs-plugin-autocolors'

Chart.register(AutoColors)

const radarChartCreator = (node, data) => {
  const config = {
    type: 'radar',
    plugins: [AutoColors],
    options: {
      legend: {
        display: true,
      },
      scales: {
        radius: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
          grid: {
            color: '#FFFFFF', // Белые линии сетки
          },
          angleLines: {
            color: '#FFFFFF', // Белые угловые линии
          },
          pointLabels: {
            color: '#FFFFFF', // Белые подписи точек
          },
        },
      },
    },
    data: {
      labels: data[0].junior[0].level.map((unit) => unit.label),
      datasets: [
        {
          label: 'Junior',
          data: data[0].junior[0].level.map((unit) => unit.content),
        },
        {
          label: 'Middle',
          data: data[0].middle[0].level.map((unit) => unit.content),
        },
        {
          label: 'Senior',
          data: data[0].senior[0].level.map((unit) => unit.content),
        },
      ],
    },
  }

  return new Chart(node, config)
}

export { radarChartCreator }
