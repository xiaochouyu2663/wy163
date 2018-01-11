<template>
  <div>
      <input type="text" v-model="msg">
      <el-button>默认按钮</el-button>
  </div>
</template>
<script>

import Home from './components/Home'
export default {
 name:'App',
//  components:{Button,Select},
 data(){
     return {
         msg:'sdfds'
     }
 },
 created(){
     console.log('sdfsfdsfsdfsfsfsf')
 }
}
</script>
<style>

</style>


