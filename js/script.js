// genero x num casuali univoci

var listaCasuali = [];
var difficolta = 10;

for ( var i = 0; i<difficolta; i++) {
    
    var numero = Math.floor(Math.random() * 100) + 1;
    verificaPresenza(listaCasuali, numero)

}

console.log(listaCasuali);

// utente deve inserire x numeri diversi tra di loro

var sconfitta = false;
var numSceltoLista = [];
var j = 0;
var numScelto = 0;
var contatore = 0;
var tentativi = parseInt(prompt("quanti tentativi vuoi avere?"));

while ( j < tentativi && sconfitta == false ){

    numScelto = parseInt(prompt("inserisci un numero"));
    // controllo non ci siano duplicati
    if ( numSceltoLista.includes(numScelto) ){

        do{
            numScelto = parseInt(prompt("inserisci un numero"));
        } while ( numSceltoLista.includes(numScelto) );
        
        numSceltoLista.push(numScelto)
        console.log(numSceltoLista)
    }
    else {
        numSceltoLista.push(numScelto)
        console.log(numSceltoLista)
    }

    if ( listaCasuali.includes(numScelto)){
        sconfitta = true
        contatore = j + 1
    }

    j++;
    console.log(j);
}

alert("BOOM!! hai perso al " + contatore + " tentativo");

function verificaPresenza(array, num){
    if ( array.includes(num) ){
        do{
            num = Math.floor(Math.random() * 100) + 1;
        } while (array.includes(num));
        array.push(num)
    }
    else {
        array.push(num)
    }
}

// SEZIONE PER CREAZIONE LISTA DI NUMERI CASUALI SENZA UTILIZZO DI FUNZIONE
// if ( listaCasuali.includes(numero) ){
    //     do{
    //         numero = Math.floor(Math.random() * 5) + 1;
    //     } while (listaCasuali.includes(numero));
    //     listaCasuali.push(numero)
    // }
    // else {
    //     listaCasuali.push(numero)
    // }