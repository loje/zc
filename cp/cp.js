$(document).ready(function () {
    
    function coordinates() {
        $(".orbital .table .td .out").width($(window).width() - 20 - ($(window).width() * 0.4));
        $(".orbital .table .td .out").height($(window).width() - 20 - ($(window).width() * 0.4));

        $(".friends a.user-pic").css("left",$(".friends").width()/2 - $(".friends a.user-pic").width()/2);
        $(".friends a.user-pic").css("top",$(".friends").height()/2 - $(".friends a.user-pic").width()/2);
        $(".friends a.friend-pic").css("left",$(".friends").width()/2 - $(".friends a.friend-pic").width()/2);
        $(".friends a.friend-pic").css("top",$(".friends").height()/2 - $(".friends a.friend-pic").width()/2);
    }

    coordinates();
    
    $(window).resize(function () {
        coordinates();
    })
    var a = 50;
    // $(".friend-pic:nth-child(2)").css("left",$(".orbital .table .td .out .in").width() + ($(".friends a.user-pic").width()/2));
    // $(".friend-pic:nth-child(2)").css("top",$(".orbital .table .td .out .in").width());
    $(".friend-pic:nth-child(2)").css("transform","translate(50,50)");

})


// var cxt=document.getElementById('canvas').getContext('2d');
// canvas.width=$(window).width();
// canvas.height=$(window).height();
//
// //轨道
// var w = $(window).width()/2;
// var h = $(window).height()/2;
// function drawTrack(){
//     // for(var i=0;i<2;i++){
//     //     cxt.beginPath();
//     //     cxt.arc(w,w,(i+1)*50,0,Math.PI*360,false);
//     //     cxt.closePath();
//     //     //设置笔触的颜色
//     //     cxt.strokeStyle="#fff";
//     //     cxt.stroke();
//     // }
//
// }
// drawTrack();
//
// //星球--画出星球需要哪些属性
// function Star(x,y,radius,cycle,sColor,eColor){
//     this.x=x;   //星球的坐标点
//     this.y=y;
//     this.radius=radius;//星球的半径
//     this.cycle=cycle;//公转周期
//     this.sColor=sColor;//星球的颜色(开始色,结束色)
//     this.eColor=eColor;
//     this.color=null;//新建一个渐变颜色空对象
//
//     this.time=0;//设置一个计时器
//
//     this.draw=function(){
//         cxt.save();//保存之前的画布内容
//         cxt.translate(w,h);//重置0,0坐标点
//         cxt.rotate(this.time*(360/this.cycle)*Math.PI/180);//设置旋转角度
//         cxt.beginPath();//画星球
//         cxt.arc(this.x,this.y,this.radius,0,360,false);
//         cxt.closePath();
//         this.color=cxt.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
//         this.color.addColorStop(0,this.sColor); //渐变开始点和颜色
//         this.color.addColorStop(1,this.eColor); //渐变结束点和颜色
//         // this.head=cxt.drawImage('http://www.w3school.com.cn/i/eg_tulip.jpg',this.x,this.y);
//         cxt.fillStyle=this.color;   //将渐变对象复制给填充画笔
//         cxt.fill();
//         cxt.restore();  //恢复之前保存的画布内容
//         this.time+=1;//执行完毕之后时间增加
//     }
// }
//
// //创建一个太阳对象的构造函数
// //行星.call(this.初始化x偏移值,初始化y偏移值,星球半径,公转速度值越小越快0为静止,"渐变开始颜色"，"渐变结束颜色")
// function Sun(){ Star.call(this,0,0,25,0,"#F00","#f90")}
//
// //水星
// function Mercury(){ Star.call(this,0,-50,15,600,"#A69697","#5C3E40")}
// //水星2
// function Mercury2(){ Star.call(this,0,50,15,600,"#A69697","#5C3E40")}
// //水星3
// function Mercury3(){ Star.call(this,50,0,15,600,"#A69697","#5C3E40")}
//
// //金星
// function Venus(){ Star.call(this,0,-100,15,224.701,"#C4BBAC","#1F1315")}
//
// //地球
// function Earth(){ Star.call(this,0,-150,15,365.224,"#78B1E8","#050C12")}
//
// //火星
// function Mars(){ Star.call(this,0,-200,15,686.98,"#CEC9B6","#76422D")}
//
// //木星
// function Jupiter(){ Star.call(this,0,-250,15,4332.589,"#C0A48E","#322222")}
//
// //土星
// function Saturn(){ Star.call(this,0,-300,15,10759.5,"#F7F9E3","#5C4533")}
//
// //天王星
// function Uranus(){ Star.call(this,0,-350,15,30799.095,"#A7E1E5","#19243A")}
//
// //海王星
// function Neptune(){ Star.call(this,0,-400,15,60152,"#0661B2","#1E3B73")}
//
//
//
// //创建太阳对象实例
// var sun=new Sun();
// var water=new Mercury();
// var water2=new Mercury2();
// var water3=new Mercury3();
// var gold=new Venus();
// var diqiu=new Earth();
// var fire=new Mars();
// var wood=new Jupiter();
// var soil=new Saturn();
// var god=new Uranus();
// var sea=new Neptune();
//
// function move(){
//     cxt.clearRect(0,0,1000,1000); //清除画布
//     drawTrack();    //画出轨道
//
//     sun.draw();     //调用-画出每个星球
//     water.draw();
//     water2.draw();
//     water3.draw();
//     gold.draw();
//     diqiu.draw();
//     fire.draw();
//     wood.draw();
//     soil.draw();
//     god.draw();
//     sea.draw();
// }
//
// //使个星球进行运动
// setInterval(move,10);