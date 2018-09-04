<template>
	<div id="menu">
		<button class="more" v-on:click="moreMenu">more</button>
		<div v-if="leftShow" class="left_bg" @click="moreMenu"></div>
		<div id="left" class="left" ref="left">
			<div class="hp" @click="jump">
				<img src="../assets/hp.jpg" />
			</div>
			<div class="name">test</div>
			<div class="leavl">等级</div>
			<div class="list">
				<router-link to="/map">
					<div class="item">订单</div>
				</router-link>
				<router-link to="#">
					<div class="item">钱包</div>
				</router-link>
				<router-link to="#">
					<div class="item">客服</div>
				</router-link>
				<router-link to="#">
					<div class="item">设置</div>
				</router-link>
			</div>
		</div>
		<div class="footer">
			<router-link to='/mg' class="item">美告</router-link>
			<router-link to='/release' class="item">发布</router-link>
			<router-link to='/order' class="item">订单</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:"Menu",
		data(){
			return {
				leftShow:false,
			}
		},
		methods:{
			moreMenu : function(){
				var left = document.getElementById('left');
				var scrollWidth = this.$refs.left.scrollWidth;
				let time ;
				if(!this.leftShow){ // 显示
					let count = -scrollWidth;
					time =  setInterval(function(){
						left.style.left = count + "px";
						count += 2 ;
						if(count >= 0){
							clearInterval(time);
						}
					},1)
				}else{ // 隐藏
					let count = 0;
					time =  setInterval(function(){
						left.style.left = count + "px";
						count -= 2 ;
						if(count <= -(scrollWidth+2)){
							clearInterval(time);
						}
					},1)
				}
				this.leftShow = !this.leftShow;
			},
			
			jump:function(){
				this.$router.push({path:'/user'})
			},
		},
	}
</script>
<style>
	*{
		margin: 0;
		text-decoration: none;
		list-style: none;
		padding: 0;
	}
	#menu{
		width: 100%;
	}
	#menu button{
		font-size: 18px;
	}
	.left_bg{
		width: 100%;
		position: fixed;
		bottom: 0;
		top: 0;
		z-index: 99;
	}
	.left{
		width: 50%;
		position: fixed;
		top: 0;
		bottom: 0;
		background: #42B983;
		z-index: 100;
		left: -50%;
	}
	.left .hp{
		width: 100px;
		height: 100px;
		background: white;
		border-radius: 50%;
		margin: auto;
		margin-top: 20px;
	}
	.left .hp img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.left .name{
		margin-top: 10px;
		color: white;
		font-size: 18px;
	}
	.left .leavl{
		color: red;
		font-size: 14px;
		margin-top: 4px;
		
	}
	.left .list{
		margin-top: 20%;
		width: 100%;
		text-align: left;
	}
	.left .list .item{
		color: white;
		padding-left: 20%;
		height: 40px;
		line-height: 40px;
	}
	.footer{
		position: fixed;
		z-index: 98;
		width: 60%;
		left: 20%;
		bottom: 30px;
		background: #afafaf;
		border-radius: 20px;
		height: 36px;
		line-height: 36px;
		font-size: 0;
	}
	.footer .item{
		color: white;
		display: inline-block;
		width: 30%;
		font-size: 16px;
	}
	.footer .item:active{
		background: #2C3E50;
		border-radius: 20px;
	}
</style>