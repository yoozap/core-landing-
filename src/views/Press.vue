<template>
    <div class="body-container press-page">
        <PressMainContainer />
        <PressItems />
        <PressTabs />
    </div>
</template>

<script>
import PressMainContainer from "@/components/PressMainContainer.vue";
import PressItems from "@/components/PressItems.vue";
import PressTabs from "@/components/PressTabs.vue";

export default {
    name: "Career",
    components: {
        PressMainContainer,
        PressItems,
        PressTabs
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
