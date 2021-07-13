<template>
    <div>
        <div
            id="main"
            class="outer"
            :class="firstAnimation ? 'animHead' : ''"
            v-view="visibilityChanged"
        >
            <TopHead />
            <div class="voice-bg__outer">
                <img
                    v-prlx="{ speed: 0.1 }"
                    :src="require(`@/assets/img/voice-bg.png`)"
                    alt=""
                    class="voice-bg"
                />
            </div>
            <div class="container">
                <div class="main-container__description" data-aos="fade-up">
                    <div class="left">
                        <h1>
                            <span>Your Voice</span>
                            <span>Matter</span>
                        </h1>
                    </div>
                    <div class="content_description">
                        Community feedback helps CORE improve and grow. Users who provide feedback on their experience
                        help ensure the growth of CORE and lead us in the direction that the community needs to be. Please use
                        the following form to contribute your thoughts to CORE:
                    </div>
                </div>
            </div>
        </div>
        <div class="container feedback-form" data-aos="fade-up">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
                <el-form-item label="Email" prop="email">
                    <el-input
                        type="email"
                        v-model="ruleForm.email"
                        placeholder="Enter"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item label="Make a suggestion" prop="desc">
                    <el-input
                        type="textarea"
                        v-model="ruleForm.desc"
                        placeholder="Please describe your feedback in detail with
corresponding screenshots"
                    ></el-input>
                </el-form-item>

                <div class="upload-label" v-if="false">Attachments</div>
                <!-- <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    class="file-upload__container"
                    ref="upload"
                    :file-list="fileList"
                >
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{ file }">
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url"
                            alt=""
                        />
                        <span class="el-upload-list__item-actions">
                            <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)"
                            >
                                <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog> -->

                <el-upload
                    v-if="false"
                    action="#"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-change="saveVoice"
                    :auto-upload="false"
                    class="file-upload__container"
                    :file-list="fileList"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                        >Submit</el-button
                    >
                </el-form-item>

                <transition name="fade">
                    <div class="success-msg" v-if="success">
                        <img src="../assets/img/success-icon.svg" alt="" />
                        <p class="success-text">
                            The request was successfully sent. We'll take a
                            close look at it. Thank you!
                        </p>
                        <div class="close-btn" @click="resetForm">
                            Close message
                        </div>
                    </div>
                </transition>
            </el-form>
        </div>
    </div>
</template>

