// inserisco numeri random non ripetuti

var listaCasuali = [];
var numero;
while ( listaCasuali.length < 16 ){

    numero = inserimento ("random");
    if ( listaCasuali.includes(numero) == false ){
        listaCasuali.push(numero)
    }

}

console.log(listaCasuali);


function inserimento (tipoIns){

    var numero;
 
    if (tipoIns == "random"){
        numero = Math.floor(Math.random() * 100) + 1;
    }
    else if (tipoIns == "prompt"){
        numero = parseInt(prompt("inserisci un numero"));
    }

    return numero;
}

var sconfitta = false;
var numSceltoLista = [];
var j = 0;
var numeroIns;

var tentativi = parseInt(prompt("quanti tentativi vuoi avere?"));
alert("avrai " + tentativi + " tentativi");

while ( numSceltoLista.length < tentativi && sconfitta == false ){

    numeroIns = inserimento("prompt");

    if ( listaCasuali.includes(numeroIns) ){
        sconfitta = true
    }
    else if (numSceltoLista.includes(numeroIns)){
        alert("numero già presente")
    }
    else {
        numSceltoLista.push(numeroIns)
    }
}

console.log(numSceltoLista);

if (numSceltoLista.length == tentativi){
    alert("hai vinto")
}
else{
    alert("BOOM!! hai perso dopo " + numSceltoLista.length + " tentativi");   
}
