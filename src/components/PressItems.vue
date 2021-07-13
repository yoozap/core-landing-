<template>
    <section class="container">
        <div class="press__columns-container">
            <div class="press__column-left">
                <router-link to="#" class="press_item main">
                    <div class="img_box">
                        <img :src="press[0].img" alt="" class="img_absolute" />
                        <div class="press_icon">
                            <img :src="press[0].icon" alt="" />
                        </div>
                    </div>
                    <h2 class="press_ttl">{{ press[0].title }}</h2>
                    <p class="press_teaser">{{ press[0].teaser }}</p>
                </router-link>
                <template v-for="(item, index) in press">
                    <router-link
                        to="#"
                        class="press_item small"
                        v-if="index > 0 && index <= 5"
                        :key="index"
                    >
                        <div class="press_icon">
                            <img :src="item.icon" alt="" />
                        </div>
                        <h3 class="press_ttl">{{ item.title }}</h3>
                    </router-link>
                </template>
            </div>
            <div class="press__column-right">
                <template v-for="(item, index) in press">
                    <router-link
                        to="#"
                        class="press_item right"
                        v-if="index > 5 && index <= 8"
                        :key="index"
                    >
                        <div class="img_box">
                            <img :src="item.img" alt="" class="img_absolute" />
                            <div class="press_icon">
                                <img :src="item.icon" alt="" />
                            </div>
                        </div>
                        <h2 class="press_ttl">{{ item.title }}</h2>
                    </router-link>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            press: [
                {
                    img: require("@/assets/img/press/image 93.jpg"),
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "How the Blockchain Could Break Big Tech’s Hold on A.I.",
                    teaser:
                        "Ben Goertzel, have been among the big names arguing that the blockchain could be a crucial way to push back against some of the most worrying trends facing the field of artificial intelligence."
                },
                {
                    img: require("@/assets/img/press/image 93.jpg"),
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    teaser: ""
                },
                {
                    img: require("@/assets/img/press/image 93.jpg"),
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    teaser: ""
                },
                {
                    img: require("@/assets/img/press/image 93.jpg"),
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    teaser: ""
                },
                {
                    img: require("@/assets/img/press/image 93.jpg"),
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    teaser: "12"
                },
                {
                    img: "",
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    teaser: ""
                },
                {
                    img: require("@/assets/img/press/press 2.jpg"),
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
                    teaser: ""
                },
                {
                    img: require("@/assets/img/press/image 91.jpg"),
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain",
                    teaser: "116"
                },
                {
                    img: require("@/assets/img/press/image 94.jpg"),
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "In the future, algorithms may barter between each other to make better decisions",
                    teaser: "97"
                },
                {
                    img: "",
                    title: "Eric Turner",
                    teaser: "60"
                },
                {
                    img: require("@/assets/img/press/image 94.jpg"),
                    icon: require("@/assets/img/press/image 77.png"),
                    title: "Eric Turner",
                    teaser: "60"
                },
                {
                    img: "",
                    title: "Alexandra Solovieva",
                    teaser: "160"
                }
            ]
        };
    }
};
</script>

<style scoped>
.press__columns-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 952px;
    margin-top: 100px;
}
.press__column-left {
    width: calc(54.83% - 30px);
    display: flex;
    flex-direction: column;
}
.press__column-right {
    width: calc(45.17% - 30px);
    display: flex;
    flex-direction: column;
}
.img_box {
    position: relative;
    /* overflow: hidden; */
}
.img_absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
}
.press_icon {
    width: 72px;
    height: 72px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.press_icon img {
    max-width: 65px;
    max-height: 40px;
}
.press_ttl {
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: 0.6s;
}
.press_teaser {
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.press_item.main {
    margin-bottom: 30px;
}
.press_item.main .img_box {
    padding-top: 73.18%;
}
.press_item.main .press_ttl {
    font-size: 30px;
    line-height: 42px;
    margin-top: 24px;
}
.press_item.main .press_teaser {
    opacity: 0.7;
    line-height: 24px;
    margin-top: 16px;
}
.press_item.main .press_icon,
.press_item.right .press_icon {
    position: absolute;
    top: -16px;
    left: 16px;
}

.press_item.small {
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid #111826;
}
.press_item.small .press_ttl {
    font-size: 20px;
    line-height: 30px;
    margin-left: 24px;
}
.press_item.right:not(:first-child) {
    padding-top: 46px;
    margin-top: 30px;
    border-top: 1px solid #111826;
}
.press_item.right .img_box {
    padding-top: 65%;
}
.press_item.right .press_ttl {
    font-size: 20px;
    line-height: 30px;
    margin-top: 16px;
}
.press_item:hover .press_ttl {
    color: #ff7152;
}

@media (max-width: 1300px) {
    .press__column-left {
        width: calc(54.83% - 15px);
    }
    .press__column-right {
        width: calc(45.17% - 15px);
    }
}

@media (max-width: 1023px) {
    .press_item.main .press_ttl {
        font-size: 20px;
        line-height: 30px;
    }
    .press_item.small .press_ttl,
    .press_item.right .press_ttl {
        font-size: 15px;
        line-height: 24px;
    }
}

@media (max-width: 499px) {
    .press__columns-container {
        flex-direction: column;
    }
    .press__column-left,
    .press__column-right {
        width: 100%;
    }
    .press__column-right {
        padding-top: 50px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 30px;
    }
}
</style>
