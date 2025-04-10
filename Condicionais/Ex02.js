//02.Verificar se o usuário pode tirar carteira de motorista

//qual a sua idade?
//voce e maior de idade , entao , pode tirar a cateira .
// senao voce nao pode tirar a cateira de motorista .

//pessoas maiores de idade (>=18)
var prompt = require('prompt-sync')();

let idade = Number (prompt("Ola, digite sua idade:"));






if (idade >= 18) {
    console.log ("Voce podera tirar a cateira :)");
}else if (idade < 18){
    console.log("Voce nao podera tirar a cateira :( ");

}else {
    console.log("Essa informacao nao e avaliada !");
}