<template>
  <div class="container"  id="faq" data-aos="fade-up" v-view="visibilityChanged">
    <div class="faqContainer pT-160">
      <h3 class="medium font-51">Frequently <br>
        Asked Questions</h3>
      <div class="faqInner">
        <div class="faqItem" v-for="faq in itemData" :key="faq.id" @click="openFaq(faq.id)" :class="activeFaq == faq.id ? 'active' : ''">
          <div class="ttlContainer">
            <div class="ttl">{{faq.question}}</div>
            <i>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="8.74229e-08" x2="12" y2="24" stroke="white" stroke-width="4"/>
                <line x1="24" y1="12" x2="-1.74846e-07" y2="12" stroke="white" stroke-width="4"/>
              </svg>
            </i>
          </div>
          <div class="questionContainer">
            <div class="questionInner">
              <p v-html="faq.answer"></p>
            </div>
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
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeFaq: null
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 3)
    },
    openFaq: function (id) {
      if (this.activeFaq !== id) {
        this.activeFaq = id
      } else {
        this.activeFaq = null
      }
    }
  }
}
</script>
<style scoped>
  .faqContainer{
    display: flex;
    justify-content: space-between;
  }
  .faqInner{
    width: 50%;
  }
  h3{
    color: #fff;
    margin-bottom: 75px;
  }
  .questionInner{
    padding-top: 25px;
    opacity: 0;
    transform: translateY(15px);
    transition: .4s ease-in-out;
  }
  .faqItem.active .questionInner{
    opacity: 1;
    transform: translateY(0px);
  }
  .questionInner p{
    font-size: 15px;
    line-height: 24px;
    opacity: .5;
    padding-right: 70px;
  }
  .questionContainer{
    max-height: 0px;
    transition: .4s ease-in-out;
    overflow: hidden;
  }
  .faqItem.active .questionContainer{
    max-height: 800px;
  }
  .faqItem{
    border-bottom: 1px solid rgba(255,255,255,.05);
    padding: 25px 0px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .ttlContainer{
    display: flex;
    justify-content: space-between;
  }
  .ttl{
    font-size: 20px;
    line-height: 30px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    color: #fff;
  }
  .faqItem.active .ttl,.faqItem:hover .ttl{
    color: #fff;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0);
  }
  .ttlContainer i{
    display: flex;
    align-items: center;
  }
  .ttlContainer i line{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    transform-origin: center;
  }
  .faqItem.active .ttlContainer i line:nth-child(1){
    transform: scaleY(0);
  }
  .container{
    position: relative;
    z-index: 2;
  }
  #faq{
    padding-bottom: 160px;
  }
  .faqItem.active .ttl{
    color: #FF7152;
  }
  .faqItem.active line{
    stroke: #FF7152;
  }
  /*Laptop*/
  @media (max-width: 1900px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .faqInner{
      width: 100%;
    }
    .faqContainer{
      flex-direction: column;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    h3{
      margin-bottom: 40px;
    }
    .faqItem{
      padding: 15px;
      padding-left: 0px;
    }
    .ttl{
      font-size: 15px;
      line-height: 24px;
    }
    .questionInner p{
      font-size: 13px;
      line-height: 20px;
    }
    i svg{
      transform: scale(.6);
    }
    .faqItem.active .ttlContainer i {
      transform: rotateZ(180deg) translateY(4px);
    }
  }
</style>
