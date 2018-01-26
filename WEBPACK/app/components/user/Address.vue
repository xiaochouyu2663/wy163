<template>
  <div>
      <Nhead></Nhead>
        
        <div style="width:1200px;margin:15px auto 0;">
            <AsideMenu :curPath="'address'"></AsideMenu>
            <div >收货地址</div>
        </div>
  </div>
</template>
<script>
import Nhead from '../common/Nhead'

import AsideMenu from './AsideMenu'
export default {
    components:{
        Nhead,AsideMenu
    }
}
</script>
<style>
    
</style>


