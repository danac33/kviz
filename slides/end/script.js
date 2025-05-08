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

