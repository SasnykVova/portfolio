/*===Логіка для кнопки відкриття меню===*/ 
document.querySelector('.burger').addEventListener('click', () => {
    console.log('click')
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('open')
})
/*===Логіка для скролу на потрібний блок меню===*/  
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.mobile-menu').classList.remove('open')
        const blockId = anchor.getAttribute('href')
        // anchors.forEach(item => item.classList.remove('active-menu'));
        // anchor.classList.add('active-menu');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
/*===Логіка по відслідковуванню скрола на сторінці та добавляння класу active-menu===*/ 
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;



    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('.navbar__item').forEach((el) => {
                if(el.classList.contains('active-menu')) {
                    el.classList.remove('active-menu');
                }
            })
            document.querySelectorAll('.navbar__item')[i].classList.add('active-menu')
        }
    })
/*===Те саме тільки для мобільної версії меню===*/ 
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
            document.querySelectorAll('.mobile-menu__item').forEach((el) => {
                if(el.classList.contains('mobile-active-menu')) {
                    el.classList.remove('mobile-active-menu');
                }
            })
            document.querySelectorAll('.mobile-menu__item')[i].classList.add('mobile-active-menu')
        }
    })
})

/*Скрол після перезавантаження сторінки стає на дефолтну позицію y=0 x=0 в top сторінки*/
history.scrollRestoration = 'manual';


