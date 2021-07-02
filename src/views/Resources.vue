<template>
    <div class="body-container">
        <img :src="require('@/assets/img/resources-bg.png')" alt="bg image" class="bg-img">
        <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
            <TopHead/>
            <div class="resources">
                <h1 data-aos="fade-up" class="title">Resources</h1>
                <p class="teaser" data-aos="fade-up">A curated list of resources about the CORE Network.</p>
                <div class="list">
                    <div class="item" data-aos="fade-up" v-for="(item, index) in itemData" :key="index">
                        <div class="main" @click="active = index">
                            <span>{{item.title}}</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7563 4.256L11.7729 6.26015L16.2357 10.723L2 10.723L2 13.533L16.2357 13.533L11.7729 17.9958L13.7563 20L21.6283 12.128L13.7563 4.256Z" fill="white"/>
                            </svg>
                        </div>
                        <slide-up-down 
                            :active="active === index" 
                            class="additional-anim"
                            :duration="600"
                            :use-hidden="false">
                            <div class="additional" :class="{active: active === index}">
                                <div class="additional-inner">
                                    <p>
                                        {{item.teaser}}
                                    </p>
                                    <div class="links" v-if="item.links && item.links.length > 0">
                                        <a :href="link.url" v-for="link in item.links" target="_blank" download>{{link.text}}</a>
                                    </div>
                                </div>
                            </div>
                        </slide-up-down>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopHead from '../components/TopHead'
    export default {
        name: 'Faq',
        components: {
            TopHead
        },
        data () {
            return {
                firstAnimation: false,
                active: false,
                animationStart: false,
            }
        },
        mounted () {
            setTimeout(() => {
                this.firstAnimation = true
            }, 100)
        },
        computed:{
            itemData(){
                return this.$store.state.resources;
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
    .resources{
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
    .title{
        font-size: 100px;
        line-height: 110px;
        margin-top: 210px;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }
    .teaser{
        font-size: 20px;
        max-width: 460px;
        color:  #fff;
    }
    .list{
        max-width: 1072px;
        margin-top: 100px;
    }
    .item{
        background-color: #010918;
        margin-bottom: 8px;
    }
    .item:last-child{
        margin-bottom: 0;
    }
    .main{
        position: relative;
        padding:  40px 85px 40px 40px;
        cursor: pointer;
    }
    .main  span{
        font-size: 20px;
        line-height: 30px;
        color: #fff;
    }
    .main svg{
        position: absolute;
        top: 43px;
        right: 40px;
        transition: 0.4s;
    }
    .main:hover svg{
        transform: translateX(5px);
    }
    .additional-anim{
        transition-timing-function: ease-in-out;
    }
    .additional-inner{
        padding: 0 80px 40px 40px;
        transition: 0.6s ease-in-out;
        opacity: 0;
    }
    .additional.active .additional-inner{
        opacity: 1;
        transition-delay: 0.2s;
    }
    .additional p{
        font-size: 15px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.5);
    }
    .links{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .links a{
        position: relative;
        display: inline-flex;
        font-size: 15px;
        margin-top: 8px;
        padding-bottom: 3px;
    }
    .links a:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #0500FF;
        transition: 0.6s ease-in-out;
    }
    .links a:hover:after{
        opacity: 0;
    }

    @media(max-width: 1900px){
    }
    @media(max-width: 1599px){
    }
    @media(max-width: 1300px){
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
    }
    /*Mobile 320*/
    @media (max-width: 767px){
        .body-container{
            padding-left: 0px;
        }
        h1 {
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 30px;
            margin-top: 100px;
        }
        .main{
            padding: 16px 45px 16px 16px;
        }
        .main svg {
            position: absolute;
            top: 23px;
            right: 15px;
        }
        .additional-inner{
            padding: 0 16px 30px 16px;
        }
    }
</style>
