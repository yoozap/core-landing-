<template>
    <div>
        <div
            id="main"
            class="outer"
            :class="firstAnimation ? 'animHead' : ''"
            v-view="visibilityChanged"
        >
            <TopHead />
            <div class="career__bg-outer">
                <img
                    v-prlx="{ speed: 0.1 }"
                    :src="require(`@/assets/img/career-bg.png`)"
                    alt=""
                    class="career__main-bg"
                />
            </div>
            <div class="container">
                <div class="main-container__description">
                    <div class="left">
                        <h1>
                            <span>Careers</span>
                            <div class="ttl_row">
                                <span>at</span><span class="ttl_red">Core</span>
                            </div>
                        </h1>
                    </div>
                    <div class="career_how mt-100" data-aos="fade-up">
                        <h2 class="font-51">
                            How We Work
                        </h2>
                        <p>At CORE, our remote global team works together to accomplish a common objective. Our worldwide
                            team enables the positive impact of our technology to infiltrate every corner of the world as we utilize
                            the experience and feedback of our remote teams to improve and spread CORE.</p>
                        <br>
                        <br>
                        <p>
                            With team members located in over 40 different countries, CORE recruits internationally but allows team
                            members to work locally. Whether you live in the middle of Shenzhen or on a Miami beach, work loca-tion is limited only by imagination.
                        </p>
                        <br>
                        <br>
                        <p>On our relentless pursuit to revolutionise the blockchain and distributed ledger industry, CORE aims to
                            transcend the current limitations of blockchain technology and enable it to reach its true, unrealised potential. CORE intends to drastically improve blockchain interoperability, transaction processing, sustainability, and more! To achieve this, we will destroy the boundaries of innovation and stand at the forefront of blockchain and distributed ledger technology. Our purpose is to create a better decentralised
                            future to benefit all, without boundaries.
                        </p>
                    </div>
                    <div class="career_head" data-aos="fade-up">
                        <h2 class="font-51">Our Values</h2>
                        <div class="career_description">
                            <p>
                                Our core values establish the framework for our ability to create a lasting, positive impact for humanity:
                            </p>
                            <div class="description_text" v-if="false">
                                We focus on you. By applying this principle in
                                our daily work, we connect globally and continue
                                to persevere.
                            </div>
                        </div>
                    </div>
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
            firstAnimation: false
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
    methods: {
        visibilityChanged() {
            this.$store.commit("setMenuStatus", 0);
        }
    }
};
</script>
<style scoped>
    .career_how{
        padding-right: 350px;
    }
    .career_how h2{
        margin-bottom: 30px;
    }
    .career_how p{
        font-size: 20px;
        line-height: 30px;
        opacity: .5;
    }
.career__main-bg {
    width: 100%;
    height: 120%;
}
.career__bg-outer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 1;
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.career__bg-outer:before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: "";
    z-index: 2;
    height: 50%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0.23993347338935578) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.animHead .career__bg-outer {
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
.main-container__description h1 .ttl_row {
    font-size: 100px;
}
.main-container__description h1 span,
.main-container__description h1 .ttl_row span {
    font-size: inherit;
    font-family: inherit;
}
.main-container__description h1 .ttl_row {
    padding-left: 122px;
}
.main-container__description .ttl_red {
    color: #ff7152;
    text-transform: uppercase;
    margin-left: 30px;
}
.animHead h1 {
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0.5s;
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

.career_head {
    display: flex;
    margin-top: 100px;
}
.career_head h2 {
    width: 50%;
}
.career_description {
    width: 50%;
    max-width: 416px;
    padding-top: 33px;
}
.career_description p {
    line-height: 24px;
    opacity: 0.5;
}
.description_text {
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
}
/*Laptop 1440*/

/*Ipad Pro 1024*/
@media (max-width: 1300px) {
    .career_how{
        padding-right: 0px;
    }
    .main-container__description {
        padding-left: 25px;
    }
    .main-container__description h1,
    .main-container__description h1 .ttl_row {
        font-size: 50px;
    }
    .main-container__description h1 .ttl_row {
        padding-left: 63px;
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

    .career_description {
        padding-top: 10px;
    }
    .description_text {
        font-size: 16px;
        line-height: 24px;
        margin-top: 30px;
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
    .career__bg-outer {
        width: 100%;
    }
    .left {
        width: 100%;
    }
    .main-container__description {
        flex-direction: column;
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
    .career_head {
        margin-top: 50px;
    }
    .career__main-bg {
        height: 100vh;
        object-fit: cover;
    }
    .main-container__description {
        padding: 0px;
    }
    .career_head {
        flex-direction: column;
    }
    .career_head h2,
    .career_description {
        width: 100%;
    }
}
</style>
