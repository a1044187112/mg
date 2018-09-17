<template>
	<div id="areas">
		<div class="title">
			<img @click="close" class="close" src="../../../static/icon/icon20.png"/>
			<span class="t">{{title}}</span>
		</div>
		<div class="area">
			<div id="select" v-bind:class="{active:check_in !== 1}" ></div>
			<ul id="level_1" class="level" v-if="check_in === 1">
				<li @click="level" class="level_i" v-for="item in areaData">{{item}}</li>
			</ul>
			<ul id="level_2" class="level" v-if="check_in === 2">
				<li @click="level" class="level_i" v-for="item in level2Data">{{item}}</li>
			</ul>
			<ul id="level_3" class="level" v-if="check_in === 3">
				<li  @click="level" class="level_i" v-for="item in level3Data">{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'areas',
		data(){
			return{
				title:"请选择省份",
				check_in:1,
				areaData : ["北京","上海",'广东省','江苏省','四川省','福建省','山东省','湖北省','湖南省','贵州省','安徽省'], // 省
				level2Data:["","北京","上海",'广东省','江苏省','四川省','福建省','山东省','湖北省','湖南省','贵州省','安徽省'], // 市
				level3Data:["","北京","上海",'广东省','江苏省','四川省','福建省','山东省','湖北省','湖南省','贵州省','安徽省'], // 县/区
			}
		},
		mounted: function(){
			// this.initData();
		},
		methods: {
			close(){
				this.$emit("closeArea");
			},
			level(){
				this.check_in = ++this.check_in;
				var areaText = event.target.innerText;
				this.setText(areaText);
			},
			setText(areaText){
				let selector = document.getElementById("select");
				selector.innerText = selector.innerText +" "+ areaText;
				if(this.check_in === 4){
					this.$emit("returnAreas",selector.innerText)
				}
				
			},
			
// 			initData : function(){ 
// 				let _self = this;
// 				var xhr =  new XMLHttpRequest();
// 				xhr.open('GET', '/api/areaData', true);
// 				xhr.send(null)
// 				console.log(xhr);
// 				xhr.onreadystatechange =  function(){
// 					if(xhr.status == 200 && xhr.readyState == 4){
// 						var type=JSON.parse(xhr.responseText);
// 						_self.areaData = type.data;
// 					}
// 				}
// 			},
			

		},
		watch: {
			
		},
	}
</script>
<style>
	#areas{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		z-index: 12;
		background: white;
		overflow: auto;
		padding-top: 45px;
	}
	#areas .title{
		font-size: 14px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		width: 100%;
		position: fixed;
		z-index: 15;
		background: white;
		top: 0;
	}
	#areas .title .close{
		float: left;
		width: 15px;
		margin-top: 15px;
		margin-left: 15px;
	}
	#areas .area{
		overflow: auto;
	}
	#areas .area #select{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-indent: 6%;
		background: #eaeaea;
		font-size: 14px;
		position: fixed;
		z-index: 15;
		top: 45px;
		text-align: left;
		display: none;
	}
	#areas .area #select.active{
		display: block;
	}
	#areas .area .level{
		width: 100%;
		text-align: left;
		text-indent: 6%;
		background: #f1f5f6;
	}
	#areas .area .level .level_i{
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		letter-spacing: 1px;
		border-bottom: 1px solid #cecece;
	}
</style>