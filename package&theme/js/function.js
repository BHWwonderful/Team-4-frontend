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
      $(".sample_slideImg_box").stop().animate({ left: -currentSlide * sliderWidth + "px" }, "slow");
    });
  
    $(".sample_slideBtn_prev").on("click", function() {
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = slideCount;
        $(".sample_slideImg_box").css("left", -currentSlide * sliderWidth + "px");
      }
      $(".sample_slideImg_box").stop().animate({ left: -currentSlide * sliderWidth + "px" }, "slow");
    });
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
    $(".package_travel_now .package_slider").stop().animate({ right: origin + currentSlide * sliderWidth + "px" }, "slow");
    });
    $(".package_travel_now .package_sliderBtn_prev").on("click", function() {
      currentSlide--;
      if (currentSlide < -slideCount) {
        currentSlide = -1;
        $(".package_travel_now .package_slider").css("right", "1770px");
    }
    $(".package_travel_now .package_slider").stop().animate({ right: origin + currentSlide * sliderWidth + "px" }, "slow");
   
    });
  });

// package_wellness_travel슬라이드
$(document).ready(() => {
    origin = 1770;
    w_currentSlide = 0;
    sliderWidth = 295;
    slideCount = 6;
    $(".package_wellness_travel .package_sliderBtn_next").on("click", function() {
      w_currentSlide++;
      if (w_currentSlide > slideCount) {
        w_currentSlide = 1;
        $(".package_wellness_travel .package_slider").css("right", "1770px");
    }
    $(".package_wellness_travel .package_slider").stop().animate({ right: origin + w_currentSlide * sliderWidth + "px" }, "slow");
    });
    $(".package_wellness_travel .package_sliderBtn_prev").on("click", function() {
        w_currentSlide--;
      if (w_currentSlide < -slideCount) {
        w_currentSlide = -1;
        $(".package_wellness_travel .package_slider").css("right", "1770px");
    }
    $(".package_wellness_travel .package_slider").stop().animate({ right: origin + w_currentSlide * sliderWidth + "px" }, "slow");
    });
  });
  