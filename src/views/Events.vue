<template>
    <div class="body-container academy-page">
        <EventsMainContainer />
    </div>
</template>

<script>
    import EventsMainContainer from "@/components/EventsMainContainer.vue";

    export default {
        name: "Events",
        components: {
            EventsMainContainer
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
