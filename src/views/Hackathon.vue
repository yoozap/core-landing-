<template>
    <div class="body-container">
        <img :src="require('@/assets/img/hackathon-bg.png')" alt="bg image" class="bg-img">
        <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
            <TopHead/>
            <div class="hackathon">
                <h1 data-aos="fade-up" class="title">
                  <span>CORE</span>
                  <span>Hackathon</span>
                </h1>
                <div class="head" data-aos="fade-up">
                  <p class="teaser" data-aos="fade-up">
                    Global Virtual Hackathon, Startup Competition
                    and Accelerator Program to Spotlight the Next
                    Wave of Blockchain Entrepreneurs.
                  </p>
                  <button class="submit">
                    <span>Submit Now</span>
                  </button>
                </div>
                <time class="date" data-aos="fade-up">
                  <span>Aug 8 — Apr 7, 2021</span>
                  <span>11:45 PM</span>
                </time>

                <div class="highlights" data-aos="fade-up">
                  <h2 class="ttl">Highlights</h2>
                  <div class="list">
                    <div class="highlight" v-for="item in 4">
                      <div class="icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.6545 26.57C25.1153 33.6513 33.0891 39.4771 36.6641 41.8333V48.1446L22.4616 56.6667H57.6416L43.3307 48.08V41.8333C46.9057 39.4763 54.8795 33.6504 58.3403 26.5692C70.1403 25.3283 73.3307 11.0492 73.3307 3.33333C73.3307 2.44928 72.9795 1.60143 72.3544 0.976311C71.7293 0.35119 70.8815 0 69.9974 0L9.9974 0C9.11334 0 8.26549 0.35119 7.64037 0.976311C7.01525 1.60143 6.66406 2.44928 6.66406 3.33333C6.66406 11.0492 9.85448 25.3283 21.6545 26.57ZM59.9974 19.2467V6.66667H66.4066C65.9011 10.6588 64.4057 17.0704 59.9974 19.2467ZM19.9974 6.66667V19.2467C15.5886 17.0704 14.0932 10.6571 13.5882 6.66667H19.9974Z" fill="#FF7152"/>
                          <path d="M78.3281 56.6667C77.0025 56.6652 75.7315 56.138 74.7942 55.2006C73.8568 54.2632 73.3296 52.9923 73.3281 51.6667C73.3281 51.2246 73.1525 50.8007 72.84 50.4882C72.5274 50.1756 72.1035 50 71.6615 50C71.2194 50 70.7955 50.1756 70.4829 50.4882C70.1704 50.8007 69.9948 51.2246 69.9948 51.6667C69.9934 52.9923 69.4661 54.2632 68.5287 55.2006C67.5914 56.138 66.3204 56.6652 64.9948 56.6667C64.5528 56.6667 64.1288 56.8423 63.8163 57.1548C63.5037 57.4674 63.3281 57.8913 63.3281 58.3333C63.3281 58.7754 63.5037 59.1993 63.8163 59.5118C64.1288 59.8244 64.5528 60 64.9948 60C66.3204 60.0014 67.5914 60.5287 68.5287 61.466C69.4661 62.4034 69.9934 63.6743 69.9948 65C69.9948 65.442 70.1704 65.8659 70.4829 66.1785C70.7955 66.4911 71.2194 66.6667 71.6615 66.6667C72.1035 66.6667 72.5274 66.4911 72.84 66.1785C73.1525 65.8659 73.3281 65.442 73.3281 65C73.3296 63.6743 73.8568 62.4034 74.7942 61.466C75.7315 60.5287 77.0025 60.0014 78.3281 60C78.7701 60 79.1941 59.8244 79.5066 59.5118C79.8192 59.1993 79.9948 58.7754 79.9948 58.3333C79.9948 57.8913 79.8192 57.4674 79.5066 57.1548C79.1941 56.8423 78.7701 56.6667 78.3281 56.6667Z" fill="white"/>
                          <path d="M71.6615 26.2863C71.2194 26.2863 70.7955 26.4618 70.4829 26.7744C70.1704 27.087 69.9948 27.5109 69.9948 27.9529C69.9934 29.2786 69.4661 30.5495 68.5287 31.4869C67.5914 32.4242 66.3204 32.9515 64.9948 32.9529C64.5528 32.9529 64.1288 33.1285 63.8163 33.4411C63.5037 33.7536 63.3281 34.1776 63.3281 34.6196C63.3281 35.0616 63.5037 35.4855 63.8163 35.7981C64.1288 36.1107 64.5528 36.2863 64.9948 36.2863C66.3204 36.2877 67.5914 36.8149 68.5287 37.7523C69.4661 38.6897 69.9934 39.9606 69.9948 41.2863C69.9948 41.7283 70.1704 42.1522 70.4829 42.4648C70.7955 42.7773 71.2194 42.9529 71.6615 42.9529C72.1035 42.9529 72.5274 42.7773 72.84 42.4648C73.1525 42.1522 73.3281 41.7283 73.3281 41.2863C73.3296 39.9606 73.8568 38.6897 74.7942 37.7523C75.7315 36.8149 77.0025 36.2877 78.3281 36.2863C78.7701 36.2863 79.1941 36.1107 79.5066 35.7981C79.8192 35.4855 79.9948 35.0616 79.9948 34.6196C79.9948 34.1776 79.8192 33.7536 79.5066 33.4411C79.1941 33.1285 78.7701 32.9529 78.3281 32.9529C77.0025 32.9515 75.7315 32.4242 74.7942 31.4869C73.8568 30.5495 73.3296 29.2786 73.3281 27.9529C73.3281 27.5109 73.1525 27.087 72.84 26.7744C72.5274 26.4618 72.1035 26.2863 71.6615 26.2863Z" fill="white"/>
                          <path d="M23.3307 45C23.3307 44.5579 23.1551 44.134 22.8426 43.8214C22.53 43.5089 22.1061 43.3333 21.6641 43.3333C20.3384 43.3319 19.0675 42.8046 18.1301 41.8672C17.1927 40.9299 16.6655 39.6589 16.6641 38.3333C16.6641 37.8913 16.4885 37.4673 16.1759 37.1548C15.8633 36.8422 15.4394 36.6666 14.9974 36.6666C14.5554 36.6666 14.1314 36.8422 13.8189 37.1548C13.5063 37.4673 13.3307 37.8913 13.3307 38.3333C13.3293 39.6589 12.8021 40.9299 11.8647 41.8672C10.9273 42.8046 9.65637 43.3319 8.33073 43.3333C7.8887 43.3333 7.46478 43.5089 7.15222 43.8214C6.83966 44.134 6.66406 44.5579 6.66406 45C6.66406 45.442 6.83966 45.8659 7.15222 46.1785C7.46478 46.491 7.8887 46.6666 8.33073 46.6666C9.65637 46.6681 10.9273 47.1953 11.8647 48.1327C12.8021 49.07 13.3293 50.341 13.3307 51.6666C13.3307 52.1086 13.5063 52.5326 13.8189 52.8451C14.1314 53.1577 14.5554 53.3333 14.9974 53.3333C15.4394 53.3333 15.8633 53.1577 16.1759 52.8451C16.4885 52.5326 16.6641 52.1086 16.6641 51.6666C16.6655 50.341 17.1927 49.07 18.1301 48.1327C19.0675 47.1953 20.3384 46.6681 21.6641 46.6666C22.1061 46.6666 22.53 46.491 22.8426 46.1785C23.1551 45.8659 23.3307 45.442 23.3307 45Z" fill="white"/>
                          <path d="M20.0508 76.6667C20.0508 77.5507 20.402 78.3986 21.0271 79.0237C21.6522 79.6488 22.5001 80 23.3841 80H56.7174C57.6015 80 58.4493 79.6488 59.0745 79.0237C59.6996 78.3986 60.0508 77.5507 60.0508 76.6667V60H20.0508V76.6667Z" fill="#FF7152"/>
                        </svg>
                      </div>
                      <span>1,000+</span>
                      <span>participants</span>
                    </div>
                  </div>
                </div>

                <div class="event" data-aos="fade-up">
                  <h2 class="ttl">Kick-off Event</h2>
                  <div class="content">
                    <p class="text">
                      The Kick-off Event will be hosted on a virtual conferencing platform called Brella.io. Brella is a world leader in online events and offers unique attendee experiences like networking recommendations using Artificial Intelligence. The BCoE believes Brella will offer the best user experience to participants looking to build virtual teams and collaborate with mentors.
                    </p>
                    <ul>
                      <li>9 am — Welcome Remarks</li>
                      <li>9:15 am — Keynote Speaker: Jed McCaleb</li>
                      <li>10 am: Use Case Pitches presented by companies and U of A Faculty</li>
                      <li>11:30am: Tech Workshops Breakout – Ethereum (Beginner andIntermediate/ Advanced), R3</li>
                      <li>1:30pm: Tech Workshops Breakout – Stellar, Algorand</li>
                    </ul>
                  </div>
                </div>

                <MainSlider data-aos="fade-up"/>

                <IconsSlider data-aos="fade-up"/>

               <!--  <Faq :itemData="$store.state.faq"/> -->
               <div class="bottom">
                 <button class="submit">
                    <span>Submit Now</span>
                  </button>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopHead from '../components/TopHead'
    import MainSlider from '../components/sliders/MainSlider'
    import IconsSlider from '../components/sliders/IconsSlider'
    import Faq from '../components/Faq'
    export default {
        name: 'Faq',
        components: {
            TopHead,
            MainSlider,
            IconsSlider,
            Faq
        },
        data () {
            return {
                firstAnimation: false,
                speakersOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                    speed: 800,
                    navigation: {
                        nextEl: '.speakers-button-next',
                        prevEl: '.speakers-button-prev',
                    },
                }
            }
        },
        mounted () {
            setTimeout(() => {
                this.firstAnimation = true
            }, 100)
        },
        computed:{
            itemData(){
                return this.$store.state.faq;
            }
        },
        methods: {
            visibilityChanged () {
                this.$store.commit('setMenuStatus', 0)
            }
        }
    }
