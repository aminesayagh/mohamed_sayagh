<template lang="pug">
  section
    h2 {{ reviewerFor.titre }}
    separateur
    .content
      vText(v-for="(reviewerForPara, id) in reviewerFor.paragraphe" :key="id")
        a(:href="reviewerForPara.link" target="_blank")
          |  {{ reviewerForPara.text }} 
</template>

<style lang="less" scoped>
@layer components{
  .content{
    
  }
}
</style>

<script>
import separateur from "@/components/uiElement/separateur.vue";

export default {
  components: {
    separateur
  },
  computed: {
    reviewerFor() {
      return this.$store.getters.GET_REVIEW_FOR;
    }
  }
}
</script>