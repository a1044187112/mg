<template>
	<div id="sc">
		<hea :hea-msg="par_hea"></hea>
		<div class="con">
			<img src="../../../static/icon/icon31.png" />
			<span class="text">身份证认证成功</span>
		</div>
	</div>
</template>
<script>
	import hea  from '../header/header.vue'

	export default{
		name:"",
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
	}
</script>
<style>
	#sc .con{
		text-align: center;
	}
	#sc .con img{
		display: block;
		width: 25%;
		margin: auto;
		margin-top: 30%;
	}
	#sc .con .text{
		display: block;
		margin-top: 10px;
		font-size: 14px;
	}
</style>