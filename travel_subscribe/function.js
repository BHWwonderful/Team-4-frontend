// 스크롤 시 floating button 
$(document).on("scroll", function () {
    let floatBtnPos = ($(window).scrollTop() === 0)? "-138px": "0";
    $(".travelSubscribe_floatBtn_wrap").stop().animate({right: floatBtnPos},"fast");
});