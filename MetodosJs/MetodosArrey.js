//.length () => tamanho

//let frutas = ["Maça","Banana","kiwi","carambola","Morango","Ameixa","abacaxi","roma","caqui","embu","uva roxa","jabuticaba","abacate","seriguela" ];

//.log(frutas.length);


//let numeros =[20,4,3]
//console.log(numeros.length);

//*/*************************************************************************************** */

//.reverse () =>
//let numeros = [70,100,120,1000];

///numeros.reverse();

//console.log(numeros)

//***************************************************************************************** */

//let nomes =[ "Anna","valdemir ", "Edson","ana ","hiorhanna"];

// .push() => Adiciona no final
//nomes.push("dani")

//.pop ()= > remover no final   
//nomes.pop()
//console.log(nomes);

//.unshift() => adicionar no inicio
//nomes.unshift("pamela")

//.splice =>Adicsona ou remove elemetos 
//console.log(nomes.splice(2,1));
//console.log(nomes);
 
//console.log 
//********************************************************************* */

// let nomesAnimais = ["julia","Meg","Mel", "kiare", "lola","sol"]
// //.Includes()=> se existe no array, se existir ele retornara true

// console.log(nomesAnimais.includes("bob"));

//********************************************************************* */

// let valores = [ 30, 55 ,90,66];
// //quero os valores maiores que 50 
// let maiores = valores.filter(num => num < 90);
//  console.log(maiores)

//********************************************************************* */
//.map()=> DEfinicao : metodo usado em arrays que permite trasformar os elemeto da array original em novos valores, criando um novo array, sem m

//lista nome de alunos e notos 
let alunos = [  
   {nome:"Clara",nota:8},
   {nome:"laura" ,nota:9},
   {nome:"hiorhanna",nota:10},
   {nome:"Isabelle",nota:4},
   {nome:"Isaac",nota:9},
   {nome:"Sillas",nota:9},
   {nome:"richerd",nota:9},
   {nome:"bryan",nota:9},

];
 //lista de nomes
let alunoNomes = alunos.map(aluno => aluno.nome );

console.log(alunoNomes)


//Funcao:
// let alunoNomesDois = alunos.map(function(aluno){
    
//     return aluno.nome;
// });
// //console.log(alunoNomesDois)

// let alunoNota = alunos.map(aluno => aluno.nota)

// console.log(alunoNota);

//******************************************************************************** */
 
//2. Criar um array com messagens  personalizados 

// let nomes = ["Caio","Dani","Ryan","Vinisios"];

// //Ola caio

// let messagens = nomes.map(itemDoArrayNomes => `Ola, sua feio(a) ${itemDoArrayNomes}`);

// console.log(messagens);



//**************************************************************************** */

//3. pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelle","Emilly","hiorhanna","Machado","Guilherme"]

// let inicialNomes = nomes.map(Element => Element[0] );
 
// console.log(inicialNomes);

//************************************************************************************ */

//4. lista e Email 
//  let  Emails = [
//    "Hiorhana@gamil.com " ,"pedro@hotmail.com" ,"julia@outlook.com"

//  ]
// let dominios = Emails.map(Element => Element.split("@")[1]);

// console.log(dominios);

//************************************************************************************* */






















