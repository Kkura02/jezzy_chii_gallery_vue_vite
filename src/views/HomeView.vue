<template>
  <main id="home">
    <div class="info-section">
      <!-- <div class="pfp-cont">
        <img class="pfp" :src="pfp" alt="jezzy_chii">
      </div> -->
      <div class="flex flex-col justify-evenly items-start">
        <h2 class="font-thin">Hello!</h2>
        <h1 class="">I'm Jezzy Chii,</h1>
        <p class="mt-6 text-2xl">a freelance illustrator specializing in anime-style character illustrations.</p>
      </div>
      <div class="hidden sm:flex flex-row justify-evenly items-center w-full ">
        <div class="flex flex-col justify-evenly items-center gap-2">
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="twitter">
            </a>
          </Button>
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="discord">
            </a>
          </Button>
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="email">
            </a>
          </Button>
        </div>
        <RouterLink :to="{name: 'gallery'}">
          <Button contStyle="relative flex h-[100px]" btnStyle="standard-size text-2xl font-bold rounded-md py-2 px-4" text="Explore"/>
        </RouterLink>
      </div>
    </div>

    <SliderCustom @click.right.prevent/>

    <div class="sm:hidden flex flex-col justify-evenly items-center gap-4">
      <RouterLink :to="{name: 'gallery'}" >
        <Button contStyle="relative flex mt-2 sm:mt-8" btnStyle="standard-size text-2xl font-bold rounded-md py-2 px-4" text="Explore"/>
      </RouterLink>
      <div class="flex flex-row justify-evenly items-center gap-2">
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="twitter">
            </a>
          </Button>
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="discord">
            </a>
          </Button>
          <Button btnStyle="">
            <a href="" target="_blank">
              <img class="icon" src="" alt="email">
            </a>
          </Button>
        </div>
    </div>
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
    @apply flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-8 sm:gap-12 h-full px-[2rem] sm:px-[4rem]
  }

  .info-section {
    padding: 0 auto;

    @apply w-full sm:w-1/2 sm:h-full flex flex-col items-center justify-center gap-4
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
