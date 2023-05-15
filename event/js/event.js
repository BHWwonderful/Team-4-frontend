$(document).ready(function(){
    // params feature
    const resultData = $.getJSON( "./data/event.json", function(data) {
        console.log(data.data)
        console.log("json 데이터 길어 " , data.data.length);
        for(let i =0; i<data.data.length; i++){
            $('.event_main_board_content_wrap')
            .append(
                `<li>
                    <div class="event_content_img">
                        <img src="images/78d1da9b-f128-4aa1-a293-e95f5b12b394.png" alt="">
                    </div>
                    <div class="event_content">
                        <p class="title"></p>
                        <p class="content"></p>
                        <div class="event_main_bottom">
                            <span class="writer">작성자</span>
                            <b class="createdBy"></b>
                            <span class="writerDate">작성일</span>
                            <span></span>
                        </div>
                    </div>
                </li>`
            )
        }
        for(let i = 0; i<data.data.length; i++){
           let test =  $('.event_main_board_content_wrap li').eq(i)
           test[0].childNodes[3].childNodes[1].innerText = data.data[i].title
           test[0].childNodes[3].childNodes[3].innerText = data.data[i].content
           test[0].childNodes[3].childNodes[5].childNodes[3].innerText = data.data[i].createdBy           
           test[0].childNodes[3].childNodes[5].childNodes[7].innerText = data.data[i].createdAt           
            console.log(test[0].childNodes[3].childNodes[5].childNodes);
        }
        // $(".title").text(data.data[0].title)
    })

    console.log(resultData)
})
