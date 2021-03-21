<template lang="pug">
  .separateur
    .container
      .element
      .element
      .element
</template>


<style lang="less" scoped>
@layer components {
  .container{
    @apply flex flex-row space-x-5 my-4;
    .element{
      @apply bg-color_2 my-6;
      height: 0.35rem;
    }
    .element:nth-child(1){
      @apply w-32;
    }
    .element:nth-child(n + 2){
      @apply w-10;
    }
  }
}
</style>