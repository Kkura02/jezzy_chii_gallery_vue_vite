<template>
  <section id="gallery">
    <div class="flex items-center justify-between py-4 w-full">
      <h1>Gallery</h1>
      <!-- <select v-model="category">
        <option @click="toggleAnimationClass" value="sfw">SFW</option>
        <option @click="toggleAnimationClass" value="merch">MERCH</option>
        <option @click="toggleAnimationClass" value="nsfw">NSFW</option>
      </select> -->
      <DropDown :selectedCategory="selectedCategory" @update:selectedOption="updateSelectedCategory"/>
    </div>

    <div class="gallery-cont">
      <section :key="category" class="gallery-layout" :class="{ 'gallery-trans-enter': applyAnimation, 'gallery-trans-exit' : !applyAnimation}">
        <div v-for="(group,groupIndex) in groupedImages" :key="groupIndex" class="column">
          <div v-for="(image, imageIndex) in group" :key="imageIndex" class="gallery-item" >
            <div class="img-filter"></div>
            <img :src="image" :alt="`Image ${image}`" @load="imageLoaded">
          </div>
        </div>
      </section>
      <!-- <div v-if="false" class="flex justify-center">
        <div class="spinner"></div>
      </div> -->
    </div>
    
  </section>
</template>

<script>
import { computed, onBeforeMount, onMounted, ref, watch, watchEffect } from 'vue';
import {gallery} from '../constants';
import DropDown from '../components/DropDown.vue';

export default {
  components:{
    DropDown
  },

  setup() {
    const currentCategory = ref("SFW");
    const groupCount = ref(3);
    const groupedImages = ref([]);
    const imageLoadCount = ref(0);
    const isGalleryReady = ref(false);
    const applyAnimation = ref(true);

    // Method to toggle animation class

    const images = computed(() => {
      return gallery[0][currentCategory.value] || [];
    });

    const getTotalImageCount = computed(() => {
      return groupedImages.value.reduce((total, group) => total + group.length, 0);
    });

    const imageLoaded = () => {
      imageLoadCount.value++;
      // console.log(`Image ${imageLoadCount.value} loaded`);
      if (imageLoadCount.value === getTotalImageCount.value) {
        isGalleryReady.value = true;
      }
    };

    // Function to split images into groups
    const splitImagesIntoGroups = () => {
      const chunkSize = Math.ceil(images.value.length / groupCount.value);
      groupedImages.value = [];
      for (let i = 0; i < images.value.length; i += chunkSize) {
        groupedImages.value.push(images.value.slice(i, i + chunkSize));
      }
    };

    const updateSelectedCategory = (category) => {
      currentCategory.value = category;
      console.log(currentCategory.value)
    }

    // Watch for changes in the category and reset image-related values
    watch(currentCategory, () => {
      // Reset values when the category changes
      // console.log(`images: ${images.value}`)
      imageLoadCount.value = 0;

      // Split images into groups
      // console.log(`applyAnimation before: ${applyAnimation.value}`)
      splitImagesIntoGroups();
      applyAnimation.value = false
      

      setTimeout(() => {
        applyAnimation.value = true
      }, 600)
      // console.log(`applyAnimation after: ${applyAnimation.value}`)
    });

    onBeforeMount(() => {
      // Initial split of images into groups
      splitImagesIntoGroups();
    });

    return { currentCategory, images, groupedImages, isGalleryReady, imageLoaded, applyAnimation, updateSelectedCategory };
  },
}
</script>

<style>
#gallery{
  @apply flex flex-col justify-start items-center
}
.gallery-cont{
  @apply sm:mt-0 px-8 sm:px-24 w-full h-auto py-8
}

.gallery-layout{
  @apply flex flex-col gap-[10px]
}
.gallery-layout .column{
  @apply flex flex-col gap-[10px]
}

.gallery-item{
  @apply cursor-pointer relative
}
.gallery-item:hover{
  box-shadow: 0px 0px 20px 1px #f8f7fd;
}

.gallery-item img{
  @apply w-full rounded-md h-full object-cover
}

.img-filter{
  @apply absolute w-full h-full bg-kokoEyeLiner rounded-md bg-opacity-30 hover:bg-opacity-0
}

@media only screen and (min-width: 768px) {
  .gallery-layout {
    @apply flex-row
  }
}

/* #gallery select{
  @apply h-fit appearance-none text-center font-bold tracking-wide text-kokodimPurple bg-kokoprimary shadow-inner rounded-lg px-4 py-2 hover:bg-kokoWhite
}
#gallery select option{
  @apply text-center w-full
} */

/* .spinner {
   position: relative;
   width: 22.4px;
   height: 22.4px;
}
.spinner::before,
.spinner::after {
   content: '';
   width: 100%;
   height: 100%;
   display: block;
   animation: spinner-b4c8mmmd 0.5s backwards, spinner-49opz7md 1.25s 0.5s infinite ease;
   border: 5.6px solid #f8f7fd;
   border-radius: 50%;
   box-shadow: 0 -33.6px 0 -5.6px #f8f7fd;
   position: absolute;
}

.spinner::after {
   animation-delay: 0s, 1.25s;
}

@keyframes spinner-b4c8mmmd {
   from {
      box-shadow: 0 0 0 -5.6px #f8f7fd;
   }
}

@keyframes spinner-49opz7md {
   to {
      transform: rotate(360deg);
   }
} */

.gallery-trans-enter {
	-webkit-animation: gallery-trans-enter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: gallery-trans-enter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes gallery-trans-enter {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes gallery-trans-enter {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}


.gallery-trans-exit {
	-webkit-animation: gallery-trans-exit 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: gallery-trans-exit 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes gallery-trans-exit {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes gallery-trans-exit {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
}

</style>