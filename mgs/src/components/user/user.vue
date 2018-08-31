<template>
	<div id="info">
		<div class="title">
			<span class="right" @click="jump">编辑资料</span>
		</div>
		<div class="hp">
			<img src="../../assets/hp.jpg" />
		</div>
		<div class="info_u">
			<span class="info_i">企业认证</span>
			<span class="info_r">已认证</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"user",
		methods: {
			jump() {
				this.$router.push({path:'/user/edit'});
			},
		},
	}
</script>
<style>
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
	.hp{
		width: 150px;
		height: 150px;
		margin: auto;
		margin-top: 40px;
	}
	.hp img{
		width: 100%;
		height: 150px;
		border-radius: 50%;
	}
	.info_u{
		text-align: left;
		padding-left: 10%;
		padding-top: 40px;
	}
	.info_u .info_r{
		float: right;
		margin-right: 8%;
	}
</style>