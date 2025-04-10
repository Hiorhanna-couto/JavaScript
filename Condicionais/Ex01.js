// 01.Verificar se um número é positivo, negativo ou zero.
  
var prompt = require('prompt-sync')();

let numero = Number (prompt("Digite um Numero :"));

if (numero >= 0){
  console.log("Esse numero e positivo ! ")

}else if ( numero < 0){
    console.log("Esse numero e negativo ! ")

}else (numero != 0 ) 
 