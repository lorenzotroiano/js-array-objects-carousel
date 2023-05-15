/*

Consegna:
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello.
Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.




*/

// creare una constante del div html in cui sarà racchiuso tutto il resto
const itemContainer = document.getElementById("items-container");


// creare ARRAY di oggetti!

const imagCarosello = [
    {
        image: 'img/01.webp',
        title: "Marvel\\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];


// console.log(imagCarosello);



imagCarosello.forEach ((item) => {

    // let objesimo = imagCarosello[i];
    // console.log(objesimo);


    itemContainer.innerHTML += `<div class="item">
                                    <img src="${item.image}">
                                </div>
                                <div class="text">
                                    <h1>${item.title}</h1>
                                    <p>${item.text}</p>
                                </div>`;

    
})


// creata variabile con un valore 0
let activeItem = 0;

// selezionati tutti i div che hanno classe item e classe text
const items = document.querySelectorAll('.item');
const itemsText = document.querySelectorAll('.text');


// aggiungere classe active per rendere l'elemento con indice 0 in versione visibile (active)
items[activeItem].classList.add("active");
itemsText[activeItem].classList.add("active");








// creata variabile che prende l'elemento dal document che contiene id up (la freccia)
const next = document.getElementById('up');


// creeato evento al "bottone freccia" 
next.addEventListener('click', 
function() {

    items[activeItem].classList.remove("active");
    itemsText[activeItem].classList.remove("active");

// creata condizione in  cui stabilisco un SE (se activitem (dunque 0) è minore al numero di valori presenti nell'arrey -1 allora si verificherà tale condizione
    if (activeItem == items.length - 1 && itemsText.length - 1) {
        // si va allo step successivo 
        activeItem = - 1;  
    }

    activeItem++;

    // aggiunta adesso la classe active
    items[activeItem].classList.add('active');  
    itemsText[activeItem].classList.add('active');
})



const indietro = document.getElementById('under');



indietro.addEventListener("click", 
function() {

    items[activeItem].classList.remove("active");
    itemsText[activeItem].classList.remove("active");

    
    if (activeItem == 0) {

      activeItem = items.length;
      activeItem = itemsText.length; 
    }

    activeItem--;

    items[activeItem].classList.add('active');
    itemsText[activeItem].classList.add('active');
})