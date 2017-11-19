// ----Inputs-prompt-confirm----
// ----prompt----
// sintaxe = prompt(parametros);
// pede o nome do usuario e armazena em uma variaver. Se o usuario clicar para canselar o valor passa a ser indefinido
var nome = prompt("Insira seu nome");
// mostra o que tem na variavel nome
alert(nome);
// ----confirm----
// sintaxe = confirm(parametros)
// o confirm só armazana valor do tipo boleano (bolean)
// pergunta ao usuario se ele quer contitiar a executar o cosigo e armazena o valor em uma variavel
var questao = confirm("Desaja continuar executando o codigo?");
// trabalha com condicional, se o for sim o programa continua, se nao, o programa para
if (questao == true) {
	alert("a resposta foi sim. Iremos continuar o codigo");
}
else {
	alert("a resposta foi nao.")
}