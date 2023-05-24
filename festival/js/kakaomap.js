$(document).ready(function () {
    const receivedData = location.href.split('?')[1];
    console.log(receivedData);
    let keys = Object.keys(localStorage);
    for (let i = 0; keys.length; i++) {
        if (i == receivedData) {
            const result = JSON.parse(localStorage.getItem("data"));
            console.log(JSON.parse(result)[i]);
            x = JSON.parse(result)[i].위도;
            y = JSON.parse(result)[i].경도;


            var container = document.getElementById('festivalDetail_map');
            var options = {
                center: new kakao.maps.LatLng(x, y),
                level: 3
            };

            var map = new kakao.maps.Map(container, options);


            latlng(x, y);
        }
    }
});
