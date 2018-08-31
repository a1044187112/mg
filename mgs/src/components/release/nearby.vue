<template>
	<div id="nearby">
		<ul class="list">
			<li class="i">
				<span class="icon"></span>
				<span class="text">3km</span>
			</li>
			<li class="i">
				<span class="icon"></span>
				<span class="text">5km</span>
			</li>
			<li class="i">
				<span class="icon"></span>
				<span class="text">10km</span>
			</li>
		</ul>
		<div>
			<component :is="item.component" :text="item.text" v-for="item in items"></component>
			<condition></condition>
			<span class="add" @click="add">添加</span>
		</div>
		<footers></footers>
	</div>
</template>
<script>
	import footers from './footer.vue'
	import condition from './condition.vue'
	export default{
		name:"nearby",
		components:{condition,footers},
		data(){
			return{
				items:[]
			}
		},
		methods: {
			add() {
				console.log(5555555);
				this.items.push({
					component:condition
				});
			}
		},
	
	}
</script>
<style>
	#nearby{
		padding-bottom: 50px;
	}
	#nearby .list{
		margin-top: 10px;
		font-size: 0;
		border-bottom: 1px solid #dfdfdf;
	}
	#nearby .list .i{
		display: inline-block;
		width: 25%;
		font-size: 16px;
		height: 36px;
		line-height: 36px;
	}
	#nearby .list .i .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-left: 5px;
		border: 1px solid #DFDFDF;
		vertical-align: middle;
		margin-top: -3px;
		
	}
	#nearby .list .i .icon.active{
		background: #42B983;
	}
	.add{
		display: inline-block;
		height: 36px;
		width: 120px;
		background:  #42B983;
		color: white;
		line-height: 36px;
		border-radius: 20px;
		margin-top: 20px;
	}
	
</style>