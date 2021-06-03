<template>
  <div class="body-container">
    <YourVoiceMainContainer />
  </div>
</template>

<script>
import YourVoiceMainContainer from "@/components/YourVoiceMainContainer.vue";

export default {
  name: "Support",
  components: {
    YourVoiceMainContainer
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
