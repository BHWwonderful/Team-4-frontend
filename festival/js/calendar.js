var date = new Date();
var toYear = date.getFullYear();
var toMonth = date.getMonth();
// var toMonth = 11;

//이달 구하기
var firstDay = new Date(toYear, toMonth, 1).getDay(); //이 달 1일 요일 구하기
var lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
var lastDay = new Date(toYear, toMonth, lastDate).getDay(); // 이 달의 마지막 요일 구하기

console.log("1일 요일", firstDay);
console.log("이달 마지막 날짜", lastDate);
console.log("마지막 요일", lastDay);


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
    //arr.push("<tr>");
    innerhtml += "<tr>";
    //$(".calendar_body").append("<tr>");
    console.log("1번" + getday);
  }
  if (i == 0) {
    for (var bin = 0; bin < firstDay; bin++) {

      // arr.push('<td><a href="#none"><span><strong></strong><em></em><span></span></span></a></td>');
      innerhtml += '<td><a href="#none"><span><strong></strong><em></em><span></span></span></a></td>';
      //$(".calendar_body").append('<td><a href="#none"><span><strong></strong><em></em><span></span></span></a></td>');
      getday++;
      i++;
    }
  }
  // arr.push('<td><a href="#none"><span><strong>' + i + '</strong><em></em><span></span></span></a></td>');
  innerhtml += '<td><a href="#none"><span><strong>' + i + '</strong><em></em><span></span></span></a></td>';
  //$(".calendar_body").append('<td><a href="#none"><span><strong>' + i + '</strong><em></em><span></span></span></a></td>');
  if (getday == 6) {
    //arr.push("</tr>");
    innerhtml += "</tr>";
    //$(".calendar_body").append("</tr>");
    console.log("2번" + getday);
  }
  //arr.push("</tr>");
  //innerhtml += "</tr>";
  //console.log("3번" + getday);
}
$(".calendar_body").append(innerhtml);
//$(".calendar_body").html(arr);

/*
var link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./css/festival.css";
 
document.head.appendChild(link);

$(".calendar_body").listView("refresh"); */