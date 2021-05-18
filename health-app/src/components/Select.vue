<template>
  <div>
      <div class="row">
        <div class="container">
            <div class="procedures-wrapper">

                
                    <router-link
                        class="procedure-block"
                        v-for="link in links"
                        :key="link.url"
                        tag="div"
                        :to="link.url"
                        active-class="active"
                    >
                    {{link.title}}
                        <a href="#" class="procedure-link"></a>
                    </router-link>
                
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            links: [
                {title: 'Кровяное давление', url: '/measurement/bloodpressure'},
                {title: 'Глюкоза крови', url: '/measurement/glycaemia'},
                {title: 'Частота сердечных сокращений', url: '/measurement/heartrate'},
            ]
        }
    },

    // mounted(){
    //   M.FormSelect.init(this.$refs.select, {});
    // }
  }
</script>

<style lang="scss">
  label {
      top: -30px !important;
    }

    .input-field select {
        display: block;
    }

    .input-field .container {
        margin: 0;
        margin-left: -17px;
    }

    .procedures-wrapper{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-left: 0;
    }

    .procedure-block{
        width: calc(33.33% - 30px);
        margin-left: 30px;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 20px 30px;
        margin-bottom: 30px;
        background-color: blue;
        color: white;
        text-align: center;
    }

    .procedure-link {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>