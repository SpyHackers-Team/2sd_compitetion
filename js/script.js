/* =================== Main Variables =================== */
let btnUp = document.querySelector('.btn_up');
let btnOpenNav = document.querySelector('.open_nav');
let btnCloseNav = document.querySelector('.close_nav');
let navMenu = document.querySelector('.nav_menu');
let navbar = document.querySelector('nav');


/* =================== Menu Show (Navbar) ================== */
btnOpenNav.addEventListener('click', function() {
    navMenu.style.right = '0';
});

/* ==================== Close Button  ======================== */
btnCloseNav.addEventListener('click', function() {
    navMenu.style.right = '-100%';
});

/* =================== Change of Navbar ==================== */
window.addEventListener('scroll', function() {
    var scrollNav = window.scrollY;
    if(scrollNav >= '100') {
        btnUp.classList.remove('hidden');
        navbar.classList.add('nav_fixed');
    }
    else {
        btnUp.classList.add('hidden');
        navbar.classList.remove('nav_fixed');
    }
});

/* ==================== Slides in Bottom  =================== */
const controls = document.querySelector('.controls');
const slides = document.querySelector('.slides');
const allItems = slides.children;
const containerWidth = slides.offsetWidth;
const margin = 80;
let items = 0; 
let totalItems = 0;
let jumpSlideWidth = 0;

responsive = [
    {breakPoint: {width:0,item:1}},
    {breakPoint: {width:600,item:2}},
    {breakPoint: {width:1000,item:3}}
]

function load(){
    for(let i=0; i<responsive.length; i++){
        if(window.innerWidth > responsive[i].breakPoint.width){
            items = responsive[i].breakPoint.item;
        }
    } 
    start();
}

function start(){
    let totalItemsWidth = 0
    for(let i=0; i< allItems.length; i++){
        allItems[i].style.width = (containerWidth/items) - margin + "px";
        allItems[i].style.margin =  (margin/2) + "px";
        totalItemsWidth += containerWidth/items;
        totalItems++;
    }
    slides.style.width= totalItemsWidth + "px";
    
    const allSlides = Math.ceil(totalItems/items);
    const ul = document.createElement("ul");
    for(let i=1; i<allSlides; i++){
        const li = document.createElement("li");
            li.id=i;
            li.innerHTML =i;
            li.setAttribute("onclick","controlSlides(this)");
            ul.appendChild(li);
            if(i==1){
                li.className = "active";
            };
    }
    controls.appendChild(ul);
}

function controlSlides(ele){
    const ul = controls.children;
    const li = ul[0].children;
    let active;
    for(let i=0;i<li.length;i++){
        if(li[i].className=="active"){
            active = i;
            li[i].className=""
        }
    }
    ele.className="active";
    const numb = (ele.id-1)-active;
    jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
    slides.style.marginLeft=-jumpSlideWidth +"px";
}
window.onload = load();