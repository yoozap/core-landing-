<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1><span>Request</span><span>for Proposals</span></h1>
          </div>
        </div>
      </div>
      <div class="container proposals_main" data-aos="fade-up">
        <div class="proposals_subtext">
          CORE is centred around its community and wants the developer, science, and academic communities to help make our ecosystem better by submitting idea proposals.
        </div>
        <div class="proposals_text">
          These proposals can be related to any-blockchain related topics such as:
        </div>
        <div class="proposals_li">
          <div class="proposals_li-bg"></div>
          <div class="proposals_img-outer">
            <img :src="require(`@/assets/img/purpose.jpg`)" alt="purpose" class="proposals_img">
          </div>
          <ul>
            <li>Consensus Protocols</li>
            <li>Smart Contract</li>
            <li>Sharding</li>
            <li>Scalability</li>
            <li>Security & Privacy</li>
            <li>Data Analytics</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Machine Learning (ML)</li>
            <li>Game Theory</li>
            <li>Cloud Computing</li>
            <li>Edge Computing</li>
            <li>5G and Beyond</li>
          </ul>
          <div class="proposals_text">
            Please submit your proposal on or before Monday 10 May 2021 at 18:00h GMT to <a target="_blank" href="mailto:community@coremultichain.com">community@coremultichain.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from '@/components/TopHead.vue'
export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  components: {
    TopHead
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 100)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .proposals_li .proposals_text{
    position: relative;
    z-index: 2;
    margin-top: 50px;
    font-size: 13px;
    opacity: 1;
    line-height: 20px;
    color: rgba(255,255,255,.5);
  }
  .proposals_li .proposals_text a{
    color: #fff;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-left: 5px;
    font-size: inherit;
  }
  .proposals_li .proposals_text a:hover{
    color: #ff7152;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  ul{
    position: relative;
    z-index: 5;
  }
  .proposals_img{
    height: 100%;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 50s linear infinite;
    animation:spin 50s linear infinite;
  }
  .proposals_li-bg{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 40%;
    z-index: 1;
    background: rgb(1,9,24);
    background: linear-gradient(90deg, rgba(1,9,24,1) 0%, rgba(1,9,24,0) 100%);
  }
  .proposals_img-outer{
    top: 0px;
    height: 100%;
    position: absolute;
    right: 0px;
    z-index: 2;
    transform: translateX(50%);
  }
  .proposals_text{
    opacity: .5;
  }
  .proposals_li{
    margin-top: 140px;
    padding: 50px;
    position: relative;
    margin-bottom: 100px;
  }
  .proposals_main{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h1 span{
    font-size: inherit;
    color: inherit;
  }
  h1 span:last-child{
    margin-left: 100px;
  }
  .proposals_li li{
    font-size: 20px;
    padding-left: 25px;
    position: relative;
    margin-bottom: 15px;
  }
  .proposals_li li:after{
    background: #0500FF;
    content: '';
    height: 8px;
    width: 8px;
    display: flex;
    position: absolute;
    top: 6px;
    left: 0px;
    border-radius: 50%;
  }
  .proposals_subtext{
    font-size: 20px;
    line-height: 30px;
    margin-top: 100px;
    margin-bottom: 60px;
  }
  .techno_description-bottom-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    width: 640px;
  }
  .techno_description-bottom-inner{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-right: 105px;
    margin-top: 60px;
  }
  .techno_description-bottom{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .animHead .token-bg{
    opacity: 1;
    transform: translateY(0px);
  }
  .container{
    position: relative;
    z-index: 20;
    height: 100%;
  }
  .main-video iframe{
    transform: translateY(-40%);
  }
  .main-container__description p{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .main-container__description .frst-txt{
    color: rgba(255,255,255,.7);
    font-size: 15px;
    line-height: 24px;
    margin-top: auto;
  }
  .main-container__description .scnd-txt{
    color: rgba(255,255,255,1);
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  .animHead p{
    transform: translateY(0px);
    opacity: .8;
    transition-delay: .6s;
  }
  .main-container__description h1{
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
    display: flex;
    flex-direction: column;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
  }
  .left{
    width: 100%;
    position: relative;
    z-index: 5;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  #main{
    position: relative;
    width: 100%;
    background: #00050F;
    z-index: 2;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-container__header{
      margin-top: 30px;
    }
    #main{
      min-height: 800px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .main-container__description{
      padding-left: 25px;
    }
    .main-container__description h1{
      font-size: 50px;
    }
    .right{
      padding-bottom: 60px;
      padding-right: 75px;
    }
    .proposals_li .proposals_text{
      width: 60%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .proposals_li li{
      font-size: 22px;
      padding-left: 30px;
    }
    .techno_description-left,.techno_description-right{
      padding-right: 0px;
      width: 100%;
      margin-top: 50px;
    }
    .techno_description{
      flex-direction: column;
    }
    .main-container__description{
      padding-left: 0px;
    }
    .main-container__description .frst-txt{
      font-size: 12px;
      line-height: 22px;
    }
    .main-container__description .scnd-txt{
      font-size: 16px;
      line-height: 26px;
      margin-top: 30px;
    }
    .right {
      padding-bottom: 60px;
      padding-right: 30px;
    }
    .main-video__container{
      right: -38%;
      padding-top: 130%;
      width: 130%;
    }
    .main-container__header .left {
      font-size: 13px;
      line-height: 22px;
    }
    .main-container__description p {
      font-size: 32px;
      line-height: 40px;
    }
    .scroll-down{
      display: none;
    }
    .proposals_li .proposals_text{
      width: 100%;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .proposals_li li{
      font-size: 15px;
      padding-left: 20px;
    }
    .proposals_li{
      padding: 25px;
    }
    .proposals_li .proposals_text a{
      margin-left: 0px;
    }
    .proposals_text{
      position: relative;
      z-index: 2;
    }
    .proposals_li{
      margin-top: 50px;
      margin-bottom: 50px;
      overflow: hidden;
    }
    .proposals_img{
      opacity: .5;
    }
    .right{
      width: 100%;
      padding-right: 0px;
      margin-top: auto;
    }
    .left{
      width: 100%;
    }
    .main-container__description{
      flex-direction: column;
    }
    .download-container__mobile-inner a{
      margin: 0px 15px;
    }
    .download-container__mobile .ttl{
      font-size: 16px;
      color:  #fff;
      opacity: .6;
      margin-bottom: 25px;
    }
    .download-container__mobile{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 65px 0px;
      border-bottom: 1px solid rgba(255,255,255,.05);
    }
    .main-video__container{
      right: -100%;
      padding-top: 200%;
      width: 200%;
      transform: translateY(-25%);
    }
    .main-container__description{
      padding: 0px 15px;
      text-align: center;
      bottom: 90px;
    }
    .main-container__description h1{
      margin-top: 115px;
      margin-bottom: 50px;
      text-align: left;
    }
    .main-container__header{
      display: none;
    }
    .bottom__description-text, .bottom__description-ttl{
      font-size: 10px;
      line-height: 15px;
    }
    .bottom__description-floor {
      margin-bottom: 10px;
    }
    .bottom__description-inner{
      width: 100%;
    }
    .bottom__description{
      padding-left: 15px;
    }
    .token-bg{
      height: 100%;
      object-fit: cover;
    }
    .bottom{
      padding-top: 90%;
    }
    .main-container__description{
      padding: 0px;
    }
    #main{
      min-height: 600px;
    }
    .techno_description-bottom-inner{
      padding-right: 0px;
    }
  }
</style>
