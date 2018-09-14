<template>
	<div id="login">
		<hea-title :hea-msg="par_hea" @ret="retBtn"></hea-title>
		<div class="con">
			<div class="remind">手机密码登陆</div>
			<input id="phone" type="number" placeholder="请输入手机号码"  />
			<input id="code" type="password" placeholder="请输入密码"  />
			<div class="ckeck" @click="check" v-bind:class="{active:check_pwd}"></div>
			<button class="find_pwd" @click="findPwd">忘记密码</button>
			<button class="login" @click='login'>登陆</button>
			<button class="register" @click="register">立即注册</button>
			</div>
		<component :msg='tips_remind' v-bind:is='which_to_show'></component>
	</div>
</template>
<script>
	import tips from '../popups/tips.vue'
	import heaTitle from '../header/header.vue'
	export default{
		name:"login",
		components:{tips,heaTitle},
		data(){
			return{
				tips_remind:'手机号输入错误',
				which_to_show:'',
				check_pwd:false,
				par_hea:{
					left_show:true,
					t_val:"",
					right_val:""
				}
			}
		},
		methods: {
			addComponents(){
				this.which_to_show = tips;
				let _this = this;
				setTimeout(function(){
					_this.which_to_show = '';
				},3000);
			},
			retBtn(){
				console.log("触发事件");
				
			},
			check(){
				this.check_pwd = !this.check_pwd;
				this.check_pwd?document.getElementById('code').setAttribute('type','text'):document.getElementById('code').setAttribute('type','password');
			},
			register : function(){
				this.$router.push({path: '/register'})
			},
			findPwd : function(){
				this.$router.push({path:'/findPwd'});
			},
			login : function(){
				let phone = document.getElementById('phone').value;
				let pwd = document.getElementById('code').value;
				if(phone.length != 11 ){
					this.addComponents();
					this.tips_remind = "手机号输入错误";
				}else if(pwd.length<6){
					this.addComponents();
					this.tips_remind = "密码输入错误";
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
	#login .con{
		width: 80%;
		margin: auto;
		margin-top: 20px;
		text-align: left;
	}
	#login .con .remind{
		font-size: 22px;
		font-weight: 600;;
		margin-bottom: 20px;
	}
	#login .con input{
		border: none;
		border-bottom: 1px solid #aaaaaa;
		height: 48px;
		width: 100%;
		margin: auto;
		margin-top: 5px;
		text-indent: 20px;
		outline: none;
		margin-top: 15px;
	}
	#login .con  button{
		display: block;
		margin-top: 5;
	}
	#login .con .ckeck{
		width: 25px;
		height: 14px;
		position: absolute;
		top: 220px;
		right: 10%;
		background: url(../../../static/icon/icon16.png);
		background-size: 100% 100%;
	}
	#login .con .ckeck.active{
		background: url(../../../static/icon/icon18.png);
		background-size: 100% 100%;
	}
	
	#login .con  .find_pwd{
		float: right;
		margin-top: -17px;
		margin-left: 10%;
		margin-top: 10px;
		border:none;
		background: white;
		color: #000000;
		outline: none;
		font-size: 16px;
		
	}
	#login .con .register,
	#login .con .login{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		margin: auto;
		margin-top: 80px;
		background: #343434;
		border: none;
		color: white;
		outline: none;
		text-align: center;
		border-radius: 10px;
		letter-spacing: 4px;
	}
	#login .con .register{
		margin-top: 25px;
		background: white;
		border: 1px solid #aaaaaa;
		color: #000000;
	}
</style>