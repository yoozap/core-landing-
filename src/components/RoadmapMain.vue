<template>
  <div>
    <div class="roadmap__container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <div class="roadmap__top-video-outer">
        <div class="roadmap__video">
          <iframe src="https://iframe.videodelivery.net/a8a861e66cd058a7a2b9f8b4f90ce517?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </div>
      </div>
      <div class="roadmap__bottom-video-outer">
        <div class="roadmap__video">
          <iframe src="https://iframe.videodelivery.net/43e3fd7aafe928137053cf281062b6f2?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </div>
      </div>
      <TopHead/>
      <div class="roadmap__container-inner">
        <div class="year-container">
          <div class="roadmap__lrg-buble">Inception</div>
        </div>
        <div class="year-container">
          <div class="roadmap__ltl-buble">2021</div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q1</div>
              <div class="roadmap__item-description">Website Launch</div>
              <div class="roadmap__item-description">CORE Paper</div>
              <div class="roadmap__item-description">Request for Proposals (R1)</div>
              <div class="roadmap__item-description">Seed Founders On-Boarding</div>
              <div class="roadmap__item-description">CMCX Token Offering</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q2</div>
              <div class="roadmap__item-description">CORE Community Initiatives Program Launch (CCIP)</div>
              <div class="roadmap__item-description">Technical Committee Formation</div>
              <div class="roadmap__item-description">Research and Development Team Voting Event</div>
              <div class="roadmap__item-description">Request for Proposals (R2)</div>
              <div class="roadmap__item-description">Proof of Concept (PoC) Version 0.1</div>
              <div class="roadmap__item-description">CMCX Token Exchange Offering (IEO)</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q3</div>
              <div class="roadmap__item-description">CORE Hackathon 2021</div>
              <div class="roadmap__item-description">CORE MVP</div>
              <div class="roadmap__item-description">Code Fully Open Source</div>
              <div class="roadmap__item-description">White-paper update</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q4</div>
              <div class="roadmap__item-description">Private test-net launch</div>
              <div class="roadmap__item-description">Native CORE Wallet</div>
              <div class="roadmap__item-description">Origo Layer Testing</div>
              <div class="roadmap__item-description">PivotChains Testing</div>
            </div>
          </div>
        </div>
        <div class="year-container">
          <div class="roadmap__ltl-buble">2022</div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q1</div>
              <div class="roadmap__item-description">Public test-net launch</div>
              <div class="roadmap__item-description">Catena Layer Testing</div>
              <div class="roadmap__item-description">Consensus & Sharding Optimizations</div>
              <div class="roadmap__item-description">CORE Universal Explorer</div>
              <div class="roadmap__item-description">PolyChains Testing</div>
              <div class="roadmap__item-description">Cross-Chain Communication Protocol</div>
              <div class="roadmap__item-description">Aura Layer Testing</div>
              <div class="roadmap__item-description">Staking launch</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q2</div>
              <div class="roadmap__item-description">CORE Main-net Launch</div>
              <div class="roadmap__item-description">Apeirogon Framework Release</div>
              <div class="roadmap__item-description">Development Toolkit</div>
              <div class="roadmap__item-description">CORE Hackathon 2022</div>
              <div class="roadmap__item-description">CORE VM Beta Release</div>
              <div class="roadmap__item-description">Smart Contracts</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q3</div>
              <div class="roadmap__item-description">Trustless Bridge</div>
              <div class="roadmap__item-description">Voting system</div>
              <div class="roadmap__item-description">Storage Sharing Protocol</div>
              <div class="roadmap__item-description">Fast State Sync and Re-sharding</div>
              <div class="roadmap__item-description">Cryptography Engine</div>
              <div class="roadmap__item-description">Consensus Engine</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q4</div>
              <div class="roadmap__item-description">On-Chain Governance</div>
              <div class="roadmap__item-description">IPFS Integration</div>
              <div class="roadmap__item-description">Web3.js Integration</div>
              <div class="roadmap__item-description">Randomizer Engine</div>
            </div>
          </div>
        </div>
        <div class="year-container">
          <div class="roadmap__ltl-buble">2023</div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q1</div>
              <div class="roadmap__item-description">Universal blockchain Access API</div>
              <div class="roadmap__item-description">Off-Chain Data Access (CORE Oracles)</div>
              <div class="roadmap__item-description">CORE Global Bridge</div>
              <div class="roadmap__item-description">State Engine</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q2</div>
              <div class="roadmap__item-description">CORE Name Service</div>
              <div class="roadmap__item-description">DeFI Tools for Developers</div>
              <div class="roadmap__item-description">CORE Hackathon 2023</div>
              <div class="roadmap__item-description">Tokenizer Engine</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half left">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q3</div>
              <div class="roadmap__item-description">CORE OS Beta</div>
              <div class="roadmap__item-description">Synthetic Gate</div>
              <div class="roadmap__item-description">Cross-Chain Smart Contracts</div>
            </div>
          </div>
        </div>
        <div class="roadmap__container-floor">
          <div class="roadmap__half right">
            <div data-aos="fade-up" class="roadmap__item">
              <div class="roadmap__item-title">Q4</div>
              <div class="roadmap__item-description">Core Mesh testing</div>
              <div class="roadmap__item-description">TPPL Public Access</div>
              <div class="roadmap__item-description">State Sync Engine</div>
              <div class="roadmap__item-description">Blockchain Distribution Network (BDN)</div>
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
  .year-container{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 80px 0px;
  }
  .roadmap__half.right{
    margin-left: auto;
  }
  .roadmap__half.left{
    margin-right: auto;
  }
  .roadmap__item-description:after{
    content: '';
    position: absolute;
    top: 9px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #0500FF;
  }
  .left .roadmap__item-description:after{
    right: 0px;
  }
  .right .roadmap__item-description:after{
    left: 0px;
  }
  .left .roadmap__item-description{
    padding-right: 25px;
  }
  .right .roadmap__item-description{
    padding-left: 25px;
  }
  .roadmap__bottom-video-outer iframe{
    transform: scale(1.3);
  }
  .roadmap__top-video-outer{
    width: calc(100% + 210px);
    padding-top: 50%;
    position: absolute;
    z-index: 1;
    right: 0px;
    overflow: hidden;
    top: 0px;
  }
  .roadmap__bottom-video-outer{
    width: calc(100% + 210px);
    padding-top: 50%;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    right: 0px;
    bottom: 0px;
  }
  .roadmap__video{
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
  }
  .roadmap__video iframe{
    opacity: .5;
  }
  .roadmap__video:after{
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
  .roadmap__video:before{
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
  .roadmap__lrg-buble.top{
    top: 80px;
  }
  .roadmap__ltl-buble{
    font-size: 15px;
    line-height: 24px;
    position: relative;
    height: 64px;
    width: 64px;
    border: 2px solid #FF7152;
    background: #00050F;
    display: flex;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
  .roadmap__lrg-buble{
    font-size: 15px;
    height: 110px;
    width: 110px;
    border: 2px solid #FF7152;
    background: #00050F;
    display: flex;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
  .roadmap__container-inner:after{
    content: '';
    width: 2px;
    height: 100%;
    display: flex;
    position: absolute;
    right: 50%;
    top: 0px;
    background: rgb(155,153,255);
    background: linear-gradient(180deg, rgba(155,153,255,0) 0%, rgba(155,153,255,1) 50%, rgba(155,153,255,0) 100%);
  }
  .roadmap__container{
    position: relative;
    display: flex;
    justify-content: center;
    padding-right: 210px;
  }
  .roadmap__container-inner{
    display: flex;
    width: 950px;
    margin-top: 19%;
    margin-bottom: 19%;
    padding-bottom: 360px;
    position: relative;
    z-index: 3;
    flex-direction: column;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform: translateY(10px);
    opacity: 0;
  }
  .animHead .roadmap__container-inner{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .4s;
  }
  .roadmap__container-floor{
    display: flex;
  }
  .roadmap__half{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .left .roadmap__item{
    padding-right: 200px;
    text-align: right;
  }
  .right .roadmap__item{
    padding-left: 200px;
  }
  .left .roadmap__item:after{
    height: 2px;
    width: 85px;
    content: '';
    position: absolute;
    top: 14px;
    right: 80px;
    background: rgb(155,153,255);
    background: linear-gradient(90deg, rgba(155,153,255,1) 0%, rgba(155,153,255,0) 100%);
    display: flex;
  }
  .right .roadmap__item:after{
    height: 2px;
    width: 85px;
    content: '';
    position: absolute;
    top: 14px;
    left: 80px;
    background: rgb(155,153,255);
    background: linear-gradient(270deg, rgba(155,153,255,1) 0%, rgba(155,153,255,0) 100%);
    display: flex;
  }
  .roadmap__item{
    position: relative;
  }
  .roadmap__item-title{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 12px;
  }
  .roadmap__item-description{
    color: rgba(255,255,255,.5);
    font-size: 15px;
    line-height: 24px;
    position: relative;
  }

  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .roadmap__ltl-buble.y3 {
      top: 2350px;
    }
    .roadmap__ltl-buble.y2 {
      top: 1270px;
    }
    .left .roadmap__item {
      padding-right: 100px;
    }
    .right .roadmap__item {
      padding-left: 100px;
    }
    .left .roadmap__item:after{
      width: 55px;
      right: 20px;
    }
    .right .roadmap__item:after{
      width: 55px;
      left: 20px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .roadmap__ltl-buble.y2{
      top: 1350px;
    }
    .roadmap__ltl-buble.y3{
      top: 2550px;
    }
    .left .roadmap__item-description {
      padding-right: 20px;
    }
    .right .roadmap__item-description {
      padding-left: 20px;
    }
    .roadmap__top-video-outer,.roadmap__bottom-video-outer{
      width: 100%;
    }
    .roadmap__container-inner{
      margin-top: 3%;
    }
    .roadmap__container{
      padding: 0px 25px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .roadmap__top-video-outer iframe{
      transform: scale(1.5);
    }
    .roadmap__container-inner {
      margin-top: 24%;
      padding-bottom: 160px;
    }
    .roadmap__top-video-outer{
      padding-top: 110%;
    }
    .left .roadmap__item:after {
      width: 20px;
      right: 10px;
    }
    .left .roadmap__item{
      padding-right: 45px;
    }
    .right .roadmap__item:after {
      width: 20px;
      left: 10px;
    }
    .right .roadmap__item{
      padding-left: 45px;
    }
    .roadmap__item-title{
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }
    .roadmap__item-description{
      font-size: 10px;
      line-height: 15px;
    }
    .left .roadmap__item {
      padding-right: 40px;
    }
    .roadmap__item-description:after{
      top: 5px;
      height: 4px;
      width: 4px;
    }
    .left .roadmap__item:nth-child(3) {
      margin-top: 430px;
    }
    .right .roadmap__item-description {
      padding-left: 10px;
    }
    .left .roadmap__item-description {
      padding-right: 10px;
    }
    .roadmap__ltl-buble.y2 {
      top: 1190px;
    }
    .roadmap__ltl-buble.y3 {
      top: 2140px;
    }
  }
</style>
