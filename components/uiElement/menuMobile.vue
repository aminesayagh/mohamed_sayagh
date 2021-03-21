<template lang="pug">
.menu.content
  ul.menu.list
    li(@click="changeActiveState()")
      | {{ maintenance.pagePrincipal.title }}
    li(v-for="(elem, index) in maintenance.menu", :key="index")
      .element(@click="change_state({ id: index })")
        | {{ elem.titre }}
</template>

<style lang="less" scoped>
@layer components {
  .menu {
    @apply flex flex-col min-h-screen min-w-full justify-center items-center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.6);
    .menu.list{
      @apply space-y-6;
      li{
        @apply hover:text-color_1 text-black_5 tracking-widest;
      }
      li:nth-child(1){
        @apply pb-6 border-color_2 border-b-2;
      }
    }
  }
}
</style>

<script>
export default {
  computed: {
    maintenance() {
      return this.$store.getters.GET_MAINTENANCE;
    },
  },
  methods: {
    changeActiveState() {
      let $statePage = this.$store.getters.GET_MAINTENANCE;
      $statePage.state = !$statePage.state;
      $statePage.menuMobileState = !$statePage.menuMobileState;
      this.$store.dispatch("SET_MAINTENANCE", $statePage);
    },
    change_state(elementSectect) {
      let stateMenu = this.$store.getters.GET_MAINTENANCE;
      if(!stateMenu.menu[elementSectect.id].state){
        stateMenu.menu.forEach(element =>{
          element.state = false;
        })
        stateMenu.menu[elementSectect.id].state = true;
      }
      stateMenu.menuMobileState = !stateMenu.menuMobileState;
      this.$store.dispatch("SET_MAINTENANCE", stateMenu);
    },
  },
};
</script>