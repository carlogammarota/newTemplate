<template>
  <div>
    <h2>Dash</h2>
    <div class="flex flex-wrap">

      <ramdomChart></ramdomChart>
        <!-- <apexchart width="100%" type="bar" :options="chartOptions" :series="chartOptions.series"></apexchart>
     </div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4">
        <apexchart type=line height=350 :options="chartOptions" :series="chartOptions.series" />
      </div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-">
        <apexchart type=radar height=350 :options="chartOptions" :series="chartOptions.series" />
      </div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4">
        <apexchart type=radialBar width=380 :options="radialBar.plotOptions" :series="radialBar.series" />
      </div>  -->

    </div>
    <!-- <apexchart type=pie width=380 :options="chartOptions" :series="chartOptions.series" /> -->
    <!-- <h1>Ramdom Chart</h1> -->
    <!-- <ramdomChart></ramdomChart> -->
    <br/>    
    <div>
      
    </div>


    
  </div>
</template>
<script>
  import ramdomChart from "@/components/graphic/RandomChart"
  import ApexCharts from 'apexcharts'

  

  export default {
    data: function() {
          return {





          //   chartOptions: {
          //     chart: {
          //       id: 'vuechart-example'
          //     },
          //     xaxis: {
          //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          //     },
          //     series: [{
          //     name: 'series-1',
          //     data: [30, 40, 35, 50, 49, 60, 70, 91]
          //   }]
          //   },
          //   radialBar: {
          //     chart: {
          //         height: 350,
          //         type: 'radialBar',
          //     },
          //     plotOptions: {
          //         radialBar: {
          //             hollow: {
          //                 size: '70%',
          //             }
          //         },
          //     },
          //     series: [70],
          //     labels: ['Cricket'],

          // }
          }
        },
    components: {
      ramdomChart,
      ApexCharts
    }
  }
</script>
