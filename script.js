const swiper = new Swiper('.swiper', {
  // // Optional parameters
  // direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints:{
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,

    }
  }


  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

var burger = document.getElementById("burger");
var sideNav = document.querySelector(".side-nav");
var links = document.querySelectorAll('.link');

burger.addEventListener("click", function(){
  sideNav.classList.toggle("opacity");

  console.log(sideNav);
});
links.forEach((item, i) => {
  item.addEventListener("click", function(){
    sideNav.classList.remove("opacity");
  })
});
