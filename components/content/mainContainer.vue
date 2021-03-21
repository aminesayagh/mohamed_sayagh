<template lang="pug">
section.gridMain
  .menu.gridBlue
    .sousgridBlue
      ul
        li(v-for="(element, index) in maintenance.menu", :key="index")
          .element(@click="change_state({id: index })")
            | {{ element.titre }}
  .content.gridWhite
    publications(v-if="maintenance.menu[0].state")
    technicalReports(v-else-if="maintenance.menu[1].state")
    workshop(v-else-if="maintenance.menu[2].state")
    otherPublications(v-else-if="maintenance.menu[3].state")
    reviewerFor(v-else-if="maintenance.menu[4].state")
    pcMember(v-else-if="maintenance.menu[5].state")
    teaching(v-else-if="maintenance.menu[6].state")
</template>

<style lang="less">
@layer components {
  .gridMain{
    @apply max-md:bg-black_10;
    .gridBlue{
      .sousgridBlue{
        @apply max-lg:hidden !important;
      }
    }
    .gridWhite{
      @apply max-lg:bg-black_10 !important;
      @apply max-lg:py-20;
    }
  }
  // grid syteme for page
  .gridMain {
    @apply grid grid-cols-12 lg:grid-rows-1 min-w-full;
    min-height: 80vh;
    .gridBlue {
      @apply hidden lg:grid grid-cols-12 col-span-12 lg:col-span-4;
      .sousgridBlue {
        @apply grid col-span-full lg:col-span-9 grid-rows-none grid-cols-1;
        li{
          @apply cursor-pointer;
        }
      }
      .white {
        @apply max-lg:col-span-12;
      }
    }
    .gridWhite {
      @apply col-span-12 grid grid-cols-12 lg:col-span-7;
      > * {
        @apply col-start-2 md:col-start-2 lg:col-start-2 col-span-9 md:col-span-9 lg:col-span-11;
      }
    }
  }
  // content
  .menu {
    .sousgridBlue {
      @apply flex items-start justify-start pl-10;
      @apply mt-0 lg:mt-28 xl:mt-32;
      ul {
        @apply space-y-8;
        @apply -mt-14;
      }
    }
  }
  .content.gridWhite {
    span {
      @apply space-y-2;
      p {
        @apply text-justify;
      }
    }
  }
}
</style>

<script>
import publications from "@/components/content/publications.vue";
import technicalReports from "@/components/content/technicalReports.vue";
import workshop from "@/components/content/workshops.vue";
import otherPublications from "@/components/content/otherPublications.vue";
import reviewerFor from "@/components/content/reviewerFor.vue";
import pcMember from "@/components/content/pcMember.vue";
import teaching from "@/components/content/teaching.vue";

export default {
  components: {
    publications,
    technicalReports,
    workshop,
    otherPublications,
    reviewerFor,
    pcMember,
    teaching,
  },
  computed: {
    maintenance() {
      return this.$store.getters.GET_MAINTENANCE;
    },
  },
  methods: {
    change_state(elementSectect) {
      let stateMenu = this.$store.getters.GET_MAINTENANCE;
      if(!stateMenu.menu[elementSectect.id].state){
        stateMenu.menu.forEach(element =>{
          element.state = false;
        })
        stateMenu.menu[elementSectect.id].state = true;
      }
      
      this.$store.dispatch("SET_MAINTENANCE", stateMenu);
    },
  },
};
</script>