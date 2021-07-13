<template>
    <section class="container">
        <div class="gravity__slider-section">
            <div class="gravity__slider-head">
                <h3 class="font-51">Popular</h3>
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
            <div class="gravity__slider-container">
                <div class="gravity__slider-outer">
                    <swiper
                        class="gravity__slider"
                        ref="gravity__slider"
                        :options="swiperOptions"
                    >
                        <swiper-slide v-for="img in images" :key="img.id">
                            <div class="gravity__slider-item">
                                <div class="img_box">
                                    <img
                                        :src="img.src"
                                        alt=""
                                        class="img_absolute"
                                    />
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            swiperOptions: {
                slidesPerView: 4,
                speed: 800,
                spaceBetween: 40,
                watchOverflow: true,
                navigation: {
                    nextEl: ".next",
                    prevEl: ".prev"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    499: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }
            },
            images: [
                {
                    src: require("@/assets/img/gravity/image 54.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 55.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 56.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 57.png")
                },
                {
                    src: require("@/assets/img/gravity/image 54.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 55.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 56.jpg")
                },
                {
                    src: require("@/assets/img/gravity/image 57.png")
                }
            ]
        };
    },
    methods: {}
};
</script>
<style scoped>
.gravity__slider-section {
    position: relative;
    margin-top: 80px;
    width: 100%;
    max-width: 952px;
}
.gravity__slider-container {
    display: flex;
    margin-top: 48px;
}
.gravity__slider-outer {
    display: flex;
    width: 100%;
    height: 100%;
}
.gravity__slider {
    width: 100%;
}
.gravity__slider-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img_box {
    position: relative;
    padding-top: 133.7%;
}

.img_absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

/*Ipad 768*/
@media (max-width: 1023px) {
    .gravity__slider-container {
        margin-top: 30px;
    }
}

/*Mobile 320*/
@media (max-width: 767px) {
    .gravity__slider-section {
        margin-top: 50px;
    }
    .gravity__slider-outer {
        width: 100%;
    }
    .prev svg,
    .next svg {
        max-height: 25px;
    }
}
</style>
