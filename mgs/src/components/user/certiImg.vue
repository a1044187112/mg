<template>
	<div id="load">
		<hea :hea-msg="par_hea"></hea>
		<div class="con">
			<div class="item">
				<span class="t">上传身份证人像面</span>
				<div class="card">
					<img class="card_img" src="../../../static/icon/icon25.png" />	
					<img @click="cardClick('card_1')" class="card_icon" src="../../../static/icon/icon26.png" />
					<input id="card_1" type="file" accept="image/*" />
				</div>
				<span class="t">上传身份证国徽面</span>
				<div class="card">
					<img class="card_img" src="../../../static/icon/icon21.png" />	
					<img @click="cardClick('card_2')" class="card_icon" src="../../../static/icon/icon26.png" />
					<input id="card_2" type="file" accept="image/*" />
				</div>
			</div>
			
			<span class="confirm">确定上传</span>
		</div>
	</div>
</template>
<script>
	import hea  from '../header/header.vue'
	export default{
		name:'certiImg',
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
			cardClick(sel){
				let inputSel = document.getElementById(sel);
				inputSel.click();
			},
		}
	}
</script>
<style>
	#load .con{
		width: 86%;
		text-align: left;
		margin: auto;
		
	}
	#load .con .item .t{
		line-height: 48px;
		font-size: 18px;
	}
	#load .con .card{
		width: 100%;
		background: #f2f2f2;
		position: relative;
		padding: 30px 0;
		border: 1px solid #999999;
		border-radius: 10px;
		margin-bottom: 10px;
	}
	#load .con .card .card_img{
		display: block;
		width: 70%;
		margin: auto;
	}
	#load .con .card .card_icon{
		position: absolute;
		width: 20%;
		margin-left: 40%;
		top: 65px;
	}
	#load .con .card #card_2,
	#load .con .card #card_1{
		display: none;
	}
	#load .con .confirm{
		display: block;
		margin: auto;
		margin-top: 40px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #343434;
		color: white;
		border-radius: 10px;
		letter-spacing: 2px;
		margin-bottom: 40px;
	}
	
</style>