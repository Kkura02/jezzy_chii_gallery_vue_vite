<template>
  <!-- Carousel -->
    <div @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay" class="carousel w-full h-fit sm:h-full flex items-center justify-center max-w-full sm:min-h-full group relative rounded-md">
      <div class="slider-bg1"></div>
      <div class="slider-bg2"></div>
      <!-- Carousel inner -->
      <div class="carousel-inner flex overflow-hidden relative border-4 border-solid border-kokoWhite rounded-md transition ease-in-out delay-200 bg-transparent hover:bg-kokoEyePink duration-500 ">
          <!-- Carousel-item-component-->
          <div v-for="(slide,index) in slides" :key="`item-${index}`">
            <!-- Carousel-item-inside-->
            <transition :name="transitionEffect">
              <div class="absolute bottom-0 top-0 left-0 right-0" v-show="currentSlide === index">
                <img class="object-contain h-full w-full rounded-md" :src="slide">
              </div>
            </transition>
            <!-- Carousel-item -->
          </div>
        <div class="absolute inset-0 flex items-center justify-between p-2 ">
          <button @click="slideControl('prev')" @mouseover="chevronHover = true" @mouseleave="chevronHover = false" class="object-contain max-w-[20px] sm:max-w-[30px] rounded-lg opacity-0 group-hover:opacity-60 bg-kokoWhite bg-opacity-80 p-1">
            <img :src="chevronLeft" alt="chevronLeft">
          </button>
          <button @click="slideControl('next')" @mouseover="chevronHover = true" @mouseleave="chevronHover = false" class="object-contain max-w-[20px] sm:max-w-[30px] rounded-lg opacity-0 group-hover:opacity-60 bg-kokoWhite bg-opacity-80 p-1">
            <img :src="chevronRight" alt="chevronRight">
          </button>
        </div>
      </div>
      <div class="vignette"></div>
      <!-- <p class="text-3xl">{{ currentSlide }}</p> -->
    </div>
</template>

<script>

import {chevronLeft,chevronRight} from '../assets/Icons'
import featuredImages from '../constants'
export default {
    components:{
        
    },
    data(){
        return{
            slides: featuredImages,
            chevronLeft: chevronLeft,
            chevronRight: chevronRight,

            chevronHover: false,

            currentSlide: 0,
            slideInterval: null,
            transitionEffect: 'slide-in'
        }
    },
    methods:{
      setCurrentSlide(index){
        this.currentSlide = index;
      },
      slideControl(direction){
        if(direction === 'next'){
          const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
          this.transitionEffect = 'slide-in'
          this.setCurrentSlide(index);
        }else if(direction === 'prev'){
          const index = this.currentSlide >  0 ? this.currentSlide - 1 : this.slides.length - 1;
          this.transitionEffect = 'slide-out'
          this.setCurrentSlide(index);
        }
        
      },
      pauseAutoPlay(){
        clearInterval(this.slideInterval);
      },
      resumeAutoPlay(){
        this.slideInterval = setInterval(() => {
        const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
        this.setCurrentSlide(index);
      },5000)
      }
    },
    // typo here, intentional to pause the automatic transition
    mounted(){
      this.slideInterval = setInterval(() => {
        const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
        this.setCurrentSlide(index);
      },5000)
    },
    beforeUnmount(){
      clearInterval(this.slideInterval);
    }
}
</script>

<style>
.slider-bg1,
.slider-bg2{
  @apply transform transition-all delay-200 duration-500 ease-in-out shadow-2xl w-full h-full absolute rounded-md
}
.vignette{
  @apply z-[5] hidden sm:flex group-hover:hidden opacity-10 absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black rounded-md
}

.carousel-inner,
.slider-bg1,
.slider-bg2,
.vignette
{
  @apply h-[200px] w-[320px] sm:h-[400px] sm:w-[800px] 2xl:h-[500px] 2xl:w-[1000px] 
}

.carousel-inner{
  -webkit-transition: background-color 1000ms linear;
    -moz-transition: background-color 1000ms linear;
    -o-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;

    @apply transition ease-in-out delay-200 duration-500 bg-kokoWhite group-hover:bg-gradient-to-tr from-kokosecondary to-kokoprimary
}
/* Hide to Reveal */
/* .carousel:hover .slider-bg1{
  @apply -translate-y-3 -translate-x-3 sm:-translate-y-6 sm:-translate-x-6 bg-kokoprimary
}
.carousel:hover .slider-bg2{
  @apply translate-y-3 translate-x-3 sm:translate-y-6 sm:translate-x-6 bg-kokosecondary
} */
/* Hide to Reveal */

/* Reveal to Hide */
.slider-bg1{
  @apply -translate-y-3 -translate-x-3 sm:-translate-y-6 sm:-translate-x-6 bg-kokoprimary
}
.slider-bg2{
  @apply translate-y-3 translate-x-3 sm:translate-y-6 sm:translate-x-6 bg-kokosecondary
}

.carousel:hover .slider-bg1{
  @apply translate-x-0 translate-y-0
}
.carousel:hover .slider-bg2{
  @apply translate-x-0 translate-y-0
}
/* Reveal to Hide */

.slide-in-enter-active, 
.slide-in-leave-active,
.slide-out-enter-active, 
.slide-out-leave-active{
  transition: all 1s ease-in-out;
}
.slide-in-enter-from{
  transform: translateX(-100%);
}
.slide-in-leave-to{
  transform: translateX(100%);
}

.slide-out-enter-from{
  transform: translateX(100%);
}
.slide-out-leave-to{
  transform: translateX(-100%);
}

</style>