</script>
<style scoped>
    .blog{
        flex-direction: column;
        position: relative;
        width: 100%;
        padding-bottom: 100px;
    }
    .body-container{
        position: relative;
        padding-left: 210px;
    }
    .body-container > .bg-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 0.3;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,5,15,0.3) 30%);
    }
    .hackathon{
        overflow: hidden;
        width: 100%;
        padding-bottom: 100px;
    }
    .hackathon > .bottom{
      display: flex;
      justify-content: center;
      margin-top: 140px;
    }
    .title{
        font-size: 100px;
        line-height: 110px;
        margin-top: 210px;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }
    .title span:nth-child(1){
      font-size: 100px;
      line-height: 100px;
      color: #FF7152;
    }
    .title span:nth-child(2){
      font-size: 100px;
      line-height: 100px;
      color: #fff;
      padding-left: 130px;
    }

    .head{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 100px;
    }
    .teaser{
      width: 536px;
      max-width: 100%;
      padding-right: 50px;
      font-size: 20px;
      line-height: 30px;
      color: #fff;
    }
    .submit{
      flex: none;
      align-self: flex-start;
      min-width: 200px;
      padding: 15px 30px;
      display: flex;
      justify-content: center;
      background-color: #FF7152;
      border-radius: 4px;
      cursor: pointer;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .submit:hover{
      background-color: #0500FF;
    }
    .submit span{
      font-size: 18px;
      line-height: 28px;
      color:  #fff;
    }
    .head .submit{
      margin-top: 20px;
    }

    .date{
      display: flex;
      flex-direction: column;
      margin-top: 60px;
    }
    .date span{
      font-size: 30px;
      line-height: 42px;
      color:  rgba(255, 255, 255, 0.7);
      margin-top: 8px;
    }
    .date span:first-child{
      margin-top: 0;
    }

    .highlights{
      margin-top: 140px;
      width: 100%;
      max-width: 845px;
    }
    .highlights .ttl{
      font-size: 51px;
      line-height: 66px;
      color: #fff;
    }
    .highlights .list{
      display: flex;
      flex-wrap: wrap;
    }
    .highlight{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 125px;
      margin-right: 115px;
      margin-top: 60px;
    }
    .highlight:nth-child(4n){
      margin-right: 0;
    }
    .highlight svg{
      display: block;
      max-width: 100%;
      height: auto;
    }
    .highlight .icon{
      margin-bottom: 16px;
    }
    .highlight span{
      font-size: 20px;
      line-height: 30px;
      color: #fff;
    }

    .event{
      margin-top: 140px;
      display: flex;
      align-items: flex-start;
    }
    .event .ttl{
      font-size: 51px;
      line-height: 66px;
      color: #fff;
      padding-right: 55px;
      max-width: 956px;
    }
    .event .content{
      flex: none;
      width: 100%;
      max-width: 416px;
      padding-top: 34px;
    }
    .event .content p{
      font-size: 15px;
      line-height: 24px;
      color:  rgba(255, 255, 255, 0.7);
    }
    .event .content ul{
      position: relative;
      margin-top: 34px;
    }
    .event .content li {
      position: relative;
      font-size: 15px;
      line-height: 24px;
      color: rgba(255,255,255,.5);
      padding-left: 25px;
      margin-bottom: 8px;
    }
    .event .content li:after {
      position: absolute;
      top: 8px;
      left: 0px;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: #0500FF;
      content: '';
    }



    @media(max-width: 1900px){
    }
    @media(max-width: 1599px){
    }
    @media(max-width: 1300px){
      .title span:nth-child(2),
      .title span:nth-child(1){
        font-size: 50px;
        line-height: 60px;
      }
      .title span:nth-child(2){
        padding-left: 65px;
      }
      .highlight{
        margin-right: 60px;
      }
      .highlights,
      .event{
        margin-top: 100px
      }
      .highlights .ttl,
      .event .ttl{
        font-size: 38px;
        line-height: 48px;
      }
    }

    /*Ipad 768*/
    @media (max-width: 1023px){
        .body-container{
            padding-left: 180px;
        }
        .highlights .ttl,
        .event .ttl{
          font-size: 28px;
          line-height: 48px;
        }
        .highlight{
          width: 102px;
          margin-right: 30px;
        }
        .highlight span{
          font-size: 16px;
          line-height: 22px;
        }
        .event{
          flex-direction: column;
        }
        .event .ttl{
          padding-right: 0px;
        }
    }
    /*Mobile 320*/
    @media (max-width: 767px){
        .body-container{
            padding-left: 0px;
        }
        .title span:nth-child(2),
        .title span:nth-child(1){
          font-size: 34px;
          line-height: 45px;
        }
        .title span:nth-child(2){
          padding-left: 30px;
        }
        .head{
          flex-direction: column;
        }
        .head p{
          padding-right: 0px;
        }
        .head .submit{
          margin-top: 30px
        }
        .date span{
          font-size: 21px;
          line-height: 32px;
        }
        .highlights,
        .event{
          margin-top: 80px;
        }
    }
</style>
