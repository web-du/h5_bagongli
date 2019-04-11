/*
* @Author: web-du
* @Date:   2018-09-30 09:34:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-30 09:35:34
*/

/**实时获取屏幕大小**/
window.onresize = function(){
    var scw=document.documentElement.clientWidth;
    if (scw == 0 || scw == '' || scw == null || scw == undefined) {
        scw = document.body.clientWidth;
    }
    if (scw == 0 || scw == '' || scw == null || scw == undefined) {
        scw = window.screen.width;
    }
    document.documentElement.style.fontSize = scw / 7.5 + 'px';
}
var scw=document.documentElement.clientWidth;
if (scw == 0 || scw == '' || scw == null || scw == undefined) {
	scw = document.body.clientWidth;
}
if (scw == 0 || scw == '' || scw == null || scw == undefined) {
	scw = window.screen.width;
}
document.documentElement.style.fontSize = scw / 7.5 + 'px';
