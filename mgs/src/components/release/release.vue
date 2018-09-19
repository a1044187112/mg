<template>
	<div id="release">
		<hea :heaMsg="par_hea"></hea>
		<div class="box">
			<div class="adver">
				<img src="../../../static/icon/icon32.png" />
			</div>
			<input class="upload_i" type="file" />
			<span class="upload">上传图片</span>
		</div>
		<div class="info">
			<span class="info_t">投放范围</span>
			<div class="select">
				<span @click="dropDown" class="sel">{{sel_text}}</span>
				<ul v-if="drop_show" class="info_u">
					<li @click="selItem('nearby')" class="info_i">附近</li>
					<li  @click="selItem('all')" class="info_i">全国</li>
					<li  @click="selItem('customize')" class="info_i">自定义</li>
				</ul>
			</div>
			<span class="save">保存</span>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import hea from '../header/header.vue'
	export default{
		name:'release',
		components:{hea},
		data(){
			return{
				par_hea:{  // 父组件传递参数
					left_show:true,
					t_val:"美高发布",
					right_val:"秘籍"
				},
				drop_show:false,
				sel_text:'附近',
			}
		},
		mounted:function(){
			this.initData();
		},
		methods: {
			initData(){
				let url = window.location.href;
				if(url.indexOf('national')>0){ 
					this.sel_text = "全国";
				}else if(url.indexOf('nearby')>0){
					this.sel_text = "附近";
				}else if(url.indexOf('customize')>0){
					this.sel_text = "自定义";
				}
			},
			dropDown(){
				this.drop_show = !this.drop_show;
			},
		　	selItem(text){
				this.drop_show = !this.drop_show;
				switch(text){
					case "all":  this.$router.push({path:'/national'});this.sel_text = "全国"; break;
					case "nearby": this.$router.push({path:'/nearby'});this.sel_text = "附近"; break;
					case "customize":this.$router.push({path:'/customize'});this.sel_text = "自定义"; break;
				}
			},
		},
	}
</script>
<style>
	*{
		list-style: none;
		margin: 0;
	}
	.box{
		width: 100%;
		border-top: 1px solid #CCCCCC;
		padding-top: 5px;
		position: relative;
	}
	.box .adver img{
		width: 96%;
	}
	.box .upload_i{
		display: none;
	}
	.box .upload{
		display: inline-block;
		height: 36px;
		line-height: 36px;
		position: absolute;
		min-width: 80px;
		top: 50px;
		left: 35%;
		border: 1px dotted #c1c1c1;
		color: #959595;
		padding-left: 20px;
		background: url(../../../static/icon/icon34.png) no-repeat;
		background-position: 12px 10px;
		background-size: 15px 15px;
		font-size: 14px;
		z-index: 1;
		letter-spacing: 1px;
	}
	.info{
		margin-top: 10px;
		padding: 10px 0;
		text-align: left;
		text-indent: 15px;
		font-size: 14px;
	} 
	.info .select{
		display: inline-block;
		position: relative;
	}
	.info .select .sel{
		display: inline-block;
		width: 70px;
		padding-right: 15px;
		height: 36px;
		border: 1px solid #CCCCCC;
		line-height: 36px;
		vertical-align: middle;
		border-radius: 5px;
		background: url(../../../static/icon/icon33.png) no-repeat;
		background-position: 60px 14px;
		background-size: 16px ;
	}
	.info .select .info_u{
		position: absolute;
		background: white;
		width: 77px;
		left: 15px;
		border: 1px solid #CCCCCC;
		top: 36px;
		z-index: 21;
	}
	.info .select .info_u .info_i{
		height: 32px;
		line-height: 32px;
		width: 100%;
		border-bottom: 1px dotted #CCCCCC;
		
	}
	.info .select .info_u .info_i:last-child{
		border: none;
	}
	.info .save{
		float: right;
		margin-right: 15px;
		color: #eb5c52;
		letter-spacing: 1px;
	}
</style>