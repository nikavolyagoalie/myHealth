<template>
  <div class="bio">
    <h1>Профиль</h1>
    <div class="row">
      <form class="col s12" action="#">
        <div class="row">
          <div class="profile-image">
            <img class="profile-photo" src="https://avatars0.githubusercontent.com/u/4668188?v=3&amp;s=460" alt="">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12" v-if="!change">
              <div class="profile-item">Номер карты: {{cardNumber}}</div>
              <div class="profile-item">Имя: {{name}}</div>
              <div class="profile-item">Отчество: {{patronymic}}</div>
              <div class="profile-item">Фамилия: {{surename}}</div>
              <div class="profile-item" v-if="!change">Пол: {{sex}}</div>
              <div class="profile-item" v-if="!change">Дата рождения: {{date}}</div>
          </div>
          <div class="input-field col s12">
            <input placeholder="Номер карты" id="cardNumber" name="cardNumber" type="text" class="validate" v-model="cardNumber" v-if="change" required/>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4" v-if="change">
              <input placeholder="Имя" id="name" name="name" type="text" class="validate" v-model="name"  required>
              
            </div>
            <div class="input-field col s4" v-if="change">
              <input placeholder="Отчество" id="patronymic" name="patronymic" type="text" class="validate" v-model="patronymic"  required>
              
            </div>
          <div class="input-field col s4" v-if="change">
            <input placeholder="Фамилия" id="surename" name="surename" type="text" class="validate" v-model="surename"  required>
            
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6" v-if="change">
            <p>
                <label>
                  <input name="sex" value="М" type="radio" v-model="sex"/>
                  <span v-if="change">М</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="sex" value="Ж" type="radio" v-model="sex"/>
                  <span >Ж</span>
                </label>
              </p>
              
          </div>
          <div class="input-field col s6" v-if="change">
            <input type="text" id="date" ref="datepicker" v-model="date" required/>
            
          </div>
          
        </div>
        <button class="btn" @click.prevent="change = !change; onClick()"><span v-if="change">Сохранить</span><span v-else>Редактировать</span></button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return {
      id: 1,
      name: '',
      lastname: '',
      patronymic: '',
      cardNumber: '',
      sex: '',
      change: true,
    }
  },

  components: {
    
  },

  methods: {
    submitForm() {
      // axios
      //   .post('https://609e63d433eed800179585e0.mockapi.io/api/profile', {
      //     id: this.id,
      //     name: this.name,
      //     lastname: this.lastname,
      //     patronymic: this.patronymic,
      //     cardNumber: this.cardNumber,
      //     sex: this.sex,
      //   })
      //   .then(responce => {
      //     this.responce = responce.data
      //   })
      //   .catch(error => {
      //     this.responce = 'Error: ' + error.responce.status
      //   })
    },

    onClick(){

    }
  },
}
</script>

<style lang="scss" scoped>
  $primary: #5968d7;

  .input-field{
    padding: 0;
    & >label {
      top: -30px;
    }
  }

  .profile-photo{
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background-color: #fff;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .profile-item{
    padding: 0 .75rem;
    color: #fff;
  }

  .active {
    background: $primary;
  }

  .col .row {
    margin-left: -0.1rem;
  }
</style>
