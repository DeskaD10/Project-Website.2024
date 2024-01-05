const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollToTopBtn.addEventListener("click", scrollToTop);
const handleScroll = () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
window.addEventListener("scroll", handleScroll);
handleScroll();

$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

function openSocialMedia(link) {
  window.open(link, "_blank");
}

const courseBoxes = document.querySelectorAll(".courses");
courseBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("active");

    courseBoxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.add("blurred");
      }
    });
  });

  box.addEventListener("mouseleave", () => {
    courseBoxes.forEach((otherBox) => {
      otherBox.classList.remove("active");
    });

    courseBoxes.forEach((otherBox) => {
      otherBox.classList.remove("blurred");
    });
  });
});
