<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>Brand Guidelines</h1>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="lst-cont">
          <div class="fl-dir-col" >
            <div data-aos="fade-up" class="guidline__flex frst-contn pB-160">
            <div class="guidline__half">
              <div class="guidline__ltl-ttl">Logo</div>
              <div><img :src="require(`@/assets/img/guidline/1.png`)" class="lgimg" alt="guid-image"></div>
            </div>
            <div class="guidline__half">
              <div class="guidline__ltl-ttl">Colors</div>
              <div class="guidline__big-colors">
                <div style="background: #FF7152"></div>
                <div style="background: #0500FF"></div>
                <div style="background: #ffffff"></div>
              </div>
            </div>
          </div>
           <div data-aos="fade-up" class="guidline__flex">
               <div class="guidline__half">
            <div class="guidline__lrg-ttl font-51">Colour Logo</div>
          </div>
               <div class="guidline__half">
            <div class="guidline__paragraph paragraphMt">
              The CORE Corporate logo is an important expression of our brand identity. It should in no way be distorted or redrawn when applied to communications.
            </div>
          </div>
            </div>
            <div data-aos="fade-up" class="pB-160 guidline__colors-container">
            <div data-aos="fade-up" class="guidline__colors-inner" style="background: #000000">
              <div class="guidline__colors-inner-img"><img :src="require(`@/assets/img/guidline/1.png`)" alt="guidline1"></div>
              <div class="guidline__colors-inner-description">
                <div class="guidline__colors-inner-description-title" style="color: #ffffff">On dark</div>
                <div class="guidline__colors-inner-description-floor">
                  <div class="guidline__colors-inner-description-floor-color" style="background: #FF7152"></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-left: 15px; margin-right: 30px"><span class="wdth1">FF7152</span></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=255</span><span class="wdth2">G=113</span><span class="wdth2">B=82</span></div>
                  <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=1</span><span class="wdth3">M=69</span><span class="wdth3">Y=74</span><span class="wdth3">K=0</span></div>
                </div>
                <div class="guidline__colors-inner-description-floor">
                  <div class="guidline__colors-inner-description-floor-color" style="background: #FFFFFF"></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-left: 15px; margin-right: 30px"><span class="wdth1">FFFFFF</span></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=255</span><span class="wdth2">G=255</span><span class="wdth2">B=255</span></div>
                  <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=0</span><span class="wdth3">M=0</span><span class="wdth3">Y=0</span><span class="wdth3">K=0</span></div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="guidline__colors-inner guidline__colors-inner-white"  style="background: #ffffff">
              <div class="guidline__colors-inner-img"><img :src="require(`@/assets/img/guidline/2.png`)" alt="guidline-img"></div>
              <div class="guidline__colors-inner-description">
                <div class="guidline__colors-inner-description-title" style="color: #000000">On dark</div>
                <div class="guidline__colors-inner-description-floor">
                  <div class="guidline__colors-inner-description-floor-color" style="background: #FF7152"></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-left: 15px; margin-right: 40px"><span class="wdth1">FF7152</span></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=255</span><span class="wdth2">G=113</span><span class="wdth2">B=82</span></div>
                  <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=1</span><span class="wdth3">M=69</span><span class="wdth3">Y=74</span><span class="wdth3">K=0</span></div>
                </div>
                <div class="guidline__colors-inner-description-floor">
                  <div class="guidline__colors-inner-description-floor-color" style="background: #000000"></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-left: 15px; margin-right: 40px"><span class="wdth1">FFFFFF</span></div>
                  <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=0</span><span class="wdth2">G=0</span><span class="wdth2">B=0</span></div>
                  <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=58</span><span class="wdth3">M=46</span><span class="wdth3">Y=41</span><span class="wdth3">K=95</span></div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" class="guidline__flex">
            <div class="guidline__half">
              <div class="guidline__lrg-ttl font-51">
                <span>Clear Space</span>
                <span>& Positioning</span>
              </div>
            </div>
            <div class="guidline__half">
              <div class="guidline__paragraph paragraphMt">
                The logo should always be surrounded by generous white space. The minimum required space around
                the logo is equivalent to the radius of the symbol.
              </div>
              <div class="guidline__paragraph-half-img pB-160">
                <img :src="require(`@/assets/img/guidline/14.png`)" alt="guidline3">
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="guidline__flex">
            <div class="guidline__half">
              <div class="guidline__lrg-ttl font-51">
                <span>Incorrect</span>
                <span>Usage</span>
              </div>
            </div>
            <div class="guidline__half">
              <div class="guidline__paragraph paragraphMt">
                Listed below are examples of incorrect usage of the <br> CORE Corporate logo.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="guidline__table pB-160">
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/3.png`)" alt="guidline-4">
              <div class="guidline__table-item-ttl">
                Do not change the size relationship of the symbol
                and the wordmark.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/4.png`)" alt="guidline4">
              <div class="guidline__table-item-ttl">
                Do not make the logo a single colour.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/5.png`)" alt="guidline5">
              <div class="guidline__table-item-ttl">
                Do not alter the colour of the symbol or the wordmark.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/6.png`)" alt="guidline6">
              <div class="guidline__table-item-ttl">
                Do not add effects such as drop shadows, gradients or glow.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/7.png`)" alt="guidline7">
              <div class="guidline__table-item-ttl">
                Do not use as a mask or holding shape for imagery.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/8.png`)" alt="guidline8">
              <div class="guidline__table-item-ttl">
                Do not place onto backgrounds with insufficient contrast to the logo.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/9.png`)" alt="guidline9">
              <div class="guidline__table-item-ttl">
                Do not rotate, skew, or shear.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/10.png`)" alt="guidline10">
              <div class="guidline__table-item-ttl">
                Do not distort proportions.
              </div>
            </div>
            <div class="guidline__table-item">
              <img :src="require(`@/assets/img/guidline/11.png`)" alt="guidline11">
              <div class="guidline__table-item-ttl">
                Do not add text closely to the logotype to create another logo.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="guidline__flex">
          <div class="guidline__half">
            <div class="guidline__lrg-ttl font-51">Partnerships</div>
          </div>
          <div class="guidline__half">
            <div class="guidline__paragraph paragraphMt">
              When pairing the CORE corporate logo or any other CORE logo with another logo, a thin line
              is used to separate the two logos.
            </div>
          </div>
        </div>
          <div data-aos="fade-up" class="guidline__partners">
            <img :src="require(`@/assets/img/guidline/1.png`)" alt="guidline1">
            <span class="line"></span>
            <div class="guidline__partners-txt">Partners</div>
          </div>
          <div data-aos="fade-up" class="guidline__flex">
            <div class="guidline__half wdth340">
              <div class="guidline__half-ltl-ttl">
                Visual Balance
              </div>
              <div class="guidline__half-ltl-dscr">
                Ensure that each logo is visually balanced
                in terms of size.
              </div>
            </div>
            <div class="guidline__half">
              <div class="guidline__half-ltl-ttl">
                Equal Distance
              </div>
              <div class="guidline__half-ltl-dscr">
                Ensure that the space between the logos and the line are visually equal on both sides of the line.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="pT-160 guidline__flex">
              <div class="guidline__bg-outer">
                <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/guidelines_bg.jpg`)" alt="guidline-bg">
              </div>
              <div class="guidline__half">
                <div class="guidline__lrg-ttl font-51">Solid Colours</div>
              </div>
              <div class="guidline__half">
                <div class="guidline__paragraph paragraphMt">
                  When pairing the CORE corporate logo or any other CORE logo with another logo, a thin line
                  is used to separate the two logos.
                </div>
              </div>
          </div>
          <div data-aos="fade-up" class="guidline__color-scheme">
            <div class="guidline__color-scheme-item" style="background: #FF7152">
              <div class="guidline__color-scheme-item-ttl">CORE Red</div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth1">FF7152</span></div>
              <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=255</span><span class="wdth2">G=113</span><span class="wdth2">B=82</span></div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=1</span><span class="wdth3">M=69</span><span class="wdth3">Y=74</span><span class="wdth3">K=0</span></div>
            </div>
            <div class="guidline__color-scheme-item" style="background: #000000">
              <div class="guidline__color-scheme-item-ttl">Black</div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth1">000000</span></div>
              <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=0</span><span class="wdth2">G=0</span><span class="wdth2">B=0</span></div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=58</span><span class="wdth3">M=46</span><span class="wdth3">Y=41</span><span class="wdth3">K=95</span></div>
            </div>
            <div class="guidline__color-scheme-item" style="background: #FFFFFF">
              <div class="guidline__color-scheme-item-ttl">White</div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth1">FFFFFF</span></div>
              <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=255</span><span class="wdth2">G=255</span><span class="wdth2">B=255</span></div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=0</span><span class="wdth3">M=0</span><span class="wdth3">Y=0</span><span class="wdth3">K=0</span></div>
            </div>
            <div class="guidline__color-scheme-item" style="background: #0500FF">
              <div class="guidline__color-scheme-item-ttl">Blue</div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth1">0500FF</span></div>
              <div class="guidline__colors-inner-description-floor-descr" style="margin-right: 30px"><span class="wdth2">R=5</span><span class="wdth2">G=0</span><span class="wdth2">B=255</span></div>
              <div class="guidline__colors-inner-description-floor-descr"><span class="wdth3">C=83</span><span class="wdth3">M=74</span><span class="wdth3">Y=0</span><span class="wdth3">K=0</span></div>
            </div>
          </div>
          <div data-aos="fade-up" class="guidline__color-circle-container">
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #817EFF"></div>
              <div class="guidline__color-circle-title">817EFF</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #D5D5FF"></div>
              <div class="guidline__color-circle-title">D5D5FF</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #FFBB95"></div>
              <div class="guidline__color-circle-title">FFBB95</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #FF8D4D"></div>
              <div class="guidline__color-circle-title">FF8D4D</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #E2DD5D"></div>
              <div class="guidline__color-circle-title">E2DD5D</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #4ECB6A"></div>
              <div class="guidline__color-circle-title">4ECB6A</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: #99FFB0"></div>
              <div class="guidline__color-circle-title">99FFB0</div>
            </div>
          </div>
          <div data-aos="fade-up" class="pB-160 right guidline__color-circle-container">
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: rgb(255,142,117);background: linear-gradient(0deg, rgba(255,142,117,1) 0%, rgba(255,142,117,1) 100%);"></div>
              <div class="guidline__color-circle-title">FF8E75 → 9F402B</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: rgb(138,136,255);background: linear-gradient(180deg, rgba(138,136,255,1) 0%, rgba(5,0,255,1) 100%);"></div>
              <div class="guidline__color-circle-title">8A88FF → 0500FF</div>
            </div>
            <div class="guidline__color-circle-item">
              <div class="guidline__color-circle" style="background: rgb(213,213,255);background: linear-gradient(180deg, rgba(213,213,255,1) 0%, rgba(139,139,198,1) 100%);"></div>
              <div class="guidline__color-circle-title">D5D5FF → 8B8BC6</div>
            </div>
          </div>
          <div data-aos="fade-up" class="guidline__end-container">
            <router-link to="/about" class="guidline__end-half">
              <div class="guidline__end-half-descr">
                <div class="guidline__end-half-descr-title">About CORE</div>
                <div class="guidline__end-half-descr-txt">Our mission, vision & information</div>
              </div>
              <img :src="require(`@/assets/img/guidline/12.png`)" alt="guidline-12">
            </router-link>
            <router-link to="/technology" class="guidline__end-half">
              <div class="guidline__end-half-descr">
                <div class="guidline__end-half-descr-title">Technologies</div>
                <div class="guidline__end-half-descr-txt">Which makes CORE different</div>
              </div>
              <img :src="require(`@/assets/img/guidline/13.png`)" alt="guidline14">
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
  .guidline__bg-outer:before{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(0deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .guidline__bg-outer:after{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(180deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .guidline__bg-outer{
    position: absolute;
    top: 0px;
    right: -80px;
    padding-top: 1080px;
    z-index: 1;
    width: calc(100% + 370px);
    overflow: hidden;
  }
  .guidline__bg-outer img{
    position: absolute;
    top: -10%;
    right: 0px;
    height: 120%;
    width: 100%;
    object-fit: cover;
  }
  .guidline__end-half-descr-txt{
    font-size: 15px;
    line-height: 24px;
    margin-top: 15px;
    color: rgba(255,255,255,.5);
  }
  .guidline__end-half-descr-title{
    font-size: 30px;
    line-height: 40px;
  }
  .guidline__end-half{
    display: flex;
    width: calc(50% - 16px);
    padding: 40px 50px;
    justify-content: space-between;
    background: #010918;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .guidline__end-half:hover{
    background: #091325;
  }
  .guidline__end-half img{
    height: fit-content;
  }
  .guidline__end-container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    position: relative;
    z-index: 2;
  }
  .right.guidline__color-circle-container{
    margin-top: 60px;
    justify-content: flex-end;
  }
  .guidline__color-circle-title{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    margin-top: 10px;
  }
  .guidline__color-circle{
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
  .guidline__color-circle-container{
    display: flex;
    position: relative;
    z-index: 2;
  }
  .guidline__color-circle-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
  }
  .guidline__color-scheme-item-ttl{
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .guidline__color-scheme-item{
    display: flex;
    width: 25%;
    padding: 25px;
    flex-direction: column;
  }
  .guidline__color-scheme{
    display: flex;
    margin-top: 90px;
    margin-bottom: 60px;
    padding-right: 120px;
    position: relative;
    z-index: 2;
  }
  .guidline__half-ltl-dscr{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
  }
  .guidline__half-ltl-ttl{
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .guidline__half-ltl-dscr,.guidline__half-ltl-ttl{
    width: 340px;
  }
  .wdth340 .guidline__half-ltl-dscr,.wdth340 .guidline__half-ltl-ttl{
    width: 340px;
    margin-left: auto;
    margin-right: 80px;
  }
  .guidline__partners-txt{
    font-size: 30px;
    line-height: 40px;
  }
  .guidline__partners .line{
    height: 70px;
    width: 2px;
    background: #fff;
    opacity: .05;
    margin: 0px 30px;
  }
  .guidline__partners{
    display: flex;
    align-items: center;
    margin: 80px 0px;
  }
  .guidline__table-item{
    width: calc(33.333% - 40px);
    margin-bottom: 80px;
  }
  .guidline__table{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px;
  }
  .guidline__table-item-ttl{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    width: 70%;
    margin-top: 25px;
  }
  .lst-cont{
    flex-direction: column;
    display: flex;
    width: 100%;
  }
  .guidline__paragraph-half-img{
    margin-top: 120px;
  }
  .guidline__lrg-ttl span:last-child{
    margin-left: 100px;
  }
  .guidline__lrg-ttl span{
    font-size: inherit;
  }
  .guidline__lrg-ttl{
    display: flex;
    flex-direction: column;
  }
  .wdth1{
    width: 60px;
  }
  .wdth2{
    width: 50px;
    margin-right: 15px;
  }
  .wdth3{
    width: 40px;
    margin-right: 15px;
  }
  .guidline__colors-inner-description-floor-descr span{
    color: inherit;
    display: flex;
    font-size: inherit;
  }
  .guidline__colors-inner-description-floor-descr{
    color: rgba(255,255,255,.7);
    display: flex;
    font-size: 15px;
    line-height: 24px;
  }
  .guidline__colors-inner-white .guidline__colors-inner-description-floor-descr{
    color: rgba(0,5,15,.7);
  }
  .guidline__colors-inner-description-floor{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .guidline__colors-inner-description-title{
    margin-bottom: 25px;
  }
  .guidline__colors-inner-description-floor-color{
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  .guidline__colors-inner-description{
    padding-left: 50px;
  }
  .guidline__colors-inner{
    display: flex;
    padding: 35px 25px;
  }
  .guidline__colors-container{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  .paragraphMt{
    margin-top: 30px;
  }
  .fl-dir-col{
    flex-direction: column;
    width: 950px;
    margin-right: auto;
    margin-left: 0px;
  }
  .guidline__paragraph{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    display: flex;
    padding-right: 100px;
  }
  .guidline__ltl-ttl{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  .guidline__big-colors{
    display: flex;
  }
  .guidline__big-colors div{
    display: flex;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-right: 30px;
  }
  .guidline__flex{
    display: flex;
    width: 100%;
    position: relative;
  }
  .guidline__half{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
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
    margin-bottom: 100px;
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
  .guidline__color-scheme-item:nth-child(3) * {
    color: rgba(0,0,0,0.5);
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    #main{
      min-height: 800px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .guidline__end-half{
      padding: 20px;
    }
    .guidline__color-scheme{
      flex-wrap: wrap;
      padding-right: 0px;
    }
    .guidline__color-scheme-item{
      width: 50%;
    }
    .guidline__table-item {
      width: calc(33.333% - 30px);
      margin-bottom: 40px;
    }
    .guidline__table-item-ttl{
      width: 100%;
      margin-top: 15px;
    }
    .guidline__table-item img{
      height: 80px;
    }
    .guidline__colors-inner{
      display: flex;
      padding: 15px;
    }
    .guidline__colors-inner-description {
      padding-left: 30px;
    }
    .guidline__colors-inner-img img{
      height: 70px;
    }
    .main-container__description{
      padding-left: 25px;
    }
    .main-container__description h1{
      font-size: 50px;
    }
    /*.right{*/
    /*  padding-bottom: 60px;*/
    /*  padding-right: 75px;*/
    /*}*/
    .fl-dir-col{
      width: 100%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .wdth340 .guidline__half-ltl-dscr, .wdth340 .guidline__half-ltl-ttl,.guidline__half-ltl-dscr {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
      padding-right: 20px;
    }
    .guidline__table-item{
      width: calc(50% - 10px);
    }
    .guidline__paragraph-half-img[data-v-53bd836a] {
      margin-top: 60px;
    }
    .guidline__paragraph-half-img img{
      height: 120px;
    }
    .guidline__lrg-ttl span:last-child {
      margin-left: 30px;
    }
    .guidline__colors-inner-img{
      display: flex;
      width: 100%;
      justify-content: center;
      margin-bottom: 20px;
    }
    .guidline__colors-inner-description-floor-descr{
      margin-left: 0px!important;
      margin-right: 20px!important;
    }
    .guidline__colors-inner-description {
      padding-left: 0px;
    }
    .guidline__colors-inner{
      flex-direction: column;
    }
    .guidline__paragraph{
      padding-right: 0px;
    }
    .guidline__big-colors div{
      height: 60px;
      width: 60px;
      margin-right: 20px;
    }
    .lgimg{
      height: 70px;
    }
    .bottom__description-text,.bottom__description-ttl{
      font-size: 12px;
      line-height: 20px;
    }
    .bottom__description-item{
      width: 45%;
    }
    .bottom__description-floor {
      margin-bottom: 15px;
    }
    .main-container__description{
      padding-left: 0px;
    }
    .bottom__description{
      width: 100%;
      padding-left: 240px;
      margin-bottom: 20px;
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
    .guidline__end-container{
      flex-direction: column;
    }
    .guidline__end-half{
      width: 100%;
      margin-bottom: 30px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .right.guidline__color-circle-container{
      justify-content: center;
    }
    .guidline__color-circle-item{
      margin-right: 10px;
    }
    .guidline__color-circle-title{
      font-size: 11px;
    }
    .guidline__color-circle{
      height: 34px;
      width: 34px;
    }
    .guidline__partners-txt{
      font-size: 25px;
      line-height: 35px;
    }
    .guidline__partners img{
      height: 70px;
    }
    .guidline__table{
      margin-top: 50px;
    }
    .paragraphMt br{
      display: none!important;
    }
    .wdth3 {
      width: 28px;
      margin-right: 5px;
    }
    .wdth2 {
      width: 38px;
      margin-right: 5px;
    }
    .wdth1 {
      width: 48px;
    }
    .guidline__colors-inner-description-floor-descr {
      margin-left: 0px!important;
      margin-right: 10px!important;
    }
    .guidline__colors-inner-description-floor-descr {
      font-size: 11px;
      line-height: 20px;
    }
    .guidline__half{
      width: 100%;
    }
    .guidline__ltl-ttl{
      margin-bottom: 15px;
    }
    .guidline__big-colors div {
      height: 30px;
      width: 30px;
      margin-right: 10px;
      margin-top: 10px;
    }
    .lgimg {
      height: 55px;
    }
    .guidline__flex:not(.frst-contn){
      flex-direction: column;
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
  }
</style>
