<template>
  <div class="home" >
    <mt-search v-model="searchData"  :result="searchResult" placeholder="商品搜索：请输入商品关键字" ></mt-search>
    
    <Nfoot></Nfoot>
  </div>
</template>

<script>
import Nfoot from './common/Nfoot.vue'
export default {
  data () {
    return {
      searchData:'',
      search:[
      'Apple',  
        // 'Banana',  
        // 'Orange',  
        // 'Durian',  
        // 'Lemon',  
        // 'Peach',  
        // 'Cherry',  
        // 'Berry',  
        // 'Core',  
        // 'Fig',  
        // 'Haw',  
        // 'Melon',  
        // 'Plum',  
        // 'Pear',  
        // 'Peanut',  
        // 'Other',
        // 'Berry',  
        'Core',  
        'Fig',  
        'Haw',  
        'Melon',  
        'Plum',  
        'Pear',  
        'Peanut',  
        'Other'
          ]
    }
  },
  computed:{
    searchResult(){
      return this.search.filter(value => new RegExp(this.searchData, 'i').test(value)); 
    } 
  },
  components: {
    Nfoot
  }
}
</script>

<style>
  .home .mint-searchbar-cancel {
    display: none;
  }
  .mint-searchbar-inner .mintui-search {
    font-size: 16px;
  }
</style>
