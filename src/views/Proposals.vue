<template>
  <div class="body-container proposal-page">
    <Proposals/>
  </div>
</template>

<script>
import Proposals from '@/components/Proposals.vue';
export default {
  components: {
    Proposals
  }
}
</script>
<style scoped>
  .body-container{
    padding-left: 210px;
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .body-container{
      padding-left: 0px;
    }
  }
</style>
