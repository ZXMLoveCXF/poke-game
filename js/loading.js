//获取浏览器页面可见高度和宽度  
var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth;

//计算loading框距离顶部和左部的距离（loading框的宽度为70px，高度为70px）  
var _LoadingTop = (_PageHeight - 70) / 2 - 10,
	_LoadingLeft = (_PageWidth - 70) / 2;

//在页面未加载完毕之前显示的loading Html自定义内容  
var _LoadingHtml = '<div id="loadingDiv" style="margin-left:' + _LoadingLeft + 'px;margin-top:' + _LoadingTop + 'px;"><div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div></div>';
//呈现loading效果  
function showLoading() {
	var loadding = document.getElementById('loadBox');
	var div = document.createElement("div");
	div.id = "mDiv";
	div.innerHTML = _LoadingHtml;
	loadding.appendChild(div);
}
showLoading();

function showRotating() {
	document.getElementById('roateBox').className = 'pop wh';
	document.getElementById('rightArrow').className = "dis-none";
}

function hideLoading() {
	var loadingMask = document.getElementById('loadingDiv');
	loadingMask.parentNode.removeChild(loadingMask);
	document.getElementById('loadBox').className = 'on';
}

function hideRotating() {
	document.getElementById('roateBox').className = 'dis-none';
	if(roateFlag){
		document.getElementById('rightArrow').className = "rightArrow";
	}
}