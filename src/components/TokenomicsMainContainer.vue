<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="token-bg__outer">
        <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/tokenomics_bg.jpg`)" alt="" class="token-bg">
      </div>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>Tokenomics</h1>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__description-inner">
          <div class="bottom__description">
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Name</div>
                <div class="bottom__description-text">CORE Multi-Chain — <br>
                  Cryptographic Object Resources Engine</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Decimals</div>
                <div class="bottom__description-text">18</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Native Crypto Symbol</div>
                <div class="bottom__description-text">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#FF7152"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42413 8.63933C7.98389 7.8985 8.71722 7.30665 9.55953 6.91592C10.4019 6.52519 11.3273 6.34756 12.2544 6.39867C13.1816 6.44977 14.0819 6.72805 14.8762 7.209C15.6704 7.68994 16.3343 8.3588 16.8092 9.15667L17.2194 8.92877L17.9031 8.52766C17.2898 7.49572 16.4186 6.64099 15.3752 6.04736C14.3318 5.45373 13.1519 5.1416 11.9514 5.1416C10.751 5.1416 9.57112 5.45373 8.52769 6.04736C7.48426 6.64099 6.61311 7.49572 5.99973 8.52766L5.66016 9.06095L6.20257 9.3823L8.30156 10.6289C7.95824 11.4924 7.93434 12.45 8.23416 13.3295C8.53399 14.209 9.13785 14.9526 9.9371 15.4266C10.7363 15.9005 11.6785 16.0737 12.594 15.9149C13.5096 15.756 14.3383 15.2757 14.9313 14.5603L16.4605 15.4719C15.9006 16.2134 15.1668 16.8057 14.3239 17.1965C13.4809 17.5873 12.5548 17.7646 11.6271 17.7128C10.6994 17.661 9.79871 17.3817 9.00451 16.8994C8.21032 16.4172 7.54702 15.7469 7.07316 14.9477L5.99062 15.5881C6.604 16.6201 7.47515 17.4748 8.51858 18.0684C9.562 18.662 10.7418 18.9742 11.9423 18.9742C13.1428 18.9742 14.3226 18.662 15.3661 18.0684C16.4095 17.4748 17.2806 16.6201 17.894 15.5881L18.2177 15.0457L17.6752 14.7244L15.9523 13.7011L14.4664 12.8442C14.2855 13.42 13.913 13.9166 13.4108 14.2514C12.9086 14.5863 12.307 14.7392 11.7059 14.6848C11.1048 14.6304 10.5404 14.3719 10.1065 13.9523C9.67257 13.5328 9.39531 12.9774 9.32076 12.3784C9.2462 11.7795 9.37884 11.173 9.69663 10.6599C10.0144 10.1468 10.4982 9.75781 11.0677 9.5577C11.6371 9.35758 12.2579 9.35834 12.8268 9.55985C13.3958 9.76136 13.8786 10.1515 14.1952 10.6654L15.2868 10.0364C14.9661 9.50448 14.5231 9.05682 13.9945 8.73063C13.4659 8.40445 12.8671 8.20916 12.2479 8.16102C11.6287 8.11287 11.0069 8.21325 10.4343 8.45381C9.86163 8.69438 9.35471 9.06817 8.95564 9.54411L7.42413 8.63933Z" fill="white"/>
                  </svg>
                  CMCX
                </div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Initial Price</div>
                <div class="bottom__description-text">0.005 USDT</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Consensus Protocol</div>
                <div class="bottom__description-text">Practical Proof of Stake</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Current Price:</div>
                <div class="bottom__description-text">0.0062 USDT</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Total Supply (Genesis)</div>
                <div class="bottom__description-text">20,000,000,000 CMCX</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Role of Token</div>
                <div class="bottom__description-text">Utility</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Pre-mined Reserve</div>
                <div class="bottom__description-text">6,000,000,000 CMCX</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Official Website</div>
                <div class="bottom__description-text">coremultichain.com</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Protocols</div>
                <a href="https://etherscan.io/token/0x5b685863494c33f344081f75e5430c260c224a32" target="_blank" class="protocol__link">
                  <svg class="protocol__link-main-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#627EEA"/>
                    <path d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z" fill="white" fill-opacity="0.602"/>
                    <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white"/>
                    <path d="M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z" fill="white" fill-opacity="0.602"/>
                    <path d="M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z" fill="white"/>
                    <path d="M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z" fill="white" fill-opacity="0.2"/>
                    <path d="M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z" fill="white" fill-opacity="0.602"/>
                  </svg>
                  <svg class="protocol__link-sec-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2" clip-path="url(#clip0)">
                      <path d="M4.99665 11.4073C4.99668 11.2731 5.02321 11.1402 5.07473 11.0162C5.12625 10.8923 5.20174 10.7798 5.29687 10.6851C5.392 10.5905 5.50489 10.5155 5.62906 10.4646C5.75323 10.4137 5.88624 10.3878 6.02044 10.3884L7.71777 10.394C7.9884 10.394 8.24794 10.5015 8.43931 10.6928C8.63068 10.8842 8.73818 11.1438 8.73818 11.4144V17.8329C8.92935 17.7762 9.174 17.7158 9.44322 17.6524C9.62974 17.6085 9.79597 17.5029 9.91495 17.3527C10.0339 17.2025 10.0987 17.0165 10.0987 16.8249V8.86383C10.0987 8.59318 10.2062 8.33362 10.3976 8.14222C10.589 7.95082 10.8485 7.84327 11.1192 7.84322H12.8216C13.0923 7.84327 13.3518 7.95082 13.5432 8.14222C13.7346 8.33362 13.8421 8.59318 13.8421 8.86383V16.253C13.8421 16.253 14.268 16.0807 14.6826 15.9055C14.8367 15.8404 14.9681 15.7313 15.0606 15.5919C15.1531 15.4525 15.2025 15.2889 15.2026 15.1216V6.31269C15.2026 6.04209 15.3101 5.78258 15.5014 5.59122C15.6927 5.39986 15.9522 5.29233 16.2228 5.29227H17.9235C18.194 5.29254 18.4533 5.40016 18.6444 5.5915C18.8356 5.78284 18.943 6.04223 18.943 6.31269V13.5666C20.4174 12.498 21.9117 11.2127 23.0975 9.66733C23.2696 9.44301 23.3834 9.17959 23.4289 8.90057C23.4744 8.62155 23.4501 8.33561 23.3582 8.06826C22.8093 6.48903 21.9368 5.04177 20.7964 3.81911C19.6561 2.59644 18.273 1.62529 16.7358 0.967809C15.1986 0.310323 13.5411 -0.0190231 11.8693 0.00084856C10.1975 0.0207202 8.54824 0.389371 7.02709 1.08321C5.50595 1.77705 4.14639 2.7808 3.03543 4.03022C1.92447 5.27965 1.08656 6.74723 0.575331 8.33907C0.0641012 9.93091 -0.109193 11.6119 0.0665362 13.2746C0.242265 14.9373 0.763149 16.5449 1.59585 17.9947C1.74093 18.2448 1.95437 18.4483 2.2111 18.5813C2.46783 18.7143 2.75718 18.7713 3.04516 18.7455C3.36688 18.7172 3.76744 18.6772 4.24367 18.6213C4.45094 18.5977 4.64229 18.4987 4.78129 18.3432C4.92029 18.1876 4.99723 17.9864 4.99745 17.7778V11.4073" fill="white"/>
                      <path d="M4.96033 21.7007C6.75298 23.0049 8.87147 23.7877 11.0814 23.9625C13.2913 24.1374 15.5066 23.6974 17.482 22.6915C19.4574 21.6855 21.1161 20.1526 22.2744 18.2624C23.4327 16.3723 24.0456 14.1985 24.0452 11.9817C24.0452 11.7044 24.0323 11.4314 24.0139 11.1592C19.6234 17.7074 11.5167 20.7687 4.96033 21.7007Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="protocol__link-txt">ERC-20</div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="12" height="12" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://tronscan.org/#/token20/TKg1nGjtWYDcf1HNTSNQtwGwNAuTxd1X2A" target="_blank" class="protocol__link">
                  <svg class="protocol__link-main-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FF0029"/>
                    <path d="M18.5588 9.19943C17.9595 8.77418 17.3182 8.32043 16.6912 7.87043C16.677 7.85993 16.6635 7.84943 16.6462 7.83893C16.5728 7.77859 16.4896 7.73117 16.4003 7.69868L16.3927 7.69493C14.7151 7.28324 13.0378 6.86974 11.361 6.45443L6.873 5.34668L6.75525 5.31518C6.62025 5.27693 6.46425 5.23418 6.29775 5.25518C6.25214 5.26216 6.20862 5.27906 6.17025 5.30468L6.12825 5.33993C6.07566 5.39385 6.03547 5.45861 6.0105 5.52968L6 5.55818V5.71943L6.0075 5.74418C6.9525 8.43293 7.923 11.1607 8.859 13.7999C9.57975 15.8324 10.329 17.9369 11.0595 20.0039C11.1045 20.1442 11.2327 20.2364 11.3925 20.2499H11.427C11.4968 20.2517 11.5658 20.2347 11.6268 20.2007C11.6877 20.1666 11.7384 20.1168 11.7735 20.0564L14.5185 15.9967C15.1867 15.0089 15.8558 14.0182 16.5248 13.0304L17.346 11.8139C17.796 11.1464 18.261 10.4572 18.7222 9.78593L18.7463 9.75143V9.70868C18.7568 9.58568 18.7598 9.33293 18.5588 9.19868V9.19943ZM15.3428 10.6792C14.6978 11.0197 14.04 11.3714 13.3777 11.7194L14.5358 10.4609C15.0173 9.93368 15.5198 9.38843 16.0118 8.85443L16.0223 8.84393C16.0635 8.78768 16.116 8.73518 16.1715 8.67893C16.209 8.64068 16.251 8.60168 16.2892 8.55593C16.5457 8.73593 16.8053 8.91818 17.055 9.09743C17.235 9.22718 17.4188 9.35768 17.6063 9.48743C16.8491 9.87967 16.0946 10.2769 15.3428 10.6792ZM13.6868 10.5104C13.191 11.0549 12.678 11.6137 12.1688 12.1657C11.1804 10.9496 10.1892 9.7358 9.195 8.52443L7.86075 6.89693L7.85775 6.89318C7.75725 6.77768 7.65975 6.65093 7.563 6.53168C7.50075 6.45068 7.43475 6.37343 7.36875 6.29243C7.77075 6.39743 8.1765 6.49643 8.57475 6.59093C8.925 6.67568 9.28875 6.76343 9.64575 6.85493L15.6795 8.34143C15.0105 9.06593 14.3378 9.80018 13.6868 10.5104ZM11.943 17.3609C11.9812 16.9919 12.0232 16.6124 12.0577 16.2397C12.0892 15.9404 12.12 15.6352 12.1515 15.3434C12.1995 14.8754 12.252 14.3909 12.294 13.9162L12.3038 13.8322C12.3383 13.5292 12.3727 13.2172 12.3937 12.9037C12.4341 12.8809 12.476 12.8608 12.519 12.8437C12.5707 12.8197 12.6225 12.7987 12.6743 12.7672C13.4747 12.3405 14.2765 11.9163 15.0795 11.4944C15.8805 11.0729 16.7017 10.6364 17.5162 10.2044C16.7772 11.2899 16.0412 12.3774 15.3082 13.4669C14.688 14.3834 14.0505 15.3292 13.416 16.2607C13.167 16.6334 12.9068 17.0129 12.6608 17.3782C12.3833 17.7862 12.099 18.2039 11.8222 18.6232C11.8567 18.2009 11.898 17.7757 11.943 17.3609ZM7.113 7.12193C7.068 6.99518 7.0185 6.86543 6.97725 6.74243C7.91325 7.88843 8.85525 9.04118 9.774 10.1587C10.2487 10.7384 10.7235 11.3152 11.1982 11.8987C11.292 12.0074 11.3857 12.1237 11.4757 12.2362C11.5935 12.3802 11.7113 12.5317 11.8395 12.6757C11.7975 13.0372 11.763 13.4032 11.7248 13.7542C11.7008 14.0002 11.6767 14.2469 11.649 14.4967V14.4997C11.6385 14.6572 11.6175 14.8162 11.6003 14.9707L11.5208 15.6704L11.517 15.6944C11.4548 16.4047 11.3783 17.1217 11.3055 17.8177C11.2748 18.1057 11.247 18.4012 11.2155 18.6967C11.1983 18.6442 11.178 18.5909 11.16 18.5414C11.1072 18.3982 11.0564 18.2542 11.0078 18.1094L10.6365 17.0654L7.11225 7.12193" fill="white"/>
                  </svg>
                  <svg class="protocol__link-sec-svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect opacity="0.2" width="24" height="24" fill="url(#pattern0)"/>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0" transform="scale(0.0416667)"/>
                      </pattern>
                      <image id="image0" width="24" height="24" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA1LTIyVDAyOjI0KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNS0yMlQwMjoyNDoyMSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0yMlQwMjoyNDoyMSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzY5YTI0Ni02NmVhLThmNGEtYWJmNy00ZjBjNzc4ZWUxMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc2OWEyNDYtNjZlYS04ZjRhLWFiZjctNGYwYzc3OGVlMTAzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDc2OWEyNDYtNjZlYS04ZjRhLWFiZjctNGYwYzc3OGVlMTAzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzY5YTI0Ni02NmVhLThmNGEtYWJmNy00ZjBjNzc4ZWUxMDMiIHN0RXZ0OndoZW49IjIwMjEtMDUtMjJUMDI6MjQrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dVIKQAAACJ0lEQVRIibWWTWwNYRSGn6lqhV3r52rRxM6iCEkj9RtqUQsrsWBThESIqqS6sbC3tdGEukFDI1ZIWPkLsUFomoakGgtdIWrRtBKPxTdN5o651x3SNzmLOXO+8853vvecbyKVuUTNnGavgiAC2oCrQDfQmJtBzbKCelQdsxQz6pC6Xa0rs7bE0o4OtV/97t8xrB5TV5dJvkLtjdRmoBM4BbTmLgFMAXeAIvAU2ArsB9YA9yP1C9DwD4mzMAE8BAaBx8A06g/1sjpZRVmy8Et9q55RF6fKVIc6oS5QV6nH1Xc5Eg+qW9SFqcT1arf6JkmQDFirFtWpjMSj8dc2ptbMUzepN9WROKZQjmDWGtQT6kf1nrorI2apQU0v1dsGJZbItBLBrBXVDYnnSN0Z+1+pfWpLxrr22pwqKQBHgN3AOHAlVksSTcBBYC8wnoegH6gHLgEHgM+p921AH9ACXItJPuUp0b64NEn/crXHoLwhtV2tScbk2cEYYLyL9cBJQuffALYB3xKxtfGODuUhKAA9QBcwQijZM+BnIqaBUL7DwHugWAvMAOcIs+RDBYLzwF1gR+pr64HNhPmzDngAdABfAVCXGDr4kXpL7YybJn0GG1O+RepZ9Yk6oO7xz44uGdeR2qZeVF+rF9SVqT6Yb7gLiob506s2VRJIZPad3EzQehcwCSwDXhAOcxgYAJ4D0xVPDcoSJNEKnAZGgeuEkVw1qiH4L8z5X8VvmbhmjKLkb8oAAAAASUVORK5CYII="/>
                    </defs>
                  </svg>
                  <div class="protocol__link-txt">TRC-20</div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="12" height="12" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://bscscan.com/token/0xb2343143f814639c9b1f42961c698247171df34a" target="_blank" class="protocol__link">
                  <svg class="protocol__link-main-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F3BA2F"/>
                    <path d="M9.087 10.803L12 7.89L14.9145 10.8045L16.6095 9.1095L12 4.5L7.392 9.108L9.087 10.803ZM4.5 12L6.195 10.305L7.89 12L6.195 13.695L4.5 12ZM9.087 13.197L12 16.11L14.9145 13.1955L16.6095 14.8898L12 19.5L7.392 14.892L7.38975 14.8898L9.087 13.197ZM16.11 12L17.805 10.305L19.5 12L17.805 13.695L16.11 12ZM13.719 11.9985H13.7205V12L12 13.7205L10.2817 12.003L10.2787 12L10.2817 11.9977L10.5825 11.6962L10.7288 11.55L12 10.2795L13.7197 11.9992L13.719 11.9985Z" fill="white"/>
                  </svg>
                  <svg class="protocol__link-sec-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <path d="M4.99665 11.4073C4.99668 11.2731 5.02321 11.1402 5.07473 11.0162C5.12625 10.8923 5.20174 10.7798 5.29687 10.6851C5.392 10.5905 5.50489 10.5155 5.62906 10.4646C5.75323 10.4137 5.88624 10.3878 6.02044 10.3884L7.71777 10.394C7.9884 10.394 8.24794 10.5015 8.43931 10.6928C8.63068 10.8842 8.73818 11.1438 8.73818 11.4144V17.8329C8.92935 17.7762 9.174 17.7158 9.44322 17.6524C9.62974 17.6085 9.79597 17.5029 9.91495 17.3527C10.0339 17.2025 10.0987 17.0165 10.0987 16.8249V8.86383C10.0987 8.59318 10.2062 8.33362 10.3976 8.14222C10.589 7.95082 10.8485 7.84327 11.1192 7.84322H12.8216C13.0923 7.84327 13.3518 7.95082 13.5432 8.14222C13.7346 8.33362 13.8421 8.59318 13.8421 8.86383V16.253C13.8421 16.253 14.268 16.0807 14.6826 15.9055C14.8367 15.8404 14.9681 15.7313 15.0606 15.5919C15.1531 15.4525 15.2025 15.2889 15.2026 15.1216V6.31269C15.2026 6.04209 15.3101 5.78258 15.5014 5.59122C15.6927 5.39986 15.9522 5.29233 16.2228 5.29227H17.9235C18.194 5.29254 18.4533 5.40016 18.6444 5.5915C18.8356 5.78284 18.943 6.04223 18.943 6.31269V13.5666C20.4174 12.498 21.9117 11.2127 23.0975 9.66733C23.2696 9.44301 23.3834 9.17959 23.4289 8.90057C23.4744 8.62155 23.4501 8.33561 23.3582 8.06826C22.8093 6.48903 21.9368 5.04177 20.7964 3.81911C19.6561 2.59644 18.273 1.62529 16.7358 0.967809C15.1986 0.310323 13.5411 -0.0190231 11.8693 0.00084856C10.1975 0.0207202 8.54824 0.389371 7.02709 1.08321C5.50595 1.77705 4.14639 2.7808 3.03543 4.03022C1.92447 5.27965 1.08656 6.74723 0.575331 8.33907C0.0641012 9.93091 -0.109193 11.6119 0.0665362 13.2746C0.242265 14.9373 0.763149 16.5449 1.59585 17.9947C1.74093 18.2448 1.95437 18.4483 2.2111 18.5813C2.46783 18.7143 2.75718 18.7713 3.04516 18.7455C3.36688 18.7172 3.76744 18.6772 4.24367 18.6213C4.45094 18.5977 4.64229 18.4987 4.78129 18.3432C4.92029 18.1876 4.99723 17.9864 4.99745 17.7778V11.4073" fill="white"/>
                      <path d="M4.96033 21.7007C6.75298 23.0049 8.87147 23.7877 11.0814 23.9625C13.2913 24.1374 15.5066 23.6974 17.482 22.6915C19.4574 21.6855 21.1161 20.1526 22.2744 18.2624C23.4327 16.3723 24.0456 14.1985 24.0452 11.9817C24.0452 11.7044 24.0323 11.4314 24.0139 11.1592C19.6234 17.7074 11.5167 20.7687 4.96033 21.7007Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="protocol__link-txt">BEP-20</div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path d="M10.5 2C10.5 1.72386 10.2761 1.5 10 1.5L5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5L9.5 2.5L9.5 6.5C9.5 6.77614 9.72386 7 10 7C10.2761 7 10.5 6.77614 10.5 6.5L10.5 2ZM1.35355 11.3536L10.3536 2.35355L9.64645 1.64645L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="12" height="12" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from '@/components/TopHead.vue'
export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  components: {
    TopHead
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 100)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .protocol__link-txt::after{
    bottom: -2px;
    height: 1px;
    width: 100%;
    left: 0px;
    background: #0500FF;
    content: '';
    position: absolute;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .protocol__link-txt{
    position: relative;
    margin-right: 6px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .protocol__link:hover .protocol__link-txt::after{
    transform: scale(0);
  }
  .protocol__link:hover .protocol__link-txt{
    color: #FF7152;
  }
  .protocol__link{
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
  }
  .protocol__link-main-svg{
    position: relative;
    z-index: 2;
    margin-right: 30px;
  }
  .protocol__link-sec-svg{
    position: absolute;
    left: 0px;
    z-index: 1;
    transform: translateX(18px);
  }
  .bottom__description-item:nth-child(2){
    padding-left: 100px;
  }
  .bottom__description-text{
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  .bottom__description-text svg{
    margin-right: 10px;
  }
  .bottom__description-ttl{
    font-size: 15px;
    color: #FF7152;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .bottom__description-item{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .bottom__description-floor{
    display: flex;
    margin-bottom: 30px;
  }
  .bottom__description{
    position: relative;
    z-index: 3;
    width: 650px;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 50px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .bottom__description{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  .bottom__description-inner{
    height: 100%;
    width: calc(100% + 210px);
    display: flex;
    justify-content: center;
  }
  .token-bg{
    width: 100%;
    height: 120%;
  }
  .token-bg__outer{
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% - 200px);
    z-index: 1;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .token-bg__outer:after{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(0deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .token-bg__outer:before{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(180deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .animHead .token-bg__outer{
    opacity: 1;
    transform: translateY(0px);
  }
  .container{
    position: relative;
    z-index: 20;
    height: 100%;
  }
  .main-video iframe{
    transform: translateY(-40%);
  }
  .main-container__description p{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .main-container__description .frst-txt{
    color: rgba(255,255,255,.7);
    font-size: 15px;
    line-height: 24px;
    margin-top: auto;
  }
  .main-container__description .scnd-txt{
    color: rgba(255,255,255,1);
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  .animHead p{
    transform: translateY(0px);
    opacity: .8;
    transition-delay: .6s;
  }
  .main-container__description h1{
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
  }
  .left{
    width: 50%;
    position: relative;
    z-index: 5;
  }
  .bottom{
    position: relative;
    padding-top: 230px;
    display: flex;
    width: 100%;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  #main{
    position: relative;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.05);
    background: #00050F;
    z-index: 2;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    #main{
      min-height: 800px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .bottom__description-item:nth-child(2) {
      padding-left: 40px;
    }
    .bottom__description{
      width: 450px;
    }
    .main-container__description{
      padding-left: 25px;
    }
    .main-container__description h1{
      font-size: 50px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .bottom{
      padding-top: 100px;
    }
    .bottom__description-text,.bottom__description-ttl{
      font-size: 12px;
      line-height: 20px;
    }
    .bottom__description-item{
      width: 45%;
    }
    .bottom__description-floor {
      margin-bottom: 15px;
    }
    .main-container__description{
      padding-left: 0px;
    }
    .bottom__description{
      width: 100%;
      padding-left: 40px;
      margin-bottom: 20px;
    }
    .main-container__description .frst-txt{
      font-size: 12px;
      line-height: 22px;
    }
    .main-container__description .scnd-txt{
      font-size: 16px;
      line-height: 26px;
      margin-top: 30px;
    }
    .right {
      padding-bottom: 60px;
      padding-right: 30px;
    }
    .main-video__container{
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
    .scroll-down{
      display: none;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .protocol__link-main-svg{
      margin-right: 25px;
    }
    .protocol__link-txt{
      font-size: 10px;
    }
    .token-bg__outer{
      width: 100%;
    }
    .left{
      width: 100%;
    }
    .main-container__description{
      flex-direction: column;
    }
    .download-container__mobile-inner a{
      margin: 0px 15px;
    }
    .download-container__mobile .ttl{
      font-size: 16px;
      color:  #fff;
      opacity: .6;
      margin-bottom: 25px;
    }
    .main-container__description{
      padding: 0px 15px;
      text-align: center;
      bottom: 90px;
    }
    .main-container__description h1{
      margin-top: 115px;
      margin-bottom: 50px;
      text-align: left;
    }
    .bottom__description-text, .bottom__description-ttl{
      font-size: 10px;
      line-height: 15px;
    }
    .bottom__description-floor {
      margin-bottom: 10px;
    }
    .bottom__description-inner{
      width: 100%;
    }
    .bottom__description{
      padding-left: 15px;
    }
    .token-bg{
      height: 100%;
      object-fit: cover;
    }
    .main-container__description{
      padding: 0px;
    }
    #main{
      min-height: 600px;
    }
  }
</style>
