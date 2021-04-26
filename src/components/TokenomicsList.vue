<template>
  <div class="tokenomics-list__container">
    <img :src="require(`@/assets/img/tokenomicslist.jpg`)" alt="" class="token-bg">
    <div class="container">
      <div class="tokenomics-list pT-160 pB-160">
        <h3 class="font-51" data-aos="fade-up">
          Token Release Schedule
        </h3>
        <div class="tokenomics-list__inner" data-aos="fade-up">
          <div class="tokenomics-list__part">
            <div class="tokenomics-list__item">
              <div class="tokenomics-list__item-title">(TGE Event) Pre-Seed Round</div>
              <div class="tokenomics-list__item-text">1,000,000,000</div>
            </div>
            <div class="tokenomics-list__item">
              <div class="tokenomics-list__item-title">Founders Round</div>
              <div class="tokenomics-list__item-text">1,000,000,000</div>
            </div>
            <div class="tokenomics-list__item">
              <div class="tokenomics-list__item-title">Seed Round
              <div class="tokenomics-list__item-text">1,000,000,000</div>
            </div>
          </div>
        </div>
          <div class="tokenomics-list__part">
            <div class="tokenomics-list__item">
              <div class="tokenomics-list__item-title">Pre-IEO</div>
              <div class="tokenomics-list__item-text">1,000,000,000</div>
            </div>
            <div class="tokenomics-list__item">
              <div class="tokenomics-list__item-title">IEO (Launch Pad Sale)</div>
              <div class="tokenomics-list__item-text">4,000,000,000</div>
            </div>
          </div>
      </div>
      </div>
      <div class="about-list">
        <div class="about-list__item pT-160">
          <div class="about-list__item-head" data-aos="fade-up">
            <div class="about-list__title-container">
              <h3 class="font-51">
                Token <br>
                Distribution
              </h3>
              <div v-if="false" class="about-list__title-iso">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#0500FF"/>
                  <line x1="10" y1="9" x2="10" y2="15" stroke="white" stroke-width="2"/>
                  <line x1="10" y1="5" x2="10" y2="7" stroke="white" stroke-width="2"/>
                </svg>
                IEO will start in Q2 2021*<br>
                (*or sooner if Seed Round total<br> allocation claimed)<br>
              </div>
              <a href="https://cmcx.io/" class="about-list__button" target="_blank">Contribute Now</a>
              <div class="about-list__subtxt">The link will open in a new window</div>
            </div>
            <div class="about-list__item-part">
              <div class="about-list__item-color-ttl">Pre-Seed</div>
              <div class="about-list__item-sub-text">24 days or whenever allocation is claimed</div>
              <div class="about-list__item-color-ttl">Founders Round</div>
              <div class="about-list__item-sub-text">20 days - Starting one day after Pre-Seed Round or whenever allocation is claimed.</div>

              <div class="about-list__item-color-ttl">Seed Round — 1,000,000,000</div>
              <div class="about-list__item-sub-text">20 days - Starting one day after Founders Round or whenever allocation is claimed.</div>
              <div class="about-list__item-color-ttl">Pre-IEO: 1,000,000,000</div>
              <div class="about-list__item-sub-text">20 days - Starting one day after Seed Round or whenever allocation is claimed.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tokenomics-list__description" data-aos="fade-up">
        Initial token price will be 0.005 USDT, ceiling price will be 2.00 USDT at the Seed Round.
        Unsold Tokens will go to CORE DAO Reserve.
      </div>
      <div class="tokenomics-list__text" data-aos="fade-up">
        <div class="tokenomics-list__text-ttl">Notice</div>
        <div class="tokenomics-list__text-txt">Due to the regulatory complexities or restrictions, Restrictions apply for the sale of CORE tokens to any citizen or resident of the USA.</div>
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
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .about-list__subtxt{
    font-size: 12px;
    opacity: .3;
  }
  .about-list__button{
    height: 52px;
    background: #FF7152;
    font-size: 16px;
    color: #fff;
    padding: 0px 40px;
    margin-right: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 15px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .about-list__button:hover{
    background: #0500FF;
   }
  .tokenomics-list__text-ttl{
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
  }
  .tokenomics-list__text-txt{
    font-size: 14px;
    line-height: 20px;
    color: rgba(255,255,255,.3);
    margin-bottom: 100px;
  }
  .tokenomics-list__description{
    width: 100%;
    padding: 40px;
    display: flex;
    background: #020A18;
    font-size: 20px;
    line-height: 30px;
    padding-right: 38%;
    margin-top: 30px;
    margin-bottom: 100px;
  }
  .about-list__title-iso svg{
    position: absolute;
    top: 4px;
    left: 0px;
  }
  .about-list__title-iso{
    font-size: 20px;
    line-height: 30px;
    padding-left: 30px;
    position: relative;
    margin-top: 30px;
  }
  .token-bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% + 210px);
    z-index: 1;
  }
  .tokenomics-list__container{
    position: relative;
    z-index: 2;
  }
  .tokenomics-list h3{
    margin-bottom: 100px;
  }
  .tokenomics-list__item-title{
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 5px;
    color: #FF7152;
  }
  .tokenomics-list__item-text{
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  .tokenomics-list__part{
    margin-right: 130px;
  }
  .tokenomics-list__inner{
    display: flex;
  }
  .container{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  h3 span:last-child {
    padding-left: 120px;
  }
  .about-list__item-head .about-list__item-head-text{
    width: 50%;
    padding-right: 120px;
    font-size: 15px;
    line-height: 24px;
    margin-top: 15px;
    color: rgba(255,255,255,.7);
  }
  .about-list__item-head h3{
    display: flex;
    flex-direction: column;
  }
  .about-list__title-container{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: -30px;
  }
  .about-list__item-head h3 span{
    font-size: inherit;
  }
  .about-list__item-sub-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.7);
    margin-bottom: 30px;
  }
  .about-list__item-sub-ttl{
    margin-bottom: 5px;
  }
  .about-list__item-color-ttl{
    font-size: 15px;
    color: #FF7152;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .about-list__item-ltl-ttl{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .about-list__item-part{
    display: flex;
    flex-direction: column;
    padding-right: 120px;
  }
  .about-list__item{
    display: flex;
    flex-direction: column;
  }
  .about-list__item-head{
    display: flex;
  }
  .about-list__item-head h3{
    width: 50%;
  }
  .about-list__item-part{
    width: 50%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .tokenomics-list__description{
      padding-right: 10%;
    }
  }
  /*Ipad 1024*/
  @media (max-width: 1300px){
    .about-list__item-part{
      padding-right: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .tokenomics-list__description{
      font-size: 16px;
      line-height: 26px;
    }
    .about-list__title-iso {
      font-size: 14px;
      line-height: 24px;
    }
    .tokenomics-list__part{
      margin-right: 60px;
    }
    h3 span:last-child {
      padding-left: 60px;
    }
    .about-list__item-part{
      padding-right: 10px;
    }
    .about-list__item-head .about-list__item-head-text{
      padding-right: 10px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
    .tokenomics-list__part {
      margin-right: 20px;
    }
    .tokenomics-list__text-txt{
      margin-bottom: 50px;
    }
    .tokenomics-list__description{
      font-size: 14px;
      padding: 15px;
      line-height: 24px;
      margin-bottom: 50px;
    }
    .about-list__title-container{
      width: 80%;
      margin-bottom: 30px;
    }
    .about-list__item-partners{
      flex-direction: column;
    }
    .about-list__item-head .about-list__item-head-text{
      width: 100%;
    }
    .about-list__item-head{
      flex-direction: column;
    }
    .about-list__item-part{
      width: 100%;
      padding-right: 20px;
    }
    .about-list__item-head-text{
      width: 100%;
    }
  }
</style>
