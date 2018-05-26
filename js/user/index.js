$(function(){
    //显示用户信息*/
        getUserData(function(data){
            $('.mui-media-body').html(data+'<p class="mui-ellipsis">状态:已登录</p>');
        });
});
/*获取用户信息*/
var getUserData = function(callback){
    lt.ajaxFilter({
        type:'get',
        url:'../php/user/index.php',
        data:'',
        dataType:'text',
        success:function(data){
            callback && callback(data);
        }
    });
}