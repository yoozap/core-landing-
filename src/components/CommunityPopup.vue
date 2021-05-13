<template>
  <div class="community-popup__container" :class="$store.state.communityNum !== 0 ? 'active' : ''">
    <div class="bg"></div>
    <div class="community-popup__inner">
      <div class="close-popup" @click="closePopup">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.75 1.25L1.25 38.75" stroke="white" stroke-width="4"/>
          <path d="M1.25 1.25L38.75 38.75" stroke="white" stroke-width="4"/>
        </svg>
      </div>
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="community-popup__item" v-for="(item,index) in itemData" :key="index">
          <div class="videoContainer">
            <img :src="require(`@/assets/img/gradient2.png`)" alt="gradient" class="gradient2">
            <div class="video" v-html="item.video"></div>
          </div>
          <h4>{{item.title}}</h4>
          <div class="community-popup__item-scroll">
            <div class="subTtl">
              {{item.subTitle}}
            </div>
            <div class="txt" v-html="item.text"></div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      settings: {
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        fade: true
      }
    }
  },
  watch: {
    '$store.state.communityNum': function () {
      if (this.$store.state.communityNum !== 0) {
        this.$refs.carousel.goTo(this.$store.state.communityNum - 1)
      }
      console.log('hi')
    }
  },
  methods: {
    goToSlide (num) {
      this.$refs.carousel.goTo(num)
    },
    closePopup () {
      this.$store.commit('setCommunity', 0)
    }
  }
}
</script>
<style scoped>
  .close-popup{
    position: absolute;
    top: 90px;
    right: 80px;
    z-index: 10;
    cursor: pointer;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: scale(0);
  }
  .community-popup__container.active .close-popup{
    transform: scale(1);
    transition-delay: .2s;
  }
  .gradient2{
    position: absolute;
    object-fit: contain;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  video{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 2;
  }
  .close-popup path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .close-popup:hover path{
    stroke: #0400DD;
  }
  .videoContainer{
    padding-top: 77%;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: -30%;
    width: 100%;
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: scale(.8) translateY(-40%);
  }
  .active.community-popup__container .videoContainer{
    transform: scale(1) translateY(-40%);
    opacity: 1;
    transition-delay: .6s;
  }
  .community-popup__item-scroll{
    overflow: auto;
    max-height: calc(100% - 120px);
    height: calc(100% - 120px);
    padding-right: 80px;
    position: relative;
    z-index: 2;
  }
  .community-popup__item .txt{
    font-size: 15px;
    line-height: 24px;
    margin-top: 20px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    color: rgba(255,255,255,.5);
    opacity: 0;
  }
  .community-popup__container.active .txt{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .6s;
  }
  .community-popup__item .subTtl{
    font-size: 18px;
    line-height: 28px;
    position: relative;
    z-index: 2;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .community-popup__container.active .community-popup__item .subTtl{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .community-popup__item h4{
    font-size: 72px;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .community-popup__container.active .community-popup__item h4{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .4s;
  }
  .community-popup__item{
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 65px 80px 80px 80px;
    outline: none;
  }
  .community-popup__container{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100000;
    pointer-events: none;
  }
  .community-popup__container.active{
    pointer-events: all;
  }
  .community-popup__container .bg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #00050F;
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transition-delay: .6s;
  }
  .community-popup__container.active .bg{
    opacity: .4;
    transition-delay: 0s;
  }
  .community-popup__inner{
    position: absolute;
    z-index: 3;
    top: 0px;
    right: 0px;
    height: 100%;
    background: #010918;
    width: 800px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateX(110%);
    transition-delay: .6s;
  }
  .community-popup__container.active .community-popup__inner{
    transform: translateX(0%);
    transition-delay: 0s;
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .community-popup__item-scroll{
      padding-right: 20px;
    }
    .community-popup__inner{
      width: 100%;
    }
    .community-popup__item{
      padding: 25px 15px 30px 15px;
    }
    .community-popup__item h4{
      font-size: 40px;
      line-height: 50px;
    }
    .close-popup{
      top: 36px;
      right: 15px;
    }
    .community-popup__container.active .close-popup{
      transform: scale(.8);
    }
    .community-popup__item .txt{
      font-size: 16px;
      line-height: 28px;
      margin-top: 20px;
    }
  }
</style>
