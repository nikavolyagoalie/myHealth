<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default{
  components: {
    Navbar
  }
}

</script>


<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css"; 

  #app{
    background: #444;
    min-height: 100vh;
  }

  h1, h2, h3 {
    color: white;
  }
</style>
