const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');
const hamburgerMenu = document.querySelector('.hamburger-menu')
const Menu = document.querySelector('.menu')

hamburgerMenu.addEventListener('click',displaymenu);
Menu.addEventListener('click',displaymenu);

function displaymenu() {
    if(Menu.classList.contains('append')){
        Menu.classList.remove('append');
        iconBars.style.display = "inline";
        iconClose.style.display = 'none';
    }
    else{
        Menu.classList.add('append')
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline'
    }
}

