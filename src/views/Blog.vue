<template>
  <div class="body-container">
    <img :src="require('@/assets/img/blog-bg.png')" alt="bg image" class="bg-img">
    <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="blog">
        <h1 data-aos="fade-up"><span>Core</span><span>Blog</span></h1>
        <div class="blog__list">
          <div class="blog__item" data-aos="fade-up"
            :class="{banner: blog.banner == 'true'}"
            v-for="(blog,index) in itemData" :key="index">
              <div class="blog__content">
                <router-link :to="{ path: 'blog', name: 'BlogInner', params: { blogId: blog.id }}" class="blog__link" v-if="blog.banner == 'false'">{{blog.title}}</router-link>
                <h3 class="blog__link" v-if="blog.banner == 'true'">{{blog.title}}</h3>
                <p class="blog__text">
                  {{blog.text}}
                </p>
                <time class="blog__date">
                  {{blog.date}}
                </time>
              </div>
              <div class="blog__img" v-if="blog.banner == 'true'">
                <img :src="require('@/assets/img/tab1.jpg')" :alt="blog.title">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from '../components/TopHead'
export default {
  name: 'Blog',
  components: {
    TopHead
  },
  data () {
    return {
      firstAnimation: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 100)
  },
  computed:{
    itemData(){
      return this.$store.state.blog;
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .blog{
    flex-direction: column;
    position: relative;
    width: 100%;
    padding-bottom: 100px;
  }
  .body-container{
    position: relative;
    padding-left: 210px;
  }
  .body-container > .bg-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 0.3;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,5,15,0.3) 30%);
  }
  h1{
    font-size: 100px;
    line-height: 110px;
    margin-top: 210px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
  h1 span{
    font-size: inherit;
    line-height: inherit;
  }
  h1 span:last-child{
    padding-left: 100px;
  }
  
  .blog__item{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 32px 0;
    margin-right: 160px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .blog__item:last-child{
    border-bottom: 1px solid transparent;
  }
  .blog__content{
    max-width: 840px;
  }
  .blog__link{
    display: inline-flex;
    position: relative;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 3px;
    transition: 0.6s;
  }
  .blog__link:after{
    content:'';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #0500FF;
    transition: 0.6s;
  }
  .blog__text{
    display: flex;
    margin-top: 15px;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,0.5);
  }
  .blog__date{
    display: flex;
    margin-top: 15px;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,0.5);
  }
  .blog__img{
    flex: none;
    padding-left: 40px;
  }
  .blog__img img{
    display: block;
    max-width: 220px;
    height: auto;
  } 

  /*hover*/
  .blog__link:hover:after{
    background-color: #FF7152;
  }

  .blog__item.banner{
    width: calc(100% + 160px);
    margin-left: -80px;
    padding: 32px 80px;
    margin-right: 0;
    background-color: #010918;
    border-bottom: 1px solid transparent;
    margin-top: -1px;
  }
  .blog__item.banner .blog__link{
    padding-bottom: 0;
    color: #FF7152;
  }
  .blog__item.banner .blog__link:after{
    display: none;
  }

  @media(max-width: 1900px){
    .blog__item.banner{
      width: calc(100% + 80px);
      margin-left: -40px;
      padding: 32px 40px;
    }
  }
  @media(max-width: 1599px){
    .blog__content{
      max-width: 640px;
    }
  }
  @media(max-width: 1300px){
    .blog__item.banner{
      width: calc(100% + 50px);
      margin-left: -25px;
      padding: 32px 25px;
    }
    .blog{
      padding-bottom: 80px;
    }
  }

  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
    h1{
      font-size: 60px;
      line-height: 70px;
      margin-bottom: 50px;
    }
    .blog__item{
      margin-right: 0;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .body-container{
      padding-left: 0px;
    }
    .blog{
      padding-bottom: 40px;
    }
    h1 {
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 30px;
      margin-top: 100px;
    }
    .blog__item{
      flex-direction: column-reverse;
    }
    .blog__img{
      padding-left: 0;
      margin-bottom: 32px;
    }
    .blog__item.banner{
      width: calc(100% + 30px);
      margin-left: -15px;
      padding: 32px 15px;
    }
  }
</style>
