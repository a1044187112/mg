<template>
	<div id="balance">
		<div class="title">
			<span class="t">余额</span>
			<router-link to="/wallet/balance/baDetail" class="right">余额账单</router-link>
		</div>
		<div class="con">
			<span class="con_t">账户余额</span>
			<span class="con_b">￥0.00</span>
			<span class="btn recharge">充值</span>
			<span class="btn withdraw">提现</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'balance',
	}
</script>
<style>
	#balance{
		text-align: center;
	}
	#balance .con{
		margin-top: 40%;
	}
	#balance .con span{
		display: block;
	}
	#balance .con .con_t{
		font-weight: 600;
		font-size: 14px;
	}
	#balance .con .con_b{
		margin-top: 20px;
		font-size: 28px;
		font-weight: 600;
	}
	#balance .con .btn{
		margin: auto;
		margin-top: 40%;
		width: 70%;
		height: 36px;
		line-height: 36px;
		border-radius: 18px;
		background: #DC143C;
		color: white;
	}
	#balance .con .withdraw{
		margin-top: 20px;
		background: #808080;
	}
</style>