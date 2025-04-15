const loginButton = document.getElementById("login-button");
const print = document.getElementById("print");

async function register() {
  const Email = document.getElementById("email").value;
  const Username = document.getElementById("name").value;
  const Password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("confirm-password").value;
  if (Password !== ConfirmPassword) {
    alert("Passwords do not match!");
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
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
loginButton.addEventListener("click", register);