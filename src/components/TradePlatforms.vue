<template>
    <div class="platforms-outer" data-aos="bubles">
        <div class="container">
            <div class="platforms-container">
            <a href="https://1inch.io/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/1inch.svg`)" alt="1inch"/>
                <div class="platform_text">
                    <div class="platform_text-inner">1inch</div>
                </div>
            </a>
            <a href="https://vindax.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/vindax.svg`)" alt="vindax"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Vindax</div>
                </div>
            </a>
            <a href="https://www.probit.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/probit.svg`)" alt="probit"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Probit</div>
                </div>
            </a>
            <a href="https://www.lbank.info/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/lbank.svg`)" alt="lbank"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Lbank</div>
                </div>
            </a>
            <a href="https://www.bitmart.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/bitmart.svg`)" alt="bitmart"/>
                <div class="platform_text">
                    <div class="platform_text-inner">BitMart</div>
                </div>
            </a>
            <a href="https://justswap.io/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/justswap.svg`)" alt="justswap"/>
                <div class="platform_text">
                    <div class="platform_text-inner">JustSwap</div>
                </div>
            </a>
            <a href="https://www.coinex.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/coinex.svg`)" alt="coinex"/>
                <div class="platform_text">
                    <div class="platform_text-inner">CoinEx</div>
                </div>
            </a>
            <a href="https://aofex.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/aofex.svg`)" alt="aofex"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Aofex</div>
                </div>
            </a>
            <a href="https://www.okex.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/okex.svg`)" alt="okex"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Okex</div>
                </div>
            </a>
            <a href="https://www.liquid.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/liquid.svg`)" alt="liquid"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Liquid</div>
                </div>
            </a>
            <a href="https://www.hotbit.io/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/hotbit.svg`)" alt="hotbit"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Hotbit</div>
                </div>
            </a>
            <a href="https://pancakeswap.finance" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/pancakeswap.svg`)" alt="pancake-swap"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Pancake Swap</div>
                </div>
            </a>
            <a href="https://www.xt.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/xt.svg`)" alt="xt"/>
                <div class="platform_text">
                    <div class="platform_text-inner">XT</div>
                </div>
            </a>
            <a href="https://www.kucoin.com/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/kucoin.svg`)" alt="kucoin"/>
                <div class="platform_text">
                    <div class="platform_text-inner">Kucoin</div>
                </div>
            </a>
            <a href="https://p2pb2b.io/" target="_blank" class="platform">
                <img :src="require(`@/assets/img/platforms/p2pb2b.svg`)" alt="p2pb2b"/>
                <div class="platform_text">
                    <div class="platform_text-inner">P2PB2B</div>
                </div>
            </a>
            <div class="platforms__text-container">
                    <div class="platforms__text-floor">
                        <div class="platforms__text font-51">We already listed on</div>
                    </div>
                    <div class="platforms__text-floor">
                        <div class="platforms__text font-51">the over <span>10</span> worldwide</div>
                    </div>
                    <div class="platforms__text-floor">
                        <div class="platforms__text font-51">trade platforms</div>
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
    .platforms-outer.aos-animate .platforms__text{
        transform: translateY(0%);
    }
    .platforms__text-floor:nth-child(1) .platforms__text{
        transition-delay: .3s;
    }
    .platforms__text-floor:nth-child(2) .platforms__text{
        transition-delay: .4s;
    }
    .platforms__text-floor:nth-child(3) .platforms__text{
        transition-delay: .5s;
    }
    .platforms__text{
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        transform: translateY(120%);
    }
    .platforms__text-floor{
        overflow: hidden;
    }
    .platforms__text span{
        font-size: inherit;
        line-height: inherit;
        color: #FF7152;
    }
    .platforms__text-container{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 240px;
    }
    .platform:nth-child(15) img{
        transition-delay: .3s;
    }
    .platform:nth-child(14) img{
        transition-delay: .3s;
    }
    .platform:nth-child(13) img{
        transition-delay: .2s;
    }
    .platform:nth-child(12) img{
        transition-delay: .6s;
    }
    .platform:nth-child(11) img{
        transition-delay: .3s;
    }
    .platform:nth-child(10) img{
        transition-delay: .2s;
    }
    .platform:nth-child(9) img{
        transition-delay: .8s;
    }
    .platform:nth-child(8) img{
        transition-delay: .2s;
    }
    .platform:nth-child(7) img{
        transition-delay: .5s;
    }
    .platform:nth-child(6) img{
        transition-delay: .2s;
    }
    .platform:nth-child(5) img{
        transition-delay: .3s;
    }
    .platform:nth-child(4) img{
        transition-delay: .5s;
    }
    .platform:nth-child(3) img{
        transition-delay: .4s;
    }
    .platform:nth-child(2) img{
        transition-delay: .3s;
    }
    .platform:nth-child(1) img{
        transition-delay: .7s;
    }
    .platform img{
        opacity: 0;
        transform: scale(.9);
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .platforms-outer.aos-animate .platform img{
        opacity: 1;
        transform: scale(1);
    }
    .platform:nth-child(15){
        top: 2%;
        right: 69%;
    }
    .platform:nth-child(14){
        top: 13%;
        right: 91%;
    }
    .platform:nth-child(13){
        top: 30%;
        right: 84%;
    }
    .platform:nth-child(12){
        top: 44%;
        right: 90%;
    }
    .platform:nth-child(11){
        top: 55%;
        right: 77%;
    }
    .platform:nth-child(10){
        top: 59%;
        right: 63%;
    }
    .platform:nth-child(9){
        top: 62%;
        right: 33%;
    }
    .platform:nth-child(8){
        top: 72%;
        right: 14%;
    }
    .platform:nth-child(7){
        top: 59%;
        right: 21%;
    }
    .platform:nth-child(6){
        top: 63%;
        right: 1%;
    }
    .platform:nth-child(5){
        top: 48%;
        right: 8%;
    }
    .platform:nth-child(4){
        top: 32%;
        right: 1%;
    }
    .platform:nth-child(3){
        top: 13%;
        right: 5%;
    }
    .platform:nth-child(2){
        top: 7%;
        right: 22%;
    }
    .platform:nth-child(1){
        top: 9%;
        right: 48%;
    }
    .platforms-outer{
        padding-right: 105px;
    }
    .platform{
        position: absolute;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: .6;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .platform:hover{
        opacity: 1;
    }
    .platform_text{
        margin-top: 15px;
        opacity: .5;
        overflow: hidden;
    }
    .platform_text-inner{
        transform: translateY(120%);
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        text-align: center;
    }
    .platform:hover .platform_text-inner{
        transform: translateY(0%);
    }
    .platforms-container{
        height: 965px;
        width: 100%;
        position: relative;
        padding-top: 5px;
    }
    .test{
        width: 100%;
    }
    /*Laptop 1440*/
    @media (max-width: 1900px){
    }
    /*Ipad 768*/
    @media (max-width: 1023px){
        .platform{
            transform: scale(.7);
        }
        .platforms-outer{
            padding-right: 0px;
        }
    }
    /*Mobile 320*/
    @media (max-width: 767px){
        .platforms-container{
            height: 630px;
        }
        .platform {
            transform: scale(.5);
            transform-origin: right;
        }
        .platforms__text.font-51{
            font-size: 20px;
            line-height: 28px;
        }
        .platforms__text-container{
            padding-bottom: 140px;
        }
        .platform:nth-child(13) {
            right: 91%;
        }
        .platform:nth-child(14) {
            right: 87%;
        }
        .platform:nth-child(12) {
            right: 87%;
        }
    }
</style>
