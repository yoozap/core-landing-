<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <div class="community__main-bg">
        <img v-prlx="{ speed: 0.2 }" :src="require(`@/assets/img/community.jpg`)" alt="community">
      </div>
      <TopHead/>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>Community</h1>
          </div>
        </div>
      </div>
      <div class="container community_main">
        <div class="community__container">
          <div class="community__container-inner">
            <div data-aos="fade-up" class="community__vertical-ttl-container mb-80">
              <div class="community__vertical-ttl font-51">Vision</div>
              <div class="community__vertical-ttl-text font-15">
                Our goal is to make a lasting contribution to the blockchain ecosystem by not only addressing the current limitations of blockchain technology through our hybrid software solution, but by also growing the global blockchain community.
                We here at CORE Project believe in a truly peer-to-peer community and are actively involved in our community through our hosted events, our grant programme, and our collaborations.
                <br>
                <br>
                We aim to build a truly community-centric platform by instilling a community-first behaviour within the core beliefs of our team.
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="community__container">
          <div class="community__container-inner">
            <div class="community__horizontal-ttl-container pb-100">
              <div class="community__horizontal-ttl font-51">A truly community-driven
                blockchain</div>
              <div class="community__horizontal-ttl-text font-15">
                CORE project is centred around our community — our management and developer teams are also chosen by our community through voting done using our native token on our platform, and funding for the project comes from contributions made by our community.
                <br>
                <br>
                Apart from that, any changes proposed to our blockchain or platform will be voted for or against by our community, creating a truly community-driven blockchain.
              </div>
            </div>
          </div>
        </div>
        <div class="community__container mb-80">
          <div class="community__circle-container">
            <div class="community__circle">
              <img v-prlx="{ speed: 0.2 }" :src="require(`@/assets/img/circle1.jpg`)" alt="circle1">
            </div>
          </div>
          <div class="community__container-inner">
            <div data-aos="fade-up" class="community__vertical-ttl-container">
              <div class="community__vertical-ttl font-51">Events</div>
              <div class="community__vertical-ttl-text font-15">
                We are actively involved in our community through outreach and hosted events. We host several events throughout the year: most notably our Hackathon event that we run annually to attract the programming talent that our growing community has to offer.
                <br>
                <br>
                We also take it upon ourselves to educate the public on the benefits, risks, and uses of blockchain technology.
              </div>
            </div>
            <div data-aos="fade-up" class="community__vertical-ttl-container">
              <div class="community__vertical-ttl font-51">Teams</div>
              <div class="community__vertical-ttl-text font-15">
                Our team also shares our passion for blockchain technology and is open to collaborate with other blockchain projects, where aside from sharing our technical knowledge, we will sponsor and organize webinars and conferences for these other projects, building a larger developer community.
                <br>
                <br>
                By integrating and collaborating with different Blockchain platforms and DeFI projects, Teams can tap into the support of the broader community of followers that we are looking to build.
              </div>
            </div>
            <div data-aos="fade-up" class="community__horizontal-ttl-container">
              <div class="community__circle2-container">
                <div class="community__circle2">
                  <img v-prlx="{ speed: 0.2 }" :src="require(`@/assets/img/circle2.jpg`)" alt="circle2">
                </div>
              </div>
              <div class="community__horizontal-ttl font-51">Developer Community</div>
              <div class="community__horizontal-sub-ttl">To be involved in CORE developer community, a person or team must have the following qualifications:</div>
              <ul>
                <li>Strong knowledge of the basics of Blockchain development, i.e. its characteristics and popular platforms</li>
                <li>Awareness of the points of failure in the overall system</li>
                <li>Expertise at top Blockchain programming languages</li>
                <li>Familiarity with the popular cryptocurrencies</li>
                <li>A background in web development, networking, security, cryptography
                  and mathematics</li>
              </ul>
            </div>
            <div data-aos="fade-up" class="community__horizontal-ttl-container">
              <div class="community__horizontal-ttl font-51">Grant Programme</div>
              <div class="community__horizontal-sub-ttl">We offer a grant programme which users can use to get funding for their projects. The funding for the grant comes from the contributions made by our community. We provide grant funding for the following:</div>
              <ul>
                <li>Tools for development and deployment (e.g. IDEs, SDKs for side chains)</li>
                <li>Runtime Modules related to interoperability, governance and consensus</li>
                <li>Ecosystem developers like wallets and exchanges.</li>
                <li>Monitoring, such as block explorers and off-chain data services</li>
                <li>Distributed file system developers</li>
                <li>Bridge integrators</li>
              </ul>
              <div class="proposals_text">
                Please submit your proposal on or before Monday 10 May 2021 at 18:00h GMT to <a target="_blank" href="mailto:community@coremultichain.com">community@coremultichain.com</a>
              </div>
            </div>
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
  .proposals_text{
    position: relative;
    z-index: 2;
    margin-top: 50px;
    font-size: 13px;
    opacity: 1;
    line-height: 20px;
    color: rgba(255,255,255,.5);
  }
  .proposals_text a{
    color: #fff;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-left: 5px;
    font-size: inherit;
  }
  .proposals_text a:hover{
    color: #ff7152;
  }
  .community__circle2{
    margin-left: auto;
    transform: translateX(43vw);
  }
  .community__circle{
    transform: translateX(-40%);
  }
  .community__circle-container{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    display: flex;
  }
  .community__circle2-container{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    display: flex;
  }
  .community__main-bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 720px;
    z-index: 1;
    opacity: .7;
    overflow: hidden;
  }
  .community__main-bg:before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 100%;
    background: rgb(0,5,15);
    background: linear-gradient(
      180deg
      , rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .community__main-bg img{
    width: 100%;
    height: 120%;
    top: -10%;
    object-fit: cover;
    position: absolute;
    right: 0px;
  }
  .community__horizontal-ttl-text{
    margin-top: 25px;
  }
  .community__horizontal-sub-ttl{
    margin-top: 25px;
    font-size: 15px;
    line-height: 24px;
    z-index: 2;
    position: relative;
  }
  ul{
    margin-top: 25px;
  }
  li{
    position: relative;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    padding-left: 25px;
    margin-bottom: 8px;
  }
  li:after{
    position: absolute;
    top: 8px;
    left: 0px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #0500FF;
    content: '';
  }
  .community_main{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .community__horizontal-ttl-container{
    padding-top: 100px;
    position: relative;
  }
  .pb-100{
    padding-bottom: 100px;
  }
  .mb-80{
    margin-bottom: 80px;
  }
  .community__vertical-ttl{
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-bottom: auto;
    margin-right: 50px;
  }
  .community__vertical-ttl-container{
    display: flex;
    margin-top: 100px;
    position: relative;
  }
  .community__container-inner{
    display: flex;
    flex-direction: column;
    width: 760px;
  }
  .community__container{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-right: 210px;
    position: relative;
  }
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
    font-size: 30px;
    padding-left: 25px;
    position: relative;
    margin-bottom: 15px;
  }
  .proposals_li li:after{
    background: #0500FF;
    content: '';
    height: 10px;
    width: 10px;
    display: flex;
    position: absolute;
    top: 14px;
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
  .community__horizontal-ttl{
    position: relative;
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
    .proposals_text{
      width: 60%;
    }
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
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .community__circle2 {
      margin-left: auto;
      transform: scale(.5) translateX(67vw);
    }
    .community__circle{
      transform: scale(.7) translateX(-132%);
    }
    .community__container{
      padding-right: 0px;
    }
    .community__circle-container{
      width: 100%;
    }
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
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .proposals_text{
      width: 100%;
    }
    .proposals_text a{
      margin-left: 0px;
    }
    .community__circle{
      transform: scale(.7) translateX(-78%);
    }
    .community__vertical-ttl{
      margin-right: 20px;
    }
    .community__vertical-ttl-container{
      margin-top: 50px;
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
