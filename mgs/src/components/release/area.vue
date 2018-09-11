<template>
	<div id="areas">
		<span>投放地点：</span>
		<select id="leavl_1" v-model="leavl1" autocomplete="off">
			<option value="all" selected="selected">全部</option>
			<option v-for="(item,key) in areaData" v-bind:value="key">{{item.name}}</option>
		</select>
		<select id="leavl_2" v-model="leavl2" autocomplete="off">
			<option value="all" selected="selected">全部</option>
			<option v-for="(item,key) in leval2Data" v-bind:value="key">{{item.name}}</option>
		</select>
		<select id="leavl_3">
			<option value="all" selected="selected">全部</option>
			<option v-for="(item,key) in leval3Data" v-bind:value="key">{{item}}</option>
		</select>
	</div>
</template>

<script>
	export default{
		name:'areas',
		data(){
			return{
				areaData : {}, // 省
				leval2Data:{}, // 市
				leval3Data:{}, // 县/区
				leavl1:'',
				leavl2:'',
			}
		},
		mounted: function(){
			this.initData();
		},
		created(){
			this.leavl_1 = this.areaData[0];
		},
		methods: {
			initData : function(){ 
				let _self = this;
				var xhr =  new XMLHttpRequest();
				xhr.open('GET', '/api/areaData', true);
				xhr.send(null)
				console.log(xhr);
				xhr.onreadystatechange =  function(){
					if(xhr.status == 200 && xhr.readyState == 4){
						var type=JSON.parse(xhr.responseText);
						_self.areaData = type.data;
					}
				}
				
			},
		},
		watch: {
			leavl1(newValue, oldValue) {
				let value = document.getElementById("leavl_1").value;
				let value2 = document.getElementById("leavl_2");
				console.log(value);
				if(value == 'all'){ // 如果选择第一栏  则将后面的都置为初始状态
				console.log(value2[0]);
					value2[0].selected = true;
					this.leval2Data = {};
					this.leval3Data = {};
					return;
				}
				this.leval2Data = this.areaData[value].child;
			},
			
			leavl2(newValue, oldValue) {
				let value = document.getElementById("leavl_1").value;
				let value2 = document.getElementById("leavl_2").value;
				console.log(value);
				if(value2 == 'all'){ // 如果选择第一栏  则将后面的都置为初始状态
					this.leval3Data = {};
					return;
				}
				this.leval3Data = this.areaData[value].child[value2].child;
			},
		},
	}
</script>
<style>
	#areas{
		height: 42px;
		line-height: 42px;
		text-align: left;
		width: 100%;
	}
	#areas span{
		font-size: 14px;
	}
	#areas select{
		height: 28px;
		line-height: 28px;
		width: 80px;
		outline: none;
	} 
</style>