<template>
    <div class="body-container">
        <AnnouncementMainContainer />
    </div>
</template>

<script>
import AnnouncementMainContainer from "@/components/AnnouncementMainContainer.vue";

export default {
    name: "Support",
    components: {
        AnnouncementMainContainer
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
