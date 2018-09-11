<template>
	<div id="order">
		<div class="title">
			<span class="t">订单</span>
		</div>
		<div class="m">
			<router-link to="#">全部</router-link>
			<router-link to="#">待发布</router-link>
			<router-link to="#">审核状态</router-link>
			<router-link to="#">发布中</router-link>
			<router-link to="#">已发布</router-link>
		</div>
		<router-view></router-view>
		<order1></order1>
	</div>
</template>
<script>
	import order1 from './order_1.vue'
	export default{
		neame:"order",
		components:{order1}
	}
</script>
<style>
	 *{
		list-style: none;
		margin: 0;
	}
	.title{
		width: 100%;
		position: relative;
		height: 36px;
		line-height: 36px;
	}
	.title .right{
		position: absolute;
		top: 0;
		height: 36px;
		line-height: 36px;
		display: inline-block;
		right: 3%;
	}
	#order .m{
		width: 100%;
		font-size: 0;
		border-bottom: 1px solid #dfdfdf;
	}
	#order .m a{
		display: inline-block;
		width: 20%;
		text-align: center;
		font-size: 16px;
		text-decoration: none;
		color: #000;
		height: 36px;
		line-height: 36px;
		
	} 
</style>