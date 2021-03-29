<template lang="pug">
.pop_up-container(v-if="notification.state")
  .pop.content.animation.direction_y.order8(
    v-for="(element_popup, index) in notification.yourNotificationList",
    v-if="element_popup.state",
    :key="index",
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
      @apply bg-black_11 bg-opacity-80 rounded-lg shadow-lg px-6 py-5 border-l-8 border-color_1 border-opacity-60;
      @apply flex flex-col md:flex-row justify-between items-end space-x-2;
      .text-content {
        @apply flex flex-col items-start;
        .date {
          @apply text-black_1 text-opacity-50 text-xs !important;
        }
        .text {
          @apply text-black_1 text-opacity-70 text-xs md:text-sm;
        }
      }
      .button.content {
        .link {
          @apply text-sm;
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