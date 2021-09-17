<template>
    <div class="body-container ecosystem-page">
        <EcosystemMainContainer/>
        <EcosystemList/>
    </div>
</template>

<script>
    import EcosystemMainContainer from '@/components/EcosystemMainContainer.vue'
    import EcosystemList from '@/components/EcosystemList.vue'
    export default {
        name: 'Ecosystem',
        components: {
            EcosystemMainContainer,
            EcosystemList
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
