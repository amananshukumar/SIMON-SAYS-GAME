let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    
     console.log("game started");
     started=true;
     levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },500);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq)
   gameFlash(randBtn);
}


function checkans(idx) {
   
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
          setTimeout(levelUp(),1000);
        }
        
    }
    else{
        h2.innerHTML=`game over! Your score  ${level} <br> press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundcolor="white";
        },150);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn= this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
   checkans(userSeq.length-1);
}
 
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
        btn.addEventListener("click",btnpress);
    }

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;
}