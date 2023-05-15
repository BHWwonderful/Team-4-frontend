// 경로 선택
$(".main_specialRoute_wrap h5 a").on("click", ()=>{
    $(".main_specialRoute_wrap ul").slideToggle();
})

// go to top 기능
var topBtn = document.querySelector(".special_float_btn")
topBtn.onclick = () => {
    window.scrollTo({top:0, behavior:"smooth"});
}

