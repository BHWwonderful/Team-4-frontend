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
$(document).ready(()=>{
    currentSlide = 1;
    sliderWidth = 1180
    $(".sample_slideBtn_next").on("click", function(){
        if( currentSlide <= 3){
            currentSlide++;
            $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"});
        }else if(currentSlide >= 4){
            // $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"});
            currentSlide = 1; 
            $(".sample_slideImg_box").css("left", "-1180px");
        }
    })
    $(".sample_slideBtn_prev").on("click", function(){
        if(currentSlide >= 1){
            currentSlide--;
            $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"});
        }else if(currentSlide <= 0){
            // $(".sample_slideImg_box").stop().animate({left: -currentSlide * sliderWidth+"px"});
            currentSlide = 3;
            $(".sample_slideImg_box").css("left", "-3540px");
        }
    })
});



