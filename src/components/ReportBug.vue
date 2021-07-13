<template>
    <section class="container">
        <div class="eligibility__container">
            <div class="eligibility_head" data-aos="fade-up">
                <h2 class="font-51">Report a Bug?</h2>
                <div class="eligibility_description">
                    Submission quality largely determines the reward. Including an explanation of how the bug was
                    discovered, how it can be reproduced, and other critical details increases the quality of the
                    submission. Disclosure to any third parties disqualifies bug bounty eligibility. The ideal report includes the following:
                </div>
            </div>
            <ol class="eligibility_list" data-aos="fade-up">
                <li class="eligibility__list-item">
                    Description of the issue
                </li>
                <li class="eligibility__list-item">
                    Description of the issue’s potential security impact
                </li>
                <li class="eligibility__list-item">The affected resource. e.g. URL, GitHub code snippet, transaction</li>
                <li class="eligibility__list-item">Ideally a proof-of-concept that demonstrates the issue</li>
                <li class="eligibility__list-item">
                    Email submission to <a href="mailto:guard@coremultichain.com">guard@coremultichain.com</a> and include your CMCX UID
                </li>
                <li class="eligibility__list-item">Provide adequate time for CORE to respond before disclosing Bug to others</li>
            </ol>
        </div>
    </section>
</template>

<style scoped>
    .eligibility__list-item a{
        font-size: inherit;
        border-bottom: 1px solid #0500FF;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .eligibility__list-item a:hover{
        border-bottom: 1px solid rgba(0,0,0,0);
        color: #ff7152;
    }
    .eligibility-subtitle{
        font-size: 30px;
        line-height: 42px;
        margin-bottom: 40px;
    }
    .eligibility__container {
        margin-top: 140px;
        padding-right: 120px;
        width: 100%;
    }
    .eligibility_head {
        display: flex;
    }
    .eligibility_head h2 {
        width: 54%;
    }
    .eligibility_description {
        width: 46%;
        line-height: 24px;
        max-width: 416px;
        padding-top: 33px;
        opacity: 0.5;
    }
    .eligibility_list {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-top: 100px;
        margin-bottom: 200px;
    }
    .eligibility_list li {
        position: relative;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 40px;
        padding-left: 26px;
        counter-increment: counter;
    }
    .eligibility_list li::before {
        content: counter(counter) ".";
        position: absolute;
        left: 0;
        color: #ff7152;
    }
    @media (max-width: 1300px) {
        .eligibility__container {
            margin-top: 100px;
            padding-right: 80px;
        }
        .eligibility_description {
            padding-top: 0;
        }
        .eligibility_list {
            margin-top: 70px;
        }
        .eligibility_list li:nth-child(odd) {
            padding-right: 70px;
        }
    }
    @media (max-width: 1023px) {
        .eligibility__container {
            margin-top: 70px;
            padding-right: 0;
        }
        .eligibility_list {
            margin-top: 50px;
        }
        .eligibility_list li {
            font-size: 15px;
            line-height: 24px;
            margin-bottom: 25px;
        }
        .eligibility_list li:nth-child(odd) {
            padding-right: 40px;
        }
    }

    @media (max-width: 767px) {
        .eligibility_list{
            margin-bottom: 50px;
        }
        .eligibility_head {
            flex-direction: column;
        }
        .eligibility_head h2,
        .eligibility_description,
        .eligibility_list li:nth-child(even),
        .eligibility_list li:nth-child(odd) {
            width: 100%;
        }
        .eligibility_head h2 {
            margin-bottom: 20px;
        }
        .eligibility_list {
            margin-top: 30px;
        }
        .eligibility_list li:nth-child(odd) {
            padding-right: 0;
        }
        .eligibility_list li,
        .eligibility_list li:nth-last-child(-n + 2) {
            margin-bottom: 20px;
        }
        .eligibility_list li:last-child {
            margin-bottom: 0;
        }
    }
</style>
