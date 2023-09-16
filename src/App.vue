<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <RouterView v-slot="{ Component }">
      <Transition name="route-trans" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </RouterView>
</template>

<style>
#app {
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal; */

  @apply flex z-[3] mx-auto px-[1rem] font-normal min-h-screen w-full justify-center
}

.route-trans-enter-active, 
.route-trans-leave-active{
  @apply transition-all delay-200 duration-700 ease-in-out
}
.route-trans-enter-from, .route-trans-leave-to{
  @apply opacity-0
}
.route-trans-enter-from{
  @apply translate-y-full
}
.route-trans-leave-to{
  @apply -translate-y-full
}
</style>
