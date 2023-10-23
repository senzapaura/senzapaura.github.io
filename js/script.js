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
  let clickedThumbnail = event.currentTarget;
  let thumbnailsContainer = clickedThumbnail.parentElement;
  let workContainer = thumbnailsContainer.parentElement;
  let mainImage = workContainer.querySelector(".mainImage");

  // Remove active class from all thumbnails in the same container
  thumbnailsContainer.querySelectorAll(".thumbnail").forEach(function (thumb) {
    thumb.classList.remove("active");
  });

  // Add active class to the clicked thumbnail
  clickedThumbnail.classList.add("active");

  mainImage.src = src;
  mainImage.style.transition = "opacity 0.4s";
  mainImage.style.opacity = 0;

  setTimeout(() => {
    mainImage.style.opacity = 1;
  }, 300);
}

function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function copyLink() {
  var copyText = document.querySelector("#sharePopup input");
  copyText.select();
  document.execCommand("copy");
}

document.addEventListener("scroll", function () {
  var element = document.querySelector(".sticky-buttons"); // your sticky element
  var container = document.querySelector(".work1class"); // parent container

  var containerBounds = container.getBoundingClientRect();

  if (
    window.scrollY >= containerBounds.top &&
    window.scrollY <= containerBounds.bottom
  ) {
    // Within the container bounds, make it sticky
    element.style.position = "fixed";
    element.style.top = "60px";
    element.style.right = "42px"; // or any offset you prefer
  } else {
    // Outside of container bounds, revert to default position
    element.style.position = "absolut";
  }
});
