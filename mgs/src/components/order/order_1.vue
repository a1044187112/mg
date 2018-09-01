<template>
	<div id="order_1">
		<ul class="list">
			<li class="li" v-for="item in orderInfo" >
				<div class="i">
					<span class="t">投放地点:</span>
					<span>{{item.area}}</span>
				</div>
				<div class="i">
					<span class="t">投放时间段:</span>
					<span>{{item.time}}</span>
				</div>
				<div class="i">
					<span class="t">投放车辆数:</span>
					<span>{{item.carNum}}</span>
				</div>
				<div class="i">
					<span class="t">每车投放次数:</span>
					<span>{{item.num}}</span>
				</div>
				<div class="i">
					<span class="t">订单状态:</span>
					<span>{{item.status}}</span>
				</div>
				<div class="i" v-if="item.cycle">
					<span class="t">订单周期:</span>
					<span>{{item.cycle}}</span>
				</div>
				<div class="i">
					<span class="t">价格:</span>
					<span>{{item.price}}</span>
				</div>
				<button class="btn_a" @click.stop="details"> 详情</button>
				<button class="btn"> 删除</button>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'order_1',
		data(){
			return{
				orderInfo:[
					{
						area:"贵州省贵阳市",
						time:"07:00~09:00",
						carNum:"100",
						num:"10",
						price:"70000",
						status:"审核中",
						"cycle":"五天",
						
					},{
						area:"贵州省贵阳市",
						time:"07:00~09:00",
						carNum:"100",
						num:"10",
						price:"70000",
						status:"审核中",
						"cycle":"",
						
					},{
						area:"贵州省贵阳市",
						time:"07:00~09:00",
						carNum:"100",
						num:"10",
						price:"70000",
						status:"审核中",
						"cycle":"五天",
						
					}
				],
			}
		},
		methods: {
			details() {
				this.$router.push({path:'/details'});
			}
		},
		
	}
</script>
<style>
	.list{
		width: 100%;
		text-align: left;
		padding-bottom: 40px;
	}
	.list .li{
		border-top: 1px solid #CFCFCF;
		border-bottom: 1px solid #CFCFCF;
		margin-top: 10px;
		padding: 10px;
		position: relative;
	}
	.list .li .i{
		height: 32px;
		line-height: 32px;
	}
	.list .li .i .t{
		margin-left: 10px;
		color: #969696;
	}
	.list .li .i span:nth-child(2){
		margin-left: 10px;
	}
	.list .li button{
		outline: none;
		border: none;
		color: white;
		background: #42B983;
		height: 36px;
		line-height: 36px;
		text-align: center;
		width: 60px;
		position: absolute;
		bottom: 10px;
		z-index: 20;
		border-radius: 5px;
	}
	.list .li .btn{
		right: 10px;
		background: #282924;
	}
	.list .li .btn_a{
		right: 80px;
		
	}
</style>