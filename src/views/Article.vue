<template>
  <div class="body-container article-page">
    <ArticleMainContainer />
    <OtherArticles />
  </div>
</template>

<script>
import ArticleMainContainer from "@/components/ArticleMainContainer.vue";
import OtherArticles from "@/components/OtherArticles.vue";

export default {
  name: "Support",
  components: {
    ArticleMainContainer,
    OtherArticles
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
