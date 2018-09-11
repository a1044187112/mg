<template>
	<div id="condition">
		<areas></areas>
		<ul class="ul_list">
			<li class="li_i">
				<span class="remind">投放时间段</span>
				<select id="time">
					<option selected="selected">07:00~09:00</option>
					<option>07:00~09:00</option>
					<option>07:00~09:00</option>
					<option>07:00~09:00</option>
					<option>07:00~09:00</option>
				</select>
			</li>
			<li class="li_i">
				<span class="remind">投放车辆数</span>
				<input type="number" />
			</li>
			<li class="li_i">
				<span class="remind">投放周期</span>
				<input type="text" placeholder="单位为1天," />
			</li>
			<li class="li_i">
				<span class="remind">每车投放次数</span>
				<input type="text" placeholder="广告单次播放时长为10秒,需填10的整数倍" />
			</li>
		</ul>
		<span class="price">￥70000(元)</span>
		<span class="sel"></span>
	</div>
</template>
<script>
	import areas from './area.vue'
	export default{
		name:"condition",
		components:{areas}
	}
</script>
<style>
	#condition{
		width: 90%;
		border: 1px solid #dfdfdf;
		margin: auto;
		margin-top: 15px;
		padding: 10px;
		border-radius: 10px;
		position: relative;
	}
	#condition .ul_list{
		text-align: left;
	}
	#condition .ul_list .li_i{
		height: 42px;
		line-height: 42px;
	}
	#condition .ul_list .li_i .remind{
		display: inline-block;
		font-size: 14px;
		margin-right: 5px;
	}
	#condition .ul_list .li_i select,
	#condition .ul_list .li_i input{
		outline: none;
		height: 24px;
		line-height: 24px;
		width: 120px;
		padding-left: 10px;
	}
	#condition .price{
		float: right;
		margin-top: -35px;
	}
	#condition .sel{
		display: inline-block;
		position: absolute;
		width: 15px;
		height: 15px;
		border: 1px solid #afafaf;
		top: 80px;
		right: 10px;
		z-index: 99;
		border-radius: 50%;
		background: #42B983;
	} 
</style>