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