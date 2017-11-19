// -------Arrays-------
// cria uma liata simples
var listaSim = new Array('W',"E","B");
// acessa um item da lista
alert(listaSim[0]);
// altera um item da lista
listaSim[0] = 'M';
// declara quantidade items em uma array onde é poasivel definilos depois
var ListaSim = new Array(3);
ListaSim[0] = 'W';
ListaSim[1] = 'E';
ListaSim[2] = 'B';
// array limpa
var listasim = new Array();
listasim[0] = "W";
listasim[1] = "E";
listasim[2] = "B";
// criando array literal
var Listasim = ["W","E","B"];
// ------Array built-in Functions-----
// mostra a quantidade de itens de uma array
alert(listaSim.length);
// junta (concatena) uma array com outra array e as coloca em uma nova array
var JuntaList = listaSim.concat(ListaSim);
// Arrays associaveis
//cria uma array (dicionario) sem nada
var pessoa = [];
// adiciona um item ao dicionario (objeto)
pessoa["nome"] = "jack";
pessoa["idade"] = 14;
// printa o nome
alert(pessoa["nome"]);


