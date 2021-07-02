<template>
    <section class="container">
        <div class="career__benefits-section">
            <div class="benefits_ttl font-51">Why Work Here</div>
            <div class="career__benefits-container">
                <div
                    class="career__benefit-col"
                    v-for="(column, index) in benefits"
                    :key="index"
                >
                    <div class="col_img">
                        <img :src="column.img" alt="" />
                    </div>
                    <ul class="benefits_list">
                        <li
                            class="benefits__list-item"
                            v-for="(item, index) in column.list"
                            :key="index"
                        >
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            benefits: [
                {
                    img: require("@/assets/img/career/love 1.svg"),
                    list: [
                        {
                            name: "Competitive salary"
                        },
                        {
                            name: "Option to be paid in crypto"
                        },
                        {
                            name: "Health Insurance"
                        },
                        {
                            name: "Flexible working hours"
                        }
                    ]
                },
                {
                    img: require("@/assets/img/career/Star 1.svg"),
                    list: [
                        {
                            name: "Remote work for many roles"
                        },
                        {
                            name: "Company sponsored holidays"
                        },
                        {
                            name: "Team building activities"
                        },
                        {
                            name: "And other various perks & benefits"
                        }
                    ]
                },

                {
                    img: require("@/assets/img/career/learn 1.svg"),
                    list: [
                        {
                            name: "Learning and development programs"
                        },
                        {
                            name: "Free language classes"
                        },
                        {
                            name: "Relocation support"
                        },
                        {
                            name: "International transfers mid-career"
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.career__benefits-section {
    width: 100%;
    padding-top: 100px;
    margin-top: 100px;
    max-width: 960px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.career__benefits-container {
    display: flex;
    margin-top: 48px;
    width: 100%;
}
.career__benefit-col:first-child {
    width: 30.77%;
}
.career__benefit-col:nth-child(2) {
    width: 35.72%;
}
.career__benefit-col:nth-child(3) {
    width: 33.51%;
}
.col_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba(255, 113, 82, 0.1);
    border-radius: 50%;
    margin-bottom: 16px;
}
.col_img img {
    max-width: 25px;
    max-height: 25px;
}
.benefits_list {
    padding-right: 20px;
}
.benefits__list-item {
    position: relative;
    line-height: 30px;
    opacity: 0.7;
    padding-left: 21px;
}
.benefits__list-item::after {
    content: "";
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    left: 6px;
    top: 13px;
    border-radius: 50%;
}
@media (max-width: 1023px) {
    .career__benefits-section {
        padding-top: 70px;
        margin-top: 70px;
    }
    .benefits__list-item {
        font-size: 12px;
        line-height: 25px;
    }
}
@media (max-width: 767px) {
     .career__benefits-section {
        padding-top: 50px;
    }
    .career__benefits-container {
        flex-direction: column;
    }
    .career__benefit-col:first-child,
    .career__benefit-col:nth-child(2),
    .career__benefit-col:nth-child(3) {
        width: 100%;
    }
    .career__benefit-col:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>
