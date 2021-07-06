<template>
	<div class="slider">
        <div class="top">
            <h2 class="ttl">Speakers</h2>
            <div class="btns">
                <div class="slider-button-prev">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.24 -6.73927e-06L19.08 3.81889L10.44 12.3228L38 12.3228L38 17.6772L10.44 17.6772L19.08 26.1811L15.24 30L6.55671e-07 15L15.24 -6.73927e-06Z" fill="#0500FF"/>
                    </svg>
                </div>
                <div class="slider-button-next">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.76 -6.73927e-06L18.92 3.81889L27.56 12.3228L-7.72693e-07 12.3228L-5.38648e-07 17.6772L27.56 17.6772L18.92 26.1811L22.76 30L38 15L22.76 -6.73927e-06Z" fill="#0500FF"/>
                    </svg>
                </div>
            </div>  
        </div> 
        <div v-swiper:slider="sliderOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="speaker" v-for="speaker in 3">
                <div class="slide">
                    <div class="img-box">
                        <picture >
                          <source
                            media="(max-width: 767px)"
                            :srcset="require('@/assets/img/about-video.jpg')"
                          />
                          <source
                            media="(max-width: 1023px)"
                            :srcset="require('@/assets/img/about-video.jpg')"
                          />
                          <img
                            :src="require('@/assets/img/about-video.jpg')"
                            class="img-absolute"
                          />
                        </picture>
                    </div>
                    <div class="bottom">
                        <h3 class="ttl">Jason McAlisster</h3>
                        <p>Executive Director of the Office of Entrepreneurship
                        & Innovation at University of Arkansas</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainSlider',
        data () {
            return {
                firstAnimation: false,
                sliderOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                    speed: 800,
                    watchOverflow: true,
                    navigation: {
                        nextEl: '.slider-button-next',
                        prevEl: '.slider-button-prev',
                    },
                }
            }
        },
    }
</script>
<style scoped>
	.slider{
        margin-top: 140px;
        width: 100%;
        max-width: 952px;
    }
    .top{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 60px;
    }
    .top .ttl{
        font-size: 51px;
        line-height: 66px;
        color: #fff;
        padding-right: 55px;
    }
    .btns{
        display: flex;
        align-items: center;
    }
    .btns > div{
        cursor: pointer;
    }
    .btns > div:first-child{
        margin-right: 18px;
    }
    .swiper-container{
        overflow: visible;
    }
    .slide{
        cursor: pointer;
    }
    .img-box{
        position: relative;
        padding-top: 59%;
    }
    .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .bottom{
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(10px);
    }
    .swiper-slide-active .bottom{
        opacity: 1;
        transform: translateY(0px);
    }
    .bottom .ttl{
        font-size: 20px;
        color: #fff;
        margin-right: 80px;
    }
    .bottom p{
        max-width: 416px;
        margin-top: 5px;
        font-size: 15px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.7);
    }

    @media(max-width: 1300px){
        .slider{
            margin-top: 100px;
        }
        .top .ttl{
            font-size: 38px;
            line-height: 48px;
        } 
    }
    @media (max-width: 1023px){
        .top .ttl{
            font-size: 28px;
            line-height: 48px;  
        } 
    }
    @media(max-width: 767px){
        .slider{
            margin-top: 80px;
        }
        .bottom .ttl{
            font-size: 16px;
            color: #fff;
            margin-right: 20px;
        }
        .bottom p{
            font-size: 12px;
            line-height: 18px;
        }
        .top{
            margin-bottom: 40px;
        }
    }
</style>