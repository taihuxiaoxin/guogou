<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
  export default {
    created() {
      let jwt = localStorage.getItem('jwt');
      if(jwt) {
        this.$store.commit('setJwt',jwt);
      }
    }
  }; 
</script>

<style lang="scss"></style>
