<template>
  <div>
    <div
      id="main"
      class="outer"
      :class="firstAnimation ? 'animHead' : ''"
      v-view="visibilityChanged"
    >
      <TopHead />
      <div class="support-bg__outer">
        <img
          v-prlx="{ speed: 0.1 }"
          :src="require(`@/assets/img/support-bg.png`)"
          alt=""
          class="support-bg"
        />
      </div>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>
              <span>Support</span>
              <span>Center</span>
            </h1>
          </div>

          <div class="support__items" data-aos="fade-up">
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/megaphone.svg" alt="" />
              <a href="#"
                >Announcements
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>CORE latest official announcements and notices.</p>
            </div>
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/coins.svg" alt="" />
              <a href="#"
                >CMCX Token
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>The Bridge Between Crypto and Global Finance.</p>
            </div>
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/academy.svg" alt="" />
              <a href="#"
                >Academy
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>
                Get a deeper understanding of the crypto industry and market.
              </p>
            </div>
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/faq.svg" alt="" />
              <a href="#"
                >FAQ
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>Any issues? Find answers to commonly asked questions.</p>
            </div>
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/submit.svg" alt="" />
              <a href="#"
                >Submit a request
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>
                Can't find the solution to your problem? Submit a request to
                support team.
              </p>
            </div>
            <div class="support_item" data-aos="fade-up">
              <img src="../assets/img/support/api.svg" alt="" />
              <a href="#"
                >API Documentation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <p>
                All document you need when connecting to AAX by API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.support-bg {
  width: 100%;
  height: 120%;
}
.support-bg__outer {
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100vw;
  z-index: 1;
  opacity: 0;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.support-bg__outer:before {
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
.animHead .support-bg__outer {
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
.main-container__description h1 span {
  font-size: inherit;
  font-family: inherit;
}
.main-container__description h1 span:nth-child(2) {
  padding-left: 122px;
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
  width: 50%;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: #00050f;
  z-index: 2;
}
.support__items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
}
.support_item {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 180px;
  margin-bottom: 100px;
}
.support_item img {
  max-width: 120px;
  max-height: 120px;
}
.support_item a {
  position: relative;
  font-size: 20px;
  line-height: 30px;
  margin-top: 48px;
  width: max-content;
  transition: 0.6s;
}
.support_item a svg {
  transform: translateY(3px);
}
.support_item a::after {
  content: "";
  position: absolute;
  width: calc(100% - 21px);
  height: 1px;
  top: 100%;
  left: 0;
  background: #0500ff;
}
.support_item a:hover {
  color: #0500ff;
}
.support_item p {
  opacity: 0.7;
  line-height: 30px;
  margin-top: 16px;
}
/*Laptop 1440*/
@media (max-width: 1900px) {
  #main {
    min-height: 800px;
  }
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
  #main {
    min-height: 640px;
  }
  .main-container__description {
    padding-left: 25px;
  }
  .main-container__description h1 {
    font-size: 50px;
  }
  .main-container__description h1 span:nth-child(2) {
    padding-left: 63px;
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
  /* .counter-container {
    max-width: 500px;
  } */
}
/*Mobile 320*/
@media (max-width: 767px) {
  .protocol__link-main-svg {
    margin-right: 25px;
  }
  .protocol__link-txt {
    font-size: 10px;
  }
  .support-bg__outer {
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
    margin-bottom: 50px;
    text-align: left;
  }
  .support-bg {
    height: 100vh;
    object-fit: cover;
  }
  .main-container__description {
    padding: 0px;
  }
  #main {
    min-height: 600px;
    height: 100vh;
  }
}
</style>
