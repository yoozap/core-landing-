<template>
    <div :class="firstAnimation ? 'animated' : ''">
      <div class="start-page__header">
        <a href="##" class="start-page__logo">
          <svg width="206" height="100" viewBox="0 0 206 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8339 28.1014C26.397 23.3904 31.065 19.6267 36.4267 17.142C41.7884 14.6573 47.6794 13.5277 53.5809 13.8527C59.4824 14.1777 65.2135 15.9473 70.2693 19.0057C75.3252 22.0641 79.5507 26.3175 82.5739 31.3913L85.1852 29.942L89.5373 27.3913C85.6329 20.829 80.0876 15.3937 73.4458 11.6187C66.8039 7.84373 59.2937 5.85884 51.6522 5.85884C44.0106 5.85884 36.5004 7.84373 29.8586 11.6187C23.2167 15.3937 17.6714 20.829 13.767 27.3913L11.6055 30.7826L15.0581 32.8261L28.4191 40.7536C26.2337 46.2444 26.0816 52.3341 27.9901 57.927C29.8986 63.5199 33.7425 68.2487 38.83 71.2626C43.9175 74.2765 49.9147 75.3775 55.7425 74.3676C61.5702 73.3577 66.8459 70.3032 70.6201 65.7536L80.3544 71.5507C76.7904 76.266 72.1195 80.0324 66.7538 82.5176C61.3881 85.0028 55.4926 86.1305 49.5874 85.8011C43.6823 85.4717 37.9491 83.6953 32.8937 80.6288C27.8383 77.5622 23.6162 73.2997 20.5998 68.2174L13.709 72.2898C17.6134 78.8521 23.1587 84.2875 29.8005 88.0624C36.4424 91.8374 43.9526 93.8223 51.5941 93.8223C59.2357 93.8223 66.7459 91.8374 73.3878 88.0624C80.0296 84.2875 85.5749 78.8521 89.4793 72.2898L91.5393 68.8406L88.0866 66.7971L77.1193 60.2898L67.6607 54.8406C66.5092 58.5024 64.1382 61.6603 60.9417 63.7896C57.7451 65.9189 53.9154 66.8913 50.0891 66.5453C46.2627 66.1993 42.6701 64.5557 39.9081 61.8876C37.1462 59.2195 35.3813 55.6876 34.9067 51.8788C34.4322 48.07 35.2765 44.2136 37.2994 40.9505C39.3223 37.6874 42.4019 35.2141 46.0266 33.9415C49.6513 32.6689 53.6027 32.6737 57.2243 33.9552C60.8459 35.2366 63.9195 37.7175 65.9344 40.9855L72.8832 36.9855C70.8418 33.603 68.0216 30.7563 64.6571 28.6821C61.2926 26.6078 57.481 25.366 53.5393 25.0598C49.5976 24.7536 45.6397 25.3919 41.9947 26.9217C38.3497 28.4515 35.1229 30.8285 32.5827 33.8551L22.8339 28.1014Z" fill="#FF7152"/>
            </g>
            <path d="M116.08 61.3634C111.815 61.3634 108.565 60.2716 106.331 58.088C105.184 56.8791 104.298 55.4471 103.729 53.8813C103.16 52.3154 102.92 50.6492 103.024 48.9866C102.921 47.2868 103.159 45.5837 103.721 43.9764C104.284 42.3691 105.162 40.8896 106.302 39.6242C108.478 37.373 111.737 36.2426 116.08 36.2329C117.418 36.2193 118.754 36.3358 120.069 36.5808C121.222 36.7946 122.357 37.0949 123.464 37.4793V42.8271C121.266 41.9161 118.909 41.4529 116.53 41.4648C115.534 41.3772 114.53 41.4926 113.58 41.804C112.63 42.1154 111.753 42.6163 111.002 43.2764C109.691 44.8769 109.056 46.9255 109.233 48.9866C109.148 49.9738 109.269 50.9678 109.589 51.9058C109.908 52.8438 110.419 53.7053 111.089 54.4358C112.641 55.7013 114.619 56.3238 116.617 56.175C117.799 56.178 118.979 56.0713 120.142 55.8561C121.3 55.6402 122.433 55.3051 123.522 54.8561V60.2329C122.417 60.5897 121.287 60.8658 120.142 61.059C118.799 61.2754 117.44 61.3772 116.08 61.3634Z" fill="white"/>
            <path d="M137.653 61.3633C133.678 61.3633 130.66 60.3537 128.6 58.3344C126.54 56.315 125.501 53.175 125.481 48.9141C125.481 44.3923 126.526 41.1605 128.6 39.1894C130.675 37.2184 133.678 36.2909 137.653 36.2909C141.628 36.2909 144.631 37.2764 146.705 39.1894C148.78 41.1025 149.81 44.3923 149.81 48.9141C149.81 53.175 148.765 56.3199 146.705 58.3344C144.645 60.3489 141.613 61.3633 137.653 61.3633ZM137.653 56.1749C138.494 56.2585 139.344 56.1433 140.132 55.8387C140.921 55.5341 141.627 55.0486 142.194 54.4213C143.282 52.8003 143.793 50.8605 143.644 48.9141C143.831 46.8734 143.32 44.8298 142.194 43.117C141.621 42.5181 140.921 42.0559 140.144 41.7648C139.368 41.4737 138.537 41.3613 137.711 41.4358C136.879 41.3588 136.039 41.47 135.256 41.761C134.472 42.052 133.765 42.5155 133.185 43.117C132.051 44.8265 131.539 46.8728 131.734 48.9141C131.585 50.8605 132.096 52.8003 133.185 54.4213C133.746 55.0347 134.441 55.5116 135.215 55.8156C135.99 56.1195 136.824 56.2425 137.653 56.1749Z" fill="white"/>
            <path d="M152.914 60.9865V36.6097H165.114C166.274 36.5137 167.442 36.6671 168.538 37.0596C169.634 37.4521 170.633 38.0745 171.468 38.8851C172.902 40.5791 173.634 42.7566 173.513 44.972C173.559 46.5154 173.123 48.0348 172.266 49.3198C171.428 50.5588 170.242 51.5221 168.857 52.088C169.193 52.3456 169.483 52.6594 169.713 53.0155C169.989 53.4761 170.222 53.9612 170.409 54.4648L173.31 61.0445H166.927L164.2 54.8416C164.023 54.3819 163.722 53.9804 163.33 53.6822C162.888 53.4308 162.387 53.3055 161.879 53.3198H159.007V61.0445L152.914 60.9865ZM159.007 48.5662H163.518C164.525 48.6298 165.518 48.3144 166.304 47.6822C166.657 47.3301 166.93 46.9054 167.103 46.4373C167.276 45.9693 167.345 45.4693 167.305 44.972C167.305 42.5372 166.129 41.3054 163.779 41.3054H159.007V48.5662Z" fill="white"/>
            <path d="M176.619 60.9865V36.6097H194.622V41.3053H182.727V46.4213H193.215V51.2184H182.727V56.2908H194.622V60.9865H176.619Z" fill="white"/>
            <defs>
              <clipPath id="clip0">
                <rect width="91.3944" height="88.4058" fill="white" transform="translate(5.80273 5.7971)"/>
              </clipPath>
            </defs>
          </svg>

        </a>
        <div class="start-page__header-text">Cryptographic Object Resourse Engine</div>
        <div class="start-page__header-buttons">
          <a href="https://cmcx.io/login" class="start-page__header-button">
            Sign In
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.75 3C11.75 2.58579 11.4142 2.25 11 2.25L4.25 2.25C3.83579 2.25 3.5 2.58579 3.5 3C3.5 3.41421 3.83579 3.75 4.25 3.75H10.25V9.75C10.25 10.1642 10.5858 10.5 11 10.5C11.4142 10.5 11.75 10.1642 11.75 9.75L11.75 3ZM2.53033 12.5303L11.5303 3.53033L10.4697 2.46967L1.46967 11.4697L2.53033 12.5303Z" fill="white"/>
            </svg>
          </a>
          <a href="https://cmcx.io/register" class="start-page__header-button reversed">
            Register
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.75 3C11.75 2.58579 11.4142 2.25 11 2.25L4.25 2.25C3.83579 2.25 3.5 2.58579 3.5 3C3.5 3.41421 3.83579 3.75 4.25 3.75H10.25V9.75C10.25 10.1642 10.5858 10.5 11 10.5C11.4142 10.5 11.75 10.1642 11.75 9.75L11.75 3ZM2.53033 12.5303L11.5303 3.53033L10.4697 2.46967L1.46967 11.4697L2.53033 12.5303Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="start-page__container start-page__first">
        <div class="start-page__inner">
          <h1>
            Virtual World <br>
            of Interconnected <br>
            Blockchains
          </h1>
        </div>
      </div>
      <div class="start-page__container">
        <img :src="require(`@/assets/img/textImg.jpg`)" alt="" class="start-text-container__image" data-aos="fade-up">
        <div class="start-page__container start-text-container">
          <div class="start-page__inner">
            <div class="start-text-container__inner">
              <div class="start-text-container__up" data-aos="fade-up">
                CORE— is Multi Chain PoS Network focused on Interoperability, Scalability and Usability. It utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance.
              </div>
              <div class="start-text-container__bottom"  data-aos="fade-up">
                <div class="start-text-container__bottom-inner">
                  It would attain higher level of Scalability using Advanced Sharding along with Pipelining and Chunking and Parallel Transaction Processing. These technologies have made it possible for the CORE network to be infinitely scalable and to achieve significantly higher throughput and efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="start-page__container start-page__second">
        <div class="start-page__inner">
          <h2 data-aos="fade-up">The CMCX Token</h2>
          <div data-aos="fade-up" class="start-text-container__bottom-inner">
            The CMCX token is native to the CORE platform and allows users to transact with other users on the blockchain, as well as pay for all of the utility fees in the ecosystem. It can be used for governance, staking, transactions, smart contracts and validator rewards on the platform.
          </div>
          <div class="start-page__second-buttons" data-aos="fade-up">
            <a href="https://cmcx.io/login" class="start-page__second-button">
              Sign In
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0.999999C14 0.447714 13.5523 -8.61581e-07 13 -1.11446e-06L4 -3.13672e-07C3.44772 -6.50847e-07 3 0.447715 3 0.999999C3 1.55228 3.44772 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 0.999999ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z" fill="white"/>
              </svg>
            </a>
            <a href="https://cmcx.io/register" class="start-page__second-button reversed">
              Register
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0.999999C14 0.447714 13.5523 -8.61581e-07 13 -1.11446e-06L4 -3.13672e-07C3.44772 -6.50847e-07 3 0.447715 3 0.999999C3 1.55228 3.44772 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 0.999999ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z" fill="white"/>
              </svg>
            </a>
            <span>or</span>
            <router-link to="/home" class="start-page__second-link">
              <div>Explore CORE</div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0.999999C14 0.447714 13.5523 -8.61581e-07 13 -1.11446e-06L4 -3.13672e-07C3.44772 -6.50847e-07 3 0.447715 3 0.999999C3 1.55228 3.44772 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 0.999999ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z" fill="white"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        firstAnimation: false
      }
    },
    components: {
    },
    mounted() {
      this.$store.commit('setStartPage', true)
      setTimeout(() => {
        this.firstAnimation = true
      }, 100)
    },
    destroyed() {
      this.$store.commit('setStartPage', false)
    }
  }
