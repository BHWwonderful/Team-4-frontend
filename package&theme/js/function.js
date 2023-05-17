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

// package 슬라이드
$(document).ready(() => {
    currentSlide = 0;
    sliderWidth = 295;
    slideCount = 6;
    $(".package_sliderBtn_next").on("click", function() {
        right = $(".package_slider").css("right");
      currentSlide++;
      if (currentSlide > slideCount) {
        currentSlide = 1;
        $(".package_slider").css("right", "1770px");
        console.log(right)
        // alert("next: "+currentSlide);
    }
    $(".package_slider").stop().animate({ right: 1770 + currentSlide * sliderWidth + "px" }, "slow");
    console.log(right);
    console.log("next: "+currentSlide);
    });
    $(".package_sliderBtn_prev").on("click", function() {
    right = $(".package_slider").css("right");
      currentSlide--;
      if (currentSlide < -slideCount) {
        currentSlide = -1;
        $(".package_slider").css("right", "1770px");
        console.log(right)
        // alert("prev :"+currentSlide);
    }
    $(".package_slider").stop().animate({ right: 1770 + currentSlide * sliderWidth + "px" }, "slow");
    console.log(right)
    console.log("prev :"+currentSlide);
    });
  });
  