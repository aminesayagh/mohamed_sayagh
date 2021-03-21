<template lang="pug">
  .page
    .container-page.relative
      mainSection(v-if="active.state")
      secondeSection(v-else)
</template>

<script>
import mainSection from "@/components/main/home.vue";
import secondeSection from "@/components/content/mainContainer.vue";

export default {
  components:{
    mainSection,
    secondeSection,
  },
  computed: {
    active() {
      return this.$store.getters.GET_MAINTENANCE;
    }
  },
}
</script>

<style lang="less" scoped>
@layer components {
  .container-page{
    @apply z-40 overflow-x-hidden pt-2;
    secondeSection {
      min-height: 75vh;
    }
  }
  
}
</style>

<style src="@/assets/tailwind.css"></style>