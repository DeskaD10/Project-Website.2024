const learnMoreBtn = document.getElementById("learnMoreBtn");
learnMoreBtn.addEventListener("click", function () {
  window.location.href = "/about-us.html";
});

const coursesBtn = document.getElementById("coursesBtn");
coursesBtn.addEventListener("click", function () {
  window.location.href = "/courses.html";
});

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
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  const fadeElements = document.querySelectorAll(".scroll-fade");

  fadeElements.forEach((element) => {
    observer.observe(element);
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
});

$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

function openSocialMedia(link) {
  window.open(link, "_blank");
}
