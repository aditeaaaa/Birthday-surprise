// ==========================
// Birthday Surprise Script
// ==========================


// Loading Screen

window.onload = function () {

    setTimeout(function () {

        document.getElementById("loading").classList.add("hidden");

        document.getElementById("welcome").classList.remove("hidden");

    }, 2500);

};




// Welcome → Choice Page

document.getElementById("continueBtn").onclick = function () {

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("choice").classList.remove("hidden");

};





// 🌻 Sunflower Card

document.getElementById("sunflower").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("sunflowerPage").classList.remove("hidden");

};




// 🌻 Sunflower Continue → Lily + Dog Cards

document.getElementById("sunflowerNext").onclick = function () {


    document.getElementById("sunflowerPage").classList.add("hidden");


    document.getElementById("sunflower").style.display = "none";


    document.getElementById("choice").classList.remove("hidden");


};





// 🤍 Lily Card

document.getElementById("lily").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("lilyPage").classList.remove("hidden");

};




// 🤍 Lily Continue → Only Dog Card

document.getElementById("lilyNext").onclick = function () {


    document.getElementById("lilyPage").classList.add("hidden");


    document.getElementById("lily").style.display = "none";


    document.getElementById("choice").classList.remove("hidden");


};





// 🐶 Dog Card

document.getElementById("dog").onclick = function () {

    document.getElementById("choice").classList.add("hidden");

    document.getElementById("dogPage").classList.remove("hidden");

};





// 🐶 Dog Continue → Envelope

document.getElementById("dogNext").onclick = function () {

    document.getElementById("dogPage").classList.add("hidden");

    document.getElementById("envelopePage").classList.remove("hidden");

};





// 💌 Envelope → Countdown

document.getElementById("openEnvelope").onclick = function () {

    document.getElementById("envelopePage").classList.add("hidden");

    document.getElementById("countdownPage").classList.remove("hidden");


    setTimeout(function () {

        if (window.createConfetti) {

            window.createConfetti();

        }


        if (window.createFireworks) {

            window.createFireworks();

        }

    }, 500);

};
