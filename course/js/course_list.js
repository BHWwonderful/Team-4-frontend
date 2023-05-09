let buttonAll = document.querySelectorAll('.test_wrap_ListItemButton');
for(let button of buttonAll){
    button.addEventListener('click', function(){
        buttonAll.forEach(element =>
            button.classList.remove('test_wrap_ListItemClick')
        )
        button.classList.add('test_wrap_ListItemClick');
    })
}


