<template lang="pug">
  section
    h2
    separateur
    div
      div
        p
        a(href="")
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
      return this.$store.getters.GET_OTHER_ACTIVITIES;
    }
  }
}
</script>