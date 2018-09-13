<template>
	<div id="addCard">
		<div class="title">
			<span>{{card.title}}</span>
		</div>
		<div class="con">
			<div class="t">本人身份信息</div>
			<ul class="con_u">
				<li class="con_l">
					<span class="con_l_t">姓名</span>
					<span class="con_l_val">扯扯</span>
				</li>
				<li class="con_l">
					<span class="con_l_t">身份证号</span>
					<span class="con_l_val">522254********4567</span>
				</li>
			</ul>
			<div class="t">银行卡信息</div>
			<ul class="con_u">
				<li class="con_l">
					<span class="con_l_t">卡号</span>
					<input type="number" class="info" id="card_no" v-bind:placeholder="card.card"  />
				</li>
				<li class="con_l" v-if="card.bank">
					<span class="con_l_t">银行</span>
					<input type="number" class="info" id="phone" v-bind:placeholder="card.bank" />
					<span class="more_icon"></span>
				</li>
				<li class="con_l">
					<span class="con_l_t">预留手机</span>
					<input type="number" class="info" id="phone"  v-bind:placeholder="card.phone"/>
					<span class="get_code">获取验证码</span>
				</li>
				<li class="con_l">
					<span class="con_l_t">验证码</span>
					<input type="number" class="info" id="code" v-bind:placeholder="card.code" />
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'addCard',
		data(){
			return{
				card:{},
				cxCard:{
					title:"添加储蓄卡",
					card:'请输入储蓄卡号',
					phone:'请输入手机号',
					code:'请输入验证码'
				},
				xyCard:{
					title:"添加信用卡",
					card:'请输入信用卡号',
					phone:'请输入手机号',
					code:'请输入验证码',
					bank:"请选择发卡银行"
				}
			}
		},
		mounted:function(){
			let type = this.setType();
			if(type == 1){ // 添加储蓄卡
				this.card = this.cxCard;
			}else if(type == 2){  // 添加信用卡
				this.card = this.xyCard;
			}
		},
		methods:{
			setType(){
				var url = window.location.href; //获取url中"?"符后的字串
				if (url.indexOf("?") != -1) {  //判断是否有参数
					let str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
					let strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
					return strs[1]
				}
				return -1;
			},
		}
	}
</script>
<style>
	#addCard{
		background: #eeeeee;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	#addCard .title{
		background: white;
	}
	#addCard .con .t{
		height: 64px;
		line-height: 90px;
		text-align: left;
		margin-left: 15px;
	}
	#addCard .con .con_u{
		background: white;
	}
	#addCard .con .con_u .con_l{
		height: 48px;
		line-height: 48px;
		border-bottom: 1px solid #eee;
		text-align: left;
		padding-left: 20px;
	}
	#addCard .con .con_u .con_l .con_l_t{
		display: inline-block;
		width: 80px;
		color: #999;
	}
	#addCard .con .con_u .con_l .info{
		width: 120px;
		outline: none;
		border: none;
		font-size: 16px;
	}
	#addCard .con .con_u .con_l .get_code{
		background: red;
		display: inline-block;
		height: 28px;
		line-height: 28px;
		padding: 0 20px;
		border-radius: 14px;
		color: white;
		float: right;
		margin-top: 8px;
		margin-right: 10px;
	}
</style>
