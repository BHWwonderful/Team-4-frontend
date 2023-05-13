$(document).ready(function(){
    let now = $(".sample_slide_img").css("left");
    now = 0
    let move = 1180;
    $(".sample_slideBtn_next").click(function(){
        $(".sample_slide_img").animate({left: `${now-=move}`})
        console.log(now);
    })
    $(".sample_slideBtn_prev").click(function(){
        $(".sample_slide_img").animate({left: `${now+=move}`})
        console.log(now);
    })
})

