<template>
  <div class="container" id="paper" data-aos="fade-up">
    <img :src="require(`@/assets/img/paper-bg.png`)" alt="" class="paper__bg">
    <div class="paper__inner">
      <h3 class="medium font-51"><span>CORE</span> Paper</h3>
      <div class="paper__items">
        <div class="paper__items-left">
          <div class="paper__items-text">Introduction to</div>
          <h4 class="paper__items-ttl">Cryptographic Object Resource Engine</h4>
          <div class="paper__items-text">Version 0.1 — Draft for community review</div>
        </div>
        <div class="paper__items-right">
          <div class="paper__items-right-in">
            <a href="/docs/core-paper.pdf" target="_blank" class="paper__button">Download</a>
            <div class="paper__button-text">PDF, 71 MB</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .paper__items-right-in{
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
  }
  .paper__bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% + 210px);
    height: 150%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .paper__button-text{
    margin-top: 15px;
    opacity: .5;
  }
  .paper__items-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    width: 50%;
    align-items: flex-start;
  }
  .paper__button{
    height: 52px;
    display: flex;
    background: #FF7152;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    color: #fff;
    align-items: center;
    padding: 0px 80px;
  }
  .paper__button:hover{
    background: #0500FF;
  }
  .container{
    position: relative;
    z-index: 2;
  }
  h3 span{
    font-size: inherit;
    color: #FF7152;
  }
  .paper__items{
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .paper__inner{
    width: 100%;
    padding-bottom: 300px;
    position: relative;
    z-index: 4;
  }
  .paper__items-text{
    opacity: .5;
  }
  .paper__items-ttl{
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 25px;
    margin-top: 5px;
  }
  /*Laptop*/
  @media (max-width: 1900px){
    .paper__items-right{
      width: auto;
    }
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
    .paper__items{
      flex-direction: column;
    }
    .paper__items-right{
      margin-right: auto;
      margin-left: 0px;
      margin-top: 25px;
    }
    .paper__inner{
      padding-bottom: 150px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .paper__items-ttl{
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 25px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
