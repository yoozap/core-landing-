<template>
  <div class="body-container home-page">
    <input type="text" placeholder="email" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="text" placeholder="secret" v-model="secret">
    <button @click="login">login</button>
    {{username}}
    {{password}}
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        token: null,
        username:'',
        password: '',
        secret:'',
      }
    },
    created () {
      // this.login();
      this.test()
    },
    methods: {
      login () {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token;
        return new Promise((resolve,reject) => {
          axios.post('/api/login', {
            username: this.username,
            password: this.password,
            secret: this.secret
          })
            .then(response => {
              const token = response.data.passport.access_token;

              if(response.data.passport.access_token){
                localStorage.setItem('token',token);
                this.$store.commit('setToken', token);
              }
              let url = 'http://localhost/customize_tokenlite/public/get-auth/' + response.data.usertoken;
              // resolve(response);
              if(response.data.usertoken){

                // window.location.href = 'http://localhost/customize_tokenlite/public/get-auth/' + response.data.usertoken;
                console.log('hi')
              }
              console.log(url);
            })
            .catch (response => {
              reject(response);
              // List errors on response...
            });
        });
      },
      test () {
        return new Promise((resolve,reject) => {
          axios.get('api/stage?secret=5ukFujjovuwDZOP0IRzNRet5', {})
            .then(response => {
              console.log(response);
            })
            .catch(response => {
              // List errors on response...
            });
        })
      }

    }
  }
</script>
<style scoped>
  input{
    color: #000;
  }
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
