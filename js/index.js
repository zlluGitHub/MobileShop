/*��ʼ������������*/
// mui('.mui-scroll-wrapper').scroll({
//     indicators:false
// });
/*�ֲ�ͼ�ĳ�ʼ��*/
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
 * ����ˢ�¾���ҵ��ʵ��
 */
    function pulldownRefresh() {
     var that=this;
    setTimeout(function() {
        that.endPulldownToRefresh();
    }, 1000);
}
/**
 * �������ؾ���ҵ��ʵ��
 */
function pullupRefresh() {
    var that=this;
    setTimeout(function() {
        // ֹͣ����
        that.endPullupToRefresh(true);
        //��������
        //that.refresh(true);

    }, 1000);
}