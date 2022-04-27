/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


/*
1. creare una funzione che genera numeri random
2. generare 5 numeri
3. stampare i numeri in html
4. quando stampo i numeri parte un timer di 5 sec
5. creo un timer di 5 sec
6.passati 5 sec nascondo i numeri
7. faccio inserire i numeri in un prompt(uno per volta)
8. 
*/
const wrapper= document.getElementById("wrapper")
const startBttn= document.getElementById( "start" );
const randomNumbersArr=[ ];


startBttn.addEventListener("click", start)

function start() {
    remove();
    displayGeneration();
    
}

setTimeout(hideArray, 5000);
function hideArray() {
    display.classList.add("hide");
}

function displayGeneration() {
    const display=document.createElement("h1");
    wrapper.append(display);
    arrayGeneration(randomNumbersArr);
}

function arrayGeneration() {
    while (randomNumbersArr.length < 5 ) {
        const numberGenerated= randomNumbersCreation( 1 , 10);
        randomNumbersArr.push(numberGenerated);
    }
    display.innerHTML=`${randomNumbersArr}`
    console.log(randomNumbersArr);
    return randomNumbersArr;
}


function randomNumbersCreation(max , min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function remove() {
    startBttn.className="hide";
}