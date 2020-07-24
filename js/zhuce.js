$(document).ready(function() {
    //验证码
    $(".span3").click(function () {
        var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "0","1","2","3","4","5","6","7","8","9"];

        var index1 = Math.floor(Math.random() * arr.length);
        var index2 = Math.floor(Math.random() * arr.length);
        var index3 = Math.floor(Math.random() * arr.length);
        var index4 = Math.floor(Math.random() * arr.length);

        var text1= arr[index1];
        var text2= arr[index2];
        var text3= arr[index3];
        var text4= arr[index4];
        var text=text1+text2+text3+text4;
        // console.log(text)

        $(".bb1_1").html(text);
    })
    //手机
    var flag1=false;
    $("#mobile").focus(function () {
        $("#sjspan").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>请输入手机号");
    })
    $("#mobile").blur(function () {
        var mobile=$("#mobile").val();
        var reg1= /^1[0-9]{10}/
        if (mobile==""){
            $("#sjspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>手机号码不能为空");
            flag1=false;
            return false;
        }else if (reg1.test(mobile)==false){
            $("#sjspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入正确的手机号");
            flag1=false;
            return false;
        }else {
            $("#sjspan").html("<span class=\"glyphicon glyphicon-ok-sign\" style='color: green'></span>");
            flag1=true;
            return true;
        }
    })
    //密码
    var flag2=false;
    $("#pwd").focus(function () {
        $("#pwdspan").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>以字母开头的6-18位字符、数字和下划线");
    })
    $("#pwd").blur(function () {
        var mima=$("#pwd").val();
        var reg2=/^[a-zA-Z]\w{5,17}$/
        if (mima==""){
            $("#pwdspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>密码不能为空");
            flag2=false;
            return false;
        }else if (reg2.test(mima)==false){
            $("#pwdspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入正确的密码");
            flag2=false;
            return false;
        }else {
            $("#pwdspan").html("<span class=\"glyphicon glyphicon-ok-sign\" style='color: green'>");
            flag2=true;
            return true;
        }
    })
    //验证码
    var flag3=false;
    $("#yzm").focus(function () {
        $("#yzspan").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>请输入验证码，区分大小写");
    })
    $("#yzm").blur(function () {
        var yzm=$("#yzm").val();
        var yzm2=$(".bb1_1").html();
        // console.log(yanzhengma2)
        // 1、转换成大写：toUpperCase()
        // 2、转换成小写：toLowerCase()
        if (yzm==""){
            $("#yzspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>验证码不能为空");
            flag3=false;
            return false;
        }else if(yzm != yzm2){
            $("#yzspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>验证码不一致");
            flag3=false;
            return false;
        }else {
            $("#yzspan").html("<span class=\"glyphicon glyphicon-ok-sign\" style='color: green'>");
            flag3=true;
            return true;
        }
    })
    //激活码
    var flag4=false;
    $("#jhm").focus(function () {
        $("#jhspan").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color:#FFCA0E'>请输入激活码");
    })
    $("#jhm").blur(function () {
        var jihuoma=$("#jhm").val();
        if (jihuoma==""){
            $("#jhspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>激活码不能为空");
            flag4=false;
            return false;
        }else {
            $("#jhspan").html("<span class=\"glyphicon glyphicon-ok-sign\" style='color: green'>");
            flag4=true;
            return true;
        }
    })
    //邮箱
    var flag5=false;
    $("#email").focus(function () {
        $("#emspan").html("<span class=\"glyphicon glyphicon-exclamation-sign\" style='color: #FFCA0E'>请以***@***.com/.cn/.net格式输入邮箱");
    })
    $("#email").blur(function () {
        var email=$("#email").val();
        var reg3 = /^\w+\@[0-9a-zA-Z]+(.(com|cn|net))+$/
        if (email==""){
            $("#emspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>邮箱不能为空");
            flag5=false;
            return false;
        }else if (reg3.test(email)==false){
            $("#emspan").html("<span class=\"glyphicon glyphicon-remove-sign\" style='color: red'>请输入正确的邮箱格式");
            flag5=false;
            return false;
        }else {
            $("#emspan").html("<span class=\"glyphicon glyphicon-ok-sign\" style='color: green'>");
            flag5=true;
            return true;
        }
    })

    /*手机号或邮箱登录*/
    $("#rad2").click(function () {
        $(".bb1 p:eq(0)").css("display","none")
        $(".bb1 p:eq(6)").css("display","none")
        $(".bb1 p:eq(1)").css("display","block")
        $(".bb1 p:eq(7)").css("display","block")
    })
    $("#rad1").click(function () {
        $(".bb1 p:eq(0)").css("display","block")
        $(".bb1 p:eq(6)").css("display","block")
        $(".bb1 p:eq(1)").css("display","none")
        $(".bb1 p:eq(7)").css("display","none")
    })

    //手机注册方法
    jQuery.fun1 = function(aa){
        $("#mobile").blur();
        $("#pwd").blur();
        $("#yzm").blur();
        $("#jhm").blur();
        return flag1 && flag2 && flag3 && flag4;
    }
    //邮箱注册方法
    jQuery.fun2 = function(aa){
        $("#email").blur();
        $("#pwd").blur();
        $("#yzm").blur();
        $("#jhm").blur();
        return flag5 && flag2 && flag3 && flag4;
    }
    /*表单校验*/
    $("form").submit(function () {
        var red1 = document.getElementById("rad1");
        var red2 = document.getElementById("rad2");
        var jg1 = "";
        var jg2 = false;
        /*判断是手机注册还是邮箱注册*/
        if (red1.checked){
            var jg1 = $.fun1("aa");
        } else {
            var jg1 = $.fun2("aa");
        }
        /*用户服务协议*/
        var checkbox = document.getElementById("checkbox");
        if(checkbox.checked){
            jg2 = true;
        }else {
            alert("请勾选用户服务协议");
            jg2 = false;
        }
        return jg1 && jg2;
    })
})
