const navContainer = document.querySelector('.nav-container');
const navLinksContainer = document.querySelector('.nav-links-container')
const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-nav');

hamburger.addEventListener('click', ()=> {
    navContainer.style= ` display: block;`;
    const toOpenNav = ()=> {
        navLinksContainer.style.transform = 'translateX(0%)';
    }
    const openNav = setTimeout(toOpenNav, 200);
});

closeNav.addEventListener('click', ()=>{
    navLinksContainer.style.transform = 'translateX(-100%)';
    // navContainer.style.display = 'none';
    const toCloseNav = ()=> {
        navContainer.style.display = 'none'
    }
    const closeContainer = setTimeout(toCloseNav, 290)
});