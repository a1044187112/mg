<template>
	<div id="certi">
		<div class="title">
			<span>身份证认证</span>
		</div>
		<ul class="u_i">
			<li class="l_i">
				<input type="text" placeholder="真实姓名" />
			</li>
			<li class="l_i">
				<input type="text" placeholder="身份证号码" />
			</li>
		</ul>
		
		<span class="next" @click="next">下一步</span>
	</div>
</template>
<script>
	export default{
		name:"certi",
		methods:{
			next(){
				this.$router.push({path:"/user/certi/img"});
			}
		}
	}
</script>
<style>
	#certi .u_i{
		margin-top: 10px;
		width: 100%;
	}
	#certi .u_i .l_i{
		width: 80%;
		height: 42px;
		line-height: 48px;
		border-bottom: 1px solid #777777;
		margin-left: 10%;
	}
	#certi .u_i .l_i input{
		width: 100%;
		border: none;
		font-size: 16px;
		padding-left: 10px;
		width: 100%;
		outline: none;
	}
	#certi .next{
		display: block;
		margin: auto;
		margin-top: 80px;
		width: 60%;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background: #42B983;
		color: white;
		border-radius: 10px;
	} 
</style>