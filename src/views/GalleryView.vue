<template>
  <section>
    <h1>this is gallery</h1>
    <select v-model="category" @keydown.enter.prevent>
      <option value="sfw">SFW</option>
      <option value="merch">MERCH</option>
      <option value="nsfw">NSFW</option>
    </select>
    <transition name="gallery-trans" mode="out-in">
      <div class="gallery-cont">
        <!-- temporarily deactivate the image loaded validator. as the merch is causing problem -->
          <div v-show="true" class="gallery-layout">
            <div v-for="(group,groupIndex) in groupedImages" :key="groupIndex" class="column">
              <div v-for="(image, imageIndex) in group" :key="imageIndex" class="gallery-item" >
                <img :src="image" :alt="`Image ${image}`" @load="imageLoaded">
              </div>
            </div>
          </div>
        <div v-if="false" class="flex justify-center">
          <div class="spinner"></div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { computed, onBeforeMount, onMounted, ref, watch, watchEffect } from 'vue';
import {gallery} from '../constants';

export default {
  components:{

  },

  setup() {
    const category = ref("sfw");
    const groupCount = ref(3);
    const groupedImages = ref([]);
    const imageLoadCount = ref(0);
    const isGalleryReady = ref(false);

    const images = computed(() => {
      return gallery[0][category.value] || [];
    });

    const getTotalImageCount = computed(() => {
      return groupedImages.value.reduce((total, group) => total + group.length, 0);
    });

    const imageLoaded = () => {
      imageLoadCount.value++;
      console.log(`Image ${imageLoadCount.value} loaded`);
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
    watch(category, () => {
      // Reset values when the category changes
      console.log(images.value)
      imageLoadCount.value = 0;
      isGalleryReady.value = false;

      // Split images into groups
      splitImagesIntoGroups();
    });

    onBeforeMount(() => {
      // Initial split of images into groups
      splitImagesIntoGroups();
    });

    return { category, images, groupedImages, isGalleryReady, imageLoaded, imageError };
  },
}
</script>

<style>
.gallery-trans-enter-active, 
.gallery-trans-leave-active{
  @apply transition-all delay-200 duration-700 ease-in-out
}
.gallery-trans-enter-from, .gallery-trans-leave-to{
  @apply opacity-0
}
.gallery-trans-enter-from{
  @apply translate-y-full
}
.gallery-trans-leave-to{
  @apply -translate-y-full
}

.gallery-cont{
  @apply sm:mt-10 px-8 sm:px-24 w-full h-full
}

.gallery-layout{
  /* display: flex;
  flex-direction: column;
  gap: 10px; */

  @apply flex flex-col gap-[10px]
}
.gallery-layout .column{
  /* display: flex;
  flex-direction: column;
  gap: 10px; */

  @apply flex flex-col gap-[10px]
}
.gallery-item img{
  /* width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover; */

  @apply w-full rounded-md h-full object-cover
}

@media only screen and (min-width: 768px) {
  .gallery-layout {
    /* flex-direction: row; */

    @apply flex-row
  }
}

.spinner {
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
}

</style>