// "use strict";
// aos;
// AOS.init({
//   offset: 200,
//   delay: 100,
//   duration: 400,
//   easing: "ease",
//   once: true,
//   mirror: false,
//   anchorPlacement: "top-bottom",
// });
// Mobile Nav
const navBar = document.querySelector(".nav");
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");
mobileNav.addEventListener("click", () => {
  navBar.classList.toggle("hide-nav-bar");
  openNav.classList.toggle("hide-nav");
  closeNav.classList.toggle("hide-nav");
});
// const $items = Array.from(document.querySelectorAll(".item"));
// console.log($items);

// let bounds;

// $items.map((item) => {
//   const $item = item;

//   function rotateToMouse(e) {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     const leftX = mouseX - bounds.x;
//     const topY = mouseY - bounds.y;
//     const center = {
//       x: leftX - bounds.width / 2,
//       y: topY - bounds.height / 2,
//     };
//     const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

//     $item.style.transform = `
//         scale3d(1.07, 1.07, 1.07)
//         rotate3d(
//           ${center.y / 100},
//           ${-center.x / 100},
//           0,
//           ${Math.log(distance) * 2}deg
//         )
//       `;

//     $item.querySelector(".glow").style.backgroundImage = `
//         radial-gradient(
//           circle at
//           ${center.x * 2 + bounds.width / 2}px
//           ${center.y * 2 + bounds.height / 2}px,
//           #ffffff55,
//           #0000000f
//         )
//       `;
//   }

//   $item.addEventListener("mouseenter", () => {
//     bounds = $item.getBoundingClientRect();
//     document.addEventListener("mousemove", rotateToMouse);
//   });

//   $item.addEventListener("mouseleave", () => {
//     document.removeEventListener("mousemove", rotateToMouse);
//     $item.style.transform = "";
//     $item.style.background = "";
//   });
// });

// var cursor = $(".cursor"),
//   follower = $(".cursor-follower");
// var posX = 0,
//   posY = 0;
// var mouseX = 0,
//   mouseY = 0;

// TweenMax.to({}, 0.016, {
//   repeat: -1,
//   onRepeat: function () {
//     posX += (mouseX - posX) / 9;
//     posY += (mouseY - posY) / 9;

//     TweenMax.set(follower, {
//       css: {
//         left: posX - 12,
//         top: posY - 12,
//       },
//     });
//     TweenMax.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//   },
// });

// $(document).on("mousemove", function (e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
// });

// $(".link").on("mouseenter", function () {
//   cursor.addClass("active");
//   follower.addClass("active");
// });

// $(".link").on("mouseleave", function () {
//   cursor.removeClass("active");
//   follower.removeClass("active");
// });

// const btnNav = document.querySelector();


// const scrollElements = document.querySelectorAll(".js-scroll");
// scrollElements.forEach((el) => {
//   el.style.opacity = 0;
// });





// const scrollOffset = 100;
// const scrollElement = document.querySelector(".js-scroll");
// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().Top;
//   return (
//     elementTop <=
//     ((window.innerHeight || document.documentElement.clientHeight) - offset)
//   );
// };
// const displayScrollElement = () => {
//   scrollElement.classList.add("scrolled");
// };
// const hideScrollElement = () => {
//   scrollElement.classList.remove("scrolled");
// };
// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement, scrollOffset)) {
//     displayScrollElement();
//   } else {
//     hideScrollElement();
//   }
// };
// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

const header = document.querySelector(".header");
const nav = document.querySelector(".header-container");
const navHeight= nav.getBoundingClientRect().height;
console.log(navHeight)


// const sticky =function(entries){
//   const [entry] = entries
//   console.log(entry) 
// }
// Reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
 const [entry] = entries;
 console.log(entry);
 
 if(!entry.isIntersecting) return; 
 entry.target.classList.remove('section-hidden');
 observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});
allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
})
// lazy loading images
const imgTargets = document.querySelectorAll(".lazyLoading");
console.log(imgTargets);
const loading = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  console.log(entry)

  // entry.target.classList.remove('lazy-img');
  entry.target.addEventListener("load", function() {
    console.log("Load event fired.");
    entry.target.classList.remove("lazy_img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loading, {
 root:null,
 threshold: 0,
 rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));



// document.addEventListener("DOMContentLoaded", function () {
// sole.log('HTML parsed and DOM tree built!', e)
// })