<template>
  <section>
    <div class="mx-auto">
      <canvas id="bar" />
    </div>
  </section>
</template>
<script>
import chartsData from '@/pages/index/_data/charts.data.js'
import { chartCreator } from '@/entities/charts.js'

export default {
  name: 'mainPage',
  mounted() {
    const id = document.querySelector('#bar')
    chartCreator(id, chartsData)
  },
}
</script>
