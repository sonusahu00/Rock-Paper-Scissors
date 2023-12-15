const usercurrentscore = document.querySelector("#user-current-score");
const compcurrentscore = document.querySelector("#comp-current-score");
const events = document.querySelectorAll(".event");
let userScore=0;
let compScore=0;
const currentresult = document.querySelector("#current-result");

const getcompchoice = () => {
    let idxchoice = Math.floor ( Math.random() *3);

    if(idxchoice===0) return "Rock";
    else if(idxchoice===1) return "Paper";
    else return "Scissors";
}

const startgame = (userchoice) =>{
    let compchoice = getcompchoice();


    console.log(`userchoice ${userchoice} and compchoice ${compchoice}` );

    if(compchoice===userchoice) {
        currentresult.innerText = "Game Was Draw. Play Again !";
        currentresult.style.backgroundColor = "#750D37";
    }

    else{
        if(compchoice==="Rock"){
            if(userchoice==="Paper") {
                currentresult.innerText = "You Win. Your Paper beats Rock";
                currentresult.style.backgroundColor = "green";
                userScore++;
                usercurrentscore.innerText=userScore;
            }
            else {
                currentresult.innerText = "You Lost. Rock beats Your Scissors";
                currentresult.style.backgroundColor = "red";
                compScore++;
                compcurrentscore.innerText=compScore;
            }
        }
    
        else if(compchoice==="Paper"){
            if(userchoice==="Rock") {
                currentresult.innerText = "You Lost. Paper beats Your Rock";
                currentresult.style.backgroundColor = "red";
                compScore++;
                compcurrentscore.innerText=compScore;
            }
            else {
                currentresult.innerText = "You Win. Your Scissors beats Paper";
                currentresult.style.backgroundColor = "green";
                userScore++;
                usercurrentscore.innerText=userScore;
            }
        }
    
        else{
            if(userchoice==="Paper") {
                currentresult.innerText = "You Lost. Scissors beats Your Paper";
                currentresult.style.backgroundColor = "red";
                compScore++;
                compcurrentscore.innerText=compScore;
            }
            else {
                currentresult.innerText = "You Win. Your rock beats  Scissors";
                currentresult.style.backgroundColor = "green";
                userScore++;
                usercurrentscore.innerText=userScore;
            }
        }
    }
}

events.forEach( (event) =>{
   
    event.addEventListener("click", () => {
        console.log("event was clicked");
        const userchoice = event.getAttribute("id");
        console.log(`userchoice ${userchoice}`);
        startgame(userchoice);
    });
} ) ;

currentresult.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    usercurrentscore.innerText=userScore;
    compcurrentscore.innerText=compScore;
});