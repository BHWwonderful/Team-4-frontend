let url = "https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/ea2a787229225ad7b4cf0d71a66a53f355b3bab5/regionData.json";

let map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
    center : new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
    level : 11 // 지도의 확대 레벨 
});

// 마커 클러스터러를 생성합니다 
let clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.getJSON(url, function(data) {
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    const keys = Object.keys(data);
    let allRegion = [];
    // for (let i = 0; i < keys.length; i++) {
    //     const key = keys[i];
    //     const value = data[key];
    //     allRegion = [...allRegion, ...value];
    // }

    keys.map(val => {
        const value = data[val];
        allRegion = [...allRegion, ...value];
    });

    let markers = allRegion.map(position => {
        return new kakao.maps.Marker({
            position : new kakao.maps.LatLng(position.위도, position.경도)
        });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
});