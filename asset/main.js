// "use strict";
// aos
// AOS.init({
//   offset: 200,
//   delay: 100,
//   duration: 400,
//   easing: "ease",
//   once: true,
//   mirror: false,
//   anchorPlacement: "top-bottom",
// });
const $items = Array.from(document.querySelectorAll(".item"));
console.log($items);

let bounds;

$items.map((item) => {
  const $item = item;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    $item.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

    $item.querySelector(".glow").style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
  }

  $item.addEventListener("mouseenter", () => {
    bounds = $item.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  });

  $item.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", rotateToMouse);
    $item.style.transform = "";
    $item.style.background = "";
  });
});

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
