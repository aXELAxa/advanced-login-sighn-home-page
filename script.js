document.addEventListener("DOMContentLoaded", () => {
    const showLoginBtn = document.getElementById("show-login");
    const showRegisterBtn = document.getElementById("show-register");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    showLoginBtn.addEventListener("click", () => {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      showLoginBtn.classList.add("active");
      showRegisterBtn.classList.remove("active");
    });
  
    showRegisterBtn.addEventListener("click", () => {
      registerForm.style.display = "block";
      loginForm.style.display = "none";
      showRegisterBtn.classList.add("active");
      showLoginBtn.classList.remove("active");
    });
  });
  