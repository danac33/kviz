let i =1;
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

    question.innerHTML = data.question.title;
    AnsA.innerHTML = data.question.options[0].text;
    AnsB.innerHTML = data.question.options[1].text;
    AnsC.innerHTML = data.question.options[2].text;
    AnsD.innerHTML = data.question.options[3].text;
    QNum.innerHTML = i;
    time.innerHTML = data.question.timeLimit;

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
            }),
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
AnsA.onclick = () => checkAnswer(AnsA);
AnsB.onclick = () => checkAnswer(AnsB);
AnsC.onclick = () => checkAnswer(AnsC.innerHTML);
AnsD.onclick = () => checkAnswer(AnsD.innerHTML);