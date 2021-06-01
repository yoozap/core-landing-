<template>
  <div class="footer__main">
    <div data-aos="fade-up" class="container join_container">
      <div class="footer__join">
        <img
          v-prlx="{ speed: 0.1 }"
          :src="require(`@/assets/img/join-img.jpg`)"
          alt="join-img"
          class="footer__join-img"
        />
        <div class="footer__join-inner">
          <div class="footer__join-left">
            <div class="footer__join-title">
              Join the <span>CORE</span> community
            </div>
            <div class="footer__join-description">
              Be one of innovators who subscribe to our updates.
            </div>
          </div>
          <div class="footer__join-right">
            <div class="subscribe-container">
              <form @submit.prevent="sendEmail">
                <div class="input-container" :class="!success ? 'error' : ''">
                  <input
                    type="text"
                    placeholder="myname@example.com"
                    v-model="email"
                    name="message"
                  />
                  <div class="error-message">
                    The entered email is incorrect
                  </div>
                  <div class="button">
                    <input type="submit" />
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8702 0.513321L9.88674 2.51748L14.3496 6.98034L0.113892 6.98034L0.113892 9.7903L14.3496 9.7903L9.88674 14.2532L11.8702 16.2573L19.7422 8.38532L11.8702 0.513321Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footerBg"></div>
      <div data-aos="fade-up" class="container">
        <div class="footerInner">
          <div class="footer__first-container" v-if="false">
            <router-link to="/" class="footer__logo">
              <img
                :src="require(`@/assets/img/footerLogo.svg`)"
                alt=""
                class="footer__logo-img"
              />
            </router-link>
            <div class="share">
              <a href="##" target="_blank" v-if="false">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="##" target="_blank">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="##">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M19.9951 19.9999V19.999H20.0001V12.664C20.0001 9.07569 19.2276 6.31152 15.0326 6.31152C13.0159 6.31152 11.6626 7.41819 11.1101 8.46736H11.0517V6.64652H7.07422V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.9632 13.7017 9.9632C15.8259 9.9632 15.8576 11.9499 15.8576 13.499V19.9999H19.9951Z"
                      fill="white"
                    />
                    <path
                      d="M0.330139 6.64746H4.47681V20H0.330139V6.64746Z"
                      fill="white"
                    />
                    <path
                      d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="##">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div class="footStep">
              <div class="nav">
                <router-link to="/termsofuse">Terms of Service</router-link>
                <router-link to="/privacy">Privacy</router-link>
                <router-link to="/proposals">Proposals</router-link>
              </div>
            </div>
            <div class="copyright">
              © CORE Multi-Chain, 2021 <br />
              All rights reserved
            </div>
          </div>
          <div v-if="false" class="footer__second-container">
            <div class="footer__second-container-column">
              <div
                class="footer__second-ttl"
                @click="openMobileFooter(1)"
                :class="activeFooter == 1 ? 'active' : ''"
              >
                Products
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5L8 11L15 5" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <slide-up-down
                :active="activeFooter == 1 || !mobileMode"
                :use-hidden="true"
              >
                <div class="footer__second-link-container">
                  <a href="##" class="footer__second-link">Liquid Network</a>
                  <a href="##" class="footer__second-link">AQUA Wallet</a>
                  <a href="##" class="footer__second-link">Blockstream AMP</a>
                  <a href="##" class="footer__second-link">Blockstream Jade</a>
                  <a href="##" class="footer__second-link">Blockstream Green</a>
                  <a href="##" class="footer__second-link"
                    >Blockstream Mining</a
                  >
                  <a href="##" class="footer__second-link"
                    >Blockstream Satellite</a
                  >
                  <a href="##" class="footer__second-link"
                    >Blockstream Explorer</a
                  >
                  <a href="##" class="footer__second-link">Lightning Network</a>
                </div>
              </slide-up-down>
            </div>
            <div class="footer__second-container-column">
              <div
                class="footer__second-ttl"
                @click="openMobileFooter(2)"
                :class="activeFooter == 2 ? 'active' : ''"
              >
                Developers
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5L8 11L15 5" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <slide-up-down
                :active="activeFooter == 2 || !mobileMode"
                :use-hidden="true"
                :class="activeFooter == 2 ? 'active' : ''"
              >
                <div class="footer__second-link-container">
                  <a href="##" class="footer__second-link">Engineering Blog</a>
                  <a href="##" class="footer__second-link">Documentation</a>
                </div>
              </slide-up-down>
              <div
                class="footer__second-ttl mt-30"
                @click="openMobileFooter(3)"
                :class="activeFooter == 3 ? 'active' : ''"
              >
                Company
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5L8 11L15 5" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <slide-up-down
                :active="activeFooter == 3 || !mobileMode"
                :use-hidden="true"
              >
                <div class="footer__second-link-container">
                  <a href="##" class="footer__second-link">Research</a>
                  <a href="##" class="footer__second-link">About</a>
                  <a href="##" class="footer__second-link">Careers</a>
                </div>
              </slide-up-down>
            </div>
            <div class="footer__second-container-column">
              <div
                class="footer__second-ttl"
                @click="openMobileFooter(4)"
                :class="activeFooter == 4 ? 'active' : ''"
              >
                Resources
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5L8 11L15 5" stroke="white" stroke-width="2" />
                </svg>
              </div>
              <slide-up-down
                :active="activeFooter == 4 || !mobileMode"
                :use-hidden="true"
              >
                <div class="footer__second-link-container">
                  <a href="##" class="footer__second-link">Support</a>
                  <a href="##" class="footer__second-link">Contact</a>
                  <a href="##" class="footer__second-link">Brand Assets</a>
                  <a href="##" class="footer__second-link">Scam DB</a>
                </div>
              </slide-up-down>
            </div>
          </div>
          <div class="footer__up-floor">
            <router-link to="/" class="footer__logo">
              <img
                :src="require(`@/assets/img/footerLogo.svg`)"
                alt=""
                class="footer__logo-img"
              />
            </router-link>
            <div class="footer__up-floor-nav">
              <router-link v-for="nav in routes" :key="nav.id" :to="nav.route">
                {{ nav.title }}
              </router-link>
            </div>
            <div class="share">
              <a href="https://twitter.com/COREMultichain" target="_blank">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://t.me/coreblockchain" target="_blank">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.278 9.12066L6.01333 12.8433C6.392 12.8433 6.556 12.6807 6.75266 12.4853L8.528 10.7887L12.2067 13.4827C12.8813 13.8587 13.3567 13.6607 13.5387 12.862L15.9533 1.54732L15.954 1.54666C16.168 0.549324 15.5933 0.159324 14.936 0.403991L0.742663 5.83799C-0.226003 6.21399 -0.211337 6.75399 0.577996 6.99866L4.20666 8.12732L12.6353 2.85332C13.032 2.59066 13.3927 2.73599 13.096 2.99866L6.278 9.12066Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/coremultichain/"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M19.9951 19.9999V19.999H20.0001V12.664C20.0001 9.07569 19.2276 6.31152 15.0326 6.31152C13.0159 6.31152 11.6626 7.41819 11.1101 8.46736H11.0517V6.64652H7.07422V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.9632 13.7017 9.9632C15.8259 9.9632 15.8576 11.9499 15.8576 13.499V19.9999H19.9951Z"
                      fill="white"
                    />
                    <path
                      d="M0.330139 6.64746H4.47681V20H0.330139V6.64746Z"
                      fill="white"
                    />
                    <path
                      d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://github.com/CORE-Blockchain" target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footerText">
          Disclaimer: Nothing in this Website shall be deemed to constitute a
          prospectus of any sort or a solicitation for investment, nor does it
          in any way pertain to an offering or a solicitation of an offer to buy
          any securities in any jurisdiction.All of the information provided
          within this Website is provided “as is” and with no warranties.
          coremultichain.com makes no representations and extends no warranties
          of any type to the accuracy or completeness of any information or
          content on this Website. Like any blockchain technology, the
          acquisition of tokens is associated with a high financial risk level.
          All contributions are made at your discretion, and you are solely
          responsible before the time of contributions for determining all
          possible risks and doing your due diligence. CORE is a software
          platform ONLY. In no event shall www.coremultichain.com or its
          subcontractors be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business
          interruption) arising out of the use of this platform.
          <br />
          Note: Our team is committed to enhancing this website, and this is an
          on-going process. We will have more exciting content and include it as
          early as possible. Every great piece of technology is continuously
          evolving to unlock its full potential. We will post all stages of the
          progress on this website.
        </div>
        <div class="footer__last">
          <div class="footer__last-copy">© 2021 CORE Multi-Chain</div>
          <div class="footer__last-nav">
            <router-link to="/termsofuse">Terms</router-link>
            <router-link to="/privacy">Privacy</router-link>
            <router-link to="/bug-bounty">Request for Proposals</router-link>
            <router-link to="/guidelines">Brand Guidelines</router-link>
            <a href="https://cmcx.io/">Contribution</a>
            <a
              href="https://www.certik.org/projects/coremultichain"
              target="_blank"
              >Security Audited by CERTIK</a
            >
          </div>
          <a href="#main" v-smooth-scroll class="btnUp">
            Up
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      activeFirst: false,
      activeSucceessPopup: false,
      success: true,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: "",
      activeFooter: null,
      activeLink: 1,
      mobileMode: false,
      routes: [
        {
          id: 1,
          title: "Home",
          route: "/"
        },
        {
          id: 2,
          title: "Technology",
          route: "/technology"
        },
        {
          id: 3,
          title: "Community",
          route: "/community"
        },
        {
          id: 4,
          title: "Roadmap",
          route: "/roadmap"
        },
        {
          id: 5,
          title: "Tokenomics",
          route: "/tokenomics"
        }
      ]
    };
  },
  mounted() {
    this.mobileModeFunc();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    sendEmail(e) {
      if (this.email === "" ? "" : this.reg.test(this.email)) {
        console.log("error");
        emailjs
          .sendForm(
            "service_rujm9q4",
            "template_cchs8v6",
            e.target,
            "user_Qs2I51OEYXof09TBn8gHY",
            {
              email: this.email,
              message: this.email
            }
          )
          .then(
            result => {
              this.$store.commit("setSuccess", true);
              console.log("SUCCESS!", result.status, result.text);
            },
            error => {
              console.log("FAILED...", error);
            }
          );
        // Reset form field
        this.email = "";
      } else {
        this.success = false;
        setTimeout(() => {
          this.success = true;
        }, 5000);
      }
    },
    mobileModeFunc() {
      if (window.innerWidth >= 768) {
        this.mobileMode = false;
      } else {
        this.mobileMode = true;
      }
    },
    myEventHandler(e) {
      this.mobileModeFunc();
    },
    activeLinkFunc(id) {
      this.activeLink = id;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    openMobileFooter(id) {
      if (id === this.activeFooter) {
        this.activeFooter = null;
      } else {
        this.activeFooter = id;
      }
    }
  }
};
</script>
<style scoped>
.footer__main.start-page .footer__last-nav a {
  display: none;
}
.footer__main.start-page .footer__last-nav a:nth-child(1),
.footer__main.start-page .footer__last-nav a:nth-child(2) {
  display: inline;
}
.footer__main.start-page .footerBg {
  width: 100%;
}
.join_container.container {
  display: none;
}
.home-page ~ .footer__main .join_container.container,
.community-page ~ .footer__main .join_container.container,
.proposal-page ~ .footer__main .join_container.container {
  display: flex;
}
.footer__last-nav a {
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 25px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.footer__last-nav {
  margin-left: 90px;
}
.footer__last-copy {
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
}
.footer__last {
  display: flex;
  padding: 15px 0px;
  width: 100%;
  align-items: center;
}
.footer__up-floor {
  display: flex;
  width: 100%;
  align-items: center;
}
.error-message {
  font-size: 13px;
  color: #ff7152;
  position: absolute;
  bottom: -22px;
  left: 0px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  opacity: 0;
  pointer-events: none;
}
.input-container.error .mInput {
  border-color: #ff7152;
}
.input-container.error .error-message {
  opacity: 1;
}
.footer__second-link-container {
  display: flex;
  flex-direction: column;
}
.footer__join-description {
  font-size: 15px;
  line-height: 25px;
}
.footer__join-title span {
  color: #ff7152;
  font-size: inherit;
}
.footer__join-title {
  font-size: 30px;
  line-height: 42px;
}
.footer__join-inner > div {
  width: 50%;
}
.footer__join-inner {
  padding-top: 50px;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 3;
  padding-left: 60px;
  padding-right: 60px;
}
.footer__join-img {
  position: absolute;
  width: 100%;
  height: 130%;
  top: -15%;
  left: 0px;
  object-fit: cover;
  z-index: 1;
}
.footer__join {
  display: flex;
  height: 200px;
  width: 1070px;
  overflow: hidden;
  position: relative;
  margin-bottom: 100px;
}
.footer__join:after {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 150%;
  height: 100%;
  content: "";
  z-index: 2;
  background: rgb(0, 5, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 5, 15, 0) 0%,
    rgba(0, 5, 15, 1) 100%
  );
}
.footerText {
  padding: 50px 0px;
  font-size: 10px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.mt-30 {
  margin-top: 30px;
}
.footer__second-link {
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.footer__second-link:hover {
  color: #ff7152;
}
.footer__second-ttl {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 12px;
}
.footer__second-container-column {
  width: 33.333%;
  flex-direction: column;
  display: flex;
}
.footer__second-container {
  width: calc(100% - 330px);
  display: flex;
}
.footStep {
  display: flex;
}
.footerBg {
  position: absolute;
  top: 0px;
  right: 0px;
  width: calc(100% - 210px);
  height: 100%;
  background: #010918;
}
.btnUp:hover {
  background: #0500ff;
  border-color: #0500ff;
}
.btnUp {
  height: 40px;
  width: 40px;
  font-size: 15px;
  display: flex;
  margin-left: auto;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 16px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
footer {
  position: relative;
}
.container {
  padding-left: 300px;
  display: flex;
  height: 100%;
  flex-direction: column;
}
.footer__main.start-page .container {
  padding: 0px 135px;
}
.footer__main.start-page .btnUp {
  display: none;
}
.footerInner {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px 0px;
}
.copyright {
  font-size: 15px;
  line-height: 24px;
  opacity: 0.4;
}
.footer__up-floor-nav a {
  margin-right: 30px;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  font-size: 15px;
  text-decoration: none;
}
.footer__up-floor-nav a:hover,
.footer__up-floor-nav a.router-link-exact-active,
.footer__last-nav a:hover,
.footer__last-nav a.router-link-exact-active {
  color: #ff7152;
}
.share {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.share a {
  margin-right: 16px;
}
.share a path {
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.share a:hover path {
  fill: #ff7152;
}
.subscribe-container {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.subscribe-container .ttl {
  font-size: 15px;
  margin-right: 30px;
  opacity: 0.6;
}
.button {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  right: 15px;
  top: 0px;
}
.button input {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  cursor: pointer;
  opacity: 0;
}
.button svg {
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  cursor: pointer;
}
.button svg path {
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.button input:hover ~ svg path {
  fill: #ff7152;
}
.button input:hover ~ svg {
  transform: translateX(5px);
}
input {
  width: 288px;
  background: transparent;
  height: 48px;
  padding: 0px 20px;
  font-size: 14px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  color: #fff;
}
input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
input:focus {
  border-color: #ff7152;
}
.input-container {
  position: relative;
}
.footer__logo {
  display: flex;
  margin-right: 60px;
}
.nav {
  margin-bottom: 110px;
}
.footer__first-container {
  width: 330px;
}
.footer__second-ttl svg {
  display: none;
}
/*Laptop 1440*/
@media (max-width: 1900px) {
  .footStep {
    flex-direction: column;
  }
  .subscribe-container {
    flex-direction: column;
    align-items: baseline;
  }
  .ttl {
    margin-bottom: 13px;
  }
  .container {
    padding-left: 255px;
    flex-direction: column;
  }
  footer {
    height: auto;
  }
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
  .footer__up-floor-nav a {
    font-size: 12px;
  }
  .footer__logo {
    margin-right: 20px;
  }
  .footer__up-floor-nav a {
    margin-right: 20px;
  }
  .footer__second-link-container {
    align-items: center;
  }
  .footer__logo {
    justify-content: center;
  }
  .share {
    justify-content: center;
  }
  .share a {
    margin: 0px 8px;
  }
  .footer__join {
    height: 170px;
  }
  .footer__join-inner {
    padding: 30px;
  }
  .footer__join-title {
    font-size: 20px;
    line-height: 32px;
  }
  .footer__join {
    width: 100%;
  }
  .container,
  .footerInner {
    flex-direction: column;
    align-items: center;
  }
  .nav {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    flex-direction: column;
  }
  .nav a {
    margin-right: 0px;
    margin-top: 15px;
  }
  .copyright {
    margin-right: 0px;
    text-align: center;
    margin-bottom: 40px;
  }
  .subscribe-container {
    margin-left: 0px;
  }
  .footer__second-container {
    width: 100%;
  }
  .footer__second-container-column {
    align-items: center;
  }
}
/*Ipad 768*/
@media (max-width: 1023px) {
  .footer__last-nav a {
    margin: 0px 12px;
  }
  .footer__last-nav {
    margin: 30px 0px;
  }
  .btnUp {
    margin-right: auto;
    margin-top: 30px;
  }
  .footer__last {
    flex-direction: column-reverse;
  }
  .footer__up-floor-nav {
    margin: 30px 0px;
  }
  .share {
    margin-right: auto;
  }
  .footer__up-floor {
    flex-direction: column;
  }
  .footer__join {
    margin-bottom: 50px;
    margin-left: -80px;
  }
  .footer__join:after {
    width: 50%;
  }
  .subscribe-container {
    margin-top: 15px;
  }
  .footer__join-inner > div {
    width: 100%;
  }
  .footer__join-inner {
    flex-direction: column;
  }
  .footer__main.start-page .container {
    padding: 0px 50px;
  }
}
/*Mobile 320*/
@media (max-width: 767px) {
  .footer__up-floor-nav a {
    text-align: center;
    font-size: 15px;
    margin-right: 0px;
    margin: 10px 0px;
  }
  .footer__up-floor-nav {
    flex-direction: column;
    display: flex;
  }
  .footer__second-ttl {
    display: flex;
    align-items: center;
  }
  .footer__second-ttl svg {
    display: flex;
    margin-left: 10px;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .footer__second-ttl.active svg {
    transform: rotate(180deg);
  }
  .footer__join {
    margin-bottom: 30px;
    margin-left: 15px;
    height: 205px;
  }
  .container {
    padding-left: 0px;
  }
  .copyright {
    margin-bottom: 0px;
  }
  .footer__second-ttl {
    margin-top: 30px;
  }
  .footer__second-container-column {
    width: 100%;
  }
  .footer__second-container {
    flex-direction: column;
  }
  footer .container {
    padding-left: 15px;
  }
  .footerBg {
    width: 100%;
  }
  .footer__join-inner {
    padding: 20px;
  }
  input {
    width: 250px;
  }
  .footer__join-inner > div {
    width: 100%;
  }
  .footer__last-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .footer__main.start-page .container {
    padding: 0px 15px;
  }
}
</style>
