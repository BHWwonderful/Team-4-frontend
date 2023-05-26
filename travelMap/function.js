
// cont_wrap 숨기기
$(".travelMap_btn_wrap img").on("click", function(){
    $(".travelMap_cont_wrap").toggleClass("animated")
    $(this).toggleClass("btn_change")
    $(this).parent().toggleClass("btn_move")
})
