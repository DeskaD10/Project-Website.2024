const featureBoxes = document.querySelectorAll(".fea-box");

featureBoxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
    this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    const icon = this.querySelector("i");
    if (icon) {
      icon.style.color = "#FF9226";
    }
  });

  box.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
    const icon = this.querySelector("i");
    if (icon) {
      icon.style.color = "#d32424";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".comments-container");
  const comments = document.querySelectorAll(".comments");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;
  const maxIndex = comments.length - 1;

  comments.forEach((comment, index) => {
    comment.style.display = index === 0 ? "block" : "none";
  });

  function showComments(index) {
    comments.forEach((comment, i) => {
      comment.style.display = i === index ? "block" : "none";
    });

    prevBtn.classList.toggle("inactive", index === 0);
    nextBtn.classList.toggle("inactive", index === maxIndex);
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      showComments(currentIndex);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      showComments(currentIndex);
    }
  });
});

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
