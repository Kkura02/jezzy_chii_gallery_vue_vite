<template>
    <div class="w-full h-full flex items-start justify-center max-w-[50%]">
        <Splide :options="{rewind: true}">
            <SplideSlide v-for="slide in slides" :key="slide.id">
                <img class="object-contain h-full" :src="slide.src">
                <p>{{ slide.id }} - {{ slide.src }}</p>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import featuredImages from '../constants'

// const slides = ref(featuredImages)
export default {
    components:{
        Splide, SplideSlide
    },
    data(){
        return{
            slides: featuredImages,

            // options:{
            //     rewind: true,
            // }
        }
    },
}
</script>

<style>


</style>