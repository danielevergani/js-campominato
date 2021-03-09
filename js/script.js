// genero x num casuali univoci

var listaCasuali = [];

for ( var i = 0; i<5; i++) {
    
    var numero = Math.floor(Math.random() * 5) + 1;
    if ( listaCasuali.includes(numero) ){
        do{
            numero = Math.floor(Math.random() * 5) + 1;
        } while (listaCasuali.includes(numero));
        listaCasuali.push(numero)
    }
    else {
        listaCasuali.push(numero)
    }
    
}

console.log(listaCasuali);

// utente deve inserire x numeri diversi tra di loro

var sconfitta = false;
var numSceltoLista = [];
var j = 0;
var numScelto = 0;

while ( j <= 5 && sconfitta == false ){

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

    j++;
    console.log(j);
}
