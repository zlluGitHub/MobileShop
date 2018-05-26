$(function(){

    $('.mui-btn-primary').on('tap',function(){
        /*获取数据*/
        var data = {
            username:$('[name="username"]').val(),
            password:$('[name="password"]').val()
        };
        /*校验数据*/
        if(!data.username){
            mui.toast('请输入用户名');
            return false;
        }
        if(!data.password){
            mui.toast('请输入密码');
            return false;
        }
        /*发送数据*/
        $.ajax({
            type:'post',
            url:'../php/user/login.php',
            data:data,
            datType:'json',
            success:function(data){
                if (data) {
                    mui.toast(data);
                }else{
                    location.href = '/phone/mobile/index.html';
                };

                // if(data.success){
                //     /*1.回跳*/
                //     if(location.search && location.search.indexOf('?returnUrl=') > -1){
                //         var returnUrl = location.search.replace('?returnUrl=','');
                //         location.href = returnUrl;
                //     }
                //     /*2.首页*/
                //     else{
                //         location.href = '/m/user/index.html';
                //     }
                // }else{
                //     mui.toast('登录失败！');
                // }
                // window.login = false;
            },
            error:function(){
                mui.toast('服务繁忙！');
            }
        });
    });
});