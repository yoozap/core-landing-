<template>
  <div id="app">
    <EmailPopup/>
    <Header v-if="sideMenuState"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import EmailPopup from './components/EmailPopup'
import { mapGetters } from 'vuex'

export default {
  components: {
    EmailPopup,
    Header,
    Footer
  },
  computed:{
    ...mapGetters({
      sideMenuState: 'getSideMenuState'
    })
  }
}
</script>
<style>

</style>
