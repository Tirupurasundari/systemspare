  const loginModal = document.getElementById("loginModal");
  const userLink = document.getElementById("userLink");
  const closeBtn = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm"); // This should be fine now
  const errorMessage = document.getElementById("error-message");

  // Show modal on user link click
  userLink.onclick = function (e) {
    e.preventDefault();
    loginModal.style.display = "flex";
  };

  // Close modal
  closeBtn.onclick = function () {
    loginModal.style.display = "none";
  };

  // Close modal when clicking outside
  window.onclick = function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  };

  // Validation and redirect logic
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      errorMessage.textContent = "Please enter both username and password.";
      return;
    }

    if (username === "admin" && password === "1234") {
      errorMessage.textContent = "";
      window.location.href = "user.html"; // ✅ Redirect
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });


  
 
 