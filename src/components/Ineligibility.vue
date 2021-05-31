<template>
  <section class="container">
    <div class="bg_img">
      <img src="../assets/img/bg-img.png" alt="" v-prlx="{ speed: 0.1 }" />
      <div class="img_layer"></div>
    </div>
    <div class="ineligibility__container">
      <div class="ineligibility__list-first">
        <div class="ineligibility_head" data-aos="fade-up">
          <h2 class="font-51">Ineligibility</h2>
          <h3>Reports will be closed as out of scope:</h3>
        </div>

        <ul class="ineligibility_list" data-aos="fade-up">
          <li class="ineligibility__list-item">
            Theoretical vulnerabilities without POC
          </li>
          <li class="ineligibility__list-item">
            Any Dos/DDoS activities
          </li>
          <li class="ineligibility__list-item">
            Invalid or missing SPF records (incomplete or missing
            SPF/DKIM/DMARC)
          </li>
          <li class="ineligibility__list-item">
            Clickjacking/UI with minimal security impact
          </li>
          <li class="ineligibility__list-item">
            Phishing
          </li>
          <li class="ineligibility__list-item">Tab-nabbing</li>
          <li class="ineligibility__list-item">Content spoofing</li>
          <li class="ineligibility__list-item">Cache-control related issues</li>
          <li class="ineligibility__list-item">
            Exposure of internal IP address or domains
          </li>
          <li class="ineligibility__list-item">
            Vulnerabilities affecting outdated or unpatched browsers
          </li>
          <li class="ineligibility__list-item">
            Bugs already known or already reported by someone else (reward goes
            to first reporter)
          </li>
          <li class="ineligibility__list-item">
            Issues that aren't reproducible
          </li>
          <li class="ineligibility__list-item">
            Email/SMS bomb
          </li>
        </ul>
      </div>

      <div class="ineligibility__list-sec">
        <div class="ineligibility_head" data-aos="fade-up">
          <h2 class="font-51">Actions to avoid</h2>
        </div>

        <ul class="ineligibility_list" data-aos="fade-up">
          <li class="ineligibility__list-item">
            Testing on other users accounts
          </li>
          <li class="ineligibility__list-item">
            Automated testing using tools such as scanners
          </li>
          <li class="ineligibility__list-item">
            Excessive request attempts that affects the availability of our
            services to all users
          </li>
          <li class="ineligibility__list-item">
            Destruction of data
          </li>
          <li class="ineligibility__list-item">
            Disrupt of services
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ineligibility__container {
  margin-top: 140px;
  padding-right: 120px;
  z-index: 2;
}
.ineligibility_head {
  margin-bottom: 24px;
}
.ineligibility__list-first .ineligibility_head h2 {
  margin-bottom: 32px;
}
.ineligibility_head h3 {
  font-size: 20px;
  line-height: 30px;
}
.ineligibility_list {
  padding-left: 0;
}
.ineligibility_list li {
  position: relative;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 10px;
  padding-left: 24px;
  counter-increment: counter;
  opacity: 0.5;
}
.ineligibility_list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0500ff;
}
.ineligibility__list-sec {
  margin-top: 140px;
}
.bg_img {
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100vw;
  z-index: 1;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.bg_img img {
  width: 100%;
  height: 120%;
}
.bg_img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 5, 15, 0) 0%,
    rgba(0, 5, 15, 1) 100%
  );
}
.bg_img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 5, 15, 0) 0%,
    rgba(0, 5, 15, 1) 100%
  );
  z-index: 2;
}
@media (max-width: 1300px) {
  .ineligibility__container {
    padding-right: 80px;
  }
  .ineligibility__container,
  .ineligibility__list-sec {
    margin-top: 100px;
  }
}
@media (max-width: 1023px) {
  .ineligibility__container {
    padding-right: 0px;
  }
  .ineligibility__container,
  .ineligibility__list-sec {
    margin-top: 70px;
  }
}
@media (max-width: 767px) {
  .ineligibility__container,
  .ineligibility__list-sec {
    margin-top: 50px;
  }
  .ineligibility_head h3 {
    font-size: 16px;
    line-height: 25px;
  }
}
</style>
