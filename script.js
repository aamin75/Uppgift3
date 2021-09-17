// Visa att du kan skapa en enkel webbapplikation med HTML, CSS och JavaScript.
// I HTML ska det stå “Hello World” i ett H1-element. Under H1 ska det finnas en knapp att som går att klicka på. 
// Med css ska texten i H1 färgas blå (eller annan valfri färg som inte är svart)
// Med JavaScript ska ett klick på knappen leda till att texten i H1-elementet byts ut till “Goodbye World”.

// Skapa variabler som hänvisar till HTML -elementen
let changeBtn = document.querySelector("#changeBtn");
let head1 = document.querySelector("#head1");

// Definiera funktionen på knappen
changeBtn.addEventListener("click",
    function() {
        head1.innerHTML = "Goodbye World";
    }, false);