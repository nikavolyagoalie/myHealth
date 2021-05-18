<template>
  <div class="bio">
    <h1>Профиль</h1>
    <div class="row">
      <form class="col s12" action="#" @submit.prevent="submitForm">
        <div class="row">
          <div class="profile-image">
            <img class="profile-photo" src="https://avatars0.githubusercontent.com/u/4668188?v=3&amp;s=460" alt="">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Номер карты" id="cardNumber" name="cardNumber" type="text" class="validate" v-model="cardNumber" required/>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input placeholder="Имя" id="name" name="name" type="text" class="validate" v-model="name" required>
            </div>
            <div class="input-field col s4">
              <input placeholder="Отчество" id="patronymic" name="patronymic" type="text" class="validate" v-model="patronymic" required>
            </div>
          <div class="input-field col s4">
            <input placeholder="Фамилия" id="surename" name="surename" type="text" class="validate" v-model="surename" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <p>
                <label>
                  <input name="male" value="М" type="radio" v-model="sex"/>
                  <span>М</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="female" value="Ж" type="radio" v-model="sex"/>
                  <span>Ж</span>
                </label>
              </p>
          </div>
          <div class="input-field col s6">
            <input type="text" id="date" ref="datepicker" v-model="date" required/>
          </div>
        </div>
        <button :class="[input ? activeClass : '']" type="submit">Submit</button>
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
      response: '',
      activeClass: 'active',
      profile_iems: [],
    }
  },

  components: {
    
  },
  mounted() {
      axios
        .get('https://609e63d433eed800179585e0.mockapi.io/api/profile/')
        .then(responce => {this.profile_iems = responce; this.updateVisuals()})
        .catch(error => {console.error("An API error: ", error)})
  },

  methods: {
    submitForm() {
      axios
        .post('https://609e63d433eed800179585e0.mockapi.io/api/profile', {
          id: this.id,
          name: this.name,
          lastname: this.lastname,
          patronymic: this.patronymic,
          cardNumber: this.cardNumber,
          sex: this.sex,
        })
        .then(responce => {
          this.responce = responce.data
        })
        .catch(error => {
          this.responce = 'Error: ' + error.responce.status
        })
    }
  },
}
</script>

<style lang="scss" scoped>
  $primary: #5968d7;

  .input-field{
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

  .active {
    background: $primary;
  }
</style>
