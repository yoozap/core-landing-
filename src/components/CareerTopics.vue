<template>
    <section class="container" data-aos="fade-up">
        <div class="topics_section">
            <div class="topics_head">
                <h2 class="topics-ttl font-51">Choose Your Team</h2>
                <p class="topics_desc">
                    Find a team that inspires you. We want to make sure it's the
                    place you can make an impact and invest your talents.
                </p>
            </div>
            <div class="topics_container">
                <div
                    class="topic"
                    v-for="(topic, index) in topics"
                    :key="index"
                >
                    {{ topic.name }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            topics: [
                {
                    name: "Business Development"
                },
                {
                    name: "Communications"
                },
                {
                    name: "Customer Support"
                },
                {
                    name: "Data Analytics & Research"
                },
                {
                    name: "Editorial & Video"
                },
                {
                    name: "Engineering"
                },
                {
                    name: "Product & Design"
                },
                {
                    name: "Operations"
                },
                {
                    name: "Security"
                },
                {
                    name: "HR"
                }
            ]
        };
    }
};
</script>

<style scoped>
.topics_section {
    margin-top: 140px;
}
.topics_container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 64px;
    max-width: 760px;
}
.topics_desc {
    max-width: 640px;
    margin-top: 32px;
    line-height: 24px;
    opacity: 0.5;
}
.topic {
    position: relative;
    margin-right: 60px;
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.topic::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: 100%;
    left: 0;
    background: #0500ff;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.topic:hover {
    color: #ff7152;
}
.topic:hover::after {
    transform: scale(0);
}
.topic.active {
    color: #ff7152;
}

@media (max-width: 1300px) {
    .topics_section {
        margin-top: 100px;
    }
}

@media (max-width: 1023px) {
    .topics_section {
        margin-top: 70px;
    }
    .topics_container {
        padding-right: 50px;
        margin-top: 50px;
    }
    .topic {
        font-size: 15px;
        line-height: 24px;
        margin-right: 50px;
        margin-bottom: 20px;
    }
}

@media (max-width: 767px) {
    .topics_container {
        padding-right: 0px;
    }
    .topic {
        margin-right: 30px;
    }
}
</style>
