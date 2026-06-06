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
            text: "put your apolo"
        },

        rose: {
            title: "🌹 Rose",
            text: "About admiration, you know it yourself how I look at you dude you give me those pure, glowy, shiny eyes when through even the smallest of the tasks you accomplish. Although the things that you do are NOT little or small so I gotta say that I’m really impressed by most of the things you do for your parents, for us, for me specifically :>. I adore the way you give your best to the challenges you face, the way you never give up even when the times are miserable, and you’re generous enough to take your time and gossip with me. Even though mai mostly available nhi rehta but you make yourself available. I still feel like a gap away due to this because if like mere saath koi rehta hai to wo 100% mere phone ko check karta jhaak kr dekhta. I have to quickly switch between tasks and all but you put in so much efforts with makes me just so impressed I cannot express it TwT. The way you know that the clock waits for no one and utilize your minutes is so amazing why not teaching me someday cuz I’ve been real ignorant these days ;-;. But the way I can just look at you and count on you and RELY on you because you always tell the best measures is very admirable for me ✨. I’ve never once met a person in my entire life who’s impressed me so much even if it’s my own family members, yeah they really lazy AND kabhi mazaak me lazy bolu to bura mat maana karo :< I’m just a bacha im not samajhdaar aapki tarah T-T. BUT YAS ME TRY MY BEST hamesha hi even if it’s hard- AAPSE HI SEEKHA HAI!"
        },

        tulip: {
            title: "🌷 Tulip",
            text: "Words cannot express how grateful I am for having such a wonderful person as you in my life dude. I never once felt the need to ask “God why is she being like that rn!” yk why? Cuz such a thought never once came to my mind cuz whenever I included God and you in a single sentence it was always me tearing up and thanking God for one, single, blessed reason which ofc is you dude 🥹. I’m grateful for uncountable things that you’ve done for me, for us. And the most noticeable of them being forgiving me whatever mistake I make. That’s the reason why I must keep ur trust alive within me and not ever repeat my mistakes although I know you’ll forgive me hamesha but that’s a priority ✨. Speaking of priorities I’m so grateful for you to prioritise me, spending time with me even when you don’t have it, having fun moments with me, sharing every good, bad, victory, loss and everything with me, reassuring me through the bad times and standing with me when things are falling apart 🥹. Tears cannot stop forming around my eyes cuz I’m just remembering all the times I messed up and all the times you forgave me, makes me more grateful than every, not only for your forgiveness, but your presence itself. I don’t know if I could ask God for someone/something else which can even come close to 0.1% of everything you’ve done for me because the way you were, are and will always be there is the reason I love to see the shining sun even if it’s gets to be 43degree Celsius in the afternoon, it won’t bother me until I know there is someone who thinks I’m worthy of surviving it and will do so. Everything you trust me for is my responsibility, everything you do for me is a blessing and I don’t know how much I owe you until here although you’ll scold me for saying that but it’s priceless dude 🥺. I was always grateful to have you, and will always ask God for you to be closer, until the most awaited day for us jab we’ll officially (ehm ehm) you know what I wanna say so yea- I just wanna express ki your efforts have always mattered to me whether you believe it or not ✨ (A 100% sure you do). "
        },

        bougainvillea: {
            title: "🌺 Bougainvillea",
            text: "I hardly have a 512 mb ram and 2 gb storage hard drive inside my ass because that’s where my last 6.626*10^-34 braincell is, out of all it can handle to remember the most iconic memories for me from the time we met till this day has to be watching shikimori with you, playing truth or dare on discord with you, playing minecraft with you (the core 🥹), playing roblox (especially brookhaven) with you, hours long voice calls, all those cute letters, studying together, updating each other, sharing teas and tbh basically all of our moments have been special for me even if they were jhagda or kalesh cuz it didn’t matter due to it being with you ✨. I’m glad for all the times I could make you feel special or heard, I’m thankful for all the time you entertained me and sent me cute voice messages (even tho I failed to listen sometimes which is on me so I deeply apologize for it). And most importantly, everytime we could open up to each other :>. Nothing can beat those times when I felt overwhelmed and came to you in hopes of everything becoming 100% alright, which it did. It always did. I don’t really know if I could do that with you or make you feel that everything is fine and will be okay but in the end I always did my best 🥲. Just a teenager trying his best to make his favorite person feel at ease ✨, which he always will. "
        },

        orchid: {
            title: "🌸 Orchid",
            text: "Ik I’ve expressed this in admiration as well but your hardwork, khoon paseena and mehnat has always been really inspiring to me :>. Whether it’s a small win or an achievement like 93% in boards, there’s none of the times when I’ve not been inspired by the way you adapt to any situation you go through, something I always lacked, I wanna learn from you. I’ve always wanted to learn from you and I did jahan I could. Although when you met me I was a bachha and now I’ve grown up but there are still so many things about you that I can never EVER surpass. And I don’t wanna do it either, because ofc you’re the boss :>. And you actually are, your ways of talking like a boss, attitude of a boss, mindset of a boss, talking style as the absolute BADASS you are dude 😎. I may say someday ki “you? Heh, ye mu aur masoor ki daal” knowing I’m the one with langoor ke haath me angoor here 💀. Am I? XD. Kabhi kabhi express karta hun but I admire you a lot jab bhi aap kuchh naya try karti ho it makes me so happy ki you’re gonna learn a lot (jisme mera fayeda ki mai bhi seekhta hun hehe). I feel blessed when you progress through your life :> I feel lucky to have such an amazing “bestie” like you. I feel like whatever has God given to me yet you’re the most precious and valuable blessing for me, that’s just how graceful you are ✨. "
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
