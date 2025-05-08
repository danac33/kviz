const loginButton = document.getElementById("login-button");
const print = document.getElementById("print");
const ereorF = document.getElementById("errorF");
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

window.addEventListener('load', () => {
  const loader = document.getElementById('right-loader');
  if (loader) {
      loader.style.display = 'none';
  }
});


togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    togglePassword.src = type === 'password' ? './photos2/eye.svg' : './photos2/closed-eye.png';
    passwordInput.setAttribute('type', type);
});

const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirm-password');

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    toggleConfirmPassword.src = type === 'password' ? './photos2/eye.svg' : './photos2/closed-eye.png';
    confirmPasswordInput.setAttribute('type', type);
});

async function register() {
  const Email = document.getElementById("email").value;
  const Username = document.getElementById("name").value;
  const Password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("confirm-password").value;
  if (Password !== ConfirmPassword) {
    errorF.innerHTML = "Passwords do not match";
  } else {
    try {
      const response = await fetch(
        "https://quiz-be-zeta.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
            username: Username,
            password: Password,
          }),
        }
      );
      const data = await response.json();
      if(!data.error){
        errorF.innerHTML = data.message;
    }
    if(data.token){
      window.location.href = "../home/index.html"
  }

    } catch (error) {
      console.error("Error:", error);
    }
  }
}
const form = document.querySelector("form.right");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    register();
});

