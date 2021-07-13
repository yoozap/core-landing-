<template>
    <div class="career__values-outer">
        <div class="container">
            <div class="career__items" data-aos="fade-up">
                <div
                    class="career_item"
                    data-aos="fade-up"
                    v-for="(value, index) in values"
                    :key="index"
                >
                    <img :src="value.img" alt="" />
                    <div class="item_ttl">{{ value.title }}</div>
<!--                    <p>{{ value.desc }}</p>-->
                </div>
            </div>
        </div>

        <div class="career-bg__outer">
            <img
                v-prlx="{ speed: 0.1 }"
                :src="require(`@/assets/img/career-bg-2.png`)"
                alt=""
                class="career-bg"
            />
        </div>

        <div class="container" v-if="false">
            <div class="counter-container" data-aos="fade-up">
                <div class="counter-item">
                    <div class="counter-num font-51">50+</div>
                    <div class="counter-ttl">Nationalities</div>
                </div>
                <div class="counter-item">
                    <div class="counter-num font-51">1300+</div>
                    <div class="counter-ttl">Employees</div>
                </div>
                <div class="counter-item">
                    <div class="counter-num font-51">20+</div>
                    <div class="counter-ttl">Locations</div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" class="container career-qualities">
            <h2 class="font-51">Qualities of a Hypercube Team:</h2>
            <div class="career-qualities__text">
                Communication while working remotely is as vital as oxygen. Continuous communication ensures project
                goals our met and teams remain on track. Weekly meetings are held to discuss updates and monitor performance to keep our teams connected and moving forward as one global unit.
            </div>
            <div class="career-qualities__subttl">
                Team Players
            </div>
            <div class="career-qualities__text">
                From developers to the leadership team, all CORE team members share the CORE Values and the common goal of benefiting mankind through our technology. Our team is a unit that builds together, shares
                ideas, and helps where needed. CORE believes in knowing the person behind the avatar. Whether it involves travelling, a phone call, or an online meeting, we don!t want faceless players on our team.
            </div>
            <div class="career-qualities__subttl">
                Strong Team Member Relationships
            </div>
            <div class="career-qualities__text">
                A strong team leads to accelerated performance and efficiency. CORE instils a sense of unity by building
                strong working relationships between remote teams and every team member. Team members need dynamic agility as needs will evolve requiring a step beyond comfort zones. CORE equips all team members
                with the skills and experience needed to fill any organisation role providing intense and fast paced skills
                acquisition in this rapidly growing blockchain industry
            </div>
            <div class="career-qualities__subttl">
                Always Learning
            </div>
            <div class="career-qualities__text">
                Joining the CORE team will result in dramatic development on both a personal and professional level.
                CORE believes in building an empowered team that will stay for the long term. We work together and
                learn from each other's unique experience and knowledge base.
             </div>
        </div>
        <div data-aos="fade-up" class="container career-qualities">
            <h2 class="font-51">Recruitment Process:</h2>
            <div class="career-qualities__subttl">
                Short Skills Test
            </div>
            <div class="career-qualities__text">
                Resumes and certificates are nice, but we prefer to see you prove your skills. The skills test involves a
                short 15-20 minute test. Validating your skills provides almost immediate feedback! Upon receiving successful feedback, you will be shortlisted for the next step in the recruitment process.
            </div>
            <div class="career-qualities__subttl">
                Take-Home Task
            </div>
            <div class="career-qualities__text">
                Once shortlisted, the next step is to complete a take-home assignment. This will either be a coding task
                or an assignment that demonstrates the skills needed for your specific role. This process also involves an
                interview to assess your experience and expectations.
            </div>
            <div class="career-qualities__subttl">
                Test Week and Leadership Interview
            </div>
            <div class="career-qualities__text">
                If you've smashed the assignment and interview, the next step is 3-5 days of paid work to see if synergy
                exists between you and the other team members.
                If all goes well, we!ll have a second interview to discuss any questions before officially incorporating you
                into our team.
                The recruitment process differs depending on the position. The common goal for each candidate is to
                ensure you have the necessary remote working and role-specific skills for your position.
            </div>
        </div>
        <div data-aos="fade-up" class="container career-qualities">
            <h2 class="font-51">Current Openings</h2>
            <div class="career-qualities__openings">
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Technology:</div>
                    <div class="career-qualities__opening-txt">Planning</div>
                    <div class="career-qualities__opening-txt">Research</div>
                    <div class="career-qualities__opening-txt">Development</div>
                    <div class="career-qualities__opening-txt">Design & User Experience</div>
                    <div class="career-qualities__opening-txt">Testing & Quality Assurance</div>
                    <div class="career-qualities__opening-txt">DevOps</div>
                    <div class="career-qualities__opening-txt">Security</div>
                </div>
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Marketing:</div>
                    <div class="career-qualities__opening-txt">Editorial</div>
                    <div class="career-qualities__opening-txt">Media & Productions</div>
                    <div class="career-qualities__opening-txt">Social Media</div>
                    <div class="career-qualities__opening-txt">PR</div>
                    <div class="career-qualities__opening-txt">Community</div>
                </div>
            </div>
            <div class="career-qualities__openings">
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Business Development and Partnerships:</div>
                    <div class="career-qualities__opening-txt">Market Research & Strategy</div>
                    <div class="career-qualities__opening-txt">Reporting</div>
                    <div class="career-qualities__opening-txt">Events</div>
                </div>
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Sales & Support:</div>
                    <div class="career-qualities__opening-txt">Direct Sales</div>
                    <div class="career-qualities__opening-txt">Channel Sales</div>
                    <div class="career-qualities__opening-txt">Customer Support</div>
                </div>
            </div>
            <div class="career-qualities__openings">
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Operations:</div>
                    <div class="career-qualities__opening-txt">Admin & Secretarial</div>
                </div>
                <div class="career-qualities__opening">
                    <div class="career-qualities__opening-ttl">Human Resources: Recruitment - Training: - Payroll
                        Finance</div>
                    <div class="career-qualities__opening-txt">Legal</div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" class="container career-qualities">
            <h2 class="font-51">Current Openings</h2>
            <ul>
                <li>An offer you can!t refuse</li>
                <li>Freedom to choose when and where you work</li>
                <li>24 days of paid time off a year, plus local holidays</li>
                <li>Between 2 and 8 in-person meetups per year for team-building (expenses covered)</li>
                <li>Laptop and a €2,000 budget to set up your home office</li>
                <li>Reimbursement for co-working space membership or internet service at home</li>
                <li>Opportunities to attend trainings, workshops, and conferences</li>
                <li>Monthly reimbursement for gym membership, massage, and other wellness services</li>
                <li>Support for buying a phone, eyeglasses, or tools you need for doing your best work</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            values: [
                {
                    img: require("@/assets/img/career/1.svg"),
                    title: "Destroy Boundaries",
                    desc:
                        "We protect our users by putting our users' needs first and delivering quality service."
                },
                {
                    img: require("@/assets/img/career/2.svg"),
                    title: "Quality Performance",
                    desc:
                        "We communicate openly. We work as a team towards shared goals to build the ecosystem together."
                },
                {
                    img: require("@/assets/img/career/3.svg"),
                    title: "Original Output",
                    desc:
                        "We are results driven. We get things done. We are passionate and work hard. When we fail, we learn fast, and pick ourselves up."
                },
                {
                    img: require("@/assets/img/career/4.svg"),
                    title: "Unified Team",
                    desc:
                        "We execute responsibly and autonomously. We empower those around us. Our team is diverse and we challenge the status quo."
                },
                {
                    img: require("@/assets/img/career/5.svg"),
                    title: "Community Driven",
                    desc:
                        "We are accountable for our actions. When we make mistakes, we fix them. We always act ethically. We never punch down."
                }
            ]
        };
    }
};
</script>

