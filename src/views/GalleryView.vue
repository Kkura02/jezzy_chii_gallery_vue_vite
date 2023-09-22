<template>
  <section id="gallery">
    <div class="flex items-center justify-between sm:justify-start sm:gap-12 py-4 w-full">
      <h1>Gallery</h1>
      <DropDown :selectedCategory="selectedCategory" @update:selectedOption="updateSelectedCategory"/>
    </div>

    <div class="gallery-cont">
      <section :key="category" class="gallery-layout" :class="{ 'gallery-trans-enter': applyAnimation, 'gallery-trans-exit' : !applyAnimation}">
        <div v-for="(group,groupIndex) in groupedImages" :key="groupIndex" class="column">
          <div v-for="(image, imageIndex) in group" :key="imageIndex" class="gallery-item" @click="imageClicked(image)">
            <div class="img-filter"></div>
            <img :src="image" :alt="`Image ${image}`" @load="imageLoaded" @click.right.prevent>
          </div>
        </div>
      </section>
    </div>
    <teleport to='#modal' v-if="isImageClicked">
      <div class="w-full h-full fixed flex justify-center items-center top-0 left-0 bg-slate-900 bg-opacity-50 filter backdrop-blur-sm cursor-pointer px-4 sm:px-12 py-4 sm:py-12" @click="isImageClicked = false">
        <img :src="enlargedImage" :alt="`Image: ${enlargedImage}`" class="w-fit h-fit object-contain">
      </div>
    </teleport>
  </section>
</template>

<script>
import { computed, onBeforeMount, ref, watch, Teleport} from 'vue';
import {gallery} from '../constants';
import DropDown from '../components/DropDown.vue';

export default {
  components:{
    DropDown, Teleport
  },

  setup() {

    // ******************************************************************

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

    // Watch for changes in the category and reset image-related values
    watch(currentCategory, () => {
      // Reset values when the category changes
      // console.log(`images: ${images.value}`)
      imageLoadCount.value = 0;

      // Setting the applyAnimation to false causing, giving the gallery the exit animation.
      applyAnimation.value = false

      // Split images into groups, basicallly this is the one rendering the images when category changes
      setTimeout(() => {
        splitImagesIntoGroups();
      },500)
      
      // Delayed application of the enter animation, setting to true giving the galler enter animation
      setTimeout(() => {
        applyAnimation.value = true
      }, 600)
    });

    onBeforeMount(() => {
      // Initial split of images into groups
      splitImagesIntoGroups();
    });

    // ******************************************************************
    // function for updating the gallery view when changing the category selected
    const updateSelectedCategory = (category) => {
      currentCategory.value = category;
      console.log(currentCategory.value)
    }

    // ******************************************************************
    // function for showing up the clicked image in a larger canvas
    const isImageClicked = ref(false);
    const enlargedImage = ref();

    const imageClicked = (image) => {
      enlargedImage.value = image;
      isImageClicked.value = true
    }

    // ******************************************************************
    return { currentCategory, images, groupedImages, isGalleryReady, imageLoaded, applyAnimation, updateSelectedCategory, isImageClicked, imageClicked, enlargedImage};
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
  @apply flex flex-col sm:flex-row gap-[10px] justify-center items-start
}
.gallery-layout .column{
  @apply flex flex-col gap-[10px] sm:w-[33%]
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