<template>
	<div id="login">
		<div class="title">修改密码</div>
		<input id="phone" type="number" placeholder="请输入手机号" />
		<input id="code" type="number" placeholder="请输入验证码" />
		<button class="get_code" v-on:click="getCode">获取验证码</button> 
		<input id="pwd" type="number" placeholder="请输入密码" />
		<input id="con_pwd" type="number" placeholder="请确认密码" />
		
		<button class="login">修改密码</button>
	</div>
</template>
<script>
	export default{
		name:"findPwd",
		methods: {
			getCode : function(){
				let phone = document.getElementById('phone').value;
				if(phone.length == 11){
					let data = {mobile:phone};
					
					let sign = this.ajax.md5(data,this.md5);
					
					let url = this.AURL+'v1/business/register/getCode?sign='+sign;
					
					this.ajax.post(url,JSON.stringify(data),false,this.callback);
					console.log(data);
				}
				
			},
			callback : function(result){
				console.log(result);
			}
		},
	}
</script>
<style>
	
	#login input{
		height: 36px;
		line-height: 36px;
		width: 80%;
		margin: auto;
		margin-top: 5px;
		padding-left: 10px;
		outline: none;
	}
	button{
		display: block;
		margin-top: 5;
	}
	.get_code{
		float: right;
		margin-right: 10%;
		margin-top: 10px;
		padding: 0 10px;
		height: 30px;
	}
	.login{
		width: 80%;
		height: 40px;
		font-size: 24px;
		margin: auto;
		margin-top: 80px;
		background: #42B983;
		border: none;
		color: white;
		outline: none;
	}
	.login:active{
		background: #5cd39c;
	}
	
</style>