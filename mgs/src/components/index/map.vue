<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
//   import AMap from 'AMap'
//   import AMapUI  from 'AMapUI'
  var map
  export default {
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
				let mk1,mk2;
       //创建地图 
				/* eslint-disable no-undef*/
				let mapObj = new AMap.Map('container', {
          center: [116.000923, 36.675807],
          zoom: 14,
        });
				mapObj.setMapStyle('amap://styles/1f5bca85a0363d4768cd74be2dff949f'); // 设置地图样式
				//两个组件：放大缩小按钮和图层的切换
				mapObj.plugin(['AMap.ToolBar', 'AMap.MapType'], function () {
					//mapObj.addControl(new AMap.ToolBar())
					// mapObj.addControl(new AMap.MapType({showTraffic: false, showRoad: false}))
				})
				mapObj.plugin(['AMap.Geolocation'], function () {
							let geolocation = new AMap.Geolocation({
								enableHighAccuracy: true, //  是否使用高精度定位，默认:true
								timeout: 10000, //  超过10秒后停止定位，默认：无穷大
								maximumAge: 0, // 定位结果缓存0毫秒，默认：0
								convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
								showButton: true, //  显示定位按钮，默认：true
								buttonPosition: 'RB',  // 定位按钮停靠位置，默认：'LB'，左下角
								buttonOffset: new AMap.Pixel(10, 100), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
								showMarker: false, //  定位成功后在定位到的位置显示点标记，默认：true
								showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
								panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
								//zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false,
								
							})
							mapObj.addControl(geolocation)
							geolocation.getCurrentPosition();
							AMap.event.addListener(geolocation, 'complete', (result) => {
								mapObj.setCenter(result.position)
								let m = result.position.M,o = result.position.O;
								if(mk1){
									mapObj.remove([mk1,mk2]);  // 重新定位的时候移除之前添加的icon
								}
								mk1 = new AMap.Marker({
									map:mapObj,
									offset:new AMap.Pixel(-10, -10),
									icon:new AMap.Icon({            
																size: new AMap.Size(24, 24),  //图标大小
																image: "http://localhost:8080/static/icon/icon15.png",
																imageSize:new AMap.Size(20, 20),  //图标大小
														}),
									draggable:false,
									raiseOnDrag:false,
									visible:true,
									animation:'AMAP_ANIMATION_NONE',
									angle:360,
									autoRotation:true,
								});
								mk2 = new AMap.Marker({  // 添加自定义icon
									map:mapObj,
									offset:new AMap.Pixel(-10, -25),
									icon:new AMap.Icon({            
																size: new AMap.Size(18, 27),  //图标大小
																image: "http://localhost:8080/static/icon/icon5.png",
																imageSize:new AMap.Size(18, 27),  //图标大小
														}),
									draggable:true,
									raiseOnDrag:true,
									visible:true,
									animation:'AMAP_ANIMATION_NONE',
								});
							})  //  返回定位信息
							AMap.event.addListener(geolocation, 'error', (result) => {
								console.log(result)
							})  //  返回定位出错信息
							
							
						});
						
						AMap.event.addListener(mapObj,"moveend",function(){ // 监听地图平移事件
								if(mk2){
										mk2.setPosition(mapObj.getCenter()); //让mk2处于居中状态
								}
						});
						AMap.event.addListener(mapObj,"zoomend",function(){ // 监听地图zoom等级变化
							if(mk2){
									mk2.setPosition(mapObj.getCenter());//让mk2处于居中状态
							}
						});
      }
    }
  }
</script>
<style>
	#container{
		width: 100%;
		position: fixed;
		z-index: 10;
		top: 0;
		bottom: 0;
	}
</style>