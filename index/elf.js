/**
 * Created by loje on 2017/7/7.
 */
var canvas = document.getElementById('canvasbg');
var ctx = canvas.getContext('2d');
canvas.width = canvas.parentNode.offsetWidth;
canvas.height = canvas.parentNode.offsetHeight;
ctx.fillStyle = "rgba(255,75,109, 0.1)";
ctx.moveTo(0, canvas.height/2);
ctx.lineTo(canvas.width, canvas.height/2);
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.lineTo(0, canvas.height/2);
ctx.closePath();
ctx.fill();

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var step = 0;

var lines = ["rgba(255,255,255, 0.15)", "rgba(255,255,255, 0.15)", "rgba(255,255,255, 0.15)"];
function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    step++;
    //画3个不同颜色的矩形
    for(var j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j];
        //每个矩形的角度都不同，每个之间相差45度
        var angle = (step+j*68)*Math.PI/180;
        var deltaHeight = Math.sin(angle) * 50;
        var deltaHeightRight = Math.cos(angle) * 50;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2+deltaHeight);
        ctx.bezierCurveTo(
            canvas.width /2,
            canvas.height/2+deltaHeight,
            canvas.width / 2,
            canvas.height/2+deltaHeightRight,
            canvas.width,
            canvas.height/2+deltaHeightRight
        );
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, canvas.height/2+deltaHeight);
        ctx.closePath();
        ctx.fill();
    }
    requestAnimFrame(loop);
}
loop();