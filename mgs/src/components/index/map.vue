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
       //创建地图 
	   /* eslint-disable no-undef*/
		let mapObj = new AMap.Map('container', {
          center: [117.000923, 36.675807],
          zoom: 8
        });
		//两个组件：放大缩小按钮和图层的切换
		mapObj.plugin(['AMap.ToolBar', 'AMap.MapType'], function () {
		  mapObj.addControl(new AMap.ToolBar())
		  mapObj.addControl(new AMap.MapType({showTraffic: false, showRoad: false}))
		})
		
		mapObj.plugin(['AMap.Geolocation'], function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            timeout: 10000, //  超过10秒后停止定位，默认：无穷大
            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //  显示定位按钮，默认：true
            buttonPosition: 'LB',  // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          })
          mapObj.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', (result) => {
            mapObj.setCenter(result.position)
			console.log(result.position);
          })  //  返回定位信息
          AMap.event.addListener(geolocation, 'error', (result) => {
            console.log(result)
          })  //  返回定位出错信息
        })
      }
    }
  }
</script>
<style>
	#container{
		width: 100%;
		position: fixed;
		z-index: 10;
		top: 40px;
		bottom: 0;
	}
</style>