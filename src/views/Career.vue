<template>
    <div class="body-container">
        <CareerMainContainer />
        <CareerValues />
        <CareerTopics v-if="false"/>
        <CareerSlider v-if="false"/>
        <CareerBenefits v-if="false"/>
        <CareerHireSteps v-if="true"/>
    </div>
</template>

<script>
import CareerMainContainer from "@/components/CareerMainContainer.vue";
import CareerValues from "@/components/CareerValues.vue";
import CareerTopics from "@/components/CareerTopics.vue";
import CareerSlider from "@/components/CareerSlider.vue";
import CareerBenefits from "@/components/CareerBenefits.vue";
import CareerHireSteps from "@/components/CareerHireSteps.vue";

export default {
    name: "Career",
    components: {
        CareerMainContainer,
        CareerValues,
        CareerTopics,
        CareerSlider,
        CareerBenefits,
        CareerHireSteps
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
