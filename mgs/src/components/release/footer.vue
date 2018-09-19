<template>
	<div id="footers">
		<footer>
			<span class="sel"></span><span class="text">全选</span>
			<span class="text delete">删除</span>
			<span @click="selttle" class="selttle">结算</span>
			<span class="total_p">总计：<span class="val">￥0</span></span>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"footers",
		methods:{
			selttle(){
				this.$emit('selttleOrder');
			}
		}
	}
</script>
<style>
footer{
		height: 50px;
		position: fixed;
		width:100%;
		bottom: 0;
		text-align: left;
		border-top: 1px solid #cfcfcf;
		background: white;
		font-size: 14px;
	}
	footer .sel{
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../../static/icon/icon27.png);
		background-size: 100% 100%;
		vertical-align: bottom;
		margin-top: 15px;
		margin-right: 5px;
		margin-left: 6px;
	}
	footer .sel.active{
		background: url(../../../static/icon/icon19.png);
		background-size: 100% 100%;
	}
	footer .delete{
		margin-left: 20px;
	}
	footer .total_p{
		float: right;
		margin-right: 15px;
		margin-top: 15px;
		vertical-align: bottom;
	}
	footer .total_p .val{
		color: #eb5c52;
	}
	footer .selttle{
		float: right;
		margin-right: 10px;
		display: inline-block;
		height: 32px;
		line-height: 32px;
		border-radius: 15px;
		width: 80px;
		text-align: center;
		margin-top: 9px;
		background: #343434;
		color: white;
		letter-spacing: 1px;
	} 
</style>