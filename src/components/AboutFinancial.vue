<template>
  <div class="about-financial pT-160">
    <div class="container">
      <div data-aos="fade-up" class="about-financial__header">
        <h3 class="font-51"><span>Financial</span> <span>Highlights</span></h3>
        <div class="about-financial__header-text-container">
          <p class="about-financial__header-text">
            NexBank provides up-to-date financial data for all our stakeholders. Below you will find NexBank's current financial highlights and ratings.
          </p>
          <div class="about-financial__header-title">Q3 2020 Highlights</div>
          <div class="about-financial__header-sub-title">Loan Portfolio (Gross)</div>
        </div>
      </div>
      <div class="chart-container" data-aos="fade-up">
        <div class="chart-container__left">
          <div class="chart-container__inner">
            <img :src="require(`@/assets/img/chart.png`)" alt="chart" class="chart__img">
            <img :src="require(`@/assets/img/gradientChart.png`)" alt="gradient" class="chart__imgGr">
            <div id="chart">
              <apexchart type="radialBar" height="380" :options="chartOptions" :series="series"></apexchart>
            </div>
            <div class="chart-container__inner-total">
              <div class="chart-container__inner-total-title">$6.3 BN</div>
              <div class="chart-container__inner-total-text">Total</div>
            </div>
          </div>
        </div>
        <div class="chart-container__right">
          <div class="chart-container__description">
            <div class="color" style="border-color: #0500FF"></div>
            <div class="title descr">Single Family</div>
            <div class="text descr">63%</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #817EFF"></div>
            <div class="title descr">Commercial Real Estate</div>
            <div class="text descr">25%</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #D5D5FF"></div>
            <div class="title descr">Commercial & Industrial</div>
            <div class="text descr">12%</div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="column-chart-container pT-160">
        <div class="column-chart-container__inner">
          <div class="column-chart__title">Asset Size</div>
          <img :src="require(`@/assets/img/charts/asset_size.png`)" alt="asset-size" class="column-chart-container__img">
          <div class="column-chart__footer">
            <div class="column-chart__footer-item" style="color: #817EFF">
              <span style="background: #817EFF"></span>
              Total Deposits
            </div>
            <div class="column-chart__footer-item" style="color: #7B7B96">
              <span style="background: #7B7B96"></span>
              Total Assets
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="column-chart-container pT-160">
        <div class="column-chart-container__inner">
          <div class="column-chart__title">Capital Ratios</div>
          <img :src="require(`@/assets/img/charts/capital_ratios.png`)" alt="capital-img" class="column-chart-container__img">
          <div class="column-chart__footer">
            <div class="column-chart__footer-item" style="color: #817EFF">
              <span style="background: #817EFF"></span>
              CORE
            </div>
            <div class="column-chart__footer-item" style="color: #7B7B96">
              <span style="background: #7B7B96"></span>
              Regulatory Minimum ("Well-Capitalized")
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="column-chart-container pT-160 pB-160">
        <div class="column-chart-container__inner">
          <div class="column-chart__title">Pre-Tax Income</div>
          <img :src="require(`@/assets/img/charts/pre-tax_income.png`)" alt="pre-tax" class="column-chart-container__img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      series: [75, 60, 50],
      chartOptions: {
        chart: {
          type: 'radialBar'
        },
        colors: ['#0500FF', '#817EFF', '#D5D5FF'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%'
            },
            track: {
              background: 'transparent',
              margin: 15
            },
            dataLabels: {
              show: false
            }
          }
        }

      },
      chartOptions2: {
        chart: {
          type: 'radialBar'
        },
        colors: ['#0500FF', '#817EFF', '#D5D5FF'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%'
            },
            track: {
              background: 'transparent',
              margin: 15
            },
            dataLabels: {
              show: false
            }
          }
        }

      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .column-chart__footer-item span{
    height: 4px;
    width: 25px;
    border-radius: 10px;
    display: flex;
    margin-right: 30px;
  }
  .column-chart__footer-item{
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-right: 30px;
  }
  .column-chart__footer{
    display: flex;
    margin-top: 55px;
  }
  .column-chart-container__inner{
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .column-chart__title{
    color: #FF7152;
    font-size: 20px;
    margin-bottom: 55px;
    margin-right: auto;
  }
  .column-chart-container__img{
    width: 100%;
  }
  .column-chart-container{
    display: flex;
    width: 100%;
    flex-direction: column;

  }
  .chart-container__inner-total-text{
    font-size: 15px;
    line-height: 24px;
    opacity: .7;
  }
  .chart-container__inner-total-title{
    font-size: 30px;
    line-height: 42px;
  }
  .chart-container__inner-total{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 10;
    flex-direction: column;
    display: flex;
  }
  .chart-container__description{
    margin: 15px 0px;
    position: relative;
    padding: 0px 40px;
  }
  .chart-container__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  .chart-container{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 30px;
  }
  .chart-container__left{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
  }
  #chart{
    width: 380px;
    position: relative;
    z-index: 3;
  }
  .chart-container__inner{
    position: relative;
    display: flex;
    width: fit-content;
    overflow: hidden;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
  }
  .chart__img{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    transform: scale(1.2);
  }
  .chart__imgGr{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    z-index: 2;
  }
  .chart-container__description .color{
    height: 20px;
    width: 20px;
    position: absolute;
    top: 2px;
    left: 0px;
    border-radius: 50%;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    border: 4px solid;
  }
  .chart-container__description .title{
    font-size: 15px;
    white-space: nowrap;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: translateY(0px);
  }
  .chart-container__description .text{
    font-size: 15px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    transform: translateY(0px);
    color: rgba(255,255,255,.7);
    line-height: 24px;
  }
  .container{
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-sub-title{
    font-size: 20px;
    line-height: 30px;
    color: #FF7152;
  }
  .about-financial__header-title{
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  h3 span{
    font-size: inherit;
  }
  h3 span:last-child{
    padding-left: 120px;
  }
  .about-financial__header{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  h3{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-text-container{
    width: 50%;
    padding-right: 300px;
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.7);
    margin-top: 20px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .about-financial__header-text-container{
      padding-right: 120px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .chart-container{
      flex-direction: column;
    }
    h3 span:last-child {
      padding-left: 60px;
    }
    .about-financial__header-text-container {
      padding-right: 25px;
    }
    .chart-container__left{
      padding-right: 0px;
      width: 100%;
      justify-content: center;
    }
    .chart-container__right{
      margin-left: auto;
      margin-right: auto;
    }
    .chart-container__description {
      margin: 5px 0px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
    .column-chart__footer-item{
      font-size: 12px;
      margin-right: 0px;
    }
    .column-chart__footer-item span{
      margin-right: 10px;
    }
    .column-chart__footer-item:first-child{
      margin-bottom: 5px;
    }
    .column-chart__footer{
      flex-direction: column;
    }
    .about-financial__header{
      flex-direction: column;
    }
    .about-financial__header-text-container{
      width: 100%;
    }
    .chart-container__right{
      width: 100%;
    }
    .column-chart-container__inner{
      width: 100%;
    }
  }
</style>
