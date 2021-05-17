<template>
  <div>
    <h2>Кровяное давление</h2>
    <form class="col s12" action="#">
      <div class="row">
        <div class="col s4 field systolity">
          <input placeholder="SYS." id="systolity" name="systolity" type="text" class="validate" v-model="sys">
          <label for="systolity">Верхнее</label>
        </div>
        <div class="col s4 field diasistolity">
          <input placeholder="DIA." id="diasystolity" name="diasystolity" type="text" class="validate" v-model="dia">
          <label for="diasystolity">Нижнее</label>
        </div>
        <div class="col s4 btn">
          <button @click.prevent="create">Добавить</button>
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

const baseUrl = 'https://609e63d433eed800179585e0.mockapi.io/api/pressure';

  export default {
    data() {
        return {
          pressures: [],
          sys: '',
          dia: '',

          visuals: [{
            chartData: null,
            options: {responsive: true, maintainAspectRatio: false}
          }],
          press_es: [],
        }
    },
    components: {
      Line
    },

    mounted() {
      axios
        .get('https://609e63d433eed800179585e0.mockapi.io/api/pressure/')
        .then(responce => {this.press_es = responce; this.updateVisuals()})
        .catch(error => {console.error("An API error: ", error)})
    },

    methods: {
      updateVisuals(){
        let data = this.press_es.data; 

        let labels = [];
        let sysPressPerDay = [];
        let diaPressPerDay = [];
        let pressureDifference = [];

        for (let i=0; i < data.length; i++){

          if(data[i].hasOwnProperty('sys')){
              sysPressPerDay.push(data[i]["sys"]);
          }

          if(data[i].hasOwnProperty('dia')){
              diaPressPerDay.push(data[i]["dia"]);
          }

          if(data[i].hasOwnProperty('date')){
              labels.push(data[i]["date"]);
          }

          pressureDifference.push(data[i]["sys"] - data[i]["dia"]);
        }

        this.visuals[0].chartData = {
              labels: labels,
              datasets: [
                {
                  label: 'Верхнее давление',
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  data: sysPressPerDay
                },

                {
                  label: 'Нижнее давление',
                  backgroundColor: 'transparent',
                  borderColor: 'blue',
                  data: diaPressPerDay
                },

                {
                  label: 'Пульсовая разница',
                  backgroundColor: 'transparent',
                  borderColor: 'green',
                  data: pressureDifference
                }
              ],
            };
        
      },

      async create(){
        const res = await axios.post(baseUrl, { sys: this.sys, dia: this.dia});

        this.pressures = [...this.pressures, res.data];
        this.sys = '';
        this.dia = '';
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
</style>