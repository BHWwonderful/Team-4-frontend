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
            
            $(".region_destiImg_box").eq(i).find("a").find("img").attr({"src":data.seoul[`${i}`].이미지경로});
            $(".region_destiImg_box").eq(i).find("a").find("img").attr({"alt":data.seoul[`${i}`].명칭});
            $(`.region_destinationCont_container>ul>li:nth-child(${i+1})>.region_destiAddr_box span:nth-child(1)`).text(splitarr[0]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i+1})>.region_destiAddr_box span:nth-child(2)`).text(splitarr[1]);
            $(`.region_destinationCont_container>ul>li:nth-child(${i+1})>.region_destiAddr_box span:nth-child(3)`).text(data.seoul[`${i}`].전화번호);
            
        }
    }).fail(function (jqxhr, textStatus, error) {
        // 오류 발생 시 실행되는 콜백 함수
        var err = textStatus + ", " + error;
        console.log("Failed to fetch data.json: " + err);
    });

});


