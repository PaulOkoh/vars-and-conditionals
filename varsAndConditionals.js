/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has a better attack than Jamie Lannister")
} else if(jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has a better attack than Jon Snow")
} else {
    console.log("It is a tie")
}

let jamieLannisterDefense = 100;
let jonSnowDefense = 0;

// Jon Snow gets attacked by jamie
if(jonSnowHealth < jamieLannisterAttack) {
    console.log("Jon Snow has been slain!!!")
} else {
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}


let healthKit = 50;

if((jonSnowHealt + healthKit) > 100) {
    jonSnowHealth = 100;
}else {
    jonSnowHealth += healthKit;
}



let coinLandsHeads = false;
