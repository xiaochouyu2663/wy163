<template>
	<div class="loadingWord">
		<span class="iconfont icon-shangla">{{loadingWord}}</span>
	</div>
</template>

<script>
export default {
	name:'loadWord',
    props:{
    	loadingWord:{
    		type:String,
    		default:""
    	}
    } 
};
</script>

<style lang="less" scoped>
 	@import '~vux/src/styles/reset.less';
	.loadingWord{
		text-align: center;
		z-index: 100;
		width: 100%;
		height:30px;
		line-height: 30px;	
		span{
			vertical-align: middle;
			margin-left: 0.14rem;
			
			&:before{
				color:#666;
				margin-right: 0.1rem;
			}
			&.iconfont{
				font-size:14px;
			}
		}
	}
</style>