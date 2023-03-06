
let sessions=JSON.parse(localStorage.getItem("sessions"))||[];
let sessionsBlock=document.getElementById('sessions');
for (let session of sessions) {
    let sessionBlock = document.createElement('div');
    sessionBlock.textContent = `Ви були на сайті: ${session}`;
    sessionsBlock.appendChild(sessionBlock);
}
localStorage.setItem('sessions', JSON.stringify(sessions));




