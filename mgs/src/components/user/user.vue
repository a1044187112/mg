<template>
	<div id="info">
		<hea :hea-msg="par_hea"></hea>
		<div class="hp">
			<img src="../../assets/hp.jpg" />
			<span class="name">15585555555</span>
			<div class="type">
				<div class="type_sel" v-bind:class="{active:sel_num == 1}" @click="selType(1)"></div>
				<span class="type_span" @click="selType(1)">个人</span>
				<div class="type_sel" v-bind:class="{active:sel_num == 2}" @click="selType(2)"></div>
				<span class="type_span" @click="selType(2)">企业</span>
			</div>
		</div>
		<div class="info_u">
			<ul class="u_i">
				<li class="l_i" v-for="(item,key) in person_info" v-bind:id="key" @click="infoClick(item.id)">
					<span class="l_i_t">{{item.title}}</span>
					<input class="l_i_val" v-bind:type="item.type" disabled="item.disabled" v-bind:placeholder="item.remind" />
					<img v-if="item.icon_show" class="l_icon" v-bind:src="item.icon" />
				</li>
			</ul>
			<div class="certi">
				<div class="certi_i" @click="certi">
					<span class="c_i_1">身份证认证</span>
					<span class="c_i_2">未认证</span>
				</div>
				<div class="certi_i" v-if="sel_num == 2">
					<span class="c_i_1">企业认证</span>
					<span class="c_i_2">未认证</span>
				</div>
			</div>
			
		</div>
			<!-- <date-b></date-b> -->
			<component v-bind:is='which_to_show'></component>
	</div>
</template>
<script>
	import dateB from '../date/date'
	import hea  from '../header/header.vue'
	export default{
		name:"user",
		components:{hea,dateB},
		data(){
			return{
				sel_num:0,
				which_to_show:"",
				par_hea:{
					left_show:true,
					t_val:"用户中心",
					right_val:""
				},
				person_info:[
					{title:"昵称",remind:"给自己取一个昵称吧！",id:"name",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"性别",remind:"请选择您的性别！",id:"sex",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"生日",remind:"请选择您的出生年月",id:"borthday",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"电话",remind:"请输入您的电话号码",id:"phone",disable:true,type:"number",icon_show:false,icon:'../../../static/icon/icon22.png'},
					{title:"地址",remind:"请填写您的地址！",id:"address",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
				],
			}
		},
		methods: {
			selType(n){
				this.sel_num = n;
			},
			infoClick(id){
				switch(id){
					case "name": break;
					case "sex": break;
					case "borthday": break;
					case "phone": break;
					case "address": break;
				}
			},
			jump() {
				this.$router.push({path:'/user/edit'});
			},
			certi(){
				console.log(555);
				this.$router.push({path:'/user/certi'});
			}
		},
	}
</script>
<style>
	 #info{
		overflow: hidden;
	}
	
	#info .hp{
		width: 100px;
		margin: auto;
		margin-top: 20px;
	}
	#info .hp img{
		width: 100%;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 8px;
	}
	#info .hp .name{
		letter-spacing: 2px;
	}
	#info .hp .type{
		width: 200%;
		text-align: center;
		margin-left:-50% ;
		margin-top: 15px;
		padding-bottom: 30px;
	}
	#info .hp .type .type_sel{
		display: inline-block;
		width: 18px;
		height: 18px;
		background: url(../../../static/icon/icon27.png);
		background-size: 100% 100%;
		vertical-align: middle;
		margin-right: 5px;
		margin-top: -4px;
	}
	#info .hp .type .type_sel.active{
		background: url(../../../static/icon/icon19.png);
		background-size: 100% 100%;
		
	}
	#info .hp .type .type_sel:nth-child(3){
		margin-left: 30%;
	}
	#info .info_u{
		text-align: left;
		border-top: 5px solid #f1f5f6;
	}
	#info .info_u .info_r{
		float: right;
	}
	#info .info_u .u_i{
		border-bottom: 8px solid #f1f5f6;
	}
	#info .info_u .u_i .l_i{
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #cccccc;
		height: 50px;
		line-height: 50px;
		position: relative;
	}
	#info .info_u .u_i .l_i span{
		display: inline-block;
	}
	#info .info_u .u_i .l_i .l_i_t{               
		width: 25%;
		text-align: left;
		padding-left: 5%;
	}
	#info .info_u .u_i .l_i .l_i_val{
		width: 66%;
		border: none;
		height: 48px;
		background: white;
	}
	#info .info_u .u_i .l_i .l_icon{
		position: absolute;
		top: 15px;
		width: 13px;
		right: 15px;
	}
	
	#info .info_u .certi .certi_i{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #cccccc;
	}
	#info .info_u .certi .certi_i .c_i_1{
		display: inline-block;
		width: 25%;
		text-align: left;
		padding-left: 5%;
	}
	#info .info_u .certi .certi_i .c_i_2{
		display: inline-block;
		width: 60%;
		text-align: right;
		color: #e85c52;
	} 
</style>