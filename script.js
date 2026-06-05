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

    document
    .getElementById("popupTitle")
    .innerText =
    "🌙 One Last Thing";

    document
    .getElementById("popupText")
    .innerText =
    "Thank you for reading all of this. I made it because you matter to me. You don't have to respond right away—I just wanted you to know how much you mean to me.";

    document
    .getElementById("popup")
    .style.display="block";
}
