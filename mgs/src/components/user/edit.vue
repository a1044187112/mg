<template>
	<div id="edit">
		<div class="title">
			<span class="t">编辑资料</span>
			<span class="right">完成</span>
		</div>
		<ul class="list">
			<li class="i">
				<span class="t">修改头像</span>
				<input type="file" value='修改头像' />
			</li>
			<li class="i">
				<span class="t">品牌名称</span>
				<input type="text" value='可口可乐' />
			</li>
			<li class="i">
				<span class="t">行业</span>
				<input type="text" value='食品饮料' />
			</li>
			<li class="i">
				<span class="t">公司名称</span>
				<input type="text" value='可口可乐' />
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"edit"
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
	.list{
		width: 96%;
		margin: auto;
		margin-top: 40px;
	}
	.list .i{
		width: 100%;
		height: 28px;
		line-height: 28px;
		border-bottom: 1px solid #efefef;
		text-align: left;
		padding-top: 20px;
	}
	.list .i span{
		display: inline-block;
		width: 25%;
		padding-left: 5px;
		color: #969696;
		font-size: 16px;
	}
	.list .i input{
		border: none;
		outline: none;
		font-size:18px;
	}
</style>