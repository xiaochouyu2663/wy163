<template>
  <div>
      <input type="text" v-model="msg">
  </div>
</template>
<script>
import Home from './components/Home'
var desss=require('desss')
export default {
 name:'App',
 data(){
     return {
         msg:'sdfds'
     }
 },
 created(){
     console.log(__dirname)
     desss()
 }
}
</script>
<style>

</style>


