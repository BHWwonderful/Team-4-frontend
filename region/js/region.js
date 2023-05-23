$(".region_guideList li:eq(2)").click(function () {
    $(".region_3depthList").slideToggle("fast");
})

$(".region_city_box a").click(function () {
    $(".region_city_box a").removeClass("region_city_box_active");
    $(this).addClass("region_city_box_active");
})


$(document).ready(function () {
    $.getJSON("./json/data.json", function (data) {

        for (var i = 0; i < data.seoul.length; i++) {
            $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.seoul[`${i}`].명칭);
            $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.seoul[`${i}`].개요);
            var arr = data.seoul[`${i}`].주소;
            var splitarr = arr.split(" ");

            $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.seoul[`${i}`].이미지경로 });
            $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.seoul[`${i}`].명칭 });
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.seoul[`${i}`].전화번호);

        }
        $(".seoul").click(function () {
            for (var i = 0; i < data.seoul.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.seoul[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.seoul[`${i}`].개요);
                let arr = data.seoul[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.seoul[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.seoul[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.seoul[`${i}`].전화번호);

            }
        });

        $(".busan").click(function () {
            for (var i = 0; i < data.busan.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.busan[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.busan[`${i}`].개요);
                let arr = data.busan[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.busan[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.busan[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.busan[`${i}`].전화번호);

            }
        })
        
        $(".daegu").click(function () {
            for (var i = 0; i < data.daegu.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.daegu[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.daegu[`${i}`].개요);
                let arr = data.daegu[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.daegu[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.daegu[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.daegu[`${i}`].전화번호);

            }
        })
        $(".incheon").click(function () {
            for (var i = 0; i < data.daegu.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.incheon[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.incheon[`${i}`].개요);
                let arr = data.incheon[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.incheon[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.incheon[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.incheon[`${i}`].전화번호);

            }
        })
        $(".gwangju").click(function () {
            for (var i = 0; i < data.gwangju.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.gwangju[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.gwangju[`${i}`].개요);
                let arr = data.gwangju[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.gwangju[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.gwangju[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.gwangju[`${i}`].전화번호);

            }
        })
        $(".daejeon").click(function () {
            for (var i = 0; i < data.daejeon.length; i++) {
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("h4").text(data.daejeon[`${i}`].명칭);
                $(".region_destinationCont_container>ul>li>a").eq(`${i}`).find("p").text(data.daejeon[`${i}`].개요);
                let arr = data.daejeon[`${i}`].주소;
                let splitarr = arr.split(" ");

                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "src": data.daejeon[`${i}`].이미지경로 });
                $(".region_destiImg_box").eq(i).find("a").find("img").attr({ "alt": data.daejeon[`${i}`].명칭 });
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
                $(`.region_destinationCont_container>ul>li:nth-child(${i + 1})>.region_destiAddr_box span:nth-child(3)`).text(data.daejeon[`${i}`].전화번호);

            }
        })
    }).fail(function (jqxhr, textStatus, error) {
        // 오류 발생 시 실행되는 콜백 함수
        var err = textStatus + ", " + error;
        console.log("Failed to fetch data.json: " + err);
    });

});


