const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");

burger.addEventListener("click", function () {
  menu.classList.add("menu_active");
  burger.classList.add("burger_active");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("menu_active");
  burger.classList.remove("burger_active");
});

//  percent range

const percentRange = document.querySelectorAll(".percent__range");
const percentNumber = document.querySelectorAll(".percent__number");

percentNumber.forEach((percent, index) => {
  let num = percent.textContent.slice(0, -1);
  console.log(num);
  percentRange[index].style.width = num + "%";
});