<script>
import TopHead from "@/components/TopHead.vue";
import axios from "axios";
export default {
    name: "MainContainer",
    data() {
        return {
            firstAnimation: false,

            dialogImageUrl: "",
            dialogVisible: false,

            disabled: false,
            fileList: [],
            success: false,
            index: 0,

            ruleForm: {
                email: "",
                desc: ""
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: "Please input your email address",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "Please input correct email address",
                        trigger: ["blur", "change"]
                    }
                ],
                desc: [
                    {
                        required: true,
                        message: "Please describe your feedback",
                        trigger: "blur"
                    }
                ]
            }
        };
    },

    components: {
        TopHead
    },
    mounted() {
        setTimeout(() => {
            this.firstAnimation = true;
        }, 100);
        this.saveVoice();
    },
    methods: {
        handlePreview(file) {
            console.log(file);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        saveVoice() {
            console.log(this.fileList);
        },
        visibilityChanged() {
            this.$store.commit("setMenuStatus", 0);
        },
        // handleRemove(file) {
        //     // let index = this.fileList.findIndex((file = file === this.file));
        //     // console.log(this.fileList);
        //     // console.log(file);
        //     // this.fileList.splice(index, 1);
        // },
        // handleRemove(file, fileList) {
        //     console.log(file, fileList);
        // },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        submitForm(ruleForm) {
            console.log(this.fileList);
            this.$refs[ruleForm].validate(valid => {
                if (valid) {
                    this.success = true;
                    return new Promise((resolve, reject) => {
                        axios
                            .post(
                                "http://localhost/coremultichain/public/api/voice",
                                {
                                    email: this.ruleForm.email,
                                    text: this.ruleForm.desc
                                }
                            )
                            .then(response => {
                                console.log(response);
                            })
                            .catch(response => {
                                // List errors on response...
                            });
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(ruleForm) {
            this.$nextTick(() => {
                this.$refs.ruleForm.resetFields();
                // this.$refs.upload.clearFiles();
            });
            this.success = false;
        }
    }
};
</script>
<style scoped>
.voice-bg {
    width: 100%;
    height: 120%;
}
.voice-bg__outer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 1;
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.voice-bg__outer:before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: "";
    z-index: 2;
    height: 25%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.animHead .voice-bg__outer {
    opacity: 1;
    transform: translateY(-38px);
}
.container {
    position: relative;
    z-index: 20;
    height: 100%;
}
.main-container__description h1 {
    display: flex;
    flex-direction: column;
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
}
.main-container__description h1 span {
    font-size: inherit;
    font-family: inherit;
}
.main-container__description h1 span:nth-child(2) {
    padding-left: 122px;
}
.animHead h1 {
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0.5s;
}
.main-container__description h3 {
    font-size: 20px;
    margin-top: 100px;
}
.main-container__description {
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
}
.left {
    width: 50%;
    position: relative;
    z-index: 5;
}

.main-container__header .left {
    font-size: 20px;
    line-height: 28px;
}
#main {
    position: relative;
    width: 100%;
    background: #00050f;
    z-index: 2;
}

.content_description {
    font-size: 20px;
    line-height: 30px;
    max-width: 640px;
    margin-top: 100px;
}

/* Form Styles */
.feedback-form {
    position: relative;
    margin-top: 80px;
    margin-bottom: 60px;
}
.el-upload--picture-card i {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.el-icon-plus::after {
    content: "Add file";
    font-family: "Lack-Regular";
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
}
.success-msg {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5f9f55;
    border-radius: 4px;
    padding: 60px 26px;
    height: 100%;
}
.success-msg p {
    font-size: 20px;
    line-height: 30px;
    margin-top: 32px;
}
.close-btn {
    position: relative;
    margin-top: auto;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
}
.close-btn::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #0500ff;
    position: absolute;
    top: 100%;
    left: 0;
}

/*Ipad Pro 1024*/
@media (max-width: 1300px) {
    /* .main-container__description {
    padding-left: 25px;
  } */
    .main-container__description h1 {
        font-size: 50px;
    }
    .main-container__description h1 span:nth-child(2) {
        padding-left: 63px;
    }
    /* .main-container__description h3,
  .counter-container {
    margin-top: 70px;
  } */
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .main-container__description {
        padding-left: 0px;
    }
    .main-container__description .frst-txt {
        font-size: 12px;
        line-height: 22px;
    }
    .main-container__description .scnd-txt {
        font-size: 16px;
        line-height: 26px;
        margin-top: 30px;
    }
    .right {
        padding-bottom: 60px;
        padding-right: 30px;
    }
    .main-video__container {
        right: -38%;
        padding-top: 130%;
        width: 130%;
    }
    .main-container__header .left {
        font-size: 13px;
        line-height: 22px;
    }
    .main-container__description p {
        font-size: 32px;
        line-height: 40px;
    }
    .scroll-down {
        display: none;
    }
    .content_description {
        margin-top: 70px;
    }
    .feedback-form {
        margin-top: 60px;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .protocol__link-main-svg {
        margin-right: 25px;
    }
    .protocol__link-txt {
        font-size: 10px;
    }
    .voice-bg__outer {
        width: 100%;
    }
    .left {
        width: 100%;
    }
    .main-container__description {
        flex-direction: column;
    }
    .main-container__description h3 {
        text-align: left;
    }
    .download-container__mobile-inner a {
        margin: 0px 15px;
    }
    .download-container__mobile .ttl {
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        margin-bottom: 25px;
    }
    .main-container__description {
        padding: 0px 15px;
        text-align: center;
        bottom: 90px;
    }
    .main-container__description h1 {
        margin-top: 115px;
        /* margin-bottom: 50px; */
        text-align: left;
    }
    .voice-bg {
        height: 100vh;
        object-fit: cover;
    }
    .main-container__description {
        padding: 0px;
    }
    .content_description {
        font-size: 16px;
        line-height: 24px;
    }
}
</style>

<style>
.feedback-form .el-form {
    position: relative;
    width: 412px;
}
.feedback-form .el-form-item {
    margin-bottom: 24px;
}
.feedback-form .el-form-item__label,
.upload-label {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0.5;
}
.upload-label {
    margin-bottom: 8px;
}
.feedback-form .el-input input,
.feedback-form .el-textarea__inner {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 16px;
}
.feedback-form .el-input input::placeholder,
.feedback-form .el-textarea__inner::placeholder {
    transition: 0.4s;
    opacity: 0.3;
}
.feedback-form .el-input input:focus::placeholder,
.feedback-form .el-textarea__inner:focus::placeholder {
    opacity: 0;
}
.feedback-form .el-input input {
    height: 44px;
}
.feedback-form .el-input input:hover,
.feedback-form .el-input input:focus,
.feedback-form .el-textarea__inner:hover,
.feedback-form .el-textarea__inner:focus {
    border-color: #0500ff;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.feedback-form .el-form-item.is-error .el-input__inner,
.feedback-form .el-form-item.is-error .el-input__inner:focus,
.feedback-form .el-form-item.is-error .el-textarea__inner,
.feedback-form .el-form-item.is-error .el-textarea__inner:focus,
.feedback-form .el-message-box__input input.invalid,
.feedback-form .el-message-box__input input.invalid:focus {
    border-color: #ff7152;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}
.feedback-form .el-form-item__error {
    color: #ff7152;
}
.feedback-form .el-textarea__inner {
    height: 168px;
    resize: none;
}
.feedback-form
    .el-form-item.is-required:not(.is-no-asterisk)
    .el-form-item__label-wrap
    > .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    display: none;
}
.file-upload__container {
    position: relative;
    width: 425px;
    /* display: flex;
  flex-direction: row-reverse;
  width: max-content; */
}
.file-upload__container .el-upload-list {
    display: flex;
    flex-wrap: wrap;
}
.file-upload__container .el-upload-list::before {
    content: "";
    width: 132px;
    height: 132px;
    margin-right: 8px;
}
.feedback-form .el-upload {
    position: absolute;
    top: 0;
    left: 0;
}
.feedback-form .el-upload--picture-card,
.feedback-form .el-upload-list__item {
    background-color: rgba(255, 255, 255, 0.04) !important;
    border: none !important;
    border-radius: 4px !important;
    width: 132px !important;
    height: 132px !important;
    margin-right: 8px;
}
.feedback-form .el-upload-list__item > div {
    width: 100%;
    height: 100%;
}
.feedback-form .el-upload-list--picture-card .el-upload-list__item-thumbnail {
    object-fit: cover;
}
.feedback-form .el-icon-plus::after {
    margin-top: 7px;
}
.feedback-form .el-icon-plus:before {
    font-weight: 900;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px dashed rgba(255, 255, 255, 0.1);
}

.feedback-form .el-upload-list__item-delete {
    display: inline-block !important;
}
.feedback-form
    .el-upload-list--picture-card
    .el-upload-list__item-actions
    span {
    position: absolute;
    display: flex !important;
    right: 8px;
    top: 8px;
}
.feedback-form .el-icon-delete {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00050f;
    border-radius: 50%;
}
.feedback-form .el-icon-delete:before {
    content: "";
    background-image: url("../assets/img/file-delete.svg");
    background-size: 8px;
    background-position: top;
    background-repeat: no-repeat;
    width: 8px;
    height: 8px;
    display: flex;
}

.feedback-form .el-button--primary {
    background-color: #0500ff !important;
    border-color: #0500ff !important;
    margin-top: 32px;
    width: 100%;
    height: 44px;
    transition: 0.6s;
}
.feedback-form .el-button--primary span {
    font-size: 14px;
}
.feedback-form .el-button--primary:hover {
    background-color: #ff7152 !important;
    border-color: #ff7152 !important;
}
@media (max-width: 767px) {
    .feedback-form .el-form {
        width: 100%;
    }
}

@media (max-width: 450px) {
    .file-upload__container {
        width: 285px;
    }
}
</style>
