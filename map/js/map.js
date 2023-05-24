// 지역 여행지 슬라이드
var slideX = 0;

// 이전 버튼 투명화
$(".regionMap_slide_prevBtn").css("background-position", "0 -36px");

$(".regionMap_slide_prevBtn").click(function () {
    // 슬라읻드 통제
    if (slideX <= 0) {
        return false;
    }
    slideX -= 610;
    $(".regionMap_slide_box").animate({ right: slideX }, 300);
    // 슬라이드 처음으로 왔을 때 이전 버튼 투명화 / 처음이 아닐 때 다음 버튼 원상태
    if (slideX == 0) {
        $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
    } else {
        $(".regionMap_slide_nextBtn").css("background-position", "0 0px");
    }
})

$(".regionMap_slide_nextBtn").click(function () {
    // 이전 버튼 원상태
    $(".regionMap_slide_prevBtn").css("background-position", "0 0px");
    if (slideX >= 1770) {
        return false;
    }
    slideX += 610;
    $(".regionMap_slide_box").animate({ right: slideX }, 300);
    console.log(slideX);
    // 마지막 슬라이드일 때 다음 버튼 투명화
    if (slideX >= 1770) {
        $(".regionMap_slide_nextBtn").css("background-position", "0 -36px");
    }
})





// 지도
$(document).on("click", ".regionMap_map_box a", function () {
    // 클래스명 변수에 담기
    var classNames = $(this).attr("class");
    // 클래스명에 _on이 없을 때
    if (!classNames.includes("_on")) {
        // 클래스명에 _on 추가
        classNames += "_on";
        // _on 추가된 클래스 추가
        $(this).addClass(classNames);
    } else {
        // 클래스명 _on 공백으로 변경
        classNames = classNames.replace("_on", "");
    }

    // 다른 지역 _on 클래스 지우기
    $(this).siblings().each(function () {
        // 클래스명 가져오기
        var otherclassNames = $(this).attr("class");
        // 공백 기준 스플릿
        var spclass = otherclassNames.split(" ");
        // _on 들어간 클래스 지우기
        $(this).removeClass(spclass[1]);
    });
});





// 지역 json 이용
$(document).ready(function () {
    $.getJSON("https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/ea2a787229225ad7b4cf0d71a66a53f355b3bab5/regionData.json", function (data) {

        for (var i = 0; i < data.seoul.length; i++) {
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.seoul[`${i}`].명칭);
            // 주소 가공
            var arr = data.seoul[`${i}`].주소;
            var splitarr = arr.split(" ");
            let twoarr = "";
            twoarr += splitarr[0];
            twoarr += " " + splitarr[1];
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

            $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.seoul[`${i}`].이미지경로 });
            $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.seoul[`${i}`].명칭 });
            $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.seoul[`${i}`].전화번호);
        }
        // 서울
        $(".seoul").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.seoul.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.seoul[`${i}`].명칭);
                // 주소 가공
                var arr = data.seoul[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.seoul[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.seoul[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.seoul[`${i}`].전화번호);
            }
        });
        // 인천
        $(".incheon").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.incheon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.incheon[`${i}`].명칭);
                // 주소 가공
                var arr = data.incheon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.incheon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.incheon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.incheon[`${i}`].전화번호);
            }
        });
        // 경기
        $(".gyeonggi").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.gyeonggi.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeonggi[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeonggi[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeonggi[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeonggi[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeonggi[`${i}`].전화번호);
            }
        });
        // 강원
        $(".gangwondo").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.gangwon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gangwon[`${i}`].명칭);
                // 주소 가공
                var arr = data.gangwon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gangwon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gangwon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gangwon[`${i}`].전화번호);
            }
        });
        // 충남
        $(".chungnam").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.chungnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.chungnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.chungnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.chungnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.chungnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.chungnam[`${i}`].전화번호);
            }
        });
        // 세종
        $(".sejong").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.sejong.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.sejong[`${i}`].명칭);
                // 주소 가공
                var arr = data.sejong[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.sejong[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.sejong[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.sejong[`${i}`].전화번호);
            }
        });
        // 대전
        $(".daejeon").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.daejeon.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.daejeon[`${i}`].명칭);
                // 주소 가공
                var arr = data.daejeon[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.daejeon[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.daejeon[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.daejeon[`${i}`].전화번호);
            }
        });
        // 전북
        $(".jeonbuk").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.jeonbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeonbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeonbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeonbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeonbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeonbuk[`${i}`].전화번호);
            }
        });
        // 광주
        $(".gwangju").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.gwangju.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gwangju[`${i}`].명칭);
                // 주소 가공
                var arr = data.gwangju[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gwangju[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gwangju[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gwangju[`${i}`].전화번호);
            }
        });
        // 전남
        $(".jeonnam").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.jeonnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeonnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeonnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeonnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeonnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeonnam[`${i}`].전화번호);
            }
        });
        // 충북
        $(".chungbuk").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.chungbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.chungbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.chungbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.chungbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.chungbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.chungbuk[`${i}`].전화번호);
            }
        });
        // 경북
        $(".gyeongbuk").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.gyeongbuk.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeongbuk[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeongbuk[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeongbuk[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeongbuk[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeongbuk[`${i}`].전화번호);
            }
        });
        // 대구
        $(".daegu").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.daegu.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.daegu[`${i}`].명칭);
                // 주소 가공
                var arr = data.daegu[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.daegu[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.daegu[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.daegu[`${i}`].전화번호);
            }
        });
        // 울산
        $(".ulsan").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.ulsan.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.ulsan[`${i}`].명칭);
                // 주소 가공
                var arr = data.ulsan[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.ulsan[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.ulsan[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.ulsan[`${i}`].전화번호);
            }
        });
        // 부산
        $(".busan").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.busan.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.busan[`${i}`].명칭);
                // 주소 가공
                var arr = data.busan[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.busan[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.busan[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.busan[`${i}`].전화번호);
            }
        });
        // 경남
        $(".gyeongnam").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.gyeongnam.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.gyeongnam[`${i}`].명칭);
                // 주소 가공
                var arr = data.gyeongnam[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.gyeongnam[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.gyeongnam[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.gyeongnam[`${i}`].전화번호);
            }
        });
        $(".jeju").click(function () {
            slideX = 0
            $(".regionMap_slide_box").animate({ right: slideX }, 500);
            $(".regionMap_slide_prevBtn").css("background-position", "0 -36px");
            $(".regionMap_slide_nextBtn").css("background-position", "0 0")
            for (var i = 0; i < data.jeju.length; i++) {
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("strong").text(data.jeju[`${i}`].명칭);
                // 주소 가공
                var arr = data.jeju[`${i}`].주소;
                var splitarr = arr.split(" ");
                let twoarr = "";
                twoarr += splitarr[0];
                twoarr += " " + splitarr[1];
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(0).text(twoarr);

                $(".regionMap_slideImg_box img").eq(i).attr({ "src": data.jeju[`${i}`].이미지경로 });
                $(".regionMap_slideImg_box img").eq(i).attr({ "alt": data.jeju[`${i}`].명칭 });
                $(".regionMap_slide_wrap>.regionMap_slide_box li").eq(`${i}`).find("span").eq(1).text(data.jeju[`${i}`].전화번호);
            }
        });
    }).fail(function (jqxhr, textStatus, error) {
        // 오류 발생 시 실행되는 콜백 함수
        var err = textStatus + ", " + error;
        console.log("Failed to fetch data.json: " + err);
    });
})