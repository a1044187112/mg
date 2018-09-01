<template>
	<div id="details">
		<div class="title">
			<span class="t">订单详情</span>
		</div>
		<div class="con">
			<div class="adver">
				<img src="../../assets/hp.jpg" />
			</div>
			<ul class="info">
				<li class="info_item">
					<div class="i">
						<span class="t">投放车辆数:</span>
						<span>1000</span>
					</div>
					<div class="i">
						<span class="t">投放车辆数:</span>
						<span>10000</span>
					</div>
					<div class="i">
						<span class="t">投放车辆数:</span>
						<span>100</span>
					</div>
					<div class="i">
						<span class="t">投放车辆数:</span>
						<span>100</span>
					</div>
				</li>
			</ul>
			<div class="status">
				<div class="status_t">
					<span class="i">待发布</span>
					<span class="i">审核中</span>
					<span class="i">发布中</span>
					<span class="i">已发布</span>
					<span class="i">完成</span>
				</div>
				<div class="status_line">
					<span class="i"><span></span></span>
					<span class="i"><span></span></span>
					<span class="i"><span></span></span>
					<span class="i"><span></span></span>
					<span class="i"><span></span></span>
				</div>
				<div class="status_time">
					<span class="i">2016-08-04 20:00</span>
					<span class="i">2016-08-04 20:00</span>
					<span class="i">2016-08-04 20:00</span>
					<span class="i">2016-08-04 20:00</span>
					<span class="i">2016-08-04 20:00</span>
				</div>
			</div>
			<button class="btn">详细数据</button>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'detail',
	}
</script>
<style>
	*{
		list-style: none;
		margin: 0;
	}
	.title{
		width: 100%;
		position: relative;
		height: 36px;
		line-height: 36px;
	}
	#details{
		padding-bottom: 60px;
	}
	.con .adver{
		width: 94%;
		margin: auto;
		margin-top: 10px;
	}
	.con .adver img{
		width: 100%;
	}
	.con .info{
		width: 90%;
		margin: auto;
		margin-top: 20px;
		display: block;
	}
	.con .info .info_item{
		text-align: left;
		font-size: 18px;
	}
	.con .info .info_item .i{
		height: 36px;
		line-height: 36px;
	}
	.con .info .info_item .i .t{
		color: #969696;
	}
	.status{
		margin-top: 40px;
	}
	.status div{
		display: inline-block;
	}
	.status .status_t{
		width: 30%;
		text-align: right;
		margin-top: -6px;
	}
	.status .status_t .i{
		height: 42px;
		font-size: 14px;
		display: block;
		padding-right: 20px;
	}
	.status .status_line{
		width: 1px;
		vertical-align: top;
	}
	.status .status_line .i{
		display: block;
		height: 42px;
		position: relative;
		border-right: 1px solid #42B983;
	}
	.status .status_line .i:last-child{
		border:none;
	}
	.status .status_line .i span{
		position: absolute;
		display: block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #42B983;
		left: -5px;
	}
	.status .status_time{
		width: 50%;
		vertical-align: top;
		margin-top: -4px;
	}
	.status .status_time .i{
		display: inline-block;
		height: 42px;
		margin-left: -10px;
	}
	button{
		outline: none;
		border: none;
		color: white;
		background: #42B983;
		height: 36px;
		line-height: 36px;
		text-align: center;
		width: 60px;
		border-radius: 5px;
		display: block;
		width: 80%;
		margin: auto;
		margin-top: 20px;
	}
</style>