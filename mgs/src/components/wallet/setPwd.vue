<template>
	<div id="setPwd">
		<div class="title">
			<span>设置支付密码</span>
		</div>
		<div class="con">
			<input id="pwd"  v-on:input="change" class="pwd" type="number" />
			<ul class="con_u" @click="set_pwd">
				<li class="con_l" v-for="item in pwd_arr">{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'setPwd',
		data(){
			return{
				pwd_arr:["","","","","",""]
			}
		},
		methods:{
			set_pwd(){
				let input = document.getElementById('pwd');
				input.focus();
			},
			change(){
				console.log('cese');
				let inputVal = document.getElementById('pwd').value;
				let pwdArr = inputVal.split('');
				pwdArr.length = 6;
				
				for(let i = 0 ; i < this.pwd_arr.length ; i++ ){
					if(i >= pwdArr.length){
						pwdArr[i] = "";
					}
				}
				this.pwd_arr = pwdArr;
				if(pwdArr.length === 6){ // 输入六位以后  提交
					
				}
			},
		}
	}
</script>
<style>
	#setPwd{
		background: #eeeeee;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	#setPwd .con #pwd{
		background: rgba(0,0,0,0);
		border: none;
		outline: none;
		color: rgba(0,0,0,0);
	}
	#setPwd .con .con_u{
		width: 100%;
		font-size: 0;
		text-align: center;
		margin: auto;
		margin-top: 50%;
	}
	#setPwd .con .con_u .con_l{
		width: 40px;
		height: 36px;
		line-height: 30px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		display: inline-block;
		background: white;
		font-size: 18px;
		line-height: 36px;
		vertical-align: middle;
	}
	#setPwd .con .con_u .con_l:first-child{
		border-left: 1px solid #ccc;
	}
</style>