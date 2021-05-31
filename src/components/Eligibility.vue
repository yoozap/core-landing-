<template>
  <section class="container">
    <div class="eligibility__container">
      <div class="eligibility_head" data-aos="fade-up">
        <h2 class="font-51">Eligibility</h2>
        <div class="eligibility_description">
          Vulnerabilities that typically would be eligible include,but
          notlimited to:
        </div>
      </div>
      <ol class="eligibility_list" data-aos="fade-up">
        <li class="eligibility__list-item">
          Serious vulnerabilities occurring in the production environment
        </li>
        <li class="eligibility__list-item">
          Vulnerabilities that can cause a loss of user funds/assets remotely
        </li>
        <li class="eligibility__list-item">Privilege Escalation</li>
        <li class="eligibility__list-item">Code/SQL Injection</li>
        <li class="eligibility__list-item">
          Cross-Site Request Forgery (CSRF)
        </li>
        <li class="eligibility__list-item">Cross-Site Scripting (XSS)</li>
        <li class="eligibility__list-item">Remote Code Execution</li>
        <li class="eligibility__list-item">Authentication Bypass</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.eligibility__container {
  margin-top: 140px;
  padding-right: 120px;
}
.eligibility_head {
  display: flex;
}
.eligibility_head h2 {
  width: 54%;
}
.eligibility_description {
  width: 46%;
  line-height: 24px;
  max-width: 416px;
  padding-top: 33px;
  opacity: 0.5;
}
.eligibility_list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 100px;
}
.eligibility_list li {
  position: relative;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
  padding-left: 26px;
  counter-increment: counter;
}
.eligibility_list li:nth-last-child(-n + 2) {
  margin-bottom: 0;
}
.eligibility_list li:nth-child(odd) {
  width: 54%;
  padding-right: 100px;
}
.eligibility_list li:nth-child(even) {
  width: 46%;
}
.eligibility_list li::before {
  content: counter(counter) ".";
  position: absolute;
  left: 0;
  color: #ff7152;
}
@media (max-width: 1300px) {
  .eligibility__container {
    margin-top: 100px;
    padding-right: 80px;
  }
  .eligibility_description {
    padding-top: 0;
  }
  .eligibility_list {
    margin-top: 70px;
  }
  .eligibility_list li:nth-child(odd) {
    padding-right: 70px;
  }
}
@media (max-width: 1023px) {
  .eligibility__container {
    margin-top: 70px;
    padding-right: 0;
  }
  .eligibility_list {
    margin-top: 50px;
  }
  .eligibility_list li {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 25px;
  }
  .eligibility_list li:nth-child(odd) {
    padding-right: 40px;
  }
}

@media (max-width: 767px) {
  .eligibility_head {
    flex-direction: column;
  }
  .eligibility_head h2,
  .eligibility_description,
  .eligibility_list li:nth-child(even),
  .eligibility_list li:nth-child(odd) {
    width: 100%;
  }
  .eligibility_head h2 {
    margin-bottom: 20px;
  }
  .eligibility_list {
    margin-top: 30px;
  }
  .eligibility_list li:nth-child(odd) {
    padding-right: 0;
  }
  .eligibility_list li,
  .eligibility_list li:nth-last-child(-n + 2) {
    margin-bottom: 20px;
  }
  .eligibility_list li:last-child {
    margin-bottom: 0;
  }
}
</style>
