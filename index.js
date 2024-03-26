

function play(){
    // hiding home-----
    const home = document.getElementById("intro");
    home.classList.add("hidden");
    
    // show game ------
    const game = document.getElementById("game");
    game.classList.remove("hidden");

    randomAlphabet();
}


function randomAlphabet(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split("");

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alpha = alphabet[index];
    
    const showAlpha = document.getElementById("randomText");
    showAlpha.innerText = alpha;

    highlightAlpha(alpha);
}

function highlightAlpha(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeAlphaClr(elementId){
    const givenKey = document.getElementById(elementId);
    givenKey.classList.remove("bg-orange-400");
}

function keyPress(event){

    // get from keyboard
    const pressed = event.key;

    // escape
    if(pressed=== "Escape"){
        end();
    }

    // get generated alpha
    const neededAlpha = document.getElementById("randomText");
    const needed = neededAlpha.innerText.toLowerCase();

    // match it
    if(pressed === needed){
        //console.log("win");
        //get score
        const scr = document.getElementById("score");
        const scor = scr.innerText;
        const scoore = parseInt(scor); 
        // increase
        const newScore = scoore + 1;
        // display
        scr.innerText = newScore;

        removeAlphaClr(needed);
        play();
    }
    else{
        //console.log("lost");
        const lifes = document.getElementById("life");
        const lfs = lifes.innerText;
        const lf = parseInt(lfs);
        const newLife = lf - 1;
        lifes.innerText = newLife;
        if(newLife == 0){
            console.log("ses");
            end();
        }    
    }  
}

document.addEventListener("keyup",keyPress);

function end(){
    // hiding game-----
    const g = document.getElementById("game");
    g.classList.add("hidden");
    
    // show outro ------
    const e = document.getElementById("outro");
    e.classList.remove("hidden");

    getScore();
}

function getScore(){
    const finalScore = document.getElementById("score");
    console.log(finalScore.innerText);
    const fin = document.getElementById("finSc");
    fin.innerText = finalScore.innerText;
}

function playAgain(){
    const last = document.getElementById("outro");
    last.classList.add("hidden");
    
    // show game ------
    const again = document.getElementById("game");
    again.classList.remove("hidden");

    // reset er function lekhhhhhhhhhhhhhhhhhhhhhhhh
    const jibon = document.getElementById("life");
    jibon.innerText =5;

    const iscore = document.getElementById("score");
    iscore.innerText =0;

    const agerta = document.getElementById("randomText").innerText;
    removeAlphaClr(agerta);
    
    randomAlphabet();
}
