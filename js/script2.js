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

        if ( lista.includes(numero) ){
            validazione = true
        }
        else {
            lista.push(numero)
        }

    } while(validazione);
    
    return lista;
}