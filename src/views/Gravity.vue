<template>
    <div class="body-container">
        <GravityMainContainer />
        <GravitySlider />
        <GravityGames />
        <GravityMarketplaces />
        <GravityFinance />
        <GravitySocial />
        <GravityOther />
        <GravityActivity />
    </div>
</template>

<script>
import GravityMainContainer from "@/components/GravityMainContainer.vue";
import GravitySlider from "@/components/GravitySlider.vue";
import GravityGames from "@/components/GravityGames.vue";
import GravityMarketplaces from "@/components/GravityMarketplaces.vue";
import GravityFinance from "@/components/GravityFinance.vue";
import GravitySocial from "@/components/GravitySocial.vue";
import GravityOther from "@/components/GravityOther.vue";
import GravityActivity from "@/components/GravityActivity.vue";

export default {
    name: "Support",
    components: {
        GravityMainContainer,
        GravitySlider,
        GravityGames,
        GravityMarketplaces,
        GravityFinance,
        GravitySocial,
        GravityOther,
        GravityActivity
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
