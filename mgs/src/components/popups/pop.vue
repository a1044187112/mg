<template>
	<div>
		<div id="pop" v-if="pop_show">
			<!--  提示框 -->
			<div class="pop_box" id="remind" v-if="remind_show">
				<div class="title">
				</div>
				<div class="info">
					<span>{{remind}}</span>
				</div>
				<button class="btn" @click.stop="btn('remind_show')">确认</button>
			</div>
			
			<!--  确认框 -->
			<div class="pop_box" id="confirm" v-if="confirm_show">
				<div class="info">
					<span>{{confirm}}</span>
				</div>
				<button class="btn_a" @click.stop="btn_a('confirm_show')">确认</button>
				<button class="btn_b" @click.stop="btn_b('confirm_show')">取消</button>
			</div>
			
			 <!-- 带有title的提示框 -->
			 <div class="pop_box" id="re_t" v-if="re_t_show">
			 	<div class="title">
					<span>{{re_t}}</span>
			 	</div>
			 	<div class="info_a">
			 		<span>{{re_t_info}}</span>
			 	</div>
			 	<button class="btn" @click.stop="btn('re_t_show')">确认</button>
			 </div>
			
			 <!--  预览大图 -->
			 <div class="pop_img" v-if="img_show">
				 <div class="close" @click.stop="close(img_show)">关闭</div>
				<img class="img" src="../../assets/hp.jpg"/>
				<span class="img_set"></span>
			 </div>
		</div>
		<div id="pop_no">
			<div class="pop_tips" v-if="tips_1_show">
				{{tips_1}}
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		name:'pop',
		data(){
			return{
				remind:"验证码错误!",
				remind_show:false,
				pop_show:true,
				confirm:"确认退出吗？",
				confirm_show:false,
				tips_1:"这是最常用的吧",
				tips_1_show:false,
				re_t_show:false,
				re_t:"信息",
				re_t_info:"你好",
				img_show:true
			}
		},
		methods: {
			btn(sel){  // 提示框确认
				this[sel] = !this[sel],
				this.pop_show = !this.pop_show; 
			},
			btn_a(sel) { //确认框确认按钮
				this.pop_show = !this.pop_show;
				this[sel] = !this[sel];
			},
			close(sel){ // 图片预览关闭
				this.pop_show = !this.pop_show;
				this[sel] = !this[sel];
			}
		},
	}
</script>
<style>
	#pop{
		position: fixed;
		z-index: 999;
		width: 100%;
		top: 0;
		bottom: 0;
		background: rgba(200,200,200,0.5);
	}
	.pop_box{
		position: fixed;
		top: 20%;
		width: 70%;
		margin-left: 15%;
		background: white;
		min-height: 100px;
		border-radius: 20px;
		max-width: 300px;
	}
	.title{
		height: 36px;
		line-height: 36px;
		text-align: left;
		width: 100%;
		background: rgba(240,240,240,0.8);
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		
	}
	.title span{
		margin-left: 20px;
	}
	.info{
		padding: 30px 10px;
		line-height: 28px;
		border-bottom: 1px solid #cfcfcf;
	}
	.info_a{
		padding: 10px 10px;
		line-height: 28px;
		
	}
	.btn{
		display: inline-block;
		height: 32px;
		line-height: 34px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 70px;
		border-radius: 10px;
		border: none;
		outline: none;
		color: white;
		background: #42B983;
		float: right;
		margin-right: 20px;
	}
	.btn_b,
	.btn_a{
		display: inline-block;
		height: 32px;
		line-height: 34px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 70px;
		border-radius: 10px;
		border: none;
		outline: none;
		color: white;
		background: #5CD39C;
	}
	.btn_b{
		margin-left: 20px;
		background: #808080;
	}
	
	.pop_img{
		width: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		/* display: table-cell; */
		text-align: center;
		/* vertical-align: middle; */
		z-index: 999;
	}
	.pop_img .img_set{
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
	.pop_img img{
		display: inline-block;
		width: 98%;
		vertical-align: middle;
	}
	.pop_img .close{
		position: fixed;
		top: 10px;
		right: 10px;
		z-index: 1000;
	}
	
	.pop_tips{
		position: fixed;
		width: 60%;
		top: 40%;
		z-index: 1000;
		background: rgb(102,102,102);
		color: white;
		height: 48px;
		line-height: 48px;
		overflow: auto;
		border-radius: 10px;
		margin-left: 20%;
	}
</style>