<template>
      <nav>
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">Мое здоровье</router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link
                        v-for="link in links"
                        :key="link.url"
                        tag="li"
                        :to="link.url"
                        :exact="link.exact"
                        active-class="active"
                    >
                        <a href="#">{{link.title}}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {title: 'Профиль', url: '/', exact: true},
                {title: 'Измерения', url: '/measurement/bloodpressure', }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
  nav {
    background-color: #26a69a;  
  }

  .input-field{
    & > label {
      top: -30px;
    }
  }
</style>

