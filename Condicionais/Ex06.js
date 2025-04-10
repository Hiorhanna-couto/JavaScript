//01. domingo 
//02 segunda
//03 . terca

var prompt = require('prompt-sync')();

let dia = Number( prompt ("Digite um numero do dia da semana : "));

switch(dia){
    case 1 :
     console.log("O dia escolhido foi: Domingo")
     break;
    case 2 :
     console.log("O dia escolhido foi: Segunda")
     break;
    case 3 :
     console.log("O dia escolhido foi: terça")
     break;
    case 4 :
     console.log("O dia escolhido foi: Quarta")
     break;
    case 5 :
     console.log("O dia escolhido foi: Quinta")
     break;
    case 6 :
     console.log("O dia escolhido foi: sexta")
     break;

     case 7:
        console.log("O dia escolhido foi: Sábado");
    break;


    default:
        console.log("Dado inválido! 😢");
}



