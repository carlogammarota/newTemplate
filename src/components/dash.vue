<template>
  <div>
    <h2>Dash</h2>
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">1</div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">2</div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">3</div>
      <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">4</div>
    </div>
    <ramdomChart></ramdomChart>
  </div>
</template>
<script>
  import ramdomChart from "@/components/graphic/RandomChart"

  export default {
    components: {
      ramdomChart
    }
  }
</script>
