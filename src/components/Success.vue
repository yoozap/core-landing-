<template>
    <div class="success-container" :class="$store.state.pageSuccess ? 'active' : ''">
        <div class="success-container__bg" @click="closePopup"></div>
        <div class="success-container__inner">
            <div class="success-container__title">Sorry!</div>
            <div class="success-container__text">But this page is in maintenance</div>
            <div class="success-container__button-container">
                <div class="success-container__button" @click="closePopup">Okay, I'll wait</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            itemData: {
                type: Array
            }
        },
        data () {
            return {
            }
        },
        methods: {
            closePopup () {
                this.$store.commit('setPageSuccess', false)
            }
        }
    }
</script>
<style scoped>
    .success-container.active .success-container__button-container,.success-container.active .success-container__title,.success-container.active .success-container__text{
        opacity: 1;
        transform: translateY(0px);
    }
    .success-container__button-container{
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        opacity: 0;
        transform: translateY(10px);
        transition-delay: .3s;
    }
    .success-container__button:hover{
        background: #0500FF;
    }
    .success-container__button{
        height: 52px;
        display: flex;
        align-items: center;
        border: 2px solid #0500FF;
        cursor: pointer;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        padding: 0px 35px;
        font-size: 16px;
        margin-top: 100px;
    }
    .success-container__text{
        font-size: 24px;
        line-height: 34px;
        text-align: center;
        margin-top: 30px;
        color: rgba(255,255,255,.7);
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        opacity: 0;
        transform: translateY(10px);
        transition-delay: .2s;
    }
    .success-container__title{
        font-size: 56px;
        line-height: 64px;
        text-align: center;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        opacity: 0;
        transform: translateY(10px);
        transition-delay: .1s;
    }
    .success-container__inner{
        width: 660px;
        background: #010918;
        border: 1px solid rgba(255,255,255,.1);
        padding: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 5;
    }
    .success-container__bg{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: #00050F;
        opacity: .4;
    }
    .success-container{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 9999999999;
        opacity: 0;
        transition-delay: .6s;
        transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        pointer-events: none;
    }
    .success-container.active{
        opacity: 1;
        transition-delay: 0s;
        pointer-events: all;
    }
    /*Laptop 1440*/
    @media (max-width: 1900px){
    }
    /*Ipad 1024*/
    @media (max-width: 1365px){
    }
    /*Ipad 768*/
    @media (max-width: 1023px){
    }
    /*Mobile 320*/
    @media (max-width: 767px){
        .success-container__title{
            font-size: 30px;
            line-height: 40px;
        }
        .success-container__inner {
            width: 320px;
            padding: 15px;
        }
        .success-container__text{
            font-size: 14px;
            line-height: 20px;
            margin-top: 15px;
        }
        .success-container__button{
            margin-top: 50px;
        }
    }
</style>
