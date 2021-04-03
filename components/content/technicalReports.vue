<template lang="pug">
  section
    h2
      | {{ technicalReports.titre }}
    separateur
    span
      p(v-for="(technicalReports, index) in technicalReports.content" :key="index")
        v-text(v-for="(technicalReports, id) in technicalReports" :key="id")
          vtext(v-if="!technicalReports.link")
            | {{technicalReports.text}}
          a(v-else :href="technicalReports.link" target="_blank")
            | {{ technicalReports.text }}
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
    technicalReports () {
      return this.$store.getters.GET_TECHNICAL_REPORTS;
    }
  }
}
</script>