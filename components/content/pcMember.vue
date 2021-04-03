<template lang="pug">
  section
    h2 {{ pcMember.titre }}
    separateur
    .content
      ul
        li(v-for="(pcMember, index) in pcMember.paragraphe" :key="index")
          a(:href="pcMember.link")
            | {{pcMember.text}}
</template>

<style lang="less" scoped>
@layer components{
  .content{
    ul{
      @apply space-y-5;
    }
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
    pcMember() {
      return this.$store.getters.GET_PC_MEMBER;
    },
  },
}
</script>