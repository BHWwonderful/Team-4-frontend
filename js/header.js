$(".gnb_1dp > li").mouseover(function () {
    $(".gnb_2dp_bg").stop().slideUp(100);
    $(this).find(".gnb_2dp_bg").stop().slideDown("fast");
})

$(".main").mouseover(function () {
    $(".gnb_2dp_bg").stop().slideUp(100);
})