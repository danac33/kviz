
const btn = document.getElementById("submit");

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
    localStorage.setItem("token", response.token);
    console.log(data);
}catch(error){
    console.error("Error:", error);
}
}

btn.addEventListener("click", login)