<template>
    <section class="container" data-aos="fade-up">
        <div class="authors_section">
            <div class="authors_head">
                <h2 class="authors_ttl font-51">Authors</h2>
                <div class="authors_link">Load more authors</div>
            </div>
            <div class="authors_container">
                <div
                    class="author_item"
                    v-for="(author, index) in authors.slice(0, 12)"
                    :key="index"
                >
                    <div class="img_box" v-if="author.img">
                        <img :src="author.img" alt="" class="img_absolute" />
                    </div>
                    <div class="img_box without-img" v-if="!author.img">
                        <img
                            :src="require('@/assets/img/releases/no-img.svg')"
                            alt=""
                        />
                    </div>
                    <div class="author_details">
                        <div class="author_name">{{ author.name }}</div>
                        <div class="reports_qty">
                            {{ author.report }} reports
                        </div>
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
            authors: [
                {
                    img: require("@/assets/img/releases/release 3.jpg"),
                    name: "Nick Garcia",
                    report: "140"
                },
                {
                    img: require("@/assets/img/releases/release 4.jpg"),
                    name: "Gustave Laurant",
                    report: "116"
                },
                {
                    img: require("@/assets/img/releases/release 1.jpg"),
                    name: "Alexandra Solovieva",
                    report: "97"
                },
                {
                    img: require("@/assets/img/releases/release 2.jpg"),
                    name: "Eric Turner",
                    report: "60"
                },
                {
                    img: require("@/assets/img/releases/release 1.jpg"),
                    name: "Eric Turner",
                    report: "60"
                },
                {
                    img: "",
                    name: "Alexandra Solovieva",
                    report: "160"
                },
                {
                    img: require("@/assets/img/releases/release 3.jpg"),
                    name: "Nick Garcia",
                    report: "140"
                },
                {
                    img: require("@/assets/img/releases/release 4.jpg"),
                    name: "Gustave Laurant",
                    report: "116"
                },
                {
                    img: require("@/assets/img/releases/release 1.jpg"),
                    name: "Alexandra Solovieva",
                    report: "97"
                },
                {
                    img: require("@/assets/img/releases/release 2.jpg"),
                    name: "Eric Turner",
                    report: "60"
                },
                {
                    img: require("@/assets/img/releases/release 1.jpg"),
                    name: "Eric Turner",
                    report: "60"
                },
                {
                    img: "",
                    name: "Alexandra Solovieva",
                    report: "160"
                }
            ]
        };
    }
};
</script>

<style scoped>
.authors_section {
    margin-top: 100px;
    max-width: 1072px;
    width: 100%;
}
.authors_container {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
}
.authors_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.authors_link {
    padding: 7px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: 0.6s;
    cursor: pointer;
}
.authors_link:hover {
    text-decoration-color: inherit;
}

.author_item {
    display: flex;
    align-items: center;
    width: calc(25% - 12px);
    background: rgba(255, 255, 255, 0.1);
    margin-right: 16px;
    margin-bottom: 16px;
    padding: 16px;
}
.author_item:nth-child(4n) {
    margin-right: 0;
}

.img_box {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}
.img_box.without-img {
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}
.img_absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
    border-radius: 50%;
}
.author_details {
    margin-left: 16px;
}
.author_name {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 2px;
}
.reports_qty {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.5;
}
@media (max-width: 1300px) {
    .author_item {
        width: calc(33.3% - 10.6px);
    }
    .author_item:nth-child(4n) {
        margin-right: 16px;
    }
    .author_item:nth-child(3n) {
        margin-right: 0px;
    }
}
@media (max-width: 1200px) {
    .authors_section {
        max-width: 752px;
    }
}
@media (max-width: 1023px) {
    .authors_section {
        margin-top: 70px;
    }
    .authors_container {
        margin-top: 30px;
    }
    .author_item {
        width: calc(50% - 8px);
        margin-right: 0;
    }
    .author_item:nth-child(4n) {
        margin-right: 0px;
    }
    .author_item:nth-child(odd) {
        margin-right: 16px;
    }
}
@media (max-width: 620px) {
    .authors_link {
        font-size: 12px;
    }
    .authors_section {
        margin-top: 50px;
    }
    .author_item {
        width: 100%;
    }
    .author_item:nth-child(odd) {
        margin-right: 0px;
    }
}
</style>
