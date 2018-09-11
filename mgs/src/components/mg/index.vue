<template>
	<div id="mg">
		<div class="title">
			<span class="t">美告</span>
 		</div> 
		<div class="m">
			<div class="m_1">
				<div class="m_1_i">附近</div>
				<div class="m_1_i">全国</div>
			</div>
			<div class="m_2">
				<div class="m_2_i">分类</div>
			</div>
		</div>
		
		<mg-list></mg-list>
		
	</div>
</template>
<script>
	import mgList from './mgList'
	export default{
		name:'mg',
		components:{ mgList }
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
	.m .m_1{
		font-size: 0;
		border-top: 1px solid #AFAFAF;
		border-bottom: 1px solid #AFAFAF;
	}
	.m .m_1 .m_1_i{
		display: inline-block;
		width: 50%;
		font-size: 16px;
		padding: 10px 0;
	}
	.m .m_1 .m_1_i:first-child{
		border-right:  1px solid #AFAFAF;
		margin-left: -1px;
	}
	.m .m_2{
		height: 36px;
		line-height: 36px;
		text-align: left;
		border-bottom: 1px solid #cfcfcf;
	}
	.m .m_2 .m_2_i{
		margin-left: 20px;
	} 
</style>