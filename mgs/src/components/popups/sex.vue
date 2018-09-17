<template>
	<div id="sex">
		<div class="bg"></div>
		<div class="con">
			<div class="con_i">
				<img @click="sexSel(1)" class="con_i_sex" src="../../../static/icon/icon23.png" />
			</div>
			<div class="con_i">
				<img @click="sexSel(0)" class="con_i_sex" src="../../../static/icon/icon24.png" />
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"sex",
		methods:{
			sexSel(n){
				//  1 表示男  0 表示女
				this.$emit('sexSel',n)
			}
		}
	}
</script>
<style>
	#sex .bg{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		z-index: 11;
		background: rgba(0,0,0,0.2);
	}
	#sex .con{
		position: fixed;
		top: 30%;
		width: 80%;
		left: 10%;
		background: white;
		padding : 40px 0;
		z-index: 12;
		border-radius: 5px;
		font-size: 0;
	}
	#sex .con .con_i{
		width: 50%;
		display: inline-block;
	}
	#sex .con .con_i .con_i_sex{
		width: 30%;
		max-width: 100px;
	}
</style>