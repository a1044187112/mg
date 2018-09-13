<template>
	<div id="bank">
		<div class="title">
			<span>我的银行卡</span>
		</div>
		<div class="con">
			<ul class="con_u">
				<li class="con_l" @click="menu1" v-bind:class="{active:shows == 1}">储蓄卡</li>
				<li class="con_l" @click="menu2" v-bind:class="{active:shows == 2}">信用卡</li>
			</ul>
			
			<span v-if="add_type" class="add_c_1 add_btn">添加储蓄卡</span>
			<span v-if="!add_type" class="add_c_2 add_btn">添加信用卡</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'bank',
		data(){
			return{
				shows : 1,
				add_type:true,
			}
		},
		methods:{
			menu1(){
				this.shows = 1;
				this.add_type = true;      
			},
			menu2(){
				this.shows = 2;
				this.add_type = false;
			},
		}
	}
</script>
<style>
	#bank{
		background: #eeeeee;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	#bank .title{
		background: white;
	}
	#bank .con{
		width: 100%;
		border-top: 1px solid #808080;
	}
	#bank .con .con_u{
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		background:white;
	}
	#bank .con .con_u .con_l{
		height: 48px;
		line-height: 48px;
		font-size: 18px;
		width: 50%;
	}
	#bank .con .con_u .con_l.active{
		border-bottom: 1px solid crimson;
	}
	#bank .con .add_btn{
		margin: auto;
		margin-top: 100%;
		display: block;
		width: 150px;
		height: 40px;
		line-height: 40px;
		border-radius: 20px;
		text-align: center;
		border:1px solid #aaaaaa;
	}
</style>