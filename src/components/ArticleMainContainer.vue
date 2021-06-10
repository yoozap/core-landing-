<template>
  <div>
    <div
      id="main"
      class="outer"
      :class="firstAnimation ? 'animHead' : ''"
      v-view="visibilityChanged"
    >
      <TopHead />
      <div class="article-bg__outer">
        <img
          v-prlx="{ speed: 0.1 }"
          :src="require(`@/assets/img/voice-bg.png`)"
          alt=""
          class="article-bg"
        />
      </div>
      <div class="container">
        <div class="main-container__description" data-aos="fade-up">
          <div class="left">
            <h1>
              How to Cancel <br />
              or Replace a Pending Ethereum Transaction
            </h1>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="article_section">
        <div class="article_head_info" data-aos="fade-up">
          <div class="topics">
            <div class="topic">security</div>
            <div class="topic">wallet</div>
          </div>
          <div class="article_details">
            <div class="article_lvl">
              <div class="lvl_circle beginner"></div>
              intermediate
            </div>
            <div class="article_time">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M12.25 1.75H11.6667V0.583298C11.6667 0.261368 11.4053 0 11.0833 0H10.5C10.178 0 9.9167 0.261368 9.9167 0.583298V1.75H4.0833V0.583298C4.0833 0.261368 3.82204 0 3.5 0H2.9167C2.59467 0 2.3333 0.261368 2.3333 0.583298V1.75H1.75C0.785172 1.75 0 2.53517 0 3.5V12.25C0 13.2148 0.785172 14 1.75 14H12.25C13.2148 14 14 13.2148 14 12.25V3.5C14 2.53517 13.2148 1.75 12.25 1.75ZM12.8333 12.25C12.8333 12.5714 12.5714 12.8333 12.25 12.8333H1.75C1.4286 12.8333 1.1667 12.5714 1.1667 12.25V5.85669H12.8333V12.25Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="14" height="14" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              19 may 2021
            </div>
            <div class="article_minutes">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.14026 0 0 3.14026 0 7C0 10.8597 3.14026 14 7 14C10.8597 14 14 10.8597 14 7C14 3.14026 10.8597 0 7 0ZM8.23773 9.47503L6.125 7.36229V3.49999H7.875V6.63769L9.47503 8.23772L8.23773 9.47503Z"
                  fill="white"
                ></path>
              </svg>
              4 min
            </div>
          </div>
        </div>

        <div class="article_description text" data-aos="fade-up">
          Your one-stop guide to all things crypto. Whether you're a rookie
          trying to understand mining or a veteran looking to develop a trading
          strategy, we've got you covered.
        </div>

        <div class="img_box article_img" data-aos="fade-up">
          <img
            src="../assets/img/releases/release 2.jpg"
            alt=""
            class="img_absolute"
          />
        </div>

        <div class="article_description text" data-aos="fade-up">
          <p>
            If you've used the Ethereum network before, you've likely
            experienced a transaction that takes longer than usual to confirm.
            This happens because of the way the miners prioritize transactions —
            users who offer higher fees get priority. <br /><br />
            If your Ethereum transaction is stuck because the gas fees are low,
            you will need to wait until the fees drop and miners finally process
            your transaction. However, you also have the option to replace the
            pending transaction with a new one that has a higher gas price.
            Sounds complicated? It's easier than you might think.
          </p>
          <br /><br />
          <h2>introduction</h2>
          <br /><br />
          <p>
            First of all, keep in mind that you cannot replace, revert or cancel
            transactions that have already been confirmed. However, during
            periods of network congestion, some cryptocurrency transactions may
            get stuck. When the volume of transactions is too high, you could
            find yourself with a transaction pending for hours or even days.
            <br /><br />
            In this guide, we will show you how to speed up transactions using
            MetaMask or Trust Wallet. You could also use other crypto wallets
            that support the Ethereum blockchain, but the process might be
            slightly different.
          </p>
          <br /><br />

          <h2>Requirements</h2>
          <ul>
            <li>MetaMask or Trust Wallet installed.</li>
            <li>
              Private keys (seed phrase) to log in to your Ethereum wallet.
            </li>
            <li>Internet access.</li>
          </ul>
          <br /><br />
          <h2>How to speed up a transaction on MetaMask</h2>

          <ol>
            <li>
              Log in to your MetaMask wallet that has the pending transaction.
              If it's an external wallet, you need to import the address using
              the corresponding seed phrase or private key.
            </li>
            <li>
              Find the pending transaction under the [Activity] tab and click on
              [Speed Up].
            </li>
            <li>
              This process will allow you to broadcast your transaction again.
              Make sure to use a higher gas price by clicking on [Fast] and then
              [Save].
            </li>
            <li>
              If the previous step didn't work, you could also go to the
              [Advanced] tab to set the gas price manually. You can check the
              current gas prices and average confirmation time on Etherscan or
              EthGasStation.
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopHead from "@/components/TopHead.vue";
export default {
  name: "MainContainer",
  data() {
    return {
      firstAnimation: false
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
.article-bg {
  width: 100%;
  height: 120%;
}
.article-bg__outer {
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100vw;
  z-index: 1;
  opacity: 0;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.article-bg__outer:before {
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
.animHead .article-bg__outer {
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
  max-width: 952px;
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

.article_section {
  position: relative;
  margin-top: 42px;
  z-index: 9;
}
.article_head_info {
  display: flex;
  align-items: center;
}
.article_head_info .topics {
  display: flex;
}
.topics {
  margin-right: 14px;
}
.topic {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 4px 10px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 22px;
  background: #fff;
  color: #00050f;
  cursor: pointer;
  transition: 0.6s;
}
.article_details {
  display: flex;
}
.article_details * {
  font-size: 12px;
  text-transform: uppercase;
}
.article_lvl,
.article_time,
.article_minutes {
  display: flex;
  align-items: center;
}
.article_lvl,
.article_time {
  margin-right: 16px;
}
.lvl_circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #53704f;
  margin-right: 6px;
}
.article_time svg,
.article_minutes svg {
  margin-right: 6px;
}

.article_description {
  font-size: 20px;
  line-height: 30px;
  max-width: 750px;
  margin-top: 80px;
}
.img_box {
  position: relative;
  padding-top: 56.3%;
  margin-top: 60px;
}
.img_absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text p {
  font-size: 20px;
  line-height: 30px;
  opacity: 0.5;
}
.text h2 {
  font-size: 51px;
  line-height: 66px;
}
.article_description ul {
  margin-top: 32px;
}
.article_description ul li {
  position: relative;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;
  padding-left: 24px;
  counter-increment: counter;
  opacity: 0.5;
}
.article_description ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0500ff;
}

.article_description ol {
  padding-left: 0;
}
.article_description ol li {
  counter-increment: counter;
  margin-bottom: 32px;
  line-height: 24px;
}
.article_description ol li::before {
  content: counter(counter, decimal-leading-zero);
  display: block;
  font-size: 51px;
  line-height: 66px;
  color: #ff7152;
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
  /* .main-container__description {
    padding-left: 25px;
  } */
  .main-container__description h1 {
    font-size: 50px;
  }
  /* .main-container__description h3,
  .counter-container {
    margin-top: 70px;
  } */
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
  .article_description {
    margin-top: 60px;
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
  .article-bg__outer {
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
    /* margin-bottom: 50px; */
    text-align: left;
  }
  .article-bg {
    height: 100vh;
    object-fit: cover;
  }
  .main-container__description {
    padding: 0px;
  }
  .article_description {
    margin-top: 50px;
    font-size: 16px;
    line-height: 24px;
  }
  .text p,
  .article_description ul li {
    font-size: 15px;
    line-height: 24px;
  }
  .text h2,
  .article_description ol li::before {
    font-size: 30px;
    line-height: 40px;
  }
  .article_head_info {
    flex-direction: column;
    align-items: flex-start;
  }
  .article_details {
    margin-top: 20px;
  }
}
</style>
