<template>

<div style="padding:40px;border:1px solid #ccc;background:#fff;">
  <!-- boostrap 模态框 -->
  <h3>1.模态框展示</h3>
  <div class="" >
    <button type="button" data-toggle="modal" class="btn btn-primary" data-target="#modal1">点击出现模态框</button>
    <div class="modal fade" id="modal1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button">&times;</button>
          模态框</div>
          <div class="modal-body">点击下面的按钮即可通过 JavaScript 启动一个模态框。此模态框将从上到下、逐渐浮现到页面前。</div>
          <div class="modal-footer">2012-12-12</div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
    
</style>


