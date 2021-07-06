<template>
	<div class="slider">
		<div class="ttl">Sponsors</div>
        <div v-swiper:slider="sliderOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="partners" v-for="partners in 3">
                <div class="slide">
                    <picture >
                      <source
                        media="(max-width: 767px)"
                        :srcset="require('@/assets/img/google.png')"
                      />
                      <source
                        media="(max-width: 1023px)"
                        :srcset="require('@/assets/img/google.png')"
                      />
                      <img
                        :src="require('@/assets/img/google.png')"
                        class="img-absolute"
                      />
                    </picture>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'iconSlider',
        data () {
            return {
                firstAnimation: false,
                sliderOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 100,
                    speed: 800,
                    watchOverflow: true,
                    navigation: {
                        nextEl: '.slider-button-next',
                        prevEl: '.slider-button-prev',
                    },
                    breakpoints: {
                        0: {
                         spaceBetween: 40,
                        },
                        768: {
                          spaceBetween: 100,
                        },
                    }
                }
            }
        },
    }
</script>
<style scoped>
	.slider{
		margin-top: 140px;
	}
	.slider .swiper-slide {
		width: auto;
	}

	.slider img{
		display: block;
		width: auto;
		height: auto;
		max-height: 40px;
	}
	.ttl{
        font-size: 51px;
        line-height: 66px;
        color: #fff;
        padding-right: 55px;
        margin-bottom: 60px;
    }

    @media(max-width: 1300px){
        .slider{
            margin-top: 100px;
        }
        .ttl{
            font-size: 38px;
            line-height: 48px;  
        } 
    }
    @media (max-width: 1023px){
        .ttl{
            font-size: 28px;
            line-height: 48px;  
        } 
    }
    @media(max-width: 767px){
        .slider{
            margin-top: 80px;
        }
        .ttl{
            margin-bottom: 40px;
        }
    }
</style>