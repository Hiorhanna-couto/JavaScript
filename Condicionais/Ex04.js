//Verificar se uma senha digitada está correta
var prompt = require('prompt-sync')();

let senha = Number (prompt ("Digite sua Senha :"));
let  senhaConfirmada = Number ( prompt ("Confirma sua Senha :") );

if ( senhaConfirmada == senha ){
    console.log("A senha esta correta");
    }else{
        console.log("Senha invalida");
    }


