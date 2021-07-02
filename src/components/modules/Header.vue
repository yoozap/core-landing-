<template>
  <div :class="activeBurger ? 'activeBurger' : ''" v-if="true">
<!--    {{$store.state.activeMenu}}-->
    <header :class="[firstAnimation ? 'animHead' : '']" v-if="!mobileMode">
      <router-link
        class="logo"
        to="/">
        <svg width="64" height="88" viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M9 88C6.06 88 3.82 87.2467 2.28 85.74C1.48911 84.9059 0.878507 83.9178 0.48624 82.8374C0.0939732 81.7569 -0.0715446 80.6072 3.00631e-06 79.46C-0.0704511 78.2872 0.0930777 77.112 0.481072 76.003C0.869065 74.8939 1.47377 73.8731 2.26 73C3.76 71.4467 6.00667 70.6667 9 70.66C9.92228 70.6506 10.8433 70.731 11.75 70.9C12.5445 71.0475 13.3267 71.2548 14.09 71.52V75.21C12.5752 74.5814 10.95 74.2618 9.31 74.27C8.62339 74.2095 7.93165 74.2891 7.27673 74.504C6.6218 74.7189 6.01734 75.0645 5.5 75.52C4.59575 76.6243 4.15805 78.0379 4.28 79.46C4.22155 80.1412 4.30514 80.8271 4.52547 81.4743C4.7458 82.1215 5.09807 82.716 5.56 83.22C6.62944 84.0932 7.99319 84.5227 9.37 84.42C10.1851 84.4221 10.9986 84.3485 11.8 84.2C12.5984 84.051 13.3792 83.8198 14.13 83.51V87.22C13.3682 87.4662 12.5894 87.6567 11.8 87.79C10.8743 87.9393 9.9376 88.0095 9 88Z" fill="white"/>
            <path d="M23.87 88C21.13 88 19.05 87.3033 17.63 85.91C16.21 84.5167 15.4933 82.35 15.48 79.41C15.48 76.29 16.2 74.06 17.63 72.7C19.06 71.34 21.13 70.7 23.87 70.7C26.61 70.7 28.68 71.38 30.11 72.7C31.54 74.02 32.25 76.29 32.25 79.41C32.25 82.35 31.53 84.52 30.11 85.91C28.69 87.3 26.6 88 23.87 88ZM23.87 84.42C24.45 84.4776 25.0355 84.3982 25.5792 84.188C26.1229 83.9778 26.6096 83.6428 27 83.21C27.7504 82.0915 28.1026 80.753 28 79.41C28.1287 78.0019 27.7762 76.5918 27 75.41C26.6053 74.9968 26.1225 74.6778 25.5875 74.477C25.0525 74.2762 24.4791 74.1986 23.91 74.25C23.3362 74.1969 22.7579 74.2736 22.2178 74.4744C21.6777 74.6752 21.1897 74.995 20.79 75.41C20.0086 76.5896 19.6556 78.0015 19.79 79.41C19.6874 80.753 20.0396 82.0915 20.79 83.21C21.1771 83.6332 21.6559 83.9623 22.1897 84.1721C22.7236 84.3818 23.2983 84.4666 23.87 84.42Z" fill="white"/>
            <path d="M34.39 87.74V70.92H42.8C43.5998 70.8538 44.4046 70.9596 45.1601 71.2304C45.9156 71.5012 46.6044 71.9307 47.18 72.49C48.1686 73.6589 48.673 75.1614 48.59 76.69C48.6212 77.755 48.3207 78.8033 47.73 79.69C47.1526 80.5449 46.3349 81.2095 45.38 81.6C45.612 81.7778 45.8116 81.9943 45.97 82.24C46.1605 82.5578 46.3212 82.8926 46.45 83.24L48.45 87.78H44.05L42.17 83.5C42.0481 83.1828 41.8404 82.9058 41.57 82.7C41.2659 82.5266 40.9199 82.4401 40.57 82.45H38.59V87.78L34.39 87.74ZM38.59 79.17H41.7C42.3938 79.2139 43.0788 78.9962 43.62 78.56C43.8639 78.3171 44.052 78.024 44.1711 77.7011C44.2903 77.3781 44.3377 77.0331 44.31 76.69C44.31 75.01 43.5 74.16 41.88 74.16H38.59V79.17Z" fill="white"/>
            <path d="M50.73 87.74V70.92H63.14V74.16H54.94V77.69H62.17V81H54.94V84.5H63.14V87.74H50.73Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.74 15.39C14.1961 12.1394 17.4138 9.54246 21.1098 7.82801C24.8057 6.11355 28.8665 5.33413 32.9345 5.55838C37.0026 5.78263 40.9531 7.00366 44.4382 9.11396C47.9233 11.2243 50.836 14.1591 52.92 17.66L54.72 16.66L57.72 14.9C55.0286 10.372 51.2061 6.62165 46.6278 4.01691C42.0494 1.41218 36.8725 0.0426025 31.605 0.0426025C26.3375 0.0426025 21.1606 1.41218 16.5822 4.01691C12.0039 6.62165 8.1814 10.372 5.49 14.9L4 17.24L6.38 18.65L15.59 24.12C14.0836 27.9087 13.9787 32.1106 15.2943 35.9696C16.6098 39.8287 19.2595 43.0916 22.7664 45.1712C26.2734 47.2508 30.4074 48.0105 34.4245 47.3137C38.4417 46.6168 42.0783 44.5092 44.68 41.37L51.39 45.37C48.9333 48.6235 45.7135 51.2223 42.0148 52.9372C38.3162 54.652 34.2523 55.4301 30.1817 55.2028C26.1112 54.9755 22.1592 53.7498 18.6744 51.6339C15.1896 49.5179 12.2792 46.5768 10.2 43.07L5.45 45.88C8.1414 50.408 11.9639 54.1584 16.5422 56.7631C21.1206 59.3678 26.2975 60.7374 31.565 60.7374C36.8325 60.7374 42.0094 59.3678 46.5878 56.7631C51.1661 54.1584 54.9886 50.408 57.68 45.88L59.1 43.5L56.72 42.09L49.16 37.6L42.64 33.84C41.8463 36.3666 40.2119 38.5456 38.0084 40.0148C35.805 41.484 33.1651 42.155 30.5275 41.9163C27.8899 41.6775 25.4135 40.5434 23.5096 38.7025C21.6058 36.8615 20.3892 34.4245 20.062 31.7964C19.7349 29.1683 20.3169 26.5074 21.7113 24.2558C23.1058 22.0043 25.2286 20.2977 27.7272 19.4196C30.2258 18.5416 32.9496 18.5449 35.446 19.4291C37.9424 20.3133 40.0611 22.0251 41.45 24.28L46.24 21.52C44.8328 19.1861 42.8888 17.2219 40.5696 15.7906C38.2503 14.3594 35.6229 13.5025 32.9058 13.2912C30.1887 13.08 27.4605 13.5204 24.9479 14.576C22.4353 15.6315 20.211 17.2717 18.46 19.36L11.74 15.39Z" fill="#FF7152"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="63.14" height="88" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </router-link>
      <nav>
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="font-18"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div v-if="false" class="header__download-container">
        <div class="ttl">Download</div>
        <div class="buttons">
          <a href="#">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3333 31.9999C18.4437 31.9999 19.4121 31.0669 19.4121 29.997V25.3191H20.8001C21.633 25.3191 22.1881 24.784 22.1881 23.9817V10.6211H5.54529V23.9818C5.54529 24.7843 6.10049 25.3192 6.93328 25.3192H8.32139V29.9971C8.32139 31.067 9.2895 32.0001 10.4001 32.0001C11.5104 32.0001 12.4786 31.067 12.4786 29.9971V25.3192H15.2547V29.9971C15.2546 31.0669 16.2229 31.9999 17.3333 31.9999Z" fill="white"/>
              <path d="M25.6549 23.9818C26.7653 23.9818 27.7334 23.0489 27.7334 21.9788V12.6232C27.7334 11.5589 26.7653 10.6211 25.6549 10.6211C24.5444 10.6211 23.5762 11.5589 23.5762 12.6232V21.9788C23.5762 23.0488 24.5443 23.9818 25.6549 23.9818Z" fill="white"/>
              <path d="M2.0785 23.9818C3.18901 23.9818 4.15723 23.0489 4.15723 21.9788V12.6232C4.15723 11.5589 3.18912 10.6211 2.0785 10.6211C0.968107 10.6211 0 11.5589 0 12.6232V21.9788C0 23.0488 0.968107 23.9818 2.0785 23.9818Z" fill="white"/>
              <path d="M20.5224 0.201815C20.2449 -0.0672718 19.8317 -0.0672718 19.5542 0.201815L17.6926 1.98964L17.6067 2.07229C16.5029 1.53967 15.2653 1.27368 13.887 1.27112C13.8802 1.27112 13.8736 1.2709 13.8668 1.2709H13.8666C13.8596 1.2709 13.8532 1.27112 13.8462 1.27112C12.4681 1.27368 11.2305 1.53967 10.1267 2.07229L10.0406 1.98964L8.1791 0.201815C7.90139 -0.0672718 7.48848 -0.0672718 7.21099 0.201815C6.93328 0.469407 6.93328 0.866524 7.21099 1.1339L9.01179 2.86941C8.43155 3.24271 7.90538 3.69952 7.44781 4.222C6.35238 5.47314 5.65367 7.10144 5.55759 8.86567C5.5567 8.88404 5.55482 8.90219 5.55393 8.92056C5.54806 9.04068 5.54529 9.16145 5.54529 9.28265H22.1881C22.1881 9.16145 22.1851 9.04068 22.1794 8.92056C22.1785 8.90219 22.1766 8.88404 22.1755 8.86567C22.0797 7.10144 21.3807 5.47304 20.2853 4.2221C19.828 3.69963 19.3016 3.24282 18.7213 2.86951L20.5224 1.13401C20.8001 0.866524 20.8001 0.469407 20.5224 0.201815ZM10.3975 6.94746C9.8232 6.94746 9.35765 6.49888 9.35765 5.94554C9.35765 5.39221 9.8232 4.94362 10.3975 4.94362C10.9717 4.94362 11.4373 5.39221 11.4373 5.94554C11.4373 6.49888 10.9717 6.94746 10.3975 6.94746ZM17.3359 6.94746C16.7616 6.94746 16.2961 6.49888 16.2961 5.94554C16.2961 5.39221 16.7616 4.94362 17.3359 4.94362C17.9101 4.94362 18.3757 5.39221 18.3757 5.94554C18.3757 6.49888 17.9101 6.94746 17.3359 6.94746Z" fill="white"/>
            </svg>
          </a>
          <a href="#">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8411 32C7.00246 31.9726 3 22.2506 3 17.2994C3 9.21163 9.16415 7.441 11.5398 7.441C12.6104 7.441 13.7535 7.85481 14.7618 8.221C15.4669 8.47644 16.1961 8.74013 16.6017 8.74013C16.8445 8.74013 17.4165 8.51581 17.9216 8.319C18.9987 7.89694 20.3391 7.37238 21.8999 7.37238C21.9027 7.37238 21.9064 7.37238 21.9091 7.37238C23.0746 7.37238 26.6083 7.62413 28.7328 10.7644L29.2304 11.5004L28.5142 12.0324C27.4911 12.7923 25.6242 14.1784 25.6242 16.9241C25.6242 20.176 27.7385 21.4266 28.7542 22.0281C29.2026 22.2936 29.6667 22.5674 29.6667 23.1661C29.6667 23.5571 26.4967 31.9515 21.8933 31.9515C20.7669 31.9515 19.9707 31.6183 19.2684 31.3244C18.5578 31.0268 17.9448 30.7705 16.9318 30.7705C16.4184 30.7705 15.7691 31.0094 15.0817 31.2631C14.1424 31.6081 13.0792 32 11.8728 32H11.8411Z" fill="white"/>
              <path d="M22.3876 0C22.5075 4.25475 19.416 7.2065 16.3282 7.02137C15.8194 3.62594 19.4157 0 22.3876 0Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <div class="mobile-header" :class="firstAnimation ? 'animHead' : ''" v-if="mobileMode">
      <div class="mobile-header__up" :class="$store.state.activeMenu !== 0 ? 'fixedMenu' : ''">
        <router-link
          class="mobile-header__logo"
          to="/">
          <svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3375 12.9163C8.31772 10.2875 10.9148 8.1866 13.8993 6.79924C16.8838 5.41188 20.164 4.7807 23.4503 4.96145C26.7366 5.14219 29.9278 6.12929 32.7422 7.8356C35.5566 9.5419 37.9075 11.9149 39.5875 14.7451L41.04 13.8701L43.4288 12.4438C41.2594 8.78789 38.1762 5.7593 34.482 3.65574C30.7878 1.55218 26.6099 0.446045 22.3587 0.446045C18.1076 0.446045 13.9297 1.55218 10.2355 3.65574C6.54133 5.7593 3.45807 8.78789 1.28875 12.4438L0.125 14.4038L2.04125 15.5413L9.47875 19.9163C8.83828 21.5342 8.5145 23.2601 8.525 25.0001C8.52518 27.8338 9.39723 30.5988 11.0228 32.9199C12.6484 35.241 14.9487 37.0057 17.6116 37.9746C20.2746 38.9434 23.1711 39.0695 25.9082 38.3357C28.6452 37.6019 31.0902 36.0437 32.9113 33.8726L38.3275 37.0838C36.3459 39.7119 33.7477 41.8116 30.7624 43.1975C27.777 44.5834 24.4963 45.2129 21.21 45.0304C17.9237 44.848 14.7328 43.8591 11.9193 42.1512C9.10569 40.4433 6.75594 38.0689 5.0775 35.2376L1.2625 37.5126C3.43182 41.1685 6.51508 44.1971 10.2093 46.3007C13.9034 48.4043 18.0814 49.5104 22.3325 49.5104C26.5836 49.5104 30.7616 48.4043 34.4557 46.3007C38.1499 44.1971 41.2332 41.1685 43.4025 37.5126L44.54 35.5963L42.6237 34.4588L36.4987 30.8363L31.2487 27.8001C31.1274 28.1923 30.9783 28.5754 30.8025 28.9463C29.9207 30.8302 28.4355 32.366 26.5823 33.3105C24.7291 34.2551 22.6137 34.5543 20.5712 34.1608C18.5287 33.7674 16.6759 32.7037 15.3061 31.1383C13.9364 29.573 13.128 27.5954 13.0091 25.5187C12.8902 23.4421 13.4676 21.3851 14.6497 19.6736C15.8318 17.9621 17.5511 16.694 19.5354 16.07C21.5196 15.446 23.6553 15.5018 25.6043 16.2286C27.5532 16.9554 29.2039 18.3117 30.295 20.0826L34.1537 17.8601C33.0183 15.9781 31.4503 14.3942 29.5799 13.2398C27.7095 12.0855 25.5907 11.394 23.3994 11.2229C21.2081 11.0517 19.0076 11.4059 16.9807 12.2559C14.9537 13.1059 13.1588 14.4272 11.745 16.1101L6.3375 12.9163Z" fill="#FF7152"/>
          </svg>
        </router-link>
        <div class="mobile-header__title">
          Cryptographic Object <br>
          Resource Engine
        </div>
        <div class="burger" :class="activeBurger ? 'active' : ''" @click="openBurger">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="mobile-header__down" :class="activeBurger ? 'active' : ''">
        <div class="mobile-header__nav">
          <router-link
            v-for="nav in routes"
            :key="nav.id"
            :to="nav.route"
            class="font-18"
            :class="$store.state.activeMenu == nav.id ? 'active' : ''"
            @click.native="closeBurger(),activeLinkFunc(nav.id)"
          >
            {{nav.title}}
          </router-link>
        </div>
        <div class="mobile-header__socials-container">
          <div class="mobile-header__socials-title"><span>Follow us</span></div>
          <div class="mobile-header__socials">
            <a href="https://twitter.com/COREMultichain" target="_blank">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
              </svg>

            </a>
            <a href="https://t.me/coreblockchain" target="_blank">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.278 9.12066L6.01333 12.8433C6.392 12.8433 6.556 12.6807 6.75266 12.4853L8.528 10.7887L12.2067 13.4827C12.8813 13.8587 13.3567 13.6607 13.5387 12.862L15.9533 1.54732L15.954 1.54666C16.168 0.549324 15.5933 0.159324 14.936 0.403991L0.742663 5.83799C-0.226003 6.21399 -0.211337 6.75399 0.577996 6.99866L4.20666 8.12732L12.6353 2.85332C13.032 2.59066 13.3927 2.73599 13.096 2.99866L6.278 9.12066Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/coremultichain/" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M19.9951 19.9999V19.999H20.0001V12.664C20.0001 9.07569 19.2276 6.31152 15.0326 6.31152C13.0159 6.31152 11.6626 7.41819 11.1101 8.46736H11.0517V6.64652H7.07422V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.9632 13.7017 9.9632C15.8259 9.9632 15.8576 11.9499 15.8576 13.499V19.9999H19.9951Z" fill="white"/>
                  <path d="M0.330139 6.64746H4.47681V20H0.330139V6.64746Z" fill="white"/>
                  <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://github.com/CORE-Blockchain" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
      routes: [
        {
          id: 1,
          title: 'Home',
          route: '/'
        },
        {
          id: 2,
          title: 'Technology',
          route: '/technology'
        },
        {
          id: 3,
          title: 'Community',
          route: '/community'
        },
        {
          id: 4,
          title: 'Roadmap',
          route: '/roadmap'
        },
        {
          id: 5,
          title: 'Tokenomics',
          route: '/tokenomics'
        }
        // {
        //   id: 6,
        //   title: 'FAQ',
        //   route: '/faq'
        // },
        // {
        //   id: 6,
        //   title: 'Wiki',
        //   route: '/wiki'
        // },
        // {
        //   id: 7,
        //   title: 'Research Areas',
        //   route: '/research-areas'
        // },
        // {
        //   id: 8,
        //   title: 'Blog',
        //   route: '/blog'
        // }
      ]
    }
  },
  methods: {
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      if (this.activeBurger === true) {
        this.activeBurger = false
      } else {
        this.activeBurger = true
      }
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.$store.commit('setMenuStatus', 0)
      this.firstAnimation = true
    }, 1200)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .logo{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    display: flex;
    justify-content: center;
  }
  .animHead .logo{
    transform: translateY(0px);
    opacity: 1;
  }
  .header__download-container .buttons a:hover path{
    fill: #ff7152;
  }
  .header__download-container .buttons a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .header__download-container .buttons{
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .header__download-container .ttl{
    color: rgba(255,255,255,.6);
    font-size: 16px;
    margin-bottom: 25px;
  }
  .header__download-container{
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .header__download-container{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  header{
    position: fixed;
    width: 210px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: transparent;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
  nav{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead nav{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .1s;
  }
  nav a{
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 20px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    -webkit-text-stroke: .8px rgba(255, 255, 255, 0);
    text-align: center;
    font-size: 13px;
  }
  nav a:hover{
    -webkit-text-stroke: .8px rgba(255, 255, 255, 1);
    color: transparent;
  }
  nav a.active,nav a.router-link-exact-active,.mobile-header__nav a.router-link-exact-active{
    color: #ff7152;
    -webkit-text-stroke: .8px rgba(255, 255, 255, 0);
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    header{
      width: 180px;
      padding: 20px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .mobile-header__title{
      font-size: 13px;
      line-height: 18px;
      margin-left: 15px;
    }
    .mobile-header__up{
      position: relative;
      width: 100%;
      display: flex;
      padding: 15px;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,.05);
      z-index: 10;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .mobile-header__up.fixedMenu{
      background: rgba(0,5,15,.8);
    }
    .mobile-header{
      position: fixed;
      z-index: 99999;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    .burger{
      height: 30px;
      width: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: auto;
    }
    .burger.active span:nth-child(1){
      transform: translateY(7px) rotate(-45deg);
    }
    .burger.active span:nth-child(2){
      transform: translateY(-8px) rotate(45deg);
    }
    .burger span{
      height: 2px;
      width: 100%;
      background: #fff;
      display: flex;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .mobile-header__down{
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: #00050F;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      opacity: 0;
      pointer-events: none;
      transition-delay: .6s;
    }
    .mobile-header__down.active{
      transition-delay: 0s;
      opacity: 1;
      pointer-events: all;
    }
    .mobile-header__nav{
      display: flex;
      flex-direction: column;
      margin-top: 135px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      transform: translateY(10px);
      opacity: 0;
    }
    .mobile-header__down.active .mobile-header__nav{
      transform: translateY(0px);
      opacity: 1;
    }
    .mobile-header__nav a{
      font-size: 42px;
      line-height: 48px;
      text-align: center;
      margin-bottom: 25px;
    }
    .mobile-header__socials-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
      margin-bottom: 40px;
    }
    .mobile-header__socials-title span{
      font-size: 20px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      transform: translateY(120%);
      display: flex;
    }
    .mobile-header__down.active .mobile-header__socials-title span{
      transform: translateY(0%);
      transition-delay: .2s;
    }
    .mobile-header__socials-title{
      margin-bottom: 15px;
      overflow: hidden;
    }
    .mobile-header__socials{
      display: flex;
      align-items: center;
    }
    .mobile-header__socials a{
      margin: 0px 8px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
   .mobile-header__socials svg{
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      opacity: 0;
      transform: scale(.9);
    }
    .mobile-header__socials a:nth-child(1) svg{
      transition-delay: .3s;
    }
    .mobile-header__socials a:nth-child(2) svg{
      transition-delay: .4s;
    }
    .mobile-header__socials a:nth-child(3) svg{
      transition-delay: .5s;
    }
    .mobile-header__socials a:nth-child(4) svg{
      transition-delay: .6s;
    }
    .mobile-header__down.active .mobile-header__socials svg{
      opacity: 1;
      transform: scale(1);
    }
    .mobile-header__nav a.active{
      color: #FF7152;
    }
  }
</style>
