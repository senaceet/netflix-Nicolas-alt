//Menú ul-Container
const liItem = document.getElementById('liItemContainer');
const UlMenu = document.getElementById('ulSubMenu');
liItem.addEventListener('click', function(){
    UlMenu.classList.toggle('ul--SubMenu--block');
});