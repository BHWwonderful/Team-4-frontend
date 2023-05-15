const dataSet = $(document).ready(function () {
    //실행할 내용
    $.get('https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/21029faff5a185673943099ffb1318444838c4ff/festival.json').done(function (data) {
    })
})


const displayPageNav = perPage => {
 
 let pagination =``
 const totalItems = dataSet.length
 perPage = perPage ? perPage : 1
 const pages = Math.ceil(totalItems/perPage)
 
 for(let i = 1; i <= pages; i++) {
   pagination += `<a href="#" onClick="displayItems(${i},${perPage})" >${i}</a>`
 }

 document.getElementById('pagination').innerHTML = pagination
 
}

const displayItems = ( page = 1, perPage = 2 ) => {
 
let index, offSet
 
 if(page == 1 || page <=0)  {
   index = 0
   offSet = perPage
 } else if(page > dataSet.length) {
   index = page - 1
   offSet = dataSet.length
 } else {
   index = page * perPage - perPage
   offSet = index + perPage
 }
 
 const slicedItems = dataSet.slice(index, offSet)
 
 const html = slicedItems.map(item => 
  `<tr>
     <td>${item.name}</td>
     <td>${item.gender}</td>
     <td>${item.district}</td>
   </tr>`)
 
 document.querySelector('#container tbody').innerHTML = html.join('')

}

let perPage = 5
displayPageNav(perPage)
displayItems(1, perPage)