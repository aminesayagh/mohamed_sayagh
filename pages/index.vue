<template lang="pug">
  .page
    .container-pop_up.z-50
      pop_up
    .container-page.z-20(class="md:relative")
      mainSection(v-if="active.state")
      secondeSection(v-else)
</template>

<script>
import mainSection from "@/components/main/home.vue";
import secondeSection from "@/components/content/mainContainer.vue";
import pop_up from "@/components/uiElement/popupInfo.vue";

export default {
  components:{
    mainSection,
    secondeSection,
    pop_up
  },
  data() {
    return {
      title: this.$store.getters.GET_MAINTENANCE
    }
  },
  head() {
    return {
      title: this.title.head.title,
      meta: [
        {
          hid: this.title.head.meta[0].hid,
          name: this.title.head.meta[0].name,
          content: this.title.head.meta[0].content,
        },
      ]
    }
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
  .container-pop_up{
    @apply lg:relative;
  }
  .container-page{
    @apply z-40 overflow-x-hidden pt-2;
    secondeSection {
      min-height: 75vh;
    }
  }
  
}
</style>

<style src="@/assets/tailwind.css"></style>