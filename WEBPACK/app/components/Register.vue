<template>
  <Mhead :isLogin="isLogin"></Mhead>
</template>
<script>
import Mhead from './Mhead.vue'
export default {
    data(){
        return {
            isLogin:false
        }
    },
  components:{
      Mhead
  }
}
</script>
<style>

</style>



