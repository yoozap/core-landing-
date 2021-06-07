<template>
  <div>
    <div
      id="main"
      class="outer"
      :class="firstAnimation ? 'animHead' : ''"
      v-view="visibilityChanged"
    >
      <TopHead />
      <div class="voice-bg__outer">
        <img
          v-prlx="{ speed: 0.1 }"
          :src="require(`@/assets/img/voice-bg.png`)"
          alt=""
          class="voice-bg"
        />
      </div>
      <div class="container">
        <div class="main-container__description" data-aos="fade-up">
          <div class="left">
            <h1>
              <span>core</span>
              <span>Academy</span>
            </h1>
          </div>
          <div class="content_description">
            Your one-stop guide to all things crypto. Whether you're a rookie
            trying to understand mining or a veteran looking to develop a
            trading strategy, we've got you covered.
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
.voice-bg {
  width: 100%;
  height: 120%;
}
.voice-bg__outer {
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100vw;
  z-index: 1;
  opacity: 0;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.voice-bg__outer:before {
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
.animHead .voice-bg__outer {
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
  font-size: 110px;
  transform: translateY(10px);
  opacity: 0;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  margin-top: 215px;
}
.main-container__description h1 span {
  font-size: inherit;
  font-family: inherit;
}
.main-container__description h1 span:nth-child(1) {
  color: #ff7152;
  text-transform: uppercase;
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
  background: #00050f;
  z-index: 2;
}

.content_description {
  font-size: 20px;
  line-height: 30px;
  max-width: 640px;
  margin-top: 100px;
}

/*Ipad Pro 1024*/
@media (max-width: 1300px) {
  /* .main-container__description {
    padding-left: 25px;
  } */
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
  .content_description {
    margin-top: 70px;
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
  .voice-bg__outer {
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
  .voice-bg {
    height: 100vh;
    object-fit: cover;
  }
  .main-container__description {
    padding: 0px;
  }
  .content_description {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
