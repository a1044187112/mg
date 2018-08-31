<template>
	<div id="footers">
		<footer>
			<span class="sel"></span><span class="text">全选</span>
			<span class="sel"></span><span class="text">删除</span>
			<span class="selttle">结算</span>
			<span class="total_p">合计：100000￥</span>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"footers"
	}
</script>
<style>
footer{
		height: 50px;
		line-height: 50px;
		position: fixed;
		width:100%;
		bottom: 0;
		text-align: left;
		border-top: 1px solid #cfcfcf;
		background: white;
	}
	footer .sel{
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #afafaf;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 5px;
		margin-left: 6px;
	}
	footer .total_p{
		float: right;
		margin-right: 15px;
	}
	footer .selttle{
		float: right;
		margin-right: 10px;
		display: inline-block;
		height: 32px;
		line-height: 32px;
		border: 1px solid #dfdfdf;
		border-radius: 10px;
		width: 80px;
		text-align: center;
		margin-top: 8px;
	}
</style>