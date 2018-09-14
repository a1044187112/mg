<template>
	<div id="register">
		<hea-title :hea-msg="par_hea" @ret="retBtn"></hea-title>
		<div class="con">
			<div class="remind">欢迎加入美告</div>
			<input id="phone" type="number" placeholder="请输入手机号码"  />
			<input id="code" type="number" placeholder="请输入验证码"  />
			<div class="code_btn" id="get_code" v-if="is_get_code" @click="getCode">获取验证码</div>
			<div class="code_btn time"  id="get_code_disable" v-if="!is_get_code">{{countdown}}s</div>
			<input id="pwd" type="password" placeholder="请输入新密码(不能少于6位)"  />
			<div class="ckeck" id="check" @click="check" v-bind:class="{active:check_pwd}"></div>
			<button class="login" @click='login'>注册</button>
			<div class="protocol">注册代表您已同意<span class="info">《美告用户协议》</span></div>
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
				which_to_show:'', // 动态添加组件
				is_get_code:true, // 获取验证码
				check_pwd:false,  //查看密码
				countdown:60,  //倒计时
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
			getCode(){
				this.is_get_code = !this.is_get_code;
				let _this = this;
				let c = setInterval(function(){
					_this.countdown--;
					if(_this.countdown === 0){
						_this.countdown = 60;
						_this.is_get_code = !_this.is_get_code;
						clearInterval(c);
					}
				},1000);
			},
			check(){
				this.check_pwd = !this.check_pwd;
				this.check_pwd?document.getElementById('check').setAttribute('type','text'):document.getElementById('check').setAttribute('type','password');
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
	#register .con{
		width: 80%;
		margin: auto;
		margin-top: 20px;
		text-align: left;
	}
	#register .con .remind{
		font-size: 22px;
		font-weight: 600;;
		margin-bottom: 20px;
	}
	#register .con input{
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
	#register .con  button{
		display: block;
		margin-top: 5;
	}
	#register .con .code_btn{
		position: absolute;
		top: 200px;
		right: 10%;
		height: 36px;
		line-height: 36px;
		width: 100px;
		border: 1px solid #aaaaaa;
		text-align: center;
		border-radius: 10px;
		font-size: 14px;
	}
	#register .con .code_btn.time{
		background: #e85c52;
		color: white;
		border: none;
		letter-spacing: 2px;
	}
	#register .con .ckeck{
		width: 25px;
		height: 14px;
		position: absolute;
		top: 285px;
		right: 10%;
		background: url(../../../static/icon/icon16.png);
		background-size: 100% 100%;
	}
	#register .con .ckeck.active{
		background: url(../../../static/icon/icon18.png);
		background-size: 100% 100%;
	}
	
	#register .con .login{
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
	#register .con .protocol{
		width: 100%;
		text-align: center;
		margin-top: 10px;
		font-size: 14px;
		letter-spacing: 1px;
	}
	#register .con .protocol .info{
		color: #e85c52;
	}
</style>