<template>
  <section>
    <div class="mx-auto">
      <canvas id="bar" />
    </div>
  </section>
</template>
<script>
import { chartCreator } from '@/entities/charts.js'
import chartsData from '@/pages/index/_data/charts.data.js'

export default {
  name: 'mainPage',
  mounted() {
    const id = document.querySelector('#bar')
    chartCreator(id, chartsData)
  },
}
</script>
