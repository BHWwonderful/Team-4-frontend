var date = new Date();
var toYear = date.getFullYear();
var toMonth = date.getMonth();

//이달 구하기
var firstDay = new Date(toYear, toMonth, 1).getDay(); //이 달 1일 요일 구하기
var lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
var lastDay = new Date(toYear, toMonth, lastDate).getDay(); // 이 달의 마지막 요일 구하기

//해당 월
var year = toYear;
var month =/* toYear + "년" +*/(toMonth + 1) /*+ "월"*/;
var innerhtml = "";
$('.year').text(year);
$('.month').text(month);
//날짜
for (var i = 0; i <= lastDate; i++) {
  getday = new Date(toYear, toMonth, i).getDay(); // 요일을 얻어낸다. (일요일=0, 토요일=6)
  if (getday == 0) {
    innerhtml += "<tr>";
  }
  if (i == 0) {
    for (var bin = 0; bin < firstDay; bin++) {
      innerhtml += '<td><a href="#none"><span><strong></strong><em></em><span></span></span></a></td>';
      getday++;
      i++;
    }
  }
  if (getday == 0) {
    innerhtml += '<td><a href="#none"><span><strong class="holly">' + i + '</strong><em></em><span></span></span></a></td>';
  } else if (getday == 6) {
    innerhtml += '<td><a href="#none"><span><strong  class="saturday">' + i + '</strong><em></em><span></span></span></a></td>';
  } else {
    innerhtml += '<td><a href="#none"><span><strong>' + i + '</strong><em></em><span></span></span></a></td>';
  }


  if (getday == 6) {
    //arr.push("</tr>");
    innerhtml += "</tr>";

  }
}
$(".calendar_body").append(innerhtml);

(function () {
  document.querySelector(".festival_calendar tbody tr td a strong").classList.add('holly');
})





//축제 json 
$('#more').click(function () {
  $.get('https://github.com/BHWwonderful/Team-4-frontend-project/tree/master/festival/js/전국문화축제표준데이터.json').done(function (data) {
    console.log(data);

    data.forEach((a, i) => {
      var 템플릿 =
        `
                <div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${data[i].title}</h5>
                    <p>가격 : ${data[i].price}</p>

               </div>`;
      $('.row').append(템플릿)
    })
  })
})

// var xhr = new XMLHttpRequest();
// var url = 'http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api'; /*URL*/
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '서비스키'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
// queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /**/
// queryParams += '&' + encodeURIComponent('fstvlNm') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('opar') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('fstvlStartDate') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('fstvlEndDate') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('fstvlCo') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('mnnst') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('auspcInstt') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('suprtInstt') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('phoneNumber') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('homepageUrl') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('relateInfo') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('rdnmadr') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('lnmadr') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('latitude') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('longitude') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('referenceDate') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('instt_code') + '=' + encodeURIComponent(''); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4) {
//     alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
//   }
// };

// xhr.send('');