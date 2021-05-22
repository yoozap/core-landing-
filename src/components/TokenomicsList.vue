<template>
  <div class="tokenomics-list__container">
    <img :src="require(`@/assets/img/tokenomicslist.jpg`)" alt="tokenomicslist" class="token-bg">
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
      <div class="about-list">
        <div class="about-list__item pT-160">
          <div class="about-list__item-head" data-aos="fade-up">
            <div class="about-list__title-container certik">
              <svg width="420" height="100" viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M86.5879 15.3519L87.1147 18.5331C87.53 21.4925 87.7224 24.4788 87.6903 27.4669C87.6868 34.0703 86.8892 40.6493 85.3147 47.0627C83.1854 55.7758 79.4765 64.0257 74.3717 71.4042C68.4728 79.878 59.9438 88.2126 47.5112 94.9094L45.9903 95.7282L44.4693 94.9094C32.0368 88.2126 23.5112 79.878 17.6089 71.4042C12.5042 64.0256 8.79535 55.7757 6.66586 47.0627C5.09164 40.6505 4.29407 34.0726 4.29028 27.4704C4.25814 24.4822 4.45054 21.4959 4.86586 18.5366L5.39261 15.3554C5.43757 15.096 5.43069 14.8302 5.37236 14.5734C5.31402 14.3167 5.2054 14.074 5.05273 13.8593C4.90007 13.6447 4.70638 13.4623 4.48284 13.3228C4.2593 13.1833 4.01033 13.0893 3.75027 13.0463C3.4902 13.0033 3.22419 13.0122 2.96757 13.0723C2.71094 13.1325 2.46878 13.2428 2.25502 13.3969C2.04127 13.5509 1.86015 13.7458 1.72212 13.9701C1.58408 14.1944 1.49185 14.4437 1.45075 14.7038L0.924002 17.885C0.470929 21.0596 0.259857 24.2639 0.292606 27.4704C0.295118 34.3978 1.13135 41.2998 2.7833 48.0279C5.032 57.2157 8.9466 65.9144 14.3333 73.6934C20.56 82.6446 29.5914 91.446 42.5891 98.4321L45.0589 99.7596C45.3498 99.9166 45.6753 99.9989 46.006 99.9989C46.3367 99.9989 46.6622 99.9166 46.9531 99.7596L49.4193 98.4321C62.4031 91.4425 71.438 82.6446 77.6752 73.6934C83.0591 65.915 86.9713 57.2175 89.2182 48.0314C90.8702 41.3033 91.7064 34.4013 91.7089 27.4739C91.7415 24.2674 91.5304 21.0631 91.0775 17.8885L90.5507 14.7073C90.5096 14.4472 90.4174 14.1979 90.2794 13.9735C90.1413 13.7492 89.9602 13.5544 89.7465 13.4004C89.5327 13.2463 89.2905 13.136 89.0339 13.0758C88.7773 13.0156 88.5113 13.0068 88.2512 13.0498C87.9911 13.0928 87.7422 13.1867 87.5186 13.3263C87.2951 13.4658 87.1014 13.6482 86.9488 13.8628C86.7961 14.0774 86.6875 14.3201 86.6291 14.5769C86.5708 14.8337 86.5639 15.0994 86.6089 15.3589L86.5879 15.3519Z" fill="#E1AA4C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3081 13.1847L45.9942 4.12544L76.343 13.3798C76.8511 13.5315 77.3986 13.476 77.8659 13.2255C78.3331 12.9749 78.6819 12.5497 78.836 12.0428C78.99 11.536 78.9368 10.9888 78.688 10.5211C78.4391 10.0533 78.0149 9.7031 77.5081 9.54704L46.5767 0.114985C46.1971 -0.00121888 45.7913 -0.00121888 45.4116 0.114985L15.1395 9.34495C14.8865 9.42049 14.651 9.5452 14.4464 9.71191C14.2418 9.87861 14.0722 10.084 13.9473 10.3164C13.8224 10.5488 13.7446 10.8035 13.7186 11.0659C13.6925 11.3283 13.7185 11.5933 13.7952 11.8457C13.8719 12.0981 13.9978 12.3328 14.1656 12.5364C14.3334 12.7401 14.5397 12.9086 14.7729 13.0324C15.0061 13.1561 15.2614 13.2327 15.5242 13.2576C15.7871 13.2826 16.0523 13.2554 16.3046 13.1777L16.3081 13.1847Z" fill="#E1AA4C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65011 15.9373L44.2083 98.906C44.3742 99.2302 44.6258 99.5029 44.936 99.6944C45.2461 99.8858 45.6028 99.9888 45.9674 99.992C46.3319 99.9952 46.6904 99.8986 47.0039 99.7127C47.3174 99.5268 47.5738 99.2586 47.7455 98.9373L73.699 50.453L73.7373 50.3763L90.349 15.8816C90.5741 15.4055 90.6021 14.86 90.4267 14.3635C90.2514 13.867 89.8869 13.4597 89.4125 13.2301C88.9382 13.0006 88.3923 12.9673 87.8935 13.1376C87.3947 13.3078 86.9834 13.6679 86.749 14.1394L70.1652 48.6063L46.0466 93.6934L5.20477 14.1115C5.08706 13.8752 4.92358 13.6646 4.7238 13.4919C4.52401 13.3192 4.2919 13.1878 4.0409 13.1053C3.78991 13.0228 3.52502 12.9909 3.26158 13.0114C2.99815 13.0319 2.74141 13.1044 2.50624 13.2248C2.27107 13.3451 2.06215 13.5108 1.89157 13.7124C1.72099 13.914 1.59216 14.1473 1.51253 14.399C1.4329 14.6506 1.40405 14.9156 1.42767 15.1784C1.45129 15.4413 1.5269 15.6969 1.65011 15.9304V15.9373Z" fill="#E1AA4C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.022 52.8886H69.3487C69.8784 52.8886 70.3864 52.6784 70.7609 52.3043C71.1354 51.9302 71.3458 51.4229 71.3458 50.8938C71.3458 50.3648 71.1354 49.8574 70.7609 49.4833C70.3864 49.1092 69.8784 48.899 69.3487 48.899H22.022C21.4923 48.899 20.9844 49.1092 20.6098 49.4833C20.2353 49.8574 20.0249 50.3648 20.0249 50.8938C20.0249 51.4229 20.2353 51.9302 20.6098 52.3043C20.9844 52.6784 21.4923 52.8886 22.022 52.8886ZM154.029 35.676H123.241C122.709 35.6788 122.199 35.8911 121.823 36.2669C121.447 36.6427 121.234 37.1516 121.231 37.683V62.3659C121.235 62.8971 121.448 63.4054 121.824 63.781C122.2 64.1566 122.709 64.3692 123.241 64.3729H154.029V68.5541H123.241C122.428 68.5578 121.623 68.4007 120.872 68.0919C120.121 67.7831 119.438 67.3287 118.864 66.7549C118.29 66.1812 117.835 65.4995 117.525 64.7491C117.216 63.9988 117.059 63.1947 117.063 62.3833V37.7004C117.059 36.889 117.216 36.085 117.525 35.3346C117.835 34.5843 118.29 33.9026 118.864 33.3288C119.438 32.7551 120.121 32.3007 120.872 31.9919C121.623 31.6831 122.428 31.526 123.241 31.5297H154.029V35.676ZM211.842 31.5088V35.69H182.191V47.9095H206.023V52.1255H182.187V64.3659H211.838V68.5471H178.001V31.5088H211.842Z" fill="#E1AA4C"/>
                <path d="M272.899 37.7318V48.582C272.902 49.3932 272.745 50.1971 272.435 50.9472C272.126 51.6974 271.671 52.3789 271.097 52.9525C270.522 53.5262 269.84 53.9806 269.089 54.2896C268.338 54.5985 267.533 54.7559 266.721 54.7527H261.059L272.693 68.5332H267.185L255.6 54.7527H241.995C241.322 54.7185 240.652 54.6499 239.986 54.5471V68.5332H235.8V31.5611H266.69C267.502 31.5579 268.307 31.7153 269.058 32.0242C269.809 32.3332 270.491 32.7876 271.065 33.3613C271.64 33.9349 272.094 34.6164 272.404 35.3666C272.713 36.1167 272.871 36.9206 272.867 37.7318H272.899ZM242.009 50.5367H266.721C266.979 50.54 267.235 50.4916 267.474 50.3946C267.713 50.2975 267.93 50.1536 268.112 49.9715C268.294 49.7893 268.438 49.5725 268.536 49.3339C268.633 49.0952 268.681 48.8396 268.678 48.582V37.7318C268.682 37.4704 268.634 37.2108 268.537 36.968C268.44 36.7252 268.296 36.504 268.113 36.3172C267.935 36.1259 267.719 35.9743 267.478 35.8722C267.238 35.7701 266.979 35.7199 266.717 35.7248H242.006C241.474 35.7276 240.964 35.9399 240.588 36.3157C240.212 36.6915 239.999 37.2004 239.996 37.7318V48.582C239.991 48.843 240.041 49.1021 240.143 49.3424C240.245 49.5826 240.398 49.7985 240.589 49.9757C240.777 50.1588 240.999 50.3028 241.243 50.3991C241.486 50.4954 241.747 50.5422 242.009 50.5367Z" fill="#E1AA4C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M295.039 31.5088H332.093V35.69H315.697V68.5506H311.511V35.69H295.039V31.5088ZM354.551 68.5332V31.5088H358.737V68.5332H354.551ZM414.373 31.5088H419.728L404.232 50.021L419.78 68.5332H414.373L400.577 52.129H388.632V68.5332H384.418V31.5088H388.639V47.9095H400.584L414.373 31.5088Z" fill="#E1AA4C"/>
              </svg>
            </div>
            <div class="about-list__item-part">
              <div class="about-list__item-sub-text">CertiK leads blockchain security by pioneering the use of cutting-edge Formal Verification technology on smart contracts and blockchains. Unlike traditional security audits, Formal Verification mathematically proves program correctness and hacker-resistance.
              </div>
              <a href="https://www.certik.org/projects/coremultichain" target="_blank" class="about-list__item-link">CORE on CertiK Platform</a>
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
  .about-list__item-link{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    position: relative;
    margin-right: auto;
    margin-top: 20px;
  }
  .about-list__item-link:after{
    content: '';
    left: 0px;
    bottom: -2px;
    background: #0500FF;
    width: 100%;
    height: 1px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    position: absolute;
  }
  .about-list__item-link:hover:after{
    transform: scale(0);
  }
  .about-list__item-link:hover{
    color: #ff7152;
  }
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
    margin-top: 100px;
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
  .about-list__title-container.certik{
    margin-top: 0px;
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
    .about-list__title-container.certik svg{
      width: 70%;
    }
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
