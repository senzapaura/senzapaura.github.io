document.getElementById("worksPage").addEventListener("click", function () {
  window.location.href = "Works.html";
});

document.getElementById("resumePage").addEventListener("click", function () {
  window.location.href = "Resume.html";
});

document.getElementById("servicesPage").addEventListener("click", function () {
  window.location.href = "Services.html";
});

document.getElementById("contactPage").addEventListener("click", function () {
  window.location.href = "Contact.html";
});

function changeImage(src) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = src;
  mainImage.style.transition = "opacity 0.3s";
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.style.opacity = 1;
  }, 300);
}
