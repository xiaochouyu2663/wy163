<template>
  <div>
      <Nhead></Nhead>
        
        <div style="width:1200px;margin:15px auto 0;">
            <AsideMenu :curPath="'partner'"></AsideMenu>
            <div >一阶伙伴</div>
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


