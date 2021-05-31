<template>
  <section class="container">
    <div class="rewards__container">
      <div class="rewards_head" data-aos="fade-up">
        <h2 class="font-51">Rewards</h2>
      </div>

      <div class="rewards__steps" data-aos="fade-up">
        <div class="rewards__step">
          <div class="rewards__steps-ttl font-51">First</div>
          <div class="rewards__steps-desc">Submit suggestions</div>
        </div>
        <div class="rewards__step">
          <div class="rewards__steps-ttl font-51">Then</div>
          <div class="rewards__steps-desc">Get rewarded</div>
        </div>
      </div>

      <div class="rewards__line" data-aos="fade-up">
        <div class="line-circle"></div>
        <div class="line-circle"></div>
      </div>

      <div class="rewards__desc" data-aos="fade-up">
        <span>
          The minimum reward for eligible issues is the equivalent of 10 USDT.
        </span>
        <span>
          In case of many hackers finding the same bug, the first who submitted
          gets the rewards.
        </span>
      </div>

      <div class="rewards__range" data-aos="fade-up">
        <div class="range-ttl">
          Rewards Range
        </div>
        <div class="rewards__table">
          <div class="tr tr-head">
            <div class="td">Bugs</div>
            <div class="td">Low risk</div>
            <div class="td">Medium risk</div>
            <div class="td">High risk</div>
          </div>
          <div class="tr tr-body">
            <div class="td">10-50 USDT</div>
            <div class="td">50-200 USDT</div>
            <div class="td">200-500 USDT</div>
            <div class="td">500-1000 USDT</div>
          </div>
        </div>
      </div>
    </div>
    <li></li>
  </section>
</template>

<style scoped>
.rewards__container {
  margin-top: 100px;
  padding-top: 100px;
  /* padding-right: 120px; */
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
}
.rewards_head h2 {
  margin-bottom: 32px;
}
.rewards__steps-ttl {
  color: #ff7152;
}
.rewards__steps {
  display: flex;
}
.rewards__step:nth-child(odd) {
  width: 68.2%;
}
.rewards__step:nth-child(even) {
  width: 31.8%;
}
.rewards__line {
  position: relative;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(155, 153, 255, 0) 0%,
    rgba(155, 153, 255, 1) 100%
  );
  margin-top: 32px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
  -moz-box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
  box-shadow: 0px 0px 12px 0px rgba(155, 153, 255, 0.4);
}
.line-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0500ff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.line-circle:nth-child(2) {
  left: 68.2%;
}
.rewards__desc {
  margin-top: 88px;
  font-size: 20px;
  line-height: 30px;
}
.rewards__desc span {
  display: block;
  font-size: inherit;
  font-family: inherit;
}
.rewards__desc span:first-child {
  margin-bottom: 8px;
}

.rewards__range {
  margin-top: 80px;
}
.range-ttl {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 32px;
}
.tr {
  display: flex;
}
.tr-head {
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.tr-body {
  padding-top: 16px;
}
.td {
  text-transform: uppercase;
}
.tr-head .td {
  font-size: 12px;
  opacity: 0.5;
}
.tr-body .td {
  font-size: 14px;
}
.td:nth-child(1) {
  width: 18.28%;
}
.td:nth-child(2) {
  width: 21.22%;
}
.td:nth-child(3) {
  width: 23.21%;
}
.td:nth-child(4) {
  width: 37.29%;
}
@media (max-width: 1300px) {
  .rewards__container {
    margin-top: 70px;
    padding-top: 70px;
  }
}
@media (max-width: 1023px) {
  .rewards__container {
    margin-top: 50px;
    padding-top: 50px;
  }
  .rewards__desc {
    font-size: 15px;
    line-height: 24px;
    margin-top: 70px;
  }
}

@media (max-width: 767px) {
  .rewards__range {
    margin-top: 50px;
  }
  .range-ttl {
    margin-bottom: 20px;
  }
  .rewards__table {
    display: flex;
  }
  .tr-head,
  .tr-body {
    flex-direction: column;
    width: 50%;
    padding-top: 0;
    padding-bottom: 0;
  }
  .tr-head {
    border-bottom: none;
  }
  .td {
    line-height: 20px;
    padding: 15px 0px;
  }
  .td:nth-child(1),
  .td:nth-child(2),
  .td:nth-child(3),
  .td:nth-child(4) {
    width: 100%;
  }
  .tr-head .td {
    font-size: 14px;
  }
}
</style>
