//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
})


$(".bookSlider").slidebox({
    boxh: 218,//盒子的高度
    w: 330,//图片的宽度
    h: 218,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 12,//控制按钮宽度
    controlsH: 12,//控制按钮高度
    radius: 6//控制按钮圆角度数
});


// 服装
$(".clothSlider").slidebox({
    boxh: 338,//盒子的高度
    w: 426,//图片的宽度
    h: 338,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 12,//控制按钮宽度
    controlsH: 12,//控制按钮高度
    radius: 6//控制按钮圆角度数
});

/* $("#clothSlider").slidebox({
    boxh: 338,//盒子的高度
    w: 426,//图片的宽度
    h: 338,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 12,//控制按钮宽度
    controlsH: 12,//控制按钮高度
    radius: 6//控制按钮圆角度数
}); 
 */

// 中间展示区交互
$("#ebook .Product-Title>ul>li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#ebook .Tab-Control").eq(index).addClass("current").siblings().removeClass("current")
})


$("#cloth .Product-Title>ul>li").mouseenter(function () {
    $(this).addClass("Tab-head").siblings().removeClass("Tab-head")
    let index = $(this).index()
    $("#cloth .Tab-Body").eq(index).addClass("Mobile-body").siblings().removeClass("Mobile-body")
})


$("#childcloth .Product-Title>ul>li").mouseenter(function () {
    $(this).addClass("Tab-head").siblings().removeClass("Tab-head")
    let index = $(this).index()
    $("#childcloth .Tab-Body").eq(index).addClass("Mobile-body").siblings().removeClass("Mobile-body")
})


$("#sport .Product-Title>ul>li").mouseenter(function () {
    $(this).addClass("Tab-head").siblings().removeClass("Tab-head")
    let index = $(this).index()
    $("#sport .Tab-Body").eq(index).addClass("Mobile-body").siblings().removeClass("Mobile-body")
})
// 新书畅销榜交互
$(".Book-Brief>ul>li").mouseenter(function () {
    // alert(2)
    $(this).find("div").show();
    $(this).find("title").show();
    $(this).siblings().find("div").hide();
    $(this).siblings().find("title").hide();
})


// 推广交互------
$("#spread .Promotion-List ul li").mouseenter(function () {
    $(this).addClass("Moving-bg").siblings().removeClass("Moving-bg")
})

// 楼层
let bgcr = ["#93d46f", "#f65727", "#bb9dee", "#ff7394", "#c2ec51"];
$("#Rolling-floor ul li").hover(function () {
    let index = $(this).index();
    $(this).css("background-color", bgcr[index]);
    $(this).css("background-positionX", "-40px"),
        $(this).css("width", "40px");
     
}, function () {
    $(this).css("background", ""),
        $(this).css("background-positionX", "0"),
        $(this).css("width", "0");
})
$("#Rolling-floor ul li").click(function(){
    let $FloorScroll=$(".floor").eq($(this).index());
    let top=$FloorScroll.offset().top;
    $("html,body").stop().animate({ scrollTop:top },300)
})

$("#Coupon-Centre ul .second img").hover(function(){

    $("#Coupon-Centre ul li div").stop().animate({left:-100},300)

},function(){
    $("#Coupon-Centre ul li div").stop().animate({left:40},300)
})

// 回到顶部------
window.addEventListener("scroll",function(){
    let st=document.documentElement.scrollTop;
    console.log(st);
    if(st>=4273){
        Returntop.style.display="block";
    }else{
        Returntop.style.display="none";
    }
})
Returntop.addEventListener("click",function(){
    let timerId=setInterval(function(){
        let st=document.documentElement.scrollTop||document.boby.scrollTop
        console.log("当前卷动的值：",st);
        let newst=st-50;
        document.documentElement.scrollTop=newst;
        document.body.scrollTop=newst;
        if(newst<=0){
            clearInterval(timerId)
        }

    },30)
})
