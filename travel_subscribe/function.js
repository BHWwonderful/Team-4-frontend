$(document).on("scroll", function () {
    // let pos = $(window).scrollTop();
    // if(pos == 0){
    //     $(".travelSubscribe_floatBtn_wrap").stop().animate({right:"-138px"},"fast");
    // }else {
    //     $(".travelSubscribe_floatBtn_wrap").stop().animate({right:"0"},"fast");
    // }

    let floatBtnPos = ($(window).scrollTop() === 0)? "-138px": "0";
    $(".travelSubscribe_floatBtn_wrap").stop().animate({right: floatBtnPos},"fast");
});