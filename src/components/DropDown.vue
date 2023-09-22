<template>
  <section class="relative">
    <Button btnStyle="standard-size" @click="isDropped = !isDropped">
      <span :key="selectedCateg" class="font-bold">{{ selectedCateg }}</span>
    </Button>
    <div v-show="isDropped" class="category-list-cont shadow-md rounded-lg">
      <button @click="isSelected(category)" v-for="(category,index) in categories" :key="`category-${index}`" class="category-list-item" :class="{ 'rounded-t-lg': index===0, 'rounded-b-lg': index === categories.length - 1}">
        {{ category }}
      </button>
    </div>
  </section>
</template>

<script>
import { ref,onMounted, defineEmits } from 'vue'
import Button from './Button.vue'
import {gallery} from '../constants';

export default {
    components: {
      Button
    },
    setup(props){
      const categories = ref(Object.keys(gallery[0]))

      const isDropped = ref(false)
      const selectedCateg = ref(props.selectedOption)

      // const isSelected = (category) =>{
      //   isDropped.value = false        
      //   selectedCateg.value = category;
      //   const emits = defineEmits();
      //   emits('update:selectedOption', category);
      // }

      return{categories, isDropped, selectedCateg}
    },
    props:{
      selectedOption: {
        type: String,
        default: 'SFW'
      }
    },
    // data(){
    //   return{
    //     // isDropped: false,
    //     // selectedCateg: this.selectedOption,
    //   }
    // },
    methods:{
      isSelected(category){
        this.isDropped = false        
        this.selectedCateg = category;
        // console.log(this.selectedCateg, this.isDropped);
        this.$emit('update:selectedOption', category)
      }
    }
}
</script>

<style>
.category-list-cont{
  @apply absolute -bottom-32 sm:-bottom-32 z-[2] bg-kokoWhite flex flex-col justify-around items-center h-fit w-full border text-kokoCoralPink px-0
}
.category-list-item{
  @apply py-2 hover:bg-kokoCoralPink hover:text-kokoWhite w-full text-center
}
</style>