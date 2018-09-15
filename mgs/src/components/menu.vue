<template>
	<div id="menu">
		<div class="header">
			<span class="t_left" @click="moreMenu"><img src="/static/icon/icon9.png" /></span>
			<span class="title">美告</span>
			<span class="t_right"><img src="/static/icon/icon10.png" />
				<span class="info_text">2</span>
			</span>
		</div>
		<div v-if="leftShow" class="left_bg" @click="moreMenu"></div>
		<div id="left" class="left" ref="left">
			<div class="hp" @click="jump">
				<img src="../assets/hp.jpg" />
			</div>
			<div class="name">test</div>
			<div class="leavl">未认证</div>
			<div class="list">
				<router-link v-for='(item,key)  in menuList' v-bind:to="item.to" v-bind:key='key'>
					<div class="item">
						<img v-bind:src="item.img"  />
						<span class="text">{{item.text}}</span>
					</div>
				</router-link>
			</div>
		</div>
		<div class="footer">
			<router-link v-for='(item,key) in bMenu'  v-bind:to="item.to" class="item" v-bind:key='key'>
				<div class="btn active">
					<div class="icon"></div>
					<span class="text">{{item.text}}</span>
				</div>
			</router-link>
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
				menuList:[
					{to:'/order',img:"/static/icon/icon11.png",text:"订单"},
					{to:'/wallet',img:"/static/icon/icon12.png",text:"钱包"},
					{to:'#',img:"/static/icon/icon13.png",text:"客服"},
					{to:'/set',img:"/static/icon/icon14.png",text:"设置"},
				],
				bMenu:[
					{to:"/mg",text:"美告"},
					{to:"/release",text:"发布"},
					{to:"/order",text:"订单"},
				],
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
						count += 3 ;
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
	#menu .header{
		position: fixed;
		width: 100%;
		height: 48px;
		line-height: 48px;
		font-size: 20px;
		text-align: center;
		z-index: 12;
		box-shadow:  0 6px 4px rgba(0,0,0,0.3);
		background: white;
	}      
	#menu .header .t_right,
	#menu .header .t_left{
		float: left;
		display: inline-block;
		width: 48px;
		height: 48px;
	}
	#menu .header .t_right{
		float: right;
		position: relative;
	} 
	#menu .header .t_right img,
	#menu .header .t_left img{
		width: 28px;
		margin-top: 10px;
	}
	#menu .header .t_right .info_text{
		position: absolute;
		width: 14px;
		height: 14px;
		font-size: 8px;
		line-height: 14px;
		text-align: center;
		display: inline-block;
		background: red;
		color: white;
		top: 8px;
		right: 8px;
		border-radius: 50%;
	}
	.left_bg{
		width: 100%;
		position: fixed;
		bottom: 0;
		top: 0;
		z-index: 99;
	}
	#menu .left{
		width: 65%;
		position: fixed;
		top: 0;
		bottom: 0;
		background: #343434;
		z-index: 100;
		left: -65%;
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
		height: 50px;
		line-height: 50px;
	}
	.left .list .item:hover{
		background: #6a6a6a;
	}
	
	.left .list .item img{
		width: 24px;
		vertical-align: middle;
		margin-left: -5%;
	}
	.left .list .item .text{
		margin-left: 15px;
		vertical-align: middle;
		line-height: 50px;
	}
	
	
	.footer{
		position: fixed;
		z-index: 98;
		width: 70%;
		left: 15%;
		bottom: 30px;
		background: white;
		border-radius: 35px;
		font-size: 0;
		height: 70px;
		box-shadow: 0 0 3px 3px rgb(0,0,0,0.4);
	}
	.footer .item{
		color: #000000;
		display: inline-block;
		width: 30%;
		font-size: 16px;
		text-align: center;
	}
	.footer .item:active{
		background: ;
	}
	.footer .item .btn{
		width: 80px;
		height: 63px;
		border-radius: 50%;
		margin-top: -5px;
		padding-top: 17px;
	}
	.footer .item .btn:hover{
		background: #333333;
		color: white;
	}
	.footer .item .btn .icon{
		display: block;
		margin: auto;
		width: 27px;
		height: 25px;
	}
	.footer .item:first-child .btn .icon{
		background: url(/static/icon/icon1_active.png);
		background-size: 100% 100%;
	}
	.footer .item:active:first-child .btn .icon{
		background: url(/static/icon/icon1.png);
		background-size: 100% 100%;
	}
	.footer .item:nth-child(2) .btn .icon{
		background: url(/static/icon/icon2_active.png);
		background-size: 100% 100%;
	}
	.footer .item:active:nth-child(2) .btn .icon{
		background: url(/static/icon/icon2.png);
		background-size: 100% 100%;
	}
	.footer .item:nth-child(3) .btn .icon{
		background: url(/static/icon/icon3_active.png);
		background-size: 100% 100%;
	}
	.footer .item:active:nth-child(3) .btn .icon{
		background: url(/static/icon/icon3.png);
		background-size: 100% 100%;
	}
	.footer .item .btn .text{
		display: block;
		font-size: 14px;
		margin-top: 3px;
	}
	
</style>