$(document).ready(function () {
    $.get('https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/8398f334ae257c716140e55485e174e0b6a596fd/festival.json').done(function (data) {
        for (var i = 0; i < 100; i++) {
            document.getElementById("festival_list_content_box").innerHTML +=
                `<ul>
                <li>
                    <div class="festival_list_img_box">
                        <a href="/festival/festivalDetail.html">
                            <img src="../festival/images/festival_img100/${JSON.parse(data)[i].명칭}_1_공공3유형.png" alt="">
                        </a>
                    </div>
                    <div class="festival_list_text_box">
                        <p><span>행사기간</span>${JSON.parse(data)[i].행사시작일}~${JSON.parse(data)[i].행사종료일}</p>
                        <a href="/festival/festivalDetail.html">
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


const rowsPerPage = 10;
const rows = document.querySelectorAll('#festival_list_content_box ul li');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');
const prevPageBtn = document.querySelector('.pagination .fa-arrow-left');
const nextPageBtn = document.querySelector('.pagination .fa-arrow-right');

let pageActiveIdx = 0; //현재 보고 있는 페이지그룹 번호
let currentPageNum = 0;// 현재 보고 있는 페이지네이션 번호
let maxPageNum = 3; // 페이지그룹 최대 개수

for (let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="#none" onclick="window.scrollTo(0,0);">${i}</a></li>`
}

const numberBtn = numbers.querySelectorAll('a');

// 페이지네이션 번호 감추기
for (nb of numberBtn) {
    nb.style.display = 'none';
}


numberBtn.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        //테이블 출력 함수
        displayRow(idx);
    });
});
function displayRow(idx) {

    let start = idx * rowsPerPage;
    let end = start + rowsPerPage;
    let rowsArray = [...rows];

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
}//displayRow
displayRow(0);

//페이지네이션 그룹 표시 함수
function displayPage(num) {
    // 페이지네이션 번호 감추기
    for (nb of numberBtn) {
        nb.style.display = 'none';
    }
    let totalPageCount = Math.ceil(pageCount / maxPageNum);
    let pageArr = [...numberBtn];
    let start = num * maxPageNum;
    let end = start + maxPageNum;
    let pageListArr = pageArr.slice(start, end);

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
    }

}
displayPage(0);

nextPageBtn.addEventListener('click', () => {
    let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
    displayRow(nextPageNum);
    ++pageActiveIdx;
    displayPage(pageActiveIdx);
});

prevPageBtn.addEventListener('click', () => {
    let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
    displayRow(nextPageNum);
    --pageActiveIdx;
    displayPage(pageActiveIdx);
});

});
});