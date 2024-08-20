document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.getElementById("signup-btn");
  const modal = document.getElementById("signup-modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const signupForm = document.getElementById("signup-form");
  const googleSignInBtn = document.getElementById("google-signin-btn");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  const resetBtn = document.getElementById("reset-btn");
  const iframe = document.getElementById("iframe");
  const commentBtn = document.getElementById("comment-btn");
  const navigationButtons = document.querySelectorAll(
    ".iframe-navigation button"
  );
  function changePage(pageNumber) {
    iframe.src = `page${pageNumber}.html`;
  }

  navigationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      changePage(this.dataset.page);
    });
  });

  // Fullscreen button
  fullscreenBtn.addEventListener("click", function () {
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  });
  signUpBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  resetBtn.onclick = function () {
    iframe.src = "page1.html";
  };

  signupForm.onsubmit = function (e) {
    e.preventDefault();
    //sending the form data to a server baby
    console.log("Form submitted");
    console.log("Full Name: " + document.getElementById("full-name").value);
    console.log(
      "Phone number: " + document.getElementById("phone-number").value
    );
    console.log("Email: " + document.getElementById("email").value);

    modal.style.display = "none";
    alert("Thank you for signing up !");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.getElementById("share-button");
  const shareModal = document.getElementById("share-modal");
  const closeButton = shareModal.querySelector(".close");
  const linkInput = document.getElementById("link-input");
  const copyLinkButton = document.getElementById("copy-link");
  const emailInput = document.getElementById("email-input");
  const sendEmailButton = document.getElementById("send-email");

  shareButton.onclick = function () {
    shareModal.style.display = "block";
    linkInput.value = window.location.href;
  };

  closeButton.onclick = function () {
    shareModal.style.display = "none";
  };

  copyLinkButton.onclick = function () {
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
  };

  sendEmailButton.onclick = function () {
    const email = emailInput.value;
    if (email) {
      console.log(`Sharing link to: ${email}`);
      alert("Sharing link via email (simulated)");
    } else {
      alert("Please enter an email address");
    }
  };

  window.onclick = function (event) {
    if (event.target == shareModal) {
      shareModal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  let hideTimeout;

  document
    .querySelector(".navbar-area")
    .addEventListener("mouseover", function () {
      clearTimeout(hideTimeout);
      navbar.classList.add("show");
    });

  navbar.addEventListener("mouseleave", function () {
    hideTimeout = setTimeout(() => {
      navbar.classList.remove("show");
    }, 2000);
  });
});

const iframe = document.querySelector("iframe");

iframe.onload = function () {
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;

  function handleScroll(e) {
    iframeDocument.documentElement.scrollTop += e.deltaY;
    e.preventDefault();
  }

  iframe.contentWindow.addEventListener("wheel", handleScroll);
};
