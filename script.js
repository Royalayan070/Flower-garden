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
            text: "An apology section because I know I messed up badly this time, infact, not only this time but all the times I’ve done kitne saare mistakes, I feel like my words hurt a lot sometimes. I need to change this about myself which I will but everything I did until here.. everything that already happened, said by me, done by me, gone with past. I don’t know how can I ever expect you to forgive me after doing so many of mistakes. The no. 1 reason I’m so grateful for you is that even after all those mistakes you chose to talk to me and not leave which is… I don’t have words on how to express it cuz, I just cannot, I’m too overwhelmed by my own mistakes but you never were until yesterday and I felt the same way. Yea I’m writing this with tears in my eyes. I hope of one day repaying you for everything I’ve done with you jo galat hua ho mujhse. But I cannot because it’s all gone.. Guilt for all of it accumulates on my heart but you still choose to forgive me while I cannot do that myself. I just don’t know how can someone be so kind.. So kind towards someone like me who barely deserves it. Me, a person who learns from his mistakes but still manages to repeat them.. I sometimes feel like I should isolate myself out of everyone’s reach until I’m perfect for all, I don’t even give a fuck about anyone else either it’s all about being perfect for you… Which I don’t know ki when will I be but I do my best but rn I feel like even my best isn’t enough.. Jitna bhi try karu it comes to a moment jidhr I manage to mess things up. I don’t know how can someone manage to do itni galatiyaan. I cannot understand my own self and I talk about understanding others. I’m not becoming the best version of myself while telling others to push their limits… And the person who encourages me for it I manage to break her heart like this.. I’m just really sorry about everything dude. I won’t ask for forgiveness because koi kitna hi maaf karega kisi ko. I just want you to sit with peace that I’ll again try my best even if I fail you by any means. That’s a promise.."
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
        "Melloooooo jiiiii how was your day I hope you did ekdam perfect today as well.. I’m glad you’ve started to eat healthy again and diet + gym pr dhyaan deri ho which is AGAIN making me so so proud of you!!! I love the way you also learnt that workout and fitness is as important as studying and improved yourself which is so so inspirational for me! Waise bhi mera ultimate goal to yahi tha ki kaise na kaise aapko healthy rehne me help kar saku and see you did it without even taking my help :>>>>. Me so glad about how you’re managing everything on your own and BEING A STRONG INDEPENDENT WOMAN AND A BOSS 😎😎😎!. So impressive huh. Who you trynna impress gurl? 😏 OH don’t tell me it’s your “BOYFRIEND” ur single ahh is NOT getting one >:D (by choice heh, standards too high u ain’t settling for a random). Achha there was one thing I wanted to confess to you that’s going on with me like since the past week or since my kittens passed away (yeah) I’ve basically changed a bit. If I be direct with you it’s like I’m not in my right state of mind, why? How? Yeah, lemme tell. So there has been a while since Waffle passed away and tabse hi (yeah tabse hi) I’ve not been able to sleep properly. I’ve been sleeping 2 hours, 3 hours, 1 hour everyday.. since the day I went to Khajoori jab aapne mujhe vms na sunne pr daanta tha- Kal bhi 10 se 12 soya tha fir I couldn’t sleep and tab se jag hi raha hun. I’ve been having frequent headaches on random intervals, (abhi bhi), my bowels were irritated tabse I’ve lost all my appetite. Kaha mai 3 roti easy khaata tha 1 kha rha hun mushkil se… per meal. Pata nahi yaar mann nahi krta… meals skip nhi krta but bohot kam khaata hun TwT. Mere dad has been so harsh on me about this ki mai ache se na kha rha hu na so rha hu na active hun study performance drastically decrease hogyi hai etc… And I’ve noticed this too ki mai interest lekr psychology related books padhta tha, Haunting adeline (ye-) bhi, mann hi nhi kr rha yar ab TwT. All I feel like doing is sitting idle, isolating myself from everyone, being alone and just, stay like that TwT. I’m feeling miserable meri wajah se dusro ko worry krna pad rha hai meri wajah se sab ko pareshan ho rhe hain. Mere cousins pareshan ho rhe hain ki mai aese behave kyun kr rha hun kidhr khoya rehta hun and tbh even I don’t know yaar… I’m just sitting idle staring at nothing with a blank mind nowadays… Writing everything took me aaj subah 3 hours and continued from 10:30 jab mai ghar wapas aaya. I stopped din me because cousins aagye the bahar se :’). I’m sure the reason why I was so harsh on you (I’m really really sorry TwT) was because of this too. I’ve not been able to communicate kisi se bhi and tbh I’m gonna maintain distant from you jabtak mai theek nahi ho jaata not because you’d hate me if I don’t but I’m scared, I’m genuinely scared of saying something that hurts you again. I just cannot take another one of those and I will genuinely break down if it happens again by me TwT. I don’t want you to feel hurt or vulnerable because of me I hate it I genuinely hate it and I hate myself for doing it. I was gonna tell you about all of it  but then ye sab hogya which broke me down and made me just stay distant but I don’t wanna make you feel like I’m avoiding you after doing a mistake TwT. I saw ur text jisme I told you abt the girls wala text to which you replied pointing out kal wali baat. It was intentional from me to check if you’re over it which I knew you won’t be. I genuinely started crying seeing that text. But you’re not the reason behind it, it’s guilt, the guilt that built up within me, why can’t I just become better even if I try everything I can TwT. That’s why If I seem distant please don’t get a bad idea about me… I’m just trying to heal myself before showing up to you so that I don’t spread the damage that’s dealt to me. Not only to you but to everyone. I’ve become oversensitive.. Something I never was, chidchida, seedhe tarah se not talking to anyone… not my family members, Afnan, friends, no one.. I don’t know why but I just wanna stay away from everyone until I’m fine.. BUT ANYWAYS THAT’S ONE THING JO KHUD SE THEEK HOGI. I’m not telling this to you so you help me heal through it, I told it to you because I wanted you to not get any wrong idea about me (please I beg to you 🥺) BUT ANYWAYSSSSS talking about showing up dw ill be there just like a fine wine in a few days DO NOT WORRY. So that’s it on my account sooo see yaaaa take care goodnight and thanks for taking your time and reading all this Melloooo jiiiiii!! ";

    document.getElementById("popup").style.display = "block";
}
