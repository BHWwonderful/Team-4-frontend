$(document).ready(function () {
  //실행할 내용
  $.get('https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/21029faff5a185673943099ffb1318444838c4ff/festival.json').done(function (data) {
    const dataSet = JSON.parse(data);

    const displayPageNav = perPage => {

      let pagination = ``
      const totalItems = dataSet.length
      perPage = perPage ? perPage : 1
      const pages = Math.ceil(totalItems / perPage)

      for (let i = 1; i <= pages; i++) {
        pagination += `<a href="#" onClick="displayItems(${i},${perPage})">${i}</a>`
      }

      document.getElementById('pagination').innerHTML = pagination

    }

    const displayItems = (page = 1, perPage = 2) => {

      let index, offSet

      if (page == 1 || page <= 0) {
        index = 0
        offSet = perPage
      } else if (page > dataSet.length) {
        index = page - 1
        offSet = dataSet.length
      } else {
        index = page * perPage - perPage
        offSet = index + perPage
      }

      const slicedItems = dataSet.slice(index, offSet)

      const html = slicedItems.map(item =>
        document.getElementById("festival_list_content_box").innerHTML +=
        `<ul>
                    <li>
                        <div class="festival_list_img_box">
                            <a href="#none">
                                <img src="../images/festival_img100/${item.명칭}_1_공공3유형.png" alt="">
                            </a>
                        </div>
                        <div class="festival_list_text_box">
                            <p><span>행사기간</span>${JSON.parse(data)[index].행사시작일}~${JSON.parse(data)[index].행사종료일}</p>
                            <a href="#none">
                                <h4>${JSON.parse(data)[index].명칭}</h4>
                            </a>
                            <div>
                                <p>지역 : ${JSON.parse(data)[index].관리자}</p>
                                <p>장소 : ${JSON.parse(data)[index].행사장소}</p>
                                <p>연락처 : ${JSON.parse(data)[index].주최자연락처}</p>
                            </div>
                        </div>
                    </li>
                </ul>`
                
                

      )
      

    }
    let perPage=10;
    displayPageNav(perPage);
    displayItems(1, perPage);
  })

})
