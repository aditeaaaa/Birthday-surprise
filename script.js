// ==========================
// Birthday Surprise Script
// ==========================

window.onload = function () {

    // Loading Screen
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("welcome").classList.remove("hidden");
    }, 2500);

};

// Welcome → Choice
document.getElementById("continueBtn").onclick = function () {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("choice").classList.remove("hidden");

};

// Choice → Sunflower
document.getElementById("sunflower").onclick = function () {

    document.getElementById("choice").classList.add("hidden");
    document.getElementById("sunflowerPage").classList.remove("hidden");

};

// Choice → Lily
document.getElementById("lily").onclick = function () {

    document.getElementById("choice").classList.add("hidden");
    document.getElementById("lilyPage").classList.remove("hidden");

};

// Choice → Dog
document.getElementById("dog").onclick = function () {

    document.getElementById("choice").classList.add("hidden");
    document.getElementById("dogPage").classList.remove("hidden");

};

// Sunflower → Envelope
document.getElementById("sunflowerNext").onclick = function () {

    document.getElementById("sunflowerPage").classList.add("hidden");
    document.getElementById("envelopePage").classList.remove("hidden");

};

// Lily → Envelope
document.getElementById("lilyNext").onclick = function () {

    document.getElementById("lilyPage").classList.add("hidden");
    document.getElementById("envelopePage").classList.remove("hidden");

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

};
