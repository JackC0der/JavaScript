// ----Funcoes----
//sintaxe = function  nomeDaFuncao(parametros) {codigo}
// cria funçao sem parametros
function exemplo() {
	alert("JavaScript é legal")
}
// chama funçao
exemplo();
// cria funçao que recebe o parametro nome e depois o coloca em uma frase
function olaNome(name) {
	alert("Ola, " + name)
}
// chama funçao com parametro
olaNome("Jack");
// cria funçao com mais de um parametro
function olaNomeIdade(nome, idade) {
	alert("Ola " + nome + ", sua idade é " + idade)
}
// chama a funçao com mais de um parametro
olaNomeIdade("Jack", 14);
// funçao com return
// o nome return ja é auto explicativo... A funçao para a "retornar" o que for solicitado. É importante falar que a funçao deixa de ser executada a partir do momento que encontra o return
function returnSomaExemplo (numero1, numero2) {
	return numero1 + numero2;
}
// atribui o valor resultante da funçao a uma variavel, ou seja, o que a funçao retornou  como resultado
var soma = returnSomaExemplo(1,2)
// OBS 1: Parametro funciona da mesma maneira que uma variavel
// OBS 2: Podemos chamar a mesma funçao com parametros diferentes quantas vezes quisermos
// OBS 3: Se nao for dado os parametros necessarios para a funçao, o parametro ganha valor indefinido
