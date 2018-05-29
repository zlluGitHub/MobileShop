$(function() {
    // 提示框
    $('.mui-btn-blue').on('tap', function() {
        var btnArray = ['确定', '取消'];
        var datas = '<div class="It_box"><div class="lt_item Style"><strong>尺码：</strong><span class="size">1</span><span class="size">12</span><span class="size">545</span><span class="size">45</span></div><div class="lt_item"><strong>数量：</strong><div class="mui-numbox" data-numbox-min="1" data-numbox-max="50"><button class="mui-btn mui-btn-numbox-minus" type="button">-</button><input class="mui-input-numbox" type="number" value="1"><button class="mui-btn mui-btn-numbox-plus" type="button">+</button></div><span class="num"></span></div></div>';
        mui.confirm(datas, '商品编辑', btnArray, function(e) {
            if (e.index == 0) {

                var number = $('.mui-input-numbox').val();
                $('.num').html(number+'双');
                AllPrice();


            } else {

            }
        });
        //改变样式
        $('.Style').on('tap','.size', function() {
            var currSize = $(this);
            $('.size').removeClass('now');
            currSize.addClass('now');
        });
        //改变商品数量
        var number = $('.mui-input-numbox').val();
        ChangeNumber(number);
    });
    //商品订单总额
    AllPrice();

    //商品尺寸数据渲染
    var data_list = '';
    getProductListData({
        mark: "product"
    }, function(data) {
        data_list = '<strong>尺码：</strong>';
        var product_size = data[0].size.split('-');
        for (var i = product_size[0]; i <= product_size[1]; i++) {
            data_list += '<span class="">' + i + '</span>';
        };
        $('.cart_size').append(data_list);
    });
});
//商品订单总额
function AllPrice(){
    var Price = $('.price').text().replace(/[^0-9]/ig,"");
    var Num = $('.num').text().replace(/[^0-9]/ig,"");
    $('.lt_cart').find('span').text(Price*Num);
}
/*获取后台数据 商品列表数据*/
var getProductListData = function(prams, callback) {
    $.ajax({
        type: 'get',
        url: '../PHP/product.php',
        data: prams,
        dataType: 'json',
        success: function(data) {
            callback && callback(data);
        }
    });
};

//改变数量个数
function ChangeNumber(number){
    var num = 1;
    $('.mui-btn-numbox-minus').on('tap',function(){
        if(num>number){
            num--;
        }
        $('.mui-input-numbox').val(num);
    });
    $('.mui-btn-numbox-plus').on('tap',function(){
        num++;
        $('.mui-input-numbox').val(num);
    });
};

//             document.getElementById("promptBtn").addEventListener('tap', function(e) {
//                 e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
//                 var btnArray = ['确定', '取消'];
//                 mui.prompt('请输入你对MUI的评语：', '性能好', 'Hello MUI', btnArray, function(e) {
//                     if (e.index == 0) {
//                         info.innerText = '谢谢你的评语：' + e.value;
//                     } else {
//                         info.innerText = '你点了取消按钮';
//                     }
//                 })
//             });
//             document.getElementById("toastBtn").addEventListener('tap', function() {
//                 mui.toast('欢迎体验Hello MUI');
//             });