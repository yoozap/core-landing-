<template>
    <div class="ecosystem-list">
        <div class="ecosystem-list__container container">
            <h2 class="font-51" data-aos="fade-up">We already listed on</h2>
            <div class="ecosystem-list__inner">
                <div class="ecosystem-list__list">
                    <a :href="item.url" data-aos="fade-up" class="ecosystem-list__item" :key="item.id" :style="{background: item.color}" v-for="item in itemData" target="_blank">
                        <img :src="require(`@/assets/img/ecosystem/${item.image}`)" :alt="item.title" class="ecosystem-list__item-img">
                        <h3 class="ecosystem-list__item-ttl font-51">{{item.title}}</h3>
                        <div class="ecosystem-list__item-txt">{{item.text}}</div>
                        <div class="ecosystem-list__item-types">
                            <div class="ecosystem-list__item-type" v-for="type in item.types">
                                {{type}}
                            </div>
                        </div>
                    </a>
                </div>
                <div data-aos="fade-up" class="ecosystem-list__subttl">
                    Over 10 worldwide
                    <br>
                    platforms
                </div>
            </div>
        </div>
        <div class="ecosystem-list__footer container" data-aos="fade-up">
            <div class="ecosystem-list__footer-item">
                <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/ecosystem/join.png`)" alt="join" class="ecosystem-list__footer-item-img">
                <div class="ecosystem-list__footer-item-inner">
                    <div class="ecosystem-list__footer-item-ttl">
                        Join the CORE <br>
                        Ecosystem Now
                    </div>
                    <a href="##" class="ecosystem-list__footer-item-btn">Explore</a>
                </div>
            </div>
            <div class="ecosystem-list__footer-item">
                <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/ecosystem/submit.png`)" alt="submit" class="ecosystem-list__footer-item-img">
                <div class="ecosystem-list__footer-item-inner">
                    <div class="ecosystem-list__footer-item-ttl">
                        Submit <br>
                        your project
                    </div>
                    <a href="##" class="ecosystem-list__footer-item-btn">Submit</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainContainer",
        data() {
            return {
            };
        },
        computed:{
            itemData(){
                return this.$store.state.ecosystem;
            }
        }
    };
</script>
<style scoped>
    .ecosystem-list__footer-item-btn:hover{
        background: #fff;
        color: #00050F;
    }
    .ecosystem-list__footer-item-btn{
        margin-top: auto;
        font-size: 14px;
        line-height: 20px;
        height: 44px;
        display: flex;
        align-items: center;
        padding: 0px 43px;
        border: 1px solid #fff;
        border-radius: 4px;
        margin-right: auto;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .ecosystem-list__footer-item-ttl{
        font-size: 44px;
        line-height: 66px;
    }
    .ecosystem-list__footer-item-inner{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 3;
        padding: 50px;
        display: flex;
        flex-direction: column;
    }
    .ecosystem-list__footer-item-img{
        position: absolute;
        width: 100%;
        height: 120%;
        bottom: 0px;
        left: 0px;
        z-index: 1;
        object-fit: cover;
    }
    .ecosystem-list__footer-item{
        position: relative;
        padding-top: 36%;
        overflow: hidden;
    }
    .ecosystem-list__footer-item:first-child{
        width: calc(56% - 20px);
    }
    .ecosystem-list__footer-item:last-child{
        width: calc(44% - 20px);
    }
    .ecosystem-list__footer{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 60px;
        margin-bottom: 100px;
    }
    .ecosystem-list__subttl{
        font-size: 16px;
        line-height: 24px;
        color: #969BA6;
        padding-left: 50px;
    }
    .ecosystem-list__item-type{
        height: 24px;
        background: #fff;
        padding: 0px 10px;
        background: #fff;
        color: #00050F;
        text-transform: uppercase;
        margin-right: 8px;
        margin-top: 8px;
        font-size: 12px;
        align-items: center;
        display: flex;
    }
    .ecosystem-list__item-types{
        display: flex;
        width: 100%;
        margin-top: auto;
        flex-wrap: wrap;
    }
    .ecosystem-list__item-txt{
        line-height: 24px;
        opacity: .7;
    }
    .ecosystem-list__item-ttl{
        margin-bottom: 16px;
    }
    .ecosystem-list__item-img{
        height: 90px;
        margin-bottom: 30px;
    }
    .ecosystem-list__item{
        width: calc(50% - 20px);
        margin-right: 40px;
        margin-bottom: 40px;
        padding: 40px;
        height: 465px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .ecosystem-list__item:hover{
        opacity: .7;
    }
    .ecosystem-list__item:nth-child(even){
        margin-right: 0px;
    }
    .ecosystem-list__list{
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 340px);
    }
    .ecosystem-list__inner{
        display: flex;
        margin-top: 60px;
    }
    .ecosystem-list{
        width: 100%;
        padding-top: 100px;
    }
    .ecosystem-list__container{
        flex-direction: column;
    }
    /*Ipad Pro 1024*/
    @media (max-width: 1300px) {
        .ecosystem-list__inner{
            flex-direction: column-reverse;
        }
        .ecosystem-list__subttl{
            padding-left: 0px;
            margin-bottom: 30px;
        }
        .ecosystem-list__inner{
            margin-top: 30px;
        }
        .ecosystem-list__list{
            width: 100%;
        }
        .ecosystem-list__footer-item-ttl {
            font-size: 25px;
            line-height: 37px;
        }
        .ecosystem-list__item{
            padding: 25px;
            height: 365px;
        }
        .ecosystem-list__footer-item-inner{
            padding: 25px;
        }
        .ecosystem-list__footer{
            margin-top: 30px;
            margin-bottom: 50px;
        }
    }
    /*Ipad 768*/
    @media (max-width: 1023px) {
        .ecosystem-list__item-txt{
            font-size: 13px;
            line-height: 20px;
        }
        .ecosystem-list__item-type{
            font-size: 10px;
        }
        .ecosystem-list__item{
            width: calc(50% - 10px);
            margin-bottom: 20px;
            margin-right: 20px;
        }
        .ecosystem-list__footer-item:first-child {
            width: calc(56% - 10px);
        }
        .ecosystem-list__footer-item:last-child {
            width: calc(44% - 10px);
        }
    }
    /*Mobile 320*/
    @media (max-width: 767px) {
        .ecosystem-list__item{
            margin-right: 0px;
            width: 100%;
        }
        .ecosystem-list__item-img {
            margin-bottom: 20px;
        }
        .ecosystem-list__footer-item{
            width: 100%!important;
            padding-top: 58%;
            margin-bottom: 20px;
        }
        .ecosystem-list__footer{
            flex-direction: column;
            margin-bottom: 30px;
        }
    }
</style>
