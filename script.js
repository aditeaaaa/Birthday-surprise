// ==========================
// Birthday Surprise Script
// ==========================


// Loading Screen

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loading").classList.add("hidden");

        document.getElementById("welcome").classList.remove("hidden");

    }, 2500);

};



// Welcome → Choice Page

document.getElementById("continueBtn").onclick = function () {

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("choice").classList.remove("hidden");

};




// 🌻 Sunflower Selection

document.getElementById("sunflower").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("sunflowerPage").classList.remove("hidden");

};



// Sunflower → Choice (Only Lily + Dog)

document.getElementById("sunflowerNext").onclick = function () {

    document.getElementById("sunflowerPage").classList.add("hidden");


    document.getElementById("sunflower").style.display = "none";

    document.getElementById("lily").style.display = "block";

    document.getElementById("dog").style.display = "block";


    document.getElementById("choice").classList.remove("hidden");

};




// 🤍 Lily Selection

document.getElementById("lily").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("lilyPage").classList.remove("hidden");

};



// Lily → Choice (Only Dog)

document.getElementById("lilyNext").onclick = function () {

    document.getElementById("lilyPage").classList.add("hidden");


    document.getElementById("lily").style.display = "none";

    document.getElementById("dog").style.display = "block";


    document.getElementById("choice").classList.remove("hidden");

};





// 🐶 Dog Selection

document.getElementById("dog").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("dogPage").classList.remove("hidden");

};




// Dog → Envelope

document.getElementById("dogNext").onclick = function () {

    document.getElementById("dogPage").classList.add("hidden");

    document.getElementById("envelopePage").classList.remove("hidden");

};




// Envelope → Countdown

document.getElementById("openEnvelope").onclick = function () {

    document.getElementById("envelopePage").classList.add("hidden");

    document.getElementById("countdownPage").classList.remove("hidden");


    // Celebration

    if (typeof createConfetti === "function") {

        createConfetti();

    }


    if (typeof createFireworks === "function") {

        createFireworks();

    }

};
