const navContainer = document.querySelector('.nav-container');
const navLinksContainer = document.querySelector('.nav-links-container')
const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-nav');

hamburger.addEventListener('click', ()=> {
    navContainer.style= ` display: block;`;
    const toOpenNav = ()=> {
        navLinksContainer.classList.add('open-nav');
    }
    const openNav = setTimeout(toOpenNav, 200);
});

closeNav.addEventListener('click', ()=>{
    navLinksContainer.classList.remove('open-nav');
    const toCloseNav = ()=> {
        navContainer.style.display = 'none';
    }
    const closeContainer = setTimeout(toCloseNav, 290)
});

window.onload = () => {
    document.body.classList.remove('preload');
}