<template>
	<div id="certi">
		<hea :hea-msg="par_hea"></hea>
		<ul class="u_i">
			<li class="l_i">
				<input id="name" type="text" placeholder="请输入真实姓名" />
			</li>
			<li class="l_i">
				<input id="card_no" type="text" placeholder="请输入身份证号 " />
			</li>
		</ul>
		
		<span class="next" @click="next">下一步</span>
		<router-link to="/user/certi/sc">跳转到用户认证成功页面</router-link>
	</div>
</template>
<script>
	import hea  from '../header/header.vue'
	export default{
		name:"certi",
		components:{hea},
		data(){
			return{
				par_hea:{
					left_show:true,
					t_val:"身份证认证",
					right_val:""
				},
			}
		},
		methods:{
			next(){
				this.$router.push({path:"/user/certi/img?type=1"});
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
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #cccccc;
		margin-left: 10%;
		margin-top: 20px;
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
		width: 80%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #343434;
		color: white;
		border-radius: 10px;
		letter-spacing: 2px;
	} 
</style>