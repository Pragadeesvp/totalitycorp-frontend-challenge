
// Menu Open and close functions with backdrop effects

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active'
    document.querySelector('aside').className = 'active';
}

document.querySelector('#menuBtn').addEventListener('click' , (e)=> {
    e.preventDefault();
    openMenu();
})

document.querySelector('button.close').addEventListener('click' , (e) => {
    e.preventDefault();
    closeMenu();
})

document.querySelector('.backdrop').addEventListener('click' , (e) => {
    e.preventDefault();
    closeMenu();
})


// Scroll Effect

// document.lastScrollPosition = 0;
// let lastCentered = 0;

// document.addEventListener('scroll' , () => {
//         const direction = window.pageYOffset - document.lastScrollPosition>0 ?'down':'up';
//         const sections = [...document.querySelectorAll('section')]


//         const destIndex = direction === 'up' ? lastCentered - 1 : lastCentered +1;

//         if (destIndex >= 0 && destIndex < sections.length) {
//             window.scroll(0,sections[destIndex].offsetTop)
//         }

//         sections.forEach((section,index) => {
//             if (window.pageYOffset === section.offsetTop) {
//                 lastCentered = index;
//             }
//         })

//         document.lastScrollPosition = window.pageYOffset;
// })