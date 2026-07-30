setTimeout(() => {

document.getElementById("loading").style.display = "none";

document.getElementById("welcome").classList.remove("hidden");

},2500);


document.getElementById("continueBtn").onclick=function(){

document.getElementById("welcome").classList.add("hidden");

document.getElementById("choice").classList.remove("hidden");

}


document.getElementById("sunflower").onclick=function(){

alert("🌻 Sunflower story coming next!");

}

document.getElementById("lily").onclick=function(){

alert("🤍 Lily story coming next!");

}

document.getElementById("dog").onclick=function(){

alert("🐶 Golden Retriever story coming next!");

}
