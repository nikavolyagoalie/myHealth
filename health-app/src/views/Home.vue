<template>
  <div class="bio">
    <h1>Bio</h1>
    <div class="row">
      <form class="col s12" action="#">
        <div class="row">
          <div class="profile-image">
            <img src="https://avatars0.githubusercontent.com/u/4668188?v=3&amp;s=460" alt="">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <CardNumber/>
          </div>
        </div>
        <div class="row">
          <FullName/>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <Sex/>
          </div>
          <div class="input-field col s6">
            <Datepicker/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from '../components/Datepicker.vue';
import Sex from '../components/Sex.vue';
import FullName from '../components/FullName.vue';
import CardNumber from '../components/CardNumber.vue';

export default {
  name: 'Home',
  components: {
    Datepicker, Sex, FullName, CardNumber
  },
}
</script>

<style lang="scss" scoped>
  .input-field{
    & >label {
      top: -30px;
    }
  }
</style>
