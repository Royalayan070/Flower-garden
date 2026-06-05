// Tracks which flowers have been opened
let openedFlowers = [];

// Updates the progress text
function updateProgress() {

    document.getElementById("progress").innerText =
        openedFlowers.length + " / 5 petals collected 🌸";
}

// Opens a flower message
function openMessage(type, event) {

    const popup = document.getElementById("popup");
    const title = document.getElementById("popupTitle");
    const text = document.getElementById("popupText");

    const messages = {

        strawberry: {
            title: "🍓 Strawberry",
            text: "PUT YOUR APOLOGY HERE"
        },

        rose: {
            title: "🌹 Rose",
            text: "PUT YOUR ADMIRATION MESSAGE HERE"
        },

        tulip: {
            title: "🌷 Tulip",
            text: "PUT YOUR GRATITUDE MESSAGE HERE"
        },

        bougainvillea: {
            title: "🌺 Bougainvillea",
            text: "PUT YOUR FAVORITE MEMORY HERE"
        },

        orchid: {
            title: "🌸 Orchid",
            text: "PUT YOUR INSPIRATION MESSAGE HERE"
        }
    };

    title.innerText = messages[type].title;
    text.innerText = messages[type].text;

    popup.style.display = "block";

    // Mark flower as opened
    if (!openedFlowers.includes(type)) {

        openedFlowers.push(type);

        updateProgress();

        // Makes clicked flower glow
        event.target.classList.add("opened");
    }

    // Unlock moon after all flowers are opened
    if (openedFlowers.length === 5) {

        const moon =
            document.getElementById("moonContainer");

        moon.style.display = "block";

        setTimeout(() => {
            moon.style.opacity = "1";
        }, 100);
    }
}

// Closes popup
function closePopup() {

    document.getElementById("popup").style.display = "none";
}

// Final moon message
function showFinalMessage() {

    document.getElementById("popupTitle").innerText =
        "🌙 Moonlight";

    document.getElementById("popupText").innerText =
        "Every flower here carries a piece of what I wanted to tell you. My apology, my admiration, my gratitude, the memories we share, and the ways you've inspired me. None of this was made because I expect anything in return. I made it because you matter to me.";

    document.getElementById("popup").style.display = "block";
}
