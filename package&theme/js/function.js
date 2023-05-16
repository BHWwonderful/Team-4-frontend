// 경로 선택
$(".main_themeRoute_wrap h5 a").on("click", ()=>{
    $(".main_themeRoute_wrap ul").slideToggle();
})

// go to top 기능
var topBtn = document.querySelector(".theme_float_btn")
topBtn.onclick = () => {
    window.scrollTo({top:0, behavior:"smooth"});
}

// sample 슬라이드
left = $(".sample_slideImg_box").css("left");
currentSlide = 1;
sliderWidth = 1180
$(".sample_slideBtn_next").on("click", function(){
    currentSlide++;
    $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"});
    left = $(".sample_slideImg_box").css("left");
    console.log(left)
    if(left == -4720){
        $(".sample_slideImg_box").css("left", "-1180px");
    }
})
$(".sample_slideBtn_prev").on("click", function(){
    currentSlide--;
    $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"})
    left = $(".sample_slideImg_box").css("left");
    console.log(left)
    if(left == 0){
        $(".sample_slideImg_box").css("left", "-3540px");
    }
})


