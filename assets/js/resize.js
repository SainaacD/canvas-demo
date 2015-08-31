/* ***********************************
    author: SainaacD;董健国;
    description: Canvas,auto-center,auto-full-screen,remain-length-width-ratio;Canvas保持比例全屏,自动居中;
    date: 2015-8-31;
    **********************************
*/

//定义并记录当前窗口大小
var globalWidth = window.innerWidth;
var globalHeight = window.innerHeight;
//定义并记录canvas画布的大小
var canvasWidth = 320;
var canvasHeight = 480;
//计算并记录窗口长宽比和canvas画布长宽比
var globalRate = globalHeight/globalWidth;
var canvasRate = canvasHeight/canvasWidth;
//改变窗口大小的函数
var canvas = document.getElementById('body');
function resize() {
    if (globalRate < canvasRate) { //（当窗口长宽比小于画布长宽比）当宽度大于canvas的比例时，调整宽度并水平居中
        canvas.style.width = globalWidth*(globalRate/canvasRate) + 'px';
        canvas.style.marginLeft = (globalWidth*(1-globalRate/canvasRate))/2 + 'px';
        canvas.style.height = globalHeight + 'px';
    }
    if (globalRate == canvasRate) { //当窗口长宽比等于画布长宽比）当宽度等于canvas的比例时，撑满屏幕
        canvas.style.width = globalWidth + 'px';
        canvas.style.height = globalHeight + 'px';
    }
    if (globalRate > canvasRate) { //当窗口长宽比小于画布长宽比）当宽度小于canvas的比例时，调整高度并垂直居中
        canvas.style.width = globalWidth + 'px';
        canvas.style.height = globalHeight*(canvasRate/globalRate) + 'px';
        canvas.style.marginTop = (globalHeight*(1-canvasRate/globalRate))/2 + 'px';
    }
}

resize();