<style scoped>
    .career-qualities li::after{
        height: 8px;
        width: 8px;
        background: rgba(5, 0, 255, 1);
        border-radius: 50%;
        position: absolute;
        left: 0px;
        content: '';
        top: 5px;
    }
    .career-qualities li{
        position: relative;
        color: rgba(255, 255, 255, .5);
        margin-bottom: 8px;
        padding-left: 24px;
    }
    .career-qualities__opening-txt::after{
        height: 8px;
        width: 8px;
        background: #7F8287;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        content: '';
        top: 5px;
    }
    .career-qualities__opening-txt{
        margin-bottom: 8px;
        padding-left: 24px;
        position: relative;
        color: rgba(255, 255, 255, .5);
    }
    .career-qualities__opening-ttl{
        color: rgba(255, 113, 82, 1);
        margin-bottom: 10px;
    }
    .career-qualities__opening{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
    .career-qualities__opening:first-child{
        width: 65%;
    }
    .career-qualities__opening:last-child{
        width: 35%;
    }
    .career-qualities__openings{
        display: flex;
    }
    .career-qualities h2{
        margin-bottom: 30px;
    }
    .career-qualities__subttl{
        font-size: 30px;
        line-height: 40px;
        color: rgba(255, 113, 82, 1);
        margin-bottom: 15px;
    }
    .career-qualities__text{
        font-size: 15px;
        line-height: 24px;
        opacity: .5;
        margin-bottom: 50px;
    }
    .career-qualities{
        display: flex;
        flex-direction: column;
        padding-right: 350px;
        padding-top: 100px;
        padding-bottom: 100px;
        border-top: 1px solid rgba(255, 255, 255, .05);
    }
.career__values-outer {
    position: relative;
}
.career-bg {
    width: 100%;
    height: 120%;
}
.career-bg__outer {
    overflow: hidden;
    position: absolute;
    top: 0%;
    right: 0px;
    width: 100vw;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.career-bg__outer:before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    z-index: 2;
    height: 25%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.career__items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
}
.career_item {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-right: 180px;
    margin-bottom: 100px;
}
.career_item img {
    max-width: 120px;
    max-height: 120px;
}
.career_item .item_ttl {
    position: relative;
    font-size: 20px;
    line-height: 30px;
    margin-top: 48px;
    width: max-content;
}
.career_item p {
    opacity: 0.7;
    font-size: 15px;
    line-height: 30px;
    margin-top: 16px;
}
.counter-container {
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
    margin-top: 40px;
}
.counter-num {
    color: #ff7152;
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
    .career-qualities__opening:first-child {
        width: 50%;
    }
    .career-qualities__opening:last-child {
        width: 50%;
    }
    .career-qualities{
        padding-right: 30px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .career_item {
        padding-right: 100px;
        margin-bottom: 70px;
    }
    .career_item img {
        max-width: 100px;
        max-height: 100px;
    }
    .career_item .item_ttl {
        margin-top: 30px;
    }
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .career_item {
        padding-right: 30px;
        margin-bottom: 70px;
    }
    .career_item img {
        max-width: 70px;
        max-height: 70px;
    }
    .counter-container {
        max-width: 500px;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .career__items{
        width: 100%;
    }
    .career-qualities__openings{
        flex-direction: column;
    }
    .career-qualities__opening:first-child {
        width: 100%;
    }
    .career-qualities__opening:last-child {
        width: 100%;
    }
    .career__items {
        flex-direction: column;
        margin-top: 70px;
    }
    .career_item {
        width: 100%;
        align-items: center;
        padding-right: 0px;
    }
    .career_item p {
        text-align: left;
    }
    .counter-num {
        font-size: 22px;
    }
}
</style>
