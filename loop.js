// ----Loops for, while, do-while----
// ----For----
// estrutura = for (antes do codigo;condiçao;depois do codigo) {codigo}
// da alert de 1 a 3
for (a=0;a <= 3;a++){ // podemos entender como: a é o nosso contador... ele é interpretado uma vez antes do loop iniciar, ou seja, nosso contador é definido. No meio esta a condiçao para que o codigo aconteça. Ele fala que se a for menor ou igual a 3, o codigo vai rodar. No final esta o codigo que é executado no final do codigo que esta dentro do loop. Ele adiciona 1 a variavel a.
	alert(a);
}
// os argumento 1 e 3 são opicionais (podemos usar um sem o outro). Assim podendo ser definidos (executado) antes ou depois do loop
// define contador
var a = 0;
// loop conta de 0 a 3
for (;a<=3;) {
	alert(a);
	var a = a + 1;
}
// OBS: tambem podemos executar mais comandos no argumento (separando eles por apenas uma ",")
// ----While----
// sintaxe = while (condiçao) {codigo}
//define variaveis para teste
var a = 0;
//podemos entender o while como 'enquanto', ou seja, enquanto tal condiçao for verdadeira faça isso.
// loop conta de 0 a 3
while (a <= 3) {
	alert(a); // <--- enquanto a for menor ou igual a 3 faz isso
	a = a + 1;
}
// ----Do-While---
// define as variaveis para teste
var a = 0;
// sintaxe = do {codigo} while (condiçao)
// o do while funciona da mesma forma que o while, porem com uma sintaxe diferente
// loop conta de 0 a 3
do {
	alert(a); // <--- enquanto a for menor ou igual a 3 faz isso
	a = a +1;
}
while (a<=3);
