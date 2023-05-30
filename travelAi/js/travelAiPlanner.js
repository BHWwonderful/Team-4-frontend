$(".travelAiPlanner_guideList li:eq(2)").click(function() {
    $(".travelAiPlanner_3depthList").slideToggle("fast");
})

$(".travelAiPlanner_frontMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(180deg)");
})

$(".travelAiPlanner_backMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(0deg)");
})