<template lang="pug">
.pop_up-container(v-if="notification.state && this.$store.getters.GET_MAINTENANCE.state")
  .pop.content.animation.direction_y.order8(
    v-for="(element_popup, index) in notification.yourNotificationList",
    v-if="element_popup.state",
    :key="index"
  )
    .text-content
      p.date
        | {{ element_popup.date.day }} / {{ element_popup.date.month }} / {{ element_popup.date.year }}
      p.text
        | {{ element_popup.text }}
    p.button.content(
      v-for="(element_button, id) in element_popup.button",
      :key="id",
      v-if="element_button.state"
    )
      a.link(href="element_button.buttonLink")
        | {{ element_button.buttonText }}
</template>

<style lang="less" scoped>
@layer components {
  .pop_up-container {
    @apply absolute md:fixed top-0 right-0 flex flex-col space-y-6 mx-8 my-6;
    .pop.content {
      @apply ml-24 md:ml-0;
      @apply bg-black_11 rounded-lg shadow-lg px-6 py-5 border-l-8 border-color_1 border-opacity-60;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.85);
      @apply flex flex-col lg:flex-row justify-between items-center 2xl:items-end space-x-2;
      .date ,.text,.link{
        @apply text-xs !important;
      }
      .text-content {
        @apply flex flex-col lg:flex-row 2xl:flex-col justify-center items-start lg:space-x-2 2xl:space-x-0;
        .date {
          @apply text-black_1 text-opacity-50 !important;
        }
        .text {
          @apply text-black_1 text-opacity-70  !important;
        }
      }
      .button.content {
        .link {
          @apply pb-0 !important;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      notification: this.$store.getters.GET_NOTIFICATION,
    };
  },
  methods: {},
};
</script>