</script>
<style scoped>
  .start-page__logo{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .animated .start-page__logo{
    transform: translateY(0px);
    opacity: 1;
  }
  .start-page__second h2{
    font-size: 51px;
    line-height: 66px;
    margin-bottom: 40px;
  }
  .start-text-container__bottom-inner{
    line-height: 24px;
    color: rgba(255,255,255,.7);
  }
  .start-text-container__up{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  .start-text-container .start-page__inner{
    display: flex;
    padding-bottom: 180px;
    align-items: flex-end;
  }
  .start-text-container__image{
    width: 100%;
  }
  .start-page__header-buttons{
    display: flex;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .animated .start-page__header-buttons{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  .start-page__header-button{
    display: flex;
    height: 42px;
    justify-content: center;
    padding: 0px 26px;
    align-items: center;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    border: 2px solid #FF7152;
    margin-left: 10px;
    font-size: 16px;
    background: #FF7152;
  }
  .start-page__second-buttons{
    display: flex;
    align-items: center;
    margin: 140px 0px;
  }
  .start-page__second-button{
    display: flex;
    height: 70px;
    justify-content: center;
    padding: 0px 50px;
    align-items: center;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    border: 2px solid #FF7152;
    margin-right: 20px;
    font-size: 22px;
    background: #FF7152;
  }
  .start-page__header-button:first-child{
    margin-left: 0px;
  }
  .start-page__header-button:hover,.start-page__second-button:hover{
    background: transparent;
  }
  .start-page__header-button.reversed,.start-page__second-button.reversed{
    background: transparent;
  }
  .start-page__header-button.reversed:hover,.start-page__second-button.reversed:hover{
    background: #FF7152;
  }
  .start-page__header-button svg{
    margin-left: 10px;
  }
  .start-page__header-text{
    color: rgba(255,255,255,.7);
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .animated .start-page__header-text{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .1s;
  }
  .start-page__header{
    display: flex;
    justify-content: space-between;
    padding: 60px 135px 20px 135px;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: 100%;
    background: rgba(0,5,15,.3);
  }
  .start-page__container{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .start-page__inner{
    width: 750px;
  }
  .start-page__first h1{
    font-size: 80px;
    line-height: 90px;
    text-align: center;
    margin-top: 220px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .animated .start-page__first h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .4s;
  }
  .start-text-container{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .start-page__second-button svg{
    margin-left: 10px;
  }
  .start-page__second-link{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .start-page__second-link svg{
    margin-left: 10px;
  }
  .start-page__second-link div{
    font-size: 22px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    position: relative;
  }
  .start-page__second-link div:after{
    position: absolute;
    content: '';
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background: #fff;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .start-page__second-link:hover div:after{
    transform: scale(0);
  }
  .start-page__second-link:hover div{
    color: #FF7152;
  }
  .start-page__second-link:hover path{
    fill: #FF7152;
  }
  .start-page__second-link path{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .start-page__second-buttons span{
    margin: 0px 25px;
    color: rgba(255,255,255,.7);
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
    .start-page__header{
      padding: 30px 50px 20px 50px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .start-page__inner {
      padding: 0px 40px;
      width: 100%;
    }
    .start-page__header {
      padding: 30px 40px 20px 40px;
    }
    .start-page__logo svg > path{
      display: none;
    }
    .start-page__logo svg{
      transform: scale(.7);
      transform-origin: left;
    }
    .start-page__header-text{
      display: none;
    }
    .start-page__first h1 {
      font-size: 50px;
      line-height: 60px;
    }
    .start-text-container__up{
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 10px;
    }
     .start-text-container .start-page__inner[data-v-56e8ecd0] {
       display: flex;
       padding-bottom: 50px;
     }
    .start-page__second h2{
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 40px;
    }
    .start-page__second-button{
      height: 42px;
      font-size: 16px;
      padding: 0px 26px;
    }
    .start-page__second-button svg,.start-page__second-link svg {
      margin-left: 10px;
      transform: scale(.7);
      transform-origin: bottom left;
    }
    .start-page__second-link div{
      font-size: 16px;
    }
    .start-page__second-buttons span{
      margin: 0px 15px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .start-page__header {
      padding: 10px 15px 10px 15px;
    }
    .start-page__logo{
      width: 60px;
      overflow: hidden;
    }
    .start-page__logo svg{
      transform: scale(.6);
      transform-origin: left;
    }
    .start-page__first h1{
      font-size: 30px;
      line-height: 40px;
    }
    .start-page__header-button{
      font-size: 12px;
      padding: 0px 10px;
    }
    .start-text-container__up{
      font-size: 14px;
      line-height: 20px;
    }
    .start-text-container__bottom-inner{
      font-size: 10px;
      line-height: 20px;
    }
    .start-page__second-buttons{
      flex-direction: column;
    }
    .start-page__second-button{
      margin-right: 0px;
      margin-bottom: 10px;
      width: 155px;
    }
    .start-page__second-buttons span{
      margin: 15px 0px;
    }
    .start-page__inner {
      padding: 0px 15px;
    }
    .start-text-container__image{
      margin-top: 150px;
    }
  }
</style>
