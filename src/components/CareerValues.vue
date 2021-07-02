<template>
    <div class="career__values-outer">
        <div class="container">
            <div class="career__items" data-aos="fade-up">
                <div
                    class="career_item"
                    data-aos="fade-up"
                    v-for="(value, index) in values"
                    :key="index"
                >
                    <img :src="value.img" alt="" />
                    <div class="item_ttl">{{ value.title }}</div>
                    <p>{{ value.desc }}</p>
                </div>
            </div>
        </div>

        <div class="career-bg__outer">
            <img
                v-prlx="{ speed: 0.1 }"
                :src="require(`@/assets/img/career-bg-2.png`)"
                alt=""
                class="career-bg"
            />
        </div>

        <div class="container">
            <div class="counter-container" data-aos="fade-up">
                <div class="counter-item">
                    <div class="counter-num font-51">50+</div>
                    <div class="counter-ttl">Nationalities</div>
                </div>
                <div class="counter-item">
                    <div class="counter-num font-51">1300+</div>
                    <div class="counter-ttl">Employees</div>
                </div>
                <div class="counter-item">
                    <div class="counter-num font-51">20+</div>
                    <div class="counter-ttl">Locations</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            values: [
                {
                    img: require("@/assets/img/career/focused.svg"),
                    title: "User-Focused",
                    desc:
                        "We protect our users by putting our users' needs first and delivering quality service."
                },
                {
                    img: require("@/assets/img/career/teamwork.svg"),
                    title: "Collaboration",
                    desc:
                        "We communicate openly. We work as a team towards shared goals to build the ecosystem together."
                },
                {
                    img: require("@/assets/img/career/hardcore.svg"),
                    title: "Hardcore",
                    desc:
                        "We are results driven. We get things done. We are passionate and work hard. When we fail, we learn fast, and pick ourselves up."
                },
                {
                    img: require("@/assets/img/career/freedom.svg"),
                    title: "Freedom",
                    desc:
                        "We execute responsibly and autonomously. We empower those around us. Our team is diverse and we challenge the status quo."
                },
                {
                    img: require("@/assets/img/career/integrity.svg"),
                    title: "Integrity",
                    desc:
                        "We are accountable for our actions. When we make mistakes, we fix them. We always act ethically. We never punch down."
                }
            ]
        };
    }
};
</script>

<style scoped>
.career__values-outer {
    position: relative;
}
.career-bg {
    width: 100%;
    height: 120%;
}
.career-bg__outer {
    overflow: hidden;
    position: absolute;
    bottom: -50%;
    right: 0px;
    width: 100vw;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.career-bg__outer:before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    z-index: 2;
    height: 25%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.career__items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
}
.career_item {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-right: 180px;
    margin-bottom: 100px;
}
.career_item img {
    max-width: 120px;
    max-height: 120px;
}
.career_item .item_ttl {
    position: relative;
    font-size: 20px;
    line-height: 30px;
    margin-top: 48px;
    width: max-content;
}
.career_item p {
    opacity: 0.7;
    font-size: 15px;
    line-height: 30px;
    margin-top: 16px;
}
.counter-container {
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
    margin-top: 40px;
}
.counter-num {
    color: #ff7152;
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {

    .career_item {
        padding-right: 100px;
        margin-bottom: 70px;
    }
    .career_item img {
        max-width: 100px;
        max-height: 100px;
    }
    .career_item .item_ttl {
        margin-top: 30px;
    }
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .career_item {
        padding-right: 30px;
        margin-bottom: 70px;
    }
    .career_item img {
        max-width: 70px;
        max-height: 70px;
    }
    .counter-container {
        max-width: 500px;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .career__items {
        flex-direction: column;
        margin-top: 70px;
    }
    .career_item {
        width: 100%;
    }
    .career_item p {
        text-align: left;
    }
    .counter-num {
        font-size: 22px;
    }
}
</style>
