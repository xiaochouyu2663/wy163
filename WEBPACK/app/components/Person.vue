<template>
<div>
    <Nhead></Nhead>
  <div style="min-height:500px;width:1200px;margin:0 auto;">
      <div>
          <el-upload action="https://jsonplaceholder.typicode.com/posts/">

          </el-upload>
      </div>
  </div>
  <Nfoot></Nfoot>
</div>
  
</template>
<script>
import Nhead from './Nhead.vue'
import Nfoot from './Nfoot.vue'
export default {
  components:{
      Nhead,Nfoot
  }
}
</script>

<style scoped lang="scss">

</style>

