const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// ##############  Header Section ####################

// logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// navigation

let navItemOne = document.querySelector('nav > a:nth-child(1)');
let navItemTwo = document.querySelector('nav > a:nth-child(2)');
let navItemThree = document.querySelector('nav > a:nth-child(3)');
let navItemFour = document.querySelector('nav > a:nth-child(4)');
let navItemFive = document.querySelector('nav > a:nth-child(5)');
let navItemSix = document.querySelector('nav > a:nth-child(6)');

navItemOne.textContent = siteContent['nav']['nav-item-1'];
navItemTwo.textContent = siteContent['nav']['nav-item-2'];
navItemThree.textContent = siteContent['nav']['nav-item-3'];
navItemFour.textContent = siteContent['nav']['nav-item-4'];
navItemFive.textContent = siteContent['nav']['nav-item-5'];
navItemSix.textContent = siteContent['nav']['nav-item-6'];

//################# cta section ######################
let h1 = document.querySelector('.cta-text > h1');
let ctaBtn = document.querySelector('.cta-text > button');
let ctaImg = document.querySelector('#cta-img');

h1.innerHTML = siteContent['cta']['h1'];
ctaBtn.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// ####################### Main Content section #################
// #### top content
let [featuresH4, aboutH4 ] = Array.from(document.querySelectorAll('.top-content > .text-content > h4'));
let  [featuresContent, aboutContent ] = document.querySelectorAll('.top-content > .text-content > p');
let middleImg = document.querySelector('#middle-img');

featuresH4.textContent = siteContent['main-content']['features-h4'];
aboutH4.textContent = siteContent['main-content']['about-h4'];

featuresContent.textContent = siteContent['main-content']['features-content'];
aboutContent.textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

// #### bottom content
let [servicesH4, productH4, visionH4 ] = document.querySelectorAll('.bottom-content > .text-content > h4');
let  [servicesContent, productContent, visionContent ] = document.querySelectorAll('.bottom-content > .text-content > p');

servicesH4.textContent = siteContent['main-content']['services-h4'];
productH4.textContent = siteContent['main-content']['product-h4'];
visionH4.textContent = siteContent['main-content']['vision-h4'];

servicesContent.textContent = siteContent['main-content']['services-content'];
productContent.textContent = siteContent['main-content']['product-content'];
visionContent.textContent = siteContent['main-content']['vision-content'];

// ########### Contact section ######################
//let contactH4 = document.querySelector('.contact > h4');
let [contactH4, address, phone, email] = document.querySelectorAll('.contact > * ');
contactH4.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];


// ################ Footer section #######################
let copyRight = document.querySelector('footer > p');
copyRight.textContent = siteContent['footer']['copyright'];


// Task 3
let navElems = Array.from(document.querySelectorAll('nav > a'));
navElems.forEach(elem => elem.style.color = 'green');
