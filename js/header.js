$(".gnb_1dp > li").hover(
    function () {
        $(this).find(".gnb_2dp_bg").show();
    }, function () {
        $(this).find(".gnb_2dp_bg").hide();
    })