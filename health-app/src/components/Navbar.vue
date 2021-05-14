<template>
      <nav>
        <div class="container">
            <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">My Health</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link
                    tag="li"
                    to="/"
                    exact
                    active-class="active"
                >
                    <a href="#">Bio</a>
                </router-link>
                <router-link
                    tag="li"
                    to="/measurement"
                    active-class="active"
                >
                    <a href="#">Measurement</a>
                </router-link>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>