// 1) Un alert() espone 5 numeri generati casualmente.
// 2) Da li parte un timer di 30 secondi.
// 3) Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri 
//    che ha visto precedentemente, tramite il prompt().
// 4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//    e quali dei numeri da indovinare sono stati individuati.


"use strict";

///// FUNCTIONS

// Function -> genera numero random tra min e max
function randomNumber(minNum = 1, maxNum = 100) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};


// Function -> genera un nuovo Array con i numeri random per mostrarlo nell'alert utente
function arrayRandomFn(moltiplicatore) {

    // Nuovo Array in cui "pusherò" un nuovo numero x volte
    let arrayRandom = [];

    // Ciclo For -> definisco un numero di x volte per cui generare un nuovo numero (moltiplicatore)
    for (let i = 0; i < moltiplicatore; i++) {
        let element = randomNumber();
        arrayRandom.push(element);
    };

    return arrayRandom;
};


// setTimeOut -> genera prompt utente dopo 30 secondi (30000)
setTimeout(() => {

    // Prompt -> numeri ricordati dall'utente 
    let inputUtente = prompt("INSERISCI QUI TUTTI I NUMERI CHE RICORDI ! (separali con uno spazio)").split(" ");
    
    // .map -> genero un nuovo Array con i numeri inseriti dall'utente
    inputUtente = inputUtente.map((arrayUtente) => {
        // parseInt -> ritorno una stringa per vederla
        return parseInt(arrayUtente);
    });

    // .filter -> filtro i numeri corretti tra utente e random 
    let arrayCorretto = inputUtente.filter(function (numeroCorretto) {
        return outputRandom.includes(numeroCorretto);
    });

    // Mostra i risultati in Console e in un Alert    
    alert(`HAI RICORDATO I NUMERI -> [ ${arrayCorretto} ] NE HAI INDOVINATI -> [ ${arrayCorretto.length} ]`);
    console.log(`L'utente ha ricordato ${arrayCorretto.length} numeri -> ${arrayCorretto}`);

// timer millisecondi
}, 3000);



// Nuova variabile -> invoco la funzione e genero 5 numeri da mostrare nell'Alert
let outputRandom = arrayRandomFn(5);
// Alert e Console -> espone 5 numeri generati casualmente
alert(`RICORDATI I SEGUENTI 5 NUMERI -> [ ${outputRandom} ]`);
// Console -> espone i 5 numeri (in modo permanente in console)
console.log(`L'utente dovrà ricordare i seguenti numeri -> ${outputRandom}`);