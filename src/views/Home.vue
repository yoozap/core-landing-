<template>
  <div class="body-container home-page">
    <StartContainer v-if="false"/>
    <MainContainer/>
    <TextContainer/>
    <Community :itemData="$store.state.community"/>
    <LottieContainer/>
    <Frameworks :itemData="$store.state.tabs"/>
    <Cmcx/>
    <About/>
    <Generation/>
    <TradePlatforms/>
    <UseCases :itemData="$store.state.cases"/>
    <Developers/>
    <Statistic :statData="$store.state.statistic"/>
    <Paper/>
    <Faq :itemData="$store.state.faq"/>
    <CommunityPopup :itemData="$store.state.community"/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import Community from '@/components/Community.vue'
import CommunityPopup from '@/components/CommunityPopup.vue'
import About from '@/components/About.vue'
import Faq from '@/components/Faq.vue'
import UseCases from '../components/UseCases'
import Statistic from '../components/Statistic'
import StartContainer from '../components/Start'
import LottieContainer from '../components/LottieContainer'
import TextContainer from '../components/TextContainer'
import Frameworks from '../components/Frameworks'
import Generation from '../components/Generation'
import Developers from '../components/Developers'
import Paper from '../components/Paper'
import Cmcx from '../components/Cmcx'
import TradePlatforms from '../components/TradePlatforms'

export default {
  name: 'Home',
  components: {
    Developers,
    Frameworks,
    Generation,
    TextContainer,
    LottieContainer,
    StartContainer,
    Statistic,
    UseCases,
    MainContainer,
    Community,
    CommunityPopup,
    Faq,
    About,
    Paper,
    Cmcx,
    TradePlatforms
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
