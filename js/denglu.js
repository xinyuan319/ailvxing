$(document).ready(function() {
    /*登录方式*/
    $("#rad2").click(function () {
        $("#btn1").show()
        $("#yzdiv").hide()
    })
    $("#rad1").click(function () {
        $("#btn1").hide()
        $("#yzdiv").show()
    })
    //手机
    var flag1=false;
    $("#zh").focus(function () {
        $("#tsk").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>请输入用户名");
    })
    $("#zh").blur(function () {
        var zh=$("#zh").val();
        var reg1= /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
        var reg2 = /^\w+\@[0-9a-zA-Z]+(.(com|cn|net))+$/
        if (zh==""){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>用户名不能为空");
            flag1=false;
            return false;
        }else if (reg1.test(zh)==false){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入有效的手机号或邮箱");
            flag1=false;
            return false;
        }else {
            $("#tsk").html("");
            flag1=true;
            return true;
        }
    })
    //密码
    var flag2=false;
    $("#mm").focus(function () {
        $("#tsk").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>以字母开头的6-18位字符、数字和下划线");
    })
    $("#mm").blur(function () {
        var mm=$("#mm").val();
        var reg2=/^[a-zA-Z]\w{5,17}$/
        if (mm==""){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>密码不能为空");
            fla2=false;
            return false;
        }else if (reg2.test(mm)==false){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入正确的密码");
            flag2=false;
            return false;
        }else {
            $("#tsk").html("");
            flag2=true;
            return true;
        }
    })
    //验证码
    var flag3=false;
    $("#yzm").focus(function () {
        $("#tsk").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>请输入验证码");
    })
    $("#yzm").blur(function () {
        var yzm=$("#yzm").val();
        var reg3="WHKM";
        if (yzm==""){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>验证码不能为空");
            flag3=false;
            return false;
        }else if (yzm != reg3){
            $("#tsk").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入正确的验证码");
            flag3=false;
            return false;
        }else {
            $("#tsk").html("");
            flag3=true;
            return true;
        }
    })
    //登录1
    jQuery.fun1 = function(aa){
        $("#sj").blur();
        $("#mm").blur();
        $("#yzm").blur();
        return flag1 && flag2 && flag3;
    }
    //登录2
    jQuery.fun2 = function(aa){
        $("#sj").blur();
        $("#mm").blur();
        return flag1 && flag2;
    }
    /*表单校验*/
    $("form").submit(function () {
        var red1 = document.getElementById("rad1");
        var red2 = document.getElementById("rad2");
        var jg1 = "";
        /*判断登录方式*/
        if (red1.checked){
            var jg1 = $.fun1("aa");
            console.log(jg1)
        } else {
            var jg1 = $.fun2("aa");
            console.log(jg1)
        }
        return jg1;
    })
    $("#btn2").click(function () {
        $("form").submit();
    })
    /*动画图片*/
    $("#img1").click(function () {
        $("form").hide();
        $("#img1").hide();
        $("#img2").show();
        $("#img3").show();
        //移动动画
        $("#img4").show().animate({
            "right":"388px"
        }, 700,function () {
            $("#img5").show().animate({
                "right":"486px"
            }, 700)
        })
    })
    $("#img2").click(function () {
        $("form").show();
        $("#img1").show();
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").css("right","198px").hide();
        $("#img5").css("right","296px").hide();
    })
})