const targetDate = new Date("August 10, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCountdown, 1000);
updateCountdown();
// 🎉 Birthday Celebration Effects

function createConfetti(){

    const colors = [
        "#ff4081",
        "#ffd54f",
        "#7e57c2",
        "#4dd0e1",
        "#81c784"
    ];


    for(let i = 0; i < 120; i++){

        let piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];


        piece.style.animationDuration =
        (Math.random() * 3 + 2) + "s";


        piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}



function createFireworks(){

    for(let i = 0; i < 8; i++){

        let fire = document.createElement("div");

        fire.className = "firework";


        fire.style.left =
        (20 + Math.random() * 60) + "vw";


        fire.style.top =
        (20 + Math.random() * 40) + "vh";


        fire.style.setProperty(
            "--x",
            (Math.random() * 300 - 150) + "px"
        );


        fire.style.setProperty(
            "--y",
            (Math.random() * 300 - 150) + "px"
        );


        document.body.appendChild(fire);


        setTimeout(() => {

            fire.remove();

        },1500);

    }

}


// Start effects only on countdown page

document.getElementById("openEnvelope").onclick = function(){

    setTimeout(() => {

        createConfetti();

        createFireworks();

        setInterval(createFireworks,2500);

    },500);

};
