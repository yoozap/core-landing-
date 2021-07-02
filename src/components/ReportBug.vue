<template>
    <section class="report__container container" data-aos="fade-up">
        <h2 class="report__ttl font-51">How to report a bug?</h2>
        <div class="report__description">
            <ul>
                <li>
                    Send your bug report <br />
                    to
                    <a href="mailto: guard@coremultichain.com"
                        >guard@coremultichain.com</a
                    >
                </li>
                <li>Include your CMCX UID</li>
                <li>Allow 2 business days for respond</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.report__container {
    display: flex;
    margin-top: 140px;
    margin-bottom: 100px;
}
.report__ttl {
    width: 54%;
    padding-right: 180px;
}
.report__description {
    width: 46%;
    padding-top: 32px;
}
.report__description li {
    margin-bottom: 8px;
}
.report__description li,
.report__description li a {
    font-size: 20px;
    line-height: 30px;
}
.report__description li a {
    position: relative;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.report__description li a::after {
    content: "";
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    height: 1px;
    background: #0500ff;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.report__description li a:hover {
    color: #ff7152;
}
.report__description li a:hover::after {
    transform: scale(0);
}
@media (max-width: 1300px) {
    .report__container {
        margin-top: 100px;
    }
    .report__ttl {
        padding-right: 130px;
    }
    .report__description {
        padding-top: 20px;
    }
}

@media (max-width: 1023px) {
    .report__container {
        margin-top: 70px;
    }
    .report__ttl {
        padding-right: 70px;
    }
    .report__description {
        padding-top: 10px;
    }
    .report__description li,
    .report__description li a {
        font-size: 15px;
        line-height: 24px;
    }
}

@media (max-width: 767px) {
    .report__container {
        flex-direction: column;
        margin-top: 50px;
        margin-bottom: 70px;
    }
    .report__ttl,
    .report__description {
        width: 100%;
    }
    .report__ttl {
        padding-right: 0;
    }
}
</style>
