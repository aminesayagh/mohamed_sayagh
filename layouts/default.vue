<template lang="pug">
.main
  //- page background grid
  .background.gridMain.bg-color_4.top-0.left-0.right-0
    .blue.gridBlue
      .sousgridBlue.bg-color_2
      .white(class="max-lg:bg-color_2")
    .gridWhite
  //- page content
  .contentPage.relative
    header.gridMail
      .logo.gridBlue.pl-8
        .sousgridBlue
          logo.logo.changeOpacity
      .no_used.gridWhite
    Nuxt
    footer.gridMail.z-50
      .email.gridBlue
        .container-mail.sousgridBlue
          .element-mail
            .col-white
            .email-container
              p
                | {{ content.email }}
      .nav.gridWhite
        button.buttonSuivant.flecheNaigation(
          v-if="!isMobile()",
          @click="changeActiveState()"
        )
          img.changeOpacity(
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgyLjY3OCwyMjYuODA0TDE2My43Myw3Ljg2QzE1OC42NjYsMi43OTIsMTUxLjkwNiwwLDE0NC42OTgsMHMtMTMuOTY4LDIuNzkyLTE5LjAzMiw3Ljg2bC0xNi4xMjQsMTYuMTIgICAgYy0xMC40OTIsMTAuNTA0LTEwLjQ5MiwyNy41NzYsMCwzOC4wNjRMMjkzLjM5OCwyNDUuOWwtMTg0LjA2LDE4NC4wNmMtNS4wNjQsNS4wNjgtNy44NiwxMS44MjQtNy44NiwxOS4wMjggICAgYzAsNy4yMTIsMi43OTYsMTMuOTY4LDcuODYsMTkuMDRsMTYuMTI0LDE2LjExNmM1LjA2OCw1LjA2OCwxMS44MjQsNy44NiwxOS4wMzIsNy44NnMxMy45NjgtMi43OTIsMTkuMDMyLTcuODZMMzgyLjY3OCwyNjUgICAgYzUuMDc2LTUuMDg0LDcuODY0LTExLjg3Miw3Ljg0OC0xOS4wODhDMzkwLjU0MiwyMzguNjY4LDM4Ny43NTQsMjMxLjg4NCwzODIuNjc4LDIyNi44MDR6IiBmaWxsPSIjZWVlZWVlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
          )
        button(v-if="!isMobile()")
          tasty-burger-button.hamburgerMenu.changeOpacity.bg-color-2.z-10(
            :type="buttonType",
            :active="isActive",
            :size="size",
            :color="color",
            :active-color="activeColor"
            v-on:toggle="onToggle"
          )
          menuMobile.menuMobile.z-0(v-if="menuState()")
        button.buttonSuivant(v-else, @click="changeActiveState()")
          img.changeOpacity(
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgyLjY3OCwyMjYuODA0TDE2My43Myw3Ljg2QzE1OC42NjYsMi43OTIsMTUxLjkwNiwwLDE0NC42OTgsMHMtMTMuOTY4LDIuNzkyLTE5LjAzMiw3Ljg2bC0xNi4xMjQsMTYuMTIgICAgYy0xMC40OTIsMTAuNTA0LTEwLjQ5MiwyNy41NzYsMCwzOC4wNjRMMjkzLjM5OCwyNDUuOWwtMTg0LjA2LDE4NC4wNmMtNS4wNjQsNS4wNjgtNy44NiwxMS44MjQtNy44NiwxOS4wMjggICAgYzAsNy4yMTIsMi43OTYsMTMuOTY4LDcuODYsMTkuMDRsMTYuMTI0LDE2LjExNmM1LjA2OCw1LjA2OCwxMS44MjQsNy44NiwxOS4wMzIsNy44NnMxMy45NjgtMi43OTIsMTkuMDMyLTcuODZMMzgyLjY3OCwyNjUgICAgYzUuMDc2LTUuMDg0LDcuODY0LTExLjg3Miw3Ljg0OC0xOS4wODhDMzkwLjU0MiwyMzguNjY4LDM4Ny43NTQsMjMxLjg4NCwzODIuNjc4LDIyNi44MDR6IiBmaWxsPSIjZWVlZWVlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
          )
