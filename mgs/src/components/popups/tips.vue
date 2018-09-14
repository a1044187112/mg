<template>
	<div id="tips">
		<div v-if="tips" class="info">{{msg}}</div>
	</div>
</template>
<script>
	export default{
		name:'tips',
		props:{msg:String},
		data(){
			return{
				tips:true,
			}
		},
		mounted:function(){
			this.showTips();
		},
		methods:{
			showTips(){
				let _this = this;
				setTimeout(function(){
					_this.tips = false;
				},2000);
			}
		},
	}
</script>
<style>
	#tips .info{
		width: 60%;
		margin-left: 20%;
		position: absolute;
		top: 80%;
		z-index: 200;
		height: 40px;
		line-height: 40px;
		color: white;
		background: rgba(51,51,51,0.7);
		border-radius: 10px;
		text-align: center;
	}
</style>