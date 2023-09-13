<template>
  <section>
    <!-- <Button @click="navBack" contStyle="absolute top-0 left-5" btnStyle="rounded-full py-2 px-3" text="<-"/> -->
    <div>
      <h1>this is gallery</h1>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  components:{
    Button
  },
  methods:{
    navBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>