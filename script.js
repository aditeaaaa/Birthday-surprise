// =============================
// Birthday Surprise Script
// =============================

// Wait for the page to load
window.onload = function () {

    const loading = document.getElementById("loading");
    const welcome = document.getElementById("welcome");
    const choice = document.getElementById("choice");

    // Hide loading after 2.5 seconds
    setTimeout(() => {
        loading.classList.add("hidden");
        welcome.classList.remove("hidden");
    }, 2500);

    // Continue button
    document.getElementById("continueBtn").addEventListener("click", () => {

        welcome.classList.add("hidden");

        setTimeout(() => {
            choice.classList.remove("hidden");
        }, 300);

    });

    // Companion selection
    document.getElementById("sunflower").addEventListener("click", () => {
        showMessage("sunflower");
    });

    document.getElementById("lily").addEventListener("click", () => {
        showMessage("lily");
    });

    document.getElementById("dog").addEventListener("click", () => {
        showMessage("dog");
    });

};

// =====================================
// Temporary story function
// =====================================

function showMessage(choice){

    let title="";
    let message="";

    switch(choice){

        case "sunflower":

            title="🌻 Sunflower";

            message=`Sunflowers never stop looking for light.

Even on cloudy days...

they quietly wait for the sun.

Maybe that's what hope looks like.

Keep following the light.

Your journey continues soon.`;

            break;

        case "lily":

            title="🤍 Lily";

            message=`Lilies never try to outshine other flowers.

Their beauty is gentle.

Calm.

Peaceful.

Sometimes the quietest hearts leave the deepest memories.`;

            break;

        case "dog":

            title="🐶 Golden Retriever";

            message=`If happiness had a face,

it would probably smile like this.

Loyal.

Warm.

Always happy to see you.

Some souls simply make the world softer.`;

            break;

    }

    // This is temporary.
    // Later we'll replace it with animated story pages.

    alert(title + "\n\n" + message);

}
