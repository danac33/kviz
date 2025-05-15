const p = localStorage.getItem("points")
let num = Number(p)+1
const h2 = document.getElementById("h2")
const bestScore = localStorage.getItem("bestScore")
const point = document.getElementById("points")
const point2 = document.getElementById("Points2")
const best = document.getElementById("BestScore")
const qnum = document.getElementById("QNum")
const timeT = localStorage.getItem("timeT")
const questionT = localStorage.getItem("QuestionT")
const quitT = localStorage.getItem("quitT")
best.innerHTML = bestScore
qnum.innerHTML = num

    point.innerHTML = `${p}`;
    point2.innerHTML = `${p}`;
    point.innerHTML = `${p}`;
    point2.innerHTML = `${p}`;
    


    const scoreMessageElement = document.getElementById("scoreMessage");
    let scoreMessage = "";
    if (Number(p) >= 100) {
        scoreMessage = "profesionalac!";
    }else if (Number(p) >= 50) {
        scoreMessage = "odlićan rezultat!";
    } else if (Number(p) > 20) {
        scoreMessage = "dobar rezultat!";
    } else if (Number(p) >= 10) {
        scoreMessage = "Svaka cast";
    } else {
        scoreMessage = "Vise srece drugi put";
    }
    scoreMessageElement.innerHTML = scoreMessage;
    
    if(timeT == "true"){
        h2.innerHTML = "Isteklo je vrijeme!"
        localStorage.removeItem("timeT")
    } else if(questionT == "true"){
        h2.innerHTML = "Pogresan odgovor!"
        localStorage.removeItem("QuestionT")
    } else if(quitT == "true"){
        h2.innerHTML = "Izasli ste iz igre!"
        localStorage.removeItem("quitT")
    }

