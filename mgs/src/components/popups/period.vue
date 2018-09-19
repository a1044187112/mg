<template>
	<div id="period">
		<div class="d_bg"></div>
		<div class="d_con">
			<div class="d_con_i">
				<ul class="d_y" @scroll="yScroll">
					<li :class="{active:ySel == item.id}" class="d_y_i" v-for="item in per">{{item.time}}</li>
				</ul>
				<div class="top_line"></div>
				<div class="bottom_line"></div>
			</div>
			<div class="btn">
				<span class="btn_a" @click="cancel">取消</span>
				<span class="btn_b" @click="confirm">确定</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'period',
		data(){
			return{
				per:[
					{id:0,time:""},
					{id:1,time:"07:00-09:00"},{id:2,time:"09:00-11:00"},{id:3,time:"11:00-18:00"},
					{id:4,time:"18:00-20:00"},
					{id:5,time:"20:00-24:00"},{id:6,time:""}
				],
				ySel:1,
			}
		},
		mounted:function(){
			
		},
		methods:{
		
			yScroll(){
				let e = event;
				let _this = this;
				setTimeout(function(){ // 节流函数 不用频繁的执行函数
					let scrollTop = e.srcElement.scrollTop;//滚动的高度
					_this.ySel = _this.selected(scrollTop,e);
				},200);
			},
			selected(scrollTop,event){
				// 获取元素
				let selector = document.getElementsByClassName('d_y_i')[0];
				// 获取每一项的高度
				let liHeight = selector.offsetHeight;
				//根据滚动的高度计算哪一个应该被 选中
				let num = Math.floor(scrollTop/liHeight); // 取整
				
				if(scrollTop%liHeight==0){ // 
					return num+1;
				}else{
					let st = scrollTop%liHeight;
					if(st>liHeight/2){
						num += 1;
						event.srcElement.scrollTop = num*liHeight;
						return num+1;
					}else{
						event.srcElement.scrollTop = num*liHeight;
						return num;
					}
				}
			},
			cancel(){
				this.$emit('periodCancel');
			},
			confirm(){
				let time = document.querySelector('.d_y_i.active').innerText;
				this.$emit('periodConfirm',time);
			},
		},
		destroyed:function(){
			
		}
		
	}
</script>
<style>
	#period .d_bg{
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		background: rgba(0,0,0,0.2);
		z-index: 9998;
	}
	#period .d_con{
		position: fixed;
		top: 30%;
		width: 100%;
		z-index: 9999;
		width: 70%;
		left: 15%;
		border-radius: 10px;
		overflow: hidden;
	}
	#period .d_con .d_con_i{
		padding: 15px 0;
		display: flex;
		display: -webkit-flex;
		background: white;
		width: 100%;
		justify-content: space-around;
		position: relative;
	}
	#period .d_con .d_con_i .bottom_line,
	#period .d_con .d_con_i .top_line{
		position: absolute;
		width: 90%;
		margin-top: 36px;
	}
	#period .d_con .d_con_i .bottom_line{
		margin-top: 72px;
	}
	#period .d_con .d_con_i ul{
		height: 108px;
		overflow: auto;
	}
	#period .d_con .d_con_i ul::-webkit-scrollbar{
		display: none;
	}
	#period .d_con .d_con_i ul li{
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		color: #888888;
	}
	#period .d_con .d_con_i ul li.active{
		font-size: 16px;
		color: #000000;
	}
	#period .d_con .btn{
		width: 100%;
		background: white;
		height: 36px;
		line-height: 36px;
		display: flex;
		border-top: 1px solid #999999;
		font-size: 14px;
	}
	#period .d_con .btn span{
		width: 50%;
		display: inline-block;
		line-height: 36px;
	}
	#period .d_con .btn span:nth-child(2){
		border-left: 1px solid #999999;
		color: red;
	} 
</style>