<template>
<div style="max-width:1000px;margin:0 auto;outline:1px solid #ccc;padding:20px;">
    <el-row>
      <el-col>
          <div class="grid-content bg-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" >
          <div class="grid-content bg-dark"></div>
      </el-col>
      <el-col :span="12">
          <div class="grid-content bg-light"></div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="8" >
          <div class="grid-content bg-dark"></div>
      </el-col>
      <el-col :span="8" >
          <div class="grid-content bg-light"></div>
      </el-col>
      <el-col :span="8" >
          <div class="grid-content bg-dark"></div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-dark"></div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="end">
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-light"></div>
        </el-col>
    </el-row>
    <el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
</div>
  
  
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
.el-row{
    margin-bottom:20px;
    background:#99a9bf;
    padding:10px;
    border-radius:5px;
}
.grid-content{
    background:gray;
    min-height:30px;
    border-radius:5px;
    &.bg-dark{
        background:#aaa;
    }
    &.bg-light{
        background:grey;
    }
}
</style>


