<template>
	<div id="release">
		<div class="title">
			<span class="t">美告发布</span>
			<span class="right">秘籍</span>
		</div>
		<div class="box">
			<div class="adver">
				<img src="../../assets/hp.jpg" />
			</div>
			<input class="upload_i" type="file" />
			<span class="upload">上传</span>
		</div>
		<div class="info">
			<span class="info_t">投放范围</span>
			<select v-model="range"  @change="getCouponSelected" >
				<option :value="coupon.id" v-for="coupon in couponList" >{{coupon.name}}</option>        
			</select>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:'release',
		data(){
			return{
				couponList:[
                        {id: 'all',name: '全国'},
                        {id: 'nearby',name: '附近'},
                        {id: 'customize',name: '自定义'}
                    ],
				range:''
			}
		},
		created(){
　　　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
			this.range = this.couponList[0].id;
         },
		methods: {
		　getCouponSelected(){
			console.log(5555555555555)
				switch(this.range){
					case "all":  this.$router.push({path:'/national'}); break;
					case "nearby": this.$router.push({path:'/nearby'}); break;
					case "customize":this.$router.push({path:'/customize'}); break;
				}
			}
		},
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
	.title .right{
		position: absolute;
		top: 0;
		height: 36px;
		line-height: 36px;
		display: inline-block;
		right: 3%;
	}
	.box{
		width: 100%;
	}
	.box .adver img{
		width: 80%;
		height: 130px;
	}
	.box .upload_i{
		height: 0px;
		border: none;
		position: fixed;
		z-index: -10;
		top: 40px;
	}
	.box .upload{
		display: inline-block;
		width: 120px;
		height: 36px;
		background: #42B983;
		color: white;
		line-height: 36px;
		border-radius: 20px;
		margin-top: 10px;
	}
	.info{
		margin-top: 10px;
		padding: 10px 0;
		border-top: 1px solid #bfbfbf;
		border-bottom: 1px solid #bfbfbf;
	} 
</style>