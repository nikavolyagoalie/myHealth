<template>
  <div>
    <h3>Глюкоза крови</h3>
    <form class="col s12" action="#">
      <div class="row">
        <div class="col s4 field systolity">
          <input placeholder="ммоль/л" id="glic" name="glic" type="text" class="validate" v-model="glic">
          <label for="glic">Гликемия</label>
        </div>
        <div class="col s4 btn-wrapper">
          <button @click.prevent="create" class="btn">Добавить</button>
        </div>
      </div>
    </form>
    <div class="small">
      <line-chart v-for="visual in visuals" :key="visual.id" :chart-data="visual.chartData" :options="visual.option"></line-chart>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios';
import Line from './lineChart.js';

const baseUrl = 'https://609e63d433eed800179585e0.mockapi.io/api/gliceamia';

  export default {
    data() {
        return {
          glicaemia: [],
          glic: '',

          visuals: [{
            chartData: null,
            options: {responsive: true, maintainAspectRatio: false}
          }],
          glicaemia_es: [],
        }
    },
    components: {
      Line
    },

    mounted() {
      axios
        .get('https://609e63d433eed800179585e0.mockapi.io/api/gliceamia/')
        .then(responce => {this.glicaemia_es = responce; this.updateVisuals()})
        .catch(error => {console.error("An API error: ", error)})
    },

    methods: {
      updateVisuals(){
        let data = this.glicaemia_es.data; 

        let labels = [];
        let gliceamiaPerDay = [];

        for (let i=0; i < data.length; i++){

          if(data[i].hasOwnProperty('glic')){
              gliceamia.push(data[i]["glic"]);
          }

          if(data[i].hasOwnProperty('date')){
              labels.push(data[i]["date"]);
          }
        }

        this.visuals[0].chartData = {
              labels: labels,
              datasets: [
                {
                  label: 'Гликемия',
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  data: gliceamiaPerDay
                },
              ],
            };
        
      },

      async create(){
        const res = await axios.post(baseUrl, { glic: this.glic });

        this.glicaemia = [...this.glicaemia, res.data];
        this.glic = '';
      }
    },

  }
</script>

<style lang="scss" scoped>
  label {
      top: -30px !important;
    }
  .small{
    max-width: 630px;
    margin: 0;
  }

  .btn-wrapper{
    position: relative;
  }

  .btn {
    position: absolute;
    top: 10px;
  }
</style>