// condizioni per selezionare difficoltà
// 0 - mum 1 -100
// 1 - mum 1 -80
// 2 - mum 1 -50

do{
    var difficoltà = parseInt(prompt("seleziona la difficoltà 0 = facile 1= medio 2=difficile")); 
} while ( difficoltà != 0 && difficoltà != 1 & difficoltà != 2 );

switch (difficoltà) {
    case 1:
       var maxNum = 80;
       var minNum = 1; 
    break;

    case 2:
       var maxNum = 50;
       var minNum = 1; 
    break;

    default:
        var maxNum = 100;
        var minNum = 1; 
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
