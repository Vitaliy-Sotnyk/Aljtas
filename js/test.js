/*----------Change symbol----------*/
let arrowLanguage=document.getElementById('language_checkbox');
let drop_arrow=document.getElementById('drop_arrow');

function arrowChange(){
    if(arrowLanguage.checked === true){
        drop_arrow.innerHTML='▲';
    }
    else{
        drop_arrow.innerHTML='▼';
    }
}
/*----------Change symbol----------*/
/*----------Change language----------*/
let en = document.getElementById('en');
let ua = document.getElementById('ua');
let ru = document.getElementById('ru');


let sSooLw = document.getElementById('s_s_o_o_l_w');

function changeLanguage(){
    let en_language = document.getElementById('en_language');
    let ua_language = document.getElementById('ua_language');
    let ru_language = document.getElementById('ru_language');
    let actual = document.getElementById('language_actual');

    let titleTitle = document.getElementById('title_title');

    if (ua.checked === true){
        actual.innerHTML=ua_language.innerHTML;
        ua.checked = false;
        language(ukrainianText);
        titleTitle.style.maxWidth = '400px';
        sSooLw.style.maxWidth = '450px';
    } else if (ru.checked === true){
        actual.innerHTML=ru_language.innerHTML;
        ru.checked = false;
        language(russianText);
        titleTitle.style.maxWidth = '400px';
        sSooLw.style.maxWidth = '450px';

    } else if (en.checked === true){
        actual.innerHTML=en_language.innerHTML;
        en.checked = false;
        language(englishText);
        titleTitle.style.maxWidth = '500px';
        sSooLw.style.maxWidth = '450px';
    }
}
let englishText =['Aljtas\' 3D Graphic Works.', 
'Think about this website as my pet-project. I created it to show my skills. All graphic works which were shown here, were created by me.',
'More About us', 'Get in Touch.', 
'See some of our Last work.', 'See More of These.', 
'Your email', 'Message subject', 'Your message here...', 'Send Message',
'Home.', 'About us.', 'Portfolio.', 'Contact us.', 
'© 2021 - Aljtas, All Right Reserved'];
let ukrainianText =['3D роботи від Aljtas.',
'Думайте про цей веб-сайт як про мій pet-проект. Я створив його, щоб показати свої навички. А усі графічні роботи, які були тут показані, створені мною.', 
'Більше Про нас', 'Зв\'язатись.', 
'Подивіться наші Останні роботи.', 'Переглянути більше.', 
'Ваш e-mail', 'Тема повідомлення', 'Ваше повідомлення...', 'Надіслати повідомлення',
'Головна.', 'Про нас.', 'Портфоліо.', 'Зв\'язок з нами.',
 '© 2021 - Aljtas, Всі Права Захищені'];
let russianText =['3D работы от Aljtas.',
'Думайте об этом веб-сайте как о моем pet-проекте. Я создал его, чтобы показать свои навыки. А все графические работы, которые здесь показаны, созданы мной.', 
'Больше О нас', 'Связаться.', 
'Посмотрите наши последние работы.', 'Узнать больше.', 
'Ваш e-mail', 'Тема сообщения', 'Ваше сообщение...', 'Отправить сообщение',
'Главная.', 'О нас.', 'Портфолио.', 'Обратная связь.', 
'© 2021 - Aljtas, Все Права Защищены'];

