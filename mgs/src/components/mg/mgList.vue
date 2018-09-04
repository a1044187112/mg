<template>
	<div id="mgList">
		<ul class="list">
			<li class="l_i" v-for="item in mglist">
				<div class="t">
					<img class="hp" v-bind:src="item.hp" />
					<span class="name">{{item.name}}</span>
				</div>
				<div class="content">
					<img v-bind:src="item.mgImg" />
					<span class="">投放车辆数：{{item.carNum}}</span>
					<span class="">每车投放次数：{{item.num}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'mgList',
		data(){
			return {
				mglist:[
					{ hp:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',name:'乐购',
						mgImg:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',carNum:100,num:50,
					},
					{ hp:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',name:'乐购',
						mgImg:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',carNum:100,num:50,
					},
					{ hp:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',name:'乐购',
						mgImg:'http://img3.imgtn.bdimg.com/it/u=1632025216,2925603189&fm=200&gp=0.jpg',carNum:100,num:50,
					},
				],
			}
		}
	}
</script>
<style>
	.list .l_i{
		margin-top: 20px;
		border-bottom: 1px solid #DFDFDF;
		text-align: left;
		padding-bottom: 10px;
	}
	.list .l_i .t .hp{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-left: 20px;
		vertical-align: middle;
	}
	.list .l_i .t .name{
		font-size: 18px;
		margin-left: 10px;
		vertical-align: middle;
	}
	.list .l_i  .content{
		width: 90% ;
		margin: auto;
		margin-top: 10px;
		overflow: hidden;
	}
	.list .l_i .content img{
		width: 100%;
		display: block;
		
	}
	.list .l_i .content span{
		line-height: 36px;
	}
</style>