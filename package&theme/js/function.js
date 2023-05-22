// 경로 선택
$(".main_themeRoute_wrap h5 a").on("click", ()=>{
    $(".main_themeRoute_wrap ul").slideToggle();
})

// go to top 기능
var topBtn = document.querySelector(".theme_float_btn")
topBtn.onclick = () => {
    window.scrollTo({top:0, behavior:"smooth"});
}

$(document).ready(() => {

    // hover 이미지 키우기
    $(".package_card_bgImg").hover(function(){
        $(this).stop().animate({"backgroundSize":"auto"}, 400)
    }, function(){
        $(this).stop().animate({"backgroundSize":"cover"}, 400)
    })

// sample 슬라이드
    s_currentSlide = 1;
    s_sliderWidth = 1180;
    s_slideCount = 3;
    $(".sample_slideBtn_next").on("click", function() {
      s_currentSlide++;
      if (s_currentSlide > s_slideCount) {
        s_currentSlide = 1;
        $(".sample_slideImg_box").css("left", "0px");
      }
      $(".sample_slideImg_box").stop().animate({ left: -s_currentSlide * s_sliderWidth + "px" }, "fast");
    });
    $(".sample_slideBtn_prev").on("click", function() {
      s_currentSlide--;
      if (s_currentSlide < 1) {
        s_currentSlide = s_slideCount;
        $(".sample_slideImg_box").css("left", -1180 -s_currentSlide * s_sliderWidth + "px");
      }
      $(".sample_slideImg_box").stop().animate({ left: -s_currentSlide * s_sliderWidth + "px" }, "fast");
    })

// package_travel_now 슬라이드
    origin = 1770;
    p_currentSlide = 0;
    sliderWidth = 295;
    slideCount = 6;
    $(".package_travel_now .package_sliderBtn_next").on("click", function() {
      p_currentSlide++;
      if (p_currentSlide > slideCount) {
        p_currentSlide = 1;
        $(".package_travel_now .package_slider").css("right", "1770px");
    }
    $(".package_travel_now .package_slider").stop().animate({ right: origin + p_currentSlide * sliderWidth + "px" }, "fast");
    });
    $(".package_travel_now .package_sliderBtn_prev").on("click", function() {
      p_currentSlide--;
      if (p_currentSlide < -slideCount) {
        p_currentSlide = -1;
        $(".package_travel_now .package_slider").css("right", "1770px");
    }
    $(".package_travel_now .package_slider").stop().animate({ right: origin + p_currentSlide * sliderWidth + "px" }, "fast");
    });

    // 드래그 이벤트 
    // $(".package_travel_now .package_slider").draggable({
    //     axis: "x"
    // });
    
    // package_wellness_travel슬라이드
    let w_currentSlide = 0;
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

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 32 },
  angle:    45,
  count:    14,
  children: {
    radius:       2.5,
    fill:         '#FD7932',
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 500, 700 ],
    easing:       'quint.out'
  }
});

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });

// 좋아요 기능 숫자, 모양만
$(".package_card_likeImg").on("click", function(e){
    e.stopPropagation()
    $(this).find("img").toggleClass("liked");
    let liked = $(this).prev().text();
    liked = parseFloat(liked)
    if($(this).find("img").hasClass("liked")){
        liked ++
        $(this).prev().text(liked)
        const coords = { x: e.pageX, y: e.pageY };
        burst
        .tune(coords)
        .replay();
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

    //banner_index 클릭시
    $(".package_banner_index div").on("click", function(){
        $(this).addClass("dot_active");
        $(this).siblings().removeClass("dot_active");
        if($(".package_banner_play").hasClass("disabled")){
            clearInterval(autoSlide)
            $(".package_banner_stop").addClass("disabled")
            $(".package_banner_play").addClass("active")
            let dot_index = $(this).index() - 2;
            $(".package_banner_box").stop().animate({right : (dot_index)*bannerWidth+"px"}, 1000)
            index = dot_index;
        }
    })
    //popup 임시
    var clone;
    $(".package_card").on("click", function popup(){
        clone = $(this).clone().appendTo($(".pop_up_cont"))
        $(".pop_up_cont").css("top", "25vh")
        clone.find(".package_card_region").css({"top":"10px","margin-left":"20px","scale":"1.5"})
        clone.find(".package_card_like").css({"margin-top":"20px","margin-right":"20px","scale":"1.5"})
        clone.find(".package_card_bgImg").css({"width":"550px","height":"550px"})
        clone.find(".package_card_text").css({"width":"550px","height":"300px","background":"#fff","margin-top":"-120px"});
        clone.find(".package_card_text span").css({"padding":"0 20px","box-sizing":"border-box","font-size":"16px","padding-top":"10px"});
        clone.find(".package_card_title").css({"font-size":"25px","padding":"20px","border-bottom":"1px solid #88888880"});
        clone.find(".package_card_content").css({"display":"flex","justify-content":"space-around","width":"540px","height":"50px","padding-top":"20px","font-size":"20px"});
        clone.find(".package_card_content em").css({"position":"relative","font-size":"20px"})
        $(".pop_up").fadeIn();
    })
    $(document).on("click",".pop_up",function(){
        $(".pop_up_cont").css("top", "20vh")
        $(".pop_up").css("display","none")
        $(".pop_up_cont").children("div").remove()
    })
});//document.ready