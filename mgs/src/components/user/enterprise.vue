<template>
	<div id="edit">
		<hea :hea-msg="par_hea"></hea>
		<div class="type_sel">
			<div class="t_s_i" v-bind:class="{active:check_in == 1}" @click="typeSel(1)">
				<span class="i_t">公司</span><span class="icon"></span>
			</div>
			<div class="t_s_i"  v-bind:class="{active:check_in == 2}" @click="typeSel(2)">
				<span class="i_t">个体商户</span><span class="icon"></span>
			</div>
		</div>
		<!--  输入列表 -->
		<div class="info_u" v-if="check_in != 0">
			<ul class="u_i">
				<li class="l_i" v-for="(item,key) in person_info" v-bind:id="key" @click="infoClick(item.id)">
					<span class="l_i_t">{{item.title}}</span>
					<input v-bind:id="item.id" class="l_i_val" v-bind:type="item.type" disabled="item.disabled" v-bind:placeholder="item.remind" />
					<img v-if="item.icon_show" class="l_icon" v-bind:src="item.icon" />
				</li>
			</ul>
			<button class="btn" @click="next">下一步</button>
		</div>
		<!--  输入列表完 -->
		<component @closeIn="closeIn" @confirmiIn='confirmiIn' :in-info='in_info' v-bind:is='name_input'></component>
		<component @closeArea='closeArea' @returnAreas="returnAreas" v-bind:is='areas'></component>
	</div>
</template>
<script>
	import hea  from '../header/header.vue'
	import myInput from '../popups/input.vue'
	import areas from '../popups/area.vue'
	export default {
		name: "edit",
		components:{hea,myInput,areas},
		data() {
			return {
				check_in:0, // 个体商户 和公司选择
				name_input:"",  // 输入弹框
				input_id:"",  // 列表中当前点击项的id
				in_info:{}, // 输入弹框的信息
				areas:"", // 地址选择
				par_hea:{ // title
					left_show:true,
					t_val:"企业认证",
					right_val:""
				},
				person_info:[], // 显示列表
				person_info_company:[
					{title:"品牌名称",remind:"请输入您的品牌名称",id:"brand",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"行业",remind:"请选择行业",id:"industry",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"公司名称",remind:"请输入贵公司的名称",id:"company_name",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"联系人",remind:"请输入您的姓名",id:"name",disable:true,type:"number",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"联系电话",remind:"请输入您的联系电话",id:"phone",disable:true,type:"number",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"公司地址",remind:"请填写公司的地址",id:"address",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
				],
				person_info_merchant:[
					{title:"品牌名称",remind:"请输入您的品牌名称",id:"brand",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"行业",remind:"请选择行业",id:"industry",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"商户名称",remind:"请输入贵公司的名称",id:"company_name",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"联系人",remind:"请输入您的姓名",id:"name",disable:true,type:"number",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"联系电话",remind:"请输入您的联系电话",id:"phone",disable:true,type:"number",icon_show:true,icon:'../../../static/icon/icon22.png'},
					{title:"商户地址",remind:"请填写公司的地址",id:"address",disable:true,type:"text",icon_show:true,icon:'../../../static/icon/icon22.png'},
				],
			}
		},
		methods: {
			typeSel(n){
				this.check_in = n;
				if(n===1){
					this.person_info = this.person_info_company;
				}else{
					this.person_info = this.person_info_merchant;
				}
			},
			infoClick(id){
				this.input_id = id;
				switch(id){
					case "brand":this.in_info={input_type:"text",input_remind:"请输入品牌名称",}; this.name_input = 'myInput';  break;  // 输入昵称
					case "industry": break;
					case "company_name":this.in_info={input_type:"text",input_remind:"请输入贵公司的名称",}; this.name_input = 'myInput';  break;
					case "name":this.in_info={input_type:"text",input_remind:"请输入您的姓名",}; this.name_input = 'myInput'; break;
					case "phone":this.in_info={input_type:"number",input_remind:"请输入您的联系电话",}; this.name_input = 'myInput';  break;
					case "address":this.areas = "areas";  break;
				}
			},
			next(){
				this.$router.push({path:"/user/certi/img?type=2"});
			},
			closeIn(){
				this.name_input = '';
			},
			confirmiIn(data){
				this.name_input = '';
				document.getElementById(this.input_id).value = data;
			},
			closeArea(){  // 关闭地区选择
				this.areas = "";
			},
			returnAreas(data){
				this.areas = "";
				document.getElementById("address").value = data;
			},
		},
	}
</script>
<style>
	 #edit{
		overflow: hidden;
	}
	
	#edit .type_sel{
		background: white;
		border-bottom: 5px solid #f1f5f6;
		border-top: 1px solid #CCCCCC;
		font-size: 14px;
	}
	#edit .type_sel .t_s_i{
		text-align: left;
		height: 48px;
		line-height: 48px;
		text-indent: 5%;
	}
	#edit .type_sel .t_s_i .icon{
		display: block;
		float: right;
		width: 18px;
		height: 18px;
		margin-top: 15px;
		margin-right: 15px;
		background: url(../../../static/icon/icon27.png);
		background-size: 100% 100% ;
	}
	#edit .type_sel .t_s_i.active .icon{
		background: url(../../../static/icon/icon19.png);
		background-size: 100% 100% ;
	}
	
	
	/*   输入列表 */
	#edit .info_u{
		text-align: left;
		border-top: 5px solid #f1f5f6;
	}
	#edit .info_u .info_r{
		float: right;
	}
	#edit .info_u .u_i{
		border-bottom: 8px solid #f1f5f6;
	}
	#edit .info_u .u_i .l_i{
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #cccccc;
		height: 50px;
		line-height: 50px;
		position: relative;
	}
	#edit .info_u .u_i .l_i span{
		display: inline-block;
	}
	#edit .info_u .u_i .l_i .l_i_t{               
		width: 25%;
		text-align: left;
		padding-left: 5%;
		font-size: 14px;
	}
	#edit .info_u .u_i .l_i .l_i_val{
		width: 66%;
		border: none;
		height: 48px;
		background: white;
		font-size: 14px;
	}
	#edit .info_u .u_i .l_i .l_icon{
		position: absolute;
		top: 15px;
		width: 13px;
		right: 15px;
	}
	/*  输入列表完 */
	
	#edit .btn{
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
		font-size: 14px;
	}
</style>
