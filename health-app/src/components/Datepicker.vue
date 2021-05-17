<template>
  <div>
    <input type="text" ref="datepicker">
  </div>
</template>

<script>
  export default {      
      mounted() {
            //initialize datePicker
            M.Datepicker.init(this.$refs.datepicker, {
                
            })
      }
  }
</script>

<style lang="scss" scoped>
  .input-field{
    & >label {
      top: -30px;
    }
  }
</style>