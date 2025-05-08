const errorF = document.getElementById("errorF");
const btn = document.getElementById("submit");
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
    togglePassword.src = type === 'password' ? './photos/eye.svg' : './photos/closed-eye.png';
    passwordInput.setAttribute('type', type);
});
async function login() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
try{
    const response = await fetch("https://quiz-be-zeta.vercel.app/auth/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    const data = await response.json();
    localStorage.setItem("token", data.token);
    if(!data.error){
        errorF.innerHTML = "Invalid email or password";
    }
    if(data.token){
        location.replace("../home/index.html")
    }
}catch(error){
    console.error("Error:", error);
}
}
const form = document.querySelector("form.right");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

