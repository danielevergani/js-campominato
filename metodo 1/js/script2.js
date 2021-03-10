// inserisco numeri random non ripetuti

var listaCasuali = [];

while ( listaCasuali.length < 16 ){

    var numero = Math.floor(Math.random() * 100) + 1;
    if ( listaCasuali.includes(numero) == false ){
        listaCasuali.push(numero)
    }

}

console.log(listaCasuali);