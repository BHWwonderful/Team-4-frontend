$(document).ready(function () {
    //실행할 내용
    $.get('https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/21029faff5a185673943099ffb1318444838c4ff/festival.json').done(function (data) {
        for (var i = 0; i < 10; i++) {
            document.getElementById("festival_list_content_box").innerHTML +=
                `<ul>
                    <li>
                        <div class="festival_list_img_box">
                            <a href="#none">
                                <img src="../images/festival_img100/${JSON.parse(data)[i].명칭}_1_공공3유형.png" alt="">
                            </a>
                        </div>
                        <div class="festival_list_text_box">
                            <p><span>행사기간</span>${JSON.parse(data)[i].행사시작일}~${JSON.parse(data)[i].행사종료일}</p>
                            <a href="#none">
                                <h4>${JSON.parse(data)[i].명칭}</h4>
                            </a>
                            <div>
                                <p>지역 : ${JSON.parse(data)[i].관리자}</p>
                                <p>장소 : ${JSON.parse(data)[i].행사장소}</p>
                                <p>연락처 : ${JSON.parse(data)[i].주최자연락처}</p>
                            </div>
                        </div>
                    </li>
                </ul>`
                
            
        }
    })
})