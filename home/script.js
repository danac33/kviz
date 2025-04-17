
async function getLeaderboard() {
    const nameL= document.getElementById("name-l");
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
    const BscoreL = document.getElementById("Bscore-l");

    try{
        const response = await fetch("https://quiz-be-zeta.vercel.app/leaderboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        console.log(data);

        name1.innerHTML = data[0].username;
        name2.innerHTML = data[1].username;
        name3.innerHTML = data[2].username;
        name4.innerHTML = data[3].username;
        name5.innerHTML = data[4].username;

        Bscore1.innerHTML =`best score: ${data[0].bestScore}`;
        Bscore2.innerHTML =`best score: ${data[1].bestScore}`;
        Bscore3.innerHTML =`best score: ${data[2].bestScore}`;
        Bscore4.innerHTML =`best score: ${data[3].bestScore}`;
        Bscore5.innerHTML =`best score: ${data[4].bestScore}`;

    }catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
}
getLeaderboard()