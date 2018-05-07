/*
 * author: s10430388@gmail.com
 * name: Timer
 */
var second = 0; //时 分 秒
var int;
//开始函数
function startTime() {
	int = setInterval(timer, 1000); //每隔50毫秒执行一次timer函数
}
//计时函数
function timer() {
	second = second + 1;
	$('#timer').html(second);
}
//暂停函数
function stopTime() {
	window.clearInterval(int);
}
/*
 * author: s10430388@gmail.com
 * name: just mobile
 */
//var system = {};
//var p = navigator.platform;
//var u = navigator.userAgent;
//
//system.win = p.indexOf("Win") == 0;
//system.mac = p.indexOf("Mac") == 0;
//system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//if(system.win || system.mac || system.xll) {
//	if(u.indexOf('Windows Phone') > -1) {
//
//	} else {
//		window.location.href = "pc.html";
//	}
//}