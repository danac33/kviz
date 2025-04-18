let i =1;
let j = 0;
const question = document.getElementById("question");
const QNum = document.getElementById("QNum");
const Points = document.getElementById("Points");
const Streak = document.getElementById("streak");
const time = document.getElementById("time");
const AnsA = document.getElementById("A");
const AnsB = document.getElementById("B");
const AnsC = document.getElementById("C");
const AnsD = document.getElementById("D");

async function getQuestion() {
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
    console.log(data);

    question.innerHTML = data.question.title;
    AnsA.innerHTML = data.question.options[0].text;
    AnsB.innerHTML = data.question.options[1].text;
    AnsC.innerHTML = data.question.options[2].text;
    AnsD.innerHTML = data.question.options[3].text;
    QNum.innerHTML = i;
    time.innerHTML = data.question.timeLimit;
    Points.innerHTML = j;

    localStorage.setItem("gameId", data.gameId);
    localStorage.setItem("questionId", data.question._id);

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
            getQuestion()
        } else {
            localStorage.setItem("points", j);
            window.location.href = "/slides/end/index.html";
        }
        if(i===21) {
          localStorage.setItem("points", j);
          window.location.href = "/slides/end/index.html";
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