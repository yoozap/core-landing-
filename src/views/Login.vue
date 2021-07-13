<template>
  <div class="body-container home-page">
    <input type="text" placeholder="email" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="text" placeholder="secret" v-model="secret">
    <button @click="login">login</button>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        token: null,
        username:'talakhadzemariam@gmail.com',
        password: '123123',
        secret:'123',
      }
    },
    created () {
      // this.login();
      // this.test()
    },
    methods: {
      login () {
        //axios.defaults.headers.common['Authorization'] = 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkNmRmYzdjN2MyMjgzZmRhYWFlNDYyMTM3N2YxYTk1ODE2ZjVlNjYyOTc3NzJjMDYyY2UxZDc0OWJiY2M5NzBhYWU5Y2VmNzc3ZTUzNTExIn0.eyJhdWQiOiI3IiwianRpIjoiOGQ2ZGZjN2M3YzIyODNmZGFhYWU0NjIxMzc3ZjFhOTU4MTZmNWU2NjI5Nzc3MmMwNjJjZTFkNzQ5YmJjYzk3MGFhZTljZWY3NzdlNTM1MTEiLCJpYXQiOjE2MjM0ODY5NjksIm5iZiI6MTYyMzQ4Njk2OSwiZXhwIjoxNjU1MDIyOTY5LCJzdWIiOiIyOCIsInNjb3BlcyI6W119.UisRlE5mK09xkYt3kLhpadromlTCFceqkPoXwV3lc03XpRDJ8N3dubkds7Uf6F-jomYuuZhPsTMtfwOfZ6HDbUnNG0Q4VJWuQ-ArscPC-UmAOolQLaYIvcFX9cTwYkqAA_RMe71-8hTyfH_2PFFJyzPvbrkvoCTU27RusrObdycJ0sB-dY4Yd9hLORUFclK1ybOQ6sVT7b7ziKvJDVGPLRdw-vwEQZGTFKdzIIYP_-adIreXW2M2agquJkijt7vPsva4yWpflizOXNwaplKZRCxsT0NkLwO63txBOlEnPq16oZQrSP0xdcga212qHS03hH-80eve6NfTJRvouQ33VS4Di4bxBOAhEynoPKLiXKkyJWSiTPyb-98ndPdt02RSbo-JXOCsXd3n1wsCNrZoM5FqRD0U01MBZIZ3jwUoAlcQbs5cgpXZcImPcrVTuugSCaL8V1MgP28y6de4io44QcmtZFodJsD7r0kjyfZ3X9iY3W8pHZRLp2XXP5fnZLHc194jBi7TC9tPOoUBaticJaq00ewRXpqpLCYZQ-y9cExLt2CSjzvnUks3g2bTGRJjmIwyfbL0a4dJyjtTV_41eTljt_d095CZoLIBtWEDBXFN8nNuyBThzNDyluTvkMtUdRGQFWsVSDYm_IJ77GGfKkWZj9jFZj087MS1ZxNkBc0";
        return new Promise((resolve,reject) => {
          axios.post('https://cmcx:8890/api/login', {
            username: this.username,
            password: this.password,
            secret: this.secret
          })
            .then(response => {
                console.log(response)
                // return false
              // const token = response.data.passport.access_token;
              //
              // if(response.data.passport.access_token){
              //   localStorage.setItem('token',token);
              //   this.$store.commit('setToken', token);
              // }
              let url = 'https://cmcx:8890/get-auth/' + response.data.usertoken;
              // resolve(response);
              // if(response.data.usertoken){
              //
              //   // window.location.href = 'http://localhost/customize_tokenlite/public/get-auth/' + response.data.usertoken;
              //   console.log('hi')
              // }
              console.log(url);
            })
            .catch (response => {
              reject(response);
              // List errors on response...
            });
        });
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
