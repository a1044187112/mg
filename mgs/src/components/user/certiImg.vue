<template>
	<div id="load">
		<hea :hea-msg="par_hea" ></hea>
		<div class="con">
			<div class="item" v-for="(item,key) in list" v-bind:id="key">
				<span class="t">{{item.title}}</span>
				<div class="card">
					<img class="card_img" v-bind:src="item.img_src" />	
					<img @click="cardClick(item.id)" class="card_icon" src="../../../static/icon/icon26.png" />
					<input v-bind:id="item.id" type="file" accept="image/*" />
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
				par_hea:{},
				par_hea_a:{
					left_show:true,
					t_val:"身份证认证",
					right_val:""
				},
				par_hea_b:{
					left_show:true,
					t_val:"企业认证",
					right_val:""
				},
				list:[],
				list_1:[
					{title:'上传身份证人像面',id:'card_1',img_src:"../../../static/icon/icon25.png"},
					{title:'上传身份证国徽面',id:'card_2',img_src:"../../../static/icon/icon21.png"},
				],
				list_2:[
					{title:'请上传公司商标注册证',id:'card_3',img_src:"../../../static/icon/icon29.png"},
					{title:'请上传个体商户营业执照',id:'card_4',img_src:"../../../static/icon/icon30.png"},
				],
				list_3:[
					{title:'请上传个体商户营业执照',id:'card_5',img_src:"../../../static/icon/icon30.png"},
				],
			}
		},
		mounted:function(){
			this.getType();
		},
		methods:{
			getType(){
				let url = window.location.href;
				if(url.indexOf("?") > -1){
					let arr = url.split("?")[1].split("=");
					if(arr[1] === '1'){ // 身份证认证
						this.par_hea = this.par_hea_a;
						this.list = this.list_1;
					}else if(arr[1] === '2'){  // 企业认证 公司
						this.par_hea = this.par_hea_b;
						this.list = this.list_2;
					}else if(arr[1] === '3'){ // 企业认证 个体工商户
						this.par_hea = this.par_hea_b;
						this.list = this.list_3;
					}
				}
			},
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
		font-size: 14px;
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
		top: 35%;
	}
	#load .con .card input{
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
		font-size: 14px;
	}
	
</style>