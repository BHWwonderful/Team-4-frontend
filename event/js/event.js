$(document).ready( function(){
    // params feature
    $(".header").load("../header/header.html");
    var totalCount = 0;
    const resultData =  $.getJSON( "./data/event.json", function(data) {
        console.log(data.data)
        console.log("json 데이터 길이 " , data.data.length);
        totalCount = data.data.length
        $(".event_main_total_content").children('span').append(1+"/21 "+"검색결과 총 <font color='red'>"+totalCount+"</font>건이 검색 되었습니다.</span>")
         for(let i =0; i<data.data.length; i++){
            $('.event_main_board_content_wrap')
            .append(
                `<li>
                    <div class="event_content_img">
                        <img src="images/${data.data[i].img}" alt="">
                    </div>
                    <div class="event_content">
                        <p class="title">${data.data[i].title}</p>
                        <p class="content">${data.data[i].content}</p>
                        <div class="event_main_bottom">
                            <span class="writer">작성자</span>
                            <b class="createdBy">${data.data[i].createdBy}</b>
                            <span class="writerDate">작성일</span>
                            <span>${data.data[i].createdAt}</span>
                        </div>
                    </div>
                </li>
                <hr>`
            )
        }
    }) 
    $("#event_gnb_li").children('ul:eq(0)').css("display","none")
    $("#event_gnb_li").click(function () {
        $("#event_gnb_li").children('ul:eq(0)').slideToggle(500)
    })
})
