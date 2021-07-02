<template>
    <section class="container">
        <div class="career__slider-section">
            <div class="">
                <h3 class="font-51">Work With Us</h3>
                <div class="career__slider-container">
                    <div class="career__slider-outer">
                        <swiper
                            class="career__slider"
                            ref="career__slider"
                            :options="swiperOptions"
                        >
                            <swiper-slide v-for="item in items" :key="item.id">
                                <div class="career__slider-item">
                                    <div class="career__slider-item-title">
                                        {{ item.title }}
                                    </div>
                                    <div class="career__slider-text">
                                        {{ item.text }}
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="slide-nav" data-aos="fade-up">
                        <div class="prev">
                            <svg
                                width="38"
                                height="30"
                                viewBox="0 0 38 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.24 -6.73927e-06L19.08 3.81889L10.44 12.3228L38 12.3228L38 17.6772L10.44 17.6772L19.08 26.1811L15.24 30L6.55671e-07 15L15.24 -6.73927e-06Z"
                                    fill="#0500FF"
                                />
                            </svg>
                        </div>
                        <div class="next">
                            <svg
                                width="38"
                                height="30"
                                viewBox="0 0 38 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.76 -6.73927e-06L18.92 3.81889L27.56 12.3228L-7.72693e-07 12.3228L-5.38648e-07 17.6772L27.56 17.6772L18.92 26.1811L22.76 30L38 15L22.76 -6.73927e-06Z"
                                    fill="#0500FF"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            swiperOptions: {
                slidesPerView: "auto",
                speed: 800,
                spaceBetween: 0,
                watchOverflow: true,
                navigation: {
                    nextEl: ".next",
                    prevEl: ".prev"
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                }
            },
            items: [
                {
                    title: "Thrive with Binance",
                    text:
                        "What's our secret to success? Our people. Be united by a commom DNA of talented, hardworking and passionate individuals in a world renowned team."
                },
                {
                    title: "What's our secret to success?",
                    text:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus sequi ab eum. Id est iusto rerum earum enim laborum eius, sed assumenda, maxime labore possimus error eligendi nulla deserunt."
                },
                {
                    title: "Lorem ipsum dolor sit amet consectetur",
                    text:
                        "Adipisicing elit. Nam ducimus sequi ab eum. Id est iusto rerum earum enim laborum eius, sed assumenda, maxime labore possimus error eligendi nulla deserunt."
                }
            ]
        };
    },
    methods: {}
};
</script>
<style scoped>
.career__slider-section {
    position: relative;
    /* margin-right: 160px; */
    padding-top: 100px;
    margin-top: 70px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
    max-width: 960px;
}
.career__slider-container {
    display: flex;
    margin-top: 48px;
}
.career__slider-outer {
    height: 100%;
    display: flex;
    padding-right: 135px;
    width: calc(100% - 95px);
}
.career__slider-item {
    display: flex;
    flex-direction: column;
    padding-right: 80px;
}
.career__slider-text {
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    line-height: 24px;
}
.career__slider-item-title {
    margin-top: auto;
    color: #ff7152;
    font-size: 30px;
    line-height: 42px;
}

.slide-nav {
    display: flex;
    width: 95px;
}
.slide-nav path {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.slide-nav div:hover path {
    fill: #ff7152;
}
.slide-nav div:hover svg {
    fill: #ff7152 !important;
}
.slide-nav div:not(.swiper-button-disabled) svg {
    fill: #0500ff;
}
.prev {
    margin-right: 15px;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
}
.prev:hover {
    transform: translateX(-10px);
}
.next {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
}
.next:hover {
    transform: translateX(10px);
}
.swiper-button-disabled {
    pointer-events: none;
    opacity: 0.5;
}

/*Laptop 1440*/
@media (max-width: 1900px) {
}
/*Ipad 1024*/
/* @media (max-width: 1365px) {

} */
/*Ipad 768*/
@media (max-width: 1023px) {
    .career__slider-section {
        padding-top: 70px;
    }
    .career__slider-container {
        margin-top: 30px;
    }
    .career__slider-outer {
        padding-right: 50px;
    }
    .career__slider-item {
        padding-right: 20px;
    }
    .career__slider-item-title {
        font-size: 20px;
        line-height: 30px;
    }
}

/*Mobile 320*/
@media (max-width: 767px) {
    .career__slider-outer {
        width: 100%;
        padding-right: 20px;
    }
    .career__slider-container {
        flex-direction: column;
    }
    .career__slider-section .swiper-pagination {
        display: none;
    }
    .slide-nav {
        margin-top: 20px;
    }
    .career__slider-text {
        margin-bottom: 40px;
        margin-top: 15px;
        font-size: 12px;
        line-height: 20px;
        padding-right: 10px;
    }
}
</style>

<style>
.career__slider-section .swiper-pagination {
    position: relative;
    text-align: left;
    margin-top: 32px;
}
.career__slider-section .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #fff;
    margin-right: 16px;
    opacity: 0.1;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.career__slider-section .swiper-pagination-bullet-active {
    opacity: 1;
}

</style>
