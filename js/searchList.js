$(function(){
    /*获取地址栏关键字*/
    var key = lt.getUrlParams().key || '';
    /*显示在搜索框中*/
    $('.search_input').val(key);
    /*获得返回的数据*/
    getProductListData(key,function(data){
        var data_list = "";
        for (var i = 0; i < data.length; i++) {
            data_list += '<a class="item" href="product.html"><img src="images/banner3.png" alt=" "/><span class="mui-ellipsis-2 mui-text-left">'+data[i].proName+'</span><p><span>&yen;'+data[i].price+'</span> <span>&yen;'+data[i].oldPrice+'</span></p><button class="mui-btn-blue">立即购买</button></a>';
        };
        $(".lt_product").html(data_list);
    });

    mui.init({
        /*4.下拉刷新*/
        pullRefresh : {
            container:".mui-scroll-wrapper",
            down : {
                callback :function(){
                    /*注意：下拉操作完成之后 业务 */
                    /*模拟一次向后台发送请求 响应之后的时间消耗*/
                    var that = this;/*这个是下拉组件对象  对象当中含有终止下拉操作的方法*/
                    /*当前页码*/
                    setTimeout(function(){

                        that.endPulldownToRefresh();
                    },1000);

                }
            },
            /*5.上拉加载*/
            up : {
                callback:function(){

                    var that = this;
                    setTimeout(function(){
                        that.endPullupToRefresh(true);
                        //that.endPullupToRefresh();
                    },1000);


                }
            }
        }
    });

});

/*获取后台数据 商品列表数据*/
var getProductListData = function(prams,callback){
    $.ajax({
        type:'get',
        url:'./PHP/searchList.php',
        data:prams,
        dataType:'json',
        success:function(data){

            /*模拟一下加载时间*/
            // setTimeout(function(){
            //     if(data.data.length == 0) mui.toast('没有相关商品');
                callback && callback(data);
            // },1000);
        }
    });
}
