const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName('sidebar')[0];
const abso = document.getElementsByClassName('abso')[0];
const navbarr = document.getElementsByClassName('navbarr')[0];
const home = document.getElementsByClassName('home')[0];

menu.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
    abso.classList.toggle('hide');
    navbarr.classList.toggle('hide');
    home.classList.toggle('hide');

})