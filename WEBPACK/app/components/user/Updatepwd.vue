<template>
  <div>
      <Nhead></Nhead>
        
        <div style="width:1200px;margin:15px auto 0;">
            <AsideMenu :curPath="'updatepwd'"></AsideMenu>
            <div >修改密码</div>
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


