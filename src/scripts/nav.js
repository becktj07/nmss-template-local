function toggleNavigation(){
    const hamburger = document.querySelector('.hamburger')
    const closeBtn = document.querySelector('.hamburger-close');
    const menu = document.querySelector('.nav')
    
    hamburger.addEventListener('click', () => {  
        menu.classList.toggle('nav-open');
    })
    closeBtn.addEventListener('click', () => {  
        menu.classList.toggle('nav-open');
    })
}

toggleNavigation();