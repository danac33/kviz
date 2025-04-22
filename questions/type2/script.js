let i =1;
let bestScore = localStorage.getItem("bestScore") || 0;
let j = 0;
let timeLeft = 30;
let timerId = setInterval(countdown, 1000);
const question = document.getElementById("question");
const QNum = document.getElementById("QNum");
const Points = document.getElementById("Points");
const Streak = document.getElementById("streak");
const time = document.getElementById("time");
const bScore = document.getElementById("BestScore");
const AnsA = document.getElementById("A");
const AnsB = document.getElementById("B");
const AnsC = document.getElementById("C");
const AnsD = document.getElementById("D");

savePoints = () => {
    localStorage.setItem("points", j);
    location.replace("../../slides/end/index.html")
}

async function getQuestion() {
  bScore.innerHTML = bestScore;
  try {
    const response = await fetch(
      " https://quiz-be-zeta.vercel.app/game/start",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          bestScore: localStorage.getItem("bestScore"),
      }),
      }
    );
    const data = await response.json()

    question.innerHTML = data.question.title;
    AnsA.innerHTML = data.question.options[0].text;
    AnsB.innerHTML = data.question.options[1].text;
    AnsC.innerHTML = data.question.options[2].text;
    AnsD.innerHTML = data.question.options[3].text;
    QNum.innerHTML = i;
    Points.innerHTML = j;

    localStorage.setItem("gameId", data.gameId);
    localStorage.setItem("questionId", data.question._id);
    localStorage.setItem("bestScore", data.bestScore);


  } catch (error) {
    console.error("Error:", error);
  }
}
getQuestion();


async function checkAnswer(Ans) {
    try {
        const response = await fetch("https://quiz-be-zeta.vercel.app/game/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                answer : Ans,
                gameId : localStorage.getItem("gameId"),
                questionId : localStorage.getItem("questionId"),
            }),
        })
        const data = await response.json();
        i++;
        
        if(data.correct) {
            j++;
            timeLeft+=3;
            if(j>bestScore) {
              bestScore = j;
              localStorage.setItem("bestScore", j);
            }
            getQuestion()
        } else {
            localStorage.setItem("points", j);
            location.replace("../../slides/end/index.html")
        }
        if(i===21) {
          localStorage.setItem("points", j);
          location.replace("../../slides/end/index.html")
      }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while checking the answer.");
    }
}
AnsA.onclick = () => checkAnswer(AnsA.innerHTML);
AnsB.onclick = () => checkAnswer(AnsB.innerHTML);
AnsC.onclick = () => checkAnswer(AnsC.innerHTML);
AnsD.onclick = () => checkAnswer(AnsD.innerHTML);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    location.replace("../../slides/end/index.html")
  } else {
    time.innerHTML = timeLeft;
    timeLeft--;
  }
}
countdown()