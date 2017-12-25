<template>
	<div class="loading"><img src="../common/images/loading.gif"  alt=""></div>
</template>

<script>
export default {
    name: 'loading',
    props:{
    	loadingWord:{
    		type:String
    	}
    } ,
    data () {
        return {
    	};
  	}
};
</script>

<style lang="less" scoped>
 	@import '~vux/src/styles/reset.less';
	.loading{
		text-align: center;
		z-index: 1000;
		width: 100%;
		height:60px;
					
		img{
			margin: 0 auto;
			width: 30px;
			height: 30px;
			vertical-align: middle;
		}
		span{
			font-size:14px;
			vertical-align: middle;
			margin-left: 0.14rem;
			
		}
	}
</style>