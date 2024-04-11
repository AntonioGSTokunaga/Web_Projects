//Teste 
console.log ("Olá Mundo!");

//Declaração de variáveis
var nome = "André";
console.log(nome);

var idade = 25;
console.log(idade);

var estudante = true;
console.log(estudante);

//Operadores
var x = 10;
var y = 5;
console.log("x: "+ x, "y: "+ y);

var soma = x+y;
console.log(soma);

var subtracao = x-y;
console.log(subtracao);

var multiplicacao = x*y;
console.log(multiplicacao);

var divisao = x/y;
console.log(divisao);

var modulo = x%y;
console.log(modulo);

//selecionando e manipulando elementos HTML
var paragrafos = document.getElementsByTagName('p');
console.log(paragrafos[0]);
var paragrafo = paragrafos[0];
console.log(paragrafo);

console.log(paragrafo.innerHTML); 
paragrafo.innerHTML = 'A';
paragrafo.style.color = 'red';

//Adicionando evento de clique ao botão
var botao1 = document.getElementById("botao1");
console.log(botao1);

botao1.addEventListener("click", function(){
    alert("The button has been clicked and you were poked hahaha");
});

//Alterando outro elemento a partir do evento do botão
var paragrafo1 = document.getElementById("paragrafo");
var botao2 = document.getElementById("botao2");

botao2.addEventListener("click", () => {
    paragrafo1.innerHTML = "Text changed with Javascript";
})

var paragrafo2 = document.getElementById("paragrafo1");
var botao3 = document.getElementById("botao3");

botao3.addEventListener("click", () => {
    paragrafo2.innerHTML = "I'M JOKING WITH U HAHAHA";
    paragrafo2.style.color = 'red';
})

var paragrafos = document.getElementsByClassName("paragrafos");
console.log(paragrafos);

for (var indice = 0; indice < paragrafos.length; indice++){
    paragrafos[indice].style.color = "red";
    paragrafos[indice].innerHTML = "WE ARE THE SAME BUT I'M THE " +  (indice + 1);
}
