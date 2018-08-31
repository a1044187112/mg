<template>
	<div id="login">
		<div class="title">登陆</div>
		<input id="phone" type="number" placeholder="请输入手机号" />
		<input id="code" type="number" placeholder="请输入密码" />
		<button class="login"> login</button>
		<button class="register" @click="register">立即注册</button>
		<button class="find_pwd" @click="findPwd">找回密码</button>
	</div>
</template>
<script>
	export default{
		name:"login",
		methods: {
			register : function(){
				this.$router.push({path: '/register'})
			},
			findPwd : function(){
				this.$router.push({path:'/findPwd'});
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
	.find_pwd,
	.register{
		margin-left: 10%;
		margin-top: 10px;
		border:none;
		background: white;
		color: blue;
		outline: none;
	}
	.find_pwd{
		float: right;
		margin-top: -17px;
		margin-right: 10%;
	}
	.find_pwd:active,
	.register:active{
		color: #3037b5;
	}
</style>