$(document).ready(function() {
    /*头部js*/
    $(".aa2_1").mouseover(function () {
        $(this).css("color","orange");
        $(".aa2_2").show()
    })
    $(".aa2_1").mouseout(function () {
        $(this).css("color","white");
        $(".aa2_2").hide()
    })
    $(".aa2_3").mouseover(function () {
        $(this).css("color","orange");
        $(".aa2_4").show()
    })
    $(".aa2_3").mouseout(function () {
        $(this).css("color","white");
        $(".aa2_4").hide()
    })
    //导航条
    $("#aa3_1>li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    //轮播图内选项卡
    $(".aa5_1>ul>li:eq(0)").click(function () {
        $(this).addClass("li1").siblings().removeClass("li1");
        $("#myTabs li:eq(0)>a").text("特卖会")
        $("#myTabs li:eq(1)>a").text("出境旅游")
        $("#myTabs li:eq(1)>a").text("国内旅游")
    })
    $(".aa5_1>ul li:eq(1)").click(function () {
        $(this).addClass("li1").siblings().removeClass("li1");
        $("#myTabs li:eq(0)>a").text("国内酒店")
        $("#myTabs li:eq(1)>a").text("海外酒店")
        $("#myTabs li:eq(2)>a").text("酒店团购")
    })
    $(".aa5_1>ul li:eq(2)").click(function () {
        $(this).addClass("li1").siblings().removeClass("li1");
        $("#myTabs li:eq(0)>a").text("国内机票")
        $("#myTabs li:eq(1)>a").text("国外机票")
        $("#myTabs li:eq(2)>a").text("发现低价")
    })
    $(".aa5_1>ul li:eq(3)").click(function () {
        $(this).addClass("li1").siblings().removeClass("li1");
        $("#myTabs li:eq(0)>a").text("国内门票")
        $("#myTabs li:eq(1)>a").text("国外门票")
        $("#myTabs li:eq(2)>a").text("特价门票")
    })
    $(".aa5_1>ul li:eq(4)").click(function () {
        $(this).addClass("li1").siblings().removeClass("li1");
        $("#myTabs li:eq(0)>a").text("热门游记")
        $("#myTabs li:eq(1)>a").text("精华游记")
        $("#myTabs li:eq(2)>a").text("行程计划")
    })
    /*主体内容js*/
    /*内容1*/
    for (var i=0; i<3; i++){
        $(".bb1_1>span:eq("+i+")").click(function () {
            $(this).addClass("span2_1").siblings().removeClass("span2_1");
        })
        $(".bb1_2>span:eq("+i+")").click(function () {
            $(this).addClass("span3_1").siblings().removeClass("span3_1");
        })
    }
    /*内容展示动画*/
    $(".bb1_3>.col-md-9>ul>li").css("cursor","pointer").hover(function () {
        $(this).children(".bb1_4").animate({
            "margin-top": "125px",
        }, 1000)
    },(function () {
        $(this).children(".bb1_4").animate({
            "margin-top": "234px",
        }, 1000)
    }))
    /*内容2*/
    for (var i=0; i<4; i++){
        $(".bb2_1>span:eq("+i+")").click(function () {
            $(this).addClass("span2_1").siblings().removeClass("span2_1");
        })
        $(".bb2_2>span:eq("+i+")").click(function () {
            $(this).addClass("span3_1").siblings().removeClass("span3_1");
        })
    }
    /*内容展示动画*/
    $(".bb2_3>.col-md-9>ul>li").css("cursor","pointer").hover(function () {
        $(this).animate({
            "top":"-5px",
        }, 300)
    },(function () {
        $(this).animate({
            "top":"0px",
        }, 300)
    }))
    /*内容3*/
    for (var i=0; i<3; i++){
        $(".bb3_1>span:eq("+i+")").click(function () {
            $(this).addClass("span2_1").siblings().removeClass("span2_1");
        })
        $(".bb3_2>span:eq("+i+")").click(function () {
            $(this).addClass("span3_1").siblings().removeClass("span3_1");
        })
    }
    /*内容4*/
    for (var i=0; i<4; i++){
        $(".bb4_1>span:eq("+i+")").click(function () {
            $(this).addClass("span2_1").siblings().removeClass("span2_1");
        })
    }
    /*内容展示动画*/
    $(".bb4_3>.col-md-9>ul>li").css("cursor","pointer").hover(function () {
        $(this).animate({
            "top":"-5px",
        }, 300)
    },(function () {
        $(this).animate({
            "top":"0px",
        }, 300)
    }))
    /*主体底部广告滚动*/
    $(function(){
    //每隔 秒进行一次滚动
        var timing =setInterval("$.info()",0);
        $(".bb5>.col-md-12>ul").hover(
            function(){clearInterval(timing);},
            function(){timing = setInterval("$.info()",0);}
        )
    })
    jQuery.info = function(){
    //复制第一个li
        var li =$(".bb5>.col-md-12>ul>li:eq(0)").clone();
    //使用animate对li的外边距进行调整从而达到向上滚动的效果
        $(".bb5>.col-md-12>ul>li:eq(0)").animate({marginTop:"-76px"},2000,function(){
    //对已经消失的li进行删除
            $(".bb5>.col-md-12>ul>li:eq(0)").remove();
    //把复制后的li插入到最后
            $(".bb5>.col-md-12>ul").append(li);
        })
    }
    /*底部*/
    $(".cc2_2>ul>li").addClass("a_color1");
})
