fetch("https://gist.githubusercontent.com/GyeungHoon/6b6f6a0638ebc61bc3ca9f38af9e9f99/raw/21029faff5a185673943099ffb1318444838c4ff/festival.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));

console.log(jsondata);