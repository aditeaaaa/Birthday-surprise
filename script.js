// ==========================
// Birthday Surprise Script
// ==========================


let stage = 1;



window.onload = function () {

    setTimeout(() => {

        loading.classList.add("hidden");

        welcome.classList.remove("hidden");

    },2500);

};



// Welcome → Choice

continueBtn.onclick = function(){

    welcome.classList.add("hidden");

    choice.classList.remove("hidden");

};




// Sunflower card

sunflower.onclick=function(){

    choice.classList.add("hidden");

    sunflowerPage.classList.remove("hidden");

};



// Sunflower Continue → Choice again

sunflowerNext.onclick=function(){

    sunflowerPage.classList.add("hidden");

    stage=2;

    updateChoice();

    choice.classList.remove("hidden");

};




// Lily card

lily.onclick=function(){

    choice.classList.add("hidden");

    lilyPage.classList.remove("hidden");

};



// Lily Continue

lilyNext.onclick=function(){

    lilyPage.classList.add("hidden");

    stage=3;

    updateChoice();

    choice.classList.remove("hidden");

};




// Dog card

dog.onclick=function(){

    choice.classList.add("hidden");

    dogPage.classList.remove("hidden");

};




// Dog Continue

dogNext.onclick=function(){

    dogPage.classList.add("hidden");

    envelopePage.classList.remove("hidden");

};




// Envelope

openEnvelope.onclick=function(){

    envelopePage.classList.add("hidden");

    countdownPage.classList.remove("hidden");

};




// Control cards

function updateChoice(){


    if(stage===2){

        sunflower.style.display="none";

        lily.style.display="block";

        dog.style.display="block";

    }



    if(stage===3){

        lily.style.display="none";

        dog.style.display="block";

    }


}