function language(array){
    let a3GW = document.getElementById('a3gw'), 
    aboutSite = document.getElementById('about_site'),
    bB = document.getElementById('button_button'),
    touch = document.getElementById('touch');

    a3GW.innerHTML = array[0];
    aboutSite.innerHTML = array[1];
    bB.innerHTML = array[2];
    touch.innerHTML = array[3];


    let moreOfThere = document.getElementById('more_of_there');
    
    sSooLw.innerHTML = array[4];
    moreOfThere.innerHTML = array[5];


    let contactContactUs = document.getElementById('contact_contact_us'),
    contactTouch = document.getElementById('contact_touch'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    bBC = document.getElementById('button_button_contact');

    email.placeholder = array[6];
    subject.placeholder = array[7];
    message.innerHTML = array[8];
    bBC.innerHTML = array[9];

    let allR =document.getElementById('all_r');
    allR.innerHTML = array[14];


    let home = document.getElementById('header_home'),
    aboutUs = document.getElementById('header_about_us'),
    portfolio = document.getElementById('header_portfolio'),
    contactUs = document.getElementById('header_contact_us');
    let footerHome = document.getElementById('footer_home'),
    footerAboutUs = document.getElementById('footer_about_us'),
    footerPortfolio = document.getElementById('footer_portfolio'),
    footerContactUs = document.getElementById('footer_contact_us');

    let contactUsButton = document.getElementById('contact_us_button');

    home.innerHTML = array[10];
    footerHome.innerHTML = home.innerHTML;
    aboutUs.innerHTML = array[11];
    footerAboutUs.innerHTML =  aboutUs.innerHTML;
    portfolio.innerHTML = array[12];
    footerPortfolio.innerHTML = portfolio.innerHTML;
    contactUs.innerHTML = array[13];
    footerContactUs.innerHTML = contactUs.innerHTML;

    contactUsButton.innerHTML = contactUs.innerHTML;
    contactContactUs.innerHTML = contactUs.innerHTML;
    contactTouch.innerHTML = array[3];
}

/*----------Change language----------*/



/*----------Slider----------*/
let slides = document.getElementsByClassName('item');
let dots = document.getElementsByClassName('slider-dots_item');
let slideIndex=1;
let iterration = true;
let pause = false;
let bool;
let animation = setInterval(function(){
    if(pause==false){
        if(slideIndex === 2){
            slideIndex--;
            iterration===true
        }
        if(iterration===true){
            slides[slideIndex - 1].style.display = 'none';
            dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(' '+'active', '');
            slides[slideIndex].style.display = 'flex';
            dots[slideIndex].className += ' '+'active';
        } else if(iterration===false){
            slides[slideIndex - 1].style.display = 'flex';
            dots[slideIndex - 1].className += ' '+'active';
            slides[slideIndex].style.display = 'none';
            dots[slideIndex].className = dots[slideIndex].className.replace(' '+'active', '');
        } 
    }
    iterration = !iterration;
}, 6000);

showSlides(slideIndex);

function currentSlide(n) {
    pause = true;
    setTimeout(function(){
        pause = false;
    }, 14000)
    showSlides(slideIndex = n);
    setTimeout(function(){
        dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(' '+'active', '');
        dots[slideIndex].className = dots[slideIndex].className.replace(' '+'active', '');
    }, 20000)
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' '+'active', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex-1].className += ' '+'active';
}
/*----------Slider----------*/

/*----------Image size----------*/
let image = document.getElementsByClassName('portfolio_image');
let imgClose = document.createElement('img');
let imageIndex = 1;

function imageSize(n){
    if (document.documentElement.clientWidth > 768) {
        if( image[imageIndex-1].style.position !== 'absolute'){
            showImage(imageIndex = n); 
            imgClose.onclick = function(){
                image[imageIndex-1].style.zIndex = '1';
                image[imageIndex-1].style.position = 'relative';
                imgClose.remove();
            }
        }
    }
}

function showImage(n){
    image[imageIndex-1].style.position = 'absolute';
    image[imageIndex-1].style.zIndex = '2';

    image[imageIndex-1].appendChild(imgClose);
    imgClose.classList.add('imgClose');
    imgClose.src = './img/cancel.png'
    imgClose.style.zIndex = '3';
    imgClose.style.height ='40px';
    imgClose.style.width ='40px';
    imgClose.style.position = 'absolute';
    imgClose.style.right = '10px';
    imgClose.style.top ='10px';
    imgClose.style.opacity = '0.5';


}
/*----------Image size----------*/