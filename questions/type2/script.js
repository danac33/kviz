let i = 1;
let bestScore = parseInt(localStorage.getItem("bestScore")) || 0;
let j = 0;
let timeLeft = null;
let timerId = null;
const question = document.getElementById("question");
const QNum = document.getElementById("QNum");
const Points = document.getElementById("Points");
const Streak = document.getElementById("streak");
const time = document.getElementById("time");
const bScore = document.getElementById("BestScore");
bScore.innerHTML = bestScore;
const AnsA = document.getElementById("A");
const AnsB = document.getElementById("B");
const AnsC = document.getElementById("C");
const AnsD = document.getElementById("D");

savePoints = () => {
  localStorage.setItem("points", j);
  location.replace("../../slides/end/index.html");
};
quit= () =>{
  localStorage.setItem("quitT", true);
}

async function getQuestion() {
  document.getElementById("question-loader").style.display = "flex";
  try {
    const response = await fetch(
      " https://quiz-be-zeta.vercel.app/game/start",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();

    question.innerHTML = data.question.title;
    AnsA.innerHTML = data.question.options[0].text;
    AnsB.innerHTML = data.question.options[1].text;
    AnsC.innerHTML = data.question.options[2].text;
    AnsD.innerHTML = data.question.options[3].text;
    QNum.innerHTML = i;
    Points.innerHTML = j;

    localStorage.setItem("gameId", data.gameId);
    localStorage.setItem("questionId", data.question._id);

    clearInterval(timerId);
    timeLeft = data.question.timeLimit ?? 30;
    time.innerHTML = "00:"+timeLeft;
    timerId = setInterval(countdown, 1000);

    bScore.innerHTML = bestScore;
    document.getElementById("question-loader").style.display = "none";
  } catch (error) {
    document.getElementById("question-loader").style.display = "none";
    console.error("Error:", error);
  }
}
getQuestion();

async function checkAnswer(Ans) {
  bScore.innerHTML = bestScore;
  i++;
  clearTimeout(timerId);
  document.getElementById("question-loader").style.display = "flex";
  try {
    const response = await fetch(
      "https://quiz-be-zeta.vercel.app/game/answer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          answer: Ans,
          gameId: localStorage.getItem("gameId"),
          questionId: localStorage.getItem("questionId"),
        }),
      }
    );
    const data = await response.json();

    QNum.innerHTML = i;

    if (data.correct) {
      j++;
      if (j > bestScore) {
        bestScore = j;
        localStorage.setItem("bestScore", j);
      }
      bScore.innerHTML = bestScore;
      Points.innerHTML = j;

      if (!data.nextQuestion) {
        localStorage.setItem("points", j);
        setTimeout(() => {
          location.replace("../../slides/end/index.html");
        }, 100);
        return;
      }

      timeLeft = data.nextQuestion.timeLimit-1;
      timerId = setInterval(countdown, 1000);

      question.innerHTML = data.nextQuestion.title;
      AnsA.innerHTML = data.nextQuestion.options[0].text;
      AnsB.innerHTML = data.nextQuestion.options[1].text;
      AnsC.innerHTML = data.nextQuestion.options[2].text;
      AnsD.innerHTML = data.nextQuestion.options[3].text;

      localStorage.setItem("questionId", data.nextQuestion._id);
    } else {
      localStorage.setItem("points", j);
      localStorage.setItem("QuestionT", true);
      location.replace("../../slides/end/index.html");
    }
    document.getElementById("question-loader").style.display = "none";
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while checking the answer.");
    document.getElementById("question-loader").style.display = "none";
  }
}
AnsA.onclick = () => checkAnswer(AnsA.innerHTML);
AnsB.onclick = () => checkAnswer(AnsB.innerHTML);
AnsC.onclick = () => checkAnswer(AnsC.innerHTML);
AnsD.onclick = () => checkAnswer(AnsD.innerHTML);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    localStorage.setItem("points", j);
    localStorage.setItem("timeT", true);
    location.replace("../../slides/end/index.html");
  } else if(timeLeft < 10){
    time.innerHTML = "00:0"+timeLeft;
    timeLeft--;
  } else {
    time.innerHTML = "00:"+timeLeft;
    timeLeft--;
  }
}
countdown();
