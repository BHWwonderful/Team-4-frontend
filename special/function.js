// go to top 기능
var topBtn = document.querySelector(".special_float_btn")
topBtn.onclick = () => {
    window.scrollTo({top:0, behavior:"smooth"});
}
