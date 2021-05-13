<template>
  <div :class="firstAnimation ? 'ready' : ''" class="start-container">
    <div class="start-container__inner">
      <div class="left">
        <a href="##" class="logo">
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path class="nMob" d="M33.32 124C29.32 124 26.2633 122.973 24.15 120.92C22.05 118.87 21 116 21 112.36C21 108.54 22.0267 105.583 24.08 103.49C26.1333 101.397 29.2 100.353 33.28 100.36C34.5408 100.344 35.8001 100.451 37.04 100.68C38.1221 100.888 39.1881 101.172 40.23 101.53V106.53C38.162 105.679 35.9464 105.244 33.71 105.25C31.3367 105.25 29.6 105.82 28.5 106.96C27.4 108.1 26.8467 109.893 26.84 112.34C26.84 114.66 27.42 116.367 28.58 117.46C30.038 118.655 31.9003 119.242 33.78 119.1C34.8902 119.101 35.9981 119 37.09 118.8C38.1769 118.6 39.2395 118.284 40.26 117.86V122.91C39.2251 123.254 38.1653 123.518 37.09 123.7C35.8433 123.9 34.5827 124.001 33.32 124Z" fill="white"/>
              <path class="nMob" d="M53.5401 124C49.8467 124 47.0001 123.05 45.0001 121.15C43.0601 119.25 42.0801 116.3 42.0801 112.29C42.0801 108.043 43.0534 104.99 45.0001 103.13C46.9467 101.27 49.7834 100.347 53.5101 100.36C57.2434 100.36 60.0801 101.283 62.0201 103.13C63.9601 104.977 64.9534 108.03 65.0001 112.29C65.0001 116.29 64.0267 119.243 62.0801 121.15C60.1334 123.057 57.2867 124.007 53.5401 124ZM53.5401 119.12C54.3231 119.189 55.1113 119.076 55.8434 118.789C56.5754 118.503 57.2314 118.052 57.7601 117.47C58.6501 116.36 59.1001 114.64 59.1001 112.29C59.1001 109.717 58.6534 107.907 57.7601 106.86C57.2211 106.295 56.5619 105.859 55.8314 105.584C55.1009 105.308 54.3177 105.201 53.5401 105.27C52.7579 105.2 51.97 105.307 51.2344 105.582C50.4989 105.857 49.8345 106.294 49.2901 106.86C48.4301 107.913 48.0001 109.723 48.0001 112.29C48.0001 114.64 48.4501 116.36 49.3401 117.47C49.869 118.046 50.522 118.494 51.2497 118.78C51.9774 119.065 52.7607 119.182 53.5401 119.12Z" fill="white"/>
              <path class="nMob" d="M67.8899 123.64V100.71H79.3599C82.0599 100.71 84.0599 101.43 85.3599 102.85C86.7016 104.448 87.3876 106.496 87.2799 108.58C87.3141 110.004 86.9131 111.404 86.1305 112.594C85.3478 113.784 84.2208 114.707 82.8999 115.24C83.2173 115.479 83.4885 115.774 83.6999 116.11C83.9612 116.535 84.1822 116.984 84.3599 117.45L87.0699 123.64H81.0699L78.4999 117.8C78.3397 117.367 78.0543 116.991 77.6799 116.72C77.2519 116.466 76.7567 116.347 76.2599 116.38H73.6299V123.64H67.8899ZM73.6299 112H77.8599C78.8075 112.057 79.7421 111.757 80.4799 111.16C80.8119 110.828 81.0679 110.429 81.2302 109.988C81.3925 109.548 81.4572 109.078 81.4199 108.61C81.4199 106.31 80.3166 105.16 78.1099 105.16H73.6299V112Z" fill="white"/>
              <path class="nMob" d="M90.1799 123.64V100.71H107.1V105.13H95.9099V109.94H105.78V114.42H95.9099V119.23H107.1V123.64H90.1799Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9998 25C40.3511 20.5693 44.7401 17.0302 49.7804 14.6939C54.8207 12.3577 60.3579 11.2959 65.9049 11.6021C71.4519 11.9083 76.8386 13.573 81.5911 16.4499C86.3437 19.3267 90.3164 23.3274 93.1598 28.1L95.6098 26.69L99.6098 24.28C95.9409 18.1043 90.7291 12.989 84.4859 9.43617C78.2428 5.88336 71.183 4.01524 63.9998 4.01524C56.8165 4.01524 49.7567 5.88336 43.5136 9.43617C37.2705 12.989 32.0586 18.1043 28.3898 24.28L26.5098 27.5L29.7498 29.43L42.3098 36.89C40.2823 42.0468 40.1556 47.7567 41.9524 52.9984C43.7492 58.2401 47.3522 62.6715 52.1169 65.5C56.8817 68.3286 62.4973 69.3697 67.9593 68.4371C73.4213 67.5046 78.3734 64.6592 81.9298 60.41L91.0798 65.84C87.7292 70.2757 83.3387 73.8188 78.2953 76.1569C73.252 78.495 67.7108 79.5562 62.1605 79.2469C56.6101 78.9376 51.2212 77.2674 46.4688 74.3834C41.7165 71.4995 37.7468 67.4905 34.9098 62.71L28.4398 66.56C32.1067 72.7381 37.3178 77.8559 43.5612 81.4106C49.8046 84.9652 56.8654 86.8343 64.0498 86.8343C71.2341 86.8343 78.2949 84.9652 84.5383 81.4106C90.7817 77.8559 95.9929 72.7381 99.6598 66.56L101.59 63.32L98.3498 61.4L87.9998 55.28L79.1098 50.15C78.8982 50.8123 78.6443 51.4602 78.3498 52.09C76.8597 55.2807 74.3477 57.8831 71.2116 59.4849C68.0755 61.0867 64.4945 61.5963 61.0361 60.933C57.5776 60.2697 54.4393 58.4715 52.1183 55.8232C49.7972 53.1748 48.4262 49.8278 48.2223 46.3122C48.0184 42.7966 48.9933 39.3134 50.9926 36.4145C52.9918 33.5156 55.9012 31.3666 59.2598 30.3079C62.6184 29.2493 66.2342 29.3415 69.5345 30.57C72.8348 31.7984 75.6308 34.0929 77.4798 37.09L83.9998 33.36C82.0805 30.1783 79.4297 27.5005 76.2675 25.5493C73.1053 23.598 69.5231 22.4296 65.8186 22.1411C62.1141 21.8526 58.3942 22.4523 54.968 23.8905C51.5419 25.3287 48.5084 27.5638 46.1198 30.41L36.9998 25Z" fill="#FF7152"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="86.1" height="120" fill="white" transform="translate(21 4)"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <h1>Welcome!</h1>
        <div class="description">
          Here soon will be a site about the newest product in the world of cryptocurrencies — Core.
        </div>
        <div class="subscribe">
          <div class="text">Stay up to date on the launch of our project</div>
          <div class="input-container">
            <input type="text" placeholder="myname@example.com">
            <div class="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8701 4.5135L11.8866 6.51766L16.3495 10.9805L2.11377 10.9805L2.11377 13.7905L16.3495 13.7905L11.8866 18.2533L13.8701 20.2575L21.7421 12.3855L13.8701 4.5135Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <svg width="148" height="43" viewBox="0 0 148 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path d="M73.7512 32.5927L71.8282 27.2149H62.6045L60.649 32.5927H55.7275L64.2667 9.77783H70.166L78.7053 32.5927H73.7512ZM64.2016 22.7823H70.1986L67.2001 14.5038L64.2016 22.7823Z" fill="white"/>
          <path d="M94.5758 9.77783H99.3017V23.3689C99.3017 26.4761 98.4326 28.8554 96.6943 30.5067C94.9561 32.1581 92.6854 32.9838 89.8825 32.9838C87.0795 32.9838 84.8089 32.1581 83.0706 30.5067C81.3324 28.8554 80.4632 26.4761 80.4632 23.3689V9.77783H85.1891V23.1082C85.1891 26.7368 86.7536 28.5512 89.8825 28.5512C93.0114 28.5512 94.5758 26.7368 94.5758 23.1082V9.77783Z" fill="white"/>
          <path d="M117.215 32.5927L111.316 24.3793H108.741V32.5927H104.08V9.77783H113.89C116.324 9.77783 118.225 10.4514 119.594 11.7986C120.985 13.124 121.68 14.9275 121.68 17.2089C121.68 19.0341 121.235 20.5225 120.344 21.6741C119.453 22.8257 118.193 23.608 116.563 24.0208L122.951 32.5927H117.215ZM108.741 14.2104V20.3052H113.369C114.564 20.3052 115.455 20.0445 116.042 19.523C116.65 18.9798 116.954 18.2302 116.954 17.2741C116.954 16.3181 116.65 15.5685 116.042 15.0252C115.433 14.482 114.542 14.2104 113.369 14.2104H108.741Z" fill="white"/>
          <path d="M142.756 32.5927L140.833 27.2149H131.609L129.654 32.5927H124.732L133.271 9.77783H139.171L147.71 32.5927H142.756ZM133.206 22.7823H139.203L136.205 14.5038L133.206 22.7823Z" fill="white"/>
          <path d="M15.1482 10.4232C17.082 19.0613 10.2656 23.7464 6.6156 25.0093L19.061 32.1009C18.544 24.027 24.534 19.0127 27.5937 17.5148L15.1482 10.4232Z" fill="white"/>
          <ellipse rx="8.00454" ry="8.0573" transform="matrix(0.504935 -0.863157 0.868847 0.495081 11.0423 31.6257)" fill="white"/>
          <ellipse rx="8.00454" ry="8.05729" transform="matrix(0.504935 -0.863157 0.868847 0.495081 23.1678 10.8984)" fill="white"/>
          <ellipse rx="8.00454" ry="8.05729" transform="matrix(-0.504935 -0.863157 -0.868847 0.495081 34.8836 31.6257)" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="148" height="43" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div class="right">
        <video muted loop autoplay class="start-container__video">
          <source :src="require(`@/assets/img/start.mp4`)" type="video/mp4">
        </video>
        <img :src="require(`@/assets/img/gradStart.png`)" alt="grad-start" class="start-container__gradient">
        <countdown :time="startTime - timeNow">
          <div class="timer" slot-scope="props">
          <div class="timer-col">
            <div class="num">{{props.days}}</div>
            <div class="desc">Days</div>
          </div>
          <div class="timer-col">
            <div class="num">{{ props.hours }}</div>
            <div class="desc">Hours</div>
          </div>
          <div class="timer-col">
            <div class="num">{{ props.minutes }}</div>
            <div class="desc">Minutes</div>
          </div>
          <div class="timer-col">
            <div class="num">{{ props.seconds }}</div>
            <div class="desc">Seconds</div>
          </div>
        </div>
        </countdown>
      </div>
    </div>
    <div class="footer">
      <div class="copy">© Core App, 2020</div>
      <div class="nav">
        <div>Terms of Service</div>
        <div>Privacy</div>
      </div>
      <div class="share">
        <a href="##" target="_blank">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
          </svg>
        </a>
        <a href="##" target="_blank">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
          </svg>

        </a>
        <a href="##">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z" fill="white"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StartContainer',
  data () {
    return {
      firstAnimation: false,
      timeNow: new Date().getTime(),
      startTime: new Date('2021-02-01T00:00:00')
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 700)
    console.log(this.timeNow)
    console.log(this.startTime)
  },
  methods: {
  }
}
</script>
<style scoped>
  .start-container.ready .logo,.start-container.ready h1,.start-container.ready .description,.start-container.ready .subscribe{
    opacity: 1;
    transform: translateX(0px);
  }
  .copy{
    opacity: .6;
  }
  .nav{
    display: flex;
    margin-left: 80px;
  }
  .nav div{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
    margin-right: 40px;
  }
  .nav div:hover{
    color: #ff7152;
  }
  .footer{
    display: flex;
    padding: 0px 150px;
    z-index: 10;
    position: absolute;
    bottom: 50px;
    left: 0px;
    width: 100%;
    align-items: center;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transition-delay: .5s;
  }
  .start-container.ready .footer{
    opacity: 1;
  }
  .share{
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .share a{
    margin-right: 16px;
  }
  .share a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .share a:hover path{
    fill: #ff7152;
  }
  .logo{
    margin-top: 50px;
    margin-bottom: 70px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transform: translateY(10px);
  }
  .subscribe{
    display: flex;
    flex-direction: column;
    margin-top: 65px;
    margin-bottom: auto;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transform: translateY(10px);
    transition-delay: .3s;
  }
  .subscribe .text{
    font-size: 20px;
    opacity: .6;
    margin-bottom: 25px;
  }
  .button svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .button svg path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .button svg:hover path{
    fill: #ff7152;
  }
  .button svg:hover{
    transform: translateX(5px);
  }
  .input-container .button{
    position: absolute;
    display: flex;
    align-items: center;
    top: 0px;
    right: 20px;
    height: 100%;
    z-index: 2;
  }
  .input-container input{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent;
    border: 2px solid rgba(255,255,255,.1);
    padding: 0px 25px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  input:focus{
    border-color: #0400DD;
  }
  .input-container{
    position: relative;
    width: 360px;
    height: 64px;
  }
  .left{
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  .description{
    font-size: 40px;
    line-height: 50px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transform: translateY(10px);
    transition-delay: .2s;
  }
  h1{
    font-size: 96px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    color: transparent;
    margin-bottom: 30px;
    opacity: 0;
    transform: translateY(10px);
    transition-delay: .1s;
  }
  .start-container__inner{
    max-width: 1920px;
    padding: 0px 100px;
    margin: auto;
    display: flex;
    height: 100%;
  }
  .start-container{
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #00050F;
    z-index: 9999;
  }
  .right{
    display: flex;
    width: calc(100% - 600px);
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transform: scale(.9);
    transition-delay: .4s;
  }
  .start-container.ready .right{
    opacity: 1;
    transform: scale(1);
  }
  .timer{
    display: flex;
    position: relative;
    z-index: 10;
  }
  .timer-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
  }
  .timer-col .num{
    font-size: 100px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,113,82,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .timer-col .desc{
    font-size: 20px;
  }
  .start-container__video{
    position: absolute;
    height: 100%;
    z-index: 1;
    top: 0px;
  }
  .start-container__gradient{
    position: absolute;
    height: 100%;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .start-container__inner{
      padding: 0px 70px;
    }
    .logo{
      margin-top: 30px;
      margin-bottom: 40px;
    }
    h1{
      font-size: 71px;
      margin-bottom: 20px;
    }
    .description {
      font-size: 25px;
      line-height: 35px;
    }
    .subscribe{
      margin-top: 30px;
    }
    .subscribe .text{
      font-size: 16px;
      margin-bottom: 15px;
    }
    .input-container {
      position: relative;
      width: 260px;
      height: 50px;
    }
    .footer{
      padding: 0px 100px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .right {
      display: flex;
      width: calc(100% - 400px);
      height: 40%;
      margin: auto 0px;
    }
    .left{
      width: 400px;
    }
    .timer-col .num{
      font-size: 70px;
    }
    .timer-col .desc {
      font-size: 16px;
    }
    h1{
      margin-top: auto;
    }
    .logo{
      margin-bottom: 0px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .timer-col .num {
      font-size: 45px;
    }
    .right {
      width: 100%;
      height: 35%;
    }
    .start-container__inner {
      padding: 0px 30px;
    }
    h1{
      font-size: 50px;
      margin-top: 0px;
    }
    .description {
      font-size: 18px;
      line-height: 28px;
    }
    .subscribe .text{
      font-size: 13px;
      margin-bottom: 10px;
    }
    .left {
      width: 100%;
    }
    .start-container__inner{
      flex-direction: column;
    }
    .logo{
      transform: scale(.7);
      transform-origin: top left;
    }
    .right{
      margin-top: 30px;
    }
    .subscribe{
      margin-bottom: 0px;
    }
    .left{
      height: auto;
    }
    .nav div{
      margin-right: 20px;
    }
    .nav{
      margin-left: 40px;
    }
    .footer {
      padding: 0px 50px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .logo{
      margin-top: 15px;
      transform: scale(.5);
      position: absolute;
      left: -10px;
      top: 0px;
    }
    .nMob{
      display: none;
    }
    .start-container__inner {
      padding: 0px 15px;
      height: auto;
    }
    h1{
      margin-top: 75px;
      font-size: 40px;
      margin-bottom: 15px;
    }
    .description {
      font-size: 16px;
      line-height: 22px;
    }
    .input-container {
      position: relative;
      width: 230px;
      height: 48px;
    }
    .input-container input{
      padding: 0px 20px;
    }
    .input-container .button{
      right: 12px;
    }
    .timer-col .num {
      font-size: 28px;
    }
    .timer-col .desc{
      font-size: 12px;
    }
    .footer{
      position: relative;
      flex-direction: column;
      bottom: 0px;
    }
    .start-container{
      max-height: 100vh;
      overflow: auto;
    }
    .right{
      height: 40vh;
    }
    .nav{
      flex-direction: column;
      align-items: center;
      margin: 0px;
      margin-top: 25px;
    }
    .nav div{
      margin-right: 0px;
      margin-bottom: 25px;
    }
    .share{
      margin-left: 0px;
      margin-bottom: 25px;
    }
    .share a {
      margin: 0px 8px;
    }
  }
</style>
