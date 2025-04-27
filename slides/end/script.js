const p = localStorage.getItem("points")
const point = document.getElementById("points")
if(p == 1) {
    point.innerHTML = `${p} bod`;
} else if(p > 4 || p == 0){
    point.innerHTML = `${p} bodova`;
}else  {
point.innerHTML = `${p} boda`;
}