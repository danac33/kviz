const p = localStorage.getItem("points")
let num = Number(p)+1
const bestScore = localStorage.getItem("bestScore")
const point = document.getElementById("points")
const point2 = document.getElementById("Points2")
const best = document.getElementById("BestScore")
const qnum = document.getElementById("QNum")
best.innerHTML = bestScore
qnum.innerHTML = num
if(p == 1) {
    point.innerHTML = `${p} bod`;
    point2.innerHTML = `${p} bod`;
} else if(p > 4 || p == 0){
    point.innerHTML = `${p} bodova`;
    point2.innerHTML = `${p} bodova`;
}else  {
point.innerHTML = `${p} boda`;
point2.innerHTML = `${p} boda`;
}
