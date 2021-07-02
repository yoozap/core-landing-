<template>
  <div class="body-container">
     <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="blog__inner">
        <h1 data-aos="fade-up">Blog Inner</h1>
        <div class="blog__editor" data-aos="fade-up" v-html="itemData.editor"></div>
      </div>
     </div>
  </div>
</template>

<script>
import TopHead from '../components/TopHead'
export default {
  name: "BlogInner",
  components:{
    TopHead
  },
  data(){
    return{
      firstAnimation: false
    }
  },
  mounted(){
      setTimeout(() => {
          this.firstAnimation = true
      }, 100)
  },
  computed:{
    itemData(){
      let id = this.$route.params.blogId;
      id = parseInt(id);
      let tmp = this.$store.state.blog;
      
      tmp = tmp.find(function(item){
        if(item.id === id){
          return true;
        }
        
      })
      return tmp;
    }
  },
  methods:{
    visibilityChanged () {
        this.$store.commit('setMenuStatus', 0)
    }
  }
};
</script>
<style scoped>
  .body-container {
    position: relative;
    padding-left: 210px;
  }
  h1{
    font-size: 100px;
    line-height: 110px;
    margin-top: 210px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
  .blog__editor{
    margin-top: 100px;
    max-width: 750px;
    padding-bottom: 120px;
  }
  .blog__editor >>> p{
    font-size: 20px;
    line-height: 30px;
  }
  .blog__editor >>> img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .blog__editor >>> h2{
    font-size: 51px;
    line-height: 66px;
  }
  .blog__editor >>> h1{
    font-size: 70px;
    line-height: 66px;
  }
  .blog__editor >>> ul li {
    position: relative;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
    padding-left: 24px;
    counter-increment: counter;
    opacity: 0.5;
  }
  .blog__editor >>> ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0500ff;
  }
  .blog__editor >>> ol{
    padding-left: 0;
  }
  .blog__editor >>> ol li{
    counter-increment: counter;
    margin-bottom: 32px;
    line-height: 24px;
  }
  .blog__editor >>> ol li::before{
    content: counter(counter, decimal-leading-zero);
    display: block;
    font-size: 51px;
    line-height: 66px;
    color: #ff7152;
  }

  /*Ipad 768*/
  @media (max-width: 1023px) {
    .body-container {
      padding-left: 180px;
    }
    h1{
      font-size: 60px;
      line-height: 70px;
    }
    .blog__editor {
        margin-top: 80px;
        max-width: 750px;
        padding-bottom: 80px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px) {
    .body-container {
      padding-left: 0px;
    }
    .blog__editor >>> h1{
      font-size: 62px;
      line-height: 55px; 
    }
    .blog__editor >>> h2{
      font-size: 42px;
      line-height: 34px; 
    }
  }
</style>
