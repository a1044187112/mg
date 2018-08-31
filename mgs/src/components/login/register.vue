<template>
	<div id="login">
		<div class="title">注册</div>
		<input id="phone" type="number" placeholder="请输入手机号" />
		<input id="code" type="number" placeholder="请输入验证码" />
		<button class="get_code" v-on:click="getCode">获取验证码</button> 
		<input id="pwd" type="number" placeholder="请输入密码" />
		<input id="con_pwd" type="number" placeholder="请确认密码" />
		
		<button class="login" @click="regis"> register</button>
	</div>
</template>
<script>
	export default{
		name:"register",
		data(){
			return{
				code:"" // 验证码
			}
		},
		methods: {
			getCode : function(){ // 获取验证码
				let phone = document.getElementById('phone').value;
				if(phone.length == 11){
					let data = {mobile:phone};
					
					let sign = this.ajax.md5(data,this.md5);
					
					let url = this.AURL+'v1/business/register/getCode?sign='+sign;
					console.log(this.AURL);
					this.ajax.post(url,JSON.stringify(data),false,this.callback);
					console.log(data);
				}
				
			},
			callback : function(result){
				console.log(result);
			},
			
			regis : function(){
				let phone = document.getElementById('phone').value;
				let code = document.getElementById('code').value;
				let pwd = document.getElementById('pwd').value;
				if( (phone.length == 11 && code.length != 0) && pwd.length>=6  ){
					let data = {
						mobile:phone,password:'',code:code
					};
					let sign = this.ajax.md5(data,this.md5);
					let url = this.AURL+'v1/business/register/account?sign='+sign;
					this.ajax.post(url,JSON.stringify(data),false,this.regisCallback);
				}
			},
			regisCallback: function(result){
				console.log(resule)
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