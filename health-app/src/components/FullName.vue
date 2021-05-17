<template>
  <div>
    <div class="input-field col s4">
            <input placeholder="Имя" id="name" name="name" type="text" class="validate">
            <label for="name">Name</label>
          </div>
          <div class="input-field col s4">
            <input placeholder="Отчество" id="patronymic" name="patronymic" type="text" class="validate">
            <label for="patronymic">Patronymic</label>
          </div>
          <div class="input-field col s4">
            <input placeholder="Фамилия" id="surename" name="surename" type="text" class="validate">
            <label for="surename">Surename</label>
      </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .input-field{
    & >label {
      top: -30px;
    }
  }
</style>