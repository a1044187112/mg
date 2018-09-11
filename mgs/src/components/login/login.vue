<template>
	<div id="login">
		<div class="title">登陆</div>
		<input id="phone" type="number" placeholder="请输入手机号" value="15519178657" />
		<input id="code" type="password" placeholder="请输入密码" value="123456" />
		<button class="login" @click='login'> login</button>
		<button class="register" @click="register">立即注册</button>
		<button class="find_pwd" @click="findPwd">找回密码</button>
		<!-- <pop></pop> -->
	</div>
</template>
<script>
	import pop from '../popups/pop.vue'
	export default{
		name:"login",
		components:{pop},
		methods: {
			register : function(){
				this.$router.push({path: '/register'})
			},
			findPwd : function(){
				this.$router.push({path:'/findPwd'});
			},
			login : function(){
				console.log(arguments);
				console.log(MouseEvent);
				let phone = document.getElementById('phone').value;
				let pwd = document.getElementById('code').value;
				if(phone.length != 11 ){
					
				}else if(pwd.length<6){
					
				}else{
					let data = {mobile:phone,password:pwd};
					let sign = this.ajax.md5(data,this.md5);
					let url = this.AURL + 'v1/business/login/account?sign='+sign;
					this.ajax.post(url,JSON.stringify(data),true,this.callback);
				}
			},
			callback : function(result){
				console.log(result);
				if(result.errcode == 0){
					this.defined.setAToken(result.data.access_token);
					this.defined.setRToken(result.data.refresh_token);
					this.$router.push({path:'/'})
				}else if(result.errcode == '50003'){
					console.log('您的账号未注册');
				}else if(result.errcode == '50001'){
					console.log('该账号与密码不匹配,请重新输入');
				}
			},
			
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
		border: 1px solid #CFCFCF;
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