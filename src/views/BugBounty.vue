<template>
  <div class="body-container">
    <BugBountyMainContainer />
    <Eligibility />
    <Ineligibility />
    <Rewards />
    <ReportBug />
  </div>
</template>

<script>
import BugBountyMainContainer from "@/components/BugBountyMainContainer.vue";
import Eligibility from "@/components/Eligibility.vue";
import Ineligibility from "@/components/Ineligibility.vue";
import Rewards from "@/components/Rewards.vue";
import ReportBug from "@/components/ReportBug.vue";

export default {
  name: "BugBounty",
  components: {
    BugBountyMainContainer,
    Eligibility,
    Ineligibility,
    Rewards,
    ReportBug
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
