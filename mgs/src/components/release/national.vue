<template>
	<div id="national">
		<!-- <condition :conList='con_list'></condition> -->
		<div class="con">
			<ul class="con_i ul_list">
				<li class="li_i" v-for="item in con_list">
					<span class="li_i_t">{{item.title}}</span>
					<input v-bind:id="item.id" @click="inputClick(item.id)" class="li_i_i" v-bind:type="item.type" v-bind:placeholder="item.placeholder"  />
				</li>
				<li class="li_i">
					<span class="li_i_t">价格</span>
					<span class="li_i_val">￥0</span>
				</li>
			</ul>
		</div>
		<div id="footer">
			<span class="total_p">总计<span>￥0</span></span>
			<span @click="selttleOrder" class="selttle">结算</span>
		</div>
		<component  :msg='pay_msg' @payPWay="payPWay" @payCancel='payCancel' :is="pay_type"></component>
	</div>
</template>
<script>
	import period from '../popups/period.vue'
	import payType from '../popups/payType.vue'
	export default{
		name:"national",
		components:{period,payType},
		data(){
			return{
				con_list:[
					{title:"投放时间段",type:"text",placeholder:"请选择投放时间段",value:"",id:"input_time"},
					{title:"投放车辆数",type:"number",placeholder:"请输入投放车辆数",value:"",id:"input_4"},
					{title:"每车投放次数",type:"number",placeholder:"请输入每车广告投放次数",value:"",id:"input_5"},
				],
				period:"",
				pay_type:"",
				pay_msg:{
					title:'确认付款',amount:"500"
				},
			}
		},
		methods:{
			inputClick(id){
				switch(id){
					case "input_time":this.period = 'period'; break;
				}
			},
			periodConfirm(data){
				this.period = "";
				document.getElementById("input_time").value = data;
			},
			periodCancel(){
				this.period = "";
			},
			selttleOrder(){
				this.pay_type= 'payType';
			},
			payPWay(){
				this.pay_type = '';
			},
			payCancel(data){
				this.pay_type = '';
				console.log(data);
			},
		}
	}
</script>
<style>
	#national{
		width: 100%;
		margin-top: 15px;
		font-size: 0;
	}
	#national .con{
		width: 90%;
		margin: auto;
		border: 1px solid #CCCCCC;
		border-radius: 10px;
		position: relative;
		
	}
	#national .ul_list{
		text-align: left;
		width: 90%;
		margin: auto;
	}
	#national .ul_list .li_i{
		height: 42px;
		line-height: 42px;
	}
	#national .ul_list .li_i:first-child{
		margin-top: 8px;
	}
	#national .ul_list .li_i .li_i_t{
		display: inline-block;
		font-size: 14px;
		width: 35%;
	}
	#national .ul_list .li_i .li_i_val{
		font-size: 14px;
		float: right;
		margin-right: 7%;
		color: #eb5c52;
	}
	#national .ul_list .li_i input{
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
	#footer{
			height: 50px;
			position: fixed;
			width:100%;
			bottom: 0;
			text-align: left;
			border-top: 1px solid #cfcfcf;
			background: white;
			font-size: 14px;
			line-height: 50px;
			z-index: 5;
		}	
	#footer .total_p{
		margin-left: 15px;
		margin-top: 15px;
	}
	#footer .total_p span{
		color: #eb5c52;
	}
	#footer .total_p .val{
		color: #eb5c52;
	}
	#footer .selttle{
		float: right;
		margin-right: 10px;
		display: inline-block;
		height: 32px;
		line-height: 32px;
		border-radius: 15px;
		width: 80px;
		text-align: center;
		margin-top: 9px;
		background: #343434;
		color: white;
		letter-spacing: 1px;
	} 
		
</style>