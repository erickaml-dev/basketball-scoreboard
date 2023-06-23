let homePoint = 0;
let guestPoint = 0;
let scoreHome = document.getElementById("homescore-point");
let scoreGuest = document.getElementById("guestscore-point");
document.getElementById("homescore-point").textContent = homePoint;
document.getElementById("guestscore-point").textContent = guestPoint;

/* HOME SCORE */

//Je crée 3 functions +1, +2, +3 pour le SCORE HOME

function add1Points(){
    homePoint += 1; //J'additionne mon score a +1
    scoreHome.textContent = homePoint; //Me permet d'afficher le score
}
function add2Points(){
    homePoint += 2;
    scoreHome.textContent = homePoint;
}
function add3Points(){
    homePoint += 3;
    scoreHome.textContent = homePoint;
}

/* GUEST SCORE */

//Je crée 3 functions +1, +2, +3 pour le SCORE GUEST

function guest1Points(){
    guestPoint += 1; 
    scoreGuest.textContent = guestPoint; 
}
function guest2Points(){
    guestPoint += 2;
    scoreGuest.textContent = guestPoint;
}
function guest3Points(){
    guestPoint += 3;
    scoreGuest.textContent = guestPoint;
}

/* NEW GAME */

/* Function qui réinitialise le score à zero */

function newGame(){
    scoreHome.textContent = 0; //Affiche le score dans ma balise HTML
    scoreGuest.textContent = 0; //Affiche le score dans ma balise HTML
    homePoint = 0; //Réintitialise le score à zero
    guestPoint = 0; //Réintitialise le score à zero
}