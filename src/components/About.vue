<template>
  <div class="container" id="about">
    <picture>
      <img src="@/assets/img/tokenomicslist.jpg" alt="tokenomicslist" class="bg">
    </picture>
    <div class="inner pT-160 pB-160">
      <div class="left">
        <h2 class="font-51" data-aos="fade-up">
          CORE Bridge
        </h2>
        <div class="sub-ttl" data-aos="fade-up">Access to <span>500+</span> <br> Cryptocurrencies and Tokens</div>
        <p data-aos="fade-up">CORE bridges allow resources, data, and information to be shared between multiple blockchains in different ecosystems, which is a limitation currently present in blockchain technology. This cross-chain communication is called interoperability.</p>
      </div>
      <div class="right" data-aos="fade-up">
        <hooper :autoPlay="true" :playSpeed="5000" :transition="0" :itemsToShow="1" :infiniteScroll="true">
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/1.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/2.png`)" alt="" class="img_2">
              <div class="middle-image">
                <div class="middle-image__inner">
                  <svg width="74" height="81" viewBox="0 0 74 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2899 20.4035C13.5551 16.0819 17.8329 12.6295 22.7464 10.3503C27.6599 8.07102 33.0585 7.03482 38.4667 7.33295C43.8749 7.63107 49.1269 9.25436 53.7601 12.0599C58.3933 14.8654 62.2657 18.7671 65.0361 23.4213L67.4291 22.0919L71.4174 19.7521C67.8394 13.7324 62.7577 8.7465 56.671 5.28366C50.5844 1.82083 43.7019 6.10352e-05 36.6992 6.10352e-05C29.6964 6.10352e-05 22.814 1.82083 16.7273 5.28366C10.6406 8.7465 5.55891 13.7324 1.98086 19.7521L0 22.8629L3.16406 24.7375L15.4082 32.0095C13.4055 37.0463 13.2661 42.6324 15.015 47.7629C16.764 52.8933 20.2866 57.2311 24.9488 59.9957C29.6111 62.7604 35.107 63.7704 40.4476 62.844C45.7881 61.9176 50.6228 59.1157 54.0816 54.9423L63.0021 60.2601C59.736 64.5854 55.4556 68.0404 50.5384 70.3201C45.6212 72.5999 40.2185 73.6343 34.807 73.3321C29.3955 73.0299 24.1415 71.4005 19.5087 68.5875C14.8759 65.7745 11.0067 61.8644 8.24252 57.2023L1.92769 60.9381C5.50573 66.9577 10.5875 71.9436 16.6741 75.4065C22.7608 78.8693 29.6432 80.6901 36.646 80.6901C43.6487 80.6901 50.5312 78.8693 56.6178 75.4065C62.7045 71.9436 67.7862 66.9577 71.3643 60.9381L73.2521 57.774L70.088 55.8995L60.0375 49.9303L51.3695 44.9316C50.3143 48.2906 48.1415 51.1874 45.2121 53.1407C42.2828 55.0939 38.7732 55.9859 35.2667 55.6685C31.7602 55.3511 28.4679 53.8434 25.9368 51.396C23.4058 48.9485 21.7884 45.7086 21.3535 42.2147C20.9186 38.7209 21.6923 35.1834 23.5461 32.1901C25.3999 29.1968 28.2222 26.928 31.5439 25.7606C34.8656 24.5933 38.4867 24.5977 41.8055 25.7732C45.1243 26.9487 47.941 29.2244 49.7875 32.2222L56.1555 28.5529C54.2847 25.4502 51.7003 22.8388 48.617 20.9361C45.5337 19.0333 42.0408 17.8942 38.4285 17.6133C34.8163 17.3325 31.1893 17.918 27.8489 19.3213C24.5086 20.7246 21.5516 22.905 19.2237 25.6814L10.2899 20.4035Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/3.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/4.png`)" alt="" class="img_2">
              <div class="middle-image">
                <div class="middle-image__inner">
                  <svg width="74" height="81" viewBox="0 0 74 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2899 20.4035C13.5551 16.0819 17.8329 12.6295 22.7464 10.3503C27.6599 8.07102 33.0585 7.03482 38.4667 7.33295C43.8749 7.63107 49.1269 9.25436 53.7601 12.0599C58.3933 14.8654 62.2657 18.7671 65.0361 23.4213L67.4291 22.0919L71.4174 19.7521C67.8394 13.7324 62.7577 8.7465 56.671 5.28366C50.5844 1.82083 43.7019 6.10352e-05 36.6992 6.10352e-05C29.6964 6.10352e-05 22.814 1.82083 16.7273 5.28366C10.6406 8.7465 5.55891 13.7324 1.98086 19.7521L0 22.8629L3.16406 24.7375L15.4082 32.0095C13.4055 37.0463 13.2661 42.6324 15.015 47.7629C16.764 52.8933 20.2866 57.2311 24.9488 59.9957C29.6111 62.7604 35.107 63.7704 40.4476 62.844C45.7881 61.9176 50.6228 59.1157 54.0816 54.9423L63.0021 60.2601C59.736 64.5854 55.4556 68.0404 50.5384 70.3201C45.6212 72.5999 40.2185 73.6343 34.807 73.3321C29.3955 73.0299 24.1415 71.4005 19.5087 68.5875C14.8759 65.7745 11.0067 61.8644 8.24252 57.2023L1.92769 60.9381C5.50573 66.9577 10.5875 71.9436 16.6741 75.4065C22.7608 78.8693 29.6432 80.6901 36.646 80.6901C43.6487 80.6901 50.5312 78.8693 56.6178 75.4065C62.7045 71.9436 67.7862 66.9577 71.3643 60.9381L73.2521 57.774L70.088 55.8995L60.0375 49.9303L51.3695 44.9316C50.3143 48.2906 48.1415 51.1874 45.2121 53.1407C42.2828 55.0939 38.7732 55.9859 35.2667 55.6685C31.7602 55.3511 28.4679 53.8434 25.9368 51.396C23.4058 48.9485 21.7884 45.7086 21.3535 42.2147C20.9186 38.7209 21.6923 35.1834 23.5461 32.1901C25.3999 29.1968 28.2222 26.928 31.5439 25.7606C34.8656 24.5933 38.4867 24.5977 41.8055 25.7732C45.1243 26.9487 47.941 29.2244 49.7875 32.2222L56.1555 28.5529C54.2847 25.4502 51.7003 22.8388 48.617 20.9361C45.5337 19.0333 42.0408 17.8942 38.4285 17.6133C34.8163 17.3325 31.1893 17.918 27.8489 19.3213C24.5086 20.7246 21.5516 22.905 19.2237 25.6814L10.2899 20.4035Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slideInner">
              <img :src="require(`@/assets/img/crypto/5.png`)" alt="" class="img_1">
              <img :src="require(`@/assets/img/crypto/6.png`)" alt="" class="img_2">
              <div class="middle-image">
                <div class="middle-image__inner">
                  <svg width="74" height="81" viewBox="0 0 74 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2899 20.4035C13.5551 16.0819 17.8329 12.6295 22.7464 10.3503C27.6599 8.07102 33.0585 7.03482 38.4667 7.33295C43.8749 7.63107 49.1269 9.25436 53.7601 12.0599C58.3933 14.8654 62.2657 18.7671 65.0361 23.4213L67.4291 22.0919L71.4174 19.7521C67.8394 13.7324 62.7577 8.7465 56.671 5.28366C50.5844 1.82083 43.7019 6.10352e-05 36.6992 6.10352e-05C29.6964 6.10352e-05 22.814 1.82083 16.7273 5.28366C10.6406 8.7465 5.55891 13.7324 1.98086 19.7521L0 22.8629L3.16406 24.7375L15.4082 32.0095C13.4055 37.0463 13.2661 42.6324 15.015 47.7629C16.764 52.8933 20.2866 57.2311 24.9488 59.9957C29.6111 62.7604 35.107 63.7704 40.4476 62.844C45.7881 61.9176 50.6228 59.1157 54.0816 54.9423L63.0021 60.2601C59.736 64.5854 55.4556 68.0404 50.5384 70.3201C45.6212 72.5999 40.2185 73.6343 34.807 73.3321C29.3955 73.0299 24.1415 71.4005 19.5087 68.5875C14.8759 65.7745 11.0067 61.8644 8.24252 57.2023L1.92769 60.9381C5.50573 66.9577 10.5875 71.9436 16.6741 75.4065C22.7608 78.8693 29.6432 80.6901 36.646 80.6901C43.6487 80.6901 50.5312 78.8693 56.6178 75.4065C62.7045 71.9436 67.7862 66.9577 71.3643 60.9381L73.2521 57.774L70.088 55.8995L60.0375 49.9303L51.3695 44.9316C50.3143 48.2906 48.1415 51.1874 45.2121 53.1407C42.2828 55.0939 38.7732 55.9859 35.2667 55.6685C31.7602 55.3511 28.4679 53.8434 25.9368 51.396C23.4058 48.9485 21.7884 45.7086 21.3535 42.2147C20.9186 38.7209 21.6923 35.1834 23.5461 32.1901C25.3999 29.1968 28.2222 26.928 31.5439 25.7606C34.8656 24.5933 38.4867 24.5977 41.8055 25.7732C45.1243 26.9487 47.941 29.2244 49.7875 32.2222L56.1555 28.5529C54.2847 25.4502 51.7003 22.8388 48.617 20.9361C45.5337 19.0333 42.0408 17.8942 38.4285 17.6133C34.8163 17.3325 31.1893 17.918 27.8489 19.3213C24.5086 20.7246 21.5516 22.905 19.2237 25.6814L10.2899 20.4035Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide
  },
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .sub-ttl{
    font-size: 30px;
    line-height: 40px;
    margin-top: 25px;
  }
  .sub-ttl span{
    color: #FF7152;
    font-size: inherit;
  }
  .hooper-slide.is-active .middle-image__inner {
    transform: scale(1);
    opacity: 1;
    transition-delay: .8s;
  }
  .middle-image__inner svg{
    backface-visibility: hidden;
  }
  .middle-image__inner{
    opacity: 0;
    transform: scale(.8);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    height: 33%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF7152;
    border-radius: 50%;
    backface-visibility: hidden;
  }
  .middle-image{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  p{
    font-size: 20px;
    line-height: 30px;
    margin-top: 25px;
    color: rgba(255,255,255,.5);
  }
  h2{
    color: #fff;
  }
  h2 span{
    font-size: inherit;
    color: #ff7152;
  }
  .left{
    width: 42%;
  }
  .right{
    width: 58%;
  }
  .inner{
    display: flex;
    width: 100%;
    position: relative;
    z-index: 2;
  }
  .container{
    position: relative;
  }
  .slideInner{
    width: 47%;
    padding-top: 47%;
    position: relative;
    height: 0px;
  }
  .img_1{
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    height: 52%;
    width: 52%;
    object-fit: contain;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(-20px);
    opacity: 0;
  }
  .img_2{
    position: absolute;
    z-index: 1;
    right: 0px;
    bottom: 0px;
    height: 52%;
    width: 52%;
    object-fit: contain;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(-20px);
    opacity: 0;
  }
  .hooper-slide.is-active img{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .6s;
  }
  .hooper-slide.is-active .img_1{
    transition-delay: .7s;
  }
  .hooper{
    height: 100%;
  }
  .hooper-slide{
    display: flex;
    justify-content: center;
  }
  .right{
    pointer-events: none!important;
    overflow: hidden;
  }
  .hooper-list{
    overflow: visible;
  }
  .bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% + 210px);
    height: 120%;
  }
  .hooper-list{
    pointer-events: none;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .middle-image__inner svg{
      transform: scale(.7);
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .inner{
      flex-direction: column;
    }
    .left{
      width: 100%;
    }
    p{
      font-size: 18px;
      line-height: 26px;
      margin-top: 15px;
    }
    .right{
      width: 100%;
      margin-top: 50px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .about{
      padding-bottom: 50px;
    }
    .inner{
      flex-direction: column;
      padding-bottom: 50px;
    }
    .left{
      width: 100%;
    }
    p{
      font-size: 18px;
      line-height: 26px;
      margin-top: 15px;
    }
    .right{
      width: 100%;
      margin-top: 30px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 768px){
    .sub-ttl {
      font-size: 18px;
      line-height: 20px;
      margin-top: 15px;
    }
  }
</style>
