/*  前端上传图片处理
*	
* 	
*/
let PIC = {
	imgPro : function(event,fn){
		var reader = new FileReader();//    文件读取流对象
		var imgObj = new Image(); // 创建img 对象    用来存储上传的图片
		reader.readAsDataURL(event.target.files[0]) // 将文件读取为DataURL  
		
		reader.onload = function(e){  // 读取完成 后将图片的base64地址信息赋值给imgObj.src 
			// e.target.result就是图片的base64地址信息
			imgObj.src = e.target.result;
		};
		imgObj.onload  = function(){ // 当加载完成 计算在裁剪尺寸
			// 图片原始尺寸
			var originWidth = this.width;
			var originHeight = this.height;
			var newWidth = 0, newHeight = 0;
			var maxWidth = 400,maxHeight = 400; // 限制的尺寸
			if( originWidth>maxWidth || originHeight > maxHeight ){
				if (originWidth / originHeight > maxWidth / maxHeight) {
					newWidth = maxWidth; // 更宽，按照宽度限定尺寸
					newHeight = Math.round(maxWidth * (originHeight / originWidth));
				} else {
					newHeight = maxHeight;
					newWidth = Math.round(maxHeight * (originWidth / originHeight));
				}
			}
			PIC.canvasSet(newWidth,newHeight,imgObj,fn); // 裁剪
			
		}
	},
	canvasSet(targetWidth,targetHeight,imgObj,fn){
		console.log(targetWidth+"-------------"+targetHeight);
		// 缩放图片需要的canvas
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		 // canvas对图片进行缩放
		canvas.width = targetWidth;
		canvas.height = targetHeight;
		// 清除画布
		context.clearRect(0, 0, targetWidth, targetHeight);
		// 图片压缩
		context.drawImage(imgObj, 0, 0, targetWidth, targetHeight);
		 var type = 'image/jpeg';
        //将canvas元素中的图像转变为DataURL
        var dataurl = canvas.toDataURL(type);
        // $("#ceshi1").attr("src",dataurl);
        //抽取DataURL中的数据部分，从Base64格式转换为二进制格式
        var bin = atob(dataurl.split(',')[1]);
        //创建空的Uint8Array
        var buffer = new Uint8Array(bin.length);
        //将图像数据逐字节放入Uint8Array中
        for (var i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        //利用Uint8Array创建Blob对象
        var blob = new Blob([buffer.buffer], {type: type});
		fn(blob) ;
	},
};
export { PIC }
