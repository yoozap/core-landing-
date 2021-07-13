<template>
    <div>
        <div
            id="main"
            class="outer"
            :class="firstAnimation ? 'animHead' : ''"
            v-view="visibilityChanged"
        >
            <TopHead />
            <div class="gravity-bg__outer">
                <img
                    v-prlx="{ speed: 0.1 }"
                    :src="require(`@/assets/img/gravity-bg.png`)"
                    alt=""
                    class="gravity-bg"
                />
            </div>
            <div class="container">
                <div class="main-container__description">
                    <div class="left">
                        <h1>
                            Gravity
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="gravity__tabs-container">
                <h3 class="gravity__tabs-ttl">Our DApps</h3>
                <div class="gravity__tabs">
                    <div
                        class="gravity__tab"
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :class="[index === active ? 'active' : '']"
                        @click="activate(index)"
                    >
                        <img :src="tab.img" alt="" />
                        <div class="tab_name">{{ tab.name }}</div>
                    </div>
                </div>
                <div class="tab-content">
                    <transition-group name="fade-up">
                        <div
                            class="tab_images"
                            :key="activeTabContent.images[1].img"
                        >
                            <div class="img_box">
                                <img
                                    :src="activeTabContent.images[0].img"
                                    alt=""
                                    class="img_absolute"
                                />
                            </div>
                            <div class="img_box">
                                <img
                                    :src="activeTabContent.images[1].img"
                                    alt=""
                                    class="img_absolute"
                                />
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHead from "@/components/TopHead.vue";
export default {
    name: "MainContainer",
    data() {
        return {
            firstAnimation: false,
            active: 0,

            tabs: [
                {
                    id: 1,
                    img: require("@/assets/img/gravity/bnb 1.png"),
                    name: "Bsc",
                    images: [
                        {
                            img: require("@/assets/img/gravity/image 58.jpg")
                        },
                        {
                            img: require("@/assets/img/gravity/image 59.jpg")
                        }
                    ]
                },
                {
                    id: 2,
                    img: require("@/assets/img/gravity/trx 3.png"),
                    name: "CMCx",
                    images: [
                        {
                            img: require("@/assets/img/gravity/release 1.jpg")
                        },
                        {
                            img: require("@/assets/img/gravity/release 2.jpg")
                        }
                    ]
                },
                {
                    id: 3,
                    img: require("@/assets/img/gravity/trx 2.png"),
                    name: "TRON",
                    images: [
                        {
                            img: require("@/assets/img/gravity/release 3.jpg")
                        },
                        {
                            img: require("@/assets/img/gravity/release 4.jpg")
                        }
                    ]
                },
                {
                    id: 4,
                    img: require("@/assets/img/gravity/eth 2.png"),
                    name: "ETh",
                    images: [
                        {
                            img: require("@/assets/img/about-video.jpg")
                        },
                        {
                            img: require("@/assets/img/gravity/release 3.jpg")
                        }
                    ]
                }
            ]
        };
    },
    components: {
        TopHead
    },
    mounted() {
        setTimeout(() => {
            this.firstAnimation = true;
        }, 100);
    },
    computed: {
        activeTabContent() {
            return this.tabs[this.active];
        }
    },

    methods: {
        visibilityChanged() {
            this.$store.commit("setMenuStatus", 0);
        },
        activate(index) {
            this.active = index;
        }
    }
};
</script>
<style scoped>
.gravity-bg {
    width: 100%;
    height: 120%;
    opacity: 0.4;
}
.gravity-bg__outer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 1;
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.gravity-bg__outer:before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: "";
    z-index: 2;
    height: 25%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.animHead .gravity-bg__outer {
    opacity: 1;
    transform: translateY(-38px);
}
.container {
    position: relative;
    z-index: 20;
    height: 100%;
}
.main-container__description h1 {
    display: flex;
    flex-direction: column;
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
}
.main-container__description h1 span {
    font-size: inherit;
    font-family: inherit;
}
.main-container__description h1 span:nth-child(2) {
    padding-left: 122px;
}
.animHead h1 {
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0.5s;
}
.main-container__description h3 {
    font-size: 20px;
    margin-top: 100px;
}
.main-container__description {
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
}
.left {
    width: 50%;
    position: relative;
    z-index: 5;
}

