$(document).ready(function () {

    var region = document.querySelectorAll('.festival_region_fillter_box button');
    var concept = document.querySelectorAll('.festival_concept_fillter_box button');
    for (var i = 0; i < region.length; i++) {
        region[i].addEventListener('click', function (e) {
            var region = document.querySelectorAll('.festival_region_fillter_box button');
            for (var i = 0; i < region.length; i++) {
                region[i].classList.remove("active");
            }
            e.target.classList.add("active");
            localStorage.setItem('region', JSON.stringify(e.target.value));
            setEventList()
        });
    }
    for (var i = 0; i < concept.length; i++) {
        concept[i].addEventListener('click', function (e) {
            var concept = document.querySelectorAll('.festival_concept_fillter_box button');
            for (var i = 0; i < concept.length; i++) {
                concept[i].classList.remove("active");
            }
            e.target.classList.add("active");
            localStorage.setItem('concept', JSON.stringify(e.target.value));
            setEventList()
        });
    }
    function setting() {
        var region = document.querySelectorAll('.festival_region_fillter_box button');
        var concept = document.querySelectorAll('.festival_concept_fillter_box button');
        region[0].classList.add("active");
        concept[0].classList.add("active");
        localStorage.setItem('region', JSON.stringify("전체"));
        localStorage.setItem('concept', JSON.stringify("전체"));
        setEventList()
    }
    setting();
    function setEventList() {
        region = JSON.parse(localStorage.getItem("region"));
        concept = JSON.parse(localStorage.getItem("concept"));
        $('.festival_list_content_box').children().remove()
        $.get('https://gist.githubusercontent.com/GyeungHoon/9a5e27234702a6f14c2376cae1d24e38/raw/110270a38ef29a8d42ede56fb3d585b961bfc9f4/festival.json').done(function (data) {
            localStorage.setItem('data', JSON.stringify(data));
            for (let i = 0; i < 100; i++) {
                var innerHtmltext =  `
                <ul>
                <li>
                    <div class="festival_list_img_box">
                        <a href="/festival/festivalDetail.html?${i}" >
                            <img src="../festival/images/festival_img100/${JSON.parse(data)[i].명칭}_1_공공3유형.png" alt="">
                        </a>
                    </div>
                    <div class="festival_list_text_box">
                        <p><span>행사기간</span>${JSON.parse(data)[i].행사시작일}~${JSON.parse(data)[i].행사종료일}</p>
                        <a href="/festival/festivalDetail.html?${i}">    
                            <h4>${JSON.parse(data)[i].명칭}</h4>
                        </a>
                        <div>
                            <p>지역 : ${JSON.parse(data)[i].관리자}</p>
                            <p>장소 : ${JSON.parse(data)[i].행사장소}</p>
                            <p>연락처 : ${JSON.parse(data)[i].주최자연락처}</p>
                        </div>
                    </div>
                </li>
            </ul>
            `
                if (JSON.parse(data)[i].주소.slice(0, 2) == region && JSON.parse(data)[i].여행컨셉 == concept || JSON.parse(data)[i].주소.slice(0, 4) == region && JSON.parse(data)[i].여행컨셉 == concept) {
                    document.getElementById("festival_list_content_box").innerHTML += innerHtmltext;
                } else if (JSON.parse(data)[i].주소.slice(0, 2) == region && concept == "전체" || JSON.parse(data)[i].주소.slice(0, 4) == region && concept == "전체") {
                    document.getElementById("festival_list_content_box").innerHTML += innerHtmltext;
                } else if (JSON.parse(data)[i].여행컨셉 == concept && region == "전체") {
                    document.getElementById("festival_list_content_box").innerHTML += innerHtmltext;
                } else if (region == "전체" && concept == "전체") {
                    document.getElementById("festival_list_content_box").innerHTML += innerHtmltext;
                }
            }
            var rowsPerPage = 5;
            var rows = document.querySelectorAll('#festival_list_content_box ul li');
            var rowsCount = rows.length;
            var pageCount = Math.ceil(rowsCount / rowsPerPage);
            var numbers = document.querySelector('#numbers');
            var prevPageBtn = document.querySelector('.pagination .fa-arrow-left');
            var nextPageBtn = document.querySelector('.pagination .fa-arrow-right');

            var pageActiveIdx = 0; //현재 보고 있는 페이지그룹 번호
            var currentPageNum = 1;// 현재 보고 있는 페이지네이션 번호
            var maxPageNum = 5; // 페이지그룹 최대 개수
            $('#numbers').children().remove();
            for (let i = 1; i <= pageCount; i++) {
                numbers.innerHTML += `<li><a href="#none" onclick="window.scrollTo(0,0);">${i}</a></li>`
            }
            var numberBtn = numbers.querySelectorAll('a');
            // 페이지네이션 번호 감추기
            for (nb of numberBtn) {
                nb.style.display = 'none';
            }
            numberBtn.forEach((item, idx) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    displayRow(idx);
                });
            });
            function displayRow(idx) {
                var start = idx * rowsPerPage;
                var end = start + rowsPerPage;
                var rowsArray = [...rows];
                for (ra of rowsArray) {
                    ra.style.display = 'none';
                }
                let newRows = rowsArray.slice(start, end);
                for (nr of newRows) {
                    nr.style.display = '';
                }
                for (nb of numberBtn) {
                    nb.classList.remove('active');
                }
                numberBtn[idx].classList.add("active");
            }
            //displayRow
            displayRow(0);
            //페이지네이션 그룹 표시 함수
            function displayPage(num) {
                // 페이지네이션 번호 감추기
                for (nb of numberBtn) {
                    nb.style.display = 'none';
                }
                var totalPageCount = Math.ceil(pageCount / maxPageNum);
                var pageArr = [...numberBtn];
                var start = num * maxPageNum;
                var end = start + maxPageNum;
                var pageListArr = pageArr.slice(start, end);

                for (let item of pageListArr) {
                    item.style.display = 'block';
                }
                if (pageActiveIdx == 0) {
                    prevPageBtn.style.display = 'none';
                } else {
                    prevPageBtn.style.display = 'block';
                }
                if (pageActiveIdx == totalPageCount - 1) {
                    nextPageBtn.style.display = 'none';
                } else {
                    nextPageBtn.style.display = 'block';
                };
            };
            displayPage(0);
            window.onload = function () {
                nextPageBtn.addEventListener('click', () => {
                    nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
                    displayRow(nextPageNum);
                    ++pageActiveIdx;
                    displayPage(pageActiveIdx);
                });
                prevPageBtn.addEventListener('click', () => {
                    prevPageNum = pageActiveIdx * maxPageNum - currentPageNum;
                    displayRow(prevPageNum);
                    --pageActiveIdx;
                    displayPage(pageActiveIdx);
                });
            }

        });
    };

});
