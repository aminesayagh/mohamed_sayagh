<template lang="pug">
  .allContain
    .main.container
      .image.container
        .image.sous-container
          .image.cadre
            a(:href="content.image.link")
              img(src="~/assets/image_mohammed.png" :alt="content.image.alt")
      .content.container
        .containerElement
          h3.animation.direction_y.order2
            | {{ content.sousTitre }}
          h1.animation.direction_y.order2
            | {{ content.titre }}
          .h-2
          .content.paragraphe.animation.direction_y.order2
            v-text(v-for="(main, index) in content.paragraphe" :key="index")
              v-text(v-if="!main.link")
                | {{ main.text }}
              a(:href="main.link" v-else)
                |  {{ main.text }} 
          //- button.button
          //-   svg(id='demo', xmlns="http://www.w3.org/2000/svg" width="220" height="60" viewBox="0 0 220 60")
          //-     rect(x="0", y="0", width="60", height="60", rx="30", ry="30" )
          //-     text(transform="translate(80 38)" text-anchor="middle" )
          //-       | Read More
          //- .vide-for-flex
</template>

<style lang="less" scoped>
@layer components {
  .allContain{
    @apply lg:fixed top-0 min-h-screen w-screen flex items-center;
    .main.container{
      @apply grid justify-center min-w-full items-center grid-cols-12 md:grid-rows-1;
      .image.container{
        @apply col-start-2 lg:col-start-2 xl:col-start-2 col-span-8 lg:col-span-4;
        @apply max-lg:row-start-1 max-lg:row-span-5;
        min-height: 45vh;
        .image.sous-container{
          @apply grid grid-cols-12 grid-rows-1;
          .image.cadre{
            @apply col-start-1 col-span-10 sm:col-span-7 lg:col-start-3 lg:col-span-9;
          }
          @apply sm:-ml-8 lg:ml-0;
        }
      }
      .content.container{
        @apply max-lg:row-start-6 max-lg:row-span-6 col-start-2 sm:col-start-2 md:col-start-2 lg:col-start-6 xl:col-start-6 col-span-8 sm:col-span-9 md:col-span-8 lg:col-span-7 xl:col-span-6;
        @apply max-lg:mb-12 ;
        @apply grid grid-cols-12 grid-rows-1;
        .containerElement{
          @apply col-start-1 lg:col-start-2 xl:col-start-2 col-span-12 lg:col-span-10 xl:col-span-10;
          @apply text-justify;
          @apply md:pt-6 xl:pt-0;
          h3 {
            @apply tracking-widest text-base text-black_1 text-opacity-60;
          }
          h1 {
            @apply text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl;
            line-height: 5rem !important;
            @apply -ml-6 md:-ml-10 truncate;
            width: 150%;
          }
          @media (min-width:768px) and (max-width: 1280px) {
            h1 {
              line-height: 4rem !important;
              }
          }
          .content.paragraphe{
            @apply text-justify;
            *{
              font-size: 1.1rem !important;
              @apply max-md:leading-8 2xl:leading-8 !important;
              line-height: 1.85rem !important;
            }
          }
          .button{
            @apply fill-current text-color_2 text-opacity-70 my-6;
            #demo {
              @apply cursor-pointer overflow-visible ;
              text{
                @apply font-extrabold text-black_1 text-opacity-70 leading-7 pb-4 tracking-widest;
                @apply focus:ring-2 focus:ring-color_2 bg-color_2;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.main;
    },
  },
};
</script>