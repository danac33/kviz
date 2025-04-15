const QNum = document.getElementById('QNum');
const Points = document.getElementById('Points');
const Streak = document.getElementById('streak');
const time = document.getElementById('time');
const AnsA = document.getElementById('A');
const AnsB = document.getElementById('B');
const AnsC = document.getElementById('C');
const AnsD = document.getElementById('D');
const question = document.getElementById('question');

if(AnsA.click() === true) {
    alert('A clicked');
}

async function getQuestion() {
    try{
        const response = await fetch('https://quiz-be-zeta.vercel.app/question', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
        const data = await response.json();
        console.log(data);
    }catch (error) {
        console.error('Error:', error);
    }
}
window.onload = getQuestion;