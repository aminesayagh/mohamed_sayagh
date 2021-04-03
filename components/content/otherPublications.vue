<template lang="pug">
  section
    h2 {{ otherPublications.titre }}
    separateur
    .content(v-for="(otherPublication, index) in otherPublications.content" :key="index")
      v-text(v-for="(Publication, id) in otherPublication" :key="id")
        vText(v-if="!Publication.link")
          | {{ Publication.text }}
        a(v-else :href="Publication.link")
          | {{ Publication.text }}
</template>

<style lang="less" scoped>

</style>

<script>
import separateur from "@/components/uiElement/separateur.vue";

export default {
  components: {
    separateur
  },
  computed:{
    otherPublications() {
      return this.$store.getters.GET_OTHER_PUBLICATIONS;
    }
  }
}
</script>