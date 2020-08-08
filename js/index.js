const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

//Logo Image

let logo = document.getElementById("logo-img");

logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav Links

const navLinks = document.querySelectorAll("a");

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

//CTA

const ctah1 = document.querySelector("h1");
ctah1.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main Content h4 and p tags (variaables declared)

const heading4 = document.querySelectorAll("h4");

heading4[0].textContent = siteContent["main-content"]["features-h4"];
heading4[1].textContent = siteContent["main-content"]["about-h4"];

const pContent = document.querySelectorAll("p");

pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];

//Main Content Middle image

const middleImg = document.getElementById("middle-img");

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Bottom Content h4 & p tags

heading4[2].textContent = siteContent["main-content"]["services-h4"];
heading4[3].textContent = siteContent["main-content"]["product-h4"];
heading4[4].textContent = siteContent["main-content"]["vision-h4"];

pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact h4 & p tags

heading4[5].textContent = siteContent["contact"]["contact-h4"];

pContent[5].textContent = siteContent["contact"]["address"];
pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];

//Footer

pContent[8].textContent = siteContent["footer"]["copyright"];
