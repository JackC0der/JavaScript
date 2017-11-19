// cria objeto como se fosse um dicio
var pessoal = {
	nick:"jack",
	 idade:14
};
alert('dicionario '+pessoal["nick"]) // mostra propriedade de uma chave
alert(pessoal.nick.length) // mostra quantidade de itens em um objeto ou a quantidade de caracteres de uma string

// cria objeto construtor
// nomeDoObjeto(propriedades)
function pessoa(nick,idade) { 
	this.nick = nick; // thiss é equivalente ao self do python
	this.idade = idade;
	 // criamos uma funçao para nosso objeto
	this.TrocarNick = function (NovoNick) {
		this.nick = NovoNick;
	}
}
// cria objeto pessoa com as propriedades definidas
var pessoa1 = new pessoa('jack',14);
alert("Fuçao "+ pessoa1.nick);
// chamamos a funçao do objeto
pessoa1.TrocarNick(prompt(" Novo Nick")) 
alert('Novo Nick : ' + pessoa1.nick);

