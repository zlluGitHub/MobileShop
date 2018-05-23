/*初始化区域滚动组件*/
// mui('.mui-scroll-wrapper').scroll({
//     indicators:false
// });
/*轮播图的初始化*/
mui('.mui-slider').slider({
    interval: 4000
});



mui.init({
    pullRefresh: {
        container: '.mui-scroll-wrapper',
        down: {
            callback: pulldownRefresh
        },
        up: {
            callback: pullupRefresh
        }
    }
});
/**
 * 下拉刷新具体业务实现
 */
    function pulldownRefresh() {
     var that=this;
    setTimeout(function() {
        that.endPulldownToRefresh();
    }, 1000);
}
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
    var that=this;
    setTimeout(function() {
        // 停止上拉
        that.endPullupToRefresh(true);
        //上拉重置
        //that.refresh(true);

    }, 1000);
}