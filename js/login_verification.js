function verification() {
    //用户名验证
    var username=document.forms["myform"]["username"].value;
    if (username < 'A' ||(username > 'Z' && username < 'a') || username > 'z') {
        if(username.length<3||username.length>8){
            alert("用户名长度必须在3-8之间！");
            return false;
        }
        alert("用户名必须以字母开头！");
        return false;
    }else{
        Cookies.set('username', username);
    }
    //密码
    var password=document.forms["myform"]["password"].value;
    if (password.length<6||password.length>15) {
        alert("请输入正确密码！");
        return false;
    }
}