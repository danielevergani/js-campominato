// sez funzioni
function verifica (lista, tipoIns){

    var numero;
    var validazione;

    do{
        
        if (tipoIns == "random"){
            numero = Math.floor(Math.random() * 100) + 1;
        }
        else if (tipoIns == "prompt"){
            numero = parseInt(prompt("inserisci un numero"));
        }

        if (lista.includes(numero)){
            validazione = true
        }
        else {
            lista.push(numero)
        }

    } while(validazione);
    
    return lista;
}

// end sez funzioni

var listaCasuali = [];

for ( var i = 0; i<16; i++) {

    var numero = Math.floor(Math.random() * 100) + 1;

    if ( listaCasuali.includes(numero) ){
            do{
                numero = Math.floor(Math.random() * 100) + 1;
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
var numero;

var tentativi = parseInt(prompt("quanti tentativi vuoi avere?"));
alert("avrai " + tentativi + " tentativi");

while ( j < tentativi && sconfitta == false ){

    verifica(numSceltoLista, "prompt" );

    if ( listaCasuali.includes(numSceltoLista[j]) ){
        sconfitta = true
    }

    j++;
}

console.log(numSceltoLista);

if (j == tentativi){
    alert("hai vinto")
}
else{
    alert("BOOM!! hai perso al " + j + " tentativo");   
}


//     // SEZIONE PER INSERIMENTO NUMERI UTENTE SENZA UTILIZZO DI FUNZIONE
// numScelto = parseInt(prompt("inserisci un numero"));
//     // controllo non ci siano duplicati
//     if ( numSceltoLista.includes(numScelto) ){

//         do{
//             numScelto = parseInt(prompt("inserisci un numero"));
//         } while ( numSceltoLista.includes(numScelto) );
        
//         numSceltoLista.push(numScelto)
//         console.log(numSceltoLista)
//     }
//     else {
//         numSceltoLista.push(numScelto)
//         console.log(numSceltoLista)
//     }


