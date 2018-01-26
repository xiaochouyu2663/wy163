<template>
  <div>
      <Nhead></Nhead>
        <UserHead></UserHead>
        <div style="width:1200px;margin:15px auto 0;">
            <AsideMenu :curPath="'safety'"></AsideMenu>
            <div >账户安全</div>
        </div>
  </div>
</template>
<script>
import Nhead from '../common/Nhead'
import UserHead from './UserHead'
import AsideMenu from './AsideMenu'
export default {
    components:{
        Nhead,UserHead,AsideMenu
    }
}
</script>
<style>
    
</style>


