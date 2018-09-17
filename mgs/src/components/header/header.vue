<template>
	<div id="hea">
		<div class="hea_left" @click="ret"><img src="../../../static/icon/return.png"></div>
		<div class="hea_title">{{heaMsg.t_val}}</div>
		<div class="hea_right">{{heaMsg.right_val}}</div>
	</div>
</template>
<script>
	export default{
		name:'hea',
		props:{heaMsg:{}},
		methods:{
			ret(){
				this.$router.go(-1);
				this.$emit('ret')
			}
		}
	}
	// <hea :hea-msg="par_hea"></hea>
// 	par_hea:{  // 父组件传递参数
// 		left_show:true,
// 		t_val:"",
// 		right_val:""
// 	}
</script>
<style>
	#hea{
		height: 48px;
		line-height: 48px;
		position: relative;
		overflow: hidden;
	}
	#hea .hea_left{
		float: left;
		overflow: hidden;
	}
	#hea .hea_left img{
		width: 10px;
		margin-top: 16px;
		margin-left: 10px;
	}
	#hea .hea_title{
		font-size: 16px;
	}
	#hea .hea_right{
		position: absolute;
		right: 10px;
		height: 48px;
		line-height: 48px;
		top: 0;
	}
</style>