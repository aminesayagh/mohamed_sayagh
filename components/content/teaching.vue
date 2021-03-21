<template lang="pug">
section.container
  h2 {{ teaching.titre }}
  separateur
  .allContain(v-for="(teaching, index) in teaching.paragraphe", :key="index")
    .paragraphe(v-for="(teaching, id) in teaching", :key="id")
      h3
        | {{ teaching.titre }}
      .content(v-for="(teaching, id) in teaching", :key="id")
        v-text(v-for="(teaching, id) in teaching", :key="id")
          vText(v-if="!teaching.link")
            | {{ teaching.text }}
          a(v-else, :href="teaching.link")
            | {{ teaching.text }}
</template>

<style lang="less" scoped>
@layer components {
  .allContain {
    @apply pb-10;
    .paragraphe {
      @apply space-y-4;
    }
  }
}
</style>
<script>
import separateur from "@/components/uiElement/separateur.vue";

export default {
  components: {
    separateur,
  },
  computed: {
    teaching() {
      return this.$store.getters.GET_TEACHING;
    },
  },
};
</script>