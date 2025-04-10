//Verificar se um aluno foi aprovado
var prompt = require('prompt-sync')();


let Nota  = Number(prompt("Digite sua nota :"));

//nota maior de = 7 :)
//nota meno de = 6 :(

if (Nota >= 7 ){
    console.log ("Voce foi aprovado :)");
}else if (Nota){
    console.log ("Voce nao foi aprovado :(");

}
