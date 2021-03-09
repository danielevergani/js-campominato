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