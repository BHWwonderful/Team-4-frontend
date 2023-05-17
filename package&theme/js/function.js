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
$(document).ready(() => {
    currentSlide = 1;
    sliderWidth = 1180;
    slideCount = 3;
    $(".sample_slideBtn_next").on("click", function() {
      currentSlide++;
      if (currentSlide > slideCount) {
        currentSlide = 1;
        $(".sample_slideImg_box").css("left", "0px");
      }
      $(".sample_slideImg_box").stop().animate({ left: -currentSlide * sliderWidth + "px" }, "fast");
    });
    $(".sample_slideBtn_prev").on("click", function() {
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = slideCount;
        $(".sample_slideImg_box").css("left", -currentSlide * sliderWidth + "px");
      }
      $(".sample_slideImg_box").stop().animate({ left: -currentSlide * sliderWidth + "px" }, "fast");
    })
  });

// package_travel_now 슬라이드
$(document).ready(() => {
    origin = 1770;
    currentSlide = 0;
    sliderWidth = 295;
    slideCount = 6;
    $(".package_travel_now .package_sliderBtn_next").on("click", function() {
      currentSlide++;
      if (currentSlide > slideCount) {
        currentSlide = 1;
        $(".package_travel_now .package_slider").css("right", "1770px");
    }
    $(".package_travel_now .package_slider").stop().animate({ right: origin + currentSlide * sliderWidth + "px" }, "fast");
    });
    $(".package_travel_now .package_sliderBtn_prev").on("click", function() {
      currentSlide--;
      if (currentSlide < -slideCount) {
        currentSlide = -1;
        $(".package_travel_now .package_slider").css("right", "1770px");
    }
    $(".package_travel_now .package_slider").stop().animate({ right: origin + currentSlide * sliderWidth + "px" }, "fast");
    });
    
    // package_wellness_travel슬라이드
    origin = 1770;
    let w_currentSlide = 0;
    sliderWidth = 295;
    slideCount = 6;
    $(".package_wellness_travel .package_sliderBtn_next").on("click", function() {
        w_currentSlide++;
        if (w_currentSlide > slideCount) {
            w_currentSlide = 1;
            $(".package_wellness_travel .package_slider").css("right", "1770px");
        }
        $(".package_wellness_travel .package_slider").stop().animate({ right: origin + w_currentSlide * sliderWidth + "px" }, "fast");
    });
    $(".package_wellness_travel .package_sliderBtn_prev").on("click", function() {
        w_currentSlide--;
        if (w_currentSlide < -slideCount) {
            w_currentSlide = -1;
            $(".package_wellness_travel .package_slider").css("right", "1770px");
        }
        $(".package_wellness_travel .package_slider").stop().animate({right: origin + w_currentSlide * sliderWidth + "px" }, "fast");
    });

// 좋아요 기능 숫자, 모양만
$(".package_card_likeImg").on("click", function(){
    $(this).find("img").toggleClass("liked");
    let liked = $(this).prev().text();
    liked = parseFloat(liked)
    if($(this).find("img").hasClass("liked")){
        liked ++
        $(this).prev().text(liked)
    }else{
        liked --
        $(this).prev().text(liked)
    }
})

// 배너 자동 슬라이드 기능 구현
let bannerWidth = 1180;
let index = 0;
    let autoSlide = setInterval(bnSlide, 3000);
    function bnSlide(){
        index++
        $(".package_banner_box").stop().animate({right : (index%3)*bannerWidth+"px"}, 1000)
        $(`.package_banner_index div:eq(${index%3})`).addClass("dot_active");
        $(`.package_banner_index div:eq(${index%3})`).siblings().removeClass("dot_active");
    }
    // 재생 정지 버튼
    $(".package_banner_index img").on("click", function(){
        $(".package_banner_stop").toggleClass("disabled")
        $(".package_banner_play").toggleClass("active")
        if($(".package_banner_play").hasClass("active")) {
            clearInterval(autoSlide)
        }else{
            autoSlide = setInterval(bnSlide, 3000);
        }
    })

    //잡다구리 기능
    $(".package_banner_index div").on("click", function(){
        $(this).addClass("dot_active");
        $(this).siblings().removeClass("dot_active");
        if($(".package_banner_play").hasClass("disabled")){
            clearInterval(autoSlide)
            $(".package_banner_stop").toggleClass("disabled")
            $(".package_banner_play").removeClass("disabled")
            $(".package_banner_play").toggleClass("active")
        }
    })

});