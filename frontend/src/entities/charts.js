import Chart from 'chart.js/auto';

const chartCreator = (node,data) =>{
  const config = {
    type: 'bar',
    data: {
      labels: data.map(row => row.timeline),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => row.content)
        }
      ]
    }
  }
  const charts = new Chart(node, config)
  return charts;
}

export {chartCreator}
