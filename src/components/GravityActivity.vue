<template>
    <section class="container">
        <div class="activity__tab-container">
            <h2 class="font-51">Activity in real time</h2>

            <div class="activity__tabs">
                <div
                    class="activity__tab"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="[index === active ? 'active' : '']"
                    @click="activate(index)"
                >
                    <div class="tab_name">{{ tab.name }}</div>
                </div>
            </div>

            <div class="activity__tab-content">
                <div class="tr tr-head fixed-table-item">
                    <div class="td">game</div>
                    <div class="td">user</div>
                    <div class="td">time</div>
                    <div class="td">bet</div>
                    <div class="td">coefficient</div>
                    <div class="td">payout</div>
                </div>

                <div
                    class="tr tr-body fixed-table-item"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <div class="td">{{ item.game }}</div>
                    <div class="td">{{ item.user }}</div>
                    <div class="td">{{ item.time }}</div>
                    <div class="td">
                        <img :src="item.bet[0].img" alt="" />
                        <span>{{ item.bet[1].qty }}</span>
                    </div>
                    <div class="td">{{ item.coefficient }}</div>
                    <div class="td" :class="{ dec: item.payout[2].dec }">
                        <img :src="item.payout[0].img" alt="" />
                        {{ item.payout[1].qty }}
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

            tabs: [
                {
                    name: "My Bets"
                },
                {
                    name: "All Bets"
                },
                {
                    name: "Best Players"
                },
                {
                    name: "Tournament"
                }
            ],
            list: [
                {
                    game: "BlackJack",
                    user: "stuTTTer",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "400.00000000"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "-180.50000000"
                        },
                        {
                            dec: true
                        }
                    ]
                },
                {
                    game: "Dice",
                    user: "new_user_12345678",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00083460"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00141236"
                        },
                        {
                            dec: false
                        }
                    ]
                },
                {
                    game: "BlackJack",
                    user: "stuTTTer",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "400.00000000"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "-180.50000000"
                        },
                        {
                            dec: true
                        }
                    ]
                },
                {
                    game: "Dice",
                    user: "new_user_12345678",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00083460"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00141236"
                        },
                        {
                            dec: false
                        }
                    ]
                },
                {
                    game: "BlackJack",
                    user: "stuTTTer",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "400.00000000"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/bnb 1.png")
                        },
                        {
                            qty: "-180.50000000"
                        },
                        {
                            dec: true
                        }
                    ]
                },
                {
                    game: "Dice",
                    user: "new_user_12345678",
                    time: "23:20",
                    bet: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00083460"
                        }
                    ],
                    coefficient: "1,29×",
                    payout: [
                        {
                            img: require("@/assets/img/gravity/eth 2.png")
                        },
                        {
                            qty: "0.00141236"
                        },
                        {
                            dec: false
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        activate(index) {
            this.active = index;
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        }
    }
};
</script>

<style scoped>
.activity__tab-container {
    margin-top: 40px;
    margin-bottom: 90px;
    width: 100%;
    max-width: 952px;
}
.activity__tabs-container {
    width: 100%;
    max-width: 952px;
    margin-top: 100px;
}
.activity__tabs-ttl {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 32px;
}
.activity__tabs {
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    margin-top: 32px;
    margin-bottom: 24px;
    overflow-x: auto;
}
.activity__tabs::-webkit-scrollbar {
    display: none;
}
.activity__tab-content {
    overflow-x: auto;
    width: 100%;
}
.activity__tab-content::-webkit-scrollbar {
    height: 5px;
}

.activity__tab {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 32px;
    cursor: pointer;
}
.activity__tab::after {
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
.tab_name {
    opacity: 0.5;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    white-space: nowrap;
}
.activity__tab:hover .tab_name {
    opacity: 1;
}
.activity__tab.active::after {
    transform: scale(1);
}
.activity__tab.active .tab_name {
    opacity: 1;
}

.tr {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}
.tr-head .td {
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 0.02em;
}

.td:first-child {
    width: 14.39%;
    min-width: 137px;
}
.td:nth-child(2) {
    width: 20.27%;
    min-width: 193px;
}
.td:nth-child(3) {
    width: 7.92%;
    min-width: 65px;
}
.td:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 14.68%;
    min-width: 150px;
}
.td:nth-child(5) {
    width: 15.12%;
    min-width: 144px;
}
.td:nth-child(6) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 27.62%;
    min-width: 263px;
}
.tr-body .td:nth-child(6) {
    color: #46ce64;
}
.tr-body .td:nth-child(6).dec {
    color: #ff7152;
}
.td img {
    margin-right: 10px;
}
.td:nth-child(4),
.td:nth-child(5),
.td:nth-child(6) {
    text-align: right;
}


@media (max-width: 767px) {
    /* .td:first-child,
    .td:nth-child(2),
    .td:nth-child(3),
    .td:nth-child(4),
    .td:nth-child(5),
    .td:nth-child(6) {
        width: max-content;
    } */
}
</style>
