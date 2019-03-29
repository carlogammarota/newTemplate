<template>
  <div>
      <header>
       HEADER
      </header>
      <div class="app-body">
        <div class="sidebar">
      </div>
      <div class="main">
       <nav class="bg-grey-light p-3 rounded font-sans m-4">
          <ol class="list-reset flex text-grey-dark">
            <li><a href="#" class="text-blue font-bold">Home</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="#" class="text-blue font-bold">Library</a></li>
            <li><span class="mx-2">/</span></li>
            <li>Data</li>
          </ol>
        </nav>
        <div class="container"></div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">1</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">2</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey">3</div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-4 bg-grey-light">4</div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