.main-container__header .left {
    font-size: 20px;
    line-height: 28px;
}
#main {
    position: relative;
    width: 100%;
    background: #00050f;
    z-index: 2;
}

.gravity__tabs-container {
    width: 100%;
    max-width: 952px;
    margin-top: 100px;
}
.gravity__tabs-ttl {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 32px;
}
.gravity__tabs {
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    margin-bottom: 40px;
    overflow-x: auto;
}
.gravity__tabs::-webkit-scrollbar {
    display: none;
}
.gravity__tab {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 32px;
    cursor: pointer;
}
.gravity__tab::after {
    content: "";
    position: absolute;
    bottom: -16px;
    width: 100%;
    height: 2px;
    background: #ff7152;
    transform: scale(0);
    transform-origin: left;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.gravity__tab img {
    margin-right: 12px;
}
.tab_name {
    text-transform: uppercase;
    opacity: 0.5;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.gravity__tab:hover .tab_name {
    opacity: 1;
}
.gravity__tab.active::after {
    transform: scale(1);
}
.gravity__tab.active .tab_name {
    opacity: 1;
}

.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.3s ease-in-out;
}
.fade-up-enter,
.fade-up-leave-to {
    height: 0;
    transform: translateY(30px);
    opacity: 0;
}
.tab_images {
    display: flex;
    justify-content: space-between;
}
.tab_images .img_box {
    position: relative;
    width: calc(50% - 20px);
    padding-top: 29.21%;
}
.tab_images .img_box:first-child {
    margin-right: 40px;
}
.tab_images .img_absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
    .main-container__description {
        padding-left: 25px;
    }
    .main-container__description h1 {
        font-size: 50px;
    }
    .main-container__description h1 span:nth-child(2) {
        padding-left: 63px;
    }
}

@media (max-width: 1200px) {
    .tab_images .img_box {
        width: calc(50% - 15px);
    }
    .tab_images .img_box:first-child {
        margin-right: 30px;
    }
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .main-container__description {
        padding-left: 0px;
    }
    .main-container__description .frst-txt {
        font-size: 12px;
        line-height: 22px;
    }
    .main-container__description .scnd-txt {
        font-size: 16px;
        line-height: 26px;
        margin-top: 30px;
    }
    .right {
        padding-bottom: 60px;
        padding-right: 30px;
    }
    .main-video__container {
        right: -38%;
        padding-top: 130%;
        width: 130%;
    }
    .main-container__header .left {
        font-size: 13px;
        line-height: 22px;
    }
    .main-container__description p {
        font-size: 32px;
        line-height: 40px;
    }
    .scroll-down {
        display: none;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .protocol__link-main-svg {
        margin-right: 25px;
    }
    .protocol__link-txt {
        font-size: 10px;
    }
    .gravity-bg__outer {
        width: 100%;
    }
    .left {
        width: 100%;
    }
    .main-container__description {
        flex-direction: column;
    }
    .main-container__description h3 {
        text-align: left;
    }
    .download-container__mobile-inner a {
        margin: 0px 15px;
    }
    .download-container__mobile .ttl {
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        margin-bottom: 25px;
    }
    .main-container__description {
        padding: 0px 15px;
        text-align: center;
        bottom: 90px;
    }
    .main-container__description h1 {
        margin-top: 115px;
        margin-bottom: 50px;
        text-align: left;
    }
    .gravity-bg {
        height: 100vh;
        object-fit: cover;
    }
    .tab_images .img_box {
        width: calc(50% - 7.5px);
    }
    .tab_images .img_box:first-child {
        margin-right: 15px;
    }
}
</style>
