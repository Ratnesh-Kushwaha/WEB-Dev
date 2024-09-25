let userScore=0;
let comScore=0;

const userScoreB=document.querySelector("#user-score")
const compScoreB=document.querySelector("#comp-score")

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const draw=()=>{
    // console.log("Game Draw.")
    msg.innerText="Draw"
    msg.style.backgroundColor="grey"
}

const showWin=(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++
        userScoreB.innerText= userScore;
        // console.log("you win!")
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        comScore++
        compScoreB.innerText= comScore;
        // console.log("you lose")
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor="red"
    }
    // console.log("Game Draw.")
}

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
}

const playGame=(userChoice)=>{
    // console.log("user choice = ", userChoice);
    const compChoice= genCompChoice()
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        draw()
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }else{
           userWin= compChoice==="rock"?false:true
        }

        showWin(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})