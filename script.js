let openedFlowers = [];

function openMessage(type){

    const popup =
    document.getElementById("popup");

    const title =
    document.getElementById("popupTitle");

    const text =
    document.getElementById("popupText");

    const messages = {

    strawberry: {
        title: "🍓 Apology",
        text: "This is where your apology goes. Explain what happened, why it hurt her, and what you'll do differently."
    },

    rose: {
        title: "🌹 Admiration",
        text: "This is where you write everything you admire about her."
    },

    tulip: {
        title: "🌷 Gratefulness",
        text: "This is where you thank her for the things she's done for you."
    },

    bougainvillea: {
        title: "🌺 Memories",
        text: "This is where you tell your favorite memories together."
    },

    orchid: {
        title: "🌸 Inspiration",
        text: "This is where you tell her how she has inspired you to grow."
    }
};

    title.innerText =
    messages[type].title;

    text.innerText =
    messages[type].text;

    popup.style.display =
    "block";

    if(!openedFlowers.includes(type))
        openedFlowers.push(type);

    if(openedFlowers.length === 4)
    {
        document
        .getElementById("moonContainer")
        .style.display="block";
    }
}

function closePopup(){

    document
    .getElementById("popup")
    .style.display="none";
}

function showFinalMessage(){

    document.getElementById("popupTitle").innerText =
    "🌙 Moonlight";

    document.getElementById("popupText").innerText =
    "Every flower here carries a piece of what I wanted to tell you. My apology, my admiration, my gratitude, the memories we share, and the ways you've inspired me. None of this was made because I expect immediate forgiveness. I made it because you matter to me, and because I never want you to doubt that. Thank you for taking the time to walk through this little garden.";
    
    document.getElementById("popup").style.display = "block";
}
function updateProgress(){

    document.getElementById("progress").innerText =
    openedFlowers.length + " / 5 flowers discovered 🌸";
}
