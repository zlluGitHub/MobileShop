/*初始化区域滚动组件*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

$(function(){
        var data_list = '';
        //清除loading
        $('.loading').remove();
        /*获取图片信息*/
        getProductDetailData({
            mark: "product_picture"
        },function(data){
            //插入最后一张图片
            data_list = '<div class="mui-slider-item"><a href="javascript:;"><img src="'+data[data.length-1].picAddr+'"/></a></div>';
            //插入中间的图片
            for (var i = 0; i < data.length; i++) {
                data_list+='<div class="mui-slider-item"><a href="javascript:;"><img src="'+data[i].picAddr+'"/></a></div>';
            };
            //插入第一张图片
            data_list+='<div class="mui-slider-item"><a href="javascript:;"><img src="'+data[0].picAddr+'"/></a></div>';
            //插入DOM树中
             $('#scroll-img').html(data_list);
             //插入圆点
             data_list='<div class="mui-indicator mui-active"></div>';
             for (var i = 0; i < data.length-1; i++) {
                data_list+='<div class="mui-indicator"></div>';
             };
             $('.mui-slider-indicator').html(data_list);
             /*轮播图的初始化*/
            mui('.mui-slider').slider({
                interval:1000
            });
            /*数量选择初始化*/
            mui('.mui-numbox').numbox();
        });


        /*获取商品信息*/
        getProductDetailData({
            mark: "product"
        },function(data){
            $('.mui-ellipsis-2').html(data[0].proName);
            $('.no_price').find('span').html('&yen;'+data[0].price);
            $('.old').html('&yen;'+data[0].price);
            $('.size').html(data[0].size);
            $('.num').html(' 剩余数量：'+data[0].num+' 双');
            $('#details').html('详情：'+data[0].proDesc+data[0].proName);
            //插入尺码
            data_list = '尺码：';

            var product_size = data[0].size.split('-');
            for (var i = product_size[0]; i <= product_size[1]; i++) {
                data_list += '<span class="size">'+i+'</span>';
            };
            $('#lt_size').html(data_list);
            //购买的最大数量
            $('.mui-numbox').attr('data-numbox-max',data[0].num);
        });


    /*重新加载*/
    // $('.mui-icon-reload').on('tap',function(){
    //     $('.mui-scroll').html('<div class="loading"><span class="mui-icon mui-icon-spinner"></span></div>');
    //     render();
    // });

    /*尺码选择*/
    $('.mui-scroll').on('tap','.size',function(){
        var currSize = $(this);
        $('.size').removeClass('now');
        currSize.addClass('now');
    });

    /*数量选择*/
    $('.mui-numbox').on('tap','mui-btn',function(){
        var product_num = mui(Selector).numbox().getValue();
        alert(product_num)
    });
    //获取数量值



});

/*获取商品详情信息*/
var getProductDetailData = function(params,callback){
    $.ajax({
        type:'get',
        url:'./PHP/product.php',
        data:params,
        dataType:'json',
        success:function(data){
            callback && callback(data);
        }
    });
};
