$(".region_guideList li:eq(2)").click(function() {
    $(".region_3depthList").slideToggle("fast");
})

$(".region_city_box a").click(function() {
    $(".region_city_box a").removeClass("region_city_box_active");
    $(this).addClass("region_city_box_active");
})