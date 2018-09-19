<template>
	<div id="nearby">
		<ul class="list">
			<li @click="radioClick(1)" class="i" v-bind:class="{active:isActive === 1}">
				<span class="icon"></span>
				<span class="text">3km</span>
			</li>
			<li @click="radioClick(2)" class="i" v-bind:class="{active:isActive === 2}">
				<span class="icon"></span>
				<span class="text">5km</span>
			</li>
			<li @click="radioClick(3)" class="i" v-bind:class="{active:isActive === 3}">
				<span class="icon"></span>
				<span class="text">10km</span>
			</li>
		</ul>
		<div>
			<condition :conList="con_list"></condition>
			<component :conList="con_list" :is="item.component" :text="item.text" v-for="(item,key) in items" v-bind:key='key'></component>
			<span class="add" @click="add">添加</span>
		</div>
		<footers @selttleOrder='selttleOrder'></footers>
		<component  :msg='pay_msg' @payPWay="payPWay" @payCancel='payCancel' :is="pay_type"></component>
	</div>
</template>
<script>
	import footers from './footer.vue'
	import condition from './condition.vue'
	import payType from '../popups/payType.vue'
	export default{
		name:"nearby",
		components:{condition,footers,payType},
		data(){
			return{
				isActive:1,
				items:[],
				con_list:[
					{title:"投放地点",type:"text",placeholder:"请选择投放区域",value:"",id:"input_area"},
					{title:"商圈或街道",type:"text",placeholder:"请输入投放地点",value:"",id:"input_2"},
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
		methods: {
			radioClick(n){
				this.isActive = n;
			},
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
		},
	
	}
</script>
<style>
	#nearby{
		padding-bottom: 60px;
	}
	#nearby .list{
		font-size: 0;
	}
	#nearby .list .i{
		display: inline-block;
		width: 30%;
		font-size: 16px;
		height: 36px;
		line-height: 36px;
		color: #959595;
	}
	#nearby .list .i .icon{
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../../../static/icon/icon27.png) no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		margin-top: -3px;
	}
	#nearby .list .i.active{
		color: #000000;
	}
	#nearby .list .i.active .icon{
		background: url(../../../static/icon/icon19.png) no-repeat;
		background-size: 100% 100%;
	}
	#nearby .add{
		display: inline-block;
		height: 36px;
		width: 100px;
		color: #000000;
		line-height: 36px;
		border-radius: 5px;
		margin-top: 40px;
		margin-bottom: 20px;
		border: 1px dashed #000000;
		background: url(../../../static/icon/icon35.png) no-repeat;
		background-size: 15px 15px;
		background-position: 25px 10px;
		padding-left: 10px;
	}
	 
</style>