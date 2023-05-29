let url =
	"https://gist.githubusercontent.com/JaeHoon925/fda7b044cdc296532b470a88e7d8a611/raw/ea2a787229225ad7b4cf0d71a66a53f355b3bab5/regionData.json";
let mapContainer = document.getElementById("travelMap"), 
	mapOption = {
	// 지도를 표시할 div
	center: new kakao.maps.LatLng(37.4979, 127.0276), // 지도의 중심좌표
	level: 9, // 지도의 확대 레벨
};
let map = new kakao.maps.Map(mapContainer, mapOption);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

// 마커 클러스터러를 생성합니다
let clusterer = new kakao.maps.MarkerClusterer({
	map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
	averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
	minLevel: 7, // 클러스터 할 최소 지도 레벨
});

let allRegion = [];
let variable = null;
var i = null
function setCenter() {            
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
    
    // 지도 중심을 이동 시킵니다
	map.setCenter(moveLatLon);
}
// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.getJSON(url, function (data) {
	// 데이터에서 좌표 값을 가지고 마커를 표시합니다
	// 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
	const keys = Object.keys(data);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = data[key];
		allRegion = [...allRegion, ...value];
	}
	// console.log(allRegion)

	let markers = allRegion.map((position) => {
		return new kakao.maps.Marker({
			position: new kakao.maps.LatLng(position.위도, position.경도),
		});
	});
	// 클러스터러에 마커들을 추가합니다
	clusterer.addMarkers(markers);

}).then(function () {
	// 해변 필터
	const filterText_b = ["해수", "해변"];
	const beach = allRegion.filter((el) =>
		filterText_b.some((text) => el.명칭.includes(text))
	);

	// 공원 필터
	const park = allRegion.filter((el) => {
		return el.명칭.includes("공원");
	});

	// 숙박 필터
	const filterText_h = ["호텔", "리조트", "펜션"];
	const hotel = allRegion.filter((el) =>
		filterText_h.some((text) => el.명칭.includes(text))
	);

	// 체험장 필터
	const filterText_e = ["체험", "마을"];
	const experience = allRegion.filter((el) =>
		filterText_e.some((text) => el.명칭.includes(text))
	);

	// 캠핑장 필터
	const camping = allRegion.filter((el) => {
		return el.명칭.includes("캠핑");
	});

	variable = allRegion;
	let count = 6;
	let page = 2;
	let isAllLoaded = false;
	
	function loadMoreContent(index) {
		for (i = index; i < index + count; i++) {
			if(i == variable.length) {
				isAllLoaded = true;
				break;
			}
			const keys = Object.keys(variable[i]);
			const isParkable = keys.filter((v) => v.includes("주차")).length > 0;
			const isPaid = keys.filter((v) => v.includes("요금")).length > 0;
			$(".travelMap_cont").append(
				`
				<li class="travelMap_cont_card">
				<a href="javascript:void(0)"><img src="../region/${
					variable[i].이미지경로
				}" alt=""></a>
				<div class="travelMap_cont_info">
				<a href="javascript:void(0)">${variable[i].명칭}</a>
				<em>${variable[i].주소}</em>
				<span>${isParkable ? "주차가능" : "주차불가"}${
					isPaid ? " · 유료" : ""
				}</span>
				</div>
				</li>
				`
			)
		}
	};
	$(".travelMap_category_card li").on("click", function () {
		$(".travelMap_cont li").remove();
		$(this).scrollTop(0)
		isAllLoaded = true;
		let category = { beach, park, hotel, experience, camping };
		variable = category[$(this).find("img").attr("alt")];
		for (i = 0; i < variable.length; i++) {
			keys = Object.keys(variable[i]);
			isParkable = keys.filter((v) => v.includes("주차")).length > 0;
			isPaid = keys.filter((v) => v.includes("요금")).length > 0;
			$(".travelMap_cont").append(
				`
                <li class="travelMap_cont_card">
                <a href="javascript:void(0)"><img src="../region/${
					variable[i].이미지경로
				}" alt=""></a>
                <div class="travelMap_cont_info">
                <a href="javascript:void(0)">${variable[i].명칭}</a>
                <em>${variable[i].주소}</em>
                <span>${isParkable ? "주차가능" : "주차불가"}${
					isPaid ? " · 유료" : ""
				}</span>
                </div>
                </li>
                `
				)
			}
			// 이미지 클릭시 위치로 이동 ( 테마 선택시 )
			$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
				let num = $(this).parents(".travelMap_cont_card").index();
				i = num
				setCenter();
				panTo();
			})
		})

	function setCenter() {            
		// 이동할 위도 경도 위치를 생성합니다 
		var moveLatLon = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
		// 지도 중심을 이동 시킵니다
		map.setCenter(moveLatLon);
	}
	function panTo() {
		// 이동할 위도 경도 위치를 생성합니다 
		var moveLatLon = new kakao.maps.LatLng(variable[i].위도, variable[i].경도);
		// 지도 중심을 부드럽게 이동시킵니다
		// 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
		map.panTo(moveLatLon);            
	}        
	loadMoreContent(0);
	document.querySelector('.travelMap_cont_box').addEventListener('scroll', function() {
		if (this.scrollTop + this.clientHeight >= this.scrollHeight && !isAllLoaded) {
			let startIndex = (page - 1) * count;
			loadMoreContent(startIndex);
			page++;
		}
		// 이미지 클릭시 위치로 이동 ( 무한 스크롤 전 )
		$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
			let num = $(this).parents(".travelMap_cont_card").index();
			i = num
			setCenter();
			panTo();
		})
	});	
	 // 이미지 클릭시 위치로 이동 ( 무한 스크롤 후 )
	$(".travelMap_cont_card > a, .travelMap_cont_info > a").on("click", function () {
		let num = $(this).parents(".travelMap_cont_card").index();
		i = num
		setCenter();
		panTo();
	})
});

// 클러스터링이 완료됐을 때 발생한다.
kakao.maps.event.addListener(clusterer, "clustered", function (clusters) {
	for (var i = 0; i < clusters.length; i++) {
		var cluster = clusters[i];
		var overlay = cluster.getClusterMarker().getContent();
		overlay.classList.add("cluster_style");
	}
});
