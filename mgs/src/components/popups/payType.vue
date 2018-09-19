<template>
	<div id="pt">
		<div @click="cancel" class="bg"></div>
		<div class="con">
			<div class="con_i">
				<img @click="cancel" class="con_i_return" src="../../../static/icon/icon36.png" ></img>
				<span class="con_i_t">{{msg.title}}</span>
			</div>
			<div class="con_i">
				<span class="con_i_t">￥{{msg.amount}}.00</span>
				<ul class="p_l">
					<li @click="payWay(item.id)" class="p_l_i" v-for="item in p_list" v-bind:id="item.id">
						<img v-if="item.icon.length !== 0" v-bind:src="item.icon" />
						<span class="p_l_val">{{item.title}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'pt',
		props:{msg:{}},
		data(){
			return{
				p_list:[
					{ title:"支付方式",icon:'',id:"pay_1" },
					{ title:"余额支付",icon:'../../../static/icon/icon37.png',id:"pay_1" },
					{ title:"微信支付",icon:'../../../static/icon/icon38.png',id:"pay_1" },
					{ title:"支付宝支付",icon:'../../../static/icon/icon39.png',id:"pay_1" },
					{ title:"银行卡支付",icon:'../../../static/icon/icon40.png',id:"pay_1" },
				],
			}
		},
		methods:{
			cancel(){
				this.$emit('payCancel');
			},
			payWay(id){
				let type = document.getElementById(id).getAttribute('id');
				this.$emit('payPWay',type);
			},
		}
	}
</script>
<style>
	#pt .bg{
		width: 100%;
		z-index: 100;
		position: fixed;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,0.2);
	}
	#pt .con{
		background: white;
		position: fixed;
		z-index: 101;
		bottom: 0;
		padding-bottom: 20px;
		width: 100%;
	}
	#pt .con .con_i{
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
	#pt .con .con_i .con_i_return{
		width: 10px;
		margin-top: 15px;
		float: left;
		margin-left: 15px;
	}
	#pt .con .con_i .con_i_t{
		display: inline-block;
		padding: 14px 0;
	}
	#pt .con .con_i:nth-child(2){
		border-top: 1px solid #CCCCCC;
	}
	#pt .con .con_i:nth-child(2) .con_i_t{
		font-size: 36px;
		font-weight: 600;
	}
	#pt .con .con_i:nth-child(2) .p_l{
		text-align: left;
		width: 90%;
		margin: auto;
	}
	#pt .con .con_i:nth-child(2) .p_l .p_l_i{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #CCCCCC;
	}
	#pt .con .con_i:nth-child(2) .p_l .p_l_i img{
		width: 18px;
		vertical-align: middle;
		margin-right: 4px;
	}
</style>