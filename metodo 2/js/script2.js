// condizioni per selezionare difficoltà
// 0 - mum 1 -100
// 1 - mum 1 -80
// 2 - mum 1 -50

do{
    var difficolta = parseInt(prompt("seleziona la difficoltà 0 = facile 1= medio 2=difficile")); 
} while ( difficolta != 0 && difficolta != 1 & difficolta != 2 );

var maxNum;
var minNum; 

switch (difficolta) {
    case 1:
        maxNum = 80;
        minNum = 1; 
    break;

    case 2:
        maxNum = 50;
        minNum = 1; 
    break;

    default:
        maxNum = 100;
        minNum = 1; 
    break;
}

// inserisco numeri random non ripetuti

var listaCasuali = [];

while ( listaCasuali.length < 16 ){

    var numero = numRandomGen (minNum, maxNum);
    if ( listaCasuali.includes(numero) == false ){
        listaCasuali.push(numero)
    }

}

console.log(listaCasuali);


// funzione per gereare n random entro un range
function numRandomGen (min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numero;
}

// inserimento di numeri da utente x maxNum - 16 volte

var listaTentativi = [];
var sconfitta = false;

while ( listaTentativi.length < (maxNum - 16) & sconfitta == false ){

    var numInserito = parseInt( prompt("inserisci un numero da 1 a " + maxNum) );

    if ( numInserito < 0 || numInserito > maxNum || isNaN(numInserito) ){
        alert("il numero deve essere compreso tra 1 e " + maxNum )
    }
    else if (listaTentativi.includes(numInserito)){
        alert("numero già presente")
    }
    else if ( listaCasuali.includes(numInserito) ){
        sconfitta = true
    }
    else {
        listaTentativi.push(numInserito)
        console.log(listaTentativi)
    }

}

if ( sconfitta == true){
    alert("hai perso al " + listaTentativi.length + " tentativo")
}
else {
    alert("hai vinto");
}