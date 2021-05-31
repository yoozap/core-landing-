<template>
  <div class="body-container">
    <SupportMainContainer />
  </div>
</template>

<script>
import SupportMainContainer from "@/components/SupportMainContainer.vue";

export default {
  name: "Support",
  components: {
    SupportMainContainer
  }
};
</script>
<style scoped>
.body-container {
  padding-left: 210px;
}
/*Ipad 768*/
@media (max-width: 1023px) {
  .body-container {
    padding-left: 180px;
  }
}
/*Mobile 320*/
@media (max-width: 767px) {
  .body-container {
    padding-left: 0px;
  }
}
</style>
