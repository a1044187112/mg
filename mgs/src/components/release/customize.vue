<template>
	<div id="customize">
		<condition :conList="con_list"></condition>
		<component :conList="con_list" :is="item.component" :text="item.text" v-for="(item,key) in items" v-bind:key='key'></component>
		<span class="add" @click="add">添加</span>
		<footers @selttleOrder='selttleOrder'></footers>
		<component  :msg='pay_msg' @payPWay="payPWay" @payCancel='payCancel' :is="pay_type"></component>
	</div>
</template>
<script>
	import condition from './condition.vue'
	import footers from './footer.vue'
	import payType from '../popups/payType.vue'
	export default{
		name:"customize",
		components:{footers,condition,payType},
		data(){
			return{
				items:[],
				con_list:[
					{title:"投放地点",type:"text",placeholder:"请选择投放区域",value:"",id:"input_area"},
					{title:"投放时间段",type:"text",placeholder:"请选择投放时间段",value:"",id:"input_time"},
					{title:"投放车辆数",type:"number",placeholder:"请输入投放车辆数",value:"",id:"input_4"},
					{title:"每车投放次数",type:"number",placeholder:"请输入每车广告投放次数",value:"",id:"input_5"},
				],
				pay_type:"",
				pay_msg:{
					title:'确认付款',amount:"500"
				},
			}
		},
		methods:{
			add() {
				this.items.push({
					component:condition
				});
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
	#customize .add{
		display: inline-block;
		height: 36px;
		width: 100px;
		color: #000000;
		line-height: 36px;
		border-radius: 5px;
		margin-top: 40px;
		margin-bottom: 80px;
		border: 1px dashed #000000;
		background: url(../../../static/icon/icon35.png) no-repeat;
		background-size: 15px 15px;
		background-position: 25px 10px;
		padding-left: 10px;
	}
</style>