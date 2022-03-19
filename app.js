let hbg = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

// hbg.addEventListener("click", () => {
//   let appear = hbg.classList.contains("active");
//   if (!appear) {
//     hbg.classList.toggle("active");
//     navMenu.classList.toggle("active");
//   } else {
//     hbg.classList.remove("active");
//     navMenu.classList.remove("active");
//   }
// });

//OR
function bag() {
  let appear = hbg.classList.contains("active");
  if (!appear) {
    hbg.classList.toggle("active");
    navMenu.classList.toggle("active");
  } else {
    hbg.classList.remove("active");
    navMenu.classList.remove("active");
  }
}
hbg.addEventListener("click", bag);
