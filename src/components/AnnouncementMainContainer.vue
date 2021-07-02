<template>
    <div>
        <div
            id="main"
            class="outer"
            :class="firstAnimation ? 'animHead' : ''"
            v-view="visibilityChanged"
        >
            <TopHead />
            <div class="announcement-bg__outer">
                <img
                    v-prlx="{ speed: 0.1 }"
                    :src="require(`@/assets/img/announcement-bg.png`)"
                    alt=""
                    class="announcement-bg"
                />
            </div>
            <div class="container">
                <div class="main-container__description">
                    <div class="left">
                        <h1>
                            Announcement
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="announcement__items" data-aos="fade-up">
                <div
                    class="announcement_item"
                    v-for="(item, index) in announcements"
                    :key="index"
                    data-aos="fade-up"
                >
                    <img :src="item.img" alt="" />
                    <div class="item_right">
                        <h4>{{ item.title }}</h4>
                        <ul class="announcement_list">
                            <li v-for="(li, index) in item.list" :key="index">
                                {{ li.title }}
                            </li>
                        </ul>
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
            firstAnimation: false,
            announcements: [
                {
                    img: require("@/assets/img/announcement/Frame 36.svg"),
                    title: "New Crypto Listings",
                    list: [
                        {
                            title:
                                "BAKE & CFX Enabled on Binance Isolated Margin"
                        },
                        {
                            title: "TLM Enabled on Binance Isolated Margin"
                        },
                        {
                            title:
                                "New Stock Tokens to Be Made Available on Binance.com (2021-04-26)"
                        },
                        {
                            title:
                                "Binance Will List Ampleforth Governance Token (FORTH)"
                        },
                        {
                            title:
                                "Margin Trading for SOL & PUNDIX Enabled on Binance"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/announcement/text 1.svg"),
                    title: "Latest News",
                    list: [
                        {
                            title:
                                "Binance Liquid Swap Adds CTSI/BNB Liquidity Pool"
                        },
                        {
                            title:
                                "Binance Will Support the Avalanche (AVAX) & Zilliqa (ZIL) Network Upgrades"
                        },
                        {
                            title:
                                "Binance P2P Supports New Payment Methods for Kazakhstani Tenge (KZT), Polish Zloty (PLN), Georgian Lari (GEL) and Armenian Dram (AMD)"
                        },
                        {
                            title:
                                "Updates on Tick Size for USDT-Margined Perpetual Futures Contracts (2021-05-07)"
                        },
                        {
                            title:
                                "Important Updates to Binance Leveraged Tokens (2021-05-07)"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/announcement/gift 1.svg"),
                    title: "Latest Activities",
                    list: [
                        {
                            title: "Deposit & Get Free DOGE!"
                        },
                        {
                            title:
                                "COS Trading Competition - $100,000 in Rewards to Be Won!"
                        },
                        {
                            title:
                                "Trade Binance Futures to Win Binance Limited Edition NFTs!"
                        },
                        {
                            title:
                                "Trade CKB to Collect Galaxy Permit & Win a Share of $50,000 in CKB!"
                        },
                        {
                            title:
                                "Liquid Swap Trading Competition “DeFi Season” - Win a Share of 30,000 BUSD"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/announcement/Frame 96.svg"),
                    title: "New Fiat Listings",
                    list: [
                        {
                            title:
                                "Binance Adds BAKE/USDT, BURGER/BUSD, BURGER/USDT, SLP/BUSD, SLP/USDT, TRX/AUD, TRX/EUR & VET/TRY Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds CAKE/GBP, DOGE/RUB, HOT/BRL & WRX/EUR Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds BNB/UAH, ONT/TRY, VET/EUR, VET/GBP & WIN/BRL Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds BTT/BRL, BTT/EUR, HOT/EUR & WIN/EUR Trading Pairs"
                        },
                        {
                            title: "Binance P2P Supports Mongolian Tughrik"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/announcement/api 1.svg"),
                    title: "API Updates",
                    list: [
                        {
                            title:
                                "Updates to Binance Margin SAPI Create Margin Account"
                        },
                        {
                            title:
                                "Notice on Adjusting the Request Weight of Rest API Endpoints"
                        },
                        {
                            title:
                                "Binance Futures API Websocket User Data Stream Upgrade (2021-04-23)"
                        },
                        {
                            title:
                                "Notice to API Users on Delisting WAPI Endpoints"
                        },
                        {
                            title:
                                "API Functionality Now Enabled for Binance Vanilla Options"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/announcement/parachute 1.svg"),
                    title: "Airdrop",
                    list: [
                        {
                            title:
                                "Binance Adds BAKE/USDT, BURGER/BUSD, BURGER/USDT, SLP/BUSD, SLP/USDT, TRX/AUD, TRX/EUR & VET/TRY Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds CAKE/GBP, DOGE/RUB, HOT/BRL & WRX/EUR Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds BNB/UAH, ONT/TRY, VET/EUR, VET/GBP & WIN/BRL Trading Pairs"
                        },
                        {
                            title:
                                "Binance Adds BTT/BRL, BTT/EUR, HOT/EUR & WIN/EUR Trading Pairs"
                        },
                        {
                            title: "Binance P2P Supports Mongolian Tughrik"
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
    methods: {
        visibilityChanged() {
            this.$store.commit("setMenuStatus", 0);
        }
    }
};
</script>
<style scoped>
.announcement-bg {
    width: 100%;
    height: 120%;
}
.announcement-bg__outer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 1;
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.announcement-bg__outer:before {
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
.animHead .announcement-bg__outer {
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
.announcement__items {
    margin-top: 100px;
}
.announcement_item {
    display: flex;
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-right: 250px;
}
.announcement_item:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 100px;
}
.announcement_item img {
    max-width: 90px;
    max-height: 90px;
}
.item_right {
    margin-left: 32px;
}
.announcement_item h4 {
    font-size: 20px;
    line-height: 30px;
}
.announcement_list {
    margin-top: 16px;
}
.announcement_list li {
    position: relative;
    font-size: 15px;
    line-height: 30px;
    padding-left: 21px;
    opacity: 0.7;
    text-decoration: underline;
}
.announcement_list li::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 13px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
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

    .announcement__items {
        margin-top: 70px;
    }
    .announcement_item {
        margin-bottom: 70px;
        padding-right: 100px;
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

    .announcement_item {
        margin-bottom: 70px;
        padding-right: 50px;
    }
    .announcement_item img {
        max-width: 70px;
        max-height: 70px;
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
    .announcement-bg__outer {
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
        font-size: 38px;
    }
    .announcement-bg {
        height: 100vh;
        object-fit: cover;
    }
    .main-container__description {
        padding: 0px;
    }

    .announcement__items {
        flex-direction: column;
        margin-top: 30px;
    }
    .announcement_item {
        width: 100%;
        padding-right: 0;
        margin-bottom: 50px;
        flex-direction: column;
    }
    .item_right {
        margin-left: 0;
        margin-top: 30px;
    }
}
</style>
