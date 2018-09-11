<template>
	<div id="info">
		<div class="title">
			<span>个人中心</span>
		</div>
		<div class="hp">
			<img src="../../assets/hp.jpg" />
			<span>15585555555</span>
			<div class="type">
				<input class="type_sel" type="radio" value="个人" name="type" />
				<span class="type_span">个人</span>
				<input  class="type_sel" type="radio" value="企业" name="type" />
				<span class="type_span">企业</span>
			</div>
		</div>
		<div class="info_u">
			<ul class="u_i">
				<li class="l_i">
					<span class="l_i_t">昵称</span>
					<span class="l_i_val">扯扯</span>
				</li>
				<li class="l_i">
					<span class="l_i_t">性别</span>
					<span class="l_i_val">请选择您的性别</span>
				</li>
				<li class="l_i">
					<span class="l_i_t">生日</span>
					<span class="l_i_val">1990.01.01</span>
				</li>
				<li class="l_i">
					<span class="l_i_t">电话</span>
					<span class="l_i_val">15585555555</span>
				</li>
				<li class="l_i">
					<span class="l_i_t">地区</span>
					<span class="l_i_val">贵州省</span>
				</li>
			</ul>
			<div class="certi">
				<div class="certi_i" @click="certi">
					<span class="c_i_1">身份证认证</span>
					<span class="c_i_2">未认证</span>
				</div>
				<div class="certi_i">
					<span class="c_i_1">企业认证</span>
					<span class="c_i_2">未认证</span>
				</div>
			</div>
			
		</div>
			<date-b></date-b>
	</div>
</template>
<script>
	import dateB from '../date/date'
	export default{
		name:"user",
		components:{dateB},
		methods: {
			jump() {
				this.$router.push({path:'/user/edit'});
			},
			certi(){
				console.log(555);
				this.$router.push({path:'/user/certi'});
			}
		},
	}
</script>
<style>
	 #info{
		overflow: hidden;
	}
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
		width: 100px;
		height: 100px;
		margin: auto;
		margin-top: 1;
	}
	.hp img{
		width: 100%;
		height: 100px;
		border-radius: 50%;
	}
	.hp .type{
		width: 200%;
		text-align: center;
		margin-left:-50% ;
		margin-top: 5px;
	}
	.hp .type input.type_sel:nth-child(3){
		margin-left: 20px;
	}
	.info_u{
		text-align: left;
		padding-top: 40px;
	}
	.info_u .info_r{
		float: right;
	}
	.info_u .u_i{
		margin-top: 20px;
		border-bottom: 5px solid #999999;
	}
	.info_u .u_i .l_i{
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #777777;
		height: 42px;
		line-height: 42px;
	}
	.info_u .u_i .l_i span{
		display: inline-block;
	}
	.info_u .u_i .l_i .l_i_t{
		width: 30%;
		text-align: center;
	}
	.info_u .u_i .l_i .l_i_val{
		width: 66%;
	}
	.info_u  .certi{
		margin-top: 10px;
	}
	.info_u .certi .certi_i{
		height: 42px;
		line-height: 42px;
		border-bottom: 1px solid #999999;
	}
	.info_u .certi .certi_i .c_i_1{
		display: inline-block;
		width: 30%;
		text-align: center;
	}
	.info_u .certi .certi_i .c_i_2{
		display: inline-block;
		width: 60%;
		text-align: right;
	} 
</style>