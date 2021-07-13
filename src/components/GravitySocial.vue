<template>
    <section class="container" data-aos="fade-up">
        <div class="games_section">
            <div class="games_head">
                <h2 class="games_ttl">Social</h2>
                <router-link to="#" class="games_link">Explore All</router-link>
            </div>
            <div class="games_container">
                <router-link
                    to="#"
                    class="game_item"
                    v-for="(game, index) in games.slice(0, 8)"
                    :key="index"
                >
                    <div class="img_box">
                        <img :src="game.img" alt="" class="img_absolute" />
                    </div>

                    <div class="game_ttl">
                        {{ game.title }}
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            games: [
                {
                    img: require("@/assets/img/gravity/image 59.jpg"),
                    title: "League of Kingdoms"
                },
                {
                    img: require("@/assets/img/gravity/image 54.jpg"),
                    title: "Gods Unchained"
                },
                {
                    img: require("@/assets/img/gravity/image 59.jpg"),
                    title: "Polkamon"
                },
                {
                    img: require("@/assets/img/gravity/image 57.png"),
                    title: "Crypto Skulls"
                },
                {
                    img: require("@/assets/img/gravity/image 56.jpg"),
                    title: "Crypto Skulls"
                },
                {
                    img: require("@/assets/img/gravity/image 55.jpg"),
                    title: "League of Kingdoms"
                },
                {
                    img: require("@/assets/img/gravity/image 58.jpg"),
                    title: "Gods Unchained"
                },
                {
                    img: require("@/assets/img/gravity/image 59.jpg"),
                    title: "Polkamon"
                }
            ]
        };
    },
    methods: {
        openSuccess() {
            this.$store.commit("setPageSuccess", true);
        }
    }
};
</script>

<style scoped>
.games_section {
    margin-top: 40px;
    max-width: 952px;
    width: 100%;
}

.games_container {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.games_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.games_ttl {
    font-size: 30px;
    line-height: 42px;
}
.games_link {
    padding: 7px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: 0.6s;
}
.games_link:hover {
    text-decoration-color: inherit;
}

.game_item {
    display: flex;
    align-items: center;
    width: calc(25% - 60px);
    margin-right: 80px;
    margin-bottom: 40px;
}
.game_item:nth-child(4n) {
    margin-right: 0;
}

.img_box {
    position: relative;
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    overflow: hidden;
    margin-right: 12px;
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
.game_ttl {
    font-size: 15px;
    line-height: 24px;
    padding-right: 15px;
}
.game_item:hover img {
    transform: scale(1.1);
}

@media (max-width: 1200px) {
    .game_item {
        width: calc(33.3% - 40px);
        margin-right: 60px;
    }
    .game_item:nth-child(4n) {
        margin-right: 60px;
    }
    .game_item:nth-child(3n) {
        margin-right: 0px;
    }
    .game_ttl {
        padding-right: 0px;
    }
}
@media (max-width: 1023px) {
    .games_section {
        margin-top: 70px;
    }
    .game_item {
        width: calc(50% - 40px);
        margin-right: 80px;
    }
    .game_item:nth-child(4n) {
        margin-right: 80px;
    }
    .game_item:nth-child(3n) {
        margin-right: 80px;
    }
    .game_item:nth-child(2n) {
        margin-right: 0px;
    }
}
@media (max-width: 620px) {
    .games_head {
        flex-direction: column;
        align-items: flex-start;
    }
    .games_link {
        margin-top: 10px;
        font-size: 12px;
    }
    .games_section {
        margin-top: 50px;
    }
    .game_item {
        width: 100%;
    }
    .game_item:nth-child(odd) {
        margin-right: 0px;
        margin-bottom: 30px;
    }
}
</style>
