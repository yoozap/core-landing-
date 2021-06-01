<template>
  <div
    class="video-container"
    v-if="$store.state.video"
    :class="animateVideo ? 'active' : ''"
  >
    <div class="video-container__close" @click="closeVideo">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.75 1.25L1.25 38.75"
          stroke="rgba(73,223,143,1)"
          stroke-width="4"
        />
        <path
          d="M1.25 1.25L38.75 38.75"
          stroke="rgba(73,223,143,1)"
          stroke-width="4"
        />
      </svg>
    </div>
    <VideoStream
      ref="videoRef"
      id="stream-player"
      controls
      autoplay
      src="a6556f211b0e2f7905c243b0f58e5eec"
    />
    <!--    <CloudflareVideoPlayer video-id="a6556f211b0e2f7905c243b0f58e5eec" :autoplay="true"/>-->
    <!--    <iframe-->
    <!--      src="https://iframe.videodelivery.net/a6556f211b0e2f7905c243b0f58e5eec"-->
    <!--      style="border: none;"-->
    <!--      height="720"-->
    <!--      width="1280"-->
    <!--      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"-->
    <!--      allowfullscreen="true"-->
    <!--      id="stream-player"-->
    <!--    ></iframe>-->
    <!--    <video loop class="video" ref="videoRef">-->
    <!--      <source src="https://watch.videodelivery.net/a6556f211b0e2f7905c243b0f58e5eec" type="video/mp4">-->
    <!--    </video>-->
    <!--    <img src="@/assets/img/video.jpg" alt="" class="cover" :class="button ? 'hide' : ''">-->
    <div
      class="play-video__container"
      :class="button ? 'hide' : ''"
      @click="playVideo"
      v-if="true"
    >
      <div class="play-video">
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { VideoStream } from "stream-vue";

export default {
  data() {
    return {
      button: false
    };
  },
  components: {
    VideoStream
  },
  methods: {
    closeVideo() {
      this.$store.commit("setVideo", false);
      this.$refs.videoRef.pause();
      this.button = false;
    },
    playVideo() {
      this.$refs.videoRef.play();
      // if (!this.button) {
      //   this.$refs.videoRef.play()
      //   this.button = true
      // } else {
      //   this.$refs.videoRef.pause()
      //   this.button = false
      // }
    }
  }
};
</script>
<style scoped>
<<<<<<< HEAD
.video-container__close {
  top: 30px;
  right: 30px;
  position: absolute;
  z-index: 20;
  cursor: pointer;
}
.video-container__close path {
  transition: 0.6s ease-in-out;
}
.video-container__close:hover path {
  stroke: #397ef4;
}
.play-video:hover {
  background: rgba(73, 223, 143, 1);
}
.play-video {
  height: 160px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s ease-in-out;
  background: rgba(57, 126, 244, 1);
  border-radius: 50%;
}
.play-video__container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s ease-in-out;
  cursor: pointer;
}
.play-video__container.hide,
.cover.hide {
  opacity: 0;
}
.cover {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: 0.6s ease-in-out;
}
.video-container {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9999999;
  /*display: none;*/
  background: #020b1d;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
}
.video-container.active {
  transform: translateY(0%);
  opacity: 1;
  pointer-events: all;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  outline: none;
}
/*Ipad Pro 1024*/
@media (max-width: 1365px) {
  .play-video {
    height: 100px;
    width: 100px;
  }
}
/*Mobile 320*/
@media (max-width: 767px) {
  .play-video {
    height: 60px;
    width: 60px;
=======
  .video-container__close{
    top: 30px;
    right: 30px;
    position: absolute;
    z-index: 20;
    cursor: pointer;
  }
  .video-container__close path{
    transition: .6s ease-in-out;
  }
  .video-container__close:hover path{
    stroke: #ff7152;
  }
  .play-video:hover{
    background: rgba(73,223,143,1);
  }
  .play-video{
    height: 160px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .6s ease-in-out;
    background: rgba(57,126,244,1);
    border-radius: 50%;
  }
  .play-video__container{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .6s ease-in-out;
    cursor: pointer;
  }
  .play-video__container.hide,.cover.hide{
    opacity: 0;
  }
  .cover{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    transition: .6s ease-in-out;
  }
  .video-container{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999999;
    /*display: none;*/
    background: #020B1D;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    opacity: 0;
    pointer-events: none;
  }
  .video-container.active{
    opacity: 1;
    pointer-events: all;
  }
  .video{
    width: 100%;
    height: 100%;
    object-fit: contain;
    outline: none;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .play-video{
      height: 100px;
      width: 100px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .play-video{
      height: 60px;
      width: 60px;
    }

>>>>>>> 5c31c32c4ef623c643befb5fc9a9645910a037f2
  }
}
</style>
