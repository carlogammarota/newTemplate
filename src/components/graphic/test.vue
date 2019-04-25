<template>

</template>

<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    mounted () {
      console.log("test")
      this.renderChart(data, options)
    }
  }
</script>
