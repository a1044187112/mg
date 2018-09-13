<template>
	<div id="account">
		<div class="title">
			<span class="t">账户与安全</span>
		</div>
		<div class="con">
			<ul class="con_u">
				<li class="con_l">
					<router-link  class="to" to="/set/account/certiCpd">
						<span class="t">实名认证</span>
						<span class="t1">已认证</span>
					</router-link>
				</li>
				<li class="con_l">
					<router-link  class="to" to="#">
						<span class="t">已绑定</span>
						<span class="t1">13585555555</span>
					</router-link>
				</li>
				<li class="con_l">
					<router-link  class="to" to="/findPwd">
						<span class="t">修改登陆密码</span>
						<span class="t1">去修改</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'account'
	}
</script>
<style>
	#account{
		background: #cccccc;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		z-index: 11;
	}
	#account .title{
		background: white;
	}
	#account .con{
		margin-top: 20px;
	}
	#account .con .con_u{
		width: 100%;
	}
	#account .con .con_u .con_l{
		background: white;
		margin-top: 1px;
	}
	#account .con .con_u .con_l .to{
		height: 48px;
		line-height: 48px;
		display: block;
		width:100% ;	
		color: #000000;
		text-align: left;
		text-decoration: none;
		font-size: 14px;
	}
	#account .con .con_u .con_l .to .t{
		margin-left: 15px;
		font-weight: 600;
	}
	#account .con .con_u .con_l .t1{
		float: right;
		margin-right: 20px;
	}
</style>