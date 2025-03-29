<template>
  <section>
    <div class="mx-auto">
      <canvas class="max-h-40" id="bar" />
    </div>
    <div class="mt-10 h-6/12 w-6/12">
      <canvas id="radar" />
    </div>
  </section>
</template>
<script>
import { barData, radarData } from '@/pages/index/_data/charts.data.js'
import { barChartCreator } from '@/entities/bar.charts.js'
import { radarChartCreator } from '@/entities/radarSkillPoint.charts.js'

export default {
  name: 'mainPage',
  mounted() {
    const idBar = document.querySelector('#bar')
    const idRadar = document.querySelector('#radar')
    barChartCreator(idBar, barData)
    radarChartCreator(idRadar, radarData)
  },
}
</script>
