<template>
	<div id="condition">
		<div class="con">
			<div class="con_i" v-bind:class="{active:isActive}">
				<span @click="checkBoxClick" class="sel_btn"></span>
			</div>
			<ul class="con_i ul_list">
				<li class="li_i" v-for="item in conList">
					<span class="li_i_t">{{item.title}}</span>
					<input v-bind:id="item.id" @click="inputClick(item.id)" class="li_i_i" v-bind:type="item.type" v-bind:placeholder="item.placeholder"  />
				</li>
				<li class="li_i">
					<span class="li_i_t">价格</span>
					<span class="li_i_val">￥0</span>
				</li>
			</ul>
			<img @click="closeClick" class="close_module" src="../../../static/icon/close.png" />
		</div>
		
		<component @periodCancel='periodCancel' @periodConfirm='periodConfirm'  v-bind:is='period'></component>
		<component @closeArea='closeArea' @returnAreas="returnAreas" v-bind:is='areas'></component>
	</div>
</template>
<script>
	import areas from '../popups/area.vue'
	import period from '../popups/period.vue'
	export default{
		name:"condition",
		components:{areas,period},
		props:{conList:{}},
		data(){
			return{
				isActive:false,
				areas:'',
				period:"",
			}
		},
		methods:{
			checkBoxClick(){
				this.isActive = !this.isActive;
			},
			inputClick(id){
				console.log(55);
				switch(id){
					case "input_area":this.areas = 'areas'; break;
					case "input_time":this.period = 'period'; break;
				}
			},
			closeClick(){
				console.log("close");
			},
			returnAreas(data){
				this.areas = "";
				document.getElementById("input_area").value = data;
			},
			closeArea(){
				this.areas = "";
			},
			periodConfirm(data){
				this.period = "";
				document.getElementById("input_time").value = data;
			},
			periodCancel(){
				this.period = "";
			},
		}
	}
</script>
<style>
	#condition{
		width: 100%;
		margin-top: 15px;
		font-size: 0;
	}
	#condition .con{
		width: 90%;
		margin: auto;
		border: 1px solid #CCCCCC;
		border-radius: 10px;
		position: relative;
	}
	#condition .con_i{
		display: inline-block;
		width: 12%;
		vertical-align: middle;
		text-align: left;
	}
	#condition .con_i .sel_btn{
		display: inline-block;
		width: 25px;
		height: 25px;
		background: url(../../../static/icon/icon27.png);
		background-size: 100% 100%;
	}
	#condition .con_i.active .sel_btn{
		background: url(../../../static/icon/icon19.png);
		background-size: 100% 100%;
	}
	#condition .ul_list{
		text-align: left;
		width: 85%;
	}
	#condition .ul_list .li_i{
		height: 42px;
		line-height: 42px;
	}
	#condition .ul_list .li_i:first-child{
		margin-top: 8px;
	}
	#condition .ul_list .li_i .li_i_t{
		display: inline-block;
		font-size: 14px;
		width: 35%;
	}
	#condition .ul_list .li_i .li_i_val{
		font-size: 14px;
		float: right;
		margin-right: 7%;
		color: #eb5c52;
	}
	#condition .ul_list .li_i input{
		display: inline-block;
		outline: none;
		height: 24px;
		line-height: 24px;
		width: 55%;
		padding-left: 10px;
		border: none;
		border-bottom: 1px solid #AFAFAF;
		background: white;
	}
	#condition .close_module{
		position: absolute;
		top: 0;
		right: 0;
		width: 30px;
	}
</style>