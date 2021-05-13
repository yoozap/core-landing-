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
  data(){
    return{
    }
  },
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
  // metaInfo() {
  //   return {
  //     title: "CORE Multi-Chain: Cryptographic Object Resource Engine | Blockchain 3.0 Platform",
  //     meta: [
  //       {
  //         vmid: "description",
  //         name: "description",
  //         content:
  //           "CORE Multi-Chain(Cryptographic Object Resource Engine) is a PoS blockchain 3.0 framework focused on Interoperability, Scalability, and Usability."
  //       },
  //       {
  //         vmid: "referrer",
  //         name: "referrer",
  //         content:
  //           "no-referrer-when-downgrade"
  //       },
  //       {
  //         vmid: "og:site_name",
  //         property: "og:site_name",
  //         content:
  //           "CORE Multi-Chain"
  //       },
  //       {
  //         vmid: "og:type",
  //         property: "og:type",
  //         content:
  //           "website"
  //       },
  //       {
  //         vmid: "og:title",
  //         property: "og:title",
  //         content:
  //           "CORE Multi-Chain"
  //       },
  //       {
  //         vmid: "og:description",
  //         property: "og:description",
  //         content:
  //           "CORE Multi-Chain (Cryptographic Object Resource Engine) is a PoS blockchain 3.0 framework focused on Interoperability, Scalability, and Usability."
  //       },
  //       {
  //         vmid: "og:url",
  //         property: "og:url",
  //         content:
  //           "https://coremultichain.com/"
  //       },
  //       {
  //         vmid: "og:image",
  //         property: "og:image",
  //         content: this.aws_url + 'img/' + 'og_meta_tag.jpg'
  //       }
  //     ]
  //   }
  // }
}
</script>
<style>

</style>
