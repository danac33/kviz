let quizStartRequested = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const startBtn1 = document.getElementById("startBtn1");
const startBtn2 = document.getElementById("startBtn2");
const startBtn3 = document.getElementById("startBtn3");
const buttons = document.getElementById("buttons");
const logOut = document.getElementById("odjavi");
const token = localStorage.getItem("token");
const logo = document.getElementById("nav");
if (token && localStorage.getItem("quizIntent") === "true") {
  openPopup();
  localStorage.removeItem("quizIntent");
}

if (token) {
  btn1.style.display = "none";
  btn2.style.display = "none";
  logo.style.display = "flex";
  logOut.style.visibility = "inline-block";
} else {
  logOut.style.display = "none";
}
if (token && localStorage.getItem("quizIntent") === "true") {
  openPopup();
  localStorage.removeItem("quizIntent");
}

logout = () => {
  localStorage.clear();
  location.reload();
};

function openPopup() {
  document.getElementById("quizPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("quizPopup").style.display = "none";
}

[startBtn1, startBtn2, startBtn3].forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); 
    quizStartRequested = true; 

    if (localStorage.getItem("token")) {
      openPopup(); 
    } else {
      localStorage.setItem("quizIntent", "true");
      window.location.href = "../logIn/index.html";
    }
  });
});

async function getLeaderboard() {
  const last = document.getElementById("last");
  const name1 = document.getElementById("name-1");
  const name2 = document.getElementById("name-2");
  const name3 = document.getElementById("name-3");
  const name4 = document.getElementById("name-4");
  const name5 = document.getElementById("name-5");

  const Bscore1 = document.getElementById("Bscore-1");
  const Bscore2 = document.getElementById("Bscore-2");
  const Bscore3 = document.getElementById("Bscore-3");
  const Bscore4 = document.getElementById("Bscore-4");
  const Bscore5 = document.getElementById("Bscore-5");
  const myBscore = localStorage.getItem("bestScore");

  try {
    const response = await fetch(
      "https://quiz-be-zeta.vercel.app/leaderboard",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!token) {
      last.style.display = "none";
    }
    name1.innerHTML = data[0].username;
    name2.innerHTML = data[1].username;
    name3.innerHTML = data[2].username;
    name4.innerHTML = data[3].username;
    name5.innerHTML = data[4].username;

    Bscore1.innerHTML = `best score: ${data[0].bestScore}`;
    Bscore2.innerHTML = `best score: ${data[1].bestScore}`;
    Bscore3.innerHTML = `best score: ${data[2].bestScore}`;
    Bscore4.innerHTML = `best score: ${data[3].bestScore}`;
    Bscore5.innerHTML = `best score: ${data[4].bestScore}`;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
}
async function getUser() {
  try {
    const response = await fetch(
      "https://quiz-be-zeta.vercel.app/auth/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    const username = data.username;
    const bestScore = data.bestScore;
    const email = data.email;
    const nameL = document.getElementById("name-l");
    const BscoreL = document.getElementById("Bscore-l");

    console.log(bestScore);

    nameL.innerHTML = username;
    BscoreL.innerHTML = `best score: ${bestScore}`;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
getLeaderboard();
getUser();

let myIndex = 0;
let carouselInterval;

function carousel() {
  let x = document.getElementsByClassName("card");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  carouselInterval = setTimeout(carousel, 3000);
}
const mediaQuery = window.matchMedia("(max-width: 400px)");
function handleScreenChange(e) {
  let x = document.getElementsByClassName("card");
  if (e.matches) {
    myIndex = 0;
    carousel();
  } else {
    clearTimeout(carouselInterval);
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }
}

mediaQuery.addEventListener("change", handleScreenChange);
handleScreenChange(mediaQuery);


  function closePopup() {
    document.getElementById("quizPopup").style.display = "none";
  }

