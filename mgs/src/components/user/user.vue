<template>
	<div id="info">
		<hea :hea-msg="par_hea"></hea>
		<div class="hp">
			<img @click="modifyImg" class="hp_img" src="../../assets/hp.jpg" />
			<input id="hp_img" type="file" accept="image/*" />
			<span class="name">15585555555</span>
			<div class="type">
				<div class="type_sel" v-bind:class="{active:sel_num == 2}" @click="selType(2)"></div>
				<span class="type_span" @click="selType(2)">企业</span>
				<div class="type_sel" v-bind:class="{active:sel_num == 1}" @click="selType(1)"></div>
				<span class="type_span" @click="selType(1)">个人</span>
			</div>
		</div>
		<div class="info_u">
			<ul class="u_i">
				<li class="l_i" v-for="(item,key) in person_info" v-bind:id="key" @click="infoClick(item.id)">
					<span class="l_i_t">{{item.title}}</span>
					<input v-bind:id="item.id" class="l_i_val" v-bind:type="item.type" disabled="item.disabled" v-bind:placeholder="item.remind" />
					<img v-if="item.icon_show" class="l_icon" v-bind:src="item.icon" />
				</li>
			</ul>
			<div class="certi">
				<div class="certi_i" @click="certi">
					<span class="c_i_1">身份证认证</span>
					<span class="c_i_2">未认证</span>
				</div>
				<div class="certi_i" @click="enter" v-if="sel_num == 2">
					<span class="c_i_1">企业认证</span>
					<span class="c_i_2">未认证</span>
				</div>
			</div>
		</div>
			<component @closeIn="closeIn" @confirmiIn='confirmiIn' :in-info='in_info' v-bind:is='name_input'></component>
			<component @sexSel='sexSel' v-bind:is='sex_sel'></component>
			<component @dateCancel='dateCancel' @dateConfirm='dateConfirm' v-bind:is='birthday_time'></component>
			<component @closeArea='closeArea' @returnAreas="returnAreas" v-bind:is='areas'></component>
	</div>
</template>
<script>
	import dateB from '../popups/date'
	import hea  from '../header/header.vue'
	import myInput from '../popups/input.vue'
	import sex from '../popups/sex.vue'
	import areas from '../popups/area.vue'
	export default{
		name:"user",
		components:{hea,dateB,myInput,sex,areas},
		data(){
			return{
				sel_num:0,
				birthday_time:"",
				name_input:'',
				sex_sel:"",
				areas:"",
				par_hea:{
					left_show:true,
					t_val:"用户中心",
					right_val:""
				},
				in_info:{
					input_type:"text",input_remind:"请输入品牌名称",
				},
				person_info:[
					{title:"昵称",remind:"给自己取一个昵称",id:"name",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"性别",remind:"请选择您的性别",id:"sex",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"生日",remind:"请选择您的出生年月",id:"birthday",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"电话",remind:"请输入您的电话号码",id:"phone",disable:true,type:"number",icon_show:false,icon:'../../../static/icon/icon22.png'},
					{title:"地址",remind:"请填写您的地址",id:"address",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
				],
			}
		},
		methods: {
			modifyImg(){
				document.getElementById("hp_img").click();
			},
			selType(n){
				this.sel_num = n;
			},
			infoClick(id){
				switch(id){
					case "name": this.name_input = 'myInput'; break;  // 输入昵称
					case "sex": this.sex_sel = 'sex'; break;
					case "birthday": this.birthday_time = 'date-b'; break;
					case "phone": break;
					case "address": this.areas = "areas"; break;
				}
			},
			closeIn(){ // 输入弹窗关闭按钮
				this.name_input = '';
			},
			confirmiIn(data){ //输入弹框确认按钮
				this.name_input = '';
				if(data.length !== 0){
					document.getElementById("name").value = data;
				}
			},
			sexSel(n){ // 性别选择
				this.sex_sel = '';
				if(n===1){
					document.getElementById("sex").value = "男";
				}else{
					document.getElementById("sex").value = '女';
				}
			},
			dateCancel(){  // 生日选择
				this.birthday_time = '';
			},
			dateConfirm(birthday){ // 生日选择
				this.birthday_time = '';
				document.getElementById("birthday").value = birthday;
			},
			closeArea(){ // 关闭地区选择
				this.areas = "";
			},
			returnAreas(data){ // 地区选择
				this.areas = "";
				document.getElementById("address").value = data;
			},
			certi(){
				this.$router.push({path:'/user/certi'});
			},
			enter(){
				this.$router.push({path:'/user/enterprise'});
			},
		},
	}
</script>
<style>
	 #info{
		overflow: hidden;
		font-size: 14px;
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
	#info .hp #hp_img{
		display: none;
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
		height: 42px;
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