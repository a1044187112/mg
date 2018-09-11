<template>
	<div id="wallet">
		<div class="title">
			<span>我的钱包</span>
		</div>
		<ul class="w_u">
			<li class="w_l">
				<span class="w_l_t">银行卡</span>
			</li>
			<li class="w_l">
				<span class="w_l_t">账户余额</span>
				<span class="w_l_val">1000元</span>
			</li>
			<li class="w_l">
				<span class="w_l_t">交易记录</span>
			</li>
			<li class="w_l">
				<span class="w_l_t">我的积分</span>
				<span class="w_l_val">1000积分</span>
			</li>
			<li class="w_l">
				<span class="w_l_t">发票</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'wallet'
	}
</script>
<style>
	#wallet{
		text-align: left;
	}
	#wallet .title{
		text-align: center;
		font-size: 18px;
		height: 36px;
	}
	#wallet .w_u .w_l{
		height: 42px;
		line-height: 42px;
	}
	#wallet .w_u .w_l .w_l_t{
		display: inline-block;
		width: 30%;
		text-align: left;
		margin-left: 10%;
	}
	#wallet .w_u .w_l .w_l_val{
		width: 50%;
		display: inline-block;
		text-align: right;
	}
	#wallet .w_u .w_l:last-child{
		border-top: 1px solid #999999;
		padding-top: 20px;
		margin-top: 20px;
	} 
</style>