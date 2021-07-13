<template>
    <section class="container">
        <div class="press__tabs-container">
            <div class="press__tabs-head">
                <h2 class="press__tabs-ttl">Publics by years</h2>
                <div class="press__tabs">
                    <div
                        class="press__tab"
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :class="[index === active ? 'active' : '']"
                        @click="activate(index)"
                    >
                        <div class="tab_name">{{ tab.name }}</div>
                    </div>
                </div>
            </div>

            <div class="press__tabs-content">
                <transition-group name="fade-up">
                    <template
                        v-for="(item, index) in itemList.slice(0, itemsToShow)"
                    >
                        <router-link
                            to="#"
                            class="press_item small"
                            :key="index"
                        >
                            <div class="press_icon">
                                <img :src="item.icon" alt="" />
                            </div>
                            <h3 class="press_ttl">{{ item.title }}</h3>
                        </router-link>
                    </template>
                </transition-group>

                <div v-if="itemsToShow < itemList.length">
                    <div class="press__load-more" @click="itemsToShow += 5">
                        Load More Publics
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            selectedTab: 2021,
            itemsToShow: 5,
            tabs: [
                {
                    name: 2021
                },
                {
                    name: 2020
                },
                {
                    name: 2019
                },
                {
                    name: 2018
                }
            ],

            press: [
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2019"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "In the future, algorithms may barter between each other to make better decisions",
                    year: "2018"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2019"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "In the future, algorithms may barter between each other to make better decisions",
                    year: "2018"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 82.png"),
                    title:
                        "Cryptocurrencies Are Gaining Momentum With New Launches",
                    year: "2019"
                },
                {
                    icon: require("@/assets/img/press/image 80.png"),
                    title:
                        "AI Is The Future Of Computing, And SingularityNET Is The Future Of AI",
                    year: "2020"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "SingularityNET’s Ben Goertzel has a grand vision for the future of AI",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "Cisco, SingularityNET to Decentralize Artificial Intelligence via Blockchain",
                    year: "2021"
                },
                {
                    icon: require("@/assets/img/press/image 77.png"),
                    title:
                        "In the future, algorithms may barter between each other to make better decisions",
                    year: "2018"
                }
            ]
        };
    },
    methods: {
        activate(index) {
            let data = this.tabs;
            this.active = index;
            this.selectedTab = data[index].name;
        }
    },
    computed: {
        itemList() {
            let data = this.press;
            let filteredItems = [];

            if (this.selectedTab != null) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].year == this.selectedTab) {
                        filteredItems.push(data[i]);
                    }
                }
                return filteredItems;
            } else {
                return data;
            }
        }
    },
    mounted() {
        let data = this.press;
        console.log(data[0].year);
    }
};
</script>

<style scoped>
.press__tabs-container {
    width: 100%;
    max-width: 952px;
    margin-top: 100px;
    margin-bottom: 70px;
}
.press__tabs-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 24px;
}

.press__tabs-ttl {
    font-size: 30px;
    line-height: 42px;
}
.press__tabs {
    display: flex;
    justify-content: flex-end;
}

.press__tab {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.press__tab:not(:last-child) {
    margin-right: 32px;
}
.press__tab::after {
    content: "";
    position: absolute;
    bottom: -25px;
    width: 100%;
    height: 2px;
    background: #ff7152;
    transform: scale(0);
    transform-origin: left;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.tab_name {
    font-size: 30px;
    line-height: 42px;
    opacity: 0.5;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    white-space: nowrap;
}
.press__tab:hover .tab_name {
    opacity: 1;
}
.press__tab.active::after {
    transform: scale(1);
}
.press__tab.active .tab_name {
    opacity: 1;
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
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
    transition: 0.6s;
}
.press__load-more {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 30px;
    width: max-content;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: 0.6s;
}
.press__load-more:hover {
    text-decoration-color: inherit;
}
.press_item:hover .press_ttl {
    color: #ff7152;
}

@media (max-width: 1023px) {
    .press__tabs-ttl,
    .tab_name {
        font-size: 20px;
        line-height: 30px;
    }
    .press_item.small .press_ttl {
        font-size: 15px;
        line-height: 24px;
    }
}

@media (max-width: 767px) {
    .press__tabs-head {
        flex-direction: column;
        align-items: flex-start;
    }
    .press__tabs {
        margin-top: 30px;
    }
}
</style>

<style>
.fade-up-enter-active {
    transition: all 0.6s ease;
}
.fade-up-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-up-enter,
.fade-up-leave-to {
    transform: translateY(30px);
    opacity: 0;
}
</style>
