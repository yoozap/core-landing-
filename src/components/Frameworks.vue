<template>
    <div class="frameworks-container__inner pB-160">
      <div class="frameworks-container__video-outer">
<!--        <img class="frameworks-container__video" :src="require(`@/assets/img/vid.jpg`)" alt="">-->
        <div class="frameworks-container__video"><iframe src="https://iframe.videodelivery.net/425bf95ea100320c1be632c9d771e0c8?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>
        <div class="frameworks-container__title-wrap" data-aos="fade-up">
          <h3 class="frameworks-container__grid-title">We are aiming to achieve these targets*</h3>
          <div class="frameworks-container__grid">
            <div class="frameworks-container__grid-item">
              <div class="frameworks-container__grid-item-title font-51">50,000+</div>
              <div class="frameworks-container__grid-item-description">Transactions per Second</div>
            </div>
            <div class="frameworks-container__grid-item">
              <div class="frameworks-container__grid-item-title font-51">10 sec</div>
              <div class="frameworks-container__grid-item-description">Tx Finality</div>
            </div>
            <div class="frameworks-container__grid-item">
              <div class="frameworks-container__grid-item-title font-51">200</div>
              <div class="frameworks-container__grid-item-description">Shards</div>
            </div>
            <div class="frameworks-container__grid-item">
              <div class="frameworks-container__grid-item-title font-51">>4000</div>
              <div class="frameworks-container__grid-item-description">Nodes in the first year</div>
            </div>
          </div>
          <div class="frameworks-container__title-bottom">
            *Based on our preliminary research, one year after the deployment of our main-net.
            <router-link to="/roadmap">See Roadmap</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="frameworks-container__bottom">
          <div class="frameworks-container__middle-title font-51" data-aos="fade-up">CORE: A multi-layered <br> blockchain framework</div>
          <div class="frameworks-container__middle-sub" data-aos="fade-up">Blockchains are typically multi-layered in design, whether the blockchain is permissioned
            <br>or permission-less.</div>
          <div class="frameworks-container__frameworks" data-aos="fade-up">
            <div class="frameworks-container__frameworks-tabs">
              <div class="frameworks-container__frameworks-tab" @mouseover="clickTab(tab.id)" v-for="tab in itemData" :key="tab.id" :class="activeTab == tab.id ? 'active' : ''">
                <img :src="require(`@/assets/img/${tab.svg}`)" alt="" class="frameworks-container__tab-image">
              </div>
            </div>
            <div class="frameworks-container__frameworks-tabs-container">
              <div class="frameworks-container__frameworks-tabs-inner" v-for="tabs in itemData" :key="tabs.id" :class="activeTab == tabs.id ? 'active' : ''">
                <div class="frameworks-container__frameworks-tabs-inner-title">{{tabs.title}}</div>
                <div class="frameworks-container__frameworks-tabs-inner-text">{{tabs.text}}</div>
                <img :src="require(`@/assets/img/${tabs.image}`)" alt="" class="frameworks-container__image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      activeTab: 1
    }
  },
  methods: {
    clickTab (id) {
      this.activeTab = id
    }
  }
}
</script>
<style scoped>
  .frameworks-container__middle-sub{
    color: rgba(255,255,255,.5);
    margin-bottom: 100px;
    margin-top: 30px;
  }
  .frameworks-container__grid-title{
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 30px;
  }
  .frameworks-container__grid-item-description{
    font-size: 15px;
    line-height: 24px;
  }
  .frameworks-container__grid-item-title{
    color: #FF7152;
  }
  .frameworks-container__grid-item:first-child{
    padding-right: 100px;
  }
  .frameworks-container__grid-item{
    padding-right: 60px;
  }
  .frameworks-container__grid{
    display: flex;
  }
  .frameworks-container__bottom{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .frameworks-container__frameworks-tabs-inner-text{
    font-size: 24px;
    line-height: 36px;
    position: relative;
    z-index: 2;
    margin-top: 10px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .1s;
  }
  .frameworks-container__frameworks-tabs-inner.active .frameworks-container__frameworks-tabs-inner-title{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .7s;
  }
  .frameworks-container__frameworks-tabs-inner.active .frameworks-container__frameworks-tabs-inner-text{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .8s;
  }
  .frameworks-container__frameworks-tabs-inner-title{
    position: relative;
    z-index: 2;
    color: rgba(255,255,255,.7);
    font-size: 15px;
    line-height: 24px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .2s;
  }
  .frameworks-container__image{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transition-delay: 0s;
    transform: scale(1.1);
    opacity: 0;
  }
  .frameworks-container__frameworks-tabs-inner.active .frameworks-container__image{
    transform: scale(1);
    opacity: 1;
    transition-delay: .6s;
  }
  .frameworks-container__frameworks-tabs-inner{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    padding: 40px;
  }
  .frameworks-container__frameworks-tabs-container{
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .frameworks-container__frameworks-tab{
    height: 33.3333%;
    display: flex;
    align-items: center;
    padding-left: 40px;
    border-bottom: 1px solid rgba(255,255,255,.05);
    position: relative;
    cursor: pointer;
  }
  .frameworks-container__frameworks-tab:last-child{
    border-bottom: 0px;
  }
  .frameworks-container__frameworks-tab.active:after{
    transform: scaleY(1);
  }
  .frameworks-container__frameworks-tab:after{
    width: 4px;
    height: 100%;
    background: #FF7152;
    display: flex;
    content: '';
    top: 0px;
    left: 0px;
    position: absolute;
    transform: scaleY(0);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .frameworks-container__frameworks-tabs{
    width: 50%;
    display: flex;
    flex-direction: column;
    background: #010918;
    padding-right: 40px;
  }
  .frameworks-container__inner{
    padding-bottom: 160px;
  }
  .frameworks-container__frameworks{
    display: flex;
    width: 1072px;
    margin-left: auto;
    margin-right: auto;
    height: 360px;
  }
  .frameworks-container__frameworks img{
    margin-right: 100px;
  }
  .frameworks-container__title-bottom{
    font-size: 12px;
    margin-top: 18px;
    color: rgba(255,255,255,.3);
    margin-top: 80px;
  }
  .frameworks-container__title-bottom a{
    font-size: 12px;
    margin-left: 5px;
    color: rgba(255,255,255,.5);
    text-decoration: underline;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .frameworks-container__title-bottom a:hover{
    text-decoration-color: transparent;
    color: #FF7152;
  }
  .frameworks-container__sub-title{
    font-size: 30px;
    margin-left: 42px;
  }
  .frameworks-container__title-wrap{
    position: absolute;
    bottom: 90px;
    z-index: 3;
    padding-left: 80px;
  }
  .frameworks-container__title-top{
    display: flex;
    align-items: center;
  }
  .frameworks-container__title{
    font-size: 140px;
    -webkit-text-stroke: 1px rgba(255, 113, 82, 1);
    color: transparent;
  }
  .frameworks-container__video-outer{
    position: relative;
    padding-top: 55%;
  }
  .frameworks-container__video iframe{
    transform: scale(1.2);
  }
  .frameworks-container__video-outer:after{
    position: absolute;
    z-index: 2;
    height: 200px;
    width: calc(100% + 210px);
    top: 0px;
    right: 0px;
    content: '';
    background: rgb(0,5,15);
    background: linear-gradient(0deg, rgba(0,5,15,0) 0%, rgba(0,5,15,1) 100%);
  }
  .frameworks-container__video-outer:before{
    position: absolute;
    z-index: 2;
    height: 200px;
    width: calc(100% + 210px);
    bottom: 0px;
    right: 0px;
    content: '';
    background: rgb(0,5,15);
    background: linear-gradient(180deg, rgba(0,5,15,0) 0%, rgba(0,5,15,1) 100%);
  }
  .frameworks-container__video{
    width: calc(100% + 210px);
    height: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
    object-fit: cover;
    overflow: hidden;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .frameworks-container__title-wrap{
      padding-left: 40px;
    }
    .frameworks-container__middle-title{
      font-size: 46px;
    }
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
      .frameworks-container__frameworks-tabs-container{
          width: 50%;
      }
    .frameworks-container__inner{
      padding-bottom: 60px;
    }
    .frameworks-container__frameworks-tabs-inner-text{
      font-size: 18px;
      line-height: 30px;
    }
    .frameworks-container__frameworks-tabs-inner{
      padding: 20px;
    }
    .frameworks-container__frameworks{
      height: 290px;
    }
    .frameworks-container__frameworks{
      width: 100%;
    }
    .frameworks-container__video iframe {
      transform: scale(1.5);
    }
    .frameworks-container__grid-item:first-child {
      padding-right: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .frameworks-container__title-bottom{
      margin-top: 30px;
    }
    .frameworks-container__grid-title {
      font-size: 20px;
      line-height: 30px;
    }
    .frameworks-container__grid-item-description {
      font-size: 12px;
      line-height: 24px;
    }
    .frameworks-container__grid-item {
      padding-right: 30px;
    }
    .frameworks-container__grid-item:first-child {
      padding-right: 30px;
    }
    .frameworks-container__middle-title{
      padding-top: 80px;
    }
    .frameworks-container__title-bottom {
      font-size: 10px;
    }
    .frameworks-container__middle-title {
      font-size: 36px;
    }
    .frameworks-container__frameworks {
      height: 245px;
    }
    .frameworks-container__frameworks-tabs-inner-text {
      font-size: 14px;
      line-height: 21px;
    }
    .frameworks-container__title-top{
      flex-direction: column;
      align-items: flex-start;
    }
    .frameworks-container__sub-title{
      margin-left: 0px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
      .frameworks-container__frameworks-tabs-container{
          width: 100%;
      }
    .frameworks-container__title-bottom {
      font-size: 11px;
      line-height: 18px;
    }
    .frameworks-container__grid-title {
      font-size: 15px;
      line-height: 20px;
    }
    .frameworks-container__grid-item-title{
      margin-right: 15px;
    }
    .frameworks-container__grid-item{
      display: flex;
      align-items: center;
    }
    .frameworks-container__grid{
      flex-direction: column;
    }
    .frameworks-container__video iframe {
      transform: scale(2);
    }
    .frameworks-container__video-outer{
      padding-top: 110%;
    }
    .frameworks-container__frameworks-tab{
      height: 60px;
      width: 33.3333%;
    }
    .frameworks-container__frameworks-tab:after{
      height : 4px;
      width: 100%;
      top: 0px;
      transform: scaleY(1) scaleX(0);
    }
    .frameworks-container__frameworks-tab.active:after {
      transform: scaleY(1) scaleX(1);
    }
    .frameworks-container__frameworks-tab svg {
      transform: scale(1);
      height: 15px;
    }
    .frameworks-container__frameworks-tabs{
      flex-direction: row;
      width: 100%;
      padding-right: 0px;
    }
    .frameworks-container__frameworks-tabs-container{
      height: 250px;
    }
    .frameworks-container__frameworks{
      flex-direction: column;
      height: auto;
    }
    .frameworks-container__video{
      width: 100%;
    }
    .frameworks-container__video:after,.frameworks-container__video:before{
      height: 100px;
      width: 100%;
    }
    .frameworks-container__title-wrap {
      padding-left: 15px;
      bottom: 30px;
    }
  }
</style>
