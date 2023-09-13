<template>
  <section>
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