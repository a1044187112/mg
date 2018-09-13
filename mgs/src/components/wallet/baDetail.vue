<template>
	<div id="bd">
		<div class="title">
			<span class="t">余额账单</span>
		</div>
		<div class="con">
			<ul class="con_u">
				<li class="con_l" v-for="d in details">
					<div class="con_l_i">
						<span class="title">{{d.title}}</span>
						<span class="balance">余额：{{d.balance}}</span>
					</div>
					<div class="con_l_i">
						<span class="amount">{{d.amount}}</span>
						<span class="time">{{d.time}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'bd',
		data(){
			return{
				details:[
					{ title:'充值',balance:'1000.00',time:'2018-02-01',amount:'+1000.00'},
					{ title:'提现',balance:'1000.00',time:'2018-02-01',amount:'+1000.00'},
					{ title:'消费',balance:'0.00',time:'2018-02-01',amount:'-1000.00'},
					{ title:'提现',balance:'0.00',time:'2018-02-01',amount:'+1000.00'},
					{ title:'充值',balance:'1000.00',time:'2018-02-01',amount:'+1000.00'},
					{ title:'充值',balance:'1000.00',time:'2018-02-01',amount:'+1000.00'},
					{ title:'消费',balance:'0.00',time:'2018-02-01',amount:'-1000.00'},
				],
			}
		}
	}
</script>
<style>
	#bd .con{
		margin-top: 10px;
		border-top: 1px solid #cccccc;
	}
	#bd .con .con_u .con_l{
		display: flex;
		display: -webkit-flex;
	}
	#bd .con .con_u .con_l .con_l_i{
		width: 50%;
		text-align: left;
		padding: 25px 0 6px 0;
		border-bottom: 1px solid #cccccc;
		vertical-align: bottom;
	}
	#bd .con .con_u .con_l .con_l_i span{
		margin-left: 15px;
		display: block;
		font-weight: 600; 
	}
	#bd .con .con_u .con_l .con_l_i span:nth-child(2){
		font-size: 14px;
		font-weight: 400;
	}
	#bd .con .con_u .con_l .con_l_i:nth-child(2){
		text-align: right;
	}
	#bd .con .con_u .con_l .con_l_i:nth-child(2) span{
		margin-right: 15px;
	}
	#bd .con .con_u .con_l .con_l_i:nth-child(2) span:nth-child(2){
		color:#999999;
		margin-top: 5px;
	}
</style>