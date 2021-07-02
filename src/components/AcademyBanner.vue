<template>
    <div class="container">
        <div class="academy__banner">
            <img
                v-prlx="{ speed: 0.1 }"
                :src="require(`@/assets/img/academy-banner.jpg`)"
                alt="join-img"
                class="academy__banner-img"
            />
            <div class="academy__banner-inner">
                <div class="academy__banner-left">
                    <div class="academy__banner-title">
                        Get Published on <span>CORE</span>
                    </div>
                    <div class="academy__banner-description">
                        Join the Research Hub as an analyst, write research, and
                        get published on Messari
                    </div>
                </div>
                <div class="academy__banner-right">
                    <a href="#" class="academy__banner-btn">Apply Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.academy__banner {
    display: flex;
    min-height: 182px;
    width: 1070px;
    overflow: hidden;
    position: relative;
    margin-top: 100px;
}
.academy__banner-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 3;
    padding: 30px 64px;
}
.academy__banner-img {
    position: absolute;
    width: 100%;
    height: 130%;
    top: -15%;
    left: 0px;
    object-fit: cover;
    z-index: 1;
}
.academy__banner-left {
    padding-right: 30px;
}
.academy__banner-description {
    font-size: 15px;
    line-height: 25px;
    margin-top: 8px;
}
.academy__banner-title span {
    color: #ff7152;
    font-size: inherit;
}
.academy__banner-title {
    font-size: 30px;
    line-height: 42px;
}
.academy__banner-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    height: 52px;
    padding: 10px 30px;
    font-size: 16px;
    color: #fff;
    background: #ff7152;
}

@media (max-width: 1200px) {
    .academy__banner {
        max-width: 752px;
    }
    .academy__banner-inner {
        padding: 30px;
    }
}
@media (max-width: 1023px) {
    .academy__banner {
        margin-top: 70px;
    }
    .academy__banner-title {
        font-size: 22px;
        line-height: 30px;
    }
    .academy__banner-btn {
        min-width: unset;
        white-space: nowrap;
    }
}
@media (max-width: 767px) {
    .academy__banner-inner {
        flex-direction: column;
        align-items: flex-start;
    }
    .academy__banner-left {
        padding-right: 0;
    }
    .academy__banner-btn {
        margin-top: 30px;
    }
}
</style>
