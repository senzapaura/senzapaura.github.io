window.addEventListener("load", function () {
  var loadingDiv = document.getElementById("loadingDiv");
  loadingDiv.style.display = "none";
});

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

function showPopup(popupId, workId) {
  if (popupId === "sharePopup" && workId) {
    const linkInput = document.querySelector(".linkedcopy input");
    linkInput.value = `https://senzapaura.github.io/Works.html#${workId}`;
  } else if (popupId === "detailsPopup" && workId) {
    const detailsPopupId = `detailsPopup${workId}`;
    document.getElementById(detailsPopupId).style.display = "block";
  } else {
    document.getElementById(popupId).style.display = "block";
  }
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
  var workClasses = document.querySelectorAll(".work1class");

  workClasses.forEach(function (container) {
    var element = container.querySelector(".sticky-buttons");
    var containerTop = container.offsetTop;
    var containerBottom = containerTop + container.offsetHeight;
    var stickyHeight = element.offsetHeight;

    // Check the top boundary
    if (
      window.scrollY + 60 >= containerTop &&
      window.scrollY + 60 <= containerBottom - stickyHeight
    ) {
      // Within the container bounds, make it sticky
      element.style.position = "fixed";
      element.style.top = "60px";
      element.style.right = "42px";
    } else {
      // Outside of container bounds, revert to default position
      element.style.position = "absolute";
      element.style.top = "30px"; // Resetting to original top position
      element.style.right = "42px"; // Resetting to original right position
    }
  });
});

// Form submission
let contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          let contactSection = document.querySelector(".contact-section");
          let thankYouMessage = document.getElementById("thankYouMessage");
          contactSection.classList.add("hidden");
          setTimeout(function () {
            thankYouMessage.style.display = "block";
          }, 50);
          setTimeout(function () {
            window.location.href = "index.html";
          }, 2000);
        } else {
          console.error("Form submission error:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  });
}

function updateProgress() {
  const nameInput = document.getElementById("nameInput").value;
  const emailInput = document.getElementById("emailInput").value;
  const subjectInput = document.getElementById("subjectInput").value;
  const messageInput = document.getElementById("messageInput").value;

  let progress = 0;

  if (nameInput) progress += 25;
  if (emailInput) progress += 25;
  if (subjectInput) progress += 25;
  if (messageInput) progress += 25;

  document.getElementById("progressFill").style.height = progress + "%";

  if (progress === 100) {
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    const workId = window.location.hash.substring(1);
    const workElement = document.getElementById(workId);
    if (workElement) {
      workElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    var alertDiv = document.getElementById("mobileAlert");
    if (alertDiv) {
      alertDiv.style.display = "block";
      document.body.style.overflow = "hidden"; // to prevent scrolling
    }
  }
});
