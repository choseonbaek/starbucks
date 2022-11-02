const searchEl = document.querySelector(".search");
const searchInputE1 = document.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputE1.focus();
});

searchInputE1.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputE1.setAttribute("placeholder", "통합검색");
});

// 배지
const badgeE1 = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //   badgeE1.style.display = "none";
      gsap.to(badgeE1, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeE1, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 순차적 애니메이션
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, {
    delay: (index + 1) * 0.4,
    opacity: 1,
  });
});

// swipterjs를 이용한 슬라이더 구현
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },

  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
});

// 스타벅스 프로모션 토글
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
promotionToggleBtn.addEventListener("click", function () {
  promotionEl.classList.toggle("hide");
});

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const spyEls = document.querySelectorAll(".scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.innerHTML = new Date().getFullYear();
