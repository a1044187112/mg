<template>
	<div id="set">
		<div class="title">
			<span class="t">设置</span>
		</div>
		<div class="con">
			<ul class="con_u">
				<li class="con_l">
					<router-link  class="to" to="/set/account">
						<span class="t">账户与安全</span>	
					</router-link>
				</li>
				<li class="con_l">
					<router-link  class="to" to="#">
						<span class="t">清除缓存</span>
						<span class="t1">35MB</span>
					</router-link>
				</li>
				<li class="con_l">
					<router-link  class="to" to="#">
						<span class="t">版本更新</span>
						<span class="t1">v1.0</span>
					</router-link>
				</li>
				<li class="con_l">
					<router-link  class="to" to="#">
						<span class="t">关于美告</span>
					</router-link>
				</li>
				<li class="con_l">
					<router-link class="to" to="#">
						<span class="t">意见反馈</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'set'
	}
</script>
<style>
	#set{
		background: #cccccc;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 11;
	}
	#set .title{
		background: white;
	}
	#set .con .con_u{
		width: 100%;
	}
	#set .con .con_u .con_l{
		margin-top: 8px;
		background: white;
	}
	#set .con .con_u .con_l .to{
		height: 48px;
		line-height: 48px;
		display: block;
		width:100% ;	
		color: #000000;
		text-align: left;
		text-decoration: none;
	}
	#set .con .con_u .con_l .to .t{
		margin-left: 15px;
	}
	#set .con .con_u .con_l:nth-child(4),
	#set .con .con_u .con_l:last-child{
		margin-top: 2px ;
	}
	#set .con .con_u .con_l .t1{
		float: right;
		margin-right: 20px;
		color: #888888;
	}
</style>