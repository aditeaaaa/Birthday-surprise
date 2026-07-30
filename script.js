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



// Welcome → Sunflower

document.getElementById("continueBtn").onclick = function () {

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("sunflowerPage").classList.remove("hidden");

};



// Sunflower → Lily

document.getElementById("sunflowerNext").onclick = function () {

    document.getElementById("sunflowerPage").classList.add("hidden");

    document.getElementById("lilyPage").classList.remove("hidden");

};



// Lily → Golden Retriever

document.getElementById("lilyNext").onclick = function () {

    document.getElementById("lilyPage").classList.add("hidden");

    document.getElementById("dogPage").classList.remove("hidden");

};



// Golden Retriever → Secret Message

document.getElementById("dogNext").onclick = function () {

    document.getElementById("dogPage").classList.add("hidden");

    document.getElementById("envelopePage").classList.remove("hidden");

};



// Secret Message → Countdown

document.getElementById("openEnvelope").onclick = function () {

    document.getElementById("envelopePage").classList.add("hidden");

    document.getElementById("countdownPage").classList.remove("hidden");

};
