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

<template>
  <main class="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-32 h-full">
    <div class="w-full sm:w-1/2 h-full flex flex-col items-center justify-center gap-4 sm:px-auto">
        <img class="object-contain rounded-full w-[50%] sm:w-3/4" :src="pfp" alt="jezzy_chii">
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
