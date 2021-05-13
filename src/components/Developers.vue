<template>
  <div class="container">
    <div class="developers-container__inner pB-160">
      <h3 class="font-51" data-aos="fade-up">Developers</h3>
      <div class="developers-container__tab" data-aos="fade-up">
        <div class="developers-container__right-inner">
          <div class="developers-container__tab-icon">
            <img :src="require(`@/assets/img/sdk.png`)" alt="sdk" >
          </div>
          <div class="right">
            <img :src="require(`@/assets/img/dev-bg.png`)" alt="dev-bg" class="developers-container__right-image">
            <div class="ttl">CORE SDK</div>
            <div class="sub-ttl">Build your personalized enterprise-grade blockchain</div>
            <div class="descr">Our SDK makes it incredibly easy and efficient for developers to develop custom
              blockchains in any programming language of their choice.</div>
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
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  h3{
    width: 45%;
  }
  .developers-container__right-image{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .right{
    width: calc(100% - 180px);
    position: relative;
  }
  .developers-container__inner{
    width: 100%;
    padding-top: 240px;
    display: flex;
  }
  .developers-container__right-inner{
    padding: 30px 0px;
    position: relative;
    z-index: 3;
    background: #010918;
    display: flex;
    width: 100%;
  }
  .developers-container__tab-icon{
    display: flex;
    justify-content: center;
    width: 115px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .developers-container__tab-icon img{
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: top;
  }
  .descr{
    font-size: 15px;
    line-height: 24px;
    opacity: .5;
    width: 75%;
  }
  .developers-container__tab .sub-ttl{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 5px;
  }
  .developers-container__tab .ttl{
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 5px;
    color: #3BA8CB;
  }
  .developers-container__tab{
    display: flex;
    width: 665px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .developers-container__inner{
      flex-direction: column;
    }
    .developers-container__tab {
      display: flex;
      width: 100%;
      margin-top: 30px;
    }
    .descr{
      width: 90%;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .developers-container__inner{
      padding-top: 60px;
    }
    .developers-container__right-inner{
      flex-direction: column;
      align-items: center;
    }
    .right{
      width: 100%;
      margin-top: 30px;
    }
    .right div{
      text-align: center;
    }
    .descr{
      width: 100%;
    }
  }
</style>
