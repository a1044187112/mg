<template>
	<div id="in">
		<div class="bg"></div>
		<div class="con">
			<img @click="close" class="close" src="../../../static/icon/close.png" />
			<input class="input_info" v-bind:type="inInfo.input_type" v-bind:placeholder="inInfo.input_remind" />
			<button @click="confirm" class="btn">确定</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:'in',
		props:{inInfo:{}},
		methods:{
			close(){
				this.$emit('closeIn');
			},
			confirm(){
				let val = document.getElementsByClassName('input_info')[0].value;
				console.log(val);
				this.$emit('confirmiIn',val)
			},
		}
	}
// <component @closeIn="closeIn" @confirmiIn='confirmiIn' :in-info='in_info' v-bind:is='name_input'></component>
// 	in_info:{
// 		input_type:"text",input_remind:"请输入品牌名称",
// 	},
</script>
<style>
	#in .bg{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		z-index: 11;
		background: rgba(0,0,0,0.2);
	}
	#in .con{
		position: fixed;
		top: 30%;
		width: 80%;
		left: 10%;
		background: white;
		padding-top: 40px;
		z-index: 12;
		border-radius: 5px;
	}
	#in .con .close{
		float: right;
		width: 30px;
		margin-top: -40px;
	}
	#in .con  .input_info{
		display: block;
		width: 80%;
		height: 50px;
		line-height: 50px;
		border: none;
		border-bottom: 1px solid #BFBFBF;
		margin-left: 10%;
		font-size: 16px;
		text-indent: 20px;
		outline: none;
		letter-spacing: 1px;
	}
	#in .con  .btn{
		display: block;
		margin: 25px 0;
		margin-left: 10%;
		width: 80%;
		outline: none;
		border: none;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: #343434;
		color: white;
		letter-spacing: 2px;
		font-size: 16;
		border-radius: 5px;
	}
	</style>
</style>