let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBt");
let newBtn=document.querySelector("#new");
let msgCont= document.querySelector(".msg-cont");
let msg=document.querySelector("#msg")


let turnO=true; 
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset=()=>{
    turnO=true;
    count=0;
    enb();
    msgCont.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        
        let isWin=checkWin();

        if (count===9 && !isWin){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgCont.classList.remove("hide");
    dis();
  };

const dis=()=>{
    for(let box of boxes) {
        box.disabled=true;
    }
};

const enb=()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgCont.classList.remove("hide");
    dis();
}

const checkWin=()=>{
    for(let pattern of winPattern){
        let p1Val=boxes[pattern[0]].innerText;
        let p2Val=boxes[pattern[1]].innerText;
        let p3Val=boxes[pattern[2]].innerText;
   
        if (p1Val !="" && p2Val !="" && p3Val !="") {
            if(p1Val===p2Val &&p2Val===p3Val){
                showWinner(p1Val);
                return true;
            }
        }
    };
}


newBtn.addEventListener("click",reset)
resetBtn.addEventListener("click",reset)