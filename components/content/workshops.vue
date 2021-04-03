<template lang="pug">
  .main.container
    h2 {{ workshops.titre }}
    separateur
    .content.container
      .content.sous-container(v-for="(workshops, index) in workshops.content" :key="index")
        h3
          | {{ workshops.titre }}
        ul
          li(v-for="(workshops, id) in workshops.list" :key="id")
            | {{ workshops }}
</template>

<style lang="less" scoped>
 @layer components{
   .content.container{
     @apply space-y-12;
     .content.sous-container{
       @apply space-y-8;
       h3{
         @apply text-color_2;
       }
       ul{
         @apply space-y-4;
         li{
           @apply text-black_4 tracking-wider;
         }
       }
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
    workshops() {
      return this.$store.getters.GET_WORKSHOPS;
    }
  }
}
</script>