<template>
	<div id="date">
		<div class="d_bg"></div>
		<div class="d_con">
			<div class="d_con_i">
				<ul class="d_y" @scroll="yScroll">
					<li :class="{active:ySel == y.id}" class="d_y_i" v-for="y in dataY">{{y.year}}</li>
				</ul>
				<ul class="d_m" @scroll="mScroll">
					<li :class="{active:mSel == m.id}" class="d_m_i" v-for="m in dataM">{{m.month}}</li>
				</ul>
				<ul class="d_d" @scroll="dScroll">
					<li :class="{active:dSel == d.id}" class="d_d_i" v-for="d in dataD">{{d.day}}</li>
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
		name:'date',
		data(){
			return{
				dataY:[],
				dataM:[
					{month:'',id:"0"},
					{month:'01月',id:"1"},
					{month:'02月',id:"2"},
					{month:'03月',id:"3"},
					{month:'04月',id:"4"},
					{month:'05月',id:"5"},
					{month:'06月',id:"6"},
					{month:'07月',id:"7"},
					{month:'08月',id:"8"},
					{month:'09月',id:"9"},
					{month:'10月',id:"10"},
					{month:'11月',id:"11"},
					{month:'12月',id:"12"},
					{month:'',id:"13"},
				],
				dataD:[
					{day:"",id:0},
					{day:"01日",id:1},
					{day:"02日",id:2},
					{day:"03日",id:3},
					{day:"04日",id:4},
					{day:"05日",id:5},
					{day:"06日",id:6},
					{day:"07日",id:7},
				],
				ySel:1,
				mSel:1,
				dSel:1,
			}
		},
		mounted:function(){
			this.initDateY();
			this.initDateD(31);
		},
		methods:{
			initDateY : function(){ // 显示一百年,
				let date = new Date();
				let year = date.getFullYear();
				this.dataY = [];
				this.dataY.push({year:'',id:year+1}); // 需要多加一列   目的时滚动的时候能滚动到当前的年份
				for(let i = 0 ; i < 100 ; i++){
					let data = {
						year:year-i+"年",
						id:i+1};
					this.dataY.push(data);
				}
			},
			initDateD : function(days){
				this.dataD = [];
				this.dataD.push({day:"", id:0 });
				for(let i = 0 ; i < days ; i++){
					if(i>8)
						this.dataD.push({day:""+( i + 1 )+'日', id:i+1 });
					else
						this.dataD.push({day:"0"+( i + 1 )+'日', id:i+1 });
				}
				this.dataD.push({day:"", id:32 });
			},
			yScroll(){
				let e = event;
				let _this = this;
				setTimeout(function(){ // 节流函数 不用频繁的执行函数
					let scrollTop = e.srcElement.scrollTop;//滚动的高度
					_this.ySel = _this.selected(scrollTop,e);
					_this.initDateD(_this.setDay());    // 计算day
				},200);
			},
			mScroll(){
				let e = event;
				let _this = this;
				setTimeout(function(){ // 节流函数 不用频繁的执行函数
					let scrollTop = e.srcElement.scrollTop;//滚动的高度
					_this.mSel = _this.selected(scrollTop,e);
					_this.initDateD(_this.setDay());    // 计算day
				},200);
			},
			dScroll(){
				let e = event;
				let _this = this;
				setTimeout(function(){ // 节流函数 不用频繁的执行函数
					let scrollTop = e.srcElement.scrollTop;//滚动的高度
					_this.dSel = _this.selected(scrollTop,e);
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
			setDay(){
				let yearText = document.querySelector('.d_y_i.active').innerText;
				let year = parseInt(yearText);
				let monthText = document.querySelector('.d_m_i.active').innerText;
				let month = parseInt(monthText);
				if(year%4 == 0 && year%400 != 0){ // 润年
					if(month == 4 || month == 6 || month == 9|| month == 11){
						return 30;
					}else if(month == 2){
						return 29;
					}else {
						return 31;
					}
				}else{
					if(month == 4 || month == 6 || month == 9|| month == 11){
						return 30;
					}else if(month == 2){
						return 28;
					}else {
						return 31;
					}
				}
			},
			cancel(){
				this.$emit('dateCancel');
			},
			confirm(){
				let year = document.querySelector('.d_y_i.active').innerText.substring(0,4);
				let month =  document.querySelector('.d_m_i.active').innerText.substring(0,2);
				let day = document.querySelector('.d_d_i.active').innerText.substring(0,2);
				let birthday = year+'-'+month+"-"+day;
				this.$emit('dateConfirm',birthday);
			},
		},
		destroyed:function(){
			
		}
		
	}
</script>
<style>
	#date .d_bg{
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		background: rgba(0,0,0,0.2);
		z-index: 102;
	}
	#date .d_con{
		position: fixed;
		top: 30%;
		width: 100%;
		z-index: 102;
		width: 70%;
		left: 15%;
		border-radius: 10px;
		overflow: hidden;
	}
	#date .d_con .d_con_i{
		padding: 15px 0;
		display: flex;
		display: -webkit-flex;
		background: white;
		width: 100%;
		justify-content: space-around;
		position: relative;
	}
	#date .d_con .d_con_i .bottom_line,
	#date .d_con .d_con_i .top_line{
		position: absolute;
		width: 90%;
		margin-top: 36px;
		/* border-top: 1px solid crimson; */
	}
	#date .d_con .d_con_i .bottom_line{
		margin-top: 72px;
	}
	#date .d_con .d_con_i ul{
		height: 108px;
		overflow: auto;
	}
	#date .d_con .d_con_i ul::-webkit-scrollbar{
		display: none;
	}
	#date .d_con .d_con_i ul li{
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		color: #888888;
	}
	#date .d_con .d_con_i ul li.active{
		font-size: 16px;
		color: #000000;
	}
	#date .d_con .btn{
		width: 100%;
		background: white;
		height: 36px;
		line-height: 36px;
		display: flex;
		border-top: 1px solid #999999;
	}
	#date .d_con .btn span{
		width: 50%;
		display: inline-block;
		line-height: 36px;
	}
	#date .d_con .btn span:nth-child(2){
		border-left: 1px solid #999999;
		color: red;
	} 
</style>