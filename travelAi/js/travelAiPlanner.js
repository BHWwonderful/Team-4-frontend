$(".travelAiPlanner_frontMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(180deg)");
})

$(".travelAiPlanner_backMakeMore_box>button").click(function() {
    $(".travelAiPlanner_card").css("transform", "rotateY(0deg)");
})