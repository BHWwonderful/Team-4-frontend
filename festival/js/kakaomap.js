$(document).ready(function () {
    const receivedData = location.href.split('?')[1];
    let keys = Object.keys(localStorage);
    for (let i = 0; keys.length; i++) {
        if (i == receivedData) {
            const result = JSON.parse(localStorage.getItem("data"));
            console.log(JSON.parse(result)[i]);
            x = JSON.parse(result)[i].위도;
            y = JSON.parse(result)[i].경도;


    
            var mapContainer = document.getElementById('festivalDetail_map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
    

   
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(x, y);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);


        latlng(x, y);
    }
    }
});