</template>

<script>
import logo from "@/components/Logo.vue";
import menuMobile from '@/components/uiElement/menuMobile.vue'

export default {
  components: {
    logo,
    menuMobile
  },
  data() {
    return {
      buttonType: "slider",
      isActive: false,
      size: "m",
      color: "#eeeeee",
      activeColor: "#00000",
    };
  },
  computed: {
    content() {
      return this.$store.getters.GET_MAIN;
    },
  },
  methods: {
    onToggle(){
      let menuState = this.$store.getters.GET_MAINTENANCE;
      menuState.menuMobileState = !menuState.menuMobileState;
      this.$store.dispatch("SET_MAINTENANCE", menuState);
    },
    menuState(){
      return this.$store.getters.GET_MAINTENANCE.menuMobileState;
    },
    isMobile() {
      return this.$store.getters.GET_MAINTENANCE.state;
    },
    changeActiveState() {
      let $statePage = this.$store.getters.GET_MAINTENANCE;
      $statePage.state = !$statePage.state;
      this.$store.dispatch("SET_MAINTENANCE", $statePage);
    },
  },
};
</script>

<style lang="less" scoped>
@layer components {
  .main {
    @apply min-w-full bg-color_4;
    // grid syteme for page
    .gridMain {
      @apply grid grid-cols-12 lg:grid-rows-1;
      @apply min-h-screen;
      .gridBlue {
        @apply grid grid-cols-12 col-span-12 lg:col-span-5;
        .sousgridBlue {
          @apply grid col-span-full lg:col-span-9 grid-cols-12;
        }
        .white {
          @apply max-lg:col-span-12;
        }
      }
      .gridWhite {
        @apply col-span-12 lg:col-span-7;
      }
    }
    .flecheNaigation {
      @apply max-lg:hidden;
    }
    .hamburgerMenu {
      @apply lg:hidden;
    }
    // background page
    .background {
      @apply absolute lg:fixed;
      * {
        @apply lg:min-h-screen;
        .gridBlue {
          min-height: 65vh;
        }
      }
    }
    // content for page
    .contentPage {
      @apply flex flex-col min-h-screen justify-between;
      @apply py-10;
      // header page
      header {
        .sousgridBlue {
          @apply min-w-full max-lg:mb-12;
          .logo {
            @apply ml-6 sm:ml-8 md:ml-10 lg:ml-0;
          }
        }
      }
      // footer page
      footer {
        @apply items-center;
        .email {
          @apply relative lg:fixed lg:bottom-10;
          @apply flex-row items-center h-8;
          .container-mail {
            @apply items-center pl-10;
            .element-mail {
              @apply flex flex-row col-span-full;
              .col-white {
                @apply w-1 h-auto py-4 bg-color_1 lg:bg-color_4;
              }
              .email-container {
                @apply ml-4 my-auto;
                p {
                  @apply text-color_1 lg:text-color_4 text-sm pb-1 !important;
                  @apply whitespace-pre align-middle truncate;
                  letter-spacing: 0.12rem !important;
                }
              }
            }
          }
        }
        .nav {
          @apply justify-end;
          .buttonSuivant {
            @apply fixed bottom-0 right-0;
            @apply px-6 py-8;
            @apply focus:ring-2 focus:ring-color_2 focus:ring-opacity-10 bg-color_2;
            > * {
              @apply w-6 h-6 opacity-75;
            }
          }
          .hamburgerMenu{
            @apply fixed bottom-0 right-0 bg-color_2;
            @apply pb-6 pt-7 px-4;
          }
            .menuMobile{
              @apply fixed h-full w-full top-0 right-0 left-0 bottom-0;
            }
        }
      }
      .changeOpacity {
        @apply opacity-70 hover:opacity-100;
      }
    }
  }
  .hamburger{
    @apply bg-color_2 !important;
  }
}
</style>

<style src="@/assets/tailwind.css"></style>