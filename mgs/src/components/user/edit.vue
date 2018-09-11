<template>
	<div id="edit">
		<div class="title">
			<span class="t">编辑资料</span>
			<span class="right">完成</span>
		</div>
		<ul class="list">
			<li class="i">
				<span class="t">修改头像</span>
				<input @change="upload" id="load_img" type="file" value='修改头像' accept="image/*" />
			</li>
			<li class="i">
				<span class="t">品牌名称</span>
				<input type="text" value='可口可乐' />
			</li>
			<li class="i">
				<span class="t">行业</span>
				<input type="text" value='食品饮料' />
			</li>
			<li class="i">
				<span class="t">公司名称</span>
				<input type="text" value='可口可乐' />
			</li>
		</ul>
		<div class="preview" v-if="imgPreview">
			<span class="close" @click.stop="close">x</span>
			<img  v-bind:src="imgPreview" />
			<span class="h"></span>
		</div>
		
	</div>
</template>
<script>
	export default {
		name: "edit",
		data() {
			return {
				imgPreview: ""
			}
		},
		methods: {
			close(){
				this.imgPreview = '';
			},
			upload() {
				let arr = document.getElementById('load_img').files[0];
				console.log(arr);
				// 获取文件对象
				var blob = this.PIC.imgPro(event, this.imgCallback);


			},
			imgCallback(blob) {
				console.log(blob);
				console.log(blob.width + "-----------"+blob.height);
				this.imgPreview = window.URL.createObjectURL(blob);
			}

		},
	}
</script>
<style>
	* {
		list-style: none;
		margin: 0;
	}

	.title {
		width: 100%;
		position: relative;
		height: 36px;
		line-height: 36px;
	}

	.title .right {
		position: absolute;
		top: 0;
		height: 36px;
		line-height: 36px;
		display: inline-block;
		right: 3%;
	}

	.list {
		width: 96%;
		margin: auto;
		margin-top: 40px;
	}

	.list .i {
		width: 100%;
		height: 28px;
		line-height: 28px;
		border-bottom: 1px solid #efefef;
		text-align: left;
		padding-top: 20px;
	}

	.list .i span {
		display: inline-block;
		width: 25%;
		padding-left: 5px;
		color: #969696;
		font-size: 16px;
	}

	.list .i input {
		border: none;
		outline: none;
		font-size: 18px;
	}
	.preview{
		position: fixed;
		z-index: 99;
		width: 200%;
		display: block;
		top: 0;
		bottom: 0;
		overflow: hidden;
		text-align: left;
		background: rgba(0,0,0,0.2);
	}
	.preview img{
		display: inline-block;
		vertical-align: middle;
		width: 50%;
	}
	.preview .h{
		display: inline-block;
		width: 2%;
		height: 100%;
		vertical-align: middle;
	}
	.preview .close{
		position: fixed;
		display: inline-block;
		color: red;
		border: 1px solid #5CD39C;
		height: 20px;
		width: 20px;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
		z-index: 101;
		right: 10px;
		top: 10px;
	} 
</style>
