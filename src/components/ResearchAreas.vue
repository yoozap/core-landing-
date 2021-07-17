<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
        <div class="research-video__inner">
          <img :src="require(`@/assets/img/gradient.png`)" alt="" class="research-video_grad">
          <iframe src="https://iframe.videodelivery.net/112f3c0278f210a880e8ea0abdef6913?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe> </div>
      <TopHead/>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1><span>Research</span><span>Areas</span></h1>
          </div>
        </div>
      </div>
      <div class="container" data-aos="fade-up">
        <div class="research__container">
          <div class="research__sub">CORE has been involved in intense academic research since inception and explores new advances in computing and related fields. CORE has an open-source research, development, and deployment laboratory. We believe in community, collaboration, and furthering the growth and reach of blockchain technology. In continuing our goal to make a lasting contribution to the blockchain ecosystem the following is an archive of all the research conducted by the CORE team.</div>
          <div class="research__tabs">
            <div class="research__tab" v-for="research in $store.state.research" :key="research.id" @click="openBlog(research.id)" :class="activeBlog == research.id ? 'active': ''">
              <div class="research__tab-title-container">
                <div class="research__tab-title">{{research.title}}</div>
                <div class="research__tab-button">
                  <div class="research__tab-button-title">
                    <span>View</span>
                    <span>Hide</span>
                  </div>
                  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8006 12.3276L13.7965 10.3441L9.33362 14.807L9.33362 0.571289L6.52367 0.571289L6.52367 14.807L2.0608 10.3441L0.0566406 12.3276L7.92864 20.1996L15.8006 12.3276Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <slide-up-down :active="activeBlog == research.id">
                <div class="research__tab-links">
                  <a href="##" class="research__tab-link" v-for="(link,index) in research.links" :key="index">
                    <div class="research__tab-link-left">
                      <div class="research__tab-link-title">{{link.title}}</div>
                      <div class="research__tab-link-description">{{link.subtitle}}</div>
                    </div>
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.8706 16.2576L9.88711 14.2534L14.35 9.79053L0.114257 9.79053L0.114258 6.98058L14.35 6.98058L9.88711 2.51771L11.8706 0.51355L19.7426 8.38555L11.8706 16.2576Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </slide-up-down>
            </div>
          </div>
          <div class="research__nav pB-160">
            <router-link to="/about">
                <div class="research__nav-description">
                  <div class="research__nav-title">About CORE</div>
                  <div class="research__nav-text">Our mission, vision & information</div>
                </div>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0914 18.1653C15.9764 14.3284 19.7559 11.2632 24.0972 9.23962C28.4384 7.216 33.2082 6.29603 37.9866 6.56072C42.7649 6.8254 47.4052 8.26662 51.4988 10.7575C55.5924 13.2483 59.0138 16.7124 61.4616 20.8446L63.5759 19.6643L67.0997 17.5869C63.9384 12.2424 59.4485 7.81572 54.0707 4.74128C48.693 1.66684 42.6121 0.050293 36.4249 0.050293C30.2378 0.050293 24.1569 1.66684 18.7791 4.74128C13.4014 7.81572 8.91148 12.2424 5.75016 17.5869L4 20.3489L6.79556 22.0131L17.6137 28.4695C15.8442 32.9414 15.721 37.901 17.2663 42.456C18.8116 47.011 21.9238 50.8622 26.0431 53.3168C30.1624 55.7714 35.0182 56.6681 39.7368 55.8456C44.4553 55.0231 48.7269 52.5354 51.7829 48.8302L59.6645 53.5515C56.7788 57.3917 52.9968 60.4592 48.6524 62.4832C44.3079 64.5072 39.5344 65.4256 34.7532 65.1574C29.9719 64.8891 25.3299 63.4424 21.2366 60.9449C17.1434 58.4474 13.7248 54.9759 11.2825 50.8367L5.70317 54.1534C8.8645 59.4979 13.3544 63.9246 18.7321 66.9991C24.1099 70.0735 30.1908 71.69 36.3779 71.69C42.5651 71.69 48.646 70.0735 54.0238 66.9991C59.4015 63.9246 63.8914 59.4979 67.0527 54.1534L68.7206 51.3443L65.9251 49.68L57.0451 44.3803L49.3867 39.9423C48.4544 42.9246 46.5346 45.4964 43.9464 47.2306C41.3582 48.9647 38.2574 49.7567 35.1593 49.4749C32.0612 49.1932 29.1523 47.8546 26.916 45.6816C24.6798 43.5086 23.2508 40.6321 22.8665 37.5301C22.4823 34.4281 23.1659 31.2874 24.8038 28.6299C26.4417 25.9723 28.9352 23.9579 31.8701 22.9215C34.8049 21.8851 38.0043 21.8891 40.9366 22.9327C43.8689 23.9763 46.3575 25.9968 47.9889 28.6584L53.6152 25.4007C51.9624 22.6459 49.6789 20.3274 46.9547 18.6381C44.2306 16.9488 41.1444 15.9374 37.9529 15.688C34.7614 15.4387 31.5567 15.9586 28.6055 17.2044C25.6542 18.4503 23.0415 20.3862 20.9848 22.8512L13.0914 18.1653Z" fill="#FF7152"/>
                </svg>
            </router-link>
            <router-link to="/technology">
                <div class="research__nav-description">
                  <div class="research__nav-title">Technologies</div>
                  <div class="research__nav-text">Which makes CORE different</div>
                </div>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="4" transform="matrix(-1 0 0 1 72 0)" fill="#FF7152"/>
                  <rect width="40" height="40" rx="4" transform="matrix(-1 0 0 1 51 16)" fill="#0500FF"/>
                  <rect opacity="0.2" width="40" height="40" rx="4" transform="matrix(-1 0 0 1 40 32)" fill="white"/>
                </svg>
            </router-link>
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
      firstAnimation: false,
      activeBlog: null
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
    },
    openBlog (id) {
      if(this.activeBlog == id){
        this.activeBlog = null
      }else{
        this.activeBlog = id
      }
    }
  }
}
</script>
<style scoped>
  .research-video_grad{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .research-video__inner iframe{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .research-video__inner{
    width: 100%;
    padding-top: 58%;
    position: absolute;
    top: 0px;
    transform: translateY(-43%);
    right: -35%;
    z-index: 1;
  }
  .research__nav-text{
    color: rgba(255,255,255,.5);
  }
  .research__nav-title{
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 15px;
  }
  .research__nav a{
    display: flex;
    width: calc(50% - 16px);
    height: 164px;
    background: #010918;
    padding: 40px 50px;
    align-items: center;
    justify-content: space-between;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__nav a:hover{
    background: #050e1f;
  }
  .research__nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  .research__tab-link-description{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-link:hover .research__tab-link-description{
    color: rgba(255,255,255,.7);
  }
  .research__tab-link{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.05);
    padding: 20px 0px;
    align-items: center;
  }
  .research__tab-link:first-child{
    padding-top: 10px;
  }
  .research__tab-link:last-child{
    padding-bottom: 0px;
    border-bottom: 0px solid rgba(255,255,255,.05);
  }
  .research__tab-link-title{
    font-size: 15px;
    line-height: 24px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-link:hover .research__tab-link-title{
    color: #FF7152;
  }
  .research__tab-link svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-link svg path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-link:hover svg{
    transform: translateX(10px);
  }
  .research__tab-link:hover path{
    fill: #FF7152;
  }
  .research__tab-title{
    font-size: 20px;
    margin-bottom: 15px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-button-title span{
    font-size: 14px;
    line-height: 24px;
    display: flex;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab.active  .research__tab-button-title span{
    transform: translateY(-100%);
  }
  .research__tab-button-title{
    display: flex;
    flex-direction: column;
    height: 24px;
    overflow: hidden;
    margin-right: 10px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab-button path,.research__tab-button svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .research__tab.active .research__tab-button svg{
    transform: rotate(180deg);
  }
  .research__tab:hover .research__tab-button path,.research__tab.active .research__tab-button path{
    fill: #FF7152;
  }
  .research__tab:hover .research__tab-title,.research__tab.active .research__tab-title{
    color: #FF7152;
  }
  .research__tab-button{
    display: flex;
  }
  .research__tab-title-container{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .research__tab{
    display: flex;
    flex-direction: column;
    background: #010918;
    padding: 40px 40px 25px 40px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .research__tabs{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .research__container{
    display: flex;
    width: 100%;
    flex-direction: column;
  }
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
    overflow: hidden;
    z-index: 2;
  }
  .research__sub{
    margin: 100px 0px;
    font-size: 20px;
    line-height: 30px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
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
    .proposals_li{
      width: 60%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .proposals_li li{
      font-size: 22px;
      padding-left: 30px;
    }
    .main-container__description{
      padding-left: 0px;
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
    .research__nav{
      flex-direction: column;
    }
    .research__nav a{
      width: 100%;
      margin-bottom: 20px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .research__nav a{
      padding: 20px;
    }
    .research__tab-link-left{
      width: 90%;
    }
    .research__tab{
      padding: 20px 20px 10px 20px;
    }
    .proposals_li li{
      font-size: 15px;
      padding-left: 20px;
    }
    .proposals_li .proposals_text a{
      margin-left: 0px;
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
    .main-container__description{
      padding: 0px;
    }
    #main{
      min-height: 600px;
    }
    .research-video__inner {
      width: 150%;
      padding-top: 81%;
      transform: translateY(-43%);
      right: -55%;
    }
  }
</style>
