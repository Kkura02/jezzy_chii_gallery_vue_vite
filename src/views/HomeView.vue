<template>
  <main class="home">
    <div class="info-section">
      <div class="pfp-cont">
        <img class="pfp" :src="pfp" alt="jezzy_chii">
      </div>
        <h1>Jezzy Chii</h1>
        <p>Artist/Illustrator</p>
          <RouterLink :to="{name: 'gallery'}" class="hidden sm:flex">
            <Button contStyle="relative" btnStyle="text-2xl font-bold rounded-md py-2 px-4" text="Explore"/>
          </RouterLink>
    </div>
    <SliderCustom/>
      <RouterLink :to="{name: 'gallery'}" class="sm:hidden flex">
        <Button contStyle="relative" btnStyle="text-2xl font-bold rounded-md py-2 px-4" text="Explore"/>
      </RouterLink>
  </main>
</template>

<script>
import { ref } from 'vue';
import {jezzy} from '../assets/Images'
// import Slider from '../components/Slider.vue'
import SliderCustom from '../components/SliderCustom.vue';
import Button from '../components/Button.vue';
import { RouterLink } from 'vue-router';

export default{
  components:{
    SliderCustom,Button
  },
  setup(){
    const pfp = ref(jezzy)
    return{pfp}
  }
}


</script>

<style>
  @media (min-width: 1024px) {
    main {
      place-items: center;
    }
  }
  @media (max-width: 768px) {
    main{
      /* flex-direction: column; */
      place-items: center;

      /* @apply flex flex-col place-items-center */
    }
  }

  main{
    @apply flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-32 h-full
  }

  .info-section {
    padding: 0 auto;

    @apply w-full sm:w-1/2 h-full flex flex-col items-center justify-center gap-4
  }

  .pfp-cont{
    border-radius: 50%;
    background: linear-gradient(225deg, #f6d4cb, #7569b7);
    box-shadow:  -20px 20px 60px #968dd8,
                20px -20px 60px #f8f7fd;

    @apply rounded-full flex justify-center p-0 w-[50%] sm:w-3/4 p-1
  }
  .pfp{
    @apply object-contain rounded-full w-full
  }
</style>
