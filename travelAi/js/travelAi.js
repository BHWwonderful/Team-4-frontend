$(".travelAi_guideList li:eq(2)").click(function () {
    $(".travelAi_3depthList").slideToggle("fast");
})

$(".travelAi_today_hover_wrap ul li").hover(
    function () {
        $(".travelAi_today_hover_wrap ul li").stop().animate({ width: "250" }, 100);
        $(this).stop().animate({ width: "370" }, 100);
        $(this).css("box-shadow", "11px 12px 29px 0px rgba(32, 54, 90, 0.27)");
    }, function () {
        $(this).stop().animate({ width: "250" }, 100);
        $(this).css("box-shadow", "");
    });

$(".travelAi_today_hover_wrap li").mouseleave(function () {
    $(".travelAi_today_hover_wrap ul li:first-child").stop().animate({ width: "370" }, 100);
    $(".travelAi_today_hover_wrap ul li:first-child").css("box-shadow", "11px 12px 29px 0px rgba(32, 54, 90, 0.27)");
})

$(document).on("click", ".travelAi_today_likeBtn[title='x']", function () {
    alert("좋아요를 저장하였습니다.");
    $(this).addClass("travelAi_today_likeBtnOn");
    $(this).attr("title", "o");
});

$(document).on("click", ".travelAi_today_likeBtn[title='o']", function () {
    alert("이미 좋아요를 한 콘텐츠입니다.");
});