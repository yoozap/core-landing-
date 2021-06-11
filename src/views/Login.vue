<template>
  <div class="body-container home-page">
    asdas
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    created () {
      const data = {
        username: 'sergo93@gmail.com',
        password: '1234Uu',
      };
      axios.post('/api/login', {
        headers: {
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + token
        }
      })
        .then(response => {

          context.commit('logout');

        })
    }
  }
</script>
<style scoped>
  .body-container{
    padding-left: 210px;
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .body-container{
      padding-left: 0px;
    }
  }
</style>
