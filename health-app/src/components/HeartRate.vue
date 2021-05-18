<template>
  <div>
    <h3>Частота сердечных сокращенй</h3>
    <form class="col s12" action="#">
      <div class="row">
        <div class="col s4 field systolity">
          <input placeholder="уд/мин" id="ccr" name="ccr" type="text" class="validate" v-model="ccr">
          <label for="ccr">ЧСС</label>
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

const baseUrl = 'https://609e63d433eed800179585e0.mockapi.io/api/ccr';

  export default {
    data() {
        return {
          heartrate: [],
          ccr: '',

          visuals: [{
            chartData: null,
            options: {responsive: true, maintainAspectRatio: false}
          }],
          heartrate_es: [],
        }
    },
    components: {
      Line
    },

    mounted() {
      axios
        .get('https://609e63d433eed800179585e0.mockapi.io/api/ccr/')
        .then(responce => {this.heartrate_es = responce; this.updateVisuals()})
        .catch(error => {console.error("An API error: ", error)})
    },

    methods: {
      updateVisuals(){
        let data = this.heartrate_es.data; 

        let labels = [];
        let heartratePerDay = [];

        for (let i=0; i < data.length; i++){

          if(data[i].hasOwnProperty('ccr')){
              heartratePerDay.push(data[i]["ccr"]);
          }

          if(data[i].hasOwnProperty('date')){
              labels.push(data[i]["date"]);
          }
        }

        const normalDates = labels.map(
            function newDates(item){
                const date = new Date(item * 1000);
                let y = date.getFullYear();
                let m = date.getMonth() + 1;
                let d = date.getDate();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                m = (m < 10) ? '0' + m : m;
                d = (d < 10) ? '0' + d : d;
                hours = (hours < 10) ? '0' + hours : hours;
                minutes = (minutes < 10) ? '0' + minutes : minutes;
                
                return [d, m, y, hours, minutes].join('-');
                    
            }
        );

        this.visuals[0].chartData = {
              labels: normalDates,
              datasets: [
                {
                  label: 'Пульс',
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  data: heartratePerDay
                },
              ],
            };
        
      },

      async create(){
        const res = await axios.post(baseUrl, { glic: this.glic });

        this.heartrate = [...this.heartrate, res.data];
        this.ccr = '';
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