<template lang="pug">
  section
    h2 
      | {{ publication.titre }}
    separateur
    span
      p(v-for="(publication, index) in publication.content" :key="index")
        v-text(v-for="(publicationPara, id) in publication" :key="id")
          vtext(v-if="!publicationPara.link")
            | {{publicationPara.text}}
          a(v-else :href="publicationPara.link" target="_blank")
            |  {{ publicationPara.text }} 
</template>

<style lang="less" scoped>

</style>

<script>
import separateur from "@/components/uiElement/separateur.vue";

export default {
  components: {
    separateur
  },
  computed: {
    publication() {
      return this.$store.getters.GET_PUBLICATIONS;
    }
  }
}
</script>