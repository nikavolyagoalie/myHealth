<template>
  <div class="bio">
    <h1>Measurement</h1>
    <div class="input-field col s12">
        <Select />
    </div>
    <div class="container container-child">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select.vue';

export default {  
  name: 'Measurement',
  data() {

  },  
  components: {
      Select
  },
}
</script>

<style scoped>
    .container-child{
        margin: 0;
    }
</style>