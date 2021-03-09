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
    
    return lista, numero;
}

// genero x num casuali univoci

var listaCasuali = [];
var difficolta = 10;
    

for ( var i = 0; i<10; i++) {
    verifica(listaCasuali, "random" );
}

console.log(listaCasuali);

// var numero = Math.floor(Math.random() * 100) + 1;

//     // SEZIONE PER CREAZIONE LISTA DI NUMERI CASUALI SENZA UTILIZZO DI FUNZIONE
//     if ( listaCasuali.includes(numero) ){
//             do{
//                 numero = Math.floor(Math.random() * 100) + 1;
//             } while (listaCasuali.includes(numero));
//             listaCasuali.push(numero)
//         }
//     else {
//         listaCasuali.push(numero)
//     }

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
    console.log(j);
}

console.log(numSceltoLista);

if (j == tentativi){
    alert("hai vinto")
}
else{
    alert("BOOM!! hai perso al " + j + " tentativo");   
}



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


