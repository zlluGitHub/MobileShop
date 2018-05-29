/*初始左侧滚动*/
mui('.lt_cateLeft').scroll({
    indicators: false
});
/*初始右侧滚动*/
var scrollRight = mui('.lt_cateRight').scroll({
    indicators: false
});

$(function() {
    /*页面*/

    getFirstCategoryData(function(data) {
        /*获取到了数据 data*/
        /*渲染一级分类*/
        //var data=JSON.parse(data);

        FirstCategoryDataCheng(data);
        /*默认已经显示的是第一个分类*/
        /*根据第一个分类的id去渲染二级分类*/
        getSecondCategoryData({
            id: data[0].id /*第一个一级分类的id*/
        }, function(data) {
            /*渲染二级分了*/
            SecondCategoryDataCheng(data);
        });
    });
    /*交互*/
    $('.lt_cateLeft').on('tap', 'ul li', function() {
        //当前选中后不再加载
        if ($(this).hasClass('now')) return false;
        /*改变当前样式*/
        $('.lt_cateLeft').find('li').removeClass('now');
        $(this).addClass('now');
        /*通过id去获取二级分类的数据*/
        /*获取当前分类的id*/
        var data_id = $(this).attr('data-id');
        getSecondCategoryData({
            //id:$(this).data('id')
            id: data_id
        }, function(data) {
            /*渲染二级分了*/
            if (data != null) {
                SecondCategoryDataCheng(data);
            } else {
                $('.lt_cateRight').find('ul').html("<p style='text-align:center; margin-top:18px;'>当前分类没有数据！</p>");
            };
            /*需要唯一到0的位置  顶部*/
            scrollRight.scrollTo(0, 0, 100);
        })
    });

});
/*获取一级分类数据*/
var getFirstCategoryData = function(callback) {
        $.ajax({
            type: 'post',
            url: './PHP/category.php',
            data: {},
            dataType: 'json',
            success: function(data) {
                /*做获取数据之后的事情*/
                callback && callback(data);
            }
        });
    }
    /*获取二级分类的数据*/
var getSecondCategoryData = function(params, callback) {
        $.ajax({
            type: 'post',
            url: './PHP/brand.php',
            data: params,
            dataType: 'json',
            success: function(data) {
                /*做获取数据之后的事情*/
                callback && callback(data);
            }
        });
    }
    //插入一级分类的数据
var FirstCategoryDataCheng = function(data) {
    var tagData = "";
    var now_ty = "";
    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            now_ty = "now";
        } else {
            now_ty = "";
        }
        tagData += '<li data-id="' + data[i].id + '" class="' + now_ty + '"><a href="javascript:;">' + data[i].categoryName + '</a></li>';
    };
    $('.lt_cateLeft').find('ul').html(tagData);
}

//插入二级分类的数据
var SecondCategoryDataCheng = function(data) {
    var tagData = "";
    for (var i = 0; i < data.length; i++) {
        tagData += '<li><a href="product.html"><img src="' + data[i].brandLogo + '" alt=""/><p>' + data[i].brandName + '</p></a></li>';
    };
    $('.lt_cateRight').find('ul').html(tagData);
}