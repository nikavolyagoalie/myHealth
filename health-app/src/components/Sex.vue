<template>
  <div>
    <form class="block-name">
              <p>
                <label>
                  <input name="male" type="radio"/>
                  <span>М</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="female" type="radio"/>
                  <span>Ж</span>
                </label>
              </p>
    </form>    
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