<template>
    <section class="container">
        <div class="hire__steps-section">
            <div class="hire__steps-head" data-aos="fade-up">
                <h2 class="font-51">How We Hire</h2>
                <p>On average 2~4 week interview process with 4 interviews.</p>
            </div>

            <div class="hire__steps" data-aos="fade-up">
                <div class="hire__step">
                    <div class="hire__steps-ttl font-51">01</div>
                    <div class="hire__steps-desc">
                        Application Review
                    </div>
                </div>
                <div class="hire__step">
                    <div class="hire__steps-ttl font-51">02</div>
                    <div class="hire__steps-desc">Interviews</div>
                </div>
                <div class="hire__step">
                    <div class="hire__steps-ttl font-51">03</div>
                    <div class="hire__steps-desc">Offer</div>
                </div>
                <div class="hire__step">
                    <div class="hire__steps-ttl font-51">04</div>
                    <div class="hire__steps-desc">Onboarding</div>
                </div>
            </div>

            <div class="hire__steps-line"></div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.hire__steps-section {
    width: 100%;
    max-width: 960px;
    padding-top: 100px;
    margin-top: 100px;
    margin-bottom: 102px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.career__benefits-container {
    display: flex;
    margin-top: 48px;
    width: 100%;
}
.hire__steps-head h2 {
    margin-bottom: 32px;
}
.hire__steps-head p {
    opacity: 0.7;
    line-height: 24px;
}
.hire__steps-ttl {
    color: #ff7152;
}
.hire__steps {
    display: flex;
    margin-top: 48px;
}
.hire__step {
    position: relative;
    width: 25%;
    padding-right: 10px;
}
.hire__step::after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #0500ff;
    position: absolute;
    bottom: -41px;
    left: 0;
    z-index: 9;
}
.hire__steps-line {
    position: relative;
    width: 100%;
    height: 2px;
    background: linear-gradient(
        90deg,
        rgba(155, 153, 255, 0) 0%,
        rgba(155, 153, 255, 1) 100%
    );
    margin-top: 32px;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
    -moz-box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
    box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
}
@media (max-width: 1023px) {
    .hire__steps-section {
        padding-top: 70px;
        margin-top: 70px;
    }
    .hire__steps-desc {
        font-size: 12px;
        line-height: 20px;
    }
    .hire__step::after {
        width: 12px;
        height: 12px;
        bottom: -39px;
    }
}
@media (max-width: 767px) {
    .hire__steps-section {
        padding-top: 50px;
        margin-top: 50px;
    }
}
@media (max-width: 374px) {

    .hire__steps-desc {
        font-size: 10px;
        line-height: 16px;
    }
}
</style>
