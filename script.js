let openedFlowers = [];

function openMessage(type){

    const popup =
    document.getElementById("popup");

    const title =
    document.getElementById("popupTitle");

    const text =
    document.getElementById("popupText");

    const messages = {

        rose:{
            title:"🌹 Rose",
            text:"Write what you admire about her here."
        },

        tulip:{
            title:"🌷 Tulip",
            text:"Write a favorite memory here."
        },

        bougainvillea:{
            title:"🌺 Bougainvillea",
            text:"Write what she taught you."
        },

        orchid:{
            title:"🌸 Orchid",
            text:"Your apology goes here."